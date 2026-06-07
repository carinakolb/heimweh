import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bridgeAsset from "@/assets/carina-bridge.jpeg.asset.json";
import portraitAsset from "@/assets/carina-portrait.jpeg.asset.json";
import natureAsset from "@/assets/carina-nature.jpeg.asset.json";

const heroImg = bridgeAsset.url;
const portraitImg = portraitAsset.url;
const natureImg = natureAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEIMWEH - Der Weg zurück zu dir | Souverän Sein" },
      {
        name: "description",
        content:
          "Für alle, die diese Leere spüren und sie nicht mehr ignorieren wollen. Core Emotional Bodywork in Zürich mit Carina.",
      },
      { property: "og:title", content: "HEIMWEH - Der Weg zurück zu dir" },
      {
        property: "og:description",
        content:
          "Komm nach Hause. Eine intime 1:1 Begleitung. 3 Sessions + WhatsApp-Begleitung + 2 Embodiment-Aufnahmen.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap",
      },
    ],
  }),
  component: Index,
});

const CSS = `
.heimweh-page *, .heimweh-page *::before, .heimweh-page *::after { margin: 0; padding: 0; box-sizing: border-box; }

.heimweh-page {
  --cream: #f5f0e8;
  --brown-deep: #1a1008;
  --brown-mid: #2c1a0e;
  --brown-warm: #3d2510;
  --gold: #c9a96e;
  --gold-light: #e0c48a;
  --text-muted: rgba(245,240,232,0.5);
  --text-body: rgba(245,240,232,0.8);
  background: var(--brown-deep);
  color: var(--cream);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
  line-height: 1.75;
  scroll-behavior: smooth;
  position: relative;
}

.heimweh-page::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 999;
  opacity: 0.35;
}

.heimweh-page h1, .heimweh-page h2, .heimweh-page h3 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.heimweh-page nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 28px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, rgba(26,16,8,0.97), transparent);
}
.heimweh-page .nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
}
.heimweh-page .nav-cta {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cream);
  text-decoration: none;
  border-bottom: 1px solid rgba(245,240,232,0.3);
  padding-bottom: 2px;
  transition: color 0.3s, border-color 0.3s;
}
.heimweh-page .nav-cta:hover { color: var(--gold); border-color: var(--gold); }

.heimweh-page .btn {
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 18px 52px;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
}
.heimweh-page .btn-gold { background: var(--gold); color: var(--brown-deep); }
.heimweh-page .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); }
.heimweh-page .btn-outline {
  border: 1px solid rgba(245,240,232,0.3);
  color: var(--cream);
  background: transparent;
  margin-left: 16px;
}
.heimweh-page .btn-outline:hover { border-color: var(--gold); color: var(--gold); }

.heimweh-page .reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.85s ease, transform 0.85s ease;
}
.heimweh-page .reveal.visible { opacity: 1; transform: translateY(0); }
.heimweh-page .reveal-delay-1 { transition-delay: 0.15s; }
.heimweh-page .reveal-delay-2 { transition-delay: 0.3s; }
.heimweh-page .reveal-delay-3 { transition-delay: 0.45s; }

.heimweh-page .hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 48px 100px;
  background:
    linear-gradient(to top, var(--brown-deep) 0%, rgba(26,16,8,0.55) 45%, rgba(26,16,8,0.35) 100%),
    url("${heroImg}") center 30% / cover no-repeat,
    var(--brown-deep);
  position: relative;
  overflow: hidden;
}
.heimweh-page .hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 70%, rgba(61,37,16,0.55) 0%, transparent 55%);
  pointer-events: none;
}
.heimweh-page .hero > * { position: relative; z-index: 2; }

.heimweh-page .image-band {
  position: relative;
  height: 70vh;
  min-height: 420px;
  background-image:
    linear-gradient(to bottom, rgba(26,16,8,0.55), rgba(26,16,8,0.35) 50%, rgba(26,16,8,0.75)),
    url("${natureImg}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  text-align: center;
}
.heimweh-page .image-band-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: clamp(20px, 2.8vw, 34px);
  color: var(--cream);
  max-width: 720px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}
.heimweh-page .image-band-text em { color: var(--gold-light); font-style: italic; }

.heimweh-page .carina-portrait {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.02);
  box-shadow: 0 30px 80px -30px rgba(0,0,0,0.7);
}
.heimweh-page .carina-portrait-wrap {
  position: relative;
}
.heimweh-page .carina-portrait-wrap::before {
  content: '';
  position: absolute;
  inset: 18px -18px -18px 18px;
  border: 1px solid var(--gold);
  opacity: 0.6;
  pointer-events: none;
}
.heimweh-page .hero-eyebrow {
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 28px;
  opacity: 0;
  animation: hwFadeUp 1s 0.4s forwards;
}
.heimweh-page .hero-title {
  font-size: clamp(72px, 11vw, 150px);
  font-weight: 700;
  line-height: 0.92;
  margin-bottom: 40px;
  opacity: 0;
  animation: hwFadeUp 1s 0.7s forwards;
}
.heimweh-page .hero-title-italic { font-style: italic; color: var(--gold-light); display: block; }
.heimweh-page .hero-tagline {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(18px, 2.2vw, 26px);
  font-weight: 300;
  color: var(--text-body);
  max-width: 580px;
  line-height: 1.65;
  margin-bottom: 52px;
  opacity: 0;
  animation: hwFadeUp 1s 1s forwards;
}
.heimweh-page .hero-btns { opacity: 0; animation: hwFadeUp 1s 1.3s forwards; }
.heimweh-page .hero-scroll {
  position: absolute;
  bottom: 48px;
  right: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0;
  animation: hwFadeIn 1s 2s forwards;
}
.heimweh-page .hero-scroll span {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  writing-mode: vertical-rl;
}
.heimweh-page .hero-scroll-line {
  width: 1px;
  height: 80px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: hwScrollPulse 2.5s infinite;
}

.heimweh-page section { position: relative; }

.heimweh-page .section-label {
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.heimweh-page .recognition { padding: 140px 48px; max-width: 1140px; margin: 0 auto; }
.heimweh-page .recognition-intro {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  max-width: 820px;
  margin-bottom: 80px;
}
.heimweh-page .recognition-intro em { color: var(--gold-light); font-style: italic; }

.heimweh-page .recognition-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(245,240,232,0.07);
  margin-bottom: 80px;
}
.heimweh-page .recognition-card { background: var(--brown-deep); padding: 52px 44px; transition: background 0.4s; }
.heimweh-page .recognition-card:hover { background: rgba(44,26,14,0.9); }
.heimweh-page .rec-card-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(22px, 2.2vw, 28px);
  font-weight: 700;
  color: var(--cream);
  line-height: 1.2;
  margin-bottom: 20px;
}
.heimweh-page .rec-card-body {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(15px, 1.5vw, 18px);
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.7;
}

.heimweh-page .recognition-statement {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 3.8vw, 52px);
  font-weight: 600;
  line-height: 1.2;
  max-width: 740px;
  color: var(--cream);
}
.heimweh-page .recognition-statement em { color: var(--gold-light); font-style: italic; }

.heimweh-page .cta-bar {
  padding: 72px 48px;
  background: var(--brown-mid);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}
.heimweh-page .cta-bar-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(18px, 2.2vw, 28px);
  font-weight: 300;
  color: var(--cream);
  max-width: 640px;
  line-height: 1.45;
}

.heimweh-page .warum {
  padding: 120px 48px;
  background: linear-gradient(to bottom, var(--brown-deep), var(--brown-mid), var(--brown-deep));
}
.heimweh-page .warum-inner { max-width: 820px; margin: 0 auto; text-align: center; }
.heimweh-page .warum-big {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 4vw, 54px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--cream);
  margin-bottom: 48px;
}
.heimweh-page .warum-big em { color: var(--gold-light); font-style: italic; }
.heimweh-page .warum-body {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(16px, 1.7vw, 21px);
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.75;
  margin-bottom: 32px;
}
.heimweh-page .warum-statement {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.9;
  max-width: 600px;
  margin: 0 auto 52px;
}

.heimweh-page .angebot { padding: 120px 48px; max-width: 1140px; margin: 0 auto; }
.heimweh-page .angebot-header { margin-bottom: 80px; }
.heimweh-page .angebot-title { font-size: clamp(42px, 6vw, 88px); line-height: 0.95; margin-bottom: 20px; }
.heimweh-page .angebot-title-italic { font-style: italic; color: var(--gold-light); display: block; }
.heimweh-page .angebot-sub {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(16px, 1.7vw, 22px);
  font-weight: 300;
  color: var(--text-body);
  max-width: 520px;
  margin-top: 16px;
}

.heimweh-page .sessions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: rgba(245,240,232,0.06);
  margin-bottom: 2px;
}
.heimweh-page .session-card { background: var(--brown-deep); padding: 52px 40px; }
.heimweh-page .session-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 80px;
  font-weight: 700;
  color: rgba(201,169,110,0.1);
  line-height: 1;
  margin-bottom: 16px;
}
.heimweh-page .session-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 16px;
}
.heimweh-page .session-body { font-size: 13px; color: var(--text-muted); line-height: 1.9; }

.heimweh-page .includes-box {
  border: 1px solid rgba(201,169,110,0.2);
  padding: 52px 48px;
  margin-bottom: 2px;
  background: var(--brown-deep);
}
.heimweh-page .includes-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 36px;
}
.heimweh-page .includes-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 60px;
}
.heimweh-page .includes-list li {
  font-size: 14px;
  color: var(--text-body);
  padding-left: 20px;
  position: relative;
  line-height: 1.7;
}
.heimweh-page .includes-list li::before { content: '-'; position: absolute; left: 0; color: var(--gold); }

.heimweh-page .price-block {
  background: radial-gradient(ellipse at center, rgba(61,37,16,0.7) 0%, var(--brown-deep) 70%);
  padding: 80px 48px;
  text-align: center;
}
.heimweh-page .price-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.heimweh-page .price-amount {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(56px, 8vw, 100px);
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 14px;
}
.heimweh-page .price-note {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: var(--text-muted);
  margin-bottom: 48px;
}

.heimweh-page .after { padding: 120px 48px; max-width: 1140px; margin: 0 auto; text-align: center; }
.heimweh-page .after-title { font-size: clamp(34px, 4.5vw, 64px); line-height: 1.05; max-width: 680px; margin: 0 auto 80px; }
.heimweh-page .after-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: rgba(245,240,232,0.06);
  text-align: left;
  margin-bottom: 80px;
}
.heimweh-page .after-card { background: var(--brown-deep); padding: 48px 36px; }
.heimweh-page .after-before {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: var(--text-muted);
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(245,240,232,0.07);
  margin-bottom: 20px;
  line-height: 1.6;
}
.heimweh-page .after-arrow { color: var(--gold); font-size: 20px; margin-bottom: 16px; }
.heimweh-page .after-result {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(16px, 1.7vw, 20px);
  font-weight: 400;
  color: var(--cream);
  line-height: 1.5;
}

.heimweh-page .furwen { padding: 120px 48px; background: linear-gradient(135deg, var(--brown-mid) 0%, var(--brown-deep) 100%); }
.heimweh-page .furwen-inner {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: start;
}
.heimweh-page .furwen-title { font-size: clamp(36px, 4vw, 58px); line-height: 1.05; margin-bottom: 40px; }
.heimweh-page .furwen-list { list-style: none; }
.heimweh-page .furwen-list li {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(15px, 1.5vw, 19px);
  font-weight: 300;
  color: var(--text-body);
  padding: 20px 0;
  border-bottom: 1px solid rgba(245,240,232,0.07);
  line-height: 1.6;
}
.heimweh-page .furwen-list li:first-child { border-top: 1px solid rgba(245,240,232,0.07); }
.heimweh-page .furwen-right { padding-top: 80px; }
.heimweh-page .quote-block {
  border-left: 2px solid var(--gold);
  padding: 36px 44px;
  background: rgba(44,26,14,0.5);
  margin-bottom: 2px;
}
.heimweh-page .quote-block-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(17px, 1.8vw, 22px);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.6;
}
.heimweh-page .quote-small {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.7;
  padding: 32px 0;
  border-top: 1px solid rgba(245,240,232,0.07);
}

.heimweh-page .carina { padding: 120px 48px; background: linear-gradient(to bottom, var(--brown-deep), rgba(44,26,14,0.4), var(--brown-deep)); }
.heimweh-page .carina-inner {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}
.heimweh-page .carina-title { font-size: clamp(34px, 3.8vw, 56px); line-height: 1.05; margin-bottom: 36px; }
.heimweh-page .carina-body-italic {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(17px, 1.8vw, 22px);
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.7;
  margin-bottom: 28px;
}
.heimweh-page .carina-body { font-size: 14px; color: var(--text-muted); line-height: 1.95; margin-bottom: 24px; }
.heimweh-page .carina-signature {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  font-style: italic;
  color: var(--gold);
  margin-top: 40px;
}

.heimweh-page .final {
  padding: 180px 48px;
  text-align: center;
  background: radial-gradient(ellipse at center, rgba(61,37,16,0.75) 0%, var(--brown-deep) 65%);
  position: relative;
  overflow: hidden;
}
.heimweh-page .final::before {
  content: 'HEIMWEH';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(80px, 18vw, 280px);
  font-weight: 700;
  color: rgba(201,169,110,0.03);
  white-space: nowrap;
  pointer-events: none;
  letter-spacing: 0.06em;
}
.heimweh-page .final-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
.heimweh-page .final-title { font-size: clamp(44px, 6.5vw, 96px); line-height: 1.0; margin-bottom: 36px; }
.heimweh-page .final-title em { font-style: italic; color: var(--gold-light); }
.heimweh-page .final-body {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(17px, 1.8vw, 22px);
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.65;
  margin-bottom: 60px;
}
.heimweh-page .final-details {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 28px;
  letter-spacing: 0.06em;
  line-height: 2;
}

.heimweh-page footer {
  padding: 52px 48px;
  border-top: 1px solid rgba(245,240,232,0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.heimweh-page .footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 17px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
}
.heimweh-page .footer-links { display: flex; gap: 32px; }
.heimweh-page .footer-links a {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}
.heimweh-page .footer-links a:hover { color: var(--gold); }
.heimweh-page .footer-copy { font-size: 11px; color: rgba(245,240,232,0.18); width: 100%; margin-top: 12px; }

@keyframes hwFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
@keyframes hwFadeIn { to { opacity: 1; } }
@keyframes hwScrollPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

@media (max-width: 820px) {
  .heimweh-page nav { padding: 22px 24px; }
  .heimweh-page .hero { padding: 0 24px 80px; }
  .heimweh-page .recognition, .heimweh-page .angebot, .heimweh-page .after, .heimweh-page .carina, .heimweh-page .final { padding: 80px 24px; }
  .heimweh-page .furwen { padding: 80px 24px; }
  .heimweh-page .warum { padding: 80px 24px; }
  .heimweh-page .cta-bar { padding: 52px 24px; flex-direction: column; align-items: flex-start; }
  .heimweh-page .recognition-grid, .heimweh-page .sessions-grid, .heimweh-page .after-grid { grid-template-columns: 1fr; }
  .heimweh-page .includes-list { grid-template-columns: 1fr; }
  .heimweh-page .furwen-inner, .heimweh-page .carina-inner { grid-template-columns: 1fr; gap: 60px; }
  .heimweh-page .furwen-right { padding-top: 0; }
  .heimweh-page .btn-outline { margin-left: 0; margin-top: 16px; display: block; }
  .heimweh-page footer { padding: 40px 24px; }
  .heimweh-page .image-band { height: 50vh; min-height: 320px; padding: 0 24px; }
}
`;

const BODY_HTML = `
<nav>
  <a href="#" class="nav-logo">Souverän Sein</a>
  <a href="#buchen" class="nav-cta">Platz sichern</a>
</nav>

<section class="hero">
  <p class="hero-eyebrow">Core Emotional Bodywork · Zürich</p>
  <h1 class="hero-title">
    HEIMWEH<br>
    <span class="hero-title-italic">Der Weg zurück zu dir.</span>
  </h1>
  <p class="hero-tagline">
    Für alle, die diese Leere spüren und sie nicht mehr ignorieren wollen.<br>
    Für alle, die sich wieder selbst spüren wollen und ihre Lebensfreude zurück wollen.
  </p>
  <div class="hero-btns">
    <a href="#buchen" class="btn btn-gold">Ja. Ich will nach Hause.</a>
    <a href="#erkennst-du-dich" class="btn btn-outline">Ich will mehr wissen</a>
  </div>
  <div class="hero-scroll">
    <div class="hero-scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

<section id="erkennst-du-dich">
  <div class="recognition">
    <div class="recognition-intro reveal">
      Dein Kalender ist voll, aber <em>du bist leer.</em><br>
      Du funktionierst, du erledigst, du gibst.
    </div>
    <div class="recognition-grid reveal reveal-delay-1">
      <div class="recognition-card">
        <p class="rec-card-headline">Jeder Abend ist verplant.</p>
        <p class="rec-card-body">Und nein, es ist nicht, weil du "einfach viel zu tun" hast. Du hast Angst dir selbst zu begegnen. Weil du dann erkennen würdest, wie weit du dich von dir selbst entfernt hast und wie gross diese Leere bereits ist.</p>
      </div>
      <div class="recognition-card">
        <p class="rec-card-headline">Dein Körper spricht schon lange mit dir.</p>
        <p class="rec-card-body">Die Mensbeschwerden, die Stimmungsschwankungen, das ständige tiefe Einatmen mit dem Versuch, die Enge in der Brust zu lösen. Die Lust auf das Leben ist irgendwo verschwunden. Du fragst dich, wann das geschehen ist.</p>
      </div>
      <div class="recognition-card">
        <p class="rec-card-headline">Alleine bist du stark.</p>
        <p class="rec-card-body">Es geht dir nicht gut. Seit Wochen kannst du nicht mehr gut schlafen. Ein Thema, das dich so beschäftigt, lässt dich stundenlang wachliegen. Aber du kannst es niemandem sagen.</p>
      </div>
      <div class="recognition-card">
        <p class="rec-card-headline">Das Beschäftigtsein füllt aber nie die Leere in dir.</p>
        <p class="rec-card-body">Es unterdrückt nur, was du wirklich fühlst. Was du willst, ist Lebendigkeit, Echtheit und dich selbst wieder spüren. Doch das bringt dir dein voller Terminkalender nicht zurück.</p>
      </div>
    </div>
    <div class="recognition-statement reveal">
      Unkompliziert zu sein, ist oft kein Kompliment.<br>
      Sondern die höflichste Art zu sagen:<br>
      <em>Du existierst so leise, dass du niemanden störst.</em>
    </div>
  </div>
</section>

<div class="cta-bar">
  <p class="cta-bar-text reveal">"Wenn du immer noch glaubst, dass du erst Pause machen kannst, wenn alles erledigt ist, dann müssen wir reden."</p>
  <a href="#buchen" class="btn btn-gold reveal reveal-delay-1">Dann lass uns anfangen.</a>
</div>

<section class="warum">
  <div class="warum-inner">
    <p class="section-label reveal">Die Wahrheit</p>
    <h2 class="warum-big reveal reveal-delay-1">
      Dein Wert wird an deiner Leistung gemessen.<br>
      <em>Das hast du früh gelernt.</em>
    </h2>
    <p class="warum-body reveal reveal-delay-2">
      Denn irgendwann hast du gelernt: Wenn ich keine Bedürfnisse zeige, falle ich nicht negativ auf. Jeder mag dich, wenn du unkompliziert bist. So bist du beliebt.
    </p>
    <p class="warum-body reveal">
      Du hast dich so lange angepasst, zurückgenommen, kleiner gemacht, bis du in jeden Raum gepasst hast. So wird unkompliziert sein für dein Umfeld super. Nicht aber für dich.
    </p>
    <p class="warum-statement reveal reveal-delay-1">
      Dein Kritiker ist unersättlich. Keine Leistung wird ihm je reichen. Du gehst langsam an ihm kaputt.
    </p>
    <br><br>
    <p class="warum-body reveal reveal-delay-2">
      Deine Bedürfnisse sind klar. Dein Kritiker aber mächtiger. Es ist an der Zeit, dieses Muster zu durchbrechen und diesen Kampf gegen dich zu beenden.
    </p>
    <br>
    <a href="#buchen" class="btn btn-gold reveal reveal-delay-3">Ich bin bereit, dieses Muster zu beenden.</a>
  </div>
</section>

<section id="angebot">
  <div class="angebot">
    <div class="angebot-header reveal">
      <p class="section-label">Das Angebot</p>
      <h2 class="angebot-title">
        HEIMWEH<br>
        <span class="angebot-title-italic">ist meine Begleitung für dich.</span>
      </h2>
      <p class="angebot-sub">Für ein Leben mit dir, voller Tatendrang und Lebendigkeit, aus dem Ort der Fülle.</p>
    </div>
    <div class="sessions-grid reveal reveal-delay-1">
      <div class="session-card">
        <div class="session-num">01</div>
        <h3 class="session-title">Ankommen</h3>
        <p class="session-body">Wir schauen gemeinsam, wo du gerade stehst und was dich von dir trennt. Dein Nervensystem bekommt zum ersten Mal Raum, sich zu zeigen. Du bekommst endlich diese Ruhe in dir, nach der du dich so lange gesehnt hast.</p>
      </div>
      <div class="session-card">
        <div class="session-num">02</div>
        <h3 class="session-title">In die Tiefe</h3>
        <p class="session-body">Core Emotional Bodywork. Wir gehen dorthin, wo die Worte aufhören, in den Körper. Die Stimme, die so viel unterdrückt wurde, darf laut sein. In einem wertungsfreien Raum darf endlich diese Frau sein, die du bist.</p>
      </div>
      <div class="session-card">
        <div class="session-num">03</div>
        <h3 class="session-title">Heimkommen</h3>
        <p class="session-body">Du begegnest dir wieder selbst. Und mit jedem Mal wird dieser Abstand, diese Leere, welche nach Terminen schreit, kleiner. Was zurück bleibt, bist du. Nah bei dir, nah an deinem echten Ich.</p>
      </div>
    </div>
    <div class="includes-box reveal">
      <p class="includes-label">Was HEIMWEH enthält</p>
      <ul class="includes-list">
        <li>3 tiefgehende 1:1 Sessions (je 60 Min.) in Zürich</li>
        <li>WhatsApp-Begleitung zwischen den Sessions</li>
        <li>2 Embodiment-Aufnahmen für dich zuhause</li>
        <li>Core Emotional Bodywork, körperorientierte Arbeit</li>
        <li>Individueller Support auf deinem Weg zurück zu dir</li>
        <li>Meine volle Präsenz und Erfahrung</li>
      </ul>
    </div>
    <div class="price-block" id="buchen">
      <p class="price-label reveal">Investition</p>
      <p class="price-amount reveal reveal-delay-1">CHF 1100</p>
      <p class="price-note reveal reveal-delay-2">Ratenzahlung auf Anfrage möglich · Twint, Überweisung oder Bar</p>
      <a href="mailto:hallo@souveraen.sein?subject=HEIMWEH" class="btn btn-gold reveal reveal-delay-3">Ich sichere mir meinen Platz.</a>
    </div>
  </div>
</section>

<div class="cta-bar">
  <p class="cta-bar-text reveal">Heute tue ich es aus der Lust heraus. Aus dem Gefühl heraus, das Leben mit mir zu leben.</p>
  <a href="#buchen" class="btn btn-gold reveal reveal-delay-1">Ich will das auch.</a>
</div>

<div class="image-band">
  <p class="image-band-text reveal">
    Zurück zu dem Ort, an dem du wieder <em>atmen</em> kannst.<br>
    Dorthin, wo du dir selbst begegnest.
  </p>
</div>

<section>
  <div class="after">
    <p class="section-label reveal">Nach der Begleitung</p>
    <h2 class="after-title reveal reveal-delay-1">Wie es sich danach anfühlt</h2>
    <div class="after-grid reveal reveal-delay-2">
      <div class="after-card">
        <p class="after-before">"Die Gruppe soll nicht wegen mir warten müssen."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Du sprichst deine Bedürfnisse klar aus. Kein schlechtes Gewissen, kein unsichtbar sein.</p>
      </div>
      <div class="after-card">
        <p class="after-before">"Ich darf da sein, solange ich nichts brauche."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Du sagst Nein und dein Körper entspannt sich. Du lässt deine Bedürfnisse nicht kleinreden, sondern gibst ihnen Platz.</p>
      </div>
      <div class="after-card">
        <p class="after-before">"Ich gönn mir Pause erst, wenn alles erledigt ist."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Du gönnst dir Pausen. Ohne schlechtes Gewissen. Du sprichst deine Wahrheit, nimmst Raum ein und fühlst dich dabei wohl.</p>
      </div>
      <div class="after-card">
        <p class="after-before">"Dein Wert wird an deiner Leistung gemessen."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Du hörst auf, Dinge zu tun, die nur den inneren Kritiker befriedigen. Aus dieser Fülle handeln bedeutet: Dein Körper ist für dich. Pure Erfüllung.</p>
      </div>
      <div class="after-card">
        <p class="after-before">"Alleine sein löst Herzrasen, Schlaflosigkeit und Zittern aus."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Du stumpfst nicht mehr ab. Die Lust auf das Leben, auf dich und auf Kreieren kehrt zurück. Deine Augen bekommen das Funkeln zurück.</p>
      </div>
      <div class="after-card">
        <p class="after-before">"Der Kampf gegen mich selbst."</p>
        <div class="after-arrow">↓</div>
        <p class="after-result">Der Kampf gegen dich selbst wird beendet. Indem du zugelassen hast, deine Schwächen zu zeigen und sie lieben zu lernen. In einem wertungsfreien Raum.</p>
      </div>
    </div>
    <a href="#buchen" class="btn btn-gold reveal">So will ich mich fühlen.</a>
  </div>
</section>

<section>
  <div class="furwen">
    <div class="furwen-inner">
      <div>
        <p class="section-label reveal">HEIMWEH ist für dich</p>
        <h2 class="furwen-title reveal reveal-delay-1">Wenn du sehr gut funktionierst, aber dich dabei vergisst.</h2>
        <ul class="furwen-list reveal reveal-delay-2">
          <li>Wenn du dich nach Leichtigkeit sehnst.</li>
          <li>Wenn du die Lust am Leben, an dir und am Kreiern verloren hast.</li>
          <li>Wenn du immer alles unter Kontrolle hast und für einen Tag mal einfach nur empfangen willst.</li>
          <li>Wenn du weisst, dass Nein-Sagen richtig wäre, und es trotzdem nicht kannst.</li>
          <li>Wenn der innere Kritiker lauter ist als alles andere.</li>
          <li>Wenn du dich in Beziehungen verlierst und nicht weisst, wer du ohne das andere bist.</li>
          <li>Wenn du spürst: Ich muss zurück zu mir. Aber ich weiss nicht wie.</li>
        </ul>
      </div>
      <div class="furwen-right">
        <div class="quote-block reveal">
          <p class="quote-block-text">
            "Mach nicht weniger. Verfolge diese Projekte. Mach was dir Freude bereitet. Lebe ein Leben voller Tatendrang. Aber mach es aus dem richtigen Ort heraus."
          </p>
        </div>
        <p class="quote-small reveal reveal-delay-1">
          "Frag dich ehrlich: Tust du es, weil du es liebst? Oder damit du dir selbst beweist, dass du genug bist? Das ist nicht dasselbe."
        </p>
        <p class="quote-small reveal reveal-delay-2">
          Bin ich es wert, dass man für mich anhält? Auch wenn ich gerade nichts zurückgeben kann? Ja. Das ändern wir gemeinsam mit HEIMWEH.
        </p>
        <br>
        <a href="#buchen" class="btn btn-gold reveal reveal-delay-3">Ich nehme mir diesen Raum.</a>
      </div>
    </div>
  </div>
</section>

<div class="cta-bar">
  <p class="cta-bar-text reveal">Sie buchte eine Session Emotional Bodywork und bekam endlich diese Ruhe in sich, nach der sie sich so lange sehnte.</p>
  <a href="#buchen" class="btn btn-gold reveal reveal-delay-1">Ich will diese Ruhe.</a>
</div>

<section>
  <div class="carina">
    <div class="carina-inner">
      <div>
        <p class="section-label reveal">Wer ich bin</p>
        <h2 class="carina-title reveal reveal-delay-1">Ich habe jahrelang so gelebt.</h2>
        <p class="carina-body-italic reveal reveal-delay-2">
          Bis ich in einem Retreat zum ersten Mal zugelassen habe, dass jemand mich in meinen tiefsten Ängsten hält. In einem wertungsfreien Raum.
        </p>
        <p class="carina-body reveal">
          Der Kampf gegen mich selbst wurde beendet, indem ich zugelassen habe, meine Schwächen zu zeigen und sie lieben zu lernen. Damit konnte ich meinen inneren Kritiker ein für alle Mal verabschieden. Weil ich mich ab diesem Moment sicher gefühlt habe, jede Seite von mir zu zeigen.
        </p>
        <p class="carina-body reveal">
          Ich weiss, wie es sich anfühlt, von diesem inneren Kritiker getrieben zu werden. Heute erschaffe ich Räume, in welchen Menschen lernen, ihm nicht mehr zu glauben.
        </p>
        <p class="carina-body reveal">
          Ich setze an, bevor es andere tun. Dann wenn du weisst, dass du etwas ändern musst, und noch die Kraft hast, es zu tun.
        </p>
        <p class="carina-signature reveal">Carina</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 8px; letter-spacing: 0.1em;" class="reveal">Somatic Coach · Core Emotional Bodywork · Zürich</p>
      </div>
      <div>
        <div class="quote-block reveal">
          <p class="quote-block-text">
            "Ich sage dir nicht, dass du anders denken musst. Ich bringe dich zurück in deinen Körper. Damit du in einem sicheren Raum üben kannst, wie es sich anfühlt, nein zu sagen, wie ein verkörpertes Nein sich anfühlt."
          </p>
        </div>
        <div class="carina-portrait-wrap reveal reveal-delay-1" style="margin: 36px 0 24px;">
          <img class="carina-portrait" src="${portraitImg}" alt="Carina, Somatic Coach" />
        </div>
        <p class="quote-small reveal reveal-delay-1">
          "Durch diesen Raum wirst du zur Verkörperung von Selbstliebe, von Souveränität dir selbst gegenüber, von purer Stärke."
        </p>
        <p class="quote-small reveal reveal-delay-2">
          "Mein Raum gibt dir die Möglichkeit, Frieden mit diesen Stimmen zu schliessen. Emotionen lernen zu halten, dich selbst regulieren und bei dir bleiben zu dürfen."
        </p>
      </div>
    </div>
  </div>
</section>

<section class="final">
  <div class="final-inner">
    <p class="section-label reveal">Du bist bereit</p>
    <h2 class="final-title reveal reveal-delay-1">
      Komm<br>
      <em>nach Hause.</em>
    </h2>
    <p class="final-body reveal reveal-delay-2">
      Für alle, die voller Tatendrang sind und weiterhin viel leisten wollen, ohne sich dabei zu verlieren.
    </p>
    <div class="reveal reveal-delay-3">
      <a href="mailto:hallo@souveraen.sein?subject=HEIMWEH - Ich bin bereit" class="btn btn-gold" style="padding: 22px 68px; font-size: 12px;">Ich bin bereit. Ich buche jetzt.</a>
    </div>
    <p class="final-details reveal">
      CHF 1100 · 3 Sessions + WhatsApp-Begleitung + 2 Embodiment-Aufnahmen<br>
      Ratenzahlung auf Anfrage · Zürich, Pfingstweidstrasse 31 · @souveraen.sein
    </p>
  </div>
</section>

<footer>
  <p class="footer-logo">Souverän Sein</p>
  <div class="footer-links">
    <a href="https://instagram.com/souveraen.sein" target="_blank">Instagram</a>
    <a href="mailto:hallo@souveraen.sein">Kontakt</a>
    <a href="#">Impressum</a>
  </div>
  <p class="footer-copy">© 2025 Souverän Sein · Carina · Zürich</p>
</footer>
`;

function Index() {
  useEffect(() => {
    const root = document.querySelector(".heimweh-page");
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    root.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const handler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const t = document.querySelector(href);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchors = root.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", handler));

    return () => {
      observer.disconnect();
      anchors.forEach((a) => a.removeEventListener("click", handler));
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="heimweh-page" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}