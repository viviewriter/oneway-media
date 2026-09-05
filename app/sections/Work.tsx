"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projects = [
  { image: "/work-stanbic-3d.png",        client: "Stanbic Bank",                 category: "3D Letter Fabrication",              tall: true  },
  { image: "/work-starchoice-signage.png", client: "Angels / Starchoice Cosmetics", category: "Illuminated 3D Signage",             tall: false },
  { image: "/work-crabkids-3d.png",        client: "Crab Kids School Shoes",        category: "3D Gold Lettering & Interior Fit-Out", tall: false },
  { image: "/work-avenue-window.jpg",      client: "Avenue Healthcare",             category: "Window Graphics & Signage",          tall: false },
  { image: "/work-sir-james-uniform.png",  client: "T-shirts/Hoodies/Caps Printing",          category: "Corporate Uniform Design",           tall: true  },
  { image: "/work-bolt-wrap.png",          client: "Bolt",                          category: "Vehicle Wrap Installation",          tall: false },
  { image: "/work-airtel-arches.jpg",      client: "Airtel Kenya",                  category: "Event Fabrication & Branding",       tall: false },
  { image: "/work-truck-wrap.jpg",         client: "Boma Yangu / NHC",            category: "Large Format Vehicle Wrap",          tall: false },
  { image: "/work-kenya-power.jpg",        client: "Kenya Power",                   category: "Fleet Asset Branding",               tall: false },
  { image: "/work-avenue-banner.jpg",      client: "Avenue Healthcare",             category: "Window Graphics",                tall: false },
];

const videos = [
  { src: "/video-1.mp4", label: "Brand Activation" },
  { src: "/video-2.mp4", label: "Production & Install" },
  { src: "/video-3.mp4", label: "Vehicle Branding" },
  { src: "/video-4.mp4", label: "Printing Process" },
];



/* ── helpers ── */
function FadeIn({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function VideoCard({ src, label, index }: { src: string; label: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else          { videoRef.current.play();  setPlaying(true);  }
  };

  return (
    <FadeIn delay={index * 100}>
      <div
        className="relative overflow-hidden bg-black group cursor-pointer"
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          playsInline
          preload="metadata"
          loop
        />

        {/* dimmer */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-60" : "opacity-100"
          }`}
        />

        {/* play / pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-2xl">
            {playing
              ? <span className="text-ink text-lg">⏸</span>
              : <span className="text-ink text-2xl ml-1">▶</span>
            }
          </div>
        </div>

        {/* label bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
          <div className="text-[var(--gold-light)] text-[0.6rem] tracking-[0.2em] uppercase mb-0.5">
            Behind the Scenes
          </div>
          <div className="font-bebas text-lg tracking-wide text-white">{label}</div>
        </div>

        {/* index badge */}
        <div className="absolute top-3 right-3 bg-[var(--gold)] text-ink font-bebas text-xs tracking-widest px-2 py-1">
          VIDEO {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </FadeIn>
  );
}

/* ── main component ── */
export default function Work() {
  return (
    <section id="work" className="bg-ink py-28 px-6 md:px-16">

      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">Real Work</span>
            </div>
            <h2 className="font-bebas text-[clamp(3rem,6vw,7rem)] leading-none text-cream">
              OUR<br />PORTFOLIO
            </h2>
          </div>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs md:text-right">
            A snapshot of brands we've built, wrapped, lit up, and put on the map
            across Kenya and beyond.
          </p>
        </div>
      </FadeIn>

      {/* ── MASONRY PHOTO GRID ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-px">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 55} className="break-inside-avoid mb-px">
            <div className="group relative overflow-hidden bg-[#111]">
              <Image
                src={p.image}
                alt={`${p.client} — ${p.category}`}
                width={800}
                height={p.tall ? 600 : 420}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: p.tall ? "400px" : "260px" }}
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              {/* gold shimmer */}
              <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/10 transition-all duration-300" />
              {/* label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[var(--gold-light)] text-[0.6rem] tracking-[0.2em] uppercase mb-1 opacity-80">
                  {p.category}
                </div>
                <div className="font-bebas text-xl tracking-wide text-white">
                  {p.client}
                </div>
              </div>
              {/* index */}
              <div className="absolute top-3 left-3 font-bebas text-[0.65rem] tracking-widest text-white/25">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── VIDEO SECTION ── */}
      <FadeIn delay={80}>
        <div className="mt-24 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">In Action</span>
          </div>
          <h3 className="font-bebas text-[clamp(2rem,4vw,4.5rem)] leading-none text-cream mb-3">
            WATCH US WORK
          </h3>
          <p className="text-cream/50 text-sm max-w-md leading-relaxed">
            Behind-the-scenes footage of our team bringing brands to life — from
            fabrication floor to final install.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
        {videos.map((v, i) => (
          <VideoCard key={i} src={v.src} label={v.label} index={i} />
        ))}
      </div>

    </section>
  );
}
