"use client";
import { useEffect, useRef, useState } from "react";

const marqueeItems = [
  { label: "DESIGN", bg: "bg-[var(--red)]", text: "text-white" },
  { label: "PRINT", bg: "bg-cream-mid", text: "text-ink" },
  { label: "BRAND", bg: "bg-[var(--gold)]", text: "text-ink font-bold" },
  { label: "SIGNAGE", bg: "bg-cream-mid", text: "text-ink" },
  { label: "EVENTS", bg: "bg-[var(--gold-light)]", text: "text-ink font-bold" },
  { label: "DIGITAL", bg: "bg-cream-mid", text: "text-ink" },
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const years = useCounter(10, 1400, started);
  const brands = useCounter(200, 1600, started);
  const services = useCounter(18, 1200, started);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cream overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-center px-10 md:px-16 pt-32 pb-16 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-dm">
            Nairobi, Kenya · Est. 10+ Years
          </span>
        </div>

        <h1 className="font-bebas text-[clamp(4rem,8vw,9rem)] leading-[0.93] tracking-tight mb-8">
          <span className="block text-ink">TURNING</span>
          <span className="block text-[var(--red)]">IDEAS</span>
          <span className="block text-outline-ink">INTO</span>
          <span className="block text-ink">REALITY</span>
        </h1>

        <p className="text-ink-light text-base leading-relaxed max-w-md mb-10">
          We design, print, and brand companies that refuse to be ignored. From
          logos to large-format billboards — we make businesses look
          irresistibly good.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-[var(--red)] text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#b01208] transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="border border-black/25 text-ink text-xs font-semibold tracking-widest uppercase px-7 py-4 hover:border-black transition-colors"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div ref={ref} className="flex gap-10 mt-14 pt-8 border-t border-black/10">
          <div>
            <div className="font-bebas text-5xl text-[var(--red)] leading-none">{years}+</div>
            <div className="text-ink-light text-xs tracking-widest uppercase mt-1">Years Active</div>
          </div>
          <div>
            <div className="font-bebas text-5xl text-[var(--red)] leading-none">{brands}+</div>
            <div className="text-ink-light text-xs tracking-widest uppercase mt-1">Brands Served</div>
          </div>
          <div>
            <div className="font-bebas text-5xl text-[var(--red)] leading-none">{services}</div>
            <div className="text-ink-light text-xs tracking-widest uppercase mt-1">Service Areas</div>
          </div>
        </div>
      </div>

      {/* Right — vertical marquee */}
      <div className="hidden md:flex relative overflow-hidden bg-cream-mid justify-end">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 font-bebas text-[10rem] text-black/[0.03] whitespace-nowrap pointer-events-none select-none">
          BRAND
        </span>
        <div className="w-48 h-full overflow-hidden flex flex-col">
          <div className="animate-marquee-up flex flex-col">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className={`w-48 h-48 flex-shrink-0 flex items-center justify-center font-bebas text-lg tracking-[0.14em] border border-black/[0.06] ${item.bg} ${item.text}`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
