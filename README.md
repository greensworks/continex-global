# Continex Global — website

Astro 7 · Tailwind CSS 4 · GSAP · static output · EN (default) + TR (`/tr/...`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
npm run check    # astro check (types + template diagnostics)
```

## Structure

```
src/
  pages/            thin route files (EN at /, TR under /tr) that render a view
  views/            one per page: composes section components, holds no markup of its own
  layouts/Base.astro  <head>, hreflang, OG, header/footer, cookie consent, analytics
  components/
    layout/         Header (classic + bar variants), Footer, CookieConsent
    sections/       one file per page section (Hero, CardRail, Faq, FinalCta, …)
    sections/rb/    guide-line patterns: GuideHeadline, GuideText, GuideSplit, Overline, StatementCard
    ui/             Button, Photo (the shared <Image> wrapper)
    analytics/      consent-gated GA4 / Clarity / LinkedIn / Meta tags
  data/             bilingual content as { en, tr } records (site, services, industries, …)
  lib/              images.ts (asset lookup), tiles.ts (card data + Tile type), insights.ts
  i18n/             config.ts, routes.ts (localised slugs), utils.ts, ui.ts (UI strings)
  content/insights/{en,tr}/   articles as a content collection
  scripts/motion.ts GSAP reveals and counters
  styles/global.css Tailwind v4 @theme tokens (colour, type scale, spacing)
  assets/           images · logos · partners
```

## Pages

Each route exists once as a view and serves both languages; TR slugs are mapped in `i18n/routes.ts`.

| Route | View | Main sections |
|---|---|---|
| `/` | HomeView | Hero, GuideHeadline, CardRail ×2, WhyContinex, HowWeWork, ExperienceCards, Numbers, LogoMarquee, MarketsGrid, Faq |
| `/what-we-do`, `/what-we-do/[slug]` | WhatWeDoView, ServiceView | PageHero, ServiceDetail, ServiceLinks, HowWeWork, CardRail |
| `/industries` | IndustriesView | PageHero, GuideHeadline + GuideText, CardRail ×2, ExperienceCards |
| `/markets` | MarketsView | PageHero, GuideText, MarketsGrid, CardRail, LogoMarquee |
| `/selected-experience`, `/selected-experience/[slug]` | ExperienceView, CaseStudyView | PageHero / CaseStudyLayout (mandate hero, facts, chapters, outcome rail) |
| `/about` | AboutView | PageHero, GuideSplit ×2, Leadership, Principles, SideCtas |
| `/insights`, `/insights/[slug]` | InsightsView, InsightPostView | InsightsFeed (featured + grid), ArticleLayout |
| `/contact` | ContactView | PageHero, ContactDetails (form + offices; posts JSON to `PUBLIC_FORM_ENDPOINT`, mailto fallback) |
| `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions` | LegalView | LegalDocument |

## Conventions

- **Content** lives in `src/data/*.ts` as `{ en, tr }` records; read it with `t(value, locale)`.
- **Views compose, components render.** A view imports section components and passes data; markup belongs in a component.
- **Images** go through `components/ui/Photo.astro`; sources live in `src/assets/images` and are looked up by name with `img()`.
- **Motion**: `data-reveal` on a block, `data-reveal-group` to stagger children, `data-count="18"` for counters.
- **Colour and type** come only from the tokens in `global.css` — navy + steel from the logo, one electric-blue accent.
- **Tracking IDs** live in `.env` (see `.env.example`); scripts load only after cookie consent.
- **Partner logos**: entries marked `approved: false` in `partners.ts` stay hidden until the client confirms them.

## Pending from the client

Domain, LinkedIn URL, vector logo, team portraits, real project photography, hosting target.
