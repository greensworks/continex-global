# Continex Global — website

Astro 7 · Tailwind CSS 4 · GSAP · static output · EN (default) + TR (`/tr/...`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run check    # astro check (types)
```

## Structure

```
src/
  layouts/Base.astro          <head>, hreflang, OG, header/footer, consent, analytics
  components/
    layout/    Header, Footer, CookieConsent
    ui/        Button, SectionHeading
    sections/  Hero, LogoMarquee, … (one file per homepage/page section)
    analytics/ Analytics.astro (consent-gated GA4 / Clarity / LinkedIn / Meta / B2B)
  data/        site.ts (company facts), nav.ts, services.ts, industries.ts, partners.ts
  i18n/        config.ts, utils.ts (localizePath…), ui.ts (small UI strings)
  content/insights/{en,tr}/   blog posts (content collection)
  scripts/motion.ts           GSAP scroll reveals + counters ([data-reveal], [data-count])
  styles/global.css           Tailwind v4 @theme tokens (colours, type scale, spacing)
  assets/images | logos | partners
```

## Site pages (EN at `/`, TR at `/tr/...`)

Thin files in `src/pages/` render shared views in `src/views/`, so each page exists once and
serves both languages. Content comes from `src/data/*.ts` (`{ en, tr }` records) and
`src/content/insights/{en,tr}/`.

| Route | View | Sections |
|---|---|---|
| `/` | HomeView | Hero, WhatWeDo, WhyContinex, HowWeWork, IndustriesGrid, ExperienceCards, Numbers, LogoMarquee, MarketsGrid, Leadership, InsightsLatest, FinalCta |
| `/what-we-do`, `/what-we-do/[slug]` | WhatWeDoView, ServiceView | PageHero, ServiceDetail ×4, HowWeWork |
| `/industries` | IndustriesView | IndustriesGrid (detailed), ExperienceCards |
| `/markets` | MarketsView | MarketsGrid with Office / Local team / Strategic partner / Market coverage legend |
| `/selected-experience` | ExperienceView | ExperienceCards (full) |
| `/about` | AboutView | Our role, Our model, Leadership, Markets, Numbers, Principles |
| `/insights`, `/insights/[slug]` | InsightsView, InsightPostView | content collection |
| `/contact` | ContactView | ContactForm (posts JSON to `PUBLIC_FORM_ENDPOINT`, mailto fallback) |
| `/privacy-policy`, `/cookie-policy` | LegalView | placeholder until legal text arrives |

## Conventions

- **Bilingual content** lives in `src/data/*.ts` as `{ en, tr }` records; pick with `t(value, locale)`.
- **Pages**: `src/pages/foo.astro` (EN) + `src/pages/tr/foo.astro` (TR) — both import the same section components.
- **Motion**: add `data-reveal` to any block; `data-reveal-group` staggers children; `data-count="18"` for counters. Keep it subtle.
- **Colours**: only tokens from `global.css`. Navy + steel from the logo, one electric-blue accent. No gradients except photo overlays.
- **Tracking IDs** go in `.env` (see `.env.example`); scripts load only after cookie consent.
- **Partner logos**: `approved: false` entries in `partners.ts` are hidden until the client confirms.

## Component lab (`/lab/*`)

Reference sites are rebuilt section by section as Astro components and stacked on a bare page
(no site header/footer, `noindex`). Every block sits in `ComponentFrame`, whose top-left **Copy**
button copies that component's `.astro` source to the clipboard.

```
src/layouts/Lab.astro                 bare layout + copy handler
src/components/lab/ComponentFrame.astro
src/components/lab/rb/*.astro         rolandberger.com (13)
src/components/lab/sa/*.astro         strategyand.pwc.com NL home / contact / careers / TR ops (21)
src/components/lab/ke/*.astro         kearney.com careers / jobs (11)
src/components/lab/soa/*.astro        sourceofasia.com insights (9)
src/components/lab/bcg/*.astro        bcg.com AI transformation (15)
src/pages/lab/index.astro             → http://localhost:4321/lab  (everything, 74 frames)
src/pages/lab/roland-berger.astro     → http://localhost:4321/lab/roland-berger
```

The Strategy&, Kearney, Source of Asia and BCG sections were rebuilt from the Figma file
(`w6ms0cp4bBw8WhVWzBB1jl`, frame "Component") using its layer structure and text; colours and
type follow each brand (serif/black for Strategy&, purple outlines for Kearney, teal for SOA,
green for BCG). Photos are placeholders from `src/assets/images`.

To add another reference site: create `src/components/lab/<prefix>/`, write one component per
section with sensible default props, then a page under `src/pages/lab/` that wraps each in
`<ComponentFrame name="…" source={src('…')}>`.

## Pending from client
Phone, e-mail, domain, LinkedIn URL, vector logo (current PNG had the old tagline stripped), team portraits, real project photos, hosting target.
