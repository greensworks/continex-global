import type { Localized } from '@i18n/utils';

export interface CaseStudy {
  slug: string;
  client: Localized;
  title: Localized;
  status: Localized;
  statusKind: 'ongoing' | 'completed' | 'advanced';
  sector: Localized;
  market: Localized;
  need: Localized;
  role: Localized;
  progress: Localized;
  outcome: Localized;
  image: string; // filename under src/assets/images
}

/** Three anonymised cases supplied by the client. */
export const experience: CaseStudy[] = [
  {
    slug: 'cross-border-real-estate-china',
    client: { en: 'International investor', tr: 'Uluslararası yatırımcı' },
    title: { en: 'Cross-Border Real Estate Investment & Transaction Advisory', tr: 'Sınır Ötesi Gayrimenkul Yatırımı ve İşlem Danışmanlığı' },
    status: { en: 'Advanced stage / near completion', tr: 'İleri aşama / kapanışa yakın' },
    statusKind: 'advanced',
    sector: { en: 'Real estate & investment', tr: 'Gayrimenkul ve yatırım' },
    market: { en: 'China', tr: 'Çin' },
    need: { en: 'Acquire a significant commercial real estate asset in China with a structured, well-coordinated transaction process.', tr: 'Çin’de önemli bir ticari gayrimenkul varlığını yapılandırılmış ve iyi koordine edilmiş bir işlem süreciyle satın almak.' },
    role: { en: 'Investment assessment, transaction structuring, commercial negotiations, coordination with local stakeholders and professional advisers, and management of the cross-border process between investor and seller.', tr: 'Yatırım değerlendirmesi, işlem yapılandırması, ticari müzakereler, yerel paydaşlar ve profesyonel danışmanlarla koordinasyon, yatırımcı ile satıcı arasındaki sınır ötesi sürecin yönetimi.' },
    progress: { en: 'Supported the transaction from initial evaluation and negotiation through the principal commercial terms and transaction documentation, aligning the parties on key commercial and execution issues.', tr: 'İlk değerlendirme ve müzakereden ana ticari şartlara ve işlem dokümantasyonuna kadar süreci yürüttük, tarafları kritik ticari ve icra konularında hizaladık.' },
    outcome: { en: 'Principal commercial terms agreed, transaction documentation at an advanced stage, deal progressing toward closing.', tr: 'Ana ticari şartlarda anlaşıldı, işlem dokümantasyonu ileri aşamada, anlaşma kapanışa doğru ilerliyor.' },
    image: 'glass-facade',
  },
  {
    slug: 'market-entry-strategic-partners-turkiye',
    client: { en: 'Global industrial company', tr: 'Küresel sanayi şirketi' },
    title: { en: 'International Market Entry & Strategic Partner Development', tr: 'Uluslararası Pazara Giriş ve Stratejik Ortak Geliştirme' },
    status: { en: 'Completed', tr: 'Tamamlandı' },
    statusKind: 'completed',
    sector: { en: 'Industrial & manufacturing', tr: 'Sanayi ve üretim' },
    market: { en: 'Türkiye and selected regional markets', tr: 'Türkiye ve seçilmiş bölgesel pazarlar' },
    need: { en: 'Enter Türkiye and selected regional markets, establish a sustainable local business platform and develop strategic commercial relationships.', tr: 'Türkiye ve seçilmiş bölgesel pazarlara girmek, sürdürülebilir bir yerel iş platformu kurmak ve stratejik ticari ilişkiler geliştirmek.' },
    role: { en: 'Market mapping, identification and approach of multiple potential partners, senior-level discussions, evaluation of cooperation models, and support in negotiating and developing selected partnerships.', tr: 'Pazar haritalama, çok sayıda potansiyel ortağın belirlenmesi ve temas, üst düzey görüşmeler, iş birliği modellerinin değerlendirilmesi, seçilen ortaklıkların müzakeresi ve geliştirilmesi.' },
    progress: { en: 'Combined market-entry strategy, partner identification, senior relationship development and commercial negotiation into one workstream.', tr: 'Pazara giriş stratejisi, ortak belirleme, üst düzey ilişki geliştirme ve ticari müzakereyi tek bir iş akışında birleştirdik.' },
    outcome: { en: 'Multiple strategic and commercial partners identified and engaged; cooperation frameworks established with selected parties; concrete commercial projects initiated with several of them.', tr: 'Birden fazla stratejik ve ticari ortak belirlendi ve temas kuruldu; seçilen taraflarla iş birliği çerçeveleri oluşturuldu; birkaçıyla somut ticari projeler başlatıldı.' },
    image: 'metal-grinding-sparks',
  },
  {
    slug: 'oem-market-development-turkiye',
    client: { en: 'Major international manufacturer', tr: 'Büyük uluslararası üretici' },
    title: { en: 'Türkiye OEM Market Development for a Global Manufacturer', tr: 'Küresel Bir Üretici için Türkiye OEM Pazar Geliştirme' },
    status: { en: 'Ongoing · Exclusive mandate', tr: 'Devam ediyor · Münhasır mandat' },
    statusKind: 'ongoing',
    sector: { en: 'Mobility & automotive', tr: 'Mobilite ve otomotiv' },
    market: { en: 'Türkiye', tr: 'Türkiye' },
    need: { en: 'Build a position in the Turkish automotive and industrial OEM market and develop long-term commercial relationships with leading accounts.', tr: 'Türkiye otomotiv ve sanayi OEM pazarında konum edinmek ve önde gelen müşterilerle uzun vadeli ticari ilişkiler geliştirmek.' },
    role: { en: 'Exclusive mandate covering market mapping, prioritisation of target OEM accounts, engagement with procurement, engineering and technical decision-makers, coordination of supplier qualification and approval processes.', tr: 'Pazar haritalama, hedef OEM müşterilerin önceliklendirilmesi, satın alma, mühendislik ve teknik karar vericilerle temas, tedarikçi yeterlilik ve onay süreçlerinin koordinasyonunu kapsayan münhasır mandat.' },
    progress: { en: 'Continex acts as the manufacturer’s strategic interface in Türkiye, connecting its international teams with leading OEMs and coordinating both senior-level engagement and individual opportunities.', tr: 'Continex, üreticinin Türkiye’deki stratejik arayüzü olarak uluslararası ekiplerini önde gelen OEM’lerle buluşturuyor, hem üst düzey temasları hem tekil fırsatları koordine ediyor.' },
    outcome: { en: 'Active discussions and qualification processes with multiple leading automotive and industrial manufacturers; several opportunities progressing through technical and commercial evaluation.', tr: 'Birden fazla önde gelen otomotiv ve sanayi üreticisiyle aktif görüşmeler ve yeterlilik süreçleri; birkaç fırsat teknik ve ticari değerlendirme aşamasında ilerliyor.' },
    image: 'industrial-pipes-red',
  },
];
