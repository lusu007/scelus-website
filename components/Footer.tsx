import Link from 'next/link';

type Translations = {
  footer: {
    imprint: string;
    privacy: string;
    support: string;
  };
};

type FooterProps = {
  locale: string;
  translations: Translations;
};

export default function Footer({ locale, translations }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/imprint/`}
            className="text-sm hover:underline"
          >
            {translations.footer.imprint}
          </Link>
          <span className="hidden text-sm sm:inline">|</span>
          <Link
            href={`/${locale}/privacy/`}
            className="text-sm hover:underline"
          >
            {translations.footer.privacy}
          </Link>
          <span className="hidden text-sm sm:inline">|</span>
          <Link
            href={`/${locale}/support/`}
            className="text-sm hover:underline"
          >
            {translations.footer.support}
          </Link>
        </div>
        <div className="mt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Dienstplan App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

