"use client";

import { FormEvent, useState } from "react";
import FadeIn from "./FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-blush/50 py-24 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <FadeIn>
          <p className="section-label">Stay in Touch</p>
          <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
            Be the first to hear about new escapes
          </h2>
          <p className="mt-5 text-lg text-charcoal/70">
            Occasional notes on upcoming destinations — never clutter.
          </p>

          {submitted ? (
            <p className="mt-10 font-display text-2xl text-scarlet">
              Thank you — you’re on the list.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary shrink-0 sm:px-8">
                Subscribe
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
