"use client";

import { useCallback, useState } from "react";
import { Trip } from "@/data/trips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import UpcomingEscapes from "./UpcomingEscapes";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import TripDetailModal from "./TripDetailModal";
import ReservationModal from "./ReservationModal";

export default function HomePage() {
  const [detailTrip, setDetailTrip] = useState<Trip | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [reserveTrip, setReserveTrip] = useState<Trip | null>(null);
  const [reserveOpen, setReserveOpen] = useState(false);

  const openDetails = useCallback((trip: Trip) => {
    setDetailTrip(trip);
    setDetailOpen(true);
  }, []);

  const openReserve = useCallback((trip: Trip) => {
    setDetailOpen(false);
    setReserveTrip(trip);
    setReserveOpen(true);
  }, []);

  const closeDetails = useCallback(() => setDetailOpen(false), []);
  const closeReserve = useCallback(() => setReserveOpen(false), []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UpcomingEscapes onViewDetails={openDetails} onReserve={openReserve} />
        <HowItWorks />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />

      <TripDetailModal
        trip={detailTrip}
        open={detailOpen}
        onClose={closeDetails}
        onReserve={openReserve}
      />
      <ReservationModal
        trip={reserveTrip}
        open={reserveOpen}
        onClose={closeReserve}
      />
    </>
  );
}
