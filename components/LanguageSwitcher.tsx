'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

type LanguageSwitcherProps = {
  currentLocale: string;
  variant?: 'default' | 'hero';
};

export default function LanguageSwitcher({
  currentLocale,
  variant = 'default',
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHero = variant === 'hero';

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="relative z-20 flex gap-2">
      {locales.map((locale) => {
        const isActive = currentLocale === locale;
        const buttonClasses = isHero
          ? `rounded px-3 py-1 text-sm font-semibold transition-colors cursor-pointer ${
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white hover:bg-white/10'
            }`
          : `relative z-20 rounded px-3 py-1 text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? 'bg-primary-light text-white'
                : 'text-primary-dark hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
            }`;
        
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLocale(locale)}
            className={buttonClasses}
          >
            {localeNames[locale]}
          </button>
        );
      })}
    </div>
  );
}

