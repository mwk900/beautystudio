"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    title: "Balayage Refresh",
    detail: "Soft dimension for a low-maintenance glow.",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Precision Cut",
    detail: "Movement-focused shape tailored to face framing.",
    src: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Gloss and Finish",
    detail: "Mirror shine and polished styling for events.",
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Studio Atmosphere",
    detail: "Calm appointments with personal attention.",
    src: "https://images.pexels.com/photos/7755473/pexels-photo-7755473.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
] as const;

const services = [
  { title: "Cut and Styling", detail: "Tailored cut and polished finish.", meta: "45-60 mins" },
  { title: "Colour and Highlights", detail: "Root blends to full transformations.", meta: "2-3 hrs" },
  { title: "Blow Dry and Occasion", detail: "Smooth, bouncy or sleek event styling.", meta: "30-50 mins" },
  { title: "Hair Treatments", detail: "Repair rituals for softness and strength.", meta: "20-45 mins" },
  { title: "Men's Grooming", detail: "Clean, modern cuts with texture control.", meta: "30-45 mins" },
] as const;

const testimonials = [
  {
    quote:
      "I arrived drained after work and left feeling like myself again. The whole appointment was calm and uplifting.",
    person: "Hannah T.",
  },
  {
    quote: "The consultation was honest and clear. My colour has never looked this dimensional.",
    person: "Priya M.",
  },
  { quote: "Friendly from start to finish, and the cut still sits beautifully between visits.", person: "Emma R." },
  { quote: "Booking was simple, timing was perfect, and I got so many compliments.", person: "Laura S." },
] as const;

const journey = [
  { step: "Book", detail: "Choose a service and preferred time in less than a minute." },
  { step: "Consult", detail: "We align on goals, tone and home-care routine." },
  { step: "Enjoy Results", detail: "Leave with a polished look and a plan to keep it fresh." },
] as const;

const pricing = [
  { service: "Cut and Finish", from: "£45" },
  { service: "Colour", from: "£75" },
  { service: "Blow Dry", from: "£30" },
] as const;

const faqs = [
  { q: "How far ahead should I book?", a: "Weekday slots are often available in 7-10 days." },
  { q: "What is your cancellation policy?", a: "Please give 24 hours notice. Late cancellations may be 50%." },
  { q: "Do you require patch testing?", a: "Yes, at least 48 hours before new colour appointments." },
  { q: "Is parking available nearby?", a: "Yes, two public car parks are within a short walk." },
] as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Velvet Bloom Beauty Studio",
  image:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  description:
    "Professional hair styling, colour and treatments in a welcoming salon environment.",
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [thankYouName, setThankYouName] = useState("");

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookingForm = event.currentTarget;
    const formData = new FormData(bookingForm);
    const fullName = formData.get("name")?.toString().trim() ?? "";
    setThankYouName(fullName.split(" ")[0] || "there");
    bookingForm.reset();
  };

  return (
    <div className="bg-background text-foreground">
      <a
        href="#book-now"
        className="soft-shadow fixed inset-x-4 bottom-4 z-50 rounded-full bg-[#2f2927] px-6 py-3 text-center text-sm font-semibold tracking-wide text-cream md:hidden"
      >
        Book Appointment
      </a>
      <main className="pb-24 md:pb-0">
        <section className="relative isolate min-h-[88svh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1700&q=80"
            alt="Salon stylist creating a polished hairstyle in a calm studio"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2f2927]/35 via-[#2f2927]/45 to-[#2f2927]/70" />
          <div className="relative mx-auto flex min-h-[88svh] w-full max-w-6xl items-end px-5 pb-10 pt-16 sm:px-7 md:items-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl rounded-[2rem] border border-white/25 bg-white/12 p-6 text-cream backdrop-blur-sm sm:p-8"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#ffe9dc]">Velvet Bloom Beauty Studio</p>
              <h1 className="text-4xl leading-tight sm:text-5xl">Hair that feels like you. Only better.</h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#ffede2] sm:text-lg">
                Professional colour, cuts and styling in a relaxed welcoming studio.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book-now"
                  className="rounded-full bg-[#f6e3d9] px-6 py-3 text-center text-sm font-semibold text-[#2f2927] transition hover:bg-[#fff3ed]"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-[#ffe3d5]/60 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-cream transition hover:bg-white/15"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.26em] text-[#8b6f62]">Transformation Gallery</p>
            <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Real looks, modern texture, confident finishes.</h2>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <Reveal key={image.title} delay={index * 0.05}>
                <article className="soft-shadow group relative overflow-hidden rounded-[1.65rem] bg-surface">
                  <div className="relative h-64 sm:h-72">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#2f2927]/75 px-4 py-3 text-[#fff6f1] backdrop-blur-sm">
                    <h3 className="text-lg">{image.title}</h3>
                    <p className="mt-1 text-sm text-[#f6ddd2]">{image.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mx-auto mt-10 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <blockquote className="soft-shadow warm-gradient rounded-[1.9rem] p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-[#433933]">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c6658]">
              {testimonials[0].person}
            </footer>
          </blockquote>
        </Reveal>

        <section id="about" className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <div className="grid gap-7 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative rounded-[2rem] bg-surface p-7 soft-shadow">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">The Studio Experience</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Your appointment should feel as good as your results.</h2>
                <p className="mt-4 text-base leading-relaxed text-[#5c4e48]">
                  Velvet Bloom was shaped around one belief: confidence starts with feeling seen. Every visit blends technical precision with unhurried care.
                </p>
                <div className="absolute -right-4 -top-4 rounded-2xl bg-[#f5d7cc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5a433a]">
                  Relaxed Premium Care
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative h-[26rem] overflow-hidden rounded-[2rem] soft-shadow sm:h-[30rem]">
                <Image
                  src="https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Client smiling while stylist discusses haircut details in mirror"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute -bottom-5 left-5 max-w-[15rem] rounded-2xl border border-white/70 bg-[#fff5ef]/95 px-4 py-3 text-sm text-[#604d43] backdrop-blur-sm">
                  Appointments designed for professionals who want elevated hair with zero pretence.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">Signature Services</p>
                <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Thoughtful service design, not rushed turnover.</h2>
              </Reveal>
              <div className="mt-6 grid gap-4">
                {services.map((service, index) => (
                  <Reveal key={service.title} delay={index * 0.05}>
                    <article className="soft-shadow rounded-[1.5rem] bg-surface p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl">{service.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#5f4f48]">{service.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-[#f2dbd3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#6e5449]">
                          {service.meta}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Reveal delay={0.05}>
                <div className="relative h-72 overflow-hidden rounded-[1.8rem] soft-shadow sm:h-80">
                  <Image
                    src="https://images.pexels.com/photos/3993326/pexels-photo-3993326.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Stylist blow drying hair with warm studio lighting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <blockquote className="rounded-[1.6rem] border border-[#e3c9be] bg-[#fff5f0] p-5">
                  <p className="text-base leading-relaxed text-[#4c3e37]">
                    &ldquo;{testimonials[1].quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b5f52]">
                    {testimonials[1].person}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="book-now" className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <Reveal>
            <div className="warm-gradient soft-shadow rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#826554]">Booking</p>
                  <h2 className="mt-3 text-3xl leading-tight text-[#3e322d] sm:text-4xl">Reserve your appointment in under a minute.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#5f4b43]">
                    Choose your service and preferred date. We confirm every appointment personally to keep the studio calm and punctual.
                  </p>
                  <div className="mt-6 rounded-2xl border border-[#ddbeb2] bg-white/65 p-4 text-sm text-[#5f4b43]">
                    <p className="font-semibold text-[#493a33]">Opening Hours</p>
                    <p className="mt-2">Tue-Fri: 09:00-19:00</p>
                    <p>Sat: 09:00-17:00</p>
                  </div>
                  <blockquote className="mt-4 rounded-2xl border border-[#ddbeb2] bg-white/60 p-4 text-sm text-[#5d4a42]">
                    &ldquo;{testimonials[2].quote}&rdquo;
                    <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#755a4d]">
                      {testimonials[2].person}
                    </footer>
                  </blockquote>
                </div>
                <form onSubmit={handleBookingSubmit} className="rounded-[1.6rem] border border-[#e1c6bb] bg-[#fffaf7]/90 p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex flex-col gap-1 text-sm">
                      <span className="font-medium text-[#4f3f38]">Name</span>
                      <input name="name" type="text" required className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      <span className="font-medium text-[#4f3f38]">Phone</span>
                      <input name="phone" type="tel" required className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                      <span className="font-medium text-[#4f3f38]">Email</span>
                      <input name="email" type="email" required className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      <span className="font-medium text-[#4f3f38]">Service</span>
                      <select name="service" required defaultValue="" className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]">
                        <option value="" disabled>Select a service</option>
                        {services.map((service) => (
                          <option key={service.title} value={service.title}>{service.title}</option>
                        ))}
                      </select>
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      <span className="font-medium text-[#4f3f38]">Preferred Date</span>
                      <input name="date" type="date" required className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                      <span className="font-medium text-[#4f3f38]">Notes</span>
                      <textarea name="notes" rows={3} placeholder="Tell us a little about your hair goals." className="rounded-xl border border-[#dbc1b6] bg-white px-3 py-2 text-sm outline-none focus:border-[#b7926b]" />
                    </label>
                  </div>
                  <button type="submit" className="mt-4 w-full rounded-full bg-[#2f2927] px-5 py-3 text-sm font-semibold text-[#fff7f2] transition hover:bg-[#433933]">
                    Send Booking Request
                  </button>
                  {thankYouName ? (
                    <p className="mt-3 text-sm text-[#5a463d]">Thanks {thankYouName}, your request is in. We will confirm shortly.</p>
                  ) : null}
                </form>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[1.8rem] bg-surface p-6 soft-shadow">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">Your Journey</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Simple steps. Premium result.</h2>
                <div className="mt-5 space-y-4">
                  {journey.map((item, index) => (
                    <div key={item.step} className="rounded-2xl border border-[#ecd7cd] bg-[#fff8f4] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#876a5b]">{`0${index + 1}`} {item.step}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5f4f48]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative h-72 overflow-hidden rounded-[1.8rem] soft-shadow sm:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
                  alt="Finished hairstyle with healthy shine in a bright salon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-[#fff5ef]/90 px-4 py-3 text-sm text-[#5e4a41]">
                  Friendly specialists focused on wearability and confidence.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <Reveal>
            <div className="rounded-[1.9rem] border border-[#e2c8bc] bg-[#fffaf7] p-6 soft-shadow sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">Pricing Preview</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Transparent starting prices.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {pricing.map((item) => (
                  <article key={item.service} className="rounded-2xl bg-[#fef3ed] p-4 text-center">
                    <h3 className="text-lg text-[#463933]">{item.service}</h3>
                    <p className="mt-2 text-2xl font-semibold text-[#2f2927]">from {item.from}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#6f5950]">
                Final investment may vary after consultation based on length, density and previous colour history.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[1.8rem] bg-surface p-6 soft-shadow">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">FAQ</p>
                <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Planning your visit.</h2>
                <div className="mt-5 space-y-3">
                  {faqs.map((item) => (
                    <details key={item.q} className="rounded-2xl border border-[#ead7cd] bg-[#fff8f4] p-4 open:bg-[#fff2eb]">
                      <summary className="cursor-pointer text-base font-semibold text-[#4a3c35]">{item.q}</summary>
                      <p className="mt-2 text-sm leading-relaxed text-[#5e4c44]">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <blockquote className="h-full rounded-[1.8rem] border border-[#dfc4b8] bg-[#fff3ec] p-6">
                <p className="text-lg leading-relaxed text-[#493a33]">
                  &ldquo;{testimonials[3].quote}&rdquo;
                </p>
                <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5f52]">{testimonials[3].person}</footer>
                <div className="mt-6 rounded-2xl border border-[#e3c9be] bg-[#fffbf8] p-4 text-sm text-[#5d4a42]">
                  Prefer to speak first?
                  <a href="tel:01150000000" className="mt-2 block font-semibold">0115 000 0000</a>
                </div>
              </blockquote>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-6xl px-5 sm:px-7 md:px-10">
          <Reveal>
            <div className="rounded-[2rem] bg-[#2f2927] p-7 text-[#fff3ea] soft-shadow sm:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[#efc7b4]">Final Step</p>
              <h2 className="mt-3 text-3xl leading-tight text-[#fff3ea] sm:text-4xl">Ready for your next hair chapter?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#f5dccc]">
                Let us design a look that suits your lifestyle, schedule and confidence goals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#book-now" className="rounded-full bg-[#f3ded3] px-6 py-3 text-center text-sm font-semibold text-[#2f2927] transition hover:bg-[#fff2ea]">
                  Book Appointment
                </a>
                <a href="#contact" className="rounded-full border border-[#eac9ba] px-6 py-3 text-center text-sm font-semibold text-[#fff3ea] transition hover:bg-white/10">
                  Contact Studio
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mx-auto mt-14 w-full max-w-6xl px-5 pb-16 sm:px-7 md:px-10">
          <Reveal>
            <div className="grid gap-5 rounded-[2rem] bg-surface p-6 soft-shadow lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b6f62]">Contact</p>
                <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">Velvet Bloom Beauty Studio</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5f4f48]">
                  Welcoming appointments for colour, cuts and restorative treatments in a calm Nottingham studio.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <a href="tel:01150000000" className="block font-semibold text-[#3f332d]">0115 000 0000</a>
                  <a href="mailto:hello@velvetbloomstudio.co.uk" className="block font-semibold text-[#3f332d]">
                    hello@velvetbloomstudio.co.uk
                  </a>
                  <p className="text-[#6d5750]">24 Rosecourt Lane, Nottingham, NG0 0VB</p>
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-[1.6rem] border border-[#e4ccc1] bg-[#fae8df]">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern salon interior with mirrors and styling chairs"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#fff8f4]/90 p-4 text-sm text-[#5c4a43] backdrop-blur-sm">
                  City-centre location with easy parking nearby. Full visit details are shared in your booking confirmation.
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#ebd6cc] px-5 py-6 text-center text-xs uppercase tracking-[0.15em] text-[#7e655a] sm:px-7 md:px-10">
        Velvet Bloom Beauty Studio - Fictional Portfolio Brand
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  );
}
