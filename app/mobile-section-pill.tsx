"use client";

import { useEffect, useState } from "react";

const SECTION_LABELS = [
  { id: "top", label: "Home" },
  { id: "gallery", label: "Journal" },
  { id: "services", label: "Services" },
  { id: "book-now", label: "Booking" },
  { id: "contact", label: "Contact" },
] as const;

function resolveActiveSection() {
  const scrollAnchor = window.scrollY + window.innerHeight * 0.34;
  let activeLabel: string = SECTION_LABELS[0].label;

  for (const section of SECTION_LABELS) {
    const element = document.getElementById(section.id);
    if (!element) {
      continue;
    }

    if (element.offsetTop <= scrollAnchor) {
      activeLabel = section.label;
    }
  }

  return activeLabel;
}

export default function MobileSectionPill() {
  const [activeLabel, setActiveLabel] = useState<string>(SECTION_LABELS[0].label);

  useEffect(() => {
    const handleScroll = () => setActiveLabel(resolveActiveSection());

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="mobile-section-pill md:hidden" aria-live="polite">
      {activeLabel}
    </div>
  );
}
