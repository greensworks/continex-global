import type { Locale } from '@i18n/config';
import { localizePath, t } from '@i18n/utils';
import { services, serviceImages } from '@data/services';
import { industries } from '@data/industries';
import { industryDetails } from '@data/pages';
import { experience } from '@data/experience';
import { img } from './images';
import type { MosaicTile } from '@components/sections/rb/Mosaic.astro';

const L = (locale: Locale, en: string, tr: string) => (locale === 'tr' ? tr : en);

/** Four services: first and last as split tiles, middle two as halves. */
export function serviceTiles(locale: Locale): MosaicTile[] {
  const label = L(locale, 'Service', 'Hizmet');
  return services.map((s, i) => ({
    label,
    title: t(s.title, locale),
    text: t(s.summary, locale),
    href: localizePath(`/what-we-do/${s.slug}`, locale),
    image: img(serviceImages[s.slug]),
    span: i === 0 || i === 3 ? 'full' : 'half',
    layout: i === 0 || i === 3 ? 'split' : 'stacked',
  }));
}

/** Five industries: three thirds, then two halves. */
export function industryTiles(locale: Locale, detailed = false): MosaicTile[] {
  const label = L(locale, 'Industry', 'Sektör');
  return industries.map((ind, i) => ({
    label,
    title: t(ind.title, locale),
    text: detailed ? t(industryDetails[ind.slug], locale) : undefined,
    href: localizePath(`/industries#${ind.slug}`, locale),
    image: img(ind.image),
    span: i < 3 ? 'third' : 'half',
  }));
}

/** Three mandates as thirds, labelled with their status. */
export function experienceTiles(locale: Locale): MosaicTile[] {
  return experience.map((c) => ({
    label: t(c.status, locale),
    title: t(c.title, locale),
    text: t(c.outcome, locale),
    href: localizePath(`/selected-experience/${c.slug}`, locale),
    image: img(c.image),
    span: 'third',
  }));
}
