"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames } from "@/i18n/config";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
  variant?: "default" | "hero";
}) {
  const pathname = usePathname();
  const path = pathname.replace(/^\/(de|en)(?=\/|$)/, "") || "/";
  return (
    <div
      className="language-switcher"
      aria-label={currentLocale === "de" ? "Sprache wählen" : "Select language"}
    >
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}${path}`}
          hrefLang={locale}
          lang={locale}
          aria-label={localeNames[locale]}
          aria-current={currentLocale === locale ? "page" : undefined}
        >
          {locale.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
