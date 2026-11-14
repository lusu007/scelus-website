import Image from "next/image";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`brand-mark ${className}`.trim()}
      src="/scelus-logo.svg"
      width={64}
      height={64}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function Brand() {
  return (
    <span className="brand">
      <BrandMark />
      <span className="brand-copy">
        <span className="brand-name">Scelus</span>
        <span className="brand-descriptor">Development</span>
      </span>
    </span>
  );
}
