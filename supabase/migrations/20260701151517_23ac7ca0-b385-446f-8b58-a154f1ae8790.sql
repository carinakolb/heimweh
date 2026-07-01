
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  thrivecart_order_id TEXT NOT NULL UNIQUE,
  customer_name TEXT,
  customer_email TEXT NOT NULL,
  amount_cents INTEGER,
  currency TEXT DEFAULT 'CHF',
  product_name TEXT,
  contract_pdf_path TEXT,
  invoice_pdf_path TEXT,
  welcome_email_sent_at TIMESTAMPTZ,
  raw_payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.orders TO service_role;

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- No policies for anon/authenticated: table is service-role only.

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage: order-documents bucket is private, service-role only.
-- No policies for anon/authenticated needed; signed URLs handle download access.
