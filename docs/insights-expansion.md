# Insights editorial expansion — 22 September 2026

Five original articles, each with an English and a Turkish page. The voice is analytical, executive-facing and aligned with Continex Global's actual business development and advisory services. The copy does not position the firm as an investment holding company or invent proprietary research, market statistics or client outcomes. Examples are explicitly illustrative.

| Topic | English slug | Turkish slug | Cover |
| --- | --- | --- | --- |
| Opportunity selection and portfolio discipline | cross-border-growth-portfolio-discipline | uluslararasi-buyumede-firsat-secimi | Abstract glass/stone volumes |
| Partnership execution governance | cross-border-execution-governance | sinir-otesi-ortakliklarda-uygulama-yonetimi | Abstract coordinated metal planes |
| Energy project commercial readiness | energy-project-commercial-readiness | enerji-projelerinde-ticari-hazirlik | Solar, substation and wind landscape |
| OEM customer development | oem-supplier-commercial-development | oem-musterilerinde-tedarikci-gelistirme | Precision metrology laboratory |
| Türkiye–China local execution | china-turkiye-partnership-local-execution | turkiye-cin-ortakliklarinda-yerel-uygulama | Intermodal freight terminal |

English routes use `/insights/`; Turkish routes use `/tr/gorusler/`. Bodies contain approximately 548–664 words. Estimated reading times use 200 words per minute, rounded up. Each page includes three takeaways, an executive question set, localized service links, a descriptive image alternative, author and date.

## Visual system

Five 1536×1024 covers: exactly two abstract compositions and three photorealistic editorial images. Restrained navy, steel blue, stone and natural light maintain visual continuity with the site. These are generated illustrative assets, not documentary photographs of company-owned facilities.

WebP source masters use quality 92. The existing responsive photo component serves AVIF quality 60 with WebP quality 82 fallback, clamps output widths to the source and loads article/featured covers eagerly. The four grid covers at 800 px are approximately 18–64 KiB as AVIF. Prompts and original source locations are recorded in `insights-expansion-images.json`; `scripts/optimize-generated-images.mjs` can recreate all source masters while those originals remain available.

## Integration and verification

- Featured growth article leads both language feeds; canonical slug breaks same-date ties consistently.
- Language switch and hreflang links resolve the actual translated content slugs for all nine article pairs.
- Article and Insights index social cards use optimized 1200×630 covers.
- Related service links follow the article topic.
- `npm run check`: zero errors and warnings; one existing unused-import hint in IndustriesView.
- `npm run build`: 54 pages generated.
- Static audit: 18 article pages plus two indexes; article links, alternate-language targets and social images resolve; 433 referenced image variants exist.
- Browser checks: Turkish listing at desktop 1440 px, English article at mobile 390 px, working TR→EN switch. Mobile document has no horizontal overflow or broken loaded images.

See `insights-expansion-validation.json` for route and word-count details.

## Visual direction revision

The five active covers now use versioned `-v2.webp` assets based on the user’s supplied KPMG-style references: two vivid translucent light-flow abstracts and three bright people-led business photographs. Original covers remain available but are no longer used by these articles. Current prompts, references and source files are recorded in `insights-image-style-v2.json`. Both languages and the index social card use the revised covers.
