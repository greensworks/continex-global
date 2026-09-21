import type { Localized } from '@i18n/utils';

export interface Industry {
  slug: string;
  title: Localized;
  /** filename under src/assets/images (without extension) */
  image: string;
}

export const industries: Industry[] = [
  { slug: 'energy-power', title: { en: 'Energy & Power', tr: 'Enerji ve Güç' }, image: 'high-voltage-towers' },
  { slug: 'infrastructure-construction', title: { en: 'Infrastructure & Construction', tr: 'Altyapı ve İnşaat' }, image: 'glass-facade' },
  { slug: 'industrial-manufacturing', title: { en: 'Industrial & Manufacturing', tr: 'Sanayi ve Üretim' }, image: 'metal-grinding-sparks' },
  { slug: 'mobility-automotive', title: { en: 'Mobility & Automotive', tr: 'Mobilite ve Otomotiv' }, image: 'industrial-pipes-red' },
  { slug: 'trade-supply-chains', title: { en: 'International Trade & Supply Chains', tr: 'Uluslararası Ticaret ve Tedarik Zincirleri' }, image: 'grain-silos-dusk' },
];
