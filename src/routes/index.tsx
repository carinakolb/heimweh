import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-heimweh.jpg";
import embodimentImg from "@/assets/embodiment.jpg";
import stillifeImg from "@/assets/stillife.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heimweh – Der Weg zurück zu dir" },
      { name: "description", content: "1:1 Begleitung für Frauen, die sich durch People Pleasing und den inneren Kritiker verloren haben. Komm heim zu dir." },
      { property: "og:title", content: "Heimweh – Der Weg zurück zu dir" },
      { property: "og:description", content: "3 intime 1:1 Sessions, 2 Embodiment-Aufnahmen und WhatsApp-Begleitung. Finde den Weg zurück zu deiner inneren Wahrheit." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToOffer = () => {
    document.getElementById("angebot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Frau im goldenen Gras bei Sonnenuntergang"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-walnut/40 via-walnut/20 to-background" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-end px-6 pb-20 pt-32 text-center md:pb-28">
          <span className="mb-6 inline-block rounded-full border border-cream/40 bg-walnut/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cream backdrop-blur-sm animate-fade-up">
            1:1 Begleitung
          </span>
          <h1 className="text-display max-w-3xl text-5xl italic leading-[1.05] text-cream drop-shadow-lg md:text-7xl lg:text-8xl animate-fade-up">
            Heimweh
          </h1>
          <p className="text-display mt-4 text-2xl text-cream/95 md:text-3xl animate-fade-up">
            Der Weg zurück zu dir.
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg animate-fade-up">
            Für die Frau, die sich verloren hat — zwischen "es allen recht machen",
            der Stimme des inneren Kritikers und dem leisen Sehnen nach sich selbst.
          </p>
          <button
            onClick={scrollToOffer}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm uppercase tracking-[0.2em] text-walnut shadow-warm transition-all hover:scale-[1.02] hover:bg-mustard animate-fade-up"
          >
            Komm nach Hause
            <span aria-hidden>→</span>
          </button>
        </div>
      </section>

      {/* INVITATION */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-moss">Eine Einladung</p>
          <h2 className="mt-6 text-4xl italic leading-tight md:text-5xl">
            Du hast lange für alle anderen gelebt.
          </h2>
          <p className="mt-8 text-lg leading-loose text-muted-foreground">
            Du bist die, die hält. Die spürt, was andere brauchen, bevor sie es selbst aussprechen.
            Die lächelt, wenn sie eigentlich weinen möchte. Die ja sagt, obwohl ihr ganzer Körper nein flüstert.
          </p>
          <p className="mt-6 text-lg leading-loose text-muted-foreground">
            Und doch — irgendwo tief in dir gibt es dieses Heimweh.
            Nach einer Frau, die du einmal warst. Oder vielleicht: nach der, die du noch nie sein durftest.
          </p>
        </div>
      </section>

      {/* RESONANZ */}
      <section className="bg-sand/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Vielleicht kennst du das</p>
            <h2 className="mt-6 text-4xl italic md:text-5xl">Wenn du nickst, weisst du es.</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              "Du sagst ja, obwohl du nein meinst — und ärgerst dich danach über dich selbst.",
              "Der innere Kritiker spricht lauter als jede andere Stimme in dir.",
              "Du hast vergessen, was du eigentlich willst, magst, brauchst.",
              "Konflikte vermeidest du um jeden Preis — auch um den Preis deiner Wahrheit.",
              "Du funktionierst nach aussen — und fühlst dich innen leer.",
              "Da ist eine Sehnsucht, die du nicht benennen kannst. Aber sie ist da.",
            ].map((line, i) => (
              <div
                key={i}
                className="rounded-sm border border-border bg-background/70 p-7 shadow-soft backdrop-blur-sm"
              >
                <p className="text-display text-lg italic leading-relaxed text-foreground">"{line}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE with image */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <img
              src={embodimentImg}
              alt="Hände auf dem Herzen, sanftes Sonnenlicht"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-mustard/80 md:block" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Heimweh ist</p>
            <h2 className="mt-6 text-4xl italic leading-tight md:text-5xl">
              kein Verlieren.<br />
              Es ist ein Ruf.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-loose text-muted-foreground">
              <p>
                Ein leiser, hartnäckiger Ruf deiner Seele, die dich heimholen möchte —
                zu deinem Körper, zu deiner Wahrheit, zu deinem eigenen Ja und Nein.
              </p>
              <p>
                In dieser Begleitung gehen wir diesen Weg gemeinsam. Nicht im Kopf.
                Sondern dort, wo die Antworten wohnen: in deinem Körper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section id="angebot" className="relative overflow-hidden bg-gradient-to-b from-forest to-moss px-6 py-24 text-cream md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-mustard">Das Angebot</p>
            <h2 className="mt-6 text-display text-5xl italic md:text-6xl">Heimweh</h2>
            <p className="text-display mt-2 text-xl italic text-cream/80">— der Weg zurück zu dir</p>
          </div>

          <div className="mt-16 rounded-sm border border-cream/20 bg-walnut/30 p-8 backdrop-blur-sm md:p-12">
            <ul className="space-y-7">
              {[
                {
                  title: "3 intime 1:1 Sessions",
                  desc: "Tiefgehende Begegnungen, in denen wir den Mustern auf den Grund gehen und Raum für deine Wahrheit schaffen.",
                },
                {
                  title: "2 individuelle Embodiment-Aufnahmen",
                  desc: "Geführte Audio-Praktiken, persönlich für dich aufgenommen — damit dein Körper integriert, was dein Verstand verstanden hat.",
                },
                {
                  title: "WhatsApp-Begleitung zwischen den Sessions",
                  desc: "Du bist nicht allein. Wenn der innere Kritiker laut wird oder das Leben dich triggert, bin ich da.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-5 border-b border-cream/15 pb-7 last:border-0 last:pb-0">
                  <span className="text-display mt-1 text-3xl italic text-mustard">0{i + 1}</span>
                  <div>
                    <h3 className="text-display text-2xl italic text-cream">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-cream/80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-cream/20 pt-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/60">Deine Investition</p>
              <p className="text-display mt-3 text-5xl italic md:text-6xl">CHF 1'100</p>
              <p className="mt-2 text-sm text-cream/70">Einmalige Zahlung — für dich, für jetzt.</p>

              <a
                href="#"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard px-10 py-5 text-sm uppercase tracking-[0.2em] text-walnut shadow-warm transition-all hover:scale-[1.02] hover:bg-cream"
              >
                Ja, ich komme heim
                <span aria-hidden>→</span>
              </a>
              <p className="mt-4 text-xs text-cream/60">
                Du wirst sicher zur Zahlung weitergeleitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-moss">Für wen</p>
            <h2 className="mt-6 text-4xl italic md:text-5xl">Diese Reise ist für dich, wenn …</h2>
            <ul className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {[
                "… du spürst, dass du dich selbst irgendwo unterwegs verloren hast.",
                "… du müde bist davon, es allen recht zu machen, und bereit, dir selbst recht zu geben.",
                "… du nicht nur verstehen, sondern wirklich verändern willst — im Körper, nicht nur im Kopf.",
                "… du bereit bist, ehrlich, weich und mutig hinzuschauen.",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2.5 h-1.5 w-6 flex-shrink-0 bg-terracotta" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <img
              src={stillifeImg}
              alt="Pampasgras, Kerze und Tonbecher im Fensterlicht"
              width={1280}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-sand/40 px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="text-display text-4xl italic leading-snug md:text-5xl">
            "Du musst nicht länger leise sein,<br />
            damit andere laut sein dürfen."
          </p>
          <button
            onClick={scrollToOffer}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-moss px-8 py-4 text-sm uppercase tracking-[0.2em] text-cream shadow-soft transition-all hover:scale-[1.02] hover:bg-forest"
          >
            Zum Angebot
            <span aria-hidden>→</span>
          </button>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Heimweh · Der Weg zurück zu dir
      </footer>
    </main>
  );
}
