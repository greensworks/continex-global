import type { CollectionEntry } from 'astro:content';

/** Keep the editorial lead and same-day ordering identical in both languages. */
export function compareInsights(a: CollectionEntry<'insights'>, b: CollectionEntry<'insights'>): number {
  const canonicalSlug = (post: CollectionEntry<'insights'>) => post.data.translationOf ?? post.id.split('/').slice(1).join('/');
  return Number(b.data.featured) - Number(a.data.featured)
    || b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    || canonicalSlug(a).localeCompare(canonicalSlug(b), 'en');
}

/** Topic labels, shared by the cards, the feed and the article header. */
const TOPIC_LABELS: Record<string, [en: string, tr: string]> = {
  'market-entry': ['Market entry', 'Pazara giriş'],
  'china-turkiye': ['Türkiye–China', 'Türkiye–Çin'],
  'energy-infrastructure': ['Energy & infrastructure', 'Enerji ve altyapı'],
  'industrial-automotive': ['Industrial & automotive', 'Sanayi ve otomotiv'],
  'joint-ventures': ['Joint ventures', 'Ortak girişimler'],
  'project-finance': ['Project finance', 'Proje finansmanı'],
  'risk-crisis': ['Risk & crisis', 'Risk ve kriz'],
};

export function topicLabel(topic: string, locale: string): string {
  const pair = TOPIC_LABELS[topic];
  return pair ? pair[locale === 'tr' ? 1 : 0] : topic;
}
