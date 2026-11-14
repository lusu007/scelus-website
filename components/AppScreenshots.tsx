"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Locale } from "@/i18n/config";
import { getPortalCopy } from "@/i18n/portal";

gsap.registerPlugin(useGSAP);

export default function AppScreenshots({ locale }: { locale: Locale }) {
  const t = getPortalCopy(locale).projects.dienstplan;
  const deckRef = useRef<HTMLDivElement>(null);
  const requestFront = useRef<((index: number) => void) | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const screenshots = [
    {
      src: "/screenshots/dienstplan-calendar-dark.png",
      alt: t.screenshotCalendar,
    },
    {
      src: "/screenshots/dienstplan-settings-dark.png",
      alt: t.screenshotSettings,
    },
  ];
  const activeScreenshot = screenshots[activeIndex ?? 0];

  useEffect(() => {
    const dialog = dialogRef.current;
    // Commit the selected image and its accessible description before moving focus.
    if (activeIndex !== null && dialog && !dialog.open) dialog.showModal();
  }, [activeIndex]);

  useGSAP(
    (_, contextSafe) => {
      if (!deckRef.current || !contextSafe) return;
      const links = Array.from(
        deckRef.current.querySelectorAll<HTMLAnchorElement>("a"),
      );
      const cards = links.map((link) =>
        link.querySelector<HTMLSpanElement>(".screenshot-card")!,
      );
      const media = gsap.matchMedia();

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (mediaContext) => {
          let front = 0;
          let requested = 0;
          let busy = false;
          let timeline: gsap.core.Timeline | null = null;
          const reduced = Boolean(mediaContext.conditions?.reduced);
          const homeX = (index: number) => (index === 0 ? 17 : -17);
          const homeRotation = (index: number) => (index === 0 ? -7 : 6);

          cards.forEach((card, index) =>
            gsap.set(card, {
              x: homeX(index),
              y: index === front ? 0 : 18,
              rotation: homeRotation(index),
              rotationY: 0,
              scale: 1,
              transformPerspective: 850,
            }),
          );

          links.forEach((link, index) =>
            gsap.set(link, { zIndex: index === front ? 2 : 1 }),
          );

          const shuffle: (next: number) => void = contextSafe(
            (next: number) => {
              if (reduced) {
                cards.forEach((card, index) =>
                  gsap.set(card, {
                    y: index === next ? 0 : 18,
                  }),
                );
                links.forEach((link, index) =>
                  gsap.set(link, { zIndex: index === next ? 2 : 1 }),
                );
                front = next;
                return;
              }

              busy = true;
              const previous = front;
              const direction = next === 0 ? -1 : 1;
              const clearance = cards[next].offsetWidth * 0.36;
              timeline = gsap.timeline({
                defaults: { duration: 0.28, ease: "power2.inOut" },
                onComplete: () => {
                  front = next;
                  busy = false;
                  timeline = null;
                  if (requested !== front) shuffle(requested);
                },
              });
              timeline
                .to(
                  cards[next],
                  {
                    x: homeX(next) + direction * clearance,
                    y: -6,
                    rotationY: -direction * 62,
                    scale: 1.02,
                  },
                  0,
                )
                .to(
                  cards[previous],
                  { y: 24, rotationY: direction * 8, scale: 0.97 },
                  0,
                )
                // Change paint order only once the incoming screen has cleared the stack.
                .set(links[previous], { zIndex: 1 }, 0.28)
                .set(links[next], { zIndex: 2 }, 0.28)
                .to(
                  cards[next],
                  {
                    x: homeX(next),
                    y: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: 0.42,
                    ease: "power3.out",
                  },
                  0.28,
                )
                .to(
                  cards[previous],
                  {
                    y: 18,
                    rotationY: 0,
                    scale: 1,
                    duration: 0.42,
                    ease: "power3.out",
                  },
                  0.28,
                );
            },
          );

          requestFront.current = contextSafe((index: number) => {
            requested = index;
            // Finish the current shuffle before following the latest pointer intent.
            if (!busy && front !== requested) shuffle(requested);
          });
          return () => {
            timeline?.kill();
            requestFront.current = null;
          };
        },
      );
      return () => media.revert();
    },
    { scope: deckRef },
  );

  return (
    <figure className="app-screenshots">
      <div className="app-screenshots-row" ref={deckRef}>
        {screenshots.map((shot, index) => (
          <a
            key={shot.src}
            className={
              index === 0 ? "screenshot-primary" : "screenshot-secondary"
            }
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") requestFront.current?.(index);
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(":focus-visible"))
                requestFront.current?.(index);
            }}
            href={shot.src}
            onClick={(event) => {
              if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
              )
                return;
              event.preventDefault();
              setActiveIndex(index);
            }}
            aria-haspopup="dialog"
            aria-label={`${shot.alt}. ${t.screenshotOpen}`}
          >
            <span className="screenshot-card">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1080}
                height={2400}
                sizes="(max-width: 760px) 40vw, 210px"
              />
            </span>
          </a>
        ))}
      </div>
      <figcaption>{t.screenshotSource}</figcaption>
      <dialog
        ref={dialogRef}
        className="screenshot-dialog"
        aria-labelledby="screenshot-preview-title"
        aria-describedby="screenshot-preview-caption"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="screenshot-dialog-toolbar">
          <p id="screenshot-preview-title">{t.title}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={t.screenshotClose}
          >
            <HiXMark aria-hidden="true" />
          </button>
        </div>
        <Image
          className="screenshot-expanded"
          src={activeScreenshot.src}
          alt={activeScreenshot.alt}
          width={1080}
          height={2400}
          sizes="(max-width: 520px) 80vw, 400px"
        />
        <p
          id="screenshot-preview-caption"
          className="screenshot-dialog-caption"
        >
          {activeScreenshot.alt}
        </p>
      </dialog>
    </figure>
  );
}
