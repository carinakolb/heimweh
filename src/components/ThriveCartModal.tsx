import { useEffect, useState } from "react";

export function ThriveCartModal() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[data-thrivecart]") as HTMLAnchorElement | null;
      if (!anchor) return;
      e.preventDefault();
      setUrl(anchor.href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!url) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setUrl(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [url]);

  if (!url) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setUrl(null);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(26, 16, 8, 0.82)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "tcFade 0.25s ease",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tcFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes tcRise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      ` }} />
      <div
        style={{
          position: "relative",
          width: "min(1100px, 100%)",
          height: "min(92vh, 900px)",
          background: "#f5f0e8",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201, 169, 110, 0.4)",
          animation: "tcRise 0.35s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        <button
          type="button"
          aria-label="Schliessen"
          onClick={() => setUrl(null)}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(26,16,8,0.15)",
            background: "rgba(245,240,232,0.95)",
            color: "#1a1008",
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "serif",
          }}
        >
          ×
        </button>
        <iframe
          src={url}
          title="Checkout"
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          allow="payment"
        />
      </div>
    </div>
  );
}