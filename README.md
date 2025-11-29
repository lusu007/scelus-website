# Dienstplan App Website

A modern, multi-language landing page for the Dienstplan App, built with Next.js and deployed on Cloudflare Pages.

## Features

- 🌍 Multi-language support (German/English)
- 📱 Responsive design
- 🎨 Modern UI matching the app's branding
- ⚡ Static site generation for fast loading
- 🔗 App Store links (iOS & Android)

## Tech Stack

- **Next.js 16** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Cloudflare Pages** - Hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static site in the `out` directory, ready for deployment.

## Deployment on Cloudflare Pages

### Option 1: Connect via Git (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `18` or higher
5. Deploy!

### Option 2: Deploy via Wrangler CLI

1. Install Wrangler CLI:

```bash
npm install -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Build the project:

```bash
npm run build
```

4. Deploy:

```bash
wrangler pages deploy out
```

### Environment Variables

If you need environment variables, add them in the Cloudflare Pages dashboard under Settings → Environment Variables.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Landing page
│   │   ├── imprint/       # Imprint page
│   │   ├── privacy/       # Privacy policy page
│   │   └── support/       # Support page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   └── AppStoreButtons.tsx
├── i18n/                  # Internationalization
│   ├── config.ts
│   └── translations.ts
├── messages/              # Translation files
│   ├── de.json
│   └── en.json
├── public/                # Static assets
│   └── Logo.svg
└── package.json
```

## Customization

### Update App Store Links

Edit `components/AppStoreButtons.tsx` and update the `iosUrl` and `androidUrl` props, or pass them as props from the page component.

### Update Content

- Edit translation files in `messages/de.json` and `messages/en.json`
- Update placeholder content in the page components

### Update Styling

- Colors are defined in `tailwind.config.js` (matching the logo colors)
- Modify components in the `components/` directory
- Global styles are in `app/globals.css`

## License

© 2024 Dienstplan App. All rights reserved.


