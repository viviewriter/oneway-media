"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <Link href="/" className="font-bebas text-2xl tracking-widest text-ink">
        ONEWAY<span className="text-[var(--red)]">.</span>MEDIA
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-ink-light text-xs tracking-widest uppercase hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-[var(--red)] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b01208] transition-colors"
          >
            Get a Quote
          </a>
        </li>
      </ul>
    </nav>
  );
}
