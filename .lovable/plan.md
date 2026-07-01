## Ziel

Sobald jemand über ThriveCart HEIMWEH kauft, bekommt er automatisch eine schön gestaltete Willkommens-E-Mail von `hallo@notify.souveraensein.ch` mit Rahmenvertrag und Rechnung als PDF sowie dem Calendly-Link zum Vibecall.

## Ablauf (was passiert nach dem Klick auf "Kaufen")

1. Kunde bezahlt bei ThriveCart.
2. ThriveCart sendet einen Webhook an unsere neue öffentliche URL `https://souveraensein.ch/api/public/thrivecart-webhook`.
3. Der Webhook prüft die Signatur, generiert Rahmenvertrag und Rechnung als PDF, lädt beide in Lovable Cloud Storage hoch (privater Bucket, signierte Links mit 30 Tagen Gültigkeit).
4. Willkommens-Mail wird in die Sende-Warteschlange gelegt und automatisch verschickt (mit Name, Bestellnummer, Download-Links, Calendly-Link).
5. Kunde wird von ThriveCart parallel weiter auf `/danke` geleitet (bleibt unverändert, dient als Sofort-Bestätigung).

Hinweis: Direkte PDF-Anhänge werden vom E-Mail-System nicht unterstützt. Deshalb: sichere Download-Links im Mail-Body. Die Kunden können die PDFs mit einem Klick öffnen und speichern.

## Was gebaut wird

1. Lovable Cloud Storage
   - Privater Bucket `order-documents` für generierte PDFs.
   - Tabelle `orders` zur Ablage der Bestelldaten (Name, E-Mail, Betrag, ThriveCart-Order-ID, PDF-Pfade, Status), inkl. RLS.

2. E-Mail-Infrastruktur
   - Einrichtung der Sendequeue auf der verifizierten Domain `notify.souveraensein.ch`.
   - Neue Vorlage `heimweh-welcome` in der Marken-Optik der Website (warmes Beige, Gold-Akzente, Grossbuchstaben-Titel, Poppins). Keine langen Gedankenstriche.
   - Inhalte der Mail: persönliche Anrede, Bestätigung des Kaufs, Bestellnummer, zwei Buttons (Rahmenvertrag / Rechnung), CTA zum Vibecall via Calendly, Footer mit Kontakt (Telefon, Instagram, Website).

3. PDF-Generierung serverseitig
   - Rahmenvertrag: bestehendes Layout aus `danke.tsx` als serverseitige Vorlage nachbauen (gleiche Farben/Fonts).
   - Rechnung: gleiches Layout, mit Bestellnummer, Datum, Betrag, MwSt-Hinweis, Zahlungsstatus "bezahlt via ThriveCart".

4. ThriveCart-Webhook
   - Öffentliche Route unter `/api/public/thrivecart-webhook` (POST).
   - Prüft ThriveCart-Signatur (Secret aus Cloud-Secrets), validiert Eingaben (Zod).
   - Nur beim Event "order.success" wird eine Mail geschickt. Refunds/andere Events werden ignoriert.
   - Idempotent: gleiche Order-ID sendet nur einmal.

5. Kleinigkeit auf der Website
   - `/danke` bleibt wie es ist, bekommt aber einen kleinen Hinweis "Du erhältst gleich eine Mail von uns mit Rahmenvertrag und Rechnung."

## Was du (Carina) einmalig einrichten musst

Damit alles live gehen kann, brauche ich zwei Informationen von ThriveCart und muss sie als Secrets speichern:

1. Im ThriveCart-Dashboard unter Settings > API & Webhooks:
   - Webhook-URL setzen auf: `https://souveraensein.ch/api/public/thrivecart-webhook`
   - Das "Notification/Webhook Secret" kopieren (ThriveCart nennt es je nach Version "Secret Word" oder "Webhook Secret").
2. Redirect-URL nach dem Kauf auf: `https://souveraensein.ch/danke?name={customer_name}&email={customer_email}&order={order_id}` (falls noch nicht gesetzt).

Ich frage dich nach dem Approval nach dem Webhook-Secret und speichere es sicher.

## Technisches (nicht wichtig fürs Verständnis)

- Neuer Bucket `order-documents` (privat), signierte URLs, 30 Tage gültig.
- Neue Tabelle `orders` mit RLS (nur Service-Role darf schreiben; kein öffentlicher Zugriff).
- E-Mail-Template unter `src/lib/email-templates/heimweh-welcome.tsx`, registriert in `registry.ts`.
- PDF-Erzeugung mit `pdf-lib` im Worker (Worker-kompatibel, keine nativen Binaries).
- Webhook: `src/routes/api/public/thrivecart-webhook.ts`, verifiziert via HMAC/Secret-Wort, benutzt Service-Role für Storage-Upload und Enqueue.
- Sende-Trigger via interner Aufruf von `/lovable/email/transactional/send` mit Idempotenzschlüssel `welcome-{order_id}`.
- Secret `THRIVECART_WEBHOOK_SECRET` wird nach Approval angefordert.

## Nach dem Bauen

- Kurzer Test: ich löse den Webhook mit Testdaten aus und prüfe, dass Mail + PDFs korrekt ankommen.
- Bereitstellung der finalen URL für ThriveCart und knappe Anleitung zum Eintragen.
