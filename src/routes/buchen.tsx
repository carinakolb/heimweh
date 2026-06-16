import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/buchen")({
  head: () => ({
    meta: [
      { title: "Vibecall buchen — HEIMWEH | Souverän Sein" },
      {
        name: "description",
        content:
          "Buche deinen kostenfreien Vibecall mit Carina. Ein 30-minütiges Kennenlernen, um zu spüren, ob HEIMWEH dein Weg ist.",
      },
      { property: "og:title", content: "Vibecall buchen — HEIMWEH" },
      {
        property: "og:description",
        content: "Kostenfreies 30-Minuten Kennenlerngespräch mit Carina.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap",
      },
    ],
  }),
  component: BuchenPage,
});

const CSS = `
  .bk *, .bk *::before, .bk *::after { box-sizing: border-box; }
  .bk {
    background: #f5f0e8;
    min-height: 100vh;
    color: #1a1008;
    font-family: "Poppins", system-ui, sans-serif;
    font-weight: 300;
    padding: 40px 24px 80px;
  }
  .bk-wrap { max-width: 1100px; margin: 0 auto; }
  .bk-back {
    display: inline-flex; align-items: center; gap: 8px;
    color: rgba(26,16,8,0.55); text-decoration: none;
    font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
    margin-bottom: 32px; transition: color .25s ease;
  }
  .bk-back:hover { color: #1a1008; }
  .bk-label {
    font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase;
    color: #c9a96e; margin-bottom: 18px; text-align: center;
  }
  .bk-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(40px, 7vw, 72px);
    font-weight: 300; line-height: 1.05;
    text-align: center; color: #1a1008;
    margin-bottom: 18px;
  }
  .bk-title em { font-style: italic; color: #c9a96e; }
  .bk-sub {
    text-align: center;
    max-width: 620px; margin: 0 auto 48px;
    font-size: 16px; line-height: 1.7;
    color: rgba(26,16,8,0.7);
  }
  .bk-frame {
    background: #ffffff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(26,16,8,0.12), 0 0 0 1px rgba(201,169,110,0.25);
  }
  .bk-cal { width: 100%; min-height: 760px; border: 0; display: block; }
  @media (max-width: 720px) {
    .bk { padding: 24px 16px 56px; }
    .bk-cal { min-height: 1100px; }
  }
`;

function BuchenPage() {
  useEffect(() => {
    // Calendly inline widget script — provides best inline rendering.
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return (
    <div className="bk">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bk-wrap">
        <a className="bk-back" href="/">← zurück</a>
        <p className="bk-label">Kostenfreies Kennenlerngespräch</p>
        <h1 className="bk-title">
          Buche deinen <em>Vibecall</em>
        </h1>
        <p className="bk-sub">
          30 Minuten, in denen wir uns gegenseitig spüren. Du erzählst mir, was dich bewegt — und wir schauen gemeinsam, ob HEIMWEH der richtige Weg für dich ist.
        </p>
        <div className="bk-frame">
          <div
            className="calendly-inline-widget bk-cal"
            data-url="https://calendly.com/carina-kolb/vibe-call?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1008&primary_color=c9a96e"
          />
        </div>
      </div>
    </div>
  );
}