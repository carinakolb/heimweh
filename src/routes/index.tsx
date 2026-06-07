import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/carina-bridge.jpeg.asset.json";
import portraitAsset from "@/assets/carina-portrait.jpeg.asset.json";
import natureAsset from "@/assets/carina-nature.jpeg.asset.json";
import embodimentImg from "@/assets/embodiment.jpg";
const heroImg = heroAsset.url;
const portraitImg = portraitAsset.url;
const natureImg = natureAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEIMWEH — Der Weg zurück zu dir" },
      {
        name: "description",
        content:
          "Für Frauen, die nach aussen funktionieren und innerlich längst nicht mehr wissen, wer sie sind. 3 1:1 Sessions, 2 Embodiment-Aufnahmen, WhatsApp-Begleitung.",
      },
      { property: "og:title", content: "HEIMWEH — Der Weg zurück zu dir" },
      {
        property: "og:description",
        content:
          "Komm heim zu dir. Eine intime 1:1 Begleitung für People Pleaser, die bereit sind, sich selbst wieder zu spüren.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const BUY_URL = "https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/";

function CTA({
  children = "Ja. Ich will nach Hause.",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center text-[11px] md:text-xs uppercase tracking-[0.22em] font-light px-10 py-4 md:px-14 md:py-5 transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold text-brown-deep hover:bg-gold-light hover:-translate-y-0.5 shadow-warm"
      : "border border-cream/30 text-cream hover:border-gold hover:text-gold";
  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-light">
      {children}
    </p>
  );
}

function CtaBar({ quote, cta }: { quote: string; cta: string }) {
  return (
    <div className="bg-brown-mid px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
        <p className="text-display max-w-2xl text-2xl italic leading-snug text-cream md:text-4xl">
          „{quote}"
        </p>
        <CTA>{cta}</CTA>
      </div>
    </div>
  );
}

function GoldLine({ className = "" }: { className?: string }) {
  return <div className={`h-px w-10 bg-gold ${className}`} />;
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-brown-deep/95 to-transparent px-6 py-6 md:px-12 md:py-7">
        <a href="#" className="text-display text-sm uppercase tracking-[0.2em] text-gold">
          Souverän Sein
        </a>
        <a
          href={BUY_URL}
          className="border-b border-cream/30 pb-0.5 text-[11px] uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold"
        >
          Buche deine Reise
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-24 pt-40 md:px-12 md:pb-32">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,oklch(0.27_0.035_55/0.7),transparent_60%),radial-gradient(ellipse_at_80%_20%,oklch(0.21_0.028_55/0.5),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-brown-deep" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Label>Embodiment Coaching · 1:1 Begleitung</Label>
          <h1 className="text-display mt-8 text-[64px] font-bold leading-[0.95] md:text-[110px] lg:text-[130px]">
            HEIMWEH
            <span className="block italic font-normal text-gold-light">
              Der Weg zurück zu dir.
            </span>
          </h1>
          <p className="text-display mt-10 max-w-xl text-xl italic font-light leading-relaxed text-text-body md:text-2xl">
            Für die Frau, die nach aussen alles im Griff hat —
            und innerlich schon lange nicht mehr weiss, wer sie ohne das alles ist.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA>Ja. Ich will nach Hause.</CTA>
            <a
              href="#was-ist-heimweh"
              className="inline-flex items-center justify-center border border-cream/30 px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:text-gold md:px-14 md:py-5"
            >
              Zeig mir mehr
            </a>
          </div>
        </div>
      </section>

      {/* MIRROR — Du kennst das */}
      <section id="was-ist-heimweh" className="mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-36">
        <Label>Du kennst das vielleicht</Label>

        <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-2">
          {[
            {
              t: "„Ich funktioniere. Ich liefere. Ich bin für alle da.",
              b: "Und abends, wenn es still wird — dieser Druck in der Brust. Diese Leere, die keine Erklärung hat. Du hast alles getan. Und trotzdem fühlt sich irgendetwas falsch an.",
            },
            {
              t: "„Ich bin so müde. Aber aufhören kann ich nicht.",
              b: "Nicht weil du schwach bist. Sondern weil du dir nie erlaubt hast aufzuhören. Weil Pause bedeuten würde: Vielleicht bin ich nicht genug, wenn ich nur bin.",
            },
            {
              t: "„Ich weiss nicht mehr, was ich wirklich will.",
              b: "Du weisst, was alle anderen wollen. Du spürst, was der Raum braucht, bevor jemand es ausspricht. Aber wann hast du zuletzt gespürt, was du willst — ohne sofort zu prüfen, ob das auch okay ist?",
            },
            {
              t: "„Allein zu sein macht mir Angst.",
              b: "Nicht Einsamkeit. Sondern die Stille mit dir selbst. Wenn du aufhörst dich abzulenken, kommt alles auf einmal. Die Gedanken, die Stimmen, das Gefühl: Ich kenne mich selbst nicht mehr.",
            },
            {
              t: "„Ich sage Ja — und meine Nein.",
              b: "Und hasse mich danach dafür. Du siehst dich von aussen zu, wie du wieder einspringst, wieder hältst, wieder lächelst. Während ein Teil in dir leise schreit: Bitte nicht schon wieder.",
            },
            {
              t: "„Der innere Kritiker ist lauter als alles andere.",
              b: "Egal was du machst, es ist nie genug. Du bist nie genug. Eine Stimme, die schon so lange in dir wohnt, dass du sie für dich selbst hältst — aber sie ist nicht du.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-brown-deep p-10 transition-colors duration-500 hover:bg-brown-warm/70 md:p-12"
            >
              <p className="text-display text-xl italic leading-snug text-cream md:text-2xl">
                {c.t}
              </p>
              <p className="mt-4 text-sm leading-loose text-text-muted">{c.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-display text-3xl font-semibold leading-tight md:text-5xl">
            Du hast gelernt, dich selbst zu verlassen,{" "}
            <em className="font-normal italic text-gold-light">um geliebt zu werden.</em>
          </p>
          <p className="mt-8 max-w-xl leading-loose text-text-body">
            Das war keine Schwäche. Das war Überleben. Irgendwann hat dein Nervensystem
            gelernt: Wenn ich funktioniere, bin ich sicher. Wenn ich gebraucht werde,
            gehöre ich dazu.
            <br />
            <br />
            Aber dieser Preis — den zahlt dein Körper schon lange.
          </p>
          <div className="mt-10">
            <CTA>Ich bin bereit für den Weg zurück.</CTA>
          </div>
        </div>
      </section>

      <CtaBar
        quote="Ich wusste, dass ich etwas ändern muss. Ich wusste nur nicht mehr, wo ich anfangen soll."
        cta="Dann lass uns anfangen."
      />

      {/* TRUTH */}
      <section className="bg-gradient-to-b from-brown-deep via-brown-mid to-brown-deep px-6 py-28 text-center md:py-36">
        <div className="mx-auto max-w-3xl">
          <Label>Die Wahrheit, die du vielleicht noch nicht siehst</Label>
          <h2 className="text-display mt-10 text-3xl italic font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            „Deine Erschöpfung kommt nicht davon,
            <br />
            dass du zu viel tust.
            <br />
            Sie kommt davon, <em className="text-gold-light">von wem</em> du es tust."
          </h2>
          <p className="mx-auto mt-12 max-w-2xl leading-loose text-text-body">
            Wenn du aus innerer Leere gibst, aus Angst vor Ablehnung, aus dem Glauben,
            dass du nur geliebt wirst wenn du nützlich bist — dann ist selbst Pause kein
            Ausruhen. Es ist nur ein anderer Weg, dich zu verlieren.
            <br />
            <br />
            Burnout ist kein Zeichen, dass du zu viel kannst. Er ist ein Zeichen, dass du
            dich selbst zu lange nicht gehört hast.
          </p>
          <GoldLine className="mx-auto my-12" />
          <p className="mx-auto max-w-2xl leading-loose text-text-body">
            Und nein — noch mehr Wissen wird das nicht lösen. Du weisst schon alles. Du
            bist reflektiert. Du kennst die Muster. Aber dein Körper hat das noch nicht
            verstanden. Und <em className="text-display italic text-gold-light">da</em> —
            im Körper — fängt die echte Veränderung an.
          </p>
          <div className="mt-12">
            <CTA>Ich bin bereit — zeig mir HEIMWEH</CTA>
          </div>
        </div>
      </section>

      {/* DESIRE — was du erreichen wirst */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Label>Was du durch Heimweh erreichst</Label>
          <h2 className="text-display mt-8 text-4xl leading-tight md:text-6xl">
            Stell dir vor, du wachst auf —
            <br />
            <em className="italic text-gold-light">und du bist da.</em>
          </h2>
          <p className="text-display mt-8 text-xl italic text-text-body md:text-2xl">
            Nicht die Rolle. Nicht die Funktion. Du.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              before: "„Ich brauche ständig Bestätigung, dass ich okay bin.",
              after: "Du trägst deine eigene Stabilität. Niemand muss dich mehr regulieren.",
            },
            {
              before: "„Ich sage Ja, obwohl ich Nein meine.",
              after: "Du sagst Nein — und dein Körper entspannt sich dabei.",
            },
            {
              before: "„Allein zu sein fühlt sich wie Strafe an.",
              after: "Allein sein ist der schönste Moment mit dir selbst.",
            },
            {
              before: "„Ich funktioniere. Aber ich spüre mich nicht.",
              after: "Du spürst dich wieder. Du weisst, was du willst. Du vertraust dir.",
            },
            {
              before: "„Der innere Kritiker ist lauter als alles andere.",
              after: "Deine inneren Stimmen arbeiten für dich — nicht gegen dich.",
            },
            {
              before:
                "„Ich weiss nicht, wer ich bin, wenn ich nicht gebraucht werde.",
              after:
                "Du bist vollkommen richtig, wie du bist. Das weisst du jetzt im Körper.",
            },
          ].map((c, i) => (
            <div key={i} className="border-t border-cream/10 pt-8">
              <p className="text-display text-base italic leading-relaxed text-text-muted">
                {c.before}
              </p>
              <div className="my-5 text-lg text-gold">↓</div>
              <p className="text-display text-xl font-semibold leading-snug text-cream md:text-2xl">
                {c.after}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <CTA>So will ich mich fühlen.</CTA>
        </div>
      </section>

      <CtaBar
        quote="Du musst nicht erst zusammenbrechen, um dir erlauben zu dürfen, Hilfe anzunehmen."
        cta="Ich nehme mir diesen Raum."
      />

      {/* OFFER */}
      <section id="angebot" className="mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-36">
        <div className="max-w-3xl">
          <Label>Das Angebot</Label>
          <h2 className="text-display mt-6 text-5xl leading-tight md:text-7xl">
            HEIMWEH —
            <br />
            <em className="italic text-gold-light">Der Weg zurück zu dir</em>
          </h2>
          <p className="text-display mt-6 max-w-xl text-xl italic text-text-body md:text-2xl">
            Drei Sitzungen. Ein Prozess. Eine Rückkehr.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-cream/10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Ankommen",
              b: "Wir schauen gemeinsam, was dich von dir trennt. Welche Muster, welche inneren Stimmen, welche Körperreaktionen dich so lange führen — ohne dass du es wolltest. Dein Nervensystem bekommt zum ersten Mal Raum, sich zu zeigen.",
            },
            {
              n: "02",
              t: "In die Tiefe",
              b: "Embodiment Arbeit: Wir gehen dorthin, wo die Worte aufhören. In den Körper. In die Emotionen, die du so lange unterdrückt hast. Die Stimme, die so viel zu sagen hat und nie gehört wurde — sie darf laut sein.",
            },
            {
              n: "03",
              t: "Heimkommen",
              b: "Integration. Du lernst, wie es sich anfühlt, wirklich bei dir zu sein. Entscheidungen aus dir heraus zu treffen — nicht aus Angst, nicht aus Erwartung. Dieser Frieden, auf den du wartest? Er war immer in dir.",
            },
          ].map((s) => (
            <div key={s.n} className="bg-brown-deep p-10 md:p-14">
              <p className="text-display text-7xl font-bold leading-none text-gold/15">
                {s.n}
              </p>
              <h3 className="text-display mt-5 text-2xl font-semibold leading-snug text-cream">
                {s.t}
              </h3>
              <p className="mt-4 text-sm leading-loose text-text-muted">{s.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <img
              src={embodimentImg}
              alt="Hände auf dem Herzen"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[20%]"
            />
          </div>
          <div className="border border-gold/25 p-10 md:col-span-3 md:p-14">
            <p className="text-display text-xs uppercase tracking-[0.22em] text-gold">
              Was in HEIMWEH enthalten ist
            </p>
            <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
              {[
                "3 tiefgehende 1:1 Sitzungen",
                "WhatsApp-Begleitung zwischen den Sessions",
                "2 individuelle Embodiment-Aufnahmen",
                "Körperorientierte Embodiment Arbeit",
                "Sicherer Raum für alles, was nie sein durfte",
                "Meine volle Präsenz und Erfahrung",
              ].map((li) => (
                <li
                  key={li}
                  className="relative pl-6 text-sm leading-relaxed text-text-body before:absolute before:left-0 before:text-gold before:content-['—']"
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden bg-[radial-gradient(ellipse_at_center,oklch(0.27_0.035_55/0.6),transparent_70%)] px-6 py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
            Deine Investition
          </p>
          <p className="text-display mt-4 text-6xl font-bold text-gold md:text-8xl">
            CHF 1'100
          </p>
          <p className="text-display mt-2 text-sm italic text-text-muted">
            Ratenzahlung auf Anfrage möglich
          </p>
          <div className="mt-10">
            <CTA>Ich sichere mir meinen Platz</CTA>
          </div>
        </div>
      </section>

      <CtaBar
        quote="Was zurück bleibt, bist du. Nah bei dir, nah an deinem echten Ich."
        cta="Ich komme nach Hause."
      />

      {/* FOR WHO */}
      <section className="bg-gradient-to-br from-brown-mid to-brown-deep px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <Label>HEIMWEH ist für dich, wenn</Label>
            <h2 className="text-display mt-8 text-4xl leading-tight md:text-5xl">
              Du dich in diesen Sätzen erkennst
            </h2>
            <ul className="mt-10">
              {[
                "Du nach aussen funktionierst und innerlich weisst, dass da mehr sein muss.",
                "Du erschöpft bist — nicht körperlich, sondern tief drin.",
                "Du dich in Beziehungen verlierst und nicht weisst, wer du ohne das andere bist.",
                "Du dir selbst gegenüber die strengste Person in deinem Leben bist.",
                "Du Angst hast, was passiert, wenn du nicht mehr gemocht werden musst.",
                "Du weisst, dass Nein-Sagen richtig wäre — und es trotzdem nicht kannst.",
                "Du dir selbst schon lange nicht mehr traust.",
                "Du spürst: Ich muss zurück zu mir. Aber ich weiss nicht wie.",
              ].map((li, i) => (
                <li
                  key={i}
                  className="text-display border-b border-cream/10 py-5 text-lg italic leading-snug text-text-body first:border-t md:text-xl"
                >
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <CTA>Das bin ich. Ich buche.</CTA>
            </div>
          </div>

          <div className="md:pt-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/35">
              HEIMWEH ist nicht für dich, wenn
            </p>
            <ul className="mt-6">
              {[
                "Du nach schnellen Tipps und To-Do-Listen suchst",
                "Du einen reinen Gesprächscoach erwartest",
                "Du noch nicht bereit bist, dich selbst wirklich zu begegnen",
                "Du in akuter psychiatrischer Behandlung bist",
              ].map((li, i) => (
                <li
                  key={i}
                  className="relative border-b border-cream/5 py-4 pl-6 text-sm text-text-muted before:absolute before:left-0 before:text-cream/25 before:content-['×']"
                >
                  {li}
                </li>
              ))}
            </ul>

            <div className="mt-12 border-l-2 border-gold bg-brown-warm/50 p-10">
              <p className="text-display text-xl italic leading-snug text-cream md:text-2xl">
                „Ich setze an, bevor der Zusammenbruch kommt. Dann, wenn du weisst,
                dass du etwas ändern musst — und noch die Kraft hast, es zu tun."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOMENT — small moments that catch her */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <Label>Kleine Momente</Label>
        <h2 className="text-display mx-auto mt-8 max-w-3xl text-4xl leading-tight md:text-6xl">
          Du wirst diese Momente erkennen —
          <br />
          <em className="italic text-gold-light">weil du sie schon kennst.</em>
        </h2>

        <div className="mt-16 space-y-10 text-left">
          {[
            "Der Moment im Auto, kurz bevor du die Haustüre öffnest. Wenn du noch eine Sekunde lang du selbst bist — bevor du wieder zu der wirst, die alle brauchen.",
            "Der Moment in der Dusche, wenn das Wasser läuft und du weinst, ohne zu wissen warum. Und dann gehst du raus, ziehst dich an, und funktionierst weiter.",
            "Der Moment, in dem jemand fragt „Wie geht's dir?” und du automatisch „Gut, danke” sagst — und beide wissen, dass das nicht stimmt.",
            "Der Moment, wenn du Sonntagabends auf dem Sofa sitzt und denkst: Ist das alles? Und gleich darauf: Sei nicht undankbar.",
            "Der Moment, in dem du dich im Spiegel ansiehst und eine Frau siehst, die du nicht mehr kennst.",
          ].map((m, i) => (
            <div key={i} className="border-l-2 border-gold/40 pl-6 md:pl-10">
              <p className="text-display text-xl italic leading-relaxed text-text-body md:text-2xl">
                {m}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CTA>Ich will diese Momente nicht mehr.</CTA>
        </div>
      </section>

      <CtaBar
        quote="Du musst nicht länger leise sein, damit andere laut sein dürfen."
        cta="Ich nehme meinen Raum."
      />

      {/* LEADER */}
      <section className="bg-gradient-to-b from-brown-deep via-brown-warm/40 to-brown-deep px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <Label>Wer ich bin</Label>
            <h2 className="text-display mt-8 text-4xl leading-tight md:text-5xl">
              Ich war genau dort,
              <br />
              wo du gerade bist.
            </h2>
            <p className="text-display mt-8 text-xl italic leading-relaxed text-text-body md:text-2xl">
              Hochfunktional nach aussen. Innerlich längst verloren.
            </p>
            <p className="mt-6 text-sm leading-loose text-text-muted">
              Ich habe meinen Wert in Beziehungen definiert, meine Stabilität durch
              andere geholt — und alles getan, um nie alleine mit mir zu sein.
              Burnout. Depression. Die Erkenntnis, dass noch mehr Wissen, noch mehr
              Disziplin, noch mehr Regeln mich nicht retten werden. Dass die
              Veränderung nur über den Körper gehen kann.
            </p>
            <p className="mt-5 text-sm leading-loose text-text-muted">
              Heute ist mein Alltag so viel leiser. Nicht weil nichts passiert —
              sondern weil ich bei mir bleibe, wenn es passiert. Ich halte mich
              selbst. Ich kenne mich, und ich liebe, was ich kenne.
            </p>
            <p className="text-display mt-10 text-3xl italic text-gold">Carina</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-text-muted">
              Somatic Coach · Wegbegleiterin
            </p>
          </div>

          <div className="space-y-8">
            <img
              src={portraitImg}
              alt="Carina im Profil, Augen geschlossen, Sonnenlicht"
              width={1280}
              height={1920}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <img
              src={natureImg}
              alt="Carina in der Natur"
              width={1280}
              height={1920}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="border-l-2 border-gold bg-brown-warm/50 p-10">
              <p className="text-display text-xl italic leading-snug text-cream md:text-2xl">
                „Ich sage dir nicht, dass du anders denken musst. Ich bringe dich
                zurück zu dir — damit du dich endlich kennenlernen, lieben und für
                dich entscheiden kannst."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="buchen"
        className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,oklch(0.27_0.035_55/0.7),oklch(0.16_0.022_55)_70%)] px-6 py-32 text-center md:py-44"
      >
        <p
          aria-hidden
          className="text-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-bold leading-none text-gold/[0.03] md:text-[18vw]"
        >
          HEIMWEH
        </p>
        <div className="relative z-10 mx-auto max-w-3xl">
          <Label>Du bist bereit</Label>
          <h2 className="text-display mt-10 text-5xl leading-[1.05] md:text-8xl">
            Komm
            <br />
            <em className="italic text-gold-light">nach Hause.</em>
          </h2>
          <p className="text-display mx-auto mt-10 max-w-xl text-xl italic leading-snug text-text-body md:text-2xl">
            Nicht irgendwann. Nicht wenn du dich noch mehr verdient hast.
            <br />
            Jetzt. So wie du bist.
          </p>
          <div className="mt-14">
            <CTA className="px-16 py-6 text-sm">Ich bin bereit. Ich buche jetzt.</CTA>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-text-muted">
            CHF 1'100 · 3 Sessions + WhatsApp-Begleitung + 2 Embodiment-Aufnahmen
            <br />
            <span className="opacity-60">Ratenzahlung auf Anfrage möglich</span>
          </p>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-cream/5 px-6 py-12 md:px-12">
        <p className="text-display text-base uppercase tracking-[0.15em] text-gold">
          Souverän Sein
        </p>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em] text-text-muted">
          <a href="#" className="transition hover:text-gold">
            Instagram
          </a>
          <a href="#" className="transition hover:text-gold">
            Kontakt
          </a>
          <a href="#" className="transition hover:text-gold">
            Impressum
          </a>
        </div>
        <p className="w-full text-[11px] text-cream/20">
          © 2026 Souverän Sein · Heimweh — Der Weg zurück zu dir
        </p>
      </footer>
    </main>
  );
}
