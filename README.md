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

## Conventions

- **Bilingual content** lives in `src/data/*.ts` as `{ en, tr }` records; pick with `t(value, locale)`.
- **Pages**: `src/pages/foo.astro` (EN) + `src/pages/tr/foo.astro` (TR) — both import the same section components.
- **Motion**: add `data-reveal` to any block; `data-reveal-group` staggers children; `data-count="18"` for counters. Keep it subtle.
- **Colours**: only tokens from `global.css`. Navy + steel from the logo, one electric-blue accent. No gradients except photo overlays.
- **Tracking IDs** go in `.env` (see `.env.example`); scripts load only after cookie consent.
- **Partner logos**: `approved: false` entries in `partners.ts` are hidden until the client confirms.

## Pending from client
Phone, e-mail, domain, LinkedIn URL, vector logo (current PNG had the old tagline stripped), team portraits, real project photos, hosting target.
