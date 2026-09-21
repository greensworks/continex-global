import { defaultLocale, locales, type Locale } from './config';

/** Resolve the locale from a URL path (/tr/... → 'tr', else default). */
export function getLocale(url: URL | string): Locale {
  const path = typeof url === 'string' ? url : url.pathname;
  const seg = path.split('/')[1];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/** Prefix a site-relative path for the given locale. `/about` → `/tr/about`. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** Strip a locale prefix from a path. `/tr/about` → `/about`. */
export function stripLocale(path: string): string {
  const seg = path.split('/')[1];
  if ((locales as readonly string[]).includes(seg)) {
    const rest = path.slice(seg.length + 1);
    return rest === '' ? '/' : rest;
  }
  return path || '/';
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
