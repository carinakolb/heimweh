import { createFileRoute } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import {
  generateRahmenvertragPdf,
  generateRechnungPdf,
} from '@/lib/pdf/heimweh-pdfs.server'
import { sendTransactionalEmailInternal } from '@/lib/email/send-internal.server'

const CALENDLY_URL = 'https://calendly.com/carina-kolb/vibe-call'
const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24 * 30 // 30 days

// ThriveCart posts application/x-www-form-urlencoded with a `thrivecart_secret`
// field (the "Notification/Webhook Secret" from the ThriveCart dashboard).
// We accept both form-encoded and JSON payloads for robustness / testing.

const PayloadSchema = z.object({
  event: z.string().optional(),
  order_id: z.union([z.string(), z.number()]).optional(),
  invoice_id: z.union([z.string(), z.number()]).optional(),
  customer_email: z.string().email().optional(),
  email: z.string().email().optional(),
  customer_first_name: z.string().optional(),
  customer_last_name: z.string().optional(),
  customer_name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  order_amount: z.union([z.string(), z.number()]).optional(),
  base_product_name: z.string().optional(),
  product_name: z.string().optional(),
  currency: z.string().optional(),
  thrivecart_secret: z.string().optional(),
  mode: z.string().optional(),
})

type Payload = z.infer<typeof PayloadSchema>

function pickName(p: Payload): { fullName: string; firstName: string } {
  const full =
    p.customer_name ||
    [p.customer_first_name || p.first_name, p.customer_last_name || p.last_name]
      .filter(Boolean)
      .join(' ') ||
    ''
  const firstName = (p.customer_first_name || p.first_name || full.split(' ')[0] || '').trim()
  return { fullName: full.trim(), firstName }
}

function pickEmail(p: Payload): string | undefined {
  return p.customer_email || p.email
}

function pickOrderId(p: Payload): string {
  return String(p.order_id ?? p.invoice_id ?? '')
}

function pickAmount(p: Payload): number | undefined {
  const raw = p.order_amount
  if (raw === undefined || raw === null || raw === '') return undefined
  const n = typeof raw === 'number' ? raw : parseFloat(String(raw))
  if (!Number.isFinite(n)) return undefined
  // ThriveCart sends amount in dollars/francs (e.g. 1100 or 1100.00), NOT cents.
  return n
}

async function parseBody(request: Request): Promise<{ raw: string; data: Payload }> {
  const contentType = request.headers.get('content-type') ?? ''
  const raw = await request.text()
  let obj: Record<string, unknown> = {}
  if (contentType.includes('application/json')) {
    try {
      obj = JSON.parse(raw)
    } catch {
      throw new Response('Invalid JSON', { status: 400 })
    }
  } else {
    // form-encoded (ThriveCart default) or unknown -> attempt form parse
    const params = new URLSearchParams(raw)
    for (const [k, v] of params.entries()) obj[k] = v
  }
  const parsed = PayloadSchema.safeParse(obj)
  if (!parsed.success) {
    throw new Response(`Invalid payload: ${parsed.error.message}`, { status: 400 })
  }
  return { raw, data: parsed.data }
}

function timingSafeEqualStr(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return result === 0
}

export const Route = createFileRoute('/api/public/thrivecart-webhook')({
  server: {
    handlers: {
      GET: async () =>
        Response.json({ ok: true, hint: 'POST from ThriveCart webhook.' }),
      POST: async ({ request }) => {
        const secret = process.env.THRIVECART_WEBHOOK_SECRET
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!secret || !supabaseUrl || !supabaseServiceKey) {
          console.error('thrivecart-webhook: missing env')
          return new Response('Server not configured', { status: 500 })
        }

        let parsed: { raw: string; data: Payload }
        try {
          parsed = await parseBody(request)
        } catch (err) {
          if (err instanceof Response) return err
          return new Response('Bad request', { status: 400 })
        }
        const { data: payload } = parsed

        // Verify the shared secret ThriveCart posts with the payload
        const provided = payload.thrivecart_secret ?? ''
        if (!provided || !timingSafeEqualStr(provided, secret)) {
          console.warn('thrivecart-webhook: invalid secret')
          return new Response('Unauthorized', { status: 401 })
        }

        // Only fire welcome email for successful orders
        const event = (payload.event ?? '').toLowerCase()
        const isOrderSuccess =
          event === 'order.success' || event === 'order_success' || event === '' // fallback
        if (!isOrderSuccess) {
          return Response.json({ ok: true, ignored: event })
        }

        const orderId = pickOrderId(payload)
        const email = pickEmail(payload)
        if (!orderId || !email) {
          console.warn('thrivecart-webhook: missing order_id or email')
          return new Response('Missing order_id or email', { status: 400 })
        }

        const { fullName, firstName } = pickName(payload)
        const amount = pickAmount(payload) ?? 1100
        const productName = payload.base_product_name || payload.product_name || 'HEIMWEH Begleitung'
        const currency = (payload.currency || 'CHF').toUpperCase()

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Idempotency: if welcome email already sent for this order, ack success
        const { data: existing } = await supabase
          .from('orders')
          .select('id, welcome_email_sent_at')
          .eq('thrivecart_order_id', orderId)
          .maybeSingle()
        if (existing?.welcome_email_sent_at) {
          return Response.json({ ok: true, duplicate: true })
        }

        // Generate PDFs
        let contractPdf: Uint8Array
        let invoicePdf: Uint8Array
        try {
          contractPdf = await generateRahmenvertragPdf(fullName)
          invoicePdf = await generateRechnungPdf({
            name: fullName,
            orderId,
            amountCHF: amount,
            productName,
          })
        } catch (err) {
          console.error('thrivecart-webhook: pdf generation failed', err)
          return new Response('PDF generation failed', { status: 500 })
        }

        // Upload to private storage bucket
        const contractPath = `${orderId}/Rahmenvertrag_Heimweh.pdf`
        const invoicePath = `${orderId}/Rechnung_Heimweh_${orderId}.pdf`

        const uploads = await Promise.all([
          supabase.storage
            .from('order-documents')
            .upload(contractPath, contractPdf, {
              contentType: 'application/pdf',
              upsert: true,
            }),
          supabase.storage
            .from('order-documents')
            .upload(invoicePath, invoicePdf, {
              contentType: 'application/pdf',
              upsert: true,
            }),
        ])
        for (const up of uploads) {
          if (up.error) {
            console.error('thrivecart-webhook: upload failed', up.error)
            return new Response('Storage upload failed', { status: 500 })
          }
        }

        const [{ data: contractSigned }, { data: invoiceSigned }] = await Promise.all([
          supabase.storage.from('order-documents').createSignedUrl(contractPath, SIGNED_URL_TTL_SECONDS),
          supabase.storage.from('order-documents').createSignedUrl(invoicePath, SIGNED_URL_TTL_SECONDS),
        ])
        if (!contractSigned?.signedUrl || !invoiceSigned?.signedUrl) {
          console.error('thrivecart-webhook: signed url creation failed')
          return new Response('Signed URL failed', { status: 500 })
        }

        // Upsert order row
        const { error: upsertErr } = await supabase
          .from('orders')
          .upsert(
            {
              thrivecart_order_id: orderId,
              customer_name: fullName || null,
              customer_email: email,
              amount_cents: Math.round(amount * 100),
              currency,
              product_name: productName,
              contract_pdf_path: contractPath,
              invoice_pdf_path: invoicePath,
              raw_payload: payload as unknown as Record<string, unknown>,
            },
            { onConflict: 'thrivecart_order_id' },
          )
        if (upsertErr) {
          console.error('thrivecart-webhook: order upsert failed', upsertErr)
        }

        // Enqueue welcome email
        try {
          await sendTransactionalEmailInternal({
            templateName: 'heimweh-welcome',
            recipientEmail: email,
            idempotencyKey: `welcome-${orderId}`,
            templateData: {
              firstName,
              orderId,
              contractUrl: contractSigned.signedUrl,
              invoiceUrl: invoiceSigned.signedUrl,
              calendlyUrl: CALENDLY_URL,
              amountCHF: amount,
            },
          })
        } catch (err) {
          console.error('thrivecart-webhook: email enqueue failed', err)
          return new Response('Email enqueue failed', { status: 500 })
        }

        await supabase
          .from('orders')
          .update({ welcome_email_sent_at: new Date().toISOString() })
          .eq('thrivecart_order_id', orderId)

        return Response.json({ ok: true })
      },
    },
  },
})