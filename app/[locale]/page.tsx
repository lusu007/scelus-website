import Image from 'next/image';
import { getTranslations } from '@/i18n/translations';
import AppStoreButtons from '@/components/AppStoreButtons';
import { Locale } from '@/i18n/config';
import { HiUserGroup, HiCalendar, HiColorSwatch } from 'react-icons/hi';
import Header from '@/components/Header';
import ShiftPlansSection from '@/components/ShiftPlansSection';

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
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate bg-gray-50 dark:bg-gray-900 px-6 pt-14 lg:px-8">
        <Header locale={locale} translations={t} variant="hero" showLogo={false} />
        {/* Background image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <Image
            src="/hero-background.jpeg"
            alt=""
            fill
            className="object-cover opacity-30 blur-xl"
            priority
          />
        </div>

        <div className="mx-auto max-w-2xl pt-16 pb-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/Logo.svg"
                alt={t.common.appName}
                width={200}
                height={200}
                className="h-32 w-32 sm:h-48 sm:w-48"
                priority
              />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
              {t.home.title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 dark:text-gray-400 sm:text-xl/8">
              {t.home.subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 hidden sm:block">
              {t.home.description}
            </p>
            <div className="mt-10">
              <p className="mb-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.home.availableOn}
              </p>
              <AppStoreButtons translations={t.home.appStore} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              {t.home.features.title}
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {t.home.features.subtitle}
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              {t.home.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <HiUserGroup className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {t.home.features.partnerShiftsTitle}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {t.home.features.partnerShifts}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <HiCalendar className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {t.home.features.holidaysTitle}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {t.home.features.holidays}
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <HiColorSwatch className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {t.home.features.colorCustomizationTitle}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {t.home.features.colorCustomization}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              {t.home.availablePlans.title}
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {t.home.availablePlans.subtitle}
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              {t.home.availablePlans.description}
            </p>
          </div>
          <ShiftPlansSection
            locale={locale}
            translations={t.home.availablePlans}
          />
        </div>
      </div>
    </div>
  );
}
