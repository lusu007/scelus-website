import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

type Translations = {
  footer: {
    description: string;
    support: string;
    legal: string;
    imprint: string;
    privacy: string;
    copyright: string;
  };
};

type FooterProps = {
  locale: string;
  translations: Translations;
};

export default function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = translations.footer.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className="relative w-full bg-linear-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Logo, description, GitHub */}
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/Logo.svg"
                    alt="Dienstplan - Polizei"
                    width={44}
                    height={44}
                    className="h-11 w-11"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Dienstplan - Polizei
                </span>
              </div>
              <p className="max-w-md text-base leading-7 text-gray-400 text-balance">
                {translations.footer.description}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/lusu007/dienstplan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-lg p-2 text-gray-400 transition-all duration-200 hover:bg-primary-light/10 hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle and Right columns: Links */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {translations.footer.support}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href={`/${locale}/support/`}
                    className="group relative inline-flex items-center text-base font-medium leading-6 text-gray-400 transition-all duration-200 hover:text-primary-light focus:outline-none focus:text-primary-light"
                  >
                    <span className="relative">
                      {translations.footer.support}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-primary-light transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {translations.footer.legal}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href={`/${locale}/imprint/`}
                    className="group relative inline-flex items-center text-base font-medium leading-6 text-gray-400 transition-all duration-200 hover:text-primary-light focus:outline-none focus:text-primary-light"
                  >
                    <span className="relative">
                      {translations.footer.imprint}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-primary-light transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/privacy/`}
                    className="group relative inline-flex items-center text-base font-medium leading-6 text-gray-400 transition-all duration-200 hover:text-primary-light focus:outline-none focus:text-primary-light"
                  >
                    <span className="relative">
                      {translations.footer.privacy}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-primary-light transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-800/50 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm leading-6 text-gray-500">{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
