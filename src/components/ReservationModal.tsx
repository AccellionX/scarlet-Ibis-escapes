"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trip } from "@/data/trips";

export type ReservationFormData = {
  fullName: string;
  email: string;
  phone: string;
  isMember: "yes" | "no" | "";
  roomPreference: "private" | "share" | "";
  friendName: string;
  dietaryNeeds: string;
  mobilityNotes: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

const emptyForm: ReservationFormData = {
  fullName: "",
  email: "",
  phone: "",
  isMember: "",
  roomPreference: "",
  friendName: "",
  dietaryNeeds: "",
  mobilityNotes: "",
  cardName: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};

type ReservationModalProps = {
  trip: Trip | null;
  open: boolean;
  onClose: () => void;
};

const steps = ["Your details", "Preferences", "Deposit", "Confirmed"];

export default function ReservationModal({
  trip,
  open,
  onClose,
}: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ReservationFormData>(emptyForm);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  const isWaitlist = trip ? trip.seatsRemaining === 0 : false;

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setForm(emptyForm);
    setPaying(false);
    setError("");
  }, [open, trip?.id]);

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

  const update = <K extends keyof ReservationFormData>(
    key: K,
    value: ReservationFormData[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const validateStep1 = () => {
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in your name, email, and phone.");
      return false;
    }
    if (!form.isMember) {
      setError("Please tell us if you are a Naples Ladies Social Group member.");
      return false;
    }
    setError("");
    return true;
  };

  const validateStep2 = () => {
    if (!form.roomPreference) {
      setError("Please select a room preference.");
      return false;
    }
    if (form.roomPreference === "share" && !form.friendName.trim()) {
      setError("Please enter your friend’s name for the shared room.");
      return false;
    }
    setError("");
    return true;
  };

  const validateStep3 = () => {
    if (isWaitlist) {
      setError("");
      return true;
    }
    const digits = form.cardNumber.replace(/\s/g, "");
    if (
      !form.cardName.trim() ||
      digits.length < 15 ||
      !/^\d{2}\/\d{2}$/.test(form.cardExpiry) ||
      form.cardCvc.length < 3
    ) {
      setError("Please complete the card details to continue (demo only).");
      return false;
    }
    setError("");
    return true;
  };

  const next = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const submitDeposit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setPaying(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPaying(false);
    setStep(4);
  };

  const formatCard = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  return (
    <AnimatePresence>
      {open && trip && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close reservation"
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-[2px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[94vh] w-full max-w-xl flex-col overflow-hidden bg-cream shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-charcoal/8 px-5 py-5 sm:px-8">
              <div>
                <p className="section-label">
                  {isWaitlist ? "Waitlist" : "Reservation"}
                </p>
                <h2
                  id="reservation-title"
                  className="mt-1 font-display text-2xl text-charcoal sm:text-3xl"
                >
                  {trip.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex min-h-touch min-w-touch items-center justify-center text-charcoal"
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

            {step < 4 && (
              <div className="border-b border-charcoal/8 px-5 py-4 sm:px-8">
                <ol className="flex gap-2">
                  {steps.slice(0, 3).map((label, i) => {
                    const n = i + 1;
                    const active = step === n;
                    const done = step > n;
                    return (
                      <li key={label} className="flex flex-1 flex-col gap-2">
                        <div
                          className={`h-[2px] w-full ${
                            done || active ? "bg-gold" : "bg-blush"
                          }`}
                        />
                        <span
                          className={`text-xs tracking-wide ${
                            active ? "text-charcoal" : "text-charcoal/45"
                          }`}
                        >
                          {n}. {label}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              {step === 1 && (
                <div className="space-y-5">
                  <Field label="Full name" htmlFor="fullName">
                    <input
                      id="fullName"
                      className="input-field"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      className="input-field"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      type="tel"
                      className="input-field"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      autoComplete="tel"
                    />
                  </Field>
                  <fieldset>
                    <legend className="mb-3 text-base font-medium text-charcoal">
                      Naples Ladies Social Group member?
                    </legend>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {(["yes", "no"] as const).map((opt) => (
                        <label
                          key={opt}
                          className={`flex min-h-touch flex-1 cursor-pointer items-center justify-center border px-4 text-base capitalize transition-colors ${
                            form.isMember === opt
                              ? "border-scarlet bg-blush/60 text-charcoal"
                              : "border-charcoal/15 hover:border-gold"
                          }`}
                        >
                          <input
                            type="radio"
                            name="isMember"
                            value={opt}
                            checked={form.isMember === opt}
                            onChange={() => update("isMember", opt)}
                            className="sr-only"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <fieldset>
                    <legend className="mb-3 text-base font-medium text-charcoal">
                      Room preference
                    </legend>
                    <div className="space-y-3">
                      <label
                        className={`flex min-h-touch cursor-pointer items-center border px-4 py-3 text-base transition-colors ${
                          form.roomPreference === "private"
                            ? "border-scarlet bg-blush/60"
                            : "border-charcoal/15 hover:border-gold"
                        }`}
                      >
                        <input
                          type="radio"
                          name="room"
                          className="sr-only"
                          checked={form.roomPreference === "private"}
                          onChange={() => update("roomPreference", "private")}
                        />
                        Private room
                      </label>
                      <label
                        className={`flex min-h-touch cursor-pointer items-center border px-4 py-3 text-base transition-colors ${
                          form.roomPreference === "share"
                            ? "border-scarlet bg-blush/60"
                            : "border-charcoal/15 hover:border-gold"
                        }`}
                      >
                        <input
                          type="radio"
                          name="room"
                          className="sr-only"
                          checked={form.roomPreference === "share"}
                          onChange={() => update("roomPreference", "share")}
                        />
                        Share with a friend
                      </label>
                    </div>
                  </fieldset>

                  {form.roomPreference === "share" && (
                    <Field label="Friend’s full name" htmlFor="friendName">
                      <input
                        id="friendName"
                        className="input-field"
                        value={form.friendName}
                        onChange={(e) => update("friendName", e.target.value)}
                      />
                    </Field>
                  )}

                  <Field label="Dietary needs (optional)" htmlFor="dietary">
                    <textarea
                      id="dietary"
                      rows={3}
                      className="input-field py-3"
                      value={form.dietaryNeeds}
                      onChange={(e) => update("dietaryNeeds", e.target.value)}
                      placeholder="Allergies, preferences…"
                    />
                  </Field>
                  <Field label="Mobility notes (optional)" htmlFor="mobility">
                    <textarea
                      id="mobility"
                      rows={3}
                      className="input-field py-3"
                      value={form.mobilityNotes}
                      onChange={(e) => update("mobilityNotes", e.target.value)}
                      placeholder="Anything we should know to keep you comfortable…"
                    />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={submitDeposit} className="space-y-5" id="deposit-form">
                  <div className="border border-gold/40 bg-blush/40 px-5 py-5">
                    <p className="font-display text-xl text-charcoal">Summary</p>
                    <dl className="mt-4 space-y-2 text-base text-charcoal/80">
                      <div className="flex justify-between gap-4">
                        <dt>Guest</dt>
                        <dd className="text-right font-medium text-charcoal">
                          {form.fullName}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Trip</dt>
                        <dd className="text-right">{trip.shortName}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Dates</dt>
                        <dd className="text-right">{trip.dates}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Room</dt>
                        <dd className="text-right">
                          {form.roomPreference === "private"
                            ? "Private room"
                            : `Share with ${form.friendName}`}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4 border-t border-gold/30 pt-3">
                        <dt className="font-medium text-charcoal">
                          {isWaitlist ? "Waitlist" : "Deposit due now"}
                        </dt>
                        <dd className="font-medium text-scarlet">
                          {isWaitlist ? "No charge" : `$${trip.deposit}`}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {isWaitlist ? (
                    <p className="text-base leading-relaxed text-charcoal/70">
                      This escape is currently full. Join the waitlist and we’ll
                      email you if a seat opens — no deposit required until then.
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-charcoal/55">
                        Mock Stripe-style form — no real payment is processed.
                      </p>
                      <Field label="Name on card" htmlFor="cardName">
                        <input
                          id="cardName"
                          className="input-field"
                          value={form.cardName}
                          onChange={(e) => update("cardName", e.target.value)}
                          autoComplete="cc-name"
                        />
                      </Field>
                      <Field label="Card number" htmlFor="cardNumber">
                        <input
                          id="cardNumber"
                          className="input-field"
                          inputMode="numeric"
                          placeholder="4242 4242 4242 4242"
                          value={form.cardNumber}
                          onChange={(e) =>
                            update("cardNumber", formatCard(e.target.value))
                          }
                          autoComplete="cc-number"
                        />
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Expiry" htmlFor="cardExpiry">
                          <input
                            id="cardExpiry"
                            className="input-field"
                            placeholder="MM/YY"
                            inputMode="numeric"
                            value={form.cardExpiry}
                            onChange={(e) =>
                              update("cardExpiry", formatExpiry(e.target.value))
                            }
                            autoComplete="cc-exp"
                          />
                        </Field>
                        <Field label="CVC" htmlFor="cardCvc">
                          <input
                            id="cardCvc"
                            className="input-field"
                            inputMode="numeric"
                            placeholder="123"
                            maxLength={4}
                            value={form.cardCvc}
                            onChange={(e) =>
                              update(
                                "cardCvc",
                                e.target.value.replace(/\D/g, "").slice(0, 4)
                              )
                            }
                            autoComplete="cc-csc"
                          />
                        </Field>
                      </div>
                    </>
                  )}
                </form>
              )}

              {step === 4 && (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-gold text-gold">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-charcoal md:text-4xl">
                    {isWaitlist
                      ? `You’re on the waitlist for ${trip.shortName}!`
                      : `You’re going to ${trip.shortName}!`}
                  </h3>
                  <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-charcoal/70">
                    {isWaitlist
                      ? "We’ll notify you by email if a seat becomes available. No deposit has been charged."
                      : "Your $500 deposit has been received (demo). Here’s what happens next:"}
                  </p>
                  {!isWaitlist && (
                    <ul className="mx-auto mt-8 max-w-sm space-y-4 text-left text-base text-charcoal/80">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        Confirmation email with your itinerary overview
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        Balance reminder 90 days before departure (
                        {trip.balanceDueDate})
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        Welcome call from your Scarlet Ibis host
                      </li>
                    </ul>
                  )}
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-primary mt-10 min-w-[200px]"
                  >
                    Done
                  </button>
                </div>
              )}

              {error && (
                <p className="mt-5 text-base text-scarlet" role="alert">
                  {error}
                </p>
              )}
            </div>

            {step < 4 && (
              <div className="flex flex-col-reverse gap-3 border-t border-charcoal/8 px-5 py-5 sm:flex-row sm:px-8">
                {step > 1 ? (
                  <button type="button" onClick={back} className="btn-secondary flex-1">
                    Back
                  </button>
                ) : (
                  <button type="button" onClick={onClose} className="btn-secondary flex-1">
                    Cancel
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" onClick={next} className="btn-primary flex-1">
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="deposit-form"
                    disabled={paying}
                    className="btn-primary flex-1"
                  >
                    {paying
                      ? "Processing…"
                      : isWaitlist
                        ? "Join the Waitlist"
                        : `Pay $${trip.deposit} Deposit`}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-base font-medium text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}
