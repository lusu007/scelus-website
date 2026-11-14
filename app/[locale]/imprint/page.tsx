import { getTranslations } from "@/i18n/translations";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import PageShell from "@/components/PageShell";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return { title: getTranslations(locale).imprint.title };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function ImprintPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const content = {
    de: {
      title: "Impressum",
      description:
        "Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV.",
      tmg: "Angaben gemäß § 5 TMG:",
      name: "Scelus Development (Lukas Jost)",
      address: "Kölner Straße 13",
      city: "28844 Weyhe",
      country: "Deutschland",
      contact: "Kontakt:",
      email: "hi@scelus.io",
      responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:",
      disclaimer: {
        title: "Haftungsausschluss",
        text: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
      },
    },
    en: {
      title: "Imprint",
      description:
        "Information according to § 5 TMG and responsible for content according to § 55 para. 2 RStV.",
      tmg: "Information according to § 5 TMG:",
      name: "Scelus Development (Lukas Jost)",
      address: "Kölner Straße 13",
      city: "28844 Weyhe",
      country: "Germany",
      contact: "Contact:",
      email: "hi@scelus.io",
      responsible: "Responsible for content according to § 55 para. 2 RStV:",
      disclaimer: {
        title: "Disclaimer",
        text: "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
      },
    },
  };

  const c = content[locale];

  return (
    <PageShell locale={locale} title={c.title} description={c.description}>
      <div className="legal-copy">
        <section>
          <p>{c.tmg}</p>
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
          <p>{c.contact}</p>
          <p>
            E-Mail: <Link href={`mailto:${c.email}`}>{c.email}</Link>
          </p>
        </section>

        <section>
          <p>{c.responsible}</p>
          <p>
            {c.name}
            <br />
            {c.address}
            <br />
            {c.city}
          </p>
        </section>

        <hr />

        <section>
          <h2>{c.disclaimer.title}</h2>
          <p>{c.disclaimer.text}</p>
        </section>
      </div>
    </PageShell>
  );
}
