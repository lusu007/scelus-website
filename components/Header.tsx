'use client';

import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

type Translations = {
  common: {
    appName: string;
  };
};

type HeaderProps = {
  locale: string;
  translations: Translations;
  variant?: 'default' | 'hero';
  showLogo?: boolean;
};

export default function Header({ locale, translations, variant = 'default', showLogo = true }: HeaderProps) {
  const isHero = variant === 'hero';
  
  return (
    <header 
      className={
        isHero
          ? 'absolute inset-x-0 top-0 z-50'
          : 'relative z-50 bg-white shadow-sm dark:bg-gray-900 dark:shadow-gray-800'
      }
    >
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {showLogo ? (
          <div className="flex lg:flex-1">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div className="relative">
                <Image
                  src="/Logo.svg"
                  alt={translations.common.appName}
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />
              </div>
              <span className={`text-xl font-bold tracking-tight ${
                isHero 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-900 dark:text-white'
              }`}>
                {translations.common.appName}
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex lg:flex-1"></div>
        )}
        <div className="flex lg:flex-1 lg:justify-end">
          <div className="relative z-10 flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} variant={isHero ? 'hero' : 'default'} />
          </div>
        </div>
      </nav>
    </header>
  );
}
