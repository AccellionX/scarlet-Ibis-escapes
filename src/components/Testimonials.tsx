"use client";

import { testimonials } from "@/data/trips";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="border-y border-gold/25 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-label">Kind Words</p>
          <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
            From fellow travelers
          </h2>
          <p className="mt-4 text-base text-charcoal/55">
            Sample testimonials for this demo — names are placeholders.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <blockquote className="h-full">
                <div className="mb-5 h-px w-10 bg-gold" />
                <p className="font-display text-2xl leading-snug text-charcoal md:text-[1.65rem]">
                  “{t.quote}”
                </p>
                <footer className="mt-6">
                  <p className="text-base font-medium text-charcoal">{t.name}</p>
                  <p className="mt-1 text-sm tracking-wide text-gold">{t.trip}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
