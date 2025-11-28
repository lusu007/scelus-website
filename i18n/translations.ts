import { Locale } from './config';
import de from '@/messages/de.json';
import en from '@/messages/en.json';

const translations = {
  de,
  en,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

