import React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  firstName?: string
  orderId?: string
  contractUrl?: string
  invoiceUrl?: string
  calendlyUrl?: string
  amountCHF?: number
}

const Email = ({
  firstName,
  orderId,
  contractUrl,
  invoiceUrl,
  calendlyUrl,
  amountCHF,
}: Props) => {
  const greeting = firstName ? `Schoen, dass du da bist, ${firstName}.` : 'Schoen, dass du da bist.'
  return (
    <Html lang="de" dir="ltr">
      <Head />
      <Preview>Willkommen bei HEIMWEH. Dein Weg zurueck zu dir beginnt jetzt.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerBand}>
            <Text style={eyebrow}>HEIMWEH</Text>
            <Heading style={h1}>DER WEG ZURUECK ZU DIR</Heading>
            <Text style={headerSub}>by Carina Kolb</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={h2}>
              {greeting}
            </Heading>
            <Text style={paragraph}>
              Deine Anmeldung ist angekommen. Ich freue mich sehr, dich auf deinem Weg
              zu begleiten.
            </Text>
            <Text style={paragraph}>
              Im Anhang findest du deinen Rahmenvertrag und die Rechnung. Bitte lies den
              Rahmenvertrag in Ruhe durch und bringe ihn unterschrieben zur ersten Session mit.
            </Text>

            <Hr style={hr} />

            <Heading as="h3" style={h3}>
              DEINE DOKUMENTE
            </Heading>

            {contractUrl ? (
              <Section style={{ marginTop: '16px' }}>
                <Button href={contractUrl} style={btnPrimary}>
                  Rahmenvertrag herunterladen
                </Button>
              </Section>
            ) : null}

            {invoiceUrl ? (
              <Section style={{ marginTop: '10px' }}>
                <Button href={invoiceUrl} style={btnSecondary}>
                  Rechnung herunterladen
                </Button>
              </Section>
            ) : null}

            <Text style={muted}>
              Die Links sind 30 Tage gueltig. Speichere die PDFs am besten gleich bei dir ab.
            </Text>

            <Hr style={hr} />

            <Heading as="h3" style={h3}>
              NAECHSTER SCHRITT: DEIN VIBECALL
            </Heading>
            <Text style={paragraph}>
              Damit wir starten koennen, buche dir jetzt deinen persoenlichen Vibecall mit mir.
              Wir schauen gemeinsam, wo du stehst und wie unser Weg aussieht.
            </Text>
            <Section style={{ marginTop: '16px' }}>
              <Button href={calendlyUrl ?? 'https://calendly.com/carina-kolb/vibe-call'} style={btnPrimary}>
                Buche einen Vibecall
              </Button>
            </Section>

            <Hr style={hr} />

            <Heading as="h3" style={h3}>
              DEINE BESTELLUNG
            </Heading>
            <Text style={paragraph}>
              Bestellnummer: <strong>{orderId ?? '-'}</strong>
              <br />
              Betrag: <strong>CHF {(amountCHF ?? 1100).toFixed(2)}</strong> (bezahlt via ThriveCart)
            </Text>

            <Hr style={hr} />

            <Text style={muted}>
              Falls du Fragen hast, antworte einfach auf diese Mail oder erreiche mich unter
              079 612 64 15 oder{' '}
              <Link href="https://instagram.com/souveraen.sein" style={link}>
                @souveraen.sein
              </Link>
              .
            </Text>

            <Text style={signature}>Bis bald,<br />Carina</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Souveraen sein . Eichstutz 12 . 8634 Hombrechtikon
              <br />
              <Link href="https://souveraensein.ch" style={footerLink}>
                souveraensein.ch
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// ---------- Styles ----------
const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  color: '#281c12',
  margin: 0,
  padding: 0,
}

const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#f8f3e8',
}

const headerBand: React.CSSProperties = {
  backgroundColor: '#1c120a',
  padding: '40px 30px 32px',
  textAlign: 'center' as const,
}

const eyebrow: React.CSSProperties = {
  color: '#c49e5c',
  letterSpacing: '0.4em',
  fontSize: '11px',
  fontWeight: 500,
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
}

const h1: React.CSSProperties = {
  color: '#f8f3e8',
  fontSize: '22px',
  letterSpacing: '0.18em',
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.3,
}

const headerSub: React.CSSProperties = {
  color: '#dec082',
  fontStyle: 'italic' as const,
  fontSize: '13px',
  marginTop: '10px',
}

const content: React.CSSProperties = {
  padding: '32px 30px 20px',
}

const h2: React.CSSProperties = {
  color: '#1c120a',
  fontSize: '22px',
  fontWeight: 400,
  letterSpacing: '0.04em',
  margin: '0 0 20px 0',
  lineHeight: 1.3,
}

const h3: React.CSSProperties = {
  color: '#c49e5c',
  fontSize: '12px',
  letterSpacing: '0.28em',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  margin: '0 0 6px 0',
}

const paragraph: React.CSSProperties = {
  color: '#281c12',
  fontSize: '15px',
  lineHeight: 1.7,
  margin: '10px 0',
  fontWeight: 300,
}

const muted: React.CSSProperties = {
  color: '#6e5c48',
  fontSize: '13px',
  lineHeight: 1.6,
  fontStyle: 'italic' as const,
  margin: '14px 0 0 0',
}

const btnPrimary: React.CSSProperties = {
  backgroundColor: '#1c120a',
  color: '#f8f3e8',
  padding: '14px 24px',
  borderRadius: '2px',
  textDecoration: 'none',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  display: 'inline-block',
  border: '1px solid #c49e5c',
  fontWeight: 500,
}

const btnSecondary: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#1c120a',
  padding: '14px 24px',
  borderRadius: '2px',
  textDecoration: 'none',
  fontSize: '13px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  display: 'inline-block',
  border: '1px solid #1c120a',
  fontWeight: 500,
}

const hr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid rgba(196, 158, 92, 0.35)',
  margin: '30px 0 24px',
}

const link: React.CSSProperties = {
  color: '#c49e5c',
  textDecoration: 'underline',
}

const signature: React.CSSProperties = {
  fontStyle: 'italic' as const,
  fontSize: '16px',
  color: '#362618',
  marginTop: '26px',
  lineHeight: 1.4,
}

const footer: React.CSSProperties = {
  backgroundColor: '#1c120a',
  padding: '22px 30px',
  textAlign: 'center' as const,
}

const footerText: React.CSSProperties = {
  color: '#dec082',
  fontSize: '11px',
  lineHeight: 1.7,
  margin: 0,
  letterSpacing: '0.05em',
}

const footerLink: React.CSSProperties = {
  color: '#dec082',
  textDecoration: 'underline',
}

export const template = {
  component: Email,
  subject: 'Willkommen bei HEIMWEH, dein Weg beginnt',
  displayName: 'HEIMWEH Willkommen',
  previewData: {
    firstName: 'Carina',
    orderId: 'TC-12345',
    contractUrl: 'https://example.com/rahmenvertrag.pdf',
    invoiceUrl: 'https://example.com/rechnung.pdf',
    calendlyUrl: 'https://calendly.com/carina-kolb/vibe-call',
    amountCHF: 1100,
  },
} satisfies TemplateEntry