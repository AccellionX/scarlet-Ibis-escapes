"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden bg-blush">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80"
              alt="Founder of Scarlet Ibis Travel — placeholder portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="section-label">About</p>
          <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
            Hosted with care, from Naples to the world
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/75">
            <p>
              Scarlet Ibis Travel was founded for the Naples Ladies Social Group
              — women who want to see the world beautifully, without the burden
              of planning.
            </p>
            <p>
              Our founder personally escorts every escape. From the moment you
              book, you are pampered: thoughtful itineraries, five-star stays,
              and the quiet confidence that every detail has already been
              handled.
            </p>
            <p>
              Boutique groups. Unhurried days. Friendships deepened over
              champagne at sunset.
            </p>
          </div>
          <div className="mt-8 h-px w-16 bg-gold" />
          <p className="mt-6 font-display text-xl italic text-charcoal/80">
            “You are pampered from the moment you book.”
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
