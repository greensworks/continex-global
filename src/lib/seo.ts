import { site } from '@data/site';
import type { Locale } from '@i18n/config';
import { localizePath } from '@i18n/utils';

/** Search snippets are separate from the visible editorial headings. */
const metadata: Record<string, Record<Locale, [string, string]>> = {
  '/': {
    en: ['Cross-Border Business Development', 'Enter new markets, build strategic partnerships and execute international opportunities with Continex Global across Türkiye, China and regional markets.'],
    tr: ['Uluslararası İş Geliştirme ve Danışmanlık', 'Continex Global ile Türkiye, Çin ve bölgesel pazarlarda yeni pazarlara giriş, stratejik ortaklık geliştirme ve uluslararası ticari işlemlerin yürütülmesi.'],
  },
  '/about': {
    en: ['About Us | Cross-Border Expertise', 'Meet Continex Global: an Istanbul-based senior team connecting international strategy, decision-maker access and hands-on commercial execution.'],
    tr: ['Hakkımızda | Uluslararası İş Geliştirme', 'Continex Global’i tanıyın: İstanbul merkezli deneyimli ekibimiz, uluslararası stratejiyi karar vericilere erişim ve sahada ticari uygulamayla birleştirir.'],
  },
  '/what-we-do': {
    en: ['Services | Market Entry & Partnerships', 'Market entry, strategic partnerships, project development and international representation: explore how Continex Global turns opportunities into business.'],
    tr: ['Hizmetler | Pazara Giriş ve İş Ortaklıkları', 'Pazara giriş, stratejik ortaklıklar, proje geliştirme ve uluslararası temsil: Continex Global’in fırsatları somut ticari sonuçlara dönüştüren hizmetleri.'],
  },
  '/industries': {
    en: ['Industries | Energy, Infrastructure & Trade', 'Business development across energy, infrastructure, manufacturing, mobility and international trade. Explore Continex Global’s five core sectors.'],
    tr: ['Sektörler | Enerji, Sanayi ve Ticaret', 'Enerji, altyapı, sanayi, mobilite ve uluslararası ticarette iş geliştirme. Continex Global’in uzmanlaştığı beş temel faaliyet alanını keşfedin.'],
  },
  '/markets': {
    en: ['Markets | Türkiye, China & Beyond', 'Based in Istanbul, Continex Global connects companies with opportunities in Türkiye, China, Europe, the Middle East and selected Asian markets.'],
    tr: ['Pazarlar | Türkiye, Çin ve Bölgesel Kapsam', 'İstanbul merkezli Continex Global; Türkiye, Çin, Avrupa, Orta Doğu ve seçili Asya pazarlarında şirketleri uluslararası iş fırsatlarıyla buluşturur.'],
  },
  '/selected-experience': {
    en: ['Selected Experience | International Mandates', 'Explore selected Continex Global mandates in market entry, strategic partnerships, OEM development and cross-border investment, with their current status.'],
    tr: ['Seçilmiş Deneyim | Uluslararası Çalışmalar', 'Continex Global’in pazara giriş, stratejik ortaklık, OEM geliştirme ve uluslararası yatırım alanlarındaki seçilmiş çalışmalarını ve güncel durumlarını inceleyin.'],
  },
  '/insights': {
    en: ['Insights | International Business & Strategy', 'Perspectives on market entry, Türkiye–China business, partnerships, energy projects and strategic resilience from Continex Global.'],
    tr: ['Görüşler | Uluslararası İş ve Strateji', 'Continex Global’den pazara giriş, Türkiye–Çin ticari ilişkileri, iş ortaklıkları, enerji projeleri ve stratejik dayanıklılık üzerine görüş ve analizler.'],
  },
  '/contact': {
    en: ['Contact | Discuss a Business Opportunity', 'Contact Continex Global in Istanbul to discuss market entry, a strategic partnership, project development or an international commercial opportunity.'],
    tr: ['İletişim | İş Fırsatınızı Görüşelim', 'Pazara giriş, stratejik ortaklık, proje geliştirme veya uluslararası ticari fırsatınızı görüşmek için İstanbul’daki Continex Global ekibine ulaşın.'],
  },
  '/privacy-policy': {
    en: ['Privacy Policy', 'Learn how Continex Global collects, uses and protects personal data, and how to contact us about your privacy rights.'],
    tr: ['Gizlilik Politikası', 'Continex Global’in kişisel verileri nasıl topladığını, kullandığını ve koruduğunu, gizlilik haklarınız için bizimle nasıl iletişime geçebileceğinizi öğrenin.'],
  },
  '/cookie-policy': {
    en: ['Cookie Policy', 'Learn which cookies Continex Global uses, what they do and how to manage your cookie preferences on this website.'],
    tr: ['Çerez Politikası', 'Continex Global web sitesinde kullanılan çerezleri, amaçlarını ve çerez tercihlerinizi nasıl yönetebileceğinizi öğrenin.'],
  },
  '/terms-and-conditions': {
    en: ['Terms and Conditions', 'Read the terms governing use of the Continex Global website, including intellectual property, liability and contact information.'],
    tr: ['Hizmet Şartları', 'Continex Global web sitesinin kullanımı, fikri mülkiyet, sorumluluk ve iletişim bilgileriyle ilgili şartları inceleyin.'],
  },
};

const caseTitles: Record<string, Record<Locale, string>> = {
  '/selected-experience/cross-border-real-estate-china': { en: 'China Real Estate Investment Advisory', tr: 'Çin Gayrimenkul Yatırımı Danışmanlığı' },
  '/selected-experience/market-entry-strategic-partners-turkiye': { en: 'Türkiye Market Entry & Strategic Partners', tr: 'Türkiye’de Pazara Giriş ve Stratejik Ortaklar' },
  '/selected-experience/oem-market-development-turkiye': { en: 'Türkiye OEM Market Development', tr: 'Türkiye OEM Pazarı Geliştirme' },
};

export function seoMetadata(path: string, locale: Locale, title: string, description: string) {
  const entry = metadata[path]?.[locale];
  return { title: entry?.[0] ?? caseTitles[path]?.[locale] ?? title, description: entry?.[1] ?? description };
}

export function pageGraph(origin: URL, canonical: string, path: string, locale: Locale, title: string, description: string, image: string, logo: string) {
  const url = (value: string) => new URL(value, origin).href;
  const organization = url('/#organization');
  const website = url('/#website');
  const pageType = path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : ['/insights', '/selected-experience', '/industries', '/markets', '/what-we-do'].includes(path) ? 'CollectionPage' : 'WebPage';
  const graph: Record<string, unknown>[] = [
    { '@type': 'Organization', '@id': organization, name: site.name, legalName: site.legalName, logo: { '@type': 'ImageObject', url: logo }, url: url('/'), email: site.email, telephone: site.phone,
      address: { '@type': 'PostalAddress', streetAddress: site.address.lines.slice(0, 2).join(', '), addressLocality: 'Şişli', addressRegion: 'İstanbul', postalCode: '34360', addressCountry: 'TR' },
      ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
    },
    { '@type': 'WebSite', '@id': website, url: url('/'), name: site.name, publisher: { '@id': organization }, inLanguage: ['en', 'tr'] },
    { '@type': pageType, '@id': canonical + '#webpage', url: canonical, name: title, description, inLanguage: locale, isPartOf: { '@id': website }, about: { '@id': organization }, primaryImageOfPage: { '@type': 'ImageObject', url: image } },
  ];
  if (path !== '/') {
    const parts = path.split('/').filter(Boolean);
    const crumbs = [{ '@type': 'ListItem', position: 1, name: locale === 'tr' ? 'Ana Sayfa' : 'Home', item: url(localizePath('/', locale)) }];
    if (parts.length > 1) {
      const parent = '/' + parts[0];
      crumbs.push({ '@type': 'ListItem', position: 2, name: metadata[parent]?.[locale][0].split(' | ')[0] ?? parts[0], item: url(localizePath(parent, locale)) });
    }
    crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: title, item: canonical });
    const breadcrumb = canonical + '#breadcrumb';
    graph[2].breadcrumb = { '@id': breadcrumb };
    graph.push({ '@type': 'BreadcrumbList', '@id': breadcrumb, itemListElement: crumbs });
  }
  return graph;
}
