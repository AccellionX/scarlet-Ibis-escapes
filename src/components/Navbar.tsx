"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IbisLogo from "./IbisLogo";

const links = [
  { href: "#trips", label: "Trips" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/5 shadow-[0_1px_0_rgba(43,43,43,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#top" className="relative z-10" aria-label="Scarlet Ibis Escapes home">
          <IbisLogo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] tracking-wide text-charcoal/80 transition-colors hover:text-scarlet"
            >
              {link.label}
            </a>
          ))}
          <a href="#trips" className="btn-primary text-[0.95rem]">
            Reserve Your Seat
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 flex min-h-touch min-w-touch items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-charcoal transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-charcoal transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-charcoal transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="border-t border-charcoal/5 bg-cream px-5 pb-8 pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-touch items-center text-lg text-charcoal"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#trips"
                className="btn-primary mt-3 w-full text-center"
                onClick={() => setOpen(false)}
              >
                Reserve Your Seat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
