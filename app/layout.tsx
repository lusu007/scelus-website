import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import { defaultLocale, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

async function detectLocale(): Promise<Locale> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang: string) => lang.split(';')[0].trim().toLowerCase());
    
    for (const lang of languages) {
      if (lang.startsWith('de')) {
        return 'de';
      }
      if (lang.startsWith('en')) {
        return 'en';
      }
    }
  }
  
  return defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocale();
  const t = getTranslations(locale);
  
  return {
    title: t.common.metaTitle,
    description: t.common.metaDescription,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
