import IbisLogo from "./IbisLogo";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/8 bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <IbisLogo />
            <p className="mt-5 max-w-xs text-base leading-relaxed text-charcoal/65">
              Boutique luxury group travel for the Naples Ladies Social Group —
              women 50+ who travel beautifully, together.
            </p>
          </div>

          <div>
            <p className="section-label">Contact</p>
            <address className="mt-4 not-italic text-base leading-relaxed text-charcoal/75">
              Scarlet Ibis Travel
              <br />
              Naples, Florida
              <br />
              <a
                href="mailto:hello@scarletibisescapes.demo"
                className="mt-2 inline-block transition-colors hover:text-scarlet"
              >
                hello@scarletibisescapes.demo
              </a>
              <br />
              <a
                href="tel:+12394125500"
                className="inline-block transition-colors hover:text-scarlet"
              >
                (239) 412-5500
              </a>
            </address>
          </div>

          <div>
            <p className="section-label">Follow</p>
            <div className="mt-4 flex gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="flex min-h-touch min-w-touch items-center justify-center text-charcoal/70 transition-colors hover:text-scarlet"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex min-h-touch min-w-touch items-center justify-center text-charcoal/70 transition-colors hover:text-scarlet"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex min-h-touch min-w-touch items-center justify-center text-charcoal/70 transition-colors hover:text-scarlet"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M10.5 18.5l1-4.5s-.8-.5-.8-1.6c0-1.5.9-2.6 2-2.6 1 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.2-2 3.2-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.9.8 2.4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <a
              href="/admin"
              className="mt-6 inline-flex min-h-touch items-center text-sm tracking-wide text-charcoal/50 transition-colors hover:text-scarlet"
            >
              Admin preview →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-charcoal/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-charcoal/50">
            © {new Date().getFullYear()} Scarlet Ibis Travel. Demo website.
          </p>
          <p className="text-sm text-charcoal/45">Demo by AccellionX</p>
        </div>
      </div>
    </footer>
  );
}
