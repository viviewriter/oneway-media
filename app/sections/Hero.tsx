"use client";
import { useEffect, useRef, useState } from "react";

const marqueeItems = [
  { label: "DESIGN",  bg: "bg-[var(--red)]",        text: "text-white"             },
  { label: "PRINT",   bg: "bg-cream-mid",            text: "text-ink"               },
  { label: "BRAND",   bg: "bg-[var(--gold)]",        text: "text-ink font-bold"     },
  { label: "SLEEK IMAGING", bg: "bg-cream-mid",            text: "text-ink"               },
  { label: "EVENTS",  bg: "bg-[var(--gold-light)]",  text: "text-ink font-bold"     },
  { label: "GRAPHIC DESIGN", bg: "bg-cream-mid",            text: "text-ink"               },
];

function useCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const total = Math.ceil(duration / 16);
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * target));
      if (frame >= total) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const years    = useCounter(10,  1400, started);
  const brands   = useCounter(200, 1600, started);
  const services = useCounter(18,  1200, started);

  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 bg-cream overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="flex flex-col justify-center px-10 md:px-14 relative z-10 h-full overflow-hidden"
           style={{ paddingTop: "80px", paddingBottom: "24px" }}>

        {/* Watermark */}
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 font-bebas leading-none text-black/[0.03] pointer-events-none select-none whitespace-nowrap"
              style={{ fontSize: "clamp(6rem, 12vw, 14rem)" }}>
          ONEWAY
        </span>

        {/* SLEEK IMAGING badge */}
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <span className="block w-7 h-px bg-[var(--gold)]" />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-ink-light text-[0.65rem] tracking-[0.2em] uppercase">
              Nairobi, Kenya · Est. 10+ Years
            </span>
            <span className="text-black/20 text-xs hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 bg-ink px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] inline-block" />
              <span className="font-bebas text-[0.72rem] tracking-[0.25em] text-[var(--gold-light)]">
                SLEEK IMAGING
              </span>
            </span>
          </div>
        </div>

        {/* ── TURN IDEAS INTO REALITY ── */}
        <h1 className="font-bebas leading-[0.88] tracking-tight relative z-10"
            style={{ fontSize: "clamp(3.2rem, 7.5vw, 7.5rem)", marginBottom: "4px" }}>
          <span className="block text-ink">TURNING</span>
          <span className="block text-[var(--red)]">IDEAS</span>
          <span className="block text-outline-ink">INTO</span>
          <span className="block text-ink">REALITY</span>
        </h1>

        {/* ── DESIGN · PRINT · BRAND — same visual weight ── */}
        <div className="relative z-10 flex items-center gap-0 mt-2 mb-5">
          {(["DESIGN", "PRINT", "BRAND"] as const).map((word, i) => (
            <div key={word} className="flex items-center">
              {i > 0 && (
                <span
                  className="font-bebas text-[var(--gold)] mx-2 leading-none select-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)" }}
                >·</span>
              )}
              <span
                className="font-bebas leading-none tracking-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 4rem)",
                  color:   i === 0 ? "var(--red)" : i === 2 ? "var(--ink)" : "transparent",
                  WebkitTextStroke: i === 1 ? "2px #111111" : undefined,
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Sub copy */}
        <p className="relative z-10 text-ink-light leading-relaxed max-w-sm mb-6"
           style={{ fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)" }}>
          We make businesses look irresistibly good — from a single business card
          to city-wide billboard campaigns.
        </p>

        {/* CTAs */}
        <div className="relative z-10 flex gap-4 flex-wrap mb-6">
          <a href="#contact"
             className="bg-[var(--red)] text-white font-semibold tracking-widest uppercase px-7 py-3 hover:bg-[#b01208] transition-colors"
             style={{ fontSize: "0.72rem" }}>
            Start a Project
          </a>
          <a href="#services"
             className="border border-black/25 text-ink font-semibold tracking-widest uppercase px-6 py-3 hover:border-black transition-colors"
             style={{ fontSize: "0.72rem" }}>
            Our Services
          </a>
        </div>

        {/* Stats — always visible */}
        <div ref={statsRef}
             className="relative z-10 flex gap-8 pt-5 border-t border-black/10">
          {[
            { val: `${years}+`,   label: "Years Active"  },
            { val: `${brands}+`,  label: "Brands Served" },
            { val: `${services}`, label: "Service Areas" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-bebas leading-none text-[var(--red)]"
                   style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                {s.val}
              </div>
              <div className="text-ink-light tracking-widest uppercase mt-1"
                   style={{ fontSize: "0.62rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — 3-column animated tiles ── */}
      <div className="hidden md:flex relative overflow-hidden bg-cream-mid h-full">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cream-mid to-transparent z-10 pointer-events-none" />

        {[0, 1, 2].map((col) => {
          const delay  = col === 1 ? "-8s" : col === 2 ? "-15s" : "0s";
          const items  = col % 2 === 0 ? marqueeItems : [...marqueeItems].reverse();
          return (
            <div key={col} className="flex-1 overflow-hidden flex flex-col">
              <div className="animate-marquee-up flex flex-col" style={{ animationDelay: delay }}>
                {[...items, ...items].map((item, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 flex flex-col items-center justify-center border border-black/[0.06] ${item.bg} ${item.text}`}
                    style={{ width: "100%", height: "185px" }}
                  >
                    <span className="font-bebas text-lg tracking-[0.12em]">{item.label}</span>
                    <span className="mt-1 w-1 h-1 rounded-full bg-current opacity-40 block" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Vertical SLEEK IMAGING watermark */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-px">
          {Array.from("SLEEK IMAGING").map((ch, i) => (
            <span key={i} className="font-bebas text-[0.55rem] tracking-widest text-black/20 leading-none">
              {ch}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
