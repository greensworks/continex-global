import type { Localized } from '@i18n/utils';

export type Coverage = 'office' | 'team' | 'partner' | 'coverage';

export const coverageLabels: Record<Coverage, Localized> = {
  office: { en: 'Office', tr: 'Ofis' },
  team: { en: 'Local team', tr: 'Yerel ekip' },
  partner: { en: 'Strategic partner', tr: 'Stratejik ortak' },
  coverage: { en: 'Market coverage', tr: 'Pazar kapsamı' },
};

export interface Market {
  name: Localized;
  coverage: Coverage;
  text: Localized;
}

/**
 * Only Istanbul is a real office. Everything else is relationship-based
 * coverage, as the client asked us to show honestly.
 */
export const markets: Market[] = [
  { name: { en: 'Türkiye', tr: 'Türkiye' }, coverage: 'office', text: { en: 'Headquartered in Istanbul. Home market for OEM, industrial and energy mandates.', tr: 'Merkez İstanbul. OEM, sanayi ve enerji mandatlarında ana pazar.' } },
  { name: { en: 'China', tr: 'Çin' }, coverage: 'partner', text: { en: 'Direct working relationships with manufacturers, EPC groups, investors and state-linked enterprises.', tr: 'Üreticiler, EPC grupları, yatırımcılar ve kamu bağlantılı kuruluşlarla doğrudan çalışma ilişkileri.' } },
  { name: { en: 'Europe', tr: 'Avrupa' }, coverage: 'coverage', text: { en: 'Market entry, partner search and OEM development for European technology and industrial companies.', tr: 'Avrupalı teknoloji ve sanayi şirketleri için pazara giriş, ortak arama ve OEM geliştirme.' } },
  { name: { en: 'Middle East', tr: 'Orta Doğu' }, coverage: 'coverage', text: { en: 'Project development and investor relationships in energy and infrastructure.', tr: 'Enerji ve altyapıda proje geliştirme ve yatırımcı ilişkileri.' } },
  { name: { en: 'Central Asia', tr: 'Orta Asya' }, coverage: 'coverage', text: { en: 'Cross-border trade and project opportunities linked to Türkiye and China.', tr: 'Türkiye ve Çin ile bağlantılı sınır ötesi ticaret ve proje fırsatları.' } },
  { name: { en: 'Southeast Asia', tr: 'Güneydoğu Asya' }, coverage: 'coverage', text: { en: 'Selected sourcing, technology and investment opportunities.', tr: 'Seçilmiş tedarik, teknoloji ve yatırım fırsatları.' } },
];
