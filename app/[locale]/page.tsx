import Image from 'next/image';
import { getTranslations } from '@/i18n/translations';
import AppStoreButtons from '@/components/AppStoreButtons';
import { Locale } from '@/i18n/config';
import { HiUserGroup, HiCalendar, HiColorSwatch, HiGlobe, HiFire, HiViewGrid, HiServer, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Header from '@/components/Header';

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
        <Header locale={locale} translations={t} variant="hero" />
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

        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {t.home.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-pretty text-gray-600 dark:text-gray-400 sm:text-lg">
              {t.home.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              {t.home.projects.title}
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {t.home.projects.subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Dienstplan Project Card */}
            <div className="flex flex-col rounded-2xl bg-gray-800/50 p-8 ring-1 ring-gray-700/50">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/Logo.svg"
                  alt={t.home.dienstplan.title}
                  width={120}
                  height={120}
                  className="h-24 w-24 sm:h-32 sm:w-32"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {t.home.dienstplan.title}
              </h3>
              <p className="mt-2 text-lg text-gray-300">
                {t.home.dienstplan.subtitle}
              </p>
              <p className="mt-4 text-base text-gray-400">
                {t.home.dienstplan.description}
              </p>
              <div className="mt-8 flex-1 space-y-4">
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiUserGroup className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.dienstplan.features.partnerShiftsTitle}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.dienstplan.features.partnerShifts}
                  </dd>
                </div>
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiCalendar className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.dienstplan.features.holidaysTitle}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.dienstplan.features.holidays}
                  </dd>
                </div>
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiColorSwatch className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.dienstplan.features.colorCustomizationTitle}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.dienstplan.features.colorCustomization}
                  </dd>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <p className="mb-4 text-sm font-medium text-gray-300">
                  {t.home.dienstplan.availableOn}
                </p>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <AppStoreButtons translations={t.home.appStore} />
                  <a
                    href="https://github.com/lusu007/dienstplan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-40 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <FaGithub className="size-5" aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* grounds.gg Project Card */}
            <div className="flex flex-col rounded-2xl bg-gray-800/50 p-8 ring-1 ring-gray-700/50">
              <div className="mb-6 flex justify-center">
                <div className="flex size-24 items-center justify-center rounded-full bg-indigo-500/20 sm:size-32">
                  <HiGlobe className="size-12 text-indigo-400 sm:size-16" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {t.home.grounds.title}
              </h3>
              <p className="mt-2 text-lg text-gray-300">
                {t.home.grounds.subtitle}
              </p>
              <p className="mt-4 text-base text-gray-400">
                {t.home.grounds.description}
              </p>
              <div className="mt-8 flex-1 space-y-4">
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiServer className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.grounds.features.feature1Title}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.grounds.features.feature1}
                  </dd>
                </div>
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiFire className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.grounds.features.feature2Title}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.grounds.features.feature2}
                  </dd>
                </div>
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiViewGrid className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.grounds.features.feature3Title}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.grounds.features.feature3}
                  </dd>
                </div>
                <div className="relative pl-12">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                      <HiCode className="size-5 text-white" aria-hidden="true" />
                    </div>
                    {t.home.grounds.features.feature4Title}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {t.home.grounds.features.feature4}
                  </dd>
                </div>
              </div>
              <div className="mt-auto pt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://grounds.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-52 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t.home.grounds.visitWebsite}
                </a>
                <a
                  href="https://github.com/groundsgg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-40 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <FaGithub className="size-5" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
