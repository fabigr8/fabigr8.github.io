# fabigr8.github.io

Personal academic site built with [Astro](https://astro.build) + Tailwind CSS.
Dark mode by default (toggle to light, remembered per visitor), a publications
section with a "spotlight" hero, a separate CV page, and a reusable
scrollytelling template.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # preview the production build
```

## Where things live

| What | File |
| --- | --- |
| Name, title, tagline, social links | `src/data/site.ts` |
| Publications (set `featured: true` for the spotlight) | `src/data/publications.ts` |
| CV content (bio, experience, education, projects) | `src/data/cv.ts` |
| Start page — hero + blog list | `src/pages/index.astro` |
| Publications page (spotlight + list) | `src/pages/publications.astro` |
| CV / profile page | `src/pages/cv.astro` |
| Blog posts | `src/content/blog/*.md` / `*.mdx` |
| Blog post pages | `src/pages/blog/[...id].astro` |
| RSS feed | `src/pages/rss.xml.js` → `/rss.xml` |
| Scrollytelling template + scaffold | `src/pages/scrolly.astro`, `src/components/scrolly/` |

### Personalize checklist

- [ ] Replace the portrait: drop `profile.jpg` in `public/` and set `avatar` in
      `src/data/site.ts` to `"/profile.jpg"` (a placeholder `profile.svg` ships by default).
- [ ] Confirm the social URLs in `src/data/site.ts` (items marked `TODO`).
- [ ] Fill the `TODO` dates/degrees in `src/data/cv.ts`.
- [ ] (Optional) Add `public/cv.pdf` for the CV download button.

## Blog

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/` — the filename
becomes the URL slug (`my-post.md` → `/blog/my-post`). Frontmatter:

```yaml
---
title: "My post"
description: "One-line summary shown in the list and meta tags."
pubDate: 2026-07-12
# updatedDate: 2026-07-20   # optional
tags: ["xai", "notes"]      # optional
draft: false                # optional; drafts show in dev, hide in build
---
```

Use `.mdx` to embed components (e.g. `<Callout>` in `src/components/`, or the
scrollytelling components). Posts feed the list at `/blog` and the RSS feed at
`/rss.xml` automatically. Article body styling comes from
`@tailwindcss/typography` (`prose`), theme-aware in light and dark.

## Scrollytelling

The engine in `src/components/scrolly/` is framework-free (IntersectionObserver).
Build a story by matching each `<ScrollyStep id="…">` to a `<ScrollyFigure id="…">`;
`/scrolly` is a working scaffold to copy. Any HTML/SVG works in a figure — add
`d3` if you want data-driven visuals.

## Deploy (GitHub Pages)

This is configured as a **user site** served at the domain root.

1. Create a repository named exactly **`fabigr8.github.io`** and push this project to
   its `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes `dist/`.

> Deploying under a different repo name (a project site) means the URL gains a
> `/repo-name/` prefix — set `base: '/repo-name'` in `astro.config.mjs` if so.
