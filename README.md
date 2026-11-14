# Scarlet Ibis Escapes

Demo marketing site for **Scarlet Ibis Travel** — a boutique Naples, Florida agency curating upscale group trips for women 50+ (Naples Ladies Social Group).

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Deploy-ready for Vercel. All trip and reservation data lives in `/src/data/trips.ts` — no backend.

## Features

- Sticky navigation, full-bleed hero, upcoming escape cards
- Trip detail modal (itinerary, inclusions, payment & cancellation)
- Multi-step reservation / waitlist modal with mock deposit form
- How It Works, About, Testimonials, Newsletter, Footer
- `/admin` preview table of mock reservations (no auth)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub (or import the folder in the Vercel dashboard).
2. Create a new Vercel project and select the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy.

No environment variables are required for this demo.

## Stack

- Next.js 14.2 · React 18 · TypeScript
- Tailwind CSS 3 · Framer Motion
- Google Fonts: Cormorant Garamond + Jost
- Images via Unsplash (`images.unsplash.com`)

## Demo note

Payments are simulated only. Reservation data is not persisted. Admin is an unauthenticated preview.
