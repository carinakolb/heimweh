import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { jsPDF } from "jspdf";

export const Route = createFileRoute("/danke")({
  head: () => ({
    meta: [
      { title: "Willkommen zuhause — Heimweh" },
      { name: "description", content: "Dein Weg beginnt. Rahmenvertrag und Rechnung zum Download." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    name: typeof search.name === "string" ? search.name : "",
    email: typeof search.email === "string" ? search.email : "",
    order: typeof search.order === "string" ? search.order : "",
  }),
  component: DankePage,
});

// ---------- Heimweh PDF Style Helpers ----------
const BROWN_DEEP: [number, number, number] = [28, 18, 10];
const BROWN_MID: [number, number, number] = [54, 38, 24];
const GOLD: [number, number, number] = [196, 158, 92];
const GOLD_LIGHT: [number, number, number] = [222, 192, 130];
const CREAM: [number, number, number] = [248, 243, 232];
const TEXT_DARK: [number, number, number] = [40, 28, 18];
const TEXT_MUTED: [number, number, number] = [110, 92, 72];

function heimwehHeader(doc: jsPDF, title: string, subtitle?: string) {
  const w = doc.internal.pageSize.getWidth();
  // Deep brown header band
  doc.setFillColor(...BROWN_DEEP);
  doc.rect(0, 0, w, 55, "F");
  // Gold hairline
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.line(20, 58, w - 20, 58);

  doc.setTextColor(248, 243, 232);
  doc.setFont("times", "normal");
  doc.setFontSize(34);
  doc.text(title, w / 2, 28, { align: "center" });

  if (subtitle) {
    doc.setTextColor(...GOLD_LIGHT);
    doc.setFont("times", "italic");
    doc.setFontSize(13);
    doc.text(subtitle, w / 2, 40, { align: "center" });
  }
}

function heimwehFooter(doc: jsPDF, line: string) {
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.2);
  doc.line(20, h - 18, w - 20, h - 18);
  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(...TEXT_MUTED);
  doc.text(line, w / 2, h - 11, { align: "center" });
}

function setCreamBackground(doc: jsPDF) {
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  doc.setFillColor(...CREAM);
  doc.rect(0, 0, w, h, "F");
}

// ---------- Rahmenvertrag PDF ----------
function generateRahmenvertrag(name: string) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const marginX = 22;
  const contentW = w - marginX * 2;

  setCreamBackground(doc);
  heimwehHeader(doc, "HEIMWEH", "Der Weg zurück zu dir");

  doc.setTextColor(...GOLD);
  doc.setFont("times", "italic");
  doc.setFontSize(11);
  doc.text("Rahmenbedingungen — 1:1 Begleitung", w / 2, 50, { align: "center" });

  let y = 72;
  doc.setFont("times", "italic");
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_DARK);
  const intro = `Schön${name ? ` ${name}` : ""}, dass du da bist. Damit unsere Zusammenarbeit für dich so klar und sicher wie möglich ist, findest du hier die Rahmenbedingungen unserer gemeinsamen Zeit.`;
  doc.text(doc.splitTextToSize(intro, contentW), marginX, y);
  y += 22;

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.2);
  doc.line(marginX, y, w - marginX, y);
  y += 10;

  const sections: Array<[string, string]> = [
    [
      "Die Sessions",
      "Unsere 1:1 Sessions dauern zwischen 1.5 und 2.5 Stunden. Die genaue Dauer richtet sich nach deinem Prozess – nicht nach der Uhr. Wir arbeiten so tief wie es sich für dich gerade stimmig anfühlt.",
    ],
    [
      "WhatsApp Begleitung",
      "Zwischen den Sessions bin ich montags, mittwochs und freitags per WhatsApp für dich da. Du kannst mir 2–3 Nachrichten schicken – Gedanken, Fragen, was auch immer gerade hochkommt. Ich antworte dir mit einem kurzen Impuls oder Tipp. Die WhatsApp Begleitung ist als Unterstützung zwischen den Sessions gedacht, nicht als Krisenbegleitung.",
    ],
    [
      "Embodiment-Aufnahmen",
      "Du erhältst zwei persönliche Embodiment-Aufnahmen, die ich passend zu deinen Themen für dich erstelle. Sobald du sie anfragst, habe ich 2 Werktage Zeit um sie aufzunehmen und dir zuzuschicken. Die Aufnahmen gehören dir – du kannst sie so oft hören wie du möchtest.",
    ],
    [
      "Terminabsagen",
      "Dein Termin ist für dich reserviert. Absagen sind bis 24 Stunden vor dem vereinbarten Termin kostenfrei möglich. Bei kurzfristigeren Absagen oder Nichterscheinen ohne Meldung wird der vollständige Sessionpreis verrechnet. Ich bitte dich das zu respektieren – so wie ich deinen Prozess respektiere.",
    ],
    [
      "Zahlung",
      "Der vereinbarte Betrag wird vor der ersten Session beglichen. Zahlungsmöglichkeiten: Twint, Banküberweisung oder Bitcoin.",
    ],
    [
      "Wichtiger Hinweis",
      "Meine Begleitung ersetzt keine medizinische oder therapeutische Behandlung. Du gehst diesen Weg in voller Eigenverantwortung – und ich begleite dich dabei so ehrlich, tief und präsent wie ich kann.",
    ],
  ];

  for (const [heading, body] of sections) {
    if (y > 250) {
      doc.addPage();
      setCreamBackground(doc);
      y = 28;
    }
    doc.setFont("times", "bold");
    doc.setFontSize(12.5);
    doc.setTextColor(...GOLD);
    doc.text(heading, marginX, y);
    y += 6;
    doc.setFont("times", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...TEXT_DARK);
    const lines = doc.splitTextToSize(body, contentW);
    doc.text(lines, marginX, y);
    y += lines.length * 5 + 6;
  }

  if (y > 235) {
    doc.addPage();
    setCreamBackground(doc);
    y = 28;
  }

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.2);
  doc.line(marginX, y, w - marginX, y);
  y += 10;

  doc.setFont("times", "italic");
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_DARK);
  doc.text("Ich habe die Rahmenbedingungen gelesen und bin einverstanden.", marginX, y);
  y += 14;

  doc.setFont("times", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(...TEXT_MUTED);
  doc.text("Ort, Datum:", marginX, y);
  doc.setDrawColor(...BROWN_MID);
  doc.line(marginX + 24, y + 1, marginX + 95, y + 1);
  y += 12;
  doc.text("Unterschrift:", marginX, y);
  doc.line(marginX + 24, y + 1, marginX + 95, y + 1);
  y += 12;
  doc.text("Name:", marginX, y);
  doc.setTextColor(...TEXT_DARK);
  doc.text(name || "", marginX + 24, y);
  doc.setDrawColor(...BROWN_MID);
  doc.line(marginX + 24, y + 1, marginX + 95, y + 1);

  heimwehFooter(doc, "@souveraen.sein  ·  Pfingstweidstrasse 31, Zürich");

  doc.save(`Rahmenvertrag_Heimweh${name ? `_${name.replace(/\s+/g, "_")}` : ""}.pdf`);
}

// ---------- Rechnung PDF ----------
function generateRechnung(name: string, orderId: string) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const marginX = 22;
  const contentW = w - marginX * 2;

  setCreamBackground(doc);
  heimwehHeader(doc, "SOUVERÄN SEIN", "by Carina Kolb");

  let y = 78;

  // Customer name
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_DARK);
  doc.text((name || "Kundin").toUpperCase(), marginX, y);

  y += 18;

  // Invoice meta
  const today = new Date();
  const dateStr = today.toLocaleDateString("de-CH", { day: "2-digit", month: "2-digit", year: "numeric" });
  const invoiceNo = orderId || `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${String(Math.floor(Math.random() * 9000) + 1000)}`;

  doc.setTextColor(...TEXT_DARK);
  doc.setFontSize(11);
  doc.text(`RECHNUNG #${invoiceNo}`, marginX, y);
  doc.text(dateStr, w - marginX, y, { align: "right" });

  y += 12;

  // Table header — gold band
  const rowH = 11;
  doc.setFillColor(...GOLD);
  doc.rect(marginX, y, contentW, rowH, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...BROWN_DEEP);
  const colX = {
    pos: marginX + 4,
    leistung: marginX + 22,
    anzahl: marginX + 95,
    preis: marginX + 120,
    betrag: w - marginX - 4,
  };
  doc.text("POS", colX.pos, y + 7);
  doc.text("LEISTUNG", colX.leistung, y + 7);
  doc.text("ANZAHL", colX.anzahl, y + 7);
  doc.text("PREIS", colX.preis, y + 7);
  doc.text("BETRAG", colX.betrag, y + 7, { align: "right" });

  y += rowH;

  // Row
  doc.setFont("times", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(...TEXT_DARK);
  doc.text("1", colX.pos, y + 8);
  doc.text("HEIMWEH BEGLEITUNG", colX.leistung, y + 8);
  doc.text("1", colX.anzahl, y + 8);
  doc.text("CHF 1100.00", colX.preis, y + 8);
  doc.text("CHF 1100.00", colX.betrag, y + 8, { align: "right" });

  y += 16;
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.3);
  doc.line(marginX, y, w - marginX, y);
  y += 9;

  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BROWN_DEEP);
  doc.text("GESAMTSUMME", marginX, y);
  doc.text("CHF 1100.00", w - marginX, y, { align: "right" });

  y += 22;

  // Thank-you note
  doc.setFont("times", "italic");
  doc.setFontSize(10.5);
  doc.setTextColor(...TEXT_DARK);
  const note = `Der Betrag wurde bereits über ThriveCart bezahlt. Diese Rechnung dient als Beleg. Vielen Dank für dein Vertrauen.`;
  doc.text(doc.splitTextToSize(note, contentW), marginX, y);

  y += 18;
  doc.setFont("times", "italic");
  doc.setFontSize(16);
  doc.setTextColor(...BROWN_MID);
  doc.text("Carina Kolb", marginX, y);

  // Footer band — deep brown
  const h = doc.internal.pageSize.getHeight();
  const footerH = 42;
  doc.setFillColor(...BROWN_DEEP);
  doc.rect(0, h - footerH, w, footerH, "F");
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.3);
  doc.line(0, h - footerH, w, h - footerH);

  const fy = h - footerH + 12;
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...GOLD_LIGHT);
  doc.text("Carina Kolb", marginX, fy);
  doc.text("Bankverbindung", w / 2 - 20, fy);
  doc.text("Kontakt", w - marginX - 30, fy);

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(248, 243, 232);
  doc.text("Souverän sein", marginX, fy + 6);
  doc.text("Eichstutz 12", marginX, fy + 11);
  doc.text("8634 Hombrechtikon", marginX, fy + 16);

  doc.text("CH 79 8080 8002 4621 7655 1", w / 2 - 20, fy + 6);
  doc.text("SWIFT-BIC RAIFCH22", w / 2 - 20, fy + 11);

  doc.text("079 612 64 15", w - marginX - 30, fy + 6);
  doc.text("@souveraen.sein", w - marginX - 30, fy + 11);

  doc.save(`Rechnung_Heimweh_${invoiceNo}.pdf`);
}

// ---------- Page ----------
function DankePage() {
  const { name, order } = Route.useSearch();
  const [downloaded, setDownloaded] = useState<{ vertrag: boolean; rechnung: boolean }>({
    vertrag: false,
    rechnung: false,
  });

  const firstName = name?.split(" ")[0] || "";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">
            Heimweh · Willkommen
          </p>
          <h1 className="text-display mt-6 text-5xl md:text-7xl leading-[1.05] text-[color:var(--cream)]">
            {firstName ? (
              <>
                Schön, dass du da&nbsp;bist,
                <br />
                <span className="italic text-[color:var(--gold)]">{firstName}</span>.
              </>
            ) : (
              <>
                Schön, dass du
                <br />
                <span className="italic text-[color:var(--gold)]">da bist</span>.
              </>
            )}
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-[color:var(--gold)]/60" />
          <p className="mx-auto mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[color:var(--text-body)] font-light">
            Deine Anmeldung ist angekommen. Ich melde mich innert 48&nbsp;Stunden persönlich
            bei dir, um den ersten Termin zu vereinbaren.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[color:var(--text-muted)] italic">
            Bis dahin – atme. Du bist auf dem Weg nach Hause.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-[color:var(--text-muted)]">
            Du erhaeltst gleich eine Mail von uns mit Rahmenvertrag und Rechnung.
          </p>
        </div>

        {/* Downloads */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <DownloadCard
            label="Rahmenvertrag"
            description="Die Rahmenbedingungen unserer 1:1 Begleitung. Bitte unterschrieben zur ersten Session mitbringen."
            done={downloaded.vertrag}
            onClick={() => {
              generateRahmenvertrag(name);
              setDownloaded((d) => ({ ...d, vertrag: true }));
            }}
          />
          <DownloadCard
            label="Rechnung"
            description="Dein Beleg über die geleistete Zahlung – für deine Unterlagen."
            done={downloaded.rechnung}
            onClick={() => {
              generateRechnung(name, order);
              setDownloaded((d) => ({ ...d, rechnung: true }));
            }}
          />
        </div>

        {/* Next steps */}
        <div className="mt-20 border-t border-[color:var(--gold)]/20 pt-12">
          <h2 className="text-display text-2xl md:text-3xl text-[color:var(--cream)] text-center">
            Wie es weitergeht
          </h2>
          <ol className="mx-auto mt-10 max-w-xl space-y-6 text-[color:var(--text-body)] font-light">
            <Step n="01" text="Du bekommst gleich eine Bestätigungsmail mit deinem Zahlungsbeleg." />
            <Step n="02" text="Innert 48 Stunden melde ich mich persönlich bei dir für die Terminvereinbarung." />
            <Step n="03" text="Wir starten unsere gemeinsame Zeit – in deinem Tempo, in deinem Prozess." />
          </ol>
        </div>

        <p className="mt-20 text-center text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          Carina Kolb · @souveraen.sein
        </p>
      </div>
    </main>
  );
}

function DownloadCard({
  label,
  description,
  done,
  onClick,
}: {
  label: string;
  description: string;
  done: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-start gap-4 border border-[color:var(--gold)]/30 bg-[color:var(--brown-mid)]/40 p-8 text-left transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--brown-warm)]/60"
    >
      <div className="flex w-full items-center justify-between">
        <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">PDF</span>
        <span className="text-xs text-[color:var(--text-muted)]">
          {done ? "↻ Erneut laden" : "↓ Herunterladen"}
        </span>
      </div>
      <h3 className="text-display text-3xl text-[color:var(--cream)]">{label}</h3>
      <p className="text-sm leading-relaxed text-[color:var(--text-body)] font-light">
        {description}
      </p>
      <span className="mt-2 inline-block border-b border-[color:var(--gold)] pb-0.5 text-sm tracking-wider text-[color:var(--gold)] transition-all group-hover:border-[color:var(--gold-light)] group-hover:text-[color:var(--gold-light)]">
        {done ? "Nochmal laden" : "Jetzt laden"}
      </span>
    </button>
  );
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex gap-5">
      <span className="text-display text-2xl italic text-[color:var(--gold)] leading-none pt-1">
        {n}
      </span>
      <span className="flex-1 leading-relaxed">{text}</span>
    </li>
  );
}