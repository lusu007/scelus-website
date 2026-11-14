"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { HiArrowUpRight, HiBars2, HiXMark } from "react-icons/hi2";
import LanguageSwitcher from "./LanguageSwitcher";
import Brand from "./Brand";
import { getPortalCopy } from "@/i18n/portal";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: string;
};

export default function Header({ locale }: HeaderProps) {
  const t = getPortalCopy(locale as Locale);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    ["projects", t.nav.projects],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ];
  return (
    <header
      className="site-header"
      id="top"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#content">
        {t.nav.skip}
      </a>
      <nav className="container header-inner" aria-label={t.nav.label}>
        <Link
          href={`/${locale}/`}
          className="brand-link"
          aria-label="Scelus Development"
        >
          <Brand />
        </Link>
        <div className="desktop-nav">
          {links.map(([id, label]) => (
            <Link key={id} href={`/${locale}/#${id}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className="header-actions">
          <LanguageSwitcher currentLocale={locale} />
          <a
            href="mailto:hi@scelus.io"
            className="header-email"
            aria-label={t.contact.email}
          >
            <HiArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <HiXMark aria-hidden="true" />
            ) : (
              <HiBars2 aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label={t.nav.menu}
        >
          {links.map(([id, label]) => (
            <Link
              key={id}
              href={`/${locale}/#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
