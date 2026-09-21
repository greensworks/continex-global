/**
 * Localised URL segments. Keys are the canonical (English) segments used
 * in code; values are what appears in the URL for each locale.
 * Segments not listed here (insight slugs, case study slugs) stay as-is.
 */
import type { Locale } from './config';

export const segments: Record<string, Record<Locale, string>> = {
  'what-we-do': { en: 'what-we-do', tr: 'ne-yapiyoruz' },
  industries: { en: 'industries', tr: 'sektorler' },
  markets: { en: 'markets', tr: 'pazarlar' },
  'selected-experience': { en: 'selected-experience', tr: 'secilmis-deneyim' },
  about: { en: 'about', tr: 'hakkimizda' },
  insights: { en: 'insights', tr: 'gorusler' },
  contact: { en: 'contact', tr: 'iletisim' },
  'privacy-policy': { en: 'privacy-policy', tr: 'gizlilik-politikasi' },
  'cookie-policy': { en: 'cookie-policy', tr: 'cerez-politikasi' },
  'terms-and-conditions': { en: 'terms-and-conditions', tr: 'hizmet-sartlari' },
  // services
  'market-entry': { en: 'market-entry', tr: 'pazara-giris' },
  'strategic-partnerships': { en: 'strategic-partnerships', tr: 'stratejik-ortakliklar' },
  'project-development': { en: 'project-development', tr: 'proje-gelistirme' },
  'international-representation': { en: 'international-representation', tr: 'uluslararasi-temsil' },
};

/** canonical → localised */
export function localizeSegment(seg: string, locale: Locale): string {
  return segments[seg]?.[locale] ?? seg;
}

/** localised → canonical (any locale) */
export function canonicalSegment(seg: string): string {
  for (const [key, map] of Object.entries(segments)) if (Object.values(map).includes(seg)) return key;
  return seg;
}
