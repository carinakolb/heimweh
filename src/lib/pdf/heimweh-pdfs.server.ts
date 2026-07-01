import { PDFDocument, StandardFonts, rgb, PDFFont, PDFPage } from "pdf-lib";

// ---------- Colors (matches website / client PDF) ----------
const BROWN_DEEP = rgb(28 / 255, 18 / 255, 10 / 255);
const BROWN_MID = rgb(54 / 255, 38 / 255, 24 / 255);
const GOLD = rgb(196 / 255, 158 / 255, 92 / 255);
const GOLD_LIGHT = rgb(222 / 255, 192 / 255, 130 / 255);
const CREAM = rgb(248 / 255, 243 / 255, 232 / 255);
const TEXT_DARK = rgb(40 / 255, 28 / 255, 18 / 255);
const TEXT_MUTED = rgb(110 / 255, 92 / 255, 72 / 255);

// A4 in points (pdf-lib default unit is pt; 1mm = 2.83465pt)
const A4_W = 595.28;
const A4_H = 841.89;
const MM = 2.83465;

type FontSet = { regular: PDFFont; bold: PDFFont; italic: PDFFont };

function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (font.widthOfTextAtSize(test, size) > maxWidth) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function paintCreamBackground(page: PDFPage) {
  page.drawRectangle({ x: 0, y: 0, width: A4_W, height: A4_H, color: CREAM });
}

function drawHeader(page: PDFPage, fonts: FontSet, title: string, subtitle?: string) {
  // deep brown band
  page.drawRectangle({ x: 0, y: A4_H - 55 * MM, width: A4_W, height: 55 * MM, color: BROWN_DEEP });
  // gold hairline
  page.drawLine({
    start: { x: 20 * MM, y: A4_H - 58 * MM },
    end: { x: A4_W - 20 * MM, y: A4_H - 58 * MM },
    thickness: 0.6,
    color: GOLD,
  });
  const titleSize = 28;
  const titleWidth = fonts.bold.widthOfTextAtSize(title, titleSize);
  page.drawText(title, {
    x: (A4_W - titleWidth) / 2,
    y: A4_H - 30 * MM,
    size: titleSize,
    font: fonts.bold,
    color: CREAM,
  });
  if (subtitle) {
    const subSize = 11;
    const subWidth = fonts.italic.widthOfTextAtSize(subtitle, subSize);
    page.drawText(subtitle, {
      x: (A4_W - subWidth) / 2,
      y: A4_H - 42 * MM,
      size: subSize,
      font: fonts.italic,
      color: GOLD_LIGHT,
    });
  }
}

function drawFooter(page: PDFPage, fonts: FontSet, line: string) {
  page.drawLine({
    start: { x: 20 * MM, y: 18 * MM },
    end: { x: A4_W - 20 * MM, y: 18 * MM },
    thickness: 0.3,
    color: GOLD,
  });
  const size = 9;
  const width = fonts.italic.widthOfTextAtSize(line, size);
  page.drawText(line, {
    x: (A4_W - width) / 2,
    y: 11 * MM,
    size,
    font: fonts.italic,
    color: TEXT_MUTED,
  });
}

// ---------- Rahmenvertrag ----------
export async function generateRahmenvertragPdf(name: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const fonts: FontSet = {
    regular: await doc.embedFont(StandardFonts.TimesRoman),
    bold: await doc.embedFont(StandardFonts.TimesRomanBold),
    italic: await doc.embedFont(StandardFonts.TimesRomanItalic),
  };

  let page = doc.addPage([A4_W, A4_H]);
  paintCreamBackground(page);
  drawHeader(page, fonts, "HEIMWEH", "Der Weg zurueck zu dir");

  const marginX = 22 * MM;
  const contentW = A4_W - marginX * 2;

  // top subtitle band
  const topSubtitle = "Rahmenbedingungen, 1:1 Begleitung";
  const topSize = 11;
  const topWidth = fonts.italic.widthOfTextAtSize(topSubtitle, topSize);
  page.drawText(topSubtitle, {
    x: (A4_W - topWidth) / 2,
    y: A4_H - 50 * MM,
    size: topSize,
    font: fonts.italic,
    color: GOLD,
  });

  let y = A4_H - 72 * MM;
  const intro = `Schoen${name ? ` ${name}` : ""}, dass du da bist. Damit unsere Zusammenarbeit fuer dich so klar und sicher wie moeglich ist, findest du hier die Rahmenbedingungen unserer gemeinsamen Zeit.`;
  const introLines = wrap(intro, fonts.italic, 11, contentW);
  for (const line of introLines) {
    page.drawText(line, { x: marginX, y, size: 11, font: fonts.italic, color: TEXT_DARK });
    y -= 14;
  }
  y -= 8;
  page.drawLine({
    start: { x: marginX, y },
    end: { x: A4_W - marginX, y },
    thickness: 0.4,
    color: GOLD,
  });
  y -= 14;

  const sections: Array<[string, string]> = [
    [
      "Die Sessions",
      "Unsere 1:1 Sessions dauern zwischen 1.5 und 2.5 Stunden. Die genaue Dauer richtet sich nach deinem Prozess, nicht nach der Uhr. Wir arbeiten so tief wie es sich fuer dich gerade stimmig anfuehlt.",
    ],
    [
      "WhatsApp Begleitung",
      "Zwischen den Sessions bin ich montags, mittwochs und freitags per WhatsApp fuer dich da. Du kannst mir 2 bis 3 Nachrichten schicken, Gedanken, Fragen, was auch immer gerade hochkommt. Ich antworte dir mit einem kurzen Impuls oder Tipp. Die WhatsApp Begleitung ist als Unterstuetzung zwischen den Sessions gedacht, nicht als Krisenbegleitung.",
    ],
    [
      "Embodiment Aufnahmen",
      "Du erhaeltst zwei persoenliche Embodiment Aufnahmen, die ich passend zu deinen Themen fuer dich erstelle. Sobald du sie anfragst, habe ich 2 Werktage Zeit um sie aufzunehmen und dir zuzuschicken. Die Aufnahmen gehoeren dir, du kannst sie so oft hoeren wie du moechtest.",
    ],
    [
      "Terminabsagen",
      "Dein Termin ist fuer dich reserviert. Absagen sind bis 24 Stunden vor dem vereinbarten Termin kostenfrei moeglich. Bei kurzfristigeren Absagen oder Nichterscheinen ohne Meldung wird der vollstaendige Sessionpreis verrechnet.",
    ],
    [
      "Zahlung",
      "Der vereinbarte Betrag wird vor der ersten Session beglichen. Zahlungsmoeglichkeiten: Twint, Bankueberweisung oder Bitcoin.",
    ],
    [
      "Wichtiger Hinweis",
      "Meine Begleitung ersetzt keine medizinische oder therapeutische Behandlung. Du gehst diesen Weg in voller Eigenverantwortung und ich begleite dich dabei so ehrlich, tief und praesent wie ich kann.",
    ],
  ];

  for (const [heading, body] of sections) {
    if (y < 60 * MM) {
      page = doc.addPage([A4_W, A4_H]);
      paintCreamBackground(page);
      y = A4_H - 28 * MM;
    }
    page.drawText(heading, { x: marginX, y, size: 12.5, font: fonts.bold, color: GOLD });
    y -= 16;
    const lines = wrap(body, fonts.regular, 10.5, contentW);
    for (const line of lines) {
      page.drawText(line, { x: marginX, y, size: 10.5, font: fonts.regular, color: TEXT_DARK });
      y -= 13;
    }
    y -= 8;
  }

  if (y < 80 * MM) {
    page = doc.addPage([A4_W, A4_H]);
    paintCreamBackground(page);
    y = A4_H - 28 * MM;
  }

  page.drawLine({
    start: { x: marginX, y },
    end: { x: A4_W - marginX, y },
    thickness: 0.4,
    color: GOLD,
  });
  y -= 16;

  page.drawText("Ich habe die Rahmenbedingungen gelesen und bin einverstanden.", {
    x: marginX,
    y,
    size: 11,
    font: fonts.italic,
    color: TEXT_DARK,
  });
  y -= 22;

  const drawSignatureRow = (label: string, prefill?: string) => {
    page.drawText(label, { x: marginX, y, size: 10.5, font: fonts.regular, color: TEXT_MUTED });
    if (prefill) {
      page.drawText(prefill, {
        x: marginX + 90,
        y,
        size: 10.5,
        font: fonts.regular,
        color: TEXT_DARK,
      });
    }
    page.drawLine({
      start: { x: marginX + 90, y: y - 2 },
      end: { x: marginX + 300, y: y - 2 },
      thickness: 0.4,
      color: BROWN_MID,
    });
    y -= 22;
  };

  drawSignatureRow("Ort, Datum:");
  drawSignatureRow("Unterschrift:");
  drawSignatureRow("Name:", name || undefined);

  drawFooter(page, fonts, "@souveraen.sein  .  Souveraen sein, Eichstutz 12, 8634 Hombrechtikon");

  return doc.save();
}

// ---------- Rechnung ----------
export interface InvoiceInput {
  name: string;
  orderId: string;
  amountCHF?: number; // e.g. 1100
  productName?: string; // e.g. "HEIMWEH BEGLEITUNG"
  dateISO?: string;
}

export async function generateRechnungPdf(input: InvoiceInput): Promise<Uint8Array> {
  const { name, orderId } = input;
  const amount = input.amountCHF ?? 1100;
  const productName = (input.productName ?? "HEIMWEH BEGLEITUNG").toUpperCase();
  const dateObj = input.dateISO ? new Date(input.dateISO) : new Date();
  const dateStr = dateObj.toLocaleDateString("de-CH", { day: "2-digit", month: "2-digit", year: "numeric" });

  const doc = await PDFDocument.create();
  const fonts: FontSet = {
    regular: await doc.embedFont(StandardFonts.TimesRoman),
    bold: await doc.embedFont(StandardFonts.TimesRomanBold),
    italic: await doc.embedFont(StandardFonts.TimesRomanItalic),
  };

  const page = doc.addPage([A4_W, A4_H]);
  paintCreamBackground(page);
  drawHeader(page, fonts, "SOUVERAEN SEIN", "by Carina Kolb");

  const marginX = 22 * MM;
  const contentW = A4_W - marginX * 2;
  let y = A4_H - 78 * MM;

  page.drawText((name || "Kundin").toUpperCase(), {
    x: marginX,
    y,
    size: 11,
    font: fonts.regular,
    color: TEXT_DARK,
  });
  y -= 20;

  const invoiceNo = orderId || `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}${String(dateObj.getDate()).padStart(2, "0")}`;
  page.drawText(`RECHNUNG #${invoiceNo}`, { x: marginX, y, size: 11, font: fonts.regular, color: TEXT_DARK });
  const dateW = fonts.regular.widthOfTextAtSize(dateStr, 11);
  page.drawText(dateStr, { x: A4_W - marginX - dateW, y, size: 11, font: fonts.regular, color: TEXT_DARK });
  y -= 18;

  // gold table header
  const rowH = 26;
  page.drawRectangle({ x: marginX, y: y - rowH + 8, width: contentW, height: rowH, color: GOLD });
  const th = (label: string, x: number, right = false) => {
    const size = 9.5;
    const w = fonts.bold.widthOfTextAtSize(label, size);
    page.drawText(label, {
      x: right ? x - w : x,
      y: y - 8,
      size,
      font: fonts.bold,
      color: BROWN_DEEP,
    });
  };
  th("POS", marginX + 8);
  th("LEISTUNG", marginX + 50);
  th("ANZAHL", marginX + 260);
  th("PREIS", marginX + 330);
  th("BETRAG", A4_W - marginX - 8, true);
  y -= rowH;

  // row
  const rowSize = 10.5;
  const row = (label: string, x: number, right = false) => {
    const w = fonts.regular.widthOfTextAtSize(label, rowSize);
    page.drawText(label, {
      x: right ? x - w : x,
      y,
      size: rowSize,
      font: fonts.regular,
      color: TEXT_DARK,
    });
  };
  const priceStr = `CHF ${amount.toFixed(2)}`;
  row("1", marginX + 8);
  row(productName, marginX + 50);
  row("1", marginX + 260);
  row(priceStr, marginX + 330);
  row(priceStr, A4_W - marginX - 8, true);
  y -= 22;

  page.drawLine({
    start: { x: marginX, y },
    end: { x: A4_W - marginX, y },
    thickness: 0.5,
    color: GOLD,
  });
  y -= 18;

  page.drawText("GESAMTSUMME", { x: marginX, y, size: 11, font: fonts.bold, color: BROWN_DEEP });
  const totalW = fonts.bold.widthOfTextAtSize(priceStr, 11);
  page.drawText(priceStr, { x: A4_W - marginX - totalW, y, size: 11, font: fonts.bold, color: BROWN_DEEP });
  y -= 32;

  const note = "Der Betrag wurde bereits ueber ThriveCart bezahlt. Diese Rechnung dient als Beleg. Vielen Dank fuer dein Vertrauen.";
  const noteLines = wrap(note, fonts.italic, 10.5, contentW);
  for (const line of noteLines) {
    page.drawText(line, { x: marginX, y, size: 10.5, font: fonts.italic, color: TEXT_DARK });
    y -= 13;
  }

  y -= 14;
  page.drawText("Carina Kolb", { x: marginX, y, size: 16, font: fonts.italic, color: BROWN_MID });

  // Footer dark band
  const footerH = 42 * MM;
  page.drawRectangle({ x: 0, y: 0, width: A4_W, height: footerH, color: BROWN_DEEP });
  page.drawLine({
    start: { x: 0, y: footerH },
    end: { x: A4_W, y: footerH },
    thickness: 0.6,
    color: GOLD,
  });
  const fy = footerH - 12 * MM;
  const drawFooterHead = (label: string, x: number) =>
    page.drawText(label, { x, y: fy, size: 10, font: fonts.bold, color: GOLD_LIGHT });
  const drawFooterLine = (label: string, x: number, offset: number) =>
    page.drawText(label, {
      x,
      y: fy - offset,
      size: 9.5,
      font: fonts.regular,
      color: CREAM,
    });

  drawFooterHead("Carina Kolb", marginX);
  drawFooterHead("Bankverbindung", A4_W / 2 - 60);
  drawFooterHead("Kontakt", A4_W - marginX - 90);

  drawFooterLine("Souveraen sein", marginX, 14);
  drawFooterLine("Eichstutz 12", marginX, 27);
  drawFooterLine("8634 Hombrechtikon", marginX, 40);

  drawFooterLine("CH 79 8080 8002 4621 7655 1", A4_W / 2 - 60, 14);
  drawFooterLine("SWIFT-BIC RAIFCH22", A4_W / 2 - 60, 27);

  drawFooterLine("079 612 64 15", A4_W - marginX - 90, 14);
  drawFooterLine("@souveraen.sein", A4_W - marginX - 90, 27);

  return doc.save();
}