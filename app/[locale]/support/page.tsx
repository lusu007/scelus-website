import Image from 'next/image';
import { getTranslations } from '@/i18n/translations';
import { Locale } from '@/i18n/config';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const content = {
    de: {
      title: 'Support für die Dienstplan - Polizei',
      description: 'Bei Fragen oder Problemen mit der Dienstplan - Polizei können Sie uns gerne kontaktieren. Füllen Sie einfach das Formular aus und wir melden uns schnellstmöglich bei Ihnen.',
      form: {
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        submit: 'Absenden',
        submitting: 'Wird gesendet...',
        success: 'Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.',
        error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.',
        nameRequired: 'Bitte geben Sie Ihren Namen ein.',
        emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        subjectRequired: 'Bitte geben Sie einen Betreff ein.',
        messageRequired: 'Bitte geben Sie eine Nachricht ein.',
      },
    },
    en: {
      title: 'Support for the Dienstplan - Polizei',
      description: 'If you have questions or issues with the Dienstplan - Polizei, please feel free to contact us. Simply fill out the form below and we will get back to you as soon as possible.',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Thank you for your message! We will get back to you as soon as possible.',
        error: 'An error occurred. Please try again or contact us directly via email.',
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        subjectRequired: 'Please enter a subject.',
        messageRequired: 'Please enter a message.',
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

      {/* Form Section */}
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <ContactForm locale={locale} translations={c.form} />
          </div>
        </div>
      </div>
    </div>
  );
}
