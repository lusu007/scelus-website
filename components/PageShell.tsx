import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

export default function PageShell({
  title,
  description,
  children,
}: {
  locale: Locale;
  title: string;
  description: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <div className="container">
        <div className="subpage-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="subpage-content">{children}</div>
      </div>
    </>
  );
}
