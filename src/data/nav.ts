import type { UiKey } from '@i18n/ui';

export interface NavItem {
  key: UiKey;
  href: string; // locale-agnostic; run through localizePath()
}

export const primaryNav: NavItem[] = [
  { key: 'nav.whatWeDo', href: '/what-we-do' },
  { key: 'nav.industries', href: '/industries' },
  { key: 'nav.markets', href: '/markets' },
  { key: 'nav.experience', href: '/selected-experience' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.insights', href: '/insights' },
  { key: 'nav.contact', href: '/contact' },
];

export const ctaHref = '/contact';
