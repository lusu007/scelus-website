import type { Locale } from "./config";

const de = {
  nav: {
    projects: "Projekte",
    contact: "Kontakt",
    menu: "Menü",
    skip: "Zum Inhalt",
    label: "Hauptnavigation",
  },
  hero: {
    first: "Kleine Ideen.",
    second: "Weitergedacht.",
    description:
      "Apps, Tools und digitale Welten. Scelus Development ist das Zuhause für Software, die aus eigenen Ideen entsteht und im Alltag etwas bewegt.",
    action: "Projekte entdecken",
    contact: "Lass uns sprechen",
  },
  projects: {
    title: "Was aus Ideen wird.",
    intro:
      "Vom nächsten Dienst bis zur nächsten Spielwelt. Entdecke die Projekte von Scelus Development.",
    dienstplan: {
      category: "Mobile App",
      title: "Dienstplan – Polizei",
      description:
        "Mehr Überblick über deine Schichten. Und mehr Zeit für alles dazwischen. Mit Dienstplänen, eigenen Diensten und Terminen, Partnerschichten und Ferien in einer App.",
      detail: "Dein Dienst. Dein Überblick.",
      screenshotCalendar:
        "Dienstplan im Dark Mode: Kalender und Dienste im Überblick",
      screenshotSettings:
        "Dienstplan im Dark Mode: Einstellungen und Partnerschichten",
      screenshotOpen: "Screenshot in voller Größe öffnen",
      screenshotClose: "Screenshot schließen",
      screenshotSource: "Kalender & Einstellungen",
      features: [
        "Partnerschichten",
        "Ferien & Feiertage",
        "Individuelle Farben",
      ],
      source: "Quellcode",
    },
    grounds: {
      category: "Minecraft & Community",
      title: "Grounds",
      description:
        "Eine Plattform für Spieler, Creator und Entwickler. Mit dem Ziel, eigene Minecraft-Erlebnisse und die Infrastruktur dahinter zusammenzubringen.",
      detail: "Raum für die nächste Spielidee.",
      features: ["Multiplayer", "Creator-Tools", "Eigene Spielwelten"],
      action: "Grounds entdecken",
      imageAlt: "Eine Minecraft-Spielwelt aus dem Grounds-Projekt",
    },
  },
  contact: {
    title: "Eine Idee? Eine Frage?",
    emphasis: "Lass uns sprechen.",
    text: "Ob Feedback zu einem Projekt, eine technische Frage oder eine Idee für etwas Neues: Schreib mir.",
    email: "E-Mail schreiben",
    github: "Code & Projekte",
    githubText: "Entdecke die Repositories auf GitHub.",
    support: "Hilfe zur App",
    supportText: "Fragen zu Dienstplan? Hier geht’s zum Support.",
  },
  footer: {
    description: "Eigene Ideen. Mit Sorgfalt entwickelt.",
    top: "Zurück nach oben",
  },
};

type Widen<T> = T extends string
  ? string
  : T extends string[]
    ? string[]
    : { [K in keyof T]: Widen<T[K]> };
export type PortalCopy = Widen<typeof de>;

const en: PortalCopy = {
  nav: {
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    skip: "Skip to content",
    label: "Main navigation",
  },
  hero: {
    first: "Small ideas.",
    second: "Taken further.",
    description:
      "Apps, tools and digital worlds. Scelus Development is a home for software born from personal ideas and built to make a difference in everyday life.",
    action: "Explore the projects",
    contact: "Let’s talk",
  },
  projects: {
    title: "Ideas, brought to life.",
    intro:
      "From your next shift to your next game world. Discover the projects by Scelus Development.",
    dienstplan: {
      category: "Mobile app",
      title: "Dienstplan – Polizei",
      description:
        "A clearer view of your shifts. More time for everything in between. Shift schedules, custom shifts and events, your partner’s shifts and school holidays in one app.",
      detail: "Your shifts. At a glance.",
      screenshotCalendar:
        "Dienstplan in dark mode: calendar and shifts (German interface)",
      screenshotSettings:
        "Dienstplan in dark mode: settings and partner shifts (German interface)",
      screenshotOpen: "Open full-size screenshot",
      screenshotClose: "Close screenshot",
      screenshotSource: "Calendar & settings",
      features: [
        "Partner shifts",
        "School & public holidays",
        "Custom colours",
      ],
      source: "Source code",
    },
    grounds: {
      category: "Minecraft & community",
      title: "Grounds",
      description:
        "A platform for players, creators and developers. Bringing original Minecraft experiences and the infrastructure behind them together.",
      detail: "Room for your next game idea.",
      features: ["Multiplayer", "Creator tools", "Custom worlds"],
      action: "Discover Grounds",
      imageAlt: "A Minecraft game world from the Grounds project",
    },
  },
  contact: {
    title: "An idea? A question?",
    emphasis: "Let’s talk.",
    text: "Feedback on a project, a technical question or an idea for something new? Drop me a line.",
    email: "Write an email",
    github: "Code & projects",
    githubText: "Explore the repositories on GitHub.",
    support: "App support",
    supportText: "Questions about Dienstplan? Get help here.",
  },
  footer: {
    description: "Independent ideas. Thoughtfully built.",
    top: "Back to top",
  },
};

export function getPortalCopy(locale: Locale): PortalCopy {
  return locale === "en" ? en : de;
}
