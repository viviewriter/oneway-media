"use client";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    num: "01",
    name: "Graphic Design & Layout",
    desc: "From logos and letterheads to full magazines. Everything designed print-ready in any format.",
    tags: ["Logos", "Brochures", "Annual Reports", "Flyers"],
  },
  {
    num: "02",
    name: "Large Format Printing",
    desc: "High-impact banners, flags, and stickers on non-curl PVC. Delivered complete with bag and stand unit.",
    tags: ["Banners", "Flags", "Roll-up Stands", "Backdrops"],
  },
  {
    num: "03",
    name: "Offset / Litho Printing",
    desc: "High-volume professional print for magazines, textbooks, and training manuals. Foiling and embossing available.",
    tags: ["Magazines", "Manuals", "Foiling", "Embossing"],
  },
  {
    num: "04",
    name: "Signage & 3D Branding",
    desc: "Light boxes, wall murals, 3D lettering, and window graphics. We make your location impossible to miss.",
    tags: ["3D Letters", "Light Boxes", "Window Graphics"],
  },
  {
    num: "05",
    name: "Vehicle Branding",
    desc: "Turn your entire fleet into rolling billboards. Cars, vans, trucks, and motorcycles branded to perfection.",
    tags: ["Cars", "Trucks", "Motorcycles", "Fleet"],
  },
  {
    num: "06",
    name: "Events & Exhibitions",
    desc: "End-to-end event management — stands, furniture hire, catering, RSVP, photography, and red carpets.",
    tags: ["Exhibitions", "Photography", "Venue Sourcing"],
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

export default function Services() {
  return (
    <section id="services" className="bg-cream py-28 px-6 md:px-16">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">What We Do</span>
            </div>
            <h2 className="font-bebas text-[clamp(3rem,6vw,7rem)] leading-none text-ink">
              OUR<br />SERVICES
            </h2>
          </div>
          <p className="text-ink-light text-sm leading-relaxed md:text-right max-w-sm">
            From concept to completion. Every service designed to make your brand impossible to overlook.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="group bg-cream hover:bg-cream-mid transition-colors duration-300 p-10 relative overflow-hidden border-b-[3px] border-transparent hover:border-[var(--gold)] h-full">
              {/* Background number */}
              <span className="absolute top-4 right-6 font-bebas text-6xl text-black/[0.04] select-none">
                {s.num}
              </span>
              <h3 className="font-bebas text-2xl tracking-wide text-ink mb-3">{s.name}</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-widest uppercase border border-black/15 text-ink-light px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
