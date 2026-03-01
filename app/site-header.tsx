"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 56;

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldExpand = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled((current) => (current === shouldExpand ? current : shouldExpand));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 pb-3 pt-[max(env(safe-area-inset-top),0.85rem)] sm:px-6 md:px-10">
        <a
          href="#top"
          className={`brand-glass font-heading text-xl tracking-[0.02em] text-[#2e221c] sm:text-2xl ${isScrolled ? "brand-glass--expanded" : ""}`}
          aria-label="Back to top"
        >
          <span className="brand-glass__title">Velvet Bloom</span>
          <span className="brand-glass__hint">Back to Top ^</span>
        </a>
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
          <nav className="menu-glass hidden items-center gap-6 px-4 py-2 text-[0.73rem] font-semibold uppercase tracking-[0.15em] text-[#2f241e] md:flex">
            <a href="#gallery" className="transition-opacity hover:opacity-75">
              Journal
            </a>
            <a href="#services" className="transition-opacity hover:opacity-75">
              Services
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-75">
              Contact
            </a>
          </nav>
          <a href="#book-now" className="btn-primary nav-book-cta">
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
