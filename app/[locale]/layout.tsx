import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations } from '@/i18n/translations';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const t = getTranslations(locale as any);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} translations={t} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} translations={t} />
    </div>
  );
}

