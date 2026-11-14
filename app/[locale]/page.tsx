import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import {
  HiArrowDown,
  HiArrowUpRight,
  HiOutlineLifebuoy,
} from "react-icons/hi2";
import AppScreenshots from "@/components/AppScreenshots";
import { getTranslations } from "@/i18n/translations";
import { getPortalCopy } from "@/i18n/portal";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Projects & contact" : "Projekte & Kontakt",
    description: getTranslations(locale)?.common.metaDescription,
    alternates: {
      canonical: `/${locale}/`,
      languages: { de: "/de/", en: "/en/", "x-default": "/de/" },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getPortalCopy(locale);
  const dienstplan = t.projects.dienstplan;
  const grounds = t.projects.grounds;
  return (
    <>
      <div className="portal-home">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-body">
            <h1 id="hero-heading">
              {t.hero.first}
              <br />
              <em>{t.hero.second}</em>
            </h1>
            <div className="hero-intro">
              <p>{t.hero.description}</p>
              <a href="#projects" className="button button-primary">
                {t.hero.action}
                <HiArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <p>{t.hero.note}</p>
            <a href="#contact">
              {t.hero.contact}
              <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="projects"
          className="projects-section container"
          aria-labelledby="projects-heading"
        >
          <div className="section-intro">
            <h2 id="projects-heading">{t.projects.title}</h2>
            <p>{t.projects.intro}</p>
          </div>
          <div className="project-grid">
            <article className="project project-dienstplan">
              <div className="project-stage dienstplan-stage">
                <div className="project-stage-top">
                  <Image src="/Logo.svg" alt="" width={38} height={38} />
                  <span>Dienstplan</span>
                  <span className="platform-label">iOS & Android</span>
                </div>
                <h3>{dienstplan.detail}</h3>
                <AppScreenshots locale={locale} />
              </div>
              <div className="project-caption">
                <span>{dienstplan.category}</span>
                <span>Flutter</span>
              </div>
              <h3 className="project-title">{dienstplan.title}</h3>
              <p className="project-description">{dienstplan.description}</p>
              <ul className="project-features">
                {dienstplan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  className="project-link"
                  href="https://apps.apple.com/de/app/dienstplan-polizei/id6748340130"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple aria-hidden="true" />
                  App Store
                  <HiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="project-link"
                  href="https://play.google.com/store/apps/details?id=io.scelus.dienstplan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay aria-hidden="true" />
                  Google Play
                  <HiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="source-link"
                  href="https://github.com/lusu007/dienstplan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Dienstplan: ${dienstplan.source}`}
                >
                  <FaGithub aria-hidden="true" />
                  <span>{dienstplan.source}</span>
                </a>
              </div>
            </article>
            <article className="project project-grounds">
              <a
                href="https://grounds.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="project-stage grounds-stage"
                aria-label={grounds.action}
              >
                <Image
                  src="/grounds-ruins-bg.webp"
                  alt={grounds.imageAlt}
                  fill
                  className="grounds-scenery"
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <div className="grounds-stage-content">
                  <span className="grounds-topline">
                    Minecraft.{" "}
                    {locale === "de" ? "Weitergedacht." : "Reimagined."}
                  </span>
                  <Image
                    src="/grounds-logo.webp"
                    alt="Grounds"
                    width={1280}
                    height={524}
                    className="grounds-wordmark"
                  />
                  <p>{grounds.detail}</p>
                </div>
                <span className="stage-arrow">
                  <HiArrowUpRight aria-hidden="true" />
                </span>
              </a>
              <div className="project-caption">
                <span>{grounds.category}</span>
                <span>grounds.gg</span>
              </div>
              <h3 className="project-title">{grounds.title}</h3>
              <p className="project-description">{grounds.description}</p>
              <ul className="project-features">
                {grounds.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  className="project-link"
                  href="https://grounds.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {grounds.action}
                  <HiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="source-link"
                  href="https://github.com/groundsgg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Grounds: GitHub"
                >
                  <FaGithub aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-heading"
        >
          <div className="contact-top">
            <h2 id="contact-heading">
              {t.contact.title}
              <br />
              <em>{t.contact.emphasis}</em>
            </h2>
            <p>{t.contact.text}</p>
          </div>
          <a className="contact-email" href="mailto:hi@scelus.io">
            <span>hi@scelus.io</span>
            <HiArrowUpRight aria-hidden="true" />
            <span className="sr-only">{t.contact.email}</span>
          </a>
          <div className="contact-options">
            <a
              href="https://github.com/lusu007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              <span>
                <strong>{t.contact.github}</strong>
                <span>{t.contact.githubText}</span>
              </span>
              <HiArrowUpRight aria-hidden="true" />
            </a>
            <Link href={`/${locale}/support/`}>
              <HiOutlineLifebuoy aria-hidden="true" />
              <span>
                <strong>{t.contact.support}</strong>
                <span>{t.contact.supportText}</span>
              </span>
              <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
