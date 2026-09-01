"use client";
import { useRef, useEffect, useState } from "react";

const steps = [
  { num: "01", title: "Brief & Discovery", desc: "We dig into your brand, goals, and aesthetic vision. Nothing proceeds until we fully understand what you need.", color: "border-[var(--red)] text-[var(--red)]" },
  { num: "02", title: "Design & Concept", desc: "Our creative team develops concepts tailored to your brand. We present, refine, and iterate until it's exactly right.", color: "border-[var(--gold)] text-[var(--gold)]" },
  { num: "03", title: "Production", desc: "With approved designs, our print and fabrication team brings everything to life using the best equipment.", color: "border-[var(--gold-light)] text-[var(--gold-light)]" },
  { num: "04", title: "Deliver & Install", desc: "We deliver on time and, where required, handle full installation — ensuring flawless presentation of every piece.", color: "border-green-500 text-green-500" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

export default function Process() {
  return (
    <section className="bg-cream-mid py-28 px-6 md:px-16">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">How It Works</span>
            </div>
            <h2 className="font-bebas text-[clamp(3rem,6vw,7rem)] leading-none text-ink">
              OUR<br />PROCESS
            </h2>
          </div>
          <p className="text-ink-light text-sm leading-relaxed md:text-right max-w-sm">
            Four clear steps from brief to brilliant — we keep you in the loop at every stage.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-[1.875rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[var(--red)] via-[var(--gold)] to-[var(--gold-light)]" />

        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="text-center px-6 relative z-10">
              <div className={`w-16 h-16 rounded-full bg-cream-mid border-2 ${s.color} flex items-center justify-center mx-auto mb-6 font-bebas text-xl`}>
                {s.num}
              </div>
              <h3 className="font-bebas text-xl tracking-wide text-ink mb-3">{s.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
