"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    image: "/work-avenue-window.jpg",
    client: "Avenue Healthcare",
    category: "Window Graphics & Signage",
    span: "row-span-2",
  },
  {
    image: "/work-airtel-arches.jpg",
    client: "Airtel Kenya",
    category: "Event Branding & Fabrication",
    span: "",
  },
  {
    image: "/work-kenya-power.jpg",
    client: "Kenya Power",
    category: "Vehicle / Asset Branding",
    span: "",
  },
  {
    image: "/work-banner-install.jpg",
    client: "Avenue Healthcare",
    category: "Banner Installation",
    span: "",
  },
  {
    image: "/work-truck-wrap.jpg",
    client: "Nyumba Yangu / NHC",
    category: "Large Format Vehicle Wrap",
    span: "",
  },
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
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-ink py-28 px-6 md:px-16">
      <FadeIn>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">Real Work</span>
          </div>
          <h2 className="font-bebas text-[clamp(3rem,6vw,7rem)] leading-none text-cream">
            OUR<br />PORTFOLIO
          </h2>
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-px bg-white/5">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className={`group relative overflow-hidden bg-ink ${p.span} ${i === 0 ? "md:row-span-2 h-[400px] md:h-full min-h-[400px]" : "h-[260px]"}`}>
              <Image
                src={p.image}
                alt={p.client}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Gold hover overlay */}
              <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/20 transition-all duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <div className="text-[var(--gold-light)] text-[0.65rem] tracking-[0.2em] uppercase mb-1">
                  {p.category}
                </div>
                <div className="font-bebas text-xl tracking-wide text-white">
                  {p.client}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Clients */}
      <FadeIn delay={200}>
        <div className="mt-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/5">
            {[
              { name: "Coca-Cola", domain: "coca-cola.com" },
              { name: "Bolt", domain: "bolt.eu" },
              { name: "Canon", domain: "canon.com" },
              { name: "Subaru", domain: "subaru.com" },
              { name: "Airtel", domain: "airtel.com" },
              { name: "Avenue Healthcare", domain: "avenuehealthcare.com" },
              { name: "AAR Healthcare", domain: "aarinsurance.com" },
              { name: "Betika", domain: "betika.com" },
              { name: "Nairobi Hospital", domain: "nairobihospital.org" },
              { name: "Redington", domain: "redington.com" },
              { name: "Kenya Power", domain: "kplc.co.ke" },
              { name: "Mitsumi", domain: "mitsumi.co.ke" },
            ].map((c) => (
              <div
                key={c.name}
                className="bg-[#1a1a1a] flex flex-col items-center justify-center gap-2 p-5 min-h-[90px] group hover:bg-[#222] transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://logo.clearbit.com/${c.domain}`}
                  alt={c.name}
                  className="max-h-8 w-auto object-contain opacity-50 brightness-0 invert group-hover:opacity-80 transition-opacity"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = "none";
                      const span = document.createElement("span");
                      span.className = "font-bebas text-sm tracking-widest text-[#666] group-hover:text-[#aaa]";
                      span.textContent = c.name.toUpperCase();
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
