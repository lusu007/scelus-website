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
    <div className="bg-white">
      <Header locale={locale} translations={t} />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-dark">
          {c.title}
        </h1>
        <div className="mt-8 space-y-4 text-gray-700">
          <p className="leading-relaxed">{c.description}</p>
        </div>
        <ContactForm locale={locale} translations={c.form} />
      </div>
    </div>
  );
}
