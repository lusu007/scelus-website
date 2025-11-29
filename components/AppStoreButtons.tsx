import Link from 'next/link';
import { SiAppstore } from 'react-icons/si';
import { SiGoogleplay } from 'react-icons/si';

type AppStoreTranslations = {
  downloadOn: string;
  appStore: string;
  ariaLabel: string;
  getItOn: string;
  googlePlay: string;
  ariaLabelGoogle: string;
};

type AppStoreButtonsProps = {
  iosUrl?: string;
  androidUrl?: string;
  translations: AppStoreTranslations;
};

export default function AppStoreButtons({
  iosUrl = 'https://apps.apple.com/de/app/dienstplan-polizei/id6748340130',
  androidUrl = 'https://play.google.com/store/apps/details?id=io.scelus.dienstplan',
  translations,
}: AppStoreButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Link
        href={iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-44 items-center gap-3 overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-black/90 px-4 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-light/50 hover:shadow-xl hover:shadow-primary-light/20 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
        aria-label={translations.ariaLabel}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-primary-dark/0 transition-all duration-300 group-hover:from-primary-light/10 group-hover:to-primary-dark/10" />
        <SiAppstore className="relative z-10 h-9 w-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div className="relative z-10 flex flex-col">
          <span className="text-[10px] font-medium leading-tight text-gray-300">{translations.downloadOn}</span>
          <span className="text-base font-bold leading-tight">{translations.appStore}</span>
        </div>
      </Link>
      <Link
        href={androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-44 items-center gap-3 overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-black/90 px-4 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-light/50 hover:shadow-xl hover:shadow-primary-light/20 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
        aria-label={translations.ariaLabelGoogle}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-primary-dark/0 transition-all duration-300 group-hover:from-primary-light/10 group-hover:to-primary-dark/10" />
        <SiGoogleplay className="relative z-10 h-9 w-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div className="relative z-10 flex flex-col">
          <span className="text-[10px] font-medium leading-tight text-gray-300">{translations.getItOn}</span>
          <span className="text-base font-bold leading-tight">{translations.googlePlay}</span>
        </div>
      </Link>
    </div>
  );
}

