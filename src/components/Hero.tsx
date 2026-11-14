"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury resort pool overlooking turquoise water at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-5 font-display text-2xl text-blush/90 md:text-3xl">
            Scarlet Ibis Escapes
          </p>
          <h1 className="font-display text-[2.75rem] leading-[1.1] text-white md:text-6xl lg:text-7xl text-balance">
            Travel Beautifully, Together.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Curated luxury escapes for the ladies of Naples — every detail
            handled, every moment savored.
          </p>
          <div className="mt-10">
            <a href="#trips" className="btn-primary text-base md:text-lg">
              View Upcoming Escapes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
