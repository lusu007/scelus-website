import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "@/i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = getTranslations(locale as Locale);
  return {
    title: { default: t.common.metaTitle, template: `%s · Scelus Development` },
    description: t.common.metaDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return (
    <div className="site-frame">
      <Header locale={locale} />
      <main className="site-main" id="content" tabIndex={-1}>
        {children}
      </main>
      <Footer
        locale={locale}
        translations={getTranslations(locale as Locale)}
      />
    </div>
  );
}
