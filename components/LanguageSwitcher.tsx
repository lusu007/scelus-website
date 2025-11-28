'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

type LanguageSwitcherProps = {
  currentLocale: string;
};

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'bg-primary-light text-white'
              : 'text-primary-dark hover:bg-gray-100'
          }`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}

