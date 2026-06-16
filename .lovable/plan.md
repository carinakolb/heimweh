## Was wir bauen

### 1. ThriveCart als Popup-Checkout
Alle ThriveCart-Buttons auf der Seite (aktuell `<a target="_blank">`) werden so umgebaut, dass sich der Checkout als Overlay über der Website öffnet, statt in einem neuen Tab. Das Design der Buttons bleibt unverändert (Gold-Style HEIMWEH).

Technisch: ThriveCarts offizielles Embed-Script wird einmal global geladen, Buttons bekommen das passende Attribut, damit sich das Modal öffnet. Funktioniert ohne Backend.

### 2. Calendly-Buchungsseite (`/buchen`)
Neue Route `/buchen` mit Calendly inline eingebettet im HEIMWEH-Design (Cremehintergrund, Gold-Akzente, gleiche Typografie). Der "Vibecall buchen"-Button im Header sowie alle "Ich melde mich"-Buttons führen auf diese neue Seite statt direkt zu Calendly. Bestehende SEO-Metadaten pro Route.

### 3. Automatische Bestätigungsmail nach Kauf
Sobald jemand über ThriveCart bezahlt, schickt ThriveCart eine Benachrichtigung an die Website. Die Website verschickt daraufhin automatisch eine schöne Bestätigungsmail im HEIMWEH-Design mit:
- Persönlicher Begrüßung
- Rahmenbedingungen / Ablauf des Programms (was passiert als Nächstes)
- Link zur Terminbuchung (Calendly über `/buchen`)
- Link zur "Willkommen zuhause"-Seite (`/danke`), auf der die Kundin Rahmenvertrag und Rechnung als PDF herunterladen kann (existiert bereits)

Die separate Quittung läuft weiterhin über ThriveCarts eigenen Beleg + den PDF-Download auf `/danke`.

## Technische Details

**Backend:**
- Email-Infrastruktur einrichten (Lovable Emails, Versanddomain notwendig — du wirst durch das Setup geführt)
- E-Mail-Template `purchase-confirmation.tsx` im HEIMWEH-Look (warmes Braun, Gold, Times-Serife)
- Public Webhook-Route `/api/public/thrivecart-webhook`:
  - Verifiziert ThriveCarts `thrivecart_secret` (Secret in Lovable Cloud abgelegt)
  - Validiert Event `order.success`
  - Speichert Bestellung in neuer Tabelle `purchases` (E-Mail, Name, Order-ID, Betrag, Datum)
  - Enqueued Bestätigungsmail an Käuferin
- ThriveCart-Webhook-URL und Secret muss du in deinem ThriveCart-Dashboard hinterlegen (genaue Anleitung folgt nach dem Deploy)

**Frontend:**
- ThriveCart-Embed-Script in `__root.tsx` einmal global laden
- Bestehende ThriveCart-`<a>`-Links bekommen `data-thrivecart`-Attribut für Modal-Auslösung
- Neue Route `src/routes/buchen.tsx` mit Calendly-Inline-Widget und eigenem `<head>` (Title, Description, OG)
- Alle Calendly-Links auf `/buchen` umstellen
- Header-CTA aktualisieren

**Datenbank-Migration:**
- Tabelle `purchases` mit RLS (nur service_role schreibt; keine Client-Reads nötig)

## Was du brauchst (sage Bescheid, wenn nicht vorhanden)
- ThriveCart Webhook-Secret (frei wählbar, in ThriveCart unter Settings → API & Webhooks)
- Eine Versanddomain für E-Mails (z. B. `notify.souveraensein.ch`) — Setup-Dialog erscheint automatisch
