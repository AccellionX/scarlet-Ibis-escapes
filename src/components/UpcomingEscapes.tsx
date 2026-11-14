"use client";

import { trips, Trip } from "@/data/trips";
import FadeIn from "./FadeIn";
import TripCard from "./TripCard";

type UpcomingEscapesProps = {
  onViewDetails: (trip: Trip) => void;
  onReserve: (trip: Trip) => void;
};

export default function UpcomingEscapes({
  onViewDetails,
  onReserve,
}: UpcomingEscapesProps) {
  return (
    <section id="trips" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-label">Upcoming Escapes</p>
          <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
            Destinations worth savoring
          </h2>
          <p className="mt-5 text-lg text-charcoal/70">
            Intimate groups of up to 14. Every seat curated for comfort, company,
            and ease.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {trips.map((trip, index) => (
            <TripCard
              key={trip.id}
              trip={trip}
              index={index}
              onViewDetails={onViewDetails}
              onReserve={onReserve}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
