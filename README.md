# Scelus Development

The bilingual project portfolio for [scelus.io](https://scelus.io), built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Hosted on Cloudflare Workers through OpenNext.

## Local development

Requires Node.js 24 or later.

```sh
npm ci
npm run dev
```

Open `/de/` or `/en/`. The root route redirects to the default German version.

## Validation and Cloudflare

```sh
npx tsc --noEmit
npm run build
```

`npm run preview` builds and previews the Cloudflare Worker locally. `npm run deploy` publishes through the existing OpenNext configuration. Deployment settings are in `wrangler.jsonc` and `open-next.config.ts`.

The locale header uses Edge Middleware because the installed Cloudflare adapter does not support Node.js Middleware / Proxy. Next.js 16 emits a deprecation notice for this compatible path.

## Content and design

- `i18n/portal.ts`: German and English portfolio copy.
- `messages/`: shared and existing legal translation content.
- `app/[locale]/`: portfolio, support, imprint and privacy pages.
- `app/globals.css`: shared responsive design tokens and styles.
- `components/Brand.tsx`: Scelus wordmark and geometric brand mark.
- `components/AppScreenshots.tsx`: screenshots captured directly from the current Android app in an emulator, with links to full-size images.

Support opens a draft in the visitor's email app; it does not send email from a server. Entries are retained, and the interface never claims successful delivery.

## Assets

Manrope and Instrument Serif are self-hosted from [Google Fonts](https://github.com/google/fonts). Their SIL Open Font License files are included in `public/fonts/`.

The Dienstplan icon is the existing project asset `public/Logo.svg`. Grounds game-world artwork and the full-colour logo come from the existing `groundsgg/grounds-landing` repository (`public/assets/ruins-bg.webp` and `public/assets/hero-logo.webp`). No external font or image service is needed at runtime.

The PNG screenshots in `public/screenshots/` were captured directly with Android `screencap` on a Pixel 6 Android 15 / API 35 emulator. They show the current dark UI with a demo ESD roster (group 2, partner group 3). The app is the original `dienstplan-v0.19.2-prod-90.apk` from [release v0.19.2](https://github.com/lusu007/dienstplan/releases/tag/v0.19.2), built from commit `b43bcf87ed514b20cd6c032b2c11fc89ee2670a9`, which matched the app repository's main commit at capture time. APK SHA-256: `808765db54cb62d24236333e26729e9244158d78e22aa65b78b1a4dcb6a96070`. The app interface was not recreated or edited.
