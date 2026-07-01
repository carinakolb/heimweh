So richten wir die automatische Willkommensmail nach dem Kauf ein. Es sind zwei Handgriffe von dir in ThriveCart nötig, den Rest baue ich fertig.

## Was du in ThriveCart tust

**1. Secret Word setzen (falls noch nicht vorhanden)**
- ThriveCart Dashboard → Settings → API & Webhooks → Notification/Webhook Settings
- Feld "Secret word": ein beliebiges, langes Passwort eintragen (z.B. 30+ zufällige Zeichen). Kopieren.
- Speichern.

**2. Webhook URL eintragen**
- Im gleichen Bereich "Notification URL" auf folgende Adresse setzen:
  `https://souveraensein.ch/api/public/thrivecart-webhook`
- Speichern.

**3. Success URL für das HEIMWEH-Produkt setzen**
- Products → HEIMWEH → Settings → "Behaviour after purchase"
- Success URL: `https://souveraensein.ch/danke?name={{customer.first_name}}&email={{customer.email}}&order={{order.id}}`

## Was ich mache, sobald du das Secret Word gibst

- Ich hinterlege das Secret Word sicher als Umgebungsvariable (`THRIVECART_WEBHOOK_SECRET`). Du gibst es nur einmal ein, es liegt nie im Code.
- Dann wird jede Bestellung automatisch:
  1. von ThriveCart per Webhook an die Seite gemeldet,
  2. auf Echtheit geprüft (Secret Word abgleichen),
  3. Rahmenvertrag und Rechnung als PDF generiert,
  4. sicher gespeichert und mit signierten 30-Tage-Links versehen,
  5. per Willkommensmail von `notify.souveraensein.ch` verschickt.
- Doppelte Webhooks werden ignoriert (Idempotenz pro Bestell-ID).
- Alle Texte ohne lange Gedankenstriche.

## Ablauf danach (Kundensicht)

1. Kauf auf ThriveCart abgeschlossen
2. Weiterleitung auf `/danke` mit persönlicher Ansprache und Calendly-Link
3. Innerhalb weniger Sekunden Willkommensmail mit Rahmenvertrag + Rechnung im Postfach

## Technische Notizen (nur zur Info)

- Route: `src/routes/api/public/thrivecart-webhook.ts` (bereits gebaut)
- Template: `src/lib/email-templates/heimweh-welcome.tsx` (registriert)
- Storage-Bucket: `order-documents` (privat, signierte URLs)
- Tabelle: `orders` speichert Kunde, Betrag, PDF-Pfade, `welcome_email_sent_at`
- Absender-Domain `notify.souveraensein.ch` ist verifiziert

## Nächster Schritt

Sobald du das Secret Word aus ThriveCart hast, sag Bescheid ("Los" reicht). Ich öffne dann das sichere Eingabefeld, wo du es einfügst, und aktiviere das Ganze.
