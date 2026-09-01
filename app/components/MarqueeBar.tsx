const items = [
  "GRAPHIC DESIGN", "LARGE FORMAT PRINTING", "VEHICLE BRANDING",
  "3D SIGNAGE", "BILLBOARD ADVERTISING", "WEBSITE DESIGN",
  "CORPORATE BRANDING", "EVENT MANAGEMENT", "OFFSET PRINTING", "ROLL-UP BANNERS",
];

export default function MarqueeBar() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-ink border-y-[3px] border-[var(--gold)] py-4 overflow-hidden">
      <div className="animate-marquee-left flex gap-12 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-bebas text-lg tracking-[0.15em] text-cream">{item}</span>
            <span className="text-[var(--gold)] text-2xl leading-none relative top-0.5">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
