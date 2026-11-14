import type { Locale } from "@/i18n/config";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const copy = {
  de: {
    title: "Hilfe zu Dienstplan.",
    description:
      "Eine Frage zur App oder etwas funktioniert nicht wie erwartet? Beschreibe kurz dein Anliegen. Bei technischen Problemen helfen auch dein Gerät und die App-Version.",
    form: {
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      submit: "E-Mail-Entwurf öffnen",
      note: "Das Formular öffnet einen Entwurf in deinem E-Mail-Programm. Du versendest die Nachricht dort selbst. Du kannst auch direkt schreiben an",
      draft:
        "Bitte sende die Nachricht in deinem E-Mail-Programm ab. Deine Eingaben bleiben hier erhalten.",
      fallback: "Kein E-Mail-Programm geöffnet? Schreibe direkt an",
      error:
        "Der Entwurf konnte nicht geöffnet werden. Deine Eingaben bleiben erhalten.",
      nameRequired: "Bitte gib deinen Namen ein.",
      emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
      emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
      subjectRequired: "Bitte gib einen Betreff ein.",
      messageRequired: "Bitte gib eine Nachricht ein.",
    },
  },
  en: {
    title: "Help with Dienstplan.",
    description:
      "Have a question about the app, or is something not working as expected? Tell me what happened. For technical issues, your device and app version help too.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Open email draft",
      note: "This form opens a draft in your email app. You send the message from there yourself. You can also write directly to",
      draft:
        "Please send the message from your email app. Your entries stay here.",
      fallback: "No email app opened? Write directly to",
      error: "The draft could not be opened. Your entries are still here.",
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      subjectRequired: "Please enter a subject.",
      messageRequired: "Please enter a message.",
    },
  },
};

type Props = { params: Promise<{ locale: Locale }> };
export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Dienstplan Support" : "Dienstplan support",
  };
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  const t = copy[locale];
  return (
    <PageShell locale={locale} title={t.title} description={t.description}>
      <ContactForm translations={t.form} />
    </PageShell>
  );
}
