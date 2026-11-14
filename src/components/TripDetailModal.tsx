"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Trip } from "@/data/trips";

type TripDetailModalProps = {
  trip: Trip | null;
  open: boolean;
  onClose: () => void;
  onReserve: (trip: Trip) => void;
};

export default function TripDetailModal({
  trip,
  open,
  onClose,
  onReserve,
}: TripDetailModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const isFull = trip ? trip.seatsRemaining === 0 : false;

  return (
    <AnimatePresence>
      {open && trip && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Close trip details"
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-[2px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="trip-detail-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden bg-cream shadow-2xl"
          >
            <div className="relative h-48 shrink-0 sm:h-56">
              <Image
                src={trip.image}
                alt={trip.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-charcoal/20" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex min-h-touch min-w-touch items-center justify-center bg-cream/90 text-charcoal transition-colors hover:bg-cream"
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-8 pt-2 sm:px-8">
              <p className="section-label">{trip.location}</p>
              <h2
                id="trip-detail-title"
                className="mt-2 font-display text-3xl text-charcoal md:text-4xl"
              >
                {trip.name}
              </h2>
              <p className="mt-2 text-base text-charcoal/65">
                {trip.dates} · {trip.nights} nights · from $
                {trip.priceFrom.toLocaleString()}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
                {trip.description}
              </p>

              <div className="mt-10">
                <h3 className="font-display text-2xl text-charcoal">
                  Day-by-day itinerary
                </h3>
                <ol className="mt-5 space-y-5">
                  {trip.itinerary.map((day) => (
                    <li key={day.day} className="flex gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-gold text-sm text-gold">
                        {day.day}
                      </span>
                      <div>
                        <p className="font-medium text-charcoal">{day.title}</p>
                        <p className="mt-1 text-base text-charcoal/65">
                          {day.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-2xl text-charcoal">
                    What’s included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {trip.included.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-base text-charcoal/75"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-charcoal">
                    What’s not included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {trip.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-base text-charcoal/75"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-charcoal/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-gold/30 pt-8">
                <h3 className="font-display text-2xl text-charcoal">
                  Payment schedule
                </h3>
                <p className="mt-3 text-base text-charcoal/75">
                  {trip.paymentSchedule}
                </p>
                <h3 className="mt-6 font-display text-2xl text-charcoal">
                  Cancellation
                </h3>
                <p className="mt-3 text-base text-charcoal/75">
                  {trip.cancellation}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onReserve(trip)}
                  className="btn-primary flex-1"
                >
                  {isFull ? "Join the Waitlist" : "Reserve Your Seat"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
