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
- `components/CalendarPreview.tsx`: illustrative calendar artwork, not a product screenshot.

Support opens a draft in the visitor's email app; it does not send email from a server. Entries are retained, and the interface never claims successful delivery.

## Assets

Manrope and Instrument Serif are self-hosted from [Google Fonts](https://github.com/google/fonts). Their SIL Open Font License files are included in `public/fonts/`.

The Dienstplan icon is the existing project asset `public/Logo.svg`. Grounds artwork and wordmark come from the existing `groundsgg/grounds-landing` repository (`public/assets/ruins-bg.webp` and `public/assets/wordmark.webp`). No external font or image service is needed at runtime.
