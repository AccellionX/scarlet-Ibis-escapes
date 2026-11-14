"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    title: "Choose your escape",
    description:
      "Browse upcoming destinations and select the trip that speaks to you.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M24 14v10l7 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Reserve with a deposit",
    description:
      "Secure your seat with $500. We’ll confirm details and guide you through next steps.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <rect
          x="10"
          y="16"
          width="28"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path d="M10 22h28" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M16 30h8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "We handle every detail",
    description:
      "Hotels, transfers, dinners, spa days — curated and confirmed before you pack.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <path
          d="M14 32V18l10-6 10 6v14"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M20 32v-8h8v8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Travel together",
    description:
      "Join your Naples friends for an unhurried, luxurious escape — personally hosted.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="30" cy="18" r="5" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M10 34c1.5-5 5-8 8-8s6.5 3 8 8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M22 34c1.5-5 5-8 8-8s6.5 3 8 8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-blush/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-label">How It Works</p>
          <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
            Simple from the start
          </h2>
          <p className="mt-5 text-lg text-charcoal/75">
            Four calm steps from curiosity to confirmation — we take care of the rest.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="mx-auto mb-5 inline-flex text-gold md:mx-0">
                  {step.icon}
                </div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
