import Link from "next/link";
import { HiArrowUp } from "react-icons/hi2";
import Brand from "./Brand";
import { getPortalCopy } from "@/i18n/portal";
import type { Locale } from "@/i18n/config";

type FooterProps = {
  locale: string;
  translations: {
    footer: {
      imprint: string;
      privacy: string;
      support: string;
      copyright: string;
    };
  };
};

export default function Footer({ locale, translations }: FooterProps) {
  const t = getPortalCopy(locale as Locale);
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link href={`/${locale}/`} aria-label="Scelus Development">
            <Brand />
          </Link>
          <p>{t.footer.description}</p>
        </div>
        <div className="footer-links">
          <Link href={`/${locale}/support/`}>
            {translations.footer.support}
          </Link>
          <Link href={`/${locale}/imprint/`}>
            {translations.footer.imprint}
          </Link>
          <Link href={`/${locale}/privacy/`}>
            {translations.footer.privacy}
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Scelus Development</p>
        <a href="#top">
          {t.footer.top}
          <HiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
