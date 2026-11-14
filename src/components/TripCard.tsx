"use client";

import Image from "next/image";
import { Trip } from "@/data/trips";
import FadeIn from "./FadeIn";

type TripCardProps = {
  trip: Trip;
  index: number;
  onViewDetails: (trip: Trip) => void;
  onReserve: (trip: Trip) => void;
};

export default function TripCard({
  trip,
  index,
  onViewDetails,
  onReserve,
}: TripCardProps) {
  const seatsFilled = trip.seatsTotal - trip.seatsRemaining;
  const pctRemaining = (trip.seatsRemaining / trip.seatsTotal) * 100;
  const isFull = trip.seatsRemaining === 0;

  return (
    <FadeIn delay={index * 0.12} className="h-full">
      <article className="flex h-full flex-col">
        <button
          type="button"
          onClick={() => onViewDetails(trip)}
          className="group relative aspect-[4/3] w-full overflow-hidden bg-blush text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scarlet"
        >
          <Image
            src={trip.image}
            alt={trip.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/50 to-transparent p-5 pt-16">
            <span className="font-body text-xs uppercase tracking-[0.18em] text-white/90">
              {trip.location}
            </span>
          </span>
        </button>

        <div className="flex flex-1 flex-col pt-6">
          <h3 className="font-display text-2xl leading-snug text-charcoal md:text-[1.75rem]">
            {trip.name}
          </h3>
          <p className="mt-2 text-base text-charcoal/65">{trip.dates}</p>
          <p className="mt-1 text-base text-charcoal/65">
            {trip.nights} nights · from ${trip.priceFrom.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-charcoal/55">
            Deposit ${trip.deposit} to reserve
          </p>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-gold">
                {isFull
                  ? "Fully booked"
                  : `${trip.seatsRemaining} of ${trip.seatsTotal} seats remaining`}
              </p>
              {!isFull && (
                <p className="text-xs text-charcoal/45">
                  {seatsFilled} reserved
                </p>
              )}
            </div>
            <div className="h-[3px] w-full bg-blush">
              <div
                className="h-full bg-gold transition-all duration-700"
                style={{ width: `${pctRemaining}%` }}
              />
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
            <button
              type="button"
              onClick={() => onViewDetails(trip)}
              className="btn-secondary flex-1 text-[0.95rem]"
            >
              View Details
            </button>
            <button
              type="button"
              onClick={() => onReserve(trip)}
              className="btn-primary flex-1 text-[0.95rem]"
            >
              {isFull ? "Join the Waitlist" : "Reserve Your Seat"}
            </button>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
