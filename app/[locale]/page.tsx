import Image from 'next/image';
import { getTranslations } from '@/i18n/translations';
import AppStoreButtons from '@/components/AppStoreButtons';
import { Locale } from '@/i18n/config';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/Logo.svg"
              alt={t.common.appName}
              width={200}
              height={200}
              className="h-48 w-48 sm:h-64 sm:w-64"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl md:text-6xl">
            {t.home.title}
          </h1>
          <p className="mt-6 text-xl text-gray-600 sm:text-2xl">
            {t.home.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            {t.home.description}
          </p>
          <div className="mt-10">
            <p className="mb-6 text-sm font-medium text-gray-700">
              {t.home.availableOn}
            </p>
            <AppStoreButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

