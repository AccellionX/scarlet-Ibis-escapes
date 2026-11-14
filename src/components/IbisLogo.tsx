type IbisLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

export default function IbisLogo({
  className = "",
  markClassName = "w-9 h-9",
  showWordmark = true,
}: IbisLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        className={`shrink-0 text-scarlet ${markClassName}`}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 42c4-1 8-6 10-12 1.5-4.5 1-9-1-12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M21 18c6-8 16-10 24-6 7 3.5 11 11 10 19-1 9-7 15-15 17-6 1.5-12-1-15-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 28c3 2 8 3 14 1"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M45 22c2.5 1 4.5 3.5 5 6.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="40.5" cy="24.5" r="1.25" fill="currentColor" />
        <path
          d="M18 46c6 2 14 3 22 1"
          stroke="#C9A45C"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.35rem] md:text-[1.5rem] leading-none tracking-wide text-charcoal">
          Scarlet Ibis <span className="font-normal text-scarlet">Escapes</span>
        </span>
      )}
    </span>
  );
}
