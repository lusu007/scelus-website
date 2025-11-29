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

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const content = {
    de: {
      lastUpdated: 'Stand: 19.07.2025',
      intro: (
        <>
          Vielen Dank für die Nutzung unserer App <strong>Dienstplan</strong> (nachfolgend „App"). Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Im Folgenden informieren wir Sie über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten im Zusammenhang mit der Nutzung dieser App.
        </>
      ),
      responsible: {
        title: '1. Verantwortlicher',
        name: 'Lukas Jost',
        address: 'Kölner Straße 13',
        city: '28844 Weyhe',
        email: 'hi@scelus.io',
      },
      dataTypes: {
        title: '2. Art der verarbeiteten Daten',
        main: 'Die App verarbeitet keine personenbezogenen Daten, die direkt an uns übermittelt werden. Sämtliche Dienstplandaten werden lokal auf dem Gerät gespeichert. Es erfolgt keine zentrale Speicherung oder Synchronisation.',
        optional: 'Optional können folgende technische Daten verarbeitet werden:',
        items: [
          'Gerätekennungen (z. B. Firebase Cloud Messaging Token)',
          'App-Version, Betriebssystem-Version',
          'Absturzberichte (z. B. über Crashlytics oder Sentry)',
          'Fehler- und Diagnosedaten (inkl. ggf. IP-Adresse, Gerätetyp, Zeitpunkt des Fehlers)',
        ],
      },
      purpose: {
        title: '3. Zweck der Verarbeitung',
        main: 'Die Verarbeitung erfolgt ausschließlich zur:',
        items: [
          'Gewährleistung der Funktionsfähigkeit der App',
          'Verbesserung der App-Stabilität und -Sicherheit',
          'Benachrichtigung über relevante Änderungen (z. B. Dienstplanaktualisierungen)',
          'Analyse von Fehlern und Verbesserung der Stabilität mittels Sentry',
        ],
      },
      legalBasis: {
        title: '4. Rechtsgrundlage',
        text: 'Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',
      },
      permissions: {
        title: '5. Berechtigungen der App',
        main: 'Die App kann folgende Berechtigungen anfordern:',
        items: [
          'Netzwerkzugriff: Zum Abrufen von Updates oder Push-Benachrichtigungen',
          'Speicherzugriff: Zum lokalen Speichern von Dienstplänen',
        ],
        note: 'Diese Berechtigungen werden ausschließlich zur Erfüllung der App-Funktionen verwendet.',
      },
      noSharing: {
        title: '6. Keine Weitergabe an Dritte',
        text: 'Es erfolgt keine Weitergabe personenbezogener Daten an Dritte. Die App ist vollständig offlinefähig, sofern keine Cloud-Dienste aktiviert sind.',
      },
      thirdParty: {
        title: '7. Hosting und Dienste Dritter',
        main: 'Die App verwendet Drittanbieterdienste zur Stabilitätsanalyse und Verbesserung der App-Qualität:',
        items: [
          'Sentry: Zum Erfassen und Analysieren von Fehlern und Abstürzen. Anbieter: Functional Software, Inc. (Sentry), USA.',
        ],
        note: 'Bei der Nutzung von Sentry können technische Informationen (z. B. IP-Adresse, Geräteinformationen, Zeitpunkt des Fehlers) an Server in den USA übermittelt werden. Wir haben mit Sentry einen Auftragsverarbeitungsvertrag (Data Processing Agreement, DPA) abgeschlossen und achten auf geeignete Garantien gemäß Art. 44 ff. DSGVO (z. B. EU-Standardvertragsklauseln).',
      },
      rights: {
        title: '8. Ihre Rechte',
        main: 'Sie haben das Recht auf:',
        items: [
          'Auskunft nach Art. 15 DSGVO',
          'Berichtigung nach Art. 16 DSGVO',
          'Löschung nach Art. 17 DSGVO',
          'Einschränkung der Verarbeitung nach Art. 18 DSGVO',
          'Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO',
        ],
        note: 'Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an die oben angegebene Kontaktadresse.',
      },
      changes: {
        title: '9. Änderungen',
        text: 'Diese Datenschutzerklärung kann jederzeit aktualisiert werden. Die jeweils aktuelle Version finden Sie stets in der App oder im App Store-Eintrag.',
      },
    },
    en: {
      lastUpdated: 'Last updated: July 19, 2025',
      intro: (
        <>
          Thank you for using our app <strong>Dienstplan</strong> (hereinafter "App"). The protection of your personal data is important to us. Below we inform you about the type, scope and purpose of the processing of personal data in connection with the use of this app.
        </>
      ),
      responsible: {
        title: '1. Responsible Party',
        name: 'Lukas Jost',
        address: 'Kölner Straße 13',
        city: '28844 Weyhe',
        email: 'hi@scelus.io',
      },
      dataTypes: {
        title: '2. Types of Data Processed',
        main: 'The app does not process any personal data that is directly transmitted to us. All schedule data is stored locally on the device. No central storage or synchronization takes place.',
        optional: 'The following technical data may optionally be processed:',
        items: [
          'Device identifiers (e.g., Firebase Cloud Messaging Token)',
          'App version, operating system version',
          'Crash reports (e.g., via Crashlytics or Sentry)',
          'Error and diagnostic data (including IP address, device type, time of error)',
        ],
      },
      purpose: {
        title: '3. Purpose of Processing',
        main: 'Processing is carried out exclusively for:',
        items: [
          'Ensuring the functionality of the app',
          'Improving app stability and security',
          'Notification of relevant changes (e.g., schedule updates)',
          'Error analysis and stability improvement via Sentry',
        ],
      },
      legalBasis: {
        title: '4. Legal Basis',
        text: 'Processing is based on Art. 6 para. 1 lit. f GDPR (legitimate interest).',
      },
      permissions: {
        title: '5. App Permissions',
        main: 'The app may request the following permissions:',
        items: [
          'Network access: To retrieve updates or push notifications',
          'Storage access: To locally store schedules',
        ],
        note: 'These permissions are used exclusively to fulfill app functions.',
      },
      noSharing: {
        title: '6. No Sharing with Third Parties',
        text: 'No personal data is shared with third parties. The app is fully offline-capable, provided no cloud services are activated.',
      },
      thirdParty: {
        title: '7. Hosting and Third-Party Services',
        main: 'The app uses third-party services for stability analysis and app quality improvement:',
        items: [
          'Sentry: For capturing and analyzing errors and crashes. Provider: Functional Software, Inc. (Sentry), USA.',
        ],
        note: 'When using Sentry, technical information (e.g., IP address, device information, time of error) may be transmitted to servers in the USA. We have entered into a data processing agreement (DPA) with Sentry and ensure appropriate guarantees in accordance with Art. 44 ff. GDPR (e.g., EU standard contractual clauses).',
      },
      rights: {
        title: '8. Your Rights',
        main: 'You have the right to:',
        items: [
          'Information according to Art. 15 GDPR',
          'Correction according to Art. 16 GDPR',
          'Deletion according to Art. 17 GDPR',
          'Restriction of processing according to Art. 18 GDPR',
          'Objection to processing according to Art. 21 GDPR',
        ],
        note: 'To exercise your rights, please contact the contact address provided above.',
      },
      changes: {
        title: '9. Changes',
        text: 'This privacy policy may be updated at any time. You can always find the current version in the app or in the App Store listing.',
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
              {t.privacy.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-pretty text-gray-600 dark:text-gray-400 sm:text-lg">
              <strong>{c.lastUpdated}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6 text-gray-300">
            <p className="leading-relaxed">{c.intro}</p>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.responsible.title}
              </h2>
              <p className="leading-relaxed">
                <strong>{c.responsible.name}</strong>
                <br />
                {c.responsible.address}
                <br />
                {c.responsible.city}
                <br />
                E-Mail: <Link href={`mailto:${c.responsible.email}`} className="text-primary-light hover:underline">{c.responsible.email}</Link>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.dataTypes.title}
              </h2>
              <p className="mb-3 leading-relaxed">{c.dataTypes.main}</p>
              <p className="mb-2">{c.dataTypes.optional}</p>
              <ul className="ml-6 list-disc space-y-1">
                {c.dataTypes.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.purpose.title}
              </h2>
              <p className="mb-2">{c.purpose.main}</p>
              <ul className="ml-6 list-disc space-y-1">
                {c.purpose.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.legalBasis.title}
              </h2>
              <p className="leading-relaxed">{c.legalBasis.text}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.permissions.title}
              </h2>
              <p className="mb-2">{c.permissions.main}</p>
              <ul className="ml-6 list-disc space-y-1">
                {c.permissions.items.map((item, index) => {
                  const parts = item.split(':');
                  return (
                    <li key={index}>
                      <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 leading-relaxed">{c.permissions.note}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.noSharing.title}
              </h2>
              <p className="leading-relaxed">{c.noSharing.text}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.thirdParty.title}
              </h2>
              <p className="mb-2">{c.thirdParty.main}</p>
              <ul className="ml-6 list-disc space-y-1">
                {c.thirdParty.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 leading-relaxed">{c.thirdParty.note}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.rights.title}
              </h2>
              <p className="mb-2">{c.rights.main}</p>
              <ul className="ml-6 list-disc space-y-1">
                {c.rights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 leading-relaxed">{c.rights.note}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {c.changes.title}
              </h2>
              <p className="leading-relaxed">{c.changes.text}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
