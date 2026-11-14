export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M31 8H14L7 20h26L26 32H9"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Brand() {
  return (
    <span className="brand">
      <BrandMark />
      <span>
        scelus<span className="brand-period">.</span>
      </span>
    </span>
  );
}
