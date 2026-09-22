import { defaultLocale, locales, type Locale } from './config';
import { localizeSegment, canonicalSegment } from './routes';

/** Resolve the locale from a URL path (/tr/... → 'tr', else default). */
export function getLocale(url: URL | string): Locale {
  const path = typeof url === 'string' ? url : url.pathname;
  const seg = path.split('/')[1];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/**
 * Turn a canonical, locale-agnostic path (`/what-we-do#market-entry`) into
 * the URL for a locale (`/tr/ne-yapiyoruz#market-entry`). A hash is kept.
 */
export function localizePath(path: string, locale: Locale): string {
  const [clean, hash] = (path.startsWith('/') ? path : `/${path}`).split('#');
  const parts = clean.split('/').filter(Boolean).map((s) => localizeSegment(s, locale));
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const out = parts.length ? `${prefix}/${parts.join('/')}` : prefix || '/';
  return hash ? `${out}#${hash}` : out;
}

/** Strip the locale prefix and de-localise segments. `/tr/hakkimizda` → `/about`. */
export function stripLocale(path: string): string {
  const parts = path.split('/').filter(Boolean);
  if ((locales as readonly string[]).includes(parts[0])) parts.shift();
  const canon = parts.map(canonicalSegment);
  return canon.length ? `/${canon.join('/')}` : '/';
}

/** Path of the same page in another locale, for the language switcher. */
export function switchLocalePath(currentPath: string, target: Locale): string {
  return localizePath(stripLocale(currentPath), target);
}

/** Pick a localized string from a { en, tr } record. */
export type Localized<T = string> = Record<Locale, T>;
export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value[defaultLocale];
}
