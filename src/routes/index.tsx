import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bridgeAsset from "@/assets/carina-bridge.jpeg.asset.json";
import portraitAsset from "@/assets/carina-portrait.jpeg.asset.json";
import natureAsset from "@/assets/carina-nature.jpeg.asset.json";
import handsAsset from "@/assets/heimweh-hands.jpeg.asset.json";
import faceAsset from "@/assets/heimweh-face.jpeg.asset.json";
import waterfallAsset from "@/assets/heimweh-waterfall.jpeg.asset.json";
import videoAsset from "@/assets/heimweh-video.mp4.asset.json";
import video2Asset from "@/assets/heimweh-video-2.mp4.asset.json";
import video3Asset from "@/assets/heimweh-video-3.mp4.asset.json";

const bridgeImg = bridgeAsset.url;
const portraitImg = portraitAsset.url;
const natureImg = natureAsset.url;
const handsImg = handsAsset.url;
const faceImg = faceAsset.url;
const waterfallImg = waterfallAsset.url;
const heimwehVideo = videoAsset.url;
const heimwehVideo2 = video2Asset.url;
const heimwehVideo3 = video3Asset.url;
const IG_URL = "https://instagram.com/souveraen.sein";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEIMWEH - Der Weg zurück zu dir | Souverän Sein" },
      {
        name: "description",
        content:
          "Core Emotional Bodywork in Zürich. 1:1 Begleitung für Frauen, die müde sind, sich selbst zu verlassen.",
      },
      { property: "og:title", content: "HEIMWEH - Der Weg zurück zu dir" },
      {
        property: "og:description",
        content:
          "3 x 1:1 Session · 2 Embodiment-Aufnahmen · WhatsApp-Begleitung. Zürich.",
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
.hw *, .hw *::before, .hw *::after { margin: 0; padding: 0; box-sizing: border-box; }
.hw {
  --cream: #f5f0e8;
  --deep: #1a1008;
  --mid: #2c1a0e;
  --warm: #3d2510;
  --gold: #c9a96e;
  --gold-l: #e0c48a;
  --muted: rgba(245,240,232,0.5);
  --body: rgba(245,240,232,0.8);
  --light-bg: #f0ebe0;
  --light-text: #2c1a0e;
  background:var(--deep); color:var(--cream); font-family:'Poppins',sans-serif; font-weight:300; overflow-x:hidden; line-height:1.75; scroll-behavior:smooth; position:relative;
}
.hw::before { content:''; position:fixed; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events:none; z-index:999; opacity:0.35; }
.hw h1,.hw h2,.hw h3 { font-family:'Cormorant Garamond',serif; font-weight:700; line-height:1.05; }

.hw nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:24px 52px; display:flex; justify-content:space-between; align-items:center; background:linear-gradient(to bottom,rgba(26,16,8,0.97),transparent); }
.hw .nav-logo { font-family:'Cormorant Garamond',serif; font-size:14px; font-weight:400; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); text-decoration:none; }
.hw .nav-cta { font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--cream); text-decoration:none; border-bottom:1px solid rgba(245,240,232,0.3); padding-bottom:2px; transition:all 0.3s; }
.hw .nav-cta:hover { color:var(--gold); border-color:var(--gold); }

.hw .btn { display:inline-block; font-family:'Poppins',sans-serif; font-size:11px; font-weight:400; letter-spacing:0.18em; text-transform:uppercase; text-decoration:none; padding:18px 52px; transition:all 0.3s; cursor:pointer; border:none; }
.hw .btn-gold { background:var(--gold); color:var(--deep); }
.hw .btn-gold:hover { background:var(--gold-l); transform:translateY(-2px); }
.hw .btn-outline { border:1px solid rgba(245,240,232,0.3); color:var(--cream); background:transparent; }
.hw .btn-outline:hover { border-color:var(--gold); color:var(--gold); }

.hw .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.8s ease, transform 0.8s ease; }
.hw .reveal.visible { opacity:1; transform:translateY(0); }
.hw .d1 { transition-delay:0.15s; } .hw .d2 { transition-delay:0.3s; } .hw .d3 { transition-delay:0.45s; }
.hw .label { font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold); display:block; margin-bottom:20px; }
.hw .label-dark { font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:var(--light-text); font-weight:600; display:block; margin-bottom:20px; }

.hw .hero { min-height:100vh; display:flex; flex-direction:column; justify-content:flex-end; padding:0 52px 110px; background:var(--deep); position:relative; overflow:hidden; }
.hw .hero::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom, rgba(26,16,8,0.55) 0%, rgba(26,16,8,0.62) 60%, rgba(26,16,8,0.85) 100%); z-index:0; pointer-events:none; }
.hw .hero-label { font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold); margin-bottom:28px; opacity:0; animation:hwFadeUp 1s 0.4s forwards; }
.hw .hero-title { font-size:clamp(72px,11vw,150px); font-weight:700; line-height:0.92; margin-bottom:36px; opacity:0; animation:hwFadeUp 1s 0.7s forwards; }
.hw .hero-title em { font-style:italic; color:var(--gold-l); display:block; }
.hw .hero-sub { font-family:'Cormorant Garamond',serif; font-size:clamp(19px,2.2vw,27px); font-style:italic; color:var(--body); max-width:620px; line-height:1.6; margin-bottom:16px; opacity:0; animation:hwFadeUp 1s 1s forwards; }
.hw .hero-sub2 { font-size:13px; color:var(--muted); max-width:560px; line-height:1.85; margin-bottom:52px; opacity:0; animation:hwFadeUp 1s 1.15s forwards; }
.hw .hero-btns { opacity:0; animation:hwFadeUp 1s 1.3s forwards; display:flex; gap:16px; flex-wrap:wrap; }
.hw .hero-scroll { position:absolute; bottom:48px; right:52px; display:flex; flex-direction:column; align-items:center; gap:12px; opacity:0; animation:hwFadeIn 1s 2s forwards; }
.hw .hero-scroll span { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); writing-mode:vertical-rl; }
.hw .hero-scroll-line { width:1px; height:80px; background:linear-gradient(to bottom,var(--gold),transparent); animation:hwScrollPulse 2.5s infinite; }
.hw .hero-bg { position:absolute !important; inset:0 !important; width:100% !important; height:100% !important; object-fit:cover; object-position:center top; opacity:1; z-index:0 !important; }
.hw .hero > *:not(.hero-bg) { position:relative; z-index:1; }
@media (max-width: 820px) {
  .hw .hero { padding:0 24px 80px; min-height:100svh; }
  .hw .hero-bg { object-position:center center; }
  .hw .hero::after { background:linear-gradient(to bottom, rgba(26,16,8,0.25) 0%, rgba(26,16,8,0.45) 55%, rgba(26,16,8,0.85) 100%); }
  .hw .hero-title { font-size:clamp(54px,13vw,82px); }
}

.hw .clarity-bar { background:var(--mid); padding:72px 52px; display:flex; flex-direction:column; gap:28px; border-top:1px solid rgba(201,169,110,0.15); }
.hw .clarity-bar-label { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); }
.hw .clarity-bar-text { font-family:'Cormorant Garamond',serif; font-size:clamp(18px,2vw,24px); color:var(--body); line-height:1.75; max-width:740px; }

.hw .spiegel { padding:140px 52px; max-width:900px; margin:0 auto; }
.hw .spiegel-opener { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,5.5vw,72px); font-weight:700; line-height:1.05; margin-bottom:80px; }
.hw .spiegel-opener em { color:var(--gold-l); font-style:italic; }
.hw .spiegel-block { margin-bottom:72px; padding-bottom:72px; border-bottom:1px solid rgba(245,240,232,0.07); }
.hw .spiegel-block:last-of-type { border-bottom:none; }
.hw .spiegel-situation { font-family:'Cormorant Garamond',serif; font-size:clamp(17px,1.9vw,22px); color:var(--body); line-height:1.8; margin-bottom:24px; }
.hw .spiegel-eigentlich { font-family:'Cormorant Garamond',serif; font-size:clamp(19px,2.1vw,26px); font-weight:600; color:var(--cream); line-height:1.5; padding-left:28px; border-left:2px solid var(--gold); }
.hw .spiegel-eigentlich em { color:var(--gold-l); font-style:italic; }
.hw .spiegel-punch { font-family:'Cormorant Garamond',serif; font-size:clamp(28px,4vw,54px); font-weight:700; line-height:1.2; color:var(--cream); margin-top:80px; padding-top:80px; }
.hw .spiegel-punch em { color:var(--gold-l); font-style:italic; }

.hw .img-band { width:100%; height:60vh; min-height:380px; background-size:cover; background-position:center; position:relative; opacity:0.75; }
.hw .img-band::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom, rgba(26,16,8,0.65), rgba(26,16,8,0.8)); }

.hw .fuerwen { background:var(--light-bg); padding:100px 52px 60px; }
.hw .fuerwen-inner { max-width:900px; margin:0 auto; }
.hw .fuerwen-title { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4vw,54px); font-weight:700; line-height:1.1; color:var(--light-text); margin-bottom:52px; }
.hw .fuerwen-items { display:flex; flex-direction:column; gap:0; margin-bottom:52px; }
.hw .fuerwen-item { display:flex; align-items:flex-start; gap:20px; padding:22px 0; border-bottom:1px solid rgba(44,26,14,0.1); }
.hw .fuerwen-item:first-child { border-top:1px solid rgba(44,26,14,0.1); }
.hw .fuerwen-check { color:var(--warm); font-size:16px; flex-shrink:0; margin-top:3px; }
.hw .fuerwen-item-text { font-family:'Cormorant Garamond',serif; font-size:clamp(18px,1.9vw,22px); font-style:italic; color:var(--light-text); line-height:1.5; }
.hw .fuerwen-nicht { font-family:'Cormorant Garamond',serif; font-size:clamp(18px,2vw,24px); font-weight:700; color:var(--light-text); line-height:1.4; padding:40px 0 0; }
.hw .fuerwen-nicht em { font-style:italic; color:var(--warm); }

.hw .cta-bar { padding:48px 52px; background:var(--mid); display:flex; align-items:center; justify-content:space-between; gap:48px; flex-wrap:wrap; }
.hw .cta-bar-text { font-family:'Cormorant Garamond',serif; font-size:clamp(22px,2.8vw,38px); font-style:italic; color:var(--cream); max-width:640px; line-height:1.35; }

.hw .cta-bar-illum { position:relative; flex-direction:column; align-items:center; text-align:center; padding:110px 52px; gap:34px; background:radial-gradient(ellipse at center top, rgba(201,169,110,0.22), transparent 65%), var(--mid); overflow:hidden; justify-content:center; }
.hw .cta-bar-illum::before { content:''; position:absolute; top:-40%; left:50%; width:120%; height:120%; transform:translateX(-50%); background:radial-gradient(circle, rgba(224,196,138,0.16) 0%, transparent 55%); pointer-events:none; }
.hw .cta-bar-illum::after { content:''; position:absolute; left:50%; bottom:0; transform:translateX(-50%); width:min(560px,70%); height:1px; background:linear-gradient(90deg, transparent, var(--gold), transparent); }
.hw .illum-eyebrow { position:relative; font-family:'Poppins',sans-serif; font-size:10px; letter-spacing:0.55em; text-transform:uppercase; color:var(--gold); opacity:0.9; display:flex; align-items:center; gap:18px; }
.hw .illum-eyebrow::before, .hw .illum-eyebrow::after { content:''; width:36px; height:1px; background:var(--gold); opacity:0.55; }
.hw .illum-head { position:relative; font-family:'Cormorant Garamond',serif; font-weight:400; font-style:italic; font-size:clamp(44px,7vw,92px); line-height:1.02; letter-spacing:-0.01em; color:var(--cream); max-width:none; }
.hw .illum-head .gold { background:linear-gradient(180deg, var(--gold-l) 0%, var(--gold) 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }
.hw .illum-body { position:relative; font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(19px,2vw,24px); line-height:1.55; color:var(--body); max-width:640px; }
@media (max-width: 720px) { .hw .cta-bar-illum { padding:80px 24px; } .hw .illum-eyebrow::before, .hw .illum-eyebrow::after { width:20px; } }

.hw .reframe { padding:120px 52px 70px; max-width:900px; margin:0 auto; }
.hw .reframe-big { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4.5vw,62px); font-weight:700; line-height:1.1; color:var(--cream); margin-bottom:48px; }
.hw .reframe-big em { color:var(--gold-l); font-style:italic; }
.hw .reframe-body { font-family:'Cormorant Garamond',serif; font-size:clamp(18px,1.9vw,23px); font-style:italic; color:var(--body); line-height:1.8; margin-bottom:32px; max-width:740px; }
.hw .reframe-nicht { background:rgba(44,26,14,0.5); border-left:2px solid var(--gold); padding:44px 52px; margin:56px 0; }
.hw .reframe-nicht-title { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:28px; display:block; }
.hw .reframe-nicht-items { display:flex; flex-direction:column; gap:16px; }
.hw .reframe-nicht-item { font-size:13px; color:var(--muted); padding-left:20px; position:relative; }
.hw .reframe-nicht-item::before { content:'-'; position:absolute; left:0; color:var(--gold); }

.hw .desire { padding:80px 52px 140px; background:linear-gradient(to bottom,var(--deep),var(--mid),var(--deep)); }
.hw .desire-inner { max-width:900px; margin:0 auto; }
.hw .desire-title { font-family:'Cormorant Garamond',serif; font-size:clamp(36px,4.5vw,62px); font-weight:700; line-height:1.1; color:var(--cream); margin-bottom:72px; }
.hw .desire-title em { color:var(--gold-l); font-style:italic; }
.hw .desire-block { margin-bottom:64px; padding-bottom:64px; border-bottom:1px solid rgba(245,240,232,0.07); }
.hw .desire-block:last-of-type { border-bottom:none; margin-bottom:0; padding-bottom:0; }
.hw .desire-moment { font-family:'Cormorant Garamond',serif; font-size:clamp(22px,2.5vw,32px); font-weight:700; color:var(--cream); line-height:1.2; margin-bottom:20px; }
.hw .desire-desc { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(17px,1.9vw,21px); color:var(--body); line-height:1.8; }
.hw .desire-desc em { color:var(--gold-l); font-style:normal; }

.hw .methode { padding:120px 52px 40px; max-width:900px; margin:0 auto; }
.hw .methode-title { font-family:'Cormorant Garamond',serif; font-size:clamp(34px,4.5vw,60px); font-weight:700; line-height:1.1; margin-bottom:24px; }
.hw .methode-sub { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,2vw,24px); color:var(--body); line-height:1.7; max-width:680px; margin-bottom:72px; }
.hw .methode-carina { background:rgba(44,26,14,0.5); border-left:2px solid var(--gold); padding:48px 52px; margin-bottom:72px; }
.hw .methode-carina-big { font-family:'Cormorant Garamond',serif; font-size:clamp(20px,2.5vw,32px); font-weight:700; color:var(--cream); line-height:1.3; margin-bottom:24px; }
.hw .methode-carina-big em { color:var(--gold-l); font-style:italic; }
.hw .methode-carina-body { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(16px,1.7vw,20px); color:var(--body); line-height:1.8; }
.hw .methode-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(245,240,232,0.06); margin-bottom:72px; }
.hw .methode-step { background:var(--deep); padding:52px 40px; }
.hw .methode-step-num { font-family:'Cormorant Garamond',serif; font-size:72px; font-weight:700; color:rgba(201,169,110,0.1); line-height:1; margin-bottom:16px; }
.hw .methode-step-title { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:var(--cream); margin-bottom:14px; }
.hw .methode-step-body { font-size:13px; color:var(--muted); line-height:1.9; }
.hw .methode-lernst { padding:60px 0; border-top:1px solid rgba(201,169,110,0.15); }
.hw .methode-lernst-title { font-family:'Cormorant Garamond',serif; font-size:clamp(24px,3vw,40px); font-weight:700; color:var(--cream); margin-bottom:40px; }
.hw .methode-lernst-items { display:flex; flex-direction:column; gap:16px; margin-bottom:40px; }
.hw .methode-lernst-item { display:flex; gap:16px; align-items:flex-start; }
.hw .methode-lernst-dot { width:4px; height:4px; border-radius:50%; background:var(--gold); flex-shrink:0; margin-top:10px; }
.hw .methode-lernst-text { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(17px,1.8vw,21px); color:var(--body); line-height:1.6; }
.hw .methode-lernst-punch { font-family:'Cormorant Garamond',serif; font-size:clamp(22px,2.8vw,36px); font-weight:700; color:var(--cream); line-height:1.3; }
.hw .methode-lernst-punch em { color:var(--gold-l); font-style:italic; }

.hw .transformation { background:var(--light-bg); padding:100px 52px; }
.hw .transformation-inner { max-width:900px; margin:0 auto; }
.hw .transformation-title { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4vw,54px); font-weight:700; color:var(--light-text); line-height:1.1; margin-bottom:72px; }
.hw .transformation-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:rgba(44,26,14,0.1); margin-bottom:60px; }
.hw .trans-col { padding:52px 44px; }
.hw .trans-col-before { background:#ece6d8; }
.hw .trans-col-after { background:var(--mid); }
.hw .trans-col-label { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--warm); margin-bottom:32px; display:block; }
.hw .trans-col-label-after { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:32px; display:block; }
.hw .trans-items { display:flex; flex-direction:column; gap:20px; }
.hw .trans-item { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(16px,1.7vw,20px); color:var(--light-text); line-height:1.55; padding-bottom:20px; border-bottom:1px solid rgba(44,26,14,0.08); }
.hw .trans-item:last-child { border-bottom:none; padding-bottom:0; }
.hw .trans-item-after { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(16px,1.7vw,20px); color:var(--body); line-height:1.55; padding-bottom:20px; border-bottom:1px solid rgba(245,240,232,0.07); }
.hw .trans-item-after:last-child { border-bottom:none; padding-bottom:0; }
.hw .transformation-punch { font-family:'Cormorant Garamond',serif; font-size:clamp(20px,2.5vw,32px); font-weight:700; color:var(--light-text); line-height:1.35; text-align:center; max-width:700px; margin:0 auto; }
.hw .transformation-punch em { font-style:italic; color:var(--warm); }

.hw .testimonials { padding:120px 52px; max-width:900px; margin:0 auto; }
.hw .testimonials-intro { font-family:'Cormorant Garamond',serif; font-size:clamp(13px,1.2vw,15px); color:var(--muted); font-style:italic; line-height:1.8; max-width:640px; margin-bottom:80px; }
.hw .testimonials-title { font-family:'Cormorant Garamond',serif; font-size:clamp(34px,4.5vw,60px); font-weight:700; line-height:1.1; margin-bottom:16px; }
.hw .testimonials-title em { color:var(--gold-l); font-style:italic; }
.hw .testimonial-group { margin-bottom:60px; }
.hw .testimonial-group-label { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:28px; display:block; padding-bottom:16px; border-bottom:1px solid rgba(201,169,110,0.2); }
.hw .testimonial-block { background:rgba(44,26,14,0.4); border-left:2px solid var(--gold); padding:44px 48px; margin-bottom:2px; }
.hw .testimonial-text { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,1.9vw,23px); color:var(--body); line-height:1.7; margin-bottom:16px; }
.hw .testimonial-result { font-family:'Cormorant Garamond',serif; font-size:clamp(16px,1.7vw,20px); color:var(--gold-l); font-weight:600; line-height:1.5; }
.hw .testimonial-meta { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin-top:16px; display:block; }
.hw .testimonials-between { font-family:'Cormorant Garamond',serif; font-size:clamp(16px,1.9vw,22px); font-style:italic; color:var(--muted); text-align:center; padding:32px 0; }
.hw .testimonials-big { font-family:'Cormorant Garamond',serif; font-size:clamp(20px,2.5vw,34px); font-style:italic; font-weight:300; color:var(--cream); line-height:1.45; text-align:center; max-width:680px; margin:60px auto 0; padding-top:60px; border-top:1px solid rgba(201,169,110,0.15); }

.hw .angebot { padding:120px 52px; background:linear-gradient(to bottom,var(--deep),var(--mid)); }
.hw .angebot-inner { max-width:900px; margin:0 auto; }
.hw .angebot-title { font-size:clamp(44px,6vw,88px); line-height:0.95; margin-bottom:16px; }
.hw .angebot-title em { font-style:italic; color:var(--gold-l); display:block; }
.hw .angebot-sub { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,2vw,25px); color:var(--body); margin:16px 0 72px; line-height:1.6; max-width:580px; }
.hw .angebot-box { border:1px solid rgba(201,169,110,0.2); padding:60px 56px; margin-bottom:2px; background:var(--deep); }
.hw .angebot-box-label { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:40px; display:block; }
.hw .angebot-items { display:flex; flex-direction:column; gap:36px; }
.hw .angebot-item { display:flex; align-items:flex-start; gap:28px; padding-bottom:36px; border-bottom:1px solid rgba(245,240,232,0.06); }
.hw .angebot-item:last-child { border-bottom:none; padding-bottom:0; }
.hw .angebot-item-num { font-family:'Cormorant Garamond',serif; font-size:52px; font-weight:700; color:rgba(201,169,110,0.18); line-height:1; flex-shrink:0; width:64px; }
.hw .angebot-item-title { font-family:'Cormorant Garamond',serif; font-size:clamp(20px,2vw,26px); font-weight:600; color:var(--cream); margin-bottom:8px; }
.hw .angebot-item-body { font-size:13px; color:var(--muted); line-height:1.9; }
.hw .warum-jetzt { background:rgba(44,26,14,0.4); border:1px solid rgba(201,169,110,0.15); padding:48px 52px; margin:2px 0; }
.hw .warum-jetzt-text { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,2vw,24px); color:var(--body); line-height:1.7; }
.hw .price-block { background:radial-gradient(ellipse at center,rgba(61,37,16,0.7) 0%,var(--deep) 70%); padding:80px 52px; text-align:center; }
.hw .price-label { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); margin-bottom:16px; display:block; }
.hw .price-amount { font-family:'Cormorant Garamond',serif; font-size:clamp(60px,8vw,100px); font-weight:700; color:var(--gold); line-height:1; margin-bottom:14px; }
.hw .price-note { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:18px; color:var(--muted); margin-bottom:48px; }

.hw .carina { padding:120px 52px; background:linear-gradient(to bottom,var(--deep),rgba(44,26,14,0.4),var(--deep)); }
.hw .carina-inner { max-width:900px; margin:0 auto; display:block; }
.hw .carina-text-col {}
.hw .carina-portrait { width:100%; aspect-ratio:4/5; object-fit:cover; filter:sepia(0.1) brightness(0.95); }
.hw .carina-title { font-size:clamp(34px,4vw,56px); line-height:1.05; margin-bottom:32px; }
.hw .carina-italic { font-family:'Cormorant Garamond',serif; font-size:clamp(19px,2vw,25px); font-style:italic; color:var(--body); line-height:1.7; margin-bottom:24px; }
.hw .carina-regular { font-size:14px; color:var(--muted); line-height:1.95; margin-bottom:20px; }
.hw .carina-kompetenz { background:rgba(44,26,14,0.5); border-left:2px solid var(--gold); padding:36px 48px; margin:48px 0; }
.hw .carina-kompetenz-text { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(17px,1.8vw,21px); color:var(--body); line-height:1.75; }
.hw .carina-sig { font-family:'Cormorant Garamond',serif; font-size:36px; font-style:italic; color:var(--gold); margin-top:36px; display:block; }

.hw .faq { background:var(--light-bg); padding:100px 52px; }
.hw .faq-inner { max-width:900px; margin:0 auto; }
.hw .faq-title { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4vw,52px); font-weight:700; color:var(--light-text); line-height:1.1; margin-bottom:64px; }
.hw .faq-item { padding:32px 0; border-bottom:1px solid rgba(44,26,14,0.12); }
.hw .faq-item:last-child { border-bottom:none; }
.hw .faq-q { font-family:'Cormorant Garamond',serif; font-size:clamp(18px,1.9vw,23px); font-weight:700; color:var(--light-text); margin-bottom:16px; cursor:pointer; display:flex; justify-content:space-between; align-items:flex-start; gap:16px; }
.hw .faq-q-icon { font-size:20px; color:var(--warm); flex-shrink:0; font-family:'Poppins',sans-serif; font-weight:300; transition:transform 0.3s; }
.hw .faq-a { font-size:14px; color:var(--light-text); opacity:0.7; line-height:1.9; display:none; }
.hw .faq-item.open .faq-a { display:block; }
.hw .faq-item.open .faq-q-icon { transform:rotate(45deg); }

.hw .final { padding:180px 52px; text-align:center; background:radial-gradient(ellipse at center,rgba(61,37,16,0.75) 0%,var(--deep) 65%); position:relative; overflow:hidden; }
.hw .final::before { content:'HEIMWEH'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:'Cormorant Garamond',serif; font-size:clamp(80px,18vw,280px); font-weight:700; color:rgba(201,169,110,0.03); white-space:nowrap; pointer-events:none; letter-spacing:0.06em; }
.hw .final-inner { position:relative; z-index:2; max-width:680px; margin:0 auto; }
.hw .final-title { font-size:clamp(44px,7vw,100px); line-height:1.18; margin-bottom:36px; }
.hw .final-title em { font-style:italic; color:var(--gold-l); }
.hw .final-body { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(19px,2vw,26px); color:var(--body); line-height:1.65; margin-bottom:60px; }
.hw .final-details { font-size:12px; color:var(--muted); margin-top:28px; letter-spacing:0.06em; line-height:2.2; }

.hw footer { padding:52px; border-top:1px solid rgba(245,240,232,0.06); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; }
.hw .footer-logo { font-family:'Cormorant Garamond',serif; font-size:17px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); }
.hw .footer-links { display:flex; gap:32px; }
.hw .footer-links a { font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color 0.3s; }
.hw .footer-links a:hover { color:var(--gold); }
.hw .footer-copy { font-size:11px; color:rgba(245,240,232,0.18); width:100%; margin-top:12px; }

@keyframes hwFadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
@keyframes hwFadeIn { to { opacity:1; } }
@keyframes hwScrollPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }

@media (max-width: 820px) {
  .hw nav { padding:22px 24px; }
  .hw .hero { padding:0 24px 80px; }
  .hw .spiegel, .hw .reframe, .hw .methode, .hw .testimonials, .hw .angebot-inner, .hw .carina-inner { padding-left:24px; padding-right:24px; max-width:100%; }
  .hw .fuerwen, .hw .transformation, .hw .faq, .hw .desire { padding:80px 24px; }
  .hw .angebot { padding:80px 24px; }
  .hw .carina { padding:80px 24px; }
  .hw .carina-inner { grid-template-columns:1fr; gap:40px; padding-left:0; padding-right:0; }
  .hw .cta-bar { padding:52px 24px; flex-direction:column; align-items:flex-start; }
  .hw .methode-steps { grid-template-columns:1fr; }
  .hw .transformation-grid { grid-template-columns:1fr; }
  .hw .clarity-bar { padding:32px 24px; flex-direction:column; align-items:flex-start; gap:24px; }
  .hw .hero-btns { flex-direction:column; }
  .hw footer { padding:40px 24px; }
}

/* Readability + tone overrides */
.hw { --light-bg:#2a1a10; --light-text:#f0e6d5; }
.hw h1, .hw h2, .hw h3 { text-transform: uppercase; letter-spacing: 0.05em; }
.hw .spiegel-situation, .hw .spiegel-eigentlich, .hw .reframe-body, .hw .reframe-main,
.hw .desire-desc, .hw .fuerwen-item-text, .hw .fuerwen-nicht, .hw .trans-item,
.hw .trans-item-after, .hw .testimonial-text, .hw .testimonial-result,
.hw .methode-carina-body, .hw .methode-carina-big, .hw .methode-sub,
.hw .methode-lernst-text, .hw .methode-lernst-punch,
.hw .carina-italic, .hw .cta-bar-text, .hw .hero-sub, .hw .faq-q, .hw .faq-a,
.hw .desire-moment, .hw .transformation-punch, .hw .testimonials-big,
.hw .testimonials-between, .hw .final-body, .hw .warum-jetzt-text,
.hw .carina-kompetenz-text, .hw .angebot-sub, .hw .price-note,
.hw .spiegel-punch {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
}
.hw .spiegel-situation, .hw .reframe-body, .hw .desire-desc, .hw .trans-item,
.hw .trans-item-after, .hw .testimonial-text, .hw .methode-carina-body,
.hw .methode-sub, .hw .methode-lernst-text, .hw .carina-italic, .hw .hero-sub,
.hw .faq-a, .hw .warum-jetzt-text, .hw .carina-kompetenz-text, .hw .angebot-sub,
.hw .final-body, .hw .fuerwen-item-text {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.85;
  color: var(--body);
}
.hw .fuerwen-item-text { color: var(--light-text); }
.hw .reframe-main { font-size: clamp(26px, 3.4vw, 42px); font-weight: 600; line-height: 1.35; color: var(--cream); margin: 56px 0; letter-spacing: 0.02em; text-transform: none; }
.hw .transformation-punch { font-size: clamp(26px, 3.4vw, 42px); font-weight: 600; line-height: 1.35; }
.hw .transformation-punch em { color: var(--gold); }
.hw .fuerwen-item, .hw .fuerwen-item:first-child { border-color: rgba(245,240,232,0.08); }
.hw .fuerwen-check, .hw .fuerwen-nicht em { color: var(--gold); }
.hw .trans-col-before { background:#3d2818; }
.hw .trans-col-label, .hw .transformation-punch em { color: var(--gold); }
.hw .trans-item { border-color: rgba(245,240,232,0.08); color: var(--light-text); }
.hw .transformation-grid { background: rgba(245,240,232,0.08); }
.hw .faq-item { border-color: rgba(245,240,232,0.08); }
.hw .faq-q-icon { color: var(--gold); }
.hw .faq-a { color: var(--light-text); }
.hw .carina-portrait { opacity: 0.5; }
.hw .price-amount { text-transform: none; }

/* Media anchors (images / video) */
.hw .media-frame { display:block; width:100%; margin:0 auto; overflow:hidden; position:relative; background:var(--deep); }
.hw .media-frame img, .hw .media-frame video { display:block; width:100%; height:100%; object-fit:cover; transition:transform 0.8s ease, opacity 0.6s ease; }
.hw a.media-frame:hover img, .hw a.media-frame:hover video { transform:scale(1.02); opacity:0.92; }
.hw .media-frame video.video-right { object-position: 95% center; }
.hw .media-frame video.video-up { object-position: center 25%; }
.hw .media-frame video.video-speaker { object-position: 100% center; transform: scale(1.25); transform-origin: 100% center; }
.hw .media-tall { height:min(78vh, 760px); }
.hw .media-wide { height:min(62vh, 620px); }
.hw .media-video { height:min(72vh, 680px); }
.hw .media-section { padding:80px 52px; background:var(--deep); }
.hw .media-caption { display:block; text-align:center; font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(14px,1.4vw,17px); color:var(--muted); margin-top:18px; letter-spacing:0.04em; }
@media (max-width: 820px) {
  .hw .media-section { padding:56px 16px; }
  .hw .media-tall { height:min(70vh, 560px); }
  .hw .media-wide { height:min(52vh, 440px); }
  .hw .media-video { height:min(60vh, 520px); }
  .hw .btn { padding:18px 36px; min-height:52px; display:inline-flex; align-items:center; justify-content:center; }
}

.hw .footer-contact { display:flex; flex-direction:column; gap:6px; font-size:12px; color:var(--muted); letter-spacing:0.08em; }
.hw .footer-contact a { color:var(--gold); text-decoration:none; transition:color 0.3s; }
.hw .footer-contact a:hover { color:var(--gold-l); }
`;

function Index() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".hw .reveal").forEach((el) => obs.observe(el));

    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>(".hw video"));
    const playVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.play().catch(() => {});
    };

    videos.forEach((video) => {
      video.load();
      playVideo(video);
      video.addEventListener("loadeddata", () => playVideo(video));
      video.addEventListener("canplay", () => playVideo(video));
    });

    const videoObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) playVideo(e.target as HTMLVideoElement);
        });
      },
      { threshold: 0, rootMargin: "55% 0px" }
    );
    videos.forEach((el) => videoObs.observe(el));

    const resumeVideos = () => {
      if (!document.hidden) videos.forEach(playVideo);
    };
    document.addEventListener("visibilitychange", resumeVideos);

    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const t = document.querySelector(href);
      if (t) {
        e.preventDefault();
        (t as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchors = document.querySelectorAll<HTMLAnchorElement>('.hw a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", onClick));

    const faqHandlers: Array<{ el: Element; fn: (ev: Event) => void }> = [];
    document.querySelectorAll(".hw .faq-item").forEach((item) => {
      const q = item.querySelector(".faq-q");
      if (!q) return;
      const fn = () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".hw .faq-item").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      };
      q.addEventListener("click", fn);
      faqHandlers.push({ el: q, fn });
    });

    return () => {
      obs.disconnect();
      videoObs.disconnect();
      document.removeEventListener("visibilitychange", resumeVideos);
      anchors.forEach((a) => a.removeEventListener("click", onClick));
      faqHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
    };
  }, []);

  return (
    <div className="hw">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <a href="#" className="nav-logo">Souverän Sein</a>
        <a href="https://calendly.com/carina-kolb/vibe-call" target="_blank" rel="noopener noreferrer" className="nav-cta">Buche einen Vibecall</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src={bridgeImg} alt="" className="hero-bg" />
        <p className="hero-label">Core Emotional Bodywork · 1:1 Begleitung</p>
        <h1 className="hero-title">
          HEIMWEH<br />
          <em>Der Weg zurück zu dir.</em>
        </h1>
        <p className="hero-sub">
          Raus aus People Pleasing. Zurück zu dir.
        </p>
      </section>

      {/* CLARITY BAR */}
      <div className="clarity-bar">
        <p className="clarity-bar-text">
          Für Frauen, die müde sind, sich selbst zu verlassen, damit andere bleiben. Die so lange angepasst haben, dass sie vergessen haben, wer sie ohne das alles sind.
        </p>
        <p className="clarity-bar-text">
          Hier findest du den Weg zurück. Nicht durch Willenskraft. Sondern durch deinen Körper - den einzigen Ort, von dem Veränderung wirklich ausgeht.
        </p>
      </div>

      {/* VIDEO — Verkörperung in Bewegung */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-video reveal" aria-label="@souveraen.sein auf Instagram">
          <video src={heimwehVideo} muted loop playsInline autoPlay preload="auto" className="video-speaker" />
        </a>
        <span className="media-caption">Verkörperung. Nicht erklärt - gespürt. @souveraen.sein</span>
      </section>

      {/* SCHMERZ-SPIEGEL */}
      <section id="kennst">
        <div className="spiegel">
          <h2 className="spiegel-opener reveal">
            Kommt dir<br /><em>das bekannt vor?</em>
          </h2>

          <div className="spiegel-block reveal">
            <p className="spiegel-situation">
              Jemand sagt ab, dein Abend wird frei. Statt durchzuatmen, scrollst du dich durch deine To-do-Liste. Du füllst die Stille, bevor sie entstehen kann.
            </p>
            <p className="spiegel-eigentlich">
              Eigentlich weisst du: Du hast Angst, dir selbst zu begegnen. Weil du dann erkennen würdest, <em>wie gross diese Leere bereits ist.</em>
            </p>
          </div>

          <div className="spiegel-block reveal">
            <p className="spiegel-situation">
              Du sagst Ja, obwohl dein Körper Nein sagt. Wer keine Bedürfnisse hat, fällt nicht negativ auf. Wer unkompliziert ist, wird gemocht.
            </p>
            <p className="spiegel-eigentlich">
              Eigentlich weisst du: Unkompliziert ist kein Kompliment. Es heisst: <em>Du existierst so leise, dass du niemanden störst.</em>
            </p>
          </div>

          <div className="spiegel-block reveal">
            <p className="spiegel-situation">
              Du setzt Grenzen und nimmst sie zurück. Du spürst Schuld, sobald jemand enttäuscht ist. Erklärst dich, machst dich kleiner, bis die Stimmung sich auflöst.
            </p>
            <p className="spiegel-eigentlich">
              Eigentlich weisst du: Das ist nicht Rücksicht. Es ist <em>Verlustangst. Die Angst, zu viel zu sein.</em>
            </p>
          </div>

          <div className="spiegel-block reveal">
            <p className="spiegel-situation">
              Du hast viel gelesen, viel reflektiert. Du weisst genau, was los ist. Und trotzdem übernimmt dein Körper im echten Moment alte Muster.
            </p>
            <p className="spiegel-eigentlich">
              Eigentlich weisst du: Mehr Wissen ändert nichts. Was fehlt ist, <em>dass dein Körper es endlich verstehen darf.</em>
            </p>
          </div>

          <div className="spiegel-punch reveal">
            Ich bin überall verfügbar.<br />
            <em>Nur nicht mehr für mich.</em>
          </div>
        </div>
      </section>

      {/* CTA nach Spiegel */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Wenn es dich berührt - lass uns sprechen.</p>
        <a href="https://calendly.com/carina-kolb/vibe-call" target="_blank" rel="noopener noreferrer" className="btn btn-outline reveal d1">Ich melde mich.</a>
      </div>

      {/* IMG BAND 1 — Hände, ankommen im Körper */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-tall reveal" aria-label="@souveraen.sein auf Instagram">
          <img src={handsImg} alt="Hände, die den eigenen Bauch halten - ankommen im Körper" />
        </a>
        <span className="media-caption">Bei dir ankommen. @souveraen.sein</span>
      </section>

      {/* FÜR WEN */}
      <section className="fuerwen">
        <div className="fuerwen-inner">
          <span className="label-dark reveal">HEIMWEH ist für dich, wenn</span>
          <h2 className="fuerwen-title reveal d1">Du dich in diesen Sätzen erkennst.</h2>
          <div className="fuerwen-items reveal d2">
            {[
              "Du fühlst dich verantwortlich für die Gefühle anderer.",
              "Du hast Angst, egoistisch oder kompliziert zu wirken.",
              "Du verlierst dich in Beziehungen schnell selbst.",
              "Du setzt Grenzen und nimmst sie wieder zurück.",
              "Du sehnst dich nach Nähe und verbiegst dich dafür.",
              "Du verstehst viel - und fällst trotzdem in alte Muster.",
              "Du spürst: So komme ich nicht wirklich bei mir an.",
            ].map((t, i) => (
              <div className="fuerwen-item" key={i}>
                <span className="fuerwen-check">•</span>
                <p className="fuerwen-item-text">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR 1 */}
      <div className="cta-bar cta-bar-illum">
        <span className="illum-eyebrow reveal">Und dann</span>
        <h2 className="illum-head reveal d1"><span className="gold">passiert</span> es.</h2>
        <p className="illum-body reveal d2">Du begegnest dir selbst und erkennst: Alles, was du je gesucht hast, ist bereits in dir. Es geht nur darum, nach Hause zu kommen.</p>
        <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d3">Ja - ich will mich wiederfinden.</a>
      </div>

      {/* REFRAME */}
      <section>
        <div className="reframe">
          <span className="label reveal">Der entscheidende Unterschied</span>
          <h2 className="reframe-big reveal d1">
            Nicht dein Kopf setzt Grenzen.<br />
            <em>Dein Körper tut es, sobald er sich sicher genug fühlt.</em>
          </h2>
          <p className="reframe-body reveal d2">
            HEIMWEH ist keine Begleitung, in der du lernst, "einfach Nein zu sagen". Deine Grenzen kennst du längst. Wir arbeiten mit dem Moment davor: dem Druck im Brustkorb, dem schlechten Gewissen, der Angst, zu viel zu sein.
          </p>
          <p className="reframe-body reveal">
            Damit dein Nein nicht mehr gegen dein Nervensystem kämpfen muss.
          </p>
          <div className="reframe-nicht reveal">
            <span className="reframe-nicht-title">HEIMWEH ist nicht</span>
            <div className="reframe-nicht-items">
              <div className="reframe-nicht-item">noch ein Mindset-Programm</div>
              <div className="reframe-nicht-item">noch mehr Journaling</div>
              <div className="reframe-nicht-item">ein Ort, an dem du funktionieren musst</div>
            </div>
          </div>
          <p className="reframe-main reveal">HEIMWEH ist körperorientierte Tiefenarbeit für Frauen, die es im Körper verändern wollen - nicht nur verstehen.</p>
        </div>
      </section>

      {/* VIDEO 3 */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-video reveal" aria-label="@souveraen.sein auf Instagram">
          <video src={heimwehVideo3} muted loop playsInline autoPlay preload="auto" />
        </a>
        <span className="media-caption">Zurück zu dir. @souveraen.sein</span>
      </section>

      {/* CTA nach Reframe */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Bereit, es im Körper zu verändern?</p>
        <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d1">Ich bin bereit, nach Hause zu kommen.</a>
      </div>

      {/* DESIRE */}
      <section className="desire">
        <div className="desire-inner">
          <span className="label reveal">Lass uns vorspulen</span>
          <h2 className="desire-title reveal d1">
            So fühlt sich dein Alltag an,<br />
            <em>wenn du heimgekehrt bist.</em>
          </h2>

          {[
            ["Du sagst Nein. Und dein Körper entspannt sich.", <>Nicht weil du dich durchgesetzt hast. Sondern weil es sich richtig anfühlt. Kein schlechtes Gewissen. Du kannst andere enttäuschen <em>und dich selbst nicht verurteilen.</em></>],
            ["Alleine sein wird der schönste Moment mit dir selbst.", <>Keine Unruhe mehr, wenn es still wird. Kein Griff zum Handy. Du bist gerne bei dir. <em>Allein sein ist Privileg geworden.</em></>],
            ["Du machst noch genauso viel. Aber aus einem anderen Teil von dir.", <>Dem Teil, der Fülle fühlt. Der Feuer hat. Der nicht aus Angst handelt. Sondern <em>weil du es für dich tust.</em></>],
            ["Dein Innenleben wird ruhiger.", <>Keine Stimmungskurven mehr. Wenn Stress kommt, regulierst du dich selbst. <em>Niemand muss dich mehr auffangen.</em></>],
            ["Du läufst durchs Leben und machst, was du willst.", <>Im Frieden mit dir - auch wenn du nicht alles richtig machst. Du entscheidest aus dir heraus und vertraust dir. <em>Dein Leben fühlt sich wieder nach dir an.</em></>],
          ].map(([title, body], i) => (
            <div className="desire-block reveal" key={i}>
              <p className="desire-moment">{title as string}</p>
              <p className="desire-desc">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAR 2 */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Diese Begleitung verändert deine Beziehung zu dir.</p>
        <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d1">Ja - ich wähle mich.</a>
      </div>

      {/* METHODE */}
      <section>
        <div className="methode">
          <span className="label reveal">Wie es wirkt</span>
          <h2 className="methode-title reveal d1">Nicht durch Willenskraft.<br />Durch Verkörperung.</h2>
          <p className="methode-sub reveal d2">Wir analysieren nicht. Wir gehen dorthin, wo People Pleasing entsteht: in den Körper. In den Moment, in dem du dich verlässt, bevor du es überhaupt merkst.</p>

          <div className="methode-carina reveal">
            <p className="methode-carina-big">Ich habe jahrelang so gelebt.<br /><em>Bis ich zugelassen habe, gehalten zu werden.</em></p>
            <p className="methode-carina-body">In einem Retreat liess ich zum ersten Mal zu, dass jemand mich in meinen tiefsten Ängsten hält. Der Kampf gegen mich selbst endete dort. Heute erschaffe ich diesen Raum für dich.</p>
          </div>

          <div className="methode-steps reveal d1">
            <div className="methode-step">
              <div className="methode-step-num">01</div>
              <h3 className="methode-step-title">Ankommen</h3>
              <p className="methode-step-body">Dein Nervensystem bekommt Raum. Die unterdrückte Stimme darf laut sein. Wertungsfrei, ohne funktionieren zu müssen.</p>
            </div>
            <div className="methode-step">
              <div className="methode-step-num">02</div>
              <h3 className="methode-step-title">In die Tiefe</h3>
              <p className="methode-step-body">Core Emotional Bodywork. Dorthin, wo Worte aufhören. Du spürst, wie sich ein verkörpertes Nein anfühlt.</p>
            </div>
            <div className="methode-step">
              <div className="methode-step-num">03</div>
              <h3 className="methode-step-title">Heimkommen</h3>
              <p className="methode-step-body">Du lernst, dich selbst zu halten und bei dir zu bleiben. Nah an deiner Lebensfreude, die du so vermisst.</p>
            </div>
          </div>

          <div className="methode-lernst reveal">
            <h3 className="methode-lernst-title">In HEIMWEH lernst du:</h3>
            <div className="methode-lernst-items">
              {[
                "deinen Körper wieder zu spüren, bevor du dich verlierst.",
                "Grenzen zu setzen, ohne dich danach endlos zu erklären.",
                "deine Bedürfnisse ernst zu nehmen, ohne dich dafür zu schämen.",
                "dein Nervensystem zu beruhigen, wenn Verlustangst aktiviert wird.",
                "wieder eine innere Stimme aufzubauen, der du vertraust.",
              ].map((t, i) => (
                <div className="methode-lernst-item" key={i}>
                  <div className="methode-lernst-dot"></div>
                  <p className="methode-lernst-text">{t}</p>
                </div>
              ))}
            </div>
            <p className="methode-lernst-punch">Du wirst nicht perfekt.<br /><em>Aber authentisch. Und wirst es lieben.</em></p>
          </div>
        </div>
      </section>

      {/* CTA nach Methode */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Frag nach. Spür rein. Lass uns sprechen.</p>
        <a href="https://calendly.com/carina-kolb/vibe-call" target="_blank" rel="noopener noreferrer" className="btn btn-outline reveal d1">Ich melde mich.</a>
      </div>

      {/* VIDEO 2 */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-video reveal" aria-label="@souveraen.sein auf Instagram">
          <video src={heimwehVideo2} muted loop playsInline autoPlay preload="auto" className="video-up" />
        </a>
        <span className="media-caption">Im Körper zu Hause. @souveraen.sein</span>
      </section>

      {/* TRANSFORMATION */}
      <section className="transformation">
        <div className="transformation-inner">
          <h2 className="transformation-title reveal">So kommst du. So gehst du.</h2>
          <div className="transformation-grid reveal d1">
            <div className="trans-col trans-col-before">
              <span className="trans-col-label">So kommst du vielleicht</span>
              <div className="trans-items">
                <p className="trans-item">überfordert von deinen eigenen Gefühlen.</p>
                <p className="trans-item">immer wieder in denselben Beziehungsmustern.</p>
                <p className="trans-item">mit viel Selbstreflexion, aber wenig echter Veränderung.</p>
                <p className="trans-item">müde vom Starksein.</p>
                <p className="trans-item">ängstlich, jemanden zu verlieren, wenn du dich selbst wählst.</p>
              </div>
            </div>
            <div className="trans-col trans-col-after">
              <span className="trans-col-label-after">So darfst du gehen</span>
              <div className="trans-items">
                <p className="trans-item-after">klarer in deinem Körper.</p>
                <p className="trans-item-after">ruhiger in Konflikten.</p>
                <p className="trans-item-after">ehrlicher in Beziehungen.</p>
                <p className="trans-item-after">verbundener mit deinen Bedürfnissen.</p>
                <p className="trans-item-after">mit einem Nein, das nicht mehr laut sein muss, um wahr zu sein.</p>
              </div>
            </div>
          </div>
          <p className="transformation-punch reveal">
            Du gehst nicht als neue Person.<br />
            <em>Du gehst als die Version von dir, die sich nicht mehr verlassen muss.</em>
          </p>
        </div>
      </section>

      {/* CTA nach Transformation */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Diese Version von dir wartet schon.</p>
        <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d1">Ich komme nach Hause zu mir.</a>
      </div>

      {/* MEDIA — Stille im Gesicht */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-tall reveal" aria-label="@souveraen.sein auf Instagram">
          <img src={faceImg} alt="Frau mit geschlossenen Augen - in sich ruhen" />
        </a>
        <span className="media-caption">In sich ruhen. @souveraen.sein</span>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="testimonials">
          <h2 className="testimonials-title reveal d1">
            Was passiert, wenn eine Frau aufhört,<br />
            <em>sich selbst zu übergehen.</em>
          </h2>

          <div className="testimonial-group reveal">
            <span className="testimonial-group-label">Mehr Klarheit in Beziehungen</span>
            <div className="testimonial-block">
              <p className="testimonial-text">"Ich habe gerade mein schönstes, ehrlichstes Gespräch mit meiner Mutter gehabt. Ich konnte ihr ganz ehrlich sagen, wie mich alles verletzt hat, und konnte klar zu mir und meinen Grenzen und Bedürfnissen stehen."</p>
              <p className="testimonial-result">Wir sind am Schluss weinend in den Armen gelegen. Das hat so gut getan.</p>
              <span className="testimonial-meta">Nach der Begleitung</span>
            </div>
          </div>

          <p className="testimonials-between reveal">Das ist HEIMWEH. Nicht lauter werden. Sondern innerlich zurückkommen.</p>

          <div className="testimonial-group reveal">
            <span className="testimonial-group-label">Mehr Ruhe im Körper</span>
            <div className="testimonial-block">
              <p className="testimonial-text">"Vielen Dank für diese wundervolle, tiefe und transformierende Session. Ich habe mich unglaublich verstanden, gehalten und gut aufgehoben gefühlt."</p>
              <p className="testimonial-result">Es wirkt nach. Und wird jeden Tag noch leichter.</p>
              <span className="testimonial-meta">Session-Feedback</span>
            </div>
          </div>

          <div className="testimonial-group reveal">
            <span className="testimonial-group-label">Mehr Tatendrang im Alltag</span>
            <div className="testimonial-block">
              <p className="testimonial-text">"Ich fühle mich weiterhin recht ausgeglichen und mehr bei mir. Gerade fühlt sich alles voll in Ordnung an, so wie es ist."</p>
              <p className="testimonial-result">Ich merke auch, dass ich die Tage jetzt viel mehr Tatendrang spüre als in den letzten Wochen.</p>
              <span className="testimonial-meta">Wochen nach der Begleitung</span>
            </div>
            <div className="testimonial-block" style={{ marginTop: 2 }}>
              <p className="testimonial-text">"Heute Morgen hatte ich in der Arbeit direkt ein super schwieriges Thema. Aber nicht mal das hat mich geärgert und ich konnte es ohne Aufschieben direkt angehen."</p>
              <p className="testimonial-result">Motiviert. Und das mitten im Alltag.</p>
              <span className="testimonial-meta">Nach der Begleitung</span>
            </div>
          </div>

          <p className="testimonials-between reveal">Das ist HEIMWEH. Nicht perfekt werden. Sondern bei sich bleiben.</p>

          <div className="testimonial-group reveal">
            <span className="testimonial-group-label">Innerer Frieden</span>
            <div className="testimonial-block">
              <p className="testimonial-text">"Vorher hatte ich starke körperliche Beschwerden und war emotional oft sehr tief. Aber nach den Sessions bei dir: Kein Schmerz, keine Dunkelheit. Einfach Frieden."</p>
              <p className="testimonial-result">Das müssen alle erleben!</p>
              <span className="testimonial-meta">Nach der Begleitung</span>
            </div>
          </div>

          <p className="testimonials-big reveal">
            "Jede Nachricht, die du postest, geht einfach direkt ins Herz.<br />
            Nichts triggert, nichts verurteilt, nichts fordert.<br />
            Alles darf sein und alles ist."
          </p>
        </div>
      </section>

      {/* CTA BAR 3 */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Für Frauen, die wieder spüren wollen, wer sie sind und wo ihr echtes Nein beginnt.</p>
        <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d1">Ja - ich wähle mich.</a>
      </div>

      {/* ANGEBOT */}
      <section className="angebot" id="angebot">
        <div className="angebot-inner">
          <span className="label reveal">Das Angebot</span>
          <h2 className="angebot-title reveal d1">
            HEIMWEH<br />
            <em>ist meine Begleitung für dich.</em>
          </h2>
          <p className="angebot-sub reveal d2">Für Frauen, die wieder spüren möchten, wer sie sind.</p>

          <div className="angebot-box reveal">
            <span className="angebot-box-label">Was enthalten ist</span>
            <div className="angebot-items">
              <div className="angebot-item">
                <span className="angebot-item-num">3x</span>
                <div>
                  <p className="angebot-item-title">1:1 Session live, je ca. 2 Stunden</p>
                  <p className="angebot-item-body">Zürich, Pfingstweidstrasse 31. Core Emotional Bodywork - kein reines Gespräch, sondern Prozess, der sich im Nervensystem speichert.</p>
                </div>
              </div>
              <div className="angebot-item">
                <span className="angebot-item-num">2x</span>
                <div>
                  <p className="angebot-item-title">Embodiment-Aufnahmen für dich zuhause</p>
                  <p className="angebot-item-body">Geführte Aufnahmen für zwischen den Sessions - um das Erlebte im Alltag zu integrieren.</p>
                </div>
              </div>
              <div className="angebot-item">
                <span className="angebot-item-num">+</span>
                <div>
                  <p className="angebot-item-title">WhatsApp-Begleitung zwischen den Sessions</p>
                  <p className="angebot-item-body">Mein persönlicher Support. Du bist nicht alleine auf dem Weg.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="warum-jetzt reveal">
            <p className="warum-jetzt-text">Ich halte nur wenige HEIMWEH-Plätze gleichzeitig - diese Arbeit ist eng und tief begleitet. Wenn du nicht noch ein Jahr in denselben Mustern leben willst: Das ist dein Schritt.</p>
          </div>

          <div className="price-block" id="anfragen">
            <span className="price-label reveal">Investition</span>
            <p className="price-amount reveal d1">CHF 1100</p>
            <p className="price-note reveal d2">Ratenzahlung möglich · Twint, Überweisung, Bitcoin oder Bar</p>
            <a href="https://calendly.com/carina-kolb/vibe-call" target="_blank" rel="noopener noreferrer" className="btn btn-gold reveal d3">Ich melde mich.</a>
          </div>
        </div>
      </section>

      {/* CARINA */}
      <section className="carina">
        <div className="carina-inner">
          <div className="carina-text-col">
            <span className="label reveal">Wer ich bin</span>
            <h2 className="carina-title reveal d1">Ich kenne dieses Gefühl.</h2>
            <p className="carina-italic reveal d2">Dieses ständige Scannen. Dieses innerliche Zusammenzucken, wenn jemand enttäuscht ist. Dieses Leise-Werden, obwohl innen alles schreit.</p>
            <p className="carina-regular reveal">HEIMWEH ist aus meinem eigenen Weg entstanden. Aus der Erfahrung, dass Wissen nicht reicht. Wir müssen es im Körper sicher machen, uns selbst zu wählen.</p>
            <p className="carina-regular reveal">Heute halte ich Räume für Frauen, die nicht länger "unkompliziert" sein wollen, wenn das bedeutet, sich selbst zu verlieren.</p>

            <div className="carina-kompetenz reveal">
              <p className="carina-kompetenz-text">Ich arbeite körperorientiert, traumasensibel und langsam genug, damit dein Nervensystem mitkommen kann. Du musst nichts leisten, nichts beweisen, nichts richtig machen. Emotionale Prozessarbeit, Nervensystem-Regulation und Verkörperung - als Erfahrung im Körper.</p>
            </div>

            <p className="carina-regular reveal">Ich setze an, bevor andere es tun. Wenn du noch die Kraft hast, etwas zu verändern.</p>
            <span className="carina-sig reveal">Carina</span>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 8, letterSpacing: "0.1em" }} className="reveal">Somatic Coach · Core Emotional Bodywork · Zürich</p>
          </div>
        </div>
      </section>

      {/* MEDIA — Wasserfall, Heimkehr */}
      <section className="media-section">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="media-frame media-wide reveal" aria-label="@souveraen.sein auf Instagram">
          <img src={waterfallImg} alt="Frau am Wasserfall - Heimkehr" />
        </a>
        <span className="media-caption">Heimkehr. @souveraen.sein</span>
      </section>

      {/* CTA nach Carina */}
      <div className="cta-bar">
        <p className="cta-bar-text reveal">Lerne mich in einem Vibecall persönlich kennen.</p>
        <a href="https://calendly.com/carina-kolb/vibe-call" target="_blank" rel="noopener noreferrer" className="btn btn-outline reveal d1">Ich melde mich.</a>
      </div>

      {/* FAQ */}
      <section className="faq">
        <div className="faq-inner">
          <h2 className="faq-title reveal">Häufige Fragen</h2>
          {[
            ["Ist HEIMWEH richtig für mich, wenn ich schon viel reflektiert habe?", "Ja. Gerade dann. HEIMWEH ist für Frauen, die viel verstehen, aber merken, dass ihr Körper in echten Situationen trotzdem alte Schutzmuster übernimmt. Du brauchst nicht mehr Wissen. Du brauchst eine andere Ebene der Veränderung."],
            ["Was, wenn ich Angst habe, dadurch Menschen zu verlieren?", "Dann bist du genau an einem wichtigen Punkt. HEIMWEH geht nicht darum, kalt zu werden. Es geht darum, Nähe nicht mehr mit Selbstverlust zu bezahlen. Du wirst nicht hart. Du wirst sicherer in dir."],
            ["Was passiert in einer Session?", "Wir arbeiten mit deinem Körper, deinen Emotionen, deiner inneren Stimme und den Momenten, in denen du dich selbst verlässt. Es ist kein reines Gespräch, sondern ein gehaltener Prozess, langsam, achtsam, tief."],
            ["Muss ich schon Erfahrung mit Körperarbeit haben?", "Nein. Du wirst achtsam begleitet. Alles darf langsam gehen. Mein Raum ist so gestaltet, dass du nichts \"richtig\" machen musst."],
            ["Ist HEIMWEH Therapie?", "Nein. HEIMWEH ersetzt keine Psychotherapie. Es ist eine körperorientierte Begleitung für Selbstverbindung, emotionale Regulation und verkörperte Grenzen."],
            ["Kann ich in Raten zahlen?", "Ja, Ratenzahlung ist auf Anfrage möglich. Schreib mir einfach eine Nachricht."],
            ["Wo findet es statt?", "In Zürich, Pfingstweidstrasse 31. Die Sessions finden live und in Präsenz statt."],
          ].map(([q, a], i) => (
            <div className="faq-item reveal" key={i}>
              <p className="faq-q">{q}<span className="faq-q-icon">+</span></p>
              <p className="faq-a">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="final-inner">
          <span className="label reveal" style={{ display: "block", marginBottom: 28 }}>Du bist bereit</span>
          <h2 className="final-title reveal d1">Ja.<br /><em>Ich wähle mich.</em></h2>
          <p className="final-body reveal d2">
            Du musst nicht lauter werden.<br />
            Du musst nach Hause kommen.
          </p>
          <div className="reveal d3">
            <a href="https://souveraensein.thrivecart.com/heimweh-der-weg-zurueck-zu-dir/" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: "22px 68px", fontSize: 12 }}>Ich bin bereit, nach Hause zu kommen.</a>
          </div>
          <p className="final-details reveal">
            CHF 1100 · 3 x 1:1 Session (je ca. 2h) · 2 Embodiment-Aufnahmen · WhatsApp-Begleitung<br />
            Ratenzahlung möglich · Zürich, Pfingstweidstrasse 31
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-contact">
          <a href="https://instagram.com/souveraen.sein" target="_blank" rel="noopener noreferrer">@souveraen.sein</a>
          <a href="tel:+41796126415">079 612 64 15</a>
          <span>Zürich, Pfingstweidstrasse 31</span>
        </div>
        <p className="footer-copy">© 2025 Souverän Sein · Carina · Zürich</p>
      </footer>
    </div>
  );
}