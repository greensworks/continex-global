# SEO / GEO technical audit — 23 September 2026

Scope: the generated bilingual Astro website; no deployment or live search-engine account changes were performed.

## Validation

- 50 generated pages reviewed, including the localized error pages.
- 40 indexable pages, all included in the sitemap exactly once.
- 10 intentionally non-indexable pages: six legal-policy pages, two alternative homepages and two error pages. Existing noindex intent is preserved; links on these pages may be followed.
- Exactly one H1 per page; no skipped heading levels.
- Unique titles and descriptions across indexable pages; no missing descriptions.
- One absolute HTTPS self-canonical per route, without query strings or unnecessary trailing slashes.
- Reciprocal EN/TR hreflang, self-reference and English x-default for indexable pages.
- Every sitemap language alternate matches the corresponding rendered HTML.
- Open Graph images, article images and organization logo resolve to generated assets.
- JSON-LD parses correctly; article headlines match visible H1s.
- Internal page and fragment links resolve to generated pages/elements; every image has an alt attribute (decorative images may have an empty alt).
- `npm run check`: 116 files, zero errors/warnings/hints.
- `npm run build`: successful.
- `npm run audit:seo`: zero errors and zero notes.

## Changes

- Added dedicated TR/EN search titles and concise descriptions for primary and policy pages, short SEO titles for all 18 insight entries and six case-study pages. Visible editorial headlines remain unchanged.
- Fixed H1→H3 jumps in the insight listing. Leadership now has a semantic section heading and individual person headings without reintroducing decorative vertical lines.
- Normalized canonical URLs and kept translated pages self-canonical rather than canonicalizing Turkish content to English.
- Replaced the nonexistent `/og-default.jpg` with a generated 1200×630 image. Added Twitter sharing metadata and localized OG metadata.
- Added Organization (real company details and logo), WebSite, WebPage/AboutPage/ContactPage/CollectionPage and BreadcrumbList schema. Added Service schema to the What We Do overview and Article schema to all insights.
- Article bylines use the existing named authors where supplied; otherwise they retain the existing organizational author. Publication dates come from content; modification dates are emitted and displayed only when an actual `updatedDate` is provided. No invented dates, ratings, awards or customer claims.
- Rebuilt the sitemap from rendered canonical/hreflang tags, including translated article slugs, and excluded every noindex page. `robots.txt` now uses the configured site origin.
- Added a repeatable build-output audit: `npm run build && npm run audit:seo` (Python 3 required).

## GEO and remaining operational checks

Pages provide meaningful server-rendered HTML, explicit headings, authorship, article summaries, language links and structured entity relationships. Content stays readable even if animation JavaScript fails. There is no invented “AI schema”, hidden keyword copy or FAQ markup for questions that are not visible on the page.

This audit establishes a technical baseline, not a guarantee of ranking, indexing, AI citations, rich results, accessibility conformance or Core Web Vitals performance. The script validates local generated assets and schema structure, not Google's live Rich Results eligibility.

After deployment, verify the production domain (`SITE_URL`, currently `https://continexglobal.com`), HTTPS/host redirects and HTTP status codes; inspect canonical selection in Search Console; submit `/sitemap-index.xml`; run live Rich Results and page-experience checks. Search Console verification is supported through `PUBLIC_GSC_VERIFICATION` but an account token has not been invented. Editorial facts and policy wording still require the business owner's review.

## Official guidance

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — core SEO and helpful content practices also apply to AI search; eligibility does not guarantee inclusion.
- [Google: title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)

## Service-page consolidation

The eight EN/TR service detail routes were removed at the owner’s request. All service links now point to the corresponding section on `/what-we-do` or `/tr/ne-yapiyoruz`. The sitemap contains 40 indexable pages after this change; the 50-page build and internal-link audit pass.
