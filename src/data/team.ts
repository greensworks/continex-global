import type { Localized } from '@i18n/utils';

export interface Person {
  slug: string;
  name: string;
  role: Localized;
  short: Localized;
  bio: Localized<string[]>;
  sectors: Localized;
  countries: Localized;
  linkedin: string; // pending from client
  /** filename under src/assets/images; portraits pending from client */
  image: string | null;
}

export const team: Person[] = [
  {
    slug: 'bulent-ulusoy',
    name: 'Bülent Ulusoy',
    role: { en: 'Founder & CEO', tr: 'Kurucu ve CEO' },
    short: {
      en: 'Economist. Leads Continex’s international business development, strategic partnership and cross-border investment activities.',
      tr: 'Ekonomist. Continex’in uluslararası iş geliştirme, stratejik ortaklık ve sınır ötesi yatırım faaliyetlerini yönetiyor.',
    },
    bio: {
      en: [
        'Bülent Ulusoy is an economist and the Founder & CEO of Continex Global, where he leads the firm’s international business development, strategic partnership and cross-border investment activities.',
        'With extensive experience across Türkiye, China, Europe and the Middle East, he has worked with companies, investors and decision-makers on the development and execution of complex international business opportunities. His work covers the full process from identifying the right partners and structuring commercial relationships to high-level negotiations and transaction execution.',
        'His approach combines an economist’s commercial perspective with senior-level relationship management and a practical understanding of how international transactions are structured, negotiated and brought to execution.',
      ],
      tr: [
        'Bülent Ulusoy, ekonomist ve Continex Global’in Kurucusu ve CEO’sudur; şirketin uluslararası iş geliştirme, stratejik ortaklık ve sınır ötesi yatırım faaliyetlerini yönetmektedir.',
        'Türkiye, Çin, Avrupa ve Orta Doğu’daki geniş deneyimiyle şirketler, yatırımcılar ve karar vericilerle karmaşık uluslararası iş fırsatlarının geliştirilmesi ve hayata geçirilmesi üzerine çalışmıştır. Çalışması doğru ortakların belirlenmesinden ticari ilişkilerin yapılandırılmasına, üst düzey müzakerelerden işlem icrasına kadar tüm süreci kapsar.',
        'Yaklaşımı, bir ekonomistin ticari bakışını üst düzey ilişki yönetimi ve uluslararası işlemlerin nasıl yapılandırılıp müzakere edildiğine dair pratik bir anlayışla birleştirir.',
      ],
    },
    sectors: { en: 'Energy, infrastructure, automotive, industrial manufacturing, logistics, real estate, international trade and investment', tr: 'Enerji, altyapı, otomotiv, sanayi üretimi, lojistik, gayrimenkul, uluslararası ticaret ve yatırım' },
    countries: { en: 'Türkiye, China, Europe, Middle East', tr: 'Türkiye, Çin, Avrupa, Orta Doğu' },
    linkedin: '',
    image: null,
  },
  {
    slug: 'cigdem-balcioglu',
    name: 'Çiğdem Balcıoğlu',
    role: { en: 'Operations Director', tr: 'Operasyon Direktörü' },
    short: {
      en: 'Industrial engineer. Responsible for the coordination and execution of Continex’s international projects and business development activities.',
      tr: 'Endüstri mühendisi. Continex’in uluslararası projelerinin ve iş geliştirme faaliyetlerinin koordinasyonundan ve icrasından sorumlu.',
    },
    bio: {
      en: [
        'Çiğdem Balcıoğlu is an industrial engineer and the Operations Director of Continex Global, responsible for the coordination and execution of the firm’s international projects and business development activities.',
        'Her engineering background brings a structured and process-driven approach to the management of complex assignments involving multiple stakeholders, companies and countries. She plays a central role in coordinating the operational interface between clients, international partners and Continex teams, ensuring continuity from initial engagement through implementation.',
        'Working closely with Continex’s senior management and international partners, she helps convert strategic objectives into clear, manageable and executable workstreams while maintaining operational discipline throughout the project lifecycle.',
      ],
      tr: [
        'Çiğdem Balcıoğlu, endüstri mühendisi ve Continex Global’in Operasyon Direktörüdür; şirketin uluslararası projelerinin ve iş geliştirme faaliyetlerinin koordinasyonundan ve icrasından sorumludur.',
        'Mühendislik altyapısı, birden fazla paydaş, şirket ve ülkeyi içeren karmaşık işlerin yönetimine yapılandırılmış ve süreç odaklı bir yaklaşım kazandırır. Müşteriler, uluslararası ortaklar ve Continex ekipleri arasındaki operasyonel arayüzün koordinasyonunda merkezi bir rol üstlenir.',
        'Continex üst yönetimi ve uluslararası ortaklarla yakın çalışarak stratejik hedefleri net, yönetilebilir ve uygulanabilir iş akışlarına dönüştürür ve proje boyunca operasyonel disiplini korur.',
      ],
    },
    sectors: { en: 'Project coordination, stakeholder communication, business process management, operational planning', tr: 'Proje koordinasyonu, paydaş iletişimi, iş süreci yönetimi, operasyonel planlama' },
    countries: { en: 'Türkiye, China, Europe', tr: 'Türkiye, Çin, Avrupa' },
    linkedin: '',
    image: null,
  },
];
