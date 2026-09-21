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
    title: { en: 'Market Entry & Commercial Expansion', tr: 'Pazara Giriş ve Ticari Büyüme' },
    summary: {
      en: 'We help companies enter a new market and build commercial traction: from mapping the opportunity to reaching the decision-makers who matter.',
      tr: 'Yeni bir pazara giren şirketlere fırsatın haritalanmasından karar vericilere ulaşmaya kadar ticari ivme kazandırıyoruz.',
    },
    points: {
      en: ['Market and sector research', 'Target customer identification', 'Access to decision-makers', 'Distributor and partner search', 'Local sales and business development', 'Commercial follow-up', 'Managing the market-entry process'],
      tr: ['Pazar ve sektör araştırması', 'Hedef müşteri belirleme', 'Karar vericilere ulaşma', 'Distribütör ve iş ortağı bulma', 'Yerel satış ve iş geliştirme', 'Ticari görüşmeleri takip etme', 'Pazara giriş sürecini yönetme'],
    },
  },
  {
    slug: 'strategic-partnerships',
    title: { en: 'Strategic Partnerships & Joint Ventures', tr: 'Stratejik Ortaklıklar ve Ortak Girişimler' },
    summary: {
      en: 'We identify the right strategic partners and shape the cooperation model, then manage the negotiation through to agreement.',
      tr: 'Doğru stratejik ortakları buluyor, iş birliği modelini şekillendiriyor ve anlaşmaya kadar müzakereyi yönetiyoruz.',
    },
    points: {
      en: ['Strategic partner identification', 'Joint venture development', 'Manufacturing and technology partnerships', 'Distribution and representation', 'Licensing', 'Long-term supply cooperation', 'Managing partnership negotiations'],
      tr: ['Stratejik ortak bulma', 'Joint venture geliştirme', 'Üretim ve teknoloji ortaklıkları', 'Distribütörlük ve temsilcilik', 'Lisanslama', 'Uzun vadeli tedarik iş birlikleri', 'Ortaklık görüşmelerinin yönetilmesi'],
    },
  },
  {
    slug: 'project-development',
    title: { en: 'Project Development & Strategic Transactions', tr: 'Proje Geliştirme ve Stratejik İşlemler' },
    summary: {
      en: 'In energy, infrastructure and industrial projects we bring the right parties together: owners, EPC contractors, technology providers, investors and financiers.',
      tr: 'Enerji, altyapı ve sanayi projelerinde doğru tarafları bir araya getiriyoruz: proje sahipleri, EPC yükleniciler, teknoloji sağlayıcılar, yatırımcılar ve finansörler.',
    },
    points: {
      en: ['Project opportunity development', 'EPC contractor identification', 'Technology partner search', 'Strategic investor search', 'Coordination of financing parties', 'Consortium formation', 'Managing the process between owners, investors and contractors', 'Cross-border acquisition and partnership opportunities'],
      tr: ['Proje fırsatı geliştirme', 'EPC firması bulma', 'Teknoloji ortağı bulma', 'Stratejik yatırımcı arama', 'Finansman taraflarının koordinasyonu', 'Konsorsiyum oluşturma', 'Proje sahipleri, yatırımcılar ve yükleniciler arasındaki süreci yönetme', 'Uluslararası satın alma ve ortaklık fırsatları geliştirme'],
    },
  },
  {
    slug: 'international-representation',
    title: { en: 'International Representation & Deal Execution', tr: 'Uluslararası Temsil ve İşlem Yürütme' },
    summary: {
      en: 'We act as a company’s local business development arm in the target market, from senior-level access to keeping the deal moving until it closes.',
      tr: 'Hedef pazarda şirketin yerel iş geliştirme kolu gibi çalışıyor, üst düzey erişimden anlaşma kapanana kadar süreci canlı tutuyoruz.',
    },
    points: {
      en: ['Representing the company in the target market', 'Access to major customers', 'Developing senior-level contacts', 'Running local negotiations', 'Following up commercial opportunities', 'Coordinating proposals, meetings and negotiations', 'Keeping the process active until the deal is done'],
      tr: ['Şirketi hedef pazarda temsil etme', 'Büyük müşterilere ulaşma', 'Üst düzey temasları geliştirme', 'Yerel görüşmeleri yürütme', 'Ticari fırsatları takip etme', 'Teklif, toplantı ve müzakere sürecini koordine etme', 'İş sonuçlanana kadar süreci aktif tutma'],
    },
  },
];

/** Photo per service (filename under src/assets/images). */
export const serviceImages: Record<string, string> = {
  'market-entry': 'glass-facade',
  'strategic-partnerships': 'meeting-table',
  'project-development': 'refinery-dusk',
  'international-representation': 'storage-tanks-night',
};
