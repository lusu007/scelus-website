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
    <div className="bg-white">
      <Header locale={locale} translations={t} />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-dark">
          {c.title}
        </h1>
        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <p className="mb-3 font-semibold">{c.tmg}</p>
            <p>
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
            <p className="mb-2 font-semibold">{c.contact}</p>
            <p>
              E-Mail: <Link href={`mailto:${c.email}`} className="text-primary-light hover:underline">{c.email}</Link>
            </p>
          </section>

          <section>
            <p className="mb-3 font-semibold">{c.responsible}</p>
            <p>
              {c.name}
              <br />
              {c.address}
              <br />
              {c.city}
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">
              {c.disclaimer.title}
            </h2>
            <p className="leading-relaxed">{c.disclaimer.text}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
