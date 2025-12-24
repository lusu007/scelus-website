'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { HiGlobe } from 'react-icons/hi';

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const iconColor = isHero
    ? 'text-white hover:text-white/80'
    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200';

  return (
    <div className="relative z-20" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-lg p-2 transition-colors ${iconColor}`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <HiGlobe className="size-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((locale) => {
              const isActive = currentLocale === locale;
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => switchLocale(locale)}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  role="menuitem"
                >
                  {localeNames[locale]}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
