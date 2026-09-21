/**
 * Company-level facts. Everything here was supplied by the client brief.
 * Phone / e-mail / domain are still pending from the client.
 */
export const site = {
  name: 'Continex Global',
  legalName: 'Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti.',
  tagline: {
    en: 'Cross-Border Business Development & Strategic Advisory',
    tr: 'Sınır Ötesi İş Geliştirme ve Stratejik Danışmanlık',
  },
  headline: {
    en: 'Turning Cross-Border Opportunities into Business',
    tr: 'Sınır Ötesi Fırsatları İşe Dönüştürüyoruz',
  },
  description: {
    en: 'Continex helps international companies enter new markets, secure strategic customers and partners, and execute complex commercial and investment opportunities across Türkiye, China, Asia and selected emerging markets.',
    tr: 'Continex, uluslararası şirketlerin yeni pazarlara girmesine, stratejik müşteri ve iş ortakları edinmesine ve Türkiye, Çin, Asya ile seçilmiş gelişen pazarlarda karmaşık ticari ve yatırım fırsatlarını hayata geçirmesine yardımcı olur.',
  },
  address: {
    lines: [
      '19 Mayıs Mahallesi, 19 Mayıs Caddesi',
      'Nova Baran Plaza No:4 Kat:13',
      '34360 Şişli / İstanbul / Türkiye',
    ],
    city: 'Istanbul',
    country: 'Türkiye',
  },
  taxOffice: 'Mecidiyeköy',
  taxNo: '2111472161',
  phone: '' as string,        // pending from client
  email: '' as string,        // pending from client
  linkedin: '' as string,     // pending from client
  coverage: {
    en: 'Türkiye, China, Asia and selected emerging markets',
    tr: 'Türkiye, Çin, Asya ve seçilmiş gelişen pazarlar',
  },
} as const;
