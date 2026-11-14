export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Trip = {
  id: string;
  name: string;
  shortName: string;
  location: string;
  dates: string;
  balanceDueDate: string;
  nights: number;
  priceFrom: number;
  deposit: number;
  seatsTotal: number;
  seatsRemaining: number;
  image: string;
  tagline: string;
  description: string;
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  paymentSchedule: string;
  cancellation: string;
};

export const trips: Trip[] = [
  {
    id: "amalfi-2027",
    name: "Amalfi Coast Spring Retreat",
    shortName: "Amalfi",
    location: "Amalfi Coast, Italy",
    dates: "May 8–16, 2027",
    balanceDueDate: "February 7, 2027",
    nights: 8,
    priceFrom: 6890,
    deposit: 500,
    seatsTotal: 14,
    seatsRemaining: 6,
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=1600&q=80",
    tagline: "Cliffside elegance above the Tyrrhenian Sea",
    description:
      "Eight nights along Italy’s most storied coastline — private villas overlooking Positano, leisurely lunches in Ravello, and a spa day framed by lemon groves. Designed for unhurried mornings and memorable evenings with your Naples friends.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Naples",
        description:
          "Private transfer to your Amalfi hotel. Welcome champagne on the terrace and a gentle dinner overlooking the sea.",
      },
      {
        day: 2,
        title: "Positano at your pace",
        description:
          "Guided stroll through Positano’s lanes, followed by free afternoon for shopping or a quiet beach club.",
      },
      {
        day: 3,
        title: "Ravello gardens",
        description:
          "Villa Rufolo and Villa Cimbrone. Sunset aperitivo with panoramic views of the coastline.",
      },
      {
        day: 4,
        title: "Spa & lemon groves",
        description:
          "Full spa day with massage and thermal treatments. Evening tasting of local limoncello and cheeses.",
      },
      {
        day: 5,
        title: "Capri day sail",
        description:
          "Private boat to Capri. Blue Grotto weather-permitting, lunch by the water, return for a relaxed dinner.",
      },
      {
        day: 6,
        title: "Amalfi town & cathedral",
        description:
          "Morning in Amalfi, optional ceramics workshop, afternoon at leisure.",
      },
      {
        day: 7,
        title: "Private chef farewell",
        description:
          "Cooking class with a local chef, then a candlelit farewell dinner at a cliffside restaurant.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Breakfast, private transfer to Naples airport or station. Au revoir — until the next escape.",
      },
    ],
    included: [
      "8 nights in a 5-star cliffside hotel",
      "Private airport transfers",
      "Daily breakfast and curated dinners",
      "Full spa day with massage",
      "Private Capri boat excursion",
      "Welcome champagne & farewell dinner",
      "On-trip host from Scarlet Ibis Travel",
    ],
    notIncluded: [
      "International airfare",
      "Travel insurance (required)",
      "Personal shopping and spa upgrades",
      "Meals not listed in the itinerary",
      "Gratuities for hotel and guides",
    ],
    paymentSchedule:
      "$500 deposit secures your seat. Balance is due 90 days before departure (February 7, 2027).",
    cancellation:
      "Deposit is refundable within 14 days of booking. After that, deposit is non-refundable. Balance cancellations: 50% refund if cancelled 60+ days before departure; no refund within 60 days. Travel insurance strongly recommended.",
  },
  {
    id: "tuscany-2027",
    name: "Tuscany Wine & Villa Week",
    shortName: "Tuscany",
    location: "Chianti, Italy",
    dates: "September 12–19, 2027",
    balanceDueDate: "June 14, 2027",
    nights: 7,
    priceFrom: 6490,
    deposit: 500,
    seatsTotal: 14,
    seatsRemaining: 9,
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    tagline: "Vineyards, villas, and golden-hour Chianti",
    description:
      "A week in a restored Tuscan villa — vineyard walks, private wine tastings, Florence by private coach, and evenings that stretch long under the olive trees.",
    itinerary: [
      {
        day: 1,
        title: "Villa welcome",
        description:
          "Transfer from Florence. Settle into your villa suite. Sunset aperitivo among the cypresses.",
      },
      {
        day: 2,
        title: "Chianti tasting",
        description:
          "Two boutique wineries, leisurely lunch, return for poolside rest.",
      },
      {
        day: 3,
        title: "Florence day",
        description:
          "Private coach to Florence. Guided Uffizi highlights or free exploration. Dinner in Oltrarno.",
      },
      {
        day: 4,
        title: "Cooking & countryside",
        description:
          "Hands-on pasta class with a local nonna. Afternoon at leisure.",
      },
      {
        day: 5,
        title: "Siena & San Gimignano",
        description:
          "Medieval towers, gelato, and a scenic drive through rolling hills.",
      },
      {
        day: 6,
        title: "Spa morning",
        description:
          "In-villa spa treatments. Evening farewell dinner under the stars.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and private transfer to Florence.",
      },
    ],
    included: [
      "7 nights in a private Tuscan villa",
      "Private transfers and Florence coach",
      "Daily breakfast and most dinners",
      "Wine tastings and cooking class",
      "In-villa spa morning",
      "On-trip host from Scarlet Ibis Travel",
    ],
    notIncluded: [
      "International airfare",
      "Travel insurance (required)",
      "Personal shopping",
      "Optional museum tickets beyond the group plan",
      "Gratuities",
    ],
    paymentSchedule:
      "$500 deposit secures your seat. Balance is due 90 days before departure (June 14, 2027).",
    cancellation:
      "Deposit is refundable within 14 days of booking. After that, deposit is non-refundable. Balance cancellations: 50% refund if cancelled 60+ days before departure; no refund within 60 days.",
  },
  {
    id: "santorini-2027",
    name: "Santorini Sunset Escape",
    shortName: "Santorini",
    location: "Santorini, Greece",
    dates: "October 3–10, 2027",
    balanceDueDate: "July 5, 2027",
    nights: 7,
    priceFrom: 7190,
    deposit: 500,
    seatsTotal: 14,
    seatsRemaining: 0,
    image:
      "https://images.unsplash.com/photo-1570077186671-e1bb9d1c2d8b?auto=format&fit=crop&w=1600&q=80",
    tagline: "Whitewashed calm above the caldera",
    description:
      "Seven nights in a caldera-view suite — sunset dinners in Oia, a private catamaran sail, and spa mornings designed for deep rest. This departure is currently full; join the waitlist to be first notified.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in paradise",
        description:
          "Private transfer to your cliffside hotel. Welcome champagne as the sun sets over the caldera.",
      },
      {
        day: 2,
        title: "Oia & blue domes",
        description:
          "Guided morning in Oia, photo stops, and a quiet lunch with sea views.",
      },
      {
        day: 3,
        title: "Catamaran sail",
        description:
          "Private catamaran with swimming stops, onboard lunch, and golden-hour return.",
      },
      {
        day: 4,
        title: "Spa day",
        description:
          "Full spa experience with massage and thermal treatments. Evening at leisure.",
      },
      {
        day: 5,
        title: "Wine & villages",
        description:
          "Santorini wine tasting and a visit to Pyrgos. Farewell dinner planned for tomorrow.",
      },
      {
        day: 6,
        title: "Farewell sunset",
        description:
          "Free morning. Private sunset dinner with champagne on a terrace above the sea.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and private airport transfer.",
      },
    ],
    included: [
      "7 nights in a 5-star caldera-view hotel",
      "Private airport transfers",
      "Daily breakfast and curated dinners",
      "Private catamaran sail",
      "Full spa day",
      "On-trip host from Scarlet Ibis Travel",
    ],
    notIncluded: [
      "International airfare",
      "Travel insurance (required)",
      "Personal shopping and spa upgrades",
      "Meals not listed",
      "Gratuities",
    ],
    paymentSchedule:
      "$500 deposit secures your seat. Balance is due 90 days before departure (July 5, 2027).",
    cancellation:
      "Deposit is refundable within 14 days of booking. After that, deposit is non-refundable. Balance cancellations: 50% refund if cancelled 60+ days before departure; no refund within 60 days.",
  },
];

export function getTripById(id: string): Trip | undefined {
  return trips.find((t) => t.id === id);
}

export type Reservation = {
  id: string;
  guestName: string;
  email: string;
  tripId: string;
  tripName: string;
  depositStatus: "Paid" | "Pending";
  balanceDueDate: string;
  roomShare: string;
  member: boolean;
};

export const mockReservations: Reservation[] = [
  {
    id: "r-001",
    guestName: "Margaret Ellison",
    email: "m.ellison@email.com",
    tripId: "amalfi-2027",
    tripName: "Amalfi Coast Spring Retreat",
    depositStatus: "Paid",
    balanceDueDate: "February 7, 2027",
    roomShare: "Private room",
    member: true,
  },
  {
    id: "r-002",
    guestName: "Diane Whitaker",
    email: "diane.w@email.com",
    tripId: "amalfi-2027",
    tripName: "Amalfi Coast Spring Retreat",
    depositStatus: "Paid",
    balanceDueDate: "February 7, 2027",
    roomShare: "Share with Carol Whitaker",
    member: true,
  },
  {
    id: "r-003",
    guestName: "Carol Whitaker",
    email: "carol.w@email.com",
    tripId: "amalfi-2027",
    tripName: "Amalfi Coast Spring Retreat",
    depositStatus: "Pending",
    balanceDueDate: "February 7, 2027",
    roomShare: "Share with Diane Whitaker",
    member: true,
  },
  {
    id: "r-004",
    guestName: "Patricia Nguyen",
    email: "p.nguyen@email.com",
    tripId: "tuscany-2027",
    tripName: "Tuscany Wine & Villa Week",
    depositStatus: "Paid",
    balanceDueDate: "June 14, 2027",
    roomShare: "Private room",
    member: true,
  },
  {
    id: "r-005",
    guestName: "Helen Brooks",
    email: "helen.brooks@email.com",
    tripId: "tuscany-2027",
    tripName: "Tuscany Wine & Villa Week",
    depositStatus: "Paid",
    balanceDueDate: "June 14, 2027",
    roomShare: "Private room",
    member: false,
  },
  {
    id: "r-006",
    guestName: "Susan Park",
    email: "susan.park@email.com",
    tripId: "santorini-2027",
    tripName: "Santorini Sunset Escape",
    depositStatus: "Paid",
    balanceDueDate: "July 5, 2027",
    roomShare: "Share with Linda Park",
    member: true,
  },
  {
    id: "r-007",
    guestName: "Barbara Klein",
    email: "b.klein@email.com",
    tripId: "amalfi-2027",
    tripName: "Amalfi Coast Spring Retreat",
    depositStatus: "Pending",
    balanceDueDate: "February 7, 2027",
    roomShare: "Private room",
    member: true,
  },
  {
    id: "r-008",
    guestName: "Nancy Torres",
    email: "nancy.t@email.com",
    tripId: "santorini-2027",
    tripName: "Santorini Sunset Escape",
    depositStatus: "Paid",
    balanceDueDate: "July 5, 2027",
    roomShare: "Private room",
    member: true,
  },
];

export const testimonials = [
  {
    quote:
      "Every detail was handled before I even thought to ask. I felt spoiled from the welcome champagne to the farewell dinner.",
    name: "Jane D. (placeholder)",
    trip: "Amalfi Coast",
  },
  {
    quote:
      "Traveling with my Naples friends — without planning a thing — was pure joy. The villa week was unforgettable.",
    name: "Mary S. (placeholder)",
    trip: "Tuscany",
  },
  {
    quote:
      "I never imagined a group trip could feel this intimate and luxurious. Already watching for the next escape.",
    name: "Linda R. (placeholder)",
    trip: "Santorini",
  },
];
