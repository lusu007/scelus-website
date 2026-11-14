import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getPortalCopy } from "@/i18n/portal";

export default function AppScreenshots({ locale }: { locale: Locale }) {
  const t = getPortalCopy(locale).projects.dienstplan;
  return (
    <figure className="app-screenshots">
      <div className="app-screenshots-row">
        {[
          {
            src: "/screenshots/dienstplan-calendar.jpg",
            alt: t.screenshotCalendar,
          },
          {
            src: "/screenshots/dienstplan-settings.jpg",
            alt: t.screenshotSettings,
          },
        ].map((shot) => (
          <a
            key={shot.src}
            href={shot.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${shot.alt}. ${t.screenshotOpen}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1240}
              height={2688}
              sizes="(max-width: 760px) 40vw, 210px"
            />
          </a>
        ))}
      </div>
      <figcaption>{t.screenshotSource}</figcaption>
    </figure>
  );
}
