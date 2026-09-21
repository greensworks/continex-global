import type { Localized } from '@i18n/utils';

/** Homepage copy from the client brief (second, definitive brief). */

export const whatWeDo = {
  eyebrow: { en: 'What we do', tr: 'Hizmetlerimiz' },
  title: { en: 'We build and execute cross-border business opportunities.', tr: 'Uluslararası iş fırsatlarını yapılandırıyor ve hayata geçiriyoruz.' },
} satisfies Record<string, Localized>;

export const whyContinex = {
  eyebrow: { en: 'Why Continex', tr: 'Neden Continex' },
  title: { en: 'More than advice. Active commercial execution.', tr: 'Danışmanlığın ötesinde: sahada ticari sonuç.' },
  lead: {
    en: 'We do not stop at reports. We work in the market, open the right doors and keep the process moving until it produces a result.',
    tr: 'Çalışmalarımız rapor teslimiyle sona ermez. Hedef pazarda doğrudan görev alır, doğru muhataplara erişim sağlar ve süreci ticari bir sonuca ulaşana kadar yönetiriz.',
  },
  items: [
    { title: { en: 'Executive Access', tr: 'Üst Düzey Erişim' }, text: { en: 'Direct working relationships with owners, CEOs and decision-makers in Türkiye, China and the wider region.', tr: 'Türkiye, Çin ve çevre bölgelerde şirket sahipleri, üst düzey yöneticiler ve karar alıcılarla doğrudan çalışma ilişkileri.' } },
    { title: { en: 'Local Intelligence', tr: 'Yerel Bilgi' }, text: { en: 'On-the-ground knowledge of how deals are structured, negotiated and closed in each market.', tr: 'Her pazarda işlemlerin nasıl yapılandırıldığı, müzakere edildiği ve sonuçlandırıldığına ilişkin yerinde edinilmiş bilgi birikimi.' } },
    { title: { en: 'Cross-Border Coordination', tr: 'Sınır Ötesi Koordinasyon' }, text: { en: 'One interface between international teams, local partners, advisers and authorities.', tr: 'Uluslararası ekipler, yerel iş ortakları, danışmanlar ve resmî kurumlar arasında tek ve sorumlu bir koordinasyon noktası.' } },
    { title: { en: 'Outcome Orientation', tr: 'Sonuç Odağı' }, text: { en: 'Every engagement is defined by a commercial result: a signed partner, a qualified account, a closed transaction.', tr: 'Her görev, ölçülebilir bir ticari sonuçla tanımlanır: imzalanmış bir ortaklık, yeterliliği tamamlanmış bir müşteri, kapanışı gerçekleşmiş bir işlem.' } },
  ],
};

export const howWeWork = {
  eyebrow: { en: 'How we work', tr: 'Nasıl çalışıyoruz' },
  title: { en: 'A simple, disciplined process from first conversation to closing.', tr: 'İlk temastan kapanışa kadar yalın ve disiplinli bir çalışma yöntemi.' },
  steps: [
    { title: { en: 'Define', tr: 'Tanımlama' }, text: { en: 'Clarify the objective, the target market and what a successful outcome looks like.', tr: 'Hedef, hedef pazar ve başarı kriterleri müşteriyle birlikte netleştirilir.' } },
    { title: { en: 'Assess', tr: 'Değerlendirme' }, text: { en: 'Map the market, the candidates and the realistic routes to the result.', tr: 'Pazar, potansiyel muhataplar ve sonuca ulaştıracak gerçekçi seçenekler analiz edilir.' } },
    { title: { en: 'Access', tr: 'Erişim' }, text: { en: 'Reach the right decision-makers and open senior-level conversations.', tr: 'Doğru karar alıcılara erişim sağlanır ve üst düzey görüşmeler başlatılır.' } },
    { title: { en: 'Structure', tr: 'Yapılandırma' }, text: { en: 'Shape the cooperation model, the commercial terms and the transaction.', tr: 'İş birliği modeli, ticari koşullar ve işlem yapısı tasarlanır.' } },
    { title: { en: 'Execute', tr: 'Uygulama' }, text: { en: 'Run negotiations, coordinate the parties and keep the process active until it closes.', tr: 'Müzakereler yürütülür, taraflar koordine edilir ve süreç kapanışa kadar aktif biçimde yönetilir.' } },
  ],
};

export const kpis = {
  eyebrow: { en: 'At a glance', tr: 'Rakamlarla Continex' },
  items: [
    { value: '18', suffix: '', label: { en: 'Countries', tr: 'Ülke' }, note: { en: 'Active projects, mandates and business development relationships', tr: 'Aktif proje, yetki sözleşmesi ve iş geliştirme ilişkisi' } },
    { value: '5', suffix: '', label: { en: 'Core sectors', tr: 'Ana sektör' }, note: { en: 'Energy, infrastructure, industrial, mobility, international trade', tr: 'Enerji, altyapı, sanayi, mobilite ve uluslararası ticaret' } },
    { value: '4', suffix: '', label: { en: 'Regions', tr: 'Bölge' }, note: { en: 'Türkiye, Asia, Europe and the Middle East', tr: 'Türkiye, Asya, Avrupa ve Orta Doğu' } },
  ],
};

export const finalCta = {
  title: { en: 'Exploring a market, partnership or cross-border opportunity?', tr: 'Yeni bir pazar, ortaklık veya uluslararası yatırım fırsatını mı değerlendiriyorsunuz?' },
  text: { en: 'Tell us what you are working on. We will come back with a clear view of whether and how we can help.', tr: 'Gündeminizdeki konuyu bizimle paylaşın; nasıl katkı sağlayabileceğimize ilişkin net bir değerlendirmeyle size dönüş yapalım.' },
} satisfies Record<string, Localized>;
