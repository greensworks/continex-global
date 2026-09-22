import type { Localized } from '@i18n/utils';

export interface Service {
  slug: string;
  title: Localized;
  summary: Localized;
  points: Localized<string[]>;
}

export const services: Service[] = [
  {
    slug: 'market-entry',
    title: { en: 'Market Entry & Commercial Expansion', tr: 'Pazara Giriş ve Ticari Genişleme' },
    summary: {
      en: 'We help companies enter a new market and build commercial traction: from mapping the opportunity to reaching the decision-makers who matter.',
      tr: 'Yeni bir pazara giriş yapan şirketlere, fırsatın analizinden karar alıcılara erişime kadar uzanan süreçte ticari ivme kazandırıyoruz.',
    },
    points: {
      en: ['Market and sector research', 'Target customer identification', 'Access to decision-makers', 'Distributor and partner search', 'Local sales and business development', 'Commercial follow-up', 'Managing the market-entry process'],
      tr: ['Pazar ve sektör analizi', 'Hedef müşteri portföyünün belirlenmesi', 'Karar alıcılara erişim', 'Distribütör ve iş ortağı tespiti', 'Yerel satış ve iş geliştirme desteği', 'Ticari görüşmelerin takibi', 'Pazara giriş sürecinin yönetimi'],
    },
  },
  {
    slug: 'strategic-partnerships',
    title: { en: 'Strategic Partnerships & Joint Ventures', tr: 'Stratejik Ortaklıklar ve Ortak Girişimler' },
    summary: {
      en: 'We identify the right strategic partners and shape the cooperation model, then manage the negotiation through to agreement.',
      tr: 'Doğru stratejik ortakları belirliyor, iş birliği modelini tasarlıyor ve müzakere sürecini anlaşmanın imzalanmasına kadar yönetiyoruz.',
    },
    points: {
      en: ['Strategic partner identification', 'Joint venture development', 'Manufacturing and technology partnerships', 'Distribution and representation', 'Licensing', 'Long-term supply cooperation', 'Managing partnership negotiations'],
      tr: ['Stratejik ortak tespiti', 'Ortak girişim (JV) yapılandırması', 'Üretim ve teknoloji ortaklıkları', 'Distribütörlük ve temsilcilik modelleri', 'Lisans anlaşmaları', 'Uzun vadeli tedarik iş birlikleri', 'Ortaklık müzakerelerinin yönetimi'],
    },
  },
  {
    slug: 'project-development',
    title: { en: 'Project Development & Strategic Transactions', tr: 'Proje Geliştirme ve Stratejik İşlemler' },
    summary: {
      en: 'In energy, infrastructure and industrial projects we bring the right parties together: owners, EPC contractors, technology providers, investors and financiers.',
      tr: 'Enerji, altyapı ve sanayi projelerinde proje sahipleri, EPC yüklenicileri, teknoloji sağlayıcıları, yatırımcılar ve finansman kuruluşlarını doğru yapı altında bir araya getiriyoruz.',
    },
    points: {
      en: ['Project opportunity development', 'EPC contractor identification', 'Technology partner search', 'Strategic investor search', 'Coordination of financing parties', 'Consortium formation', 'Managing the process between owners, investors and contractors', 'Cross-border acquisition and partnership opportunities'],
      tr: ['Proje fırsatlarının geliştirilmesi', 'EPC yüklenicisi tespiti', 'Teknoloji ortağı tespiti', 'Stratejik yatırımcı araştırması', 'Finansman taraflarının koordinasyonu', 'Konsorsiyum yapılandırması', 'Proje sahibi, yatırımcı ve yüklenici arasındaki sürecin yönetimi', 'Uluslararası satın alma ve ortaklık fırsatlarının geliştirilmesi'],
    },
  },
  {
    slug: 'international-representation',
    title: { en: 'International Representation & Deal Execution', tr: 'Uluslararası Temsil ve İşlem Yürütme' },
    summary: {
      en: 'We act as a company’s local business development arm in the target market, from senior-level access to keeping the deal moving until it closes.',
      tr: 'Hedef pazarda müşterimizin yerel iş geliştirme birimi olarak görev alıyor; üst düzey erişimden anlaşmanın kapanışına kadar süreci aktif biçimde yürütüyoruz.',
    },
    points: {
      en: ['Representing the company in the target market', 'Access to major customers', 'Developing senior-level contacts', 'Running local negotiations', 'Following up commercial opportunities', 'Coordinating proposals, meetings and negotiations', 'Keeping the process active until the deal is done'],
      tr: ['Hedef pazarda kurumsal temsil', 'Kilit müşterilere erişim', 'Üst düzey temasların geliştirilmesi', 'Yerel görüşmelerin yürütülmesi', 'Ticari fırsatların takibi', 'Teklif, toplantı ve müzakere süreçlerinin koordinasyonu', 'İşlem sonuçlanana kadar sürecin aktif yönetimi'],
    },
  },
];

/** Photo per service (filename under src/assets/images). */
export const serviceImages: Record<string, string> = {
  'market-entry': 'service-market-entry',
  'strategic-partnerships': 'service-partnerships',
  'project-development': 'service-project-development',
  'international-representation': 'service-representation',
};
