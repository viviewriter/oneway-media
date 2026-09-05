"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

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

const values = ["Integrity", "Innovation", "Client Satisfaction", "Servitude"];

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2">
      {/* Left — cream */}
      <div className="bg-cream-mid px-10 md:px-16 py-28 relative overflow-hidden">
        {/* Watermark */}
        <span className="absolute -bottom-8 -right-4 font-bebas text-[12rem] text-[var(--gold)]/10 leading-none pointer-events-none select-none">
          10+
        </span>

        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">Who We Are</span>
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,5rem)] leading-none text-ink mb-6">
            More Than a{" "}
            <em className="font-playfair italic text-[var(--red)] not-italic" style={{ fontStyle: "italic" }}>
              Print Shop
            </em>
          </h2>
          <p className="text-ink-light text-sm leading-relaxed mb-4">
            OneWay Media Limited is Kenya's trusted partner for brands that mean business. Registered
            and built right here in Nairobi, we've spent over a decade transforming ideas into
            stunning visual realities, from a single business card to city-wide billboard campaigns.
          </p>
          <p className="text-ink-light text-sm leading-relaxed mb-10">
            We don't just execute briefs. We dig into your brand's DNA, understand your aesthetic
            instincts, and build creative partnerships that last.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v} className="border border-black/10 p-4 hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-all">
                <span className="font-bebas text-lg tracking-wide text-ink">{v}</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>

      {/* Right — dark */}
      <div className="bg-ink px-10 md:px-16 py-28 flex flex-col justify-center">
        <FadeIn>
          <div className="mb-10 pb-10 border-b border-white/10">
            <div className="font-bebas text-xs tracking-[0.2em] text-[var(--gold)] mb-3">OUR VISION</div>
            <p className="text-cream text-xl leading-relaxed font-light">
              To be the preferred provider of quality printing and designs across Africa.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-10 pb-10 border-b border-white/10">
            <div className="font-bebas text-xs tracking-[0.2em] text-[var(--gold)] mb-3">OUR MISSION</div>
            <p className="text-cream/80 text-base leading-relaxed font-light">
              We deliver quality printing and designs for anything: clothing, mugs, vehicles, shops,
              banners, billboards, and posters. Our professional team is equipped to handle whatever
              your brand demands.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 overflow-hidden">
              <Image src="/work-kenya-power.jpg" alt="Vehicle branding" fill className="object-cover opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="relative h-40 overflow-hidden">
              <Image src="/work-airtel-arches.jpg" alt="Event branding" fill className="object-cover opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
