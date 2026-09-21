/**
 * Company-level facts. Everything here was supplied by the client brief.
 * Phone / e-mail / domain are still pending from the client.
 */
export const site = {
  name: 'Continex Global',
  legalName: 'Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti.',
  tagline: {
    en: 'Cross-Border Business Development & Strategic Advisory',
    tr: 'Uluslararası İş Geliştirme ve Stratejik Danışmanlık',
  },
  headline: {
    en: 'Turning Cross-Border Opportunities into Business',
    tr: 'Uluslararası fırsatları somut iş sonuçlarına dönüştürüyoruz',
  },
  description: {
    en: 'Continex helps international companies enter new markets, secure strategic customers and partners, and execute complex commercial and investment opportunities across Türkiye, China, Asia and selected emerging markets.',
    tr: 'Continex Global; uluslararası şirketlere yeni pazarlara giriş, stratejik müşteri ve iş ortaklarının kazanılması ile Türkiye, Çin, Asya ve seçili gelişmekte olan pazarlarda karmaşık ticari ve yatırım işlemlerinin hayata geçirilmesi süreçlerinde uçtan uca destek sunmaktadır.',
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
  phone: '+90 212 347 47 56' as string,
  phoneExt: '113',
  email: 'info@continexglobal.com' as string,
  domain: 'https://continexglobal.com',
  linkedin: '' as string,     // pending from client
  /** Locations listed on the previous website. Ankara and Kuala Lumpur still need client confirmation as real offices. */
  locations: [
    { city: 'Istanbul', label: { en: 'Head office', tr: 'Merkez ofis' }, lines: ['19 Mayıs Mah. 19 Mayıs Cad. Nova Baran Plaza No:4 K:13', '34360 Şişli, İstanbul, Türkiye'], phone: '+90 212 347 47 56', confirmed: true },
    { city: 'Ankara', label: { en: 'Ankara', tr: 'Ankara' }, lines: ['J.F. Kennedy Caddesi No:84', 'Çankaya, Ankara, Türkiye'], phone: '+90 312 466 00 10', confirmed: false },
    { city: 'Kuala Lumpur', label: { en: 'Kuala Lumpur', tr: 'Kuala Lumpur' }, lines: ['8072 Pantai Hillpark Ph5', '59200 Kuala Lumpur, Malaysia'], phone: '+60 3 4265 7867', confirmed: false },
  ],
  coverage: {
    en: 'Türkiye, China, Asia and selected emerging markets',
    tr: 'Türkiye, Çin, Asya ve seçili gelişmekte olan pazarlar',
  },
} as const;
