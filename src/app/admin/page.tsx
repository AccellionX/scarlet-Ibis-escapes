import Link from "next/link";
import { mockReservations } from "@/data/trips";
import IbisLogo from "@/components/IbisLogo";

export const metadata = {
  title: "Admin Preview | Scarlet Ibis Escapes",
  description: "Demo admin table of reservations — no authentication.",
};

export default function AdminPage() {
  const paid = mockReservations.filter((r) => r.depositStatus === "Paid").length;
  const pending = mockReservations.filter(
    (r) => r.depositStatus === "Pending"
  ).length;

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-charcoal/8 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <IbisLogo />
          <div className="flex items-center gap-4">
            <span className="hidden text-sm tracking-wide text-gold sm:inline">
              Demo · No auth
            </span>
            <Link href="/" className="btn-secondary px-5 text-sm">
              ← Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="section-label">Owner preview</p>
        <h1 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
          Reservations at a glance
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
          How the owner tracks every guest in one place — mock data for this
          demo. No backend or login required.
        </p>

        <div className="mt-10 flex flex-wrap gap-8 border-y border-gold/25 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-charcoal/45">
              Total
            </p>
            <p className="mt-1 font-display text-3xl text-charcoal">
              {mockReservations.length}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-charcoal/45">
              Deposit paid
            </p>
            <p className="mt-1 font-display text-3xl text-charcoal">{paid}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-charcoal/45">
              Deposit pending
            </p>
            <p className="mt-1 font-display text-3xl text-scarlet">{pending}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-charcoal/15">
                <th className="pb-4 pr-4 font-medium text-charcoal/55">Guest</th>
                <th className="pb-4 pr-4 font-medium text-charcoal/55">Trip</th>
                <th className="pb-4 pr-4 font-medium text-charcoal/55">Deposit</th>
                <th className="pb-4 pr-4 font-medium text-charcoal/55">
                  Balance due
                </th>
                <th className="pb-4 font-medium text-charcoal/55">Room share</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-charcoal/8 transition-colors hover:bg-blush/30"
                >
                  <td className="py-4 pr-4 align-top">
                    <p className="font-medium text-charcoal">{r.guestName}</p>
                    <p className="mt-0.5 text-sm text-charcoal/50">{r.email}</p>
                    {r.member && (
                      <p className="mt-1 text-xs uppercase tracking-wider text-gold">
                        NLSG member
                      </p>
                    )}
                  </td>
                  <td className="py-4 pr-4 align-top text-charcoal/80">
                    {r.tripName}
                  </td>
                  <td className="py-4 pr-4 align-top">
                    <span
                      className={`inline-flex min-h-[32px] items-center px-3 text-sm ${
                        r.depositStatus === "Paid"
                          ? "bg-blush text-charcoal"
                          : "bg-scarlet/10 text-scarlet"
                      }`}
                    >
                      {r.depositStatus}
                    </span>
                  </td>
                  <td className="py-4 pr-4 align-top text-charcoal/80">
                    {r.balanceDueDate}
                  </td>
                  <td className="py-4 align-top text-charcoal/80">
                    {r.roomShare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-10 text-sm text-charcoal/45">Demo by AccellionX</p>
      </main>
    </div>
  );
}
