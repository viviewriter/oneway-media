"use client";
import { useState } from "react";

const services = [
  "Graphic Design & Layout",
  "Large Format Printing",
  "Digital / Offset Printing",
  "Vehicle Branding",
  "Signage & 3D Branding",
  "Website Design",
  "Exhibitions & Events",
  "Corporate Branding Package",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[var(--red)] py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Background watermark */}
      <span className="absolute right-0 top-0 font-bebas text-[18rem] leading-none text-white/[0.06] pointer-events-none select-none -translate-y-4">
        START
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-white/60" />
            <span className="text-white/70 text-xs tracking-[0.2em] uppercase">Ready to Stand Out?</span>
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,6rem)] leading-none text-white mb-6">
            LET'S BUILD<br />YOUR BRAND<br />TOGETHER
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Fill in the form and our team will get back to you within 24 hours
            with a tailored quote. No jargon. No fluff. Just results.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <div className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase mb-1">Phone</div>
              <div className="text-white text-lg font-semibold">0700 604 254</div>
            <div>
              <div className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase mb-1">WhatsApp</div>
              <div className="text-white text-lg font-semibold">0141 226 557</div>
            </div>
            </div>
            <div>
              <div className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase mb-1">Email</div>
              <div className="text-white text-lg font-semibold">onewaymediazg@gmail.com</div>
            </div>
            <div>
              <div className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase mb-1">Address</div>
              <div className="text-white">Haji House, Kirinyaga Rd B15<br />Nairobi</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-black/20 p-10 text-center">
              <div className="text-white text-5xl mb-4">✓</div>
              <div className="font-bebas text-2xl text-white tracking-wide mb-2">Brief Received!</div>
              <p className="text-white/80 text-sm">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder="Your Name" className="w-full bg-black/15 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-black/15 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input required type="email" placeholder="Email Address" className="w-full bg-black/15 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-black/15 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors" />
              </div>
              <select required defaultValue="" className="w-full bg-black/15 border border-white/30 text-white/70 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors">
                <option value="" disabled>Select Service Needed</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-ink text-cream">{s}</option>
                ))}
              </select>
              <textarea required placeholder="Tell us about your project..." rows={4} className="w-full bg-black/15 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-white/70 transition-colors resize-none" />
              <button type="submit" className="w-full bg-ink text-[var(--gold-light)] font-semibold text-xs tracking-[0.2em] uppercase py-4 hover:bg-black transition-colors mt-1">
                Send My Brief →
              </button>
            </form>
          )}
        </div>
      </div>
    </section> 
    );
  }