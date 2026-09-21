import type { Locale } from './config';

/** Small UI strings. Page content lives in src/data and src/content. */
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.whatWeDo': 'What We Do',
    'nav.industries': 'Industries',
    'nav.markets': 'Markets',
    'nav.experience': 'Selected Experience',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'cta.discuss': 'Discuss an Opportunity',
    'cta.explore': 'Explore Our Capabilities',
    'cta.readMore': 'Read more',
    'cta.viewAll': 'View all',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'a11y.switchLang': 'Switch language',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.legal': 'Legal',
    'partners.eyebrow': 'Selected relationships',
    'partners.title': 'Companies we have worked with and alongside.',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.whatWeDo': 'Ne Yapıyoruz',
    'nav.industries': 'Sektörler',
    'nav.markets': 'Pazarlar',
    'nav.experience': 'Seçilmiş Deneyim',
    'nav.about': 'Hakkımızda',
    'nav.insights': 'Görüşler',
    'nav.contact': 'İletişim',
    'cta.discuss': 'Bir Fırsatı Görüşelim',
    'cta.explore': 'Yetkinliklerimizi Keşfedin',
    'cta.readMore': 'Devamını oku',
    'cta.viewAll': 'Tümünü gör',
    'a11y.openMenu': 'Menüyü aç',
    'a11y.closeMenu': 'Menüyü kapat',
    'a11y.switchLang': 'Dili değiştir',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.cookies': 'Çerez Politikası',
    'footer.legal': 'Yasal',
    'partners.eyebrow': 'Seçilmiş ilişkiler',
    'partners.title': 'Birlikte ve yan yana çalıştığımız şirketler.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function tr(key: UiKey): string {
    return ui[locale][key] ?? ui.en[key];
  };
}
