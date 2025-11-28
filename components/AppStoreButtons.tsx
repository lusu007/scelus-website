import Link from 'next/link';
import { SiAppstore } from 'react-icons/si';
import { SiGoogleplay } from 'react-icons/si';

type AppStoreButtonsProps = {
  iosUrl?: string;
  androidUrl?: string;
};

export default function AppStoreButtons({
  iosUrl = 'https://apps.apple.com/de/app/dienstplan-polizei/id6748340130',
  androidUrl = 'https://play.google.com/store/apps/details?id=io.scelus.dienstplan',
}: AppStoreButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Link
        href={iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-40 items-center gap-2 rounded-lg bg-black px-3 text-white transition-opacity hover:opacity-90"
        aria-label="Download on the App Store"
      >
        <SiAppstore className="h-8 w-8 flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-[10px] leading-tight">Download on the</span>
          <span className="text-base font-semibold leading-tight">App Store</span>
        </div>
      </Link>
      <Link
        href={androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-40 items-center gap-2 rounded-lg bg-black px-3 text-white transition-opacity hover:opacity-90"
        aria-label="Get it on Google Play"
      >
        <SiGoogleplay className="h-8 w-8 flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-[10px] leading-tight">Get it on</span>
          <span className="text-base font-semibold leading-tight">Google Play</span>
        </div>
      </Link>
    </div>
  );
}

