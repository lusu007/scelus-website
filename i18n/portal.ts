import type { Locale } from "./config";

const de = {
  nav: {
    projects: "Projekte",
    about: "Über Scelus",
    contact: "Kontakt",
    menu: "Menü",
    skip: "Zum Inhalt",
    label: "Hauptnavigation",
  },
  hero: {
    first: "Gute Ideen.",
    second: "Echte Software.",
    description:
      "Apps, Tools und digitale Welten. Scelus ist das Zuhause für Software, die aus eigenen Ideen entsteht und im Alltag etwas bewegt.",
    action: "Projekte entdecken",
    contact: "Lass uns sprechen",
    note: "Unterschiedliche Projekte. Dieselbe Neugier.",
  },
  projects: {
    title: "Was aus Ideen wird.",
    intro:
      "Vom nächsten Dienst bis zur nächsten Spielwelt. Entdecke die Projekte von Scelus.",
    dienstplan: {
      category: "Mobile App",
      title: "Dienstplan – Polizei",
      description:
        "Mehr Überblick über deine Schichten. Und mehr Zeit für alles dazwischen. Mit Dienstplänen, Partnerschichten und Ferien in einer App.",
      detail: "Dein Dienst. Dein Überblick.",
      calendar: "November 2026",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      today: "Dein nächster Dienst",
      shift: "Frühdienst",
      shiftTime: "06:00 – 14:00",
      label: "Illustrative App-Ansicht",
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
  about: {
    title: "Neugier ist der Anfang.",
    text: "Hinter Scelus steht Lukas Jost. Hier finden eigene Softwareprojekte ein gemeinsames Zuhause – von einer App für die Dienstplanung bis zu einer Plattform für Minecraft.",
    second:
      "Die Themen sind unterschiedlich. Was sie verbindet: Ideen ausprobieren, Lösungen entwickeln und sie für andere nutzbar machen.",
    signature: "Lukas Jost",
    role: "Der Entwickler hinter Scelus",
    action: "Auf GitHub kennenlernen",
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
    about: "About Scelus",
    contact: "Contact",
    menu: "Menu",
    skip: "Skip to content",
    label: "Main navigation",
  },
  hero: {
    first: "Good ideas.",
    second: "Real software.",
    description:
      "Apps, tools and digital worlds. Scelus is a home for software born from personal ideas and built to make a difference in everyday life.",
    action: "Explore the projects",
    contact: "Let’s talk",
    note: "Different projects. The same curiosity.",
  },
  projects: {
    title: "Ideas, brought to life.",
    intro:
      "From your next shift to your next game world. Discover the projects by Scelus.",
    dienstplan: {
      category: "Mobile app",
      title: "Dienstplan – Polizei",
      description:
        "A clearer view of your shifts. More time for everything in between. Your schedule, your partner’s shifts and school holidays in one app.",
      detail: "Your shifts. At a glance.",
      calendar: "November 2026",
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      today: "Your next shift",
      shift: "Early shift",
      shiftTime: "06:00 – 14:00",
      label: "Illustrative app view",
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
  about: {
    title: "It starts with curiosity.",
    text: "Scelus is built by Lukas Jost. It brings independent software projects together, from a shift-planning app to a platform for Minecraft.",
    second:
      "The subjects vary. The approach stays the same: try ideas, build solutions and make them useful to others.",
    signature: "Lukas Jost",
    role: "The developer behind Scelus",
    action: "Meet me on GitHub",
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
