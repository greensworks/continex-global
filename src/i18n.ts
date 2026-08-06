export const languages = {
  en: 'English',
  tr: 'Turkish',
  zh: 'Chinese',
} as const;

export const defaultLang = 'en';
export const supportedLangs = Object.keys(languages) as Array<keyof typeof languages>;

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return supportedLangs.includes(lang as Lang) ? (lang as Lang) : defaultLang;
}

export function localizePath(pathname: string, lang: Lang): string {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (lang === defaultLang) return normalizedPath;
  if (normalizedPath === '/' || normalizedPath === '/index.html') return `/${lang}.html`;
  return `/${lang}${normalizedPath === '/' ? '/' : normalizedPath}`;
}
