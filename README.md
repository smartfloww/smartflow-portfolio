# Smartflowy Solutions — Website

The official marketing website for **Smartflowy Solutions**.
Smarter Solutions. Seamless Flow.

A fully static, single-page website built with Next.js. There is **no backend, no
database, and no server code** — it can be hosted anywhere static files can be
served.

---

## Contents

1. [Tech stack](#tech-stack)
2. [How to run locally](#how-to-run-locally)
3. [Where things live (important files)](#where-things-live-important-files)
4. [How to replace portfolio images](#how-to-replace-portfolio-images)
5. [How to replace portfolio website links](#how-to-replace-portfolio-website-links)
6. [How to change the Facebook link](#how-to-change-the-facebook-link)
7. [How to change the Instagram link](#how-to-change-the-instagram-link)
8. [How to change the email address](#how-to-change-the-email-address)
9. [How to edit other text on the site](#how-to-edit-other-text-on-the-site)
10. [How to build for production](#how-to-build-for-production)
11. [How to deploy to Vercel](#how-to-deploy-to-vercel)
12. [How to deploy to Netlify](#how-to-deploy-to-netlify)

---

## Tech stack

- **[Next.js](https://nextjs.org)** (App Router) with static export — the whole
  site builds to plain HTML/CSS/JS in the `out/` folder.
- **Tailwind CSS** for styling.
- **Framer Motion** for the subtle scroll and gallery animations.

You do **not** need to know any of this to make content changes — everything
below works by editing one or two files.

---

## How to run locally

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.
The page reloads automatically when you save a file.

> Prefer Bun or pnpm? `bun install && bun run dev` and
> `pnpm install && pnpm run dev` work the same way.

---

## Where things live (important files)

| What | Where |
| --- | --- |
| **Contact links** (Facebook, Instagram, email) | `src/data/site.ts` |
| **Portfolio projects** (names, descriptions, links, image paths) | `src/data/projects.ts` |
| **Portfolio images** (4 per project) | `public/images/projects/<project>/` |
| Brand assets (logo, favicon, sharing image) | `public/brand/` |
| Page title & SEO description | `src/app/layout.tsx` |
| Section components (hero, work, services, contact…) | `src/components/site/` |
| Colors and fonts | `src/app/globals.css` |

---

## How to replace portfolio images

Each project has **exactly 4 image slots**. The current images are neutral
placeholders, one pair of folders per project:

```
public/images/projects/le-nailz/   → 1.svg, 2.svg, 3.svg, 4.svg
public/images/projects/lumiere/    → 1.svg, 2.svg, 3.svg, 4.svg
public/images/projects/anila/      → 1.svg, 2.svg, 3.svg, 4.svg
public/images/projects/dilag/      → 1.svg, 2.svg, 3.svg, 4.svg
```

To use your own screenshots (desktop/laptop screenshots work best):

1. Save your four screenshots as `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` inside the
   project's folder (for example `public/images/projects/le-nailz/`).
   A size of about **1600 × 1000 px** per image works well.
2. Open `src/data/projects.ts` and update that project's `images` list so the
   file endings match, e.g.:

```ts
images: [
  "/images/projects/le-nailz/1.jpg",
  "/images/projects/le-nailz/2.jpg",
  "/images/projects/le-nailz/3.jpg",
  "/images/projects/le-nailz/4.jpg",
],
```

That's it — the grid and the gallery lightbox pick up the new images
automatically. You can delete the old `.svg` placeholder files afterwards.

> Tip: if you keep the same file names and format (`.svg` → no; but any
> `.jpg/.png/.webp`), only the paths in `projects.ts` need the extension
> changed. Keep exactly 4 images per project.

## How to replace portfolio website links

Open `src/data/projects.ts`. Each project has a `websiteUrl` line — change the
URL there:

```ts
{
  slug: "le-nailz",
  name: "Le Nailz",
  ...
  websiteUrl: "https://lenailz.com/",   // ← the "View Website" link
  ...
}
```

Project names, category tags, and descriptions are edited in the same file,
right next to the URL.

---

## How to change the Facebook link

Open `src/data/site.ts` and edit the `facebook` value:

```ts
export const CONTACT = {
  facebook: "https://www.facebook.com/profile.php?id=61590959274550",
  ...
};
```

This one link powers **every** "Get Your Free Website Sample" button on the
site (header, hero, mobile menu, free-sample section, contact section).

## How to change the Instagram link

Same file — `src/data/site.ts`:

```ts
  instagram: "https://instagram.com",   // ← replace with the real profile URL
```

## How to change the email address

Same file — `src/data/site.ts`:

```ts
  email: "smartflowsolutions.official@gmail.com",
```

The email is used for all "Email Us" buttons and every `mailto:` link.

---

## How to edit other text on the site

- **Headline, tagline, audience list** — `src/components/site/hero.tsx`
  (the tagline/subheading come from `src/data/site.ts`).
- **Services (Websites / Automation / AI Tools)** —
  `src/components/site/services.tsx`.
- **The free-sample offer and its 3 steps** —
  `src/components/site/free-sample.tsx`.
- **"What you can expect" points** — `src/components/site/why-us.tsx`.
- **Contact section and footer** — `src/components/site/contact.tsx` and
  `footer.tsx`.
- **Page title / SEO description** (shown on Google and social media) —
  `src/app/layout.tsx`. When the site is live, also update `metadataBase`
  there to your real domain so the social sharing image resolves correctly.
- **Brand files** — `public/brand/logo-header.png` (logo used in the site
  header), `public/brand/logo-mark.png` (logo mark used in footer/watermarks),
  `public/brand/favicon.png` (browser tab icon),
  `public/brand/og-image.jpg` (social sharing card).

---

## How to build for production

```bash
npm run build
```

Because this is a fully static site, the command produces a finished website
in the **`out/`** folder — plain HTML, CSS, and JavaScript with no server
required.

To preview the production build locally:

```bash
npm run start
```

(This runs a tiny static file server for the `out/` folder — purely for
previewing, nothing is deployed.)

---

## How to deploy to Vercel

The easiest way — push this folder to a GitHub/GitLab/Bitbucket repository
first.

1. Go to **[vercel.com](https://vercel.com)** and sign in (free plan is fine).
2. Click **Add New… → Project**.
3. Import the repository that contains this project.
4. Vercel detects **Next.js** automatically — leave all build settings as they
   are (Build command `next build`, Output is handled automatically).
5. Click **Deploy**.
6. After a minute you'll get your live URL (e.g.
   `smartflowy-solutions.vercel.app`). You can attach a custom domain any time
   from **Settings → Domains**.

Every time you push changes to the repository, Vercel redeploys the site
automatically.

**Alternative (no Git):** run `npm run build` locally, then drag the `out/`
folder into a new project at [vercel.com/new](https://vercel.com/new) — Vercel
also accepts static folders directly.

## How to deploy to Netlify

Again, easiest with the project in a Git repository.

1. Go to **[netlify.com](https://netlify.com)** and sign in (free plan is fine).
2. Click **Add new site → Import an existing project**.
3. Connect your Git provider and pick the repository.
4. Netlify detects **Next.js** automatically (it installs its Next.js plugin).
   Leave the defaults — build command `next build`.
5. Click **Deploy site**.
6. You'll get a live URL (e.g. `smartflowy-solutions.netlify.app). Add a
   custom domain later via **Domain settings** if you want.

Pushes to the repository automatically trigger new deploys.

**Alternative (no Git, fastest):** run `npm run build` locally, then drag the
**`out/`** folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
The site goes live immediately.

---

## A note on what's inside

- The portfolio images are intentionally neutral placeholders with exactly
  **4 slots per project**, ready to be swapped for real screenshots.
- All contact details are centralized in `src/data/site.ts` so they can be
  updated in one place.
- The site is a single page with smooth-scroll navigation:
  **Work · Services · Free Sample · Contact**.
