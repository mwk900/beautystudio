import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import BookingForm from "./booking-form";
import SiteHeader from "./site-header";

const heroImage =
  "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=2200";

const collage = [
  {
    title: "Reception Glow",
    detail: "Warm wood tones and soft light set the mood before your consultation.",
    src: "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Warm beauty studio interior with styling chair, mirrors, beige walls and wooden floor",
    layout: "md:col-span-7 md:row-span-2 h-80 md:h-full",
  },
  {
    title: "Colour Craft",
    detail: "Dimensional colour work with clean blending and polished finishing.",
    src: "https://images.pexels.com/photos/3993326/pexels-photo-3993326.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Stylist blow drying hair in a warm lit salon station",
    layout: "md:col-span-5 h-52 md:h-full",
  },
  {
    title: "Studio Calm",
    detail: "A boutique layout designed for unhurried appointments and comfort.",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium salon interior with mirrors and styling chairs",
    layout: "md:col-span-5 md:row-span-1 h-56 md:h-full",
  },
] as const;

const services = [
  {
    title: "Precision Cut and Finish",
    detail: "Face-framing shape with a polished finish and daily styling plan.",
    time: "60 mins",
    price: "from £52",
  },
  {
    title: "Luxury Colour Session",
    detail: "Root blends, ribbons of light and rich tone balancing for longer wear.",
    time: "2-3 hrs",
    price: "from £88",
  },
  {
    title: "Gloss and Blowout",
    detail: "Shine-boosting gloss paired with a soft volume blow dry.",
    time: "45 mins",
    price: "from £38",
  },
  {
    title: "Repair Ritual",
    detail: "Targeted hydration and bond support for strength, softness and glow.",
    time: "30 mins",
    price: "from £34",
  },
] as const;

const bookingServiceOptions = services.map(({ title }) => ({ title }));

const pricing = [
  { service: "Cut and Finish", from: "£52" },
  { service: "Colour Session", from: "£88" },
  { service: "Gloss and Blowout", from: "£38" },
] as const;

const testimonials = [
  {
    quote:
      "The atmosphere felt calm from the moment I arrived, and my colour looked rich and natural in every light.",
    person: "Priya M.",
  },
  {
    quote: "A truly boutique experience. Thoughtful consultation, gorgeous finish, zero rush.",
    person: "Hannah T.",
  },
  {
    quote: "Booking was simple and the result held beautifully between visits.",
    person: "Emma R.",
  },
] as const;

const faqs = [
  { q: "How far ahead should I book?", a: "Most weekday slots are available 7-10 days ahead." },
  { q: "Do you patch test for colour?", a: "Yes. New colour clients need a patch test at least 48 hours before." },
  { q: "What is your cancellation policy?", a: "Please give at least 24 hours notice to avoid a fee." },
] as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Velvet Bloom Beauty Studio",
  image: heroImage,
  description:
    "Boutique hair studio appointments for precision cuts, luxury colour and restorative treatments.",
  telephone: "+44-115-000-0000",
  email: "hello@velvetbloomstudio.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Rosecourt Lane",
    addressLocality: "Nottingham",
    postalCode: "NG0 0VB",
    addressCountry: "GB",
  },
  areaServed: "Nottingham",
  url: "https://velvetbloomstudio.co.uk",
  priceRange: "££",
};

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const revealStyle = delay > 0 ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;

  return (
    <div className={className ? `reveal ${className}` : "reveal"} style={revealStyle}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="bg-bg text-text">
      <SiteHeader />

      <main>
        <section className="relative isolate min-h-[92svh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Warm contemporary salon interior with wood flooring and soft ambient lighting"
            fill
            priority
            className="object-cover object-center [filter:saturate(1.08)_contrast(1.05)]"
            sizes="100vw"
          />
          <div className="hero-grade absolute inset-0" />
          <div className="hero-vignette absolute inset-0" />

          <div className="relative mx-auto flex min-h-[92svh] w-full max-w-6xl items-end px-4 pb-10 pt-32 sm:px-6 md:items-center md:px-10">
            <Reveal className="w-full max-w-xl md:ml-auto md:mr-6" delay={0.06}>
              <div className="glass-warm rounded-[1.85rem] p-6 text-[#2f2622] sm:p-8 md:rounded-[2rem]">
                <p className="eyebrow text-[#8a6755]">Luxury Colour Studio</p>
                <h1 className="mt-3 text-[2.35rem] leading-[1.02] sm:text-[3rem]">A warmer way to wear colour.</h1>
                <p className="mt-4 max-w-[30rem] text-base leading-relaxed text-[#554338] sm:text-lg">
                  Boutique appointments shaped around tone, texture and polished confidence.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="#book-now" className="btn-primary">
                    Book Appointment
                  </a>
                  <a href="#services" className="btn-secondary">
                    View Service Menu
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/45 pt-5 text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-[#7d6153]">
                  <p>Colour Experts</p>
                  <p>Private Pace</p>
                  <p>Tailored Finish</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="gallery" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:mt-20 md:px-10">
          <Reveal>
            <p className="eyebrow">Editorial Journal</p>
            <h2 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
              A boutique studio designed for rich tones, soft light and elevated detail.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-12 md:auto-rows-[170px]">
            {collage.map((image, index) => (
              <Reveal key={image.title} delay={index * 0.06} className={`${image.layout} w-full`}>
                <article className="soft-shadow group relative h-full w-full overflow-hidden rounded-[1.6rem] border border-[rgba(255,244,233,0.7)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[rgba(29,20,14,0.48)] px-4 py-3 text-[#fff7ef] backdrop-blur-sm">
                    <h3 className="text-lg">{image.title}</h3>
                    <p className="mt-1 text-sm text-[#f4dfce]">{image.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <blockquote className="panel rounded-[1.8rem] px-6 py-7 sm:px-8">
            <p className="text-lg leading-relaxed text-[#40342e] sm:text-xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
              {testimonials[0].person}
            </footer>
          </blockquote>
        </Reveal>

        <section id="signature" className="mx-auto mt-14 w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="panel rounded-[1.9rem] p-6 sm:p-8">
                <p className="eyebrow">Signature Session</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Consultative styling with editorial calm.</h2>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                  Each appointment starts with a detailed consultation, then moves through precision work at a
                  measured pace. The result feels refined in the studio and wearable in real life.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[rgba(210,177,148,0.38)] bg-[rgba(255,247,239,0.72)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-2)]">Step 1</p>
                    <p className="mt-2 text-sm text-muted">Tone mapping and shape planning before any cutting or colour.</p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(210,177,148,0.38)] bg-[rgba(255,247,239,0.72)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-2)]">Step 2</p>
                    <p className="mt-2 text-sm text-muted">A finish designed to hold its movement between appointments.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="soft-shadow relative h-[24rem] overflow-hidden rounded-[1.9rem] border border-[rgba(255,244,233,0.7)] sm:h-[27rem]">
                <Image
                  src="https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Stylist consulting client in mirror with warm studio lighting"
                  fill
                  className="object-cover [filter:saturate(1.06)_contrast(1.03)]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[rgba(255,247,239,0.86)] px-4 py-3 text-sm text-[#5f4a3f] backdrop-blur-sm">
                  Relaxed pace, precise finish, luxury service without pretence.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="mx-auto mt-14 w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <Reveal>
                <p className="eyebrow">Service Menu</p>
                <h2 className="mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl">
                  Structured services with premium finishing built in.
                </h2>
              </Reveal>

              <div className="mt-6 space-y-4">
                {services.map((service, index) => (
                  <Reveal key={service.title} delay={index * 0.05}>
                    <article className="panel rounded-[1.45rem] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl">{service.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">{service.detail}</p>
                        </div>
                        <span className="rounded-full border border-[rgba(198,165,127,0.42)] bg-[rgba(255,247,239,0.8)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-2)]">
                          {service.time}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Reveal delay={0.05}>
                <blockquote className="panel rounded-[1.6rem] p-6">
                  <p className="text-lg leading-relaxed text-[#473832]">&ldquo;{testimonials[1].quote}&rdquo;</p>
                  <footer className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-2)]">
                    {testimonials[1].person}
                  </footer>
                </blockquote>
              </Reveal>

              <Reveal delay={0.11}>
                <div className="panel rounded-[1.6rem] p-6">
                  <p className="eyebrow">Starting Prices</p>
                  <div className="mt-4 space-y-3">
                    {pricing.map((item) => (
                      <div
                        key={item.service}
                        className="flex items-center justify-between rounded-xl border border-[rgba(205,171,139,0.35)] bg-[rgba(255,248,240,0.74)] px-4 py-3"
                      >
                        <p className="text-sm font-medium text-[#4f3e35]">{item.service}</p>
                        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-2)]">
                          {item.from}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    Final quote is confirmed after consultation and hair history review.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="book-now" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <Reveal>
            <div className="soft-shadow rounded-[2rem] border border-[rgba(255,244,232,0.72)] bg-[linear-gradient(145deg,rgba(255,249,242,0.96)_0%,rgba(248,231,215,0.93)_100%)] p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">Booking</p>
                  <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Reserve your appointment in under a minute.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Choose your service and preferred date. Every request is confirmed personally so your visit stays
                    calm and punctual.
                  </p>
                  <div className="mt-6 rounded-2xl border border-[rgba(206,173,142,0.42)] bg-[rgba(255,249,242,0.72)] p-4 text-sm text-muted">
                    <p className="font-semibold text-text">Opening Hours</p>
                    <p className="mt-2">Tue-Fri: 09:00-19:00</p>
                    <p>Sat: 09:00-17:00</p>
                  </div>
                  <blockquote className="mt-4 rounded-2xl border border-[rgba(206,173,142,0.42)] bg-[rgba(255,249,242,0.72)] p-4 text-sm text-muted">
                    &ldquo;{testimonials[2].quote}&rdquo;
                    <footer className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-2)]">
                      {testimonials[2].person}
                    </footer>
                  </blockquote>
                </div>

                <BookingForm services={bookingServiceOptions} />
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mx-auto mt-14 w-full max-w-6xl px-4 pb-16 sm:px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <div className="panel rounded-[1.8rem] p-6 sm:p-7">
                <p className="eyebrow">Visit Notes</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Everything you need before your appointment.</h2>
                <div className="mt-5 space-y-3">
                  {faqs.map((item) => (
                    <details
                      key={item.q}
                      className="rounded-2xl border border-[rgba(206,173,142,0.35)] bg-[rgba(255,248,240,0.72)] p-4 open:bg-[rgba(255,242,229,0.9)]"
                    >
                      <summary className="cursor-pointer text-base font-semibold text-[#44352e]">{item.q}</summary>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="panel rounded-[1.8rem] p-6">
                <p className="eyebrow">Contact</p>
                <h3 className="mt-2 text-3xl leading-tight">Velvet Bloom Beauty Studio</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Boutique appointments for colour, cuts and restoration in central Nottingham.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a href="tel:01150000000" className="block font-semibold text-text">
                    0115 000 0000
                  </a>
                  <a href="mailto:hello@velvetbloomstudio.co.uk" className="block font-semibold text-text">
                    hello@velvetbloomstudio.co.uk
                  </a>
                  <p className="text-muted">24 Rosecourt Lane, Nottingham, NG0 0VB</p>
                </div>
                <a href="#book-now" className="btn-secondary mt-5">
                  Book Your Slot
                </a>

                <div className="soft-shadow relative mt-5 h-56 overflow-hidden rounded-[1.3rem] border border-[rgba(255,244,232,0.74)]">
                  <Image
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium salon interior with mirrors and styling stations"
                    fill
                    className="object-cover opacity-95"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-[rgba(255,248,240,0.87)] px-3 py-2 text-xs text-[#5c4a40] backdrop-blur-sm">
                    Easy parking nearby and full visit details sent after confirmation.
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(193,160,133,0.28)] px-4 py-6 text-center text-[0.67rem] uppercase tracking-[0.16em] text-muted sm:px-6 md:px-10">
        Velvet Bloom Beauty Studio - Fictional Portfolio Brand
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}
