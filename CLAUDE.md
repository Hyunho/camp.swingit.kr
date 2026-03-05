# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

This is a **Next.js 14 (App Router)** site for the Camp Swing It / KLHC (Korean Lindy Hop Championships) swing dance event. Built from a Tailwind UI "Spotlight" template, heavily customized for event content.

### Key conventions

- **`@/`** path alias maps to `src/`
- **MDX** pages are first-class: `next.config.mjs` registers `.mdx` as a page extension, so `src/app/articles/{slug}/page.mdx` renders as a route. Each MDX article exports an `article` object with `{ title, description, author, date }`.
- **`src/lib/articles.ts`** uses `fast-glob` to discover all MDX articles at build time (excludes `csi2024*`), sorted by date descending.
- Images for the current event year live in `public/images/2026/` (subfolders: `DANCERS/`, `STAFF/`, `BandDj/`, `New/`, `main/`).

### Multi-language content

Articles and notices follow a naming convention with language suffixes:
- `-kr` → Korean
- `-en` → English
- `-cn` → Chinese

The homepage (`src/app/page.tsx`) filters articles by these suffixes to display the latest notice in each language.

### Event content components

Standalone components in `src/components/` hold the event's artist/staff data as static arrays of typed objects:

| Component | Content |
|-----------|---------|
| `Instructors.tsx` | International & main instructors (with bios) |
| `LocalInstructors.tsx` | Korean local instructors |
| `Band.tsx` | Live band members |
| `DJs.tsx` | DJs |
| `Staffs.tsx` | Event staff |

Each component renders a `DancerCard`-style layout. When a person has multiple images (`imageUrls[]`), a grid is shown; single image uses `imageUrl`. Persons in `singleColumnDancerNames` render full-width; others render in a 2-column grid.

### Routing structure

- `/` — Main homepage with hero, photos, notices, About, and all artist sections
- `/articles/[slug]` — Individual MDX notice/article pages
- `/klhc` — KLHC competition info (MDX page with custom `KlhcTable` and `Ksection` components)
- `/venues` — Venue info with photos
- `/schedule` — Class and event schedule sub-routes
- `/registration` — Registration info
- `/photos`, `/about` — Static info pages

Navigation items are hardcoded in `src/components/Header.tsx` (`DesktopNavigation` and `MobileNavigation`). SCHEDULE links to an external Google Sheets URL. PAST EVENTS links to the previous year's Vercel deployment.

### Shared layout components

- `Layout` (`src/components/Layout.tsx`) — wraps `Header` + `main` + `Footer`; applied via `src/app/layout.tsx` (not shown but standard Next.js pattern)
- `Container` — centers content with `max-w-7xl`
- `Prose` — applies `@tailwindcss/typography` prose styles for MDX content
- `ArticleLayout` — wrapper for individual article pages
