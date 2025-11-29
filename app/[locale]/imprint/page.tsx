import Image from 'next/image';
import { getTranslations } from '@/i18n/translations';
import { Locale } from '@/i18n/config';
import Link from 'next/link';
import Header from '@/components/Header';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function ImprintPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const content = {
    de: {
      title: 'Impressum',
      description: 'Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV.',
      tmg: 'Angaben gemäß § 5 TMG:',
      name: 'Lukas Jost',
      address: 'Kölner Straße 13',
      city: '28844 Weyhe',
      country: 'Deutschland',
      contact: 'Kontakt:',
      email: 'hi@scelus.io',
      responsible: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:',
      disclaimer: {
        title: 'Haftungsausschluss',
        text: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
      },
    },
    en: {
      title: 'Imprint',
      description: 'Information according to § 5 TMG and responsible for content according to § 55 para. 2 RStV.',
      tmg: 'Information according to § 5 TMG:',
      name: 'Lukas Jost',
      address: 'Kölner Straße 13',
      city: '28844 Weyhe',
      country: 'Germany',
      contact: 'Contact:',
      email: 'hi@scelus.io',
      responsible: 'Responsible for content according to § 55 para. 2 RStV:',
      disclaimer: {
        title: 'Disclaimer',
        text: 'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
      },
    },
  };

  const c = content[locale];

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
            className="object-cover opacity-30 blur-[24px]"
            priority
          />
        </div>

        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
              {c.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-pretty text-gray-600 dark:text-gray-400 sm:text-lg">
              {c.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6 text-gray-300">
            <section>
              <p className="mb-3 font-semibold text-white">{c.tmg}</p>
              <p className="leading-relaxed">
                {c.name}
                <br />
                {c.address}
                <br />
                {c.city}
                <br />
                {c.country}
              </p>
            </section>

            <section>
              <p className="mb-2 font-semibold text-white">{c.contact}</p>
              <p className="leading-relaxed">
                E-Mail: <Link href={`mailto:${c.email}`} className="text-primary-light hover:underline">{c.email}</Link>
              </p>
            </section>

            <section>
              <p className="mb-3 font-semibold text-white">{c.responsible}</p>
              <p className="leading-relaxed">
                {c.name}
                <br />
                {c.address}
                <br />
                {c.city}
              </p>
            </section>

            <hr className="my-8 border-gray-700" />

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.disclaimer.title}
              </h2>
              <p className="leading-relaxed">{c.disclaimer.text}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
