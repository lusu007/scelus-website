import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { defaultLocale, type Locale } from '@/i18n/config';

export const dynamic = 'force-dynamic';

async function detectLocale(): Promise<Locale> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    // Check if any preferred language matches our locales
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

export default async function DatenschutzRedirect() {
  const locale = await detectLocale();
  redirect(`/${locale}/privacy`);
}
