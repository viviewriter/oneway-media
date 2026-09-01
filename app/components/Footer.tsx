const serviceLinks = ["Graphic Design", "Large Format Print", "Vehicle Branding", "3D Signage", "Billboards", "Events & Exhibitions"];
const companyLinks = ["About Us", "Our Work", "Our Clients", "Get a Quote"];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-bebas text-3xl tracking-widest text-cream mb-3">
            ONEWAY<span className="text-[var(--gold)]">.</span>MEDIA
          </div>
          <p className="text-[#777] text-sm leading-relaxed mb-6">
            Turning ideas into reality since day one. Nairobi's trusted partner for design, print,
            and brand excellence across Kenya and beyond.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-bebas text-xs tracking-[0.2em] text-[var(--gold)] mb-5">Services</div>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="text-[#777] hover:text-cream text-sm transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-bebas text-xs tracking-[0.2em] text-[var(--gold)] mb-5">Company</div>
          <ul className="space-y-3">
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-[#777] hover:text-cream text-sm transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-bebas text-xs tracking-[0.2em] text-[var(--gold)] mb-5">Contact Us</div>
          <div className="space-y-4">
            {[
              { label: "Phone", val: "0710 825 398" },
              { label: "Email", val: "onewaymediazg@gmail.com" },
              { label: "Address", val: "Haji House, Kirinyaga Rd B15\nWangige, Nairobi" },
            ].map((c) => (
              <div key={c.label}>
                <div className="text-[var(--gold)] text-[0.65rem] tracking-[0.15em] uppercase mb-1">{c.label}</div>
                <div className="text-cream/80 text-sm whitespace-pre-line">{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
        <span className="text-[#444] text-xs">© {new Date().getFullYear()} OneWay Media Limited. All rights reserved.</span>
        <span className="text-[#444] text-xs tracking-widest uppercase">Design. Print. Brand.</span>
      </div>
    </footer>
  );
}
