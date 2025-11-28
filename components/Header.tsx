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
};

export default function Header({ locale, translations }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/Logo.svg"
              alt={translations.common.appName}
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="ml-3 text-xl font-semibold text-primary-dark">
              {translations.common.appName}
            </span>
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}

