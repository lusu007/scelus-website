'use client';

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
};

export default function Header({ locale, translations, variant = 'default' }: HeaderProps) {
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
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:flex-1 lg:justify-end">
          <div className="relative z-10 flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} variant={isHero ? 'hero' : 'default'} />
          </div>
        </div>
      </nav>
    </header>
  );
}

