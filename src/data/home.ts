import type { Localized } from '@i18n/utils';

/** Homepage copy from the client brief (second, definitive brief). */

export const whatWeDo = {
  eyebrow: { en: 'What we do', tr: 'Ne yapıyoruz' },
  title: { en: 'We build and execute cross-border business opportunities.', tr: 'Sınır ötesi iş fırsatlarını kuruyor ve hayata geçiriyoruz.' },
} satisfies Record<string, Localized>;

export const whyContinex = {
  eyebrow: { en: 'Why Continex', tr: 'Neden Continex' },
  title: { en: 'More than advice. Active commercial execution.', tr: 'Tavsiyeden fazlası. Sahada ticari icra.' },
  lead: {
    en: 'We do not stop at reports. We work in the market, open the right doors and keep the process moving until it produces a result.',
    tr: 'Raporla yetinmiyoruz. Pazarda çalışıyor, doğru kapıları açıyor ve süreci sonuç üretene kadar ilerletiyoruz.',
  },
  items: [
    { title: { en: 'Executive Access', tr: 'Üst Düzey Erişim' }, text: { en: 'Direct working relationships with owners, CEOs and decision-makers in Türkiye, China and the wider region.', tr: 'Türkiye, Çin ve bölgede şirket sahipleri, CEO’lar ve karar vericilerle doğrudan çalışma ilişkisi.' } },
    { title: { en: 'Local Intelligence', tr: 'Yerel Bilgi' }, text: { en: 'On-the-ground knowledge of how deals are structured, negotiated and closed in each market.', tr: 'Her pazarda işlerin nasıl yapılandırıldığına, müzakere edildiğine ve kapatıldığına dair saha bilgisi.' } },
    { title: { en: 'Cross-Border Coordination', tr: 'Sınır Ötesi Koordinasyon' }, text: { en: 'One interface between international teams, local partners, advisers and authorities.', tr: 'Uluslararası ekipler, yerel ortaklar, danışmanlar ve kurumlar arasında tek arayüz.' } },
    { title: { en: 'Outcome Orientation', tr: 'Sonuç Odağı' }, text: { en: 'Every engagement is defined by a commercial result: a signed partner, a qualified account, a closed transaction.', tr: 'Her iş ticari bir sonuçla tanımlanır: imzalanmış bir ortak, onaylanmış bir müşteri, kapanmış bir işlem.' } },
  ],
};

export const howWeWork = {
  eyebrow: { en: 'How we work', tr: 'Nasıl çalışıyoruz' },
  title: { en: 'A simple, disciplined process from first conversation to closing.', tr: 'İlk görüşmeden kapanışa kadar sade ve disiplinli bir süreç.' },
  steps: [
    { title: { en: 'Define', tr: 'Tanımla' }, text: { en: 'Clarify the objective, the target market and what a successful outcome looks like.', tr: 'Hedefi, hedef pazarı ve başarılı sonucun ne olduğunu netleştiriyoruz.' } },
    { title: { en: 'Assess', tr: 'Değerlendir' }, text: { en: 'Map the market, the candidates and the realistic routes to the result.', tr: 'Pazarı, adayları ve sonuca giden gerçekçi yolları haritalıyoruz.' } },
    { title: { en: 'Access', tr: 'Eriş' }, text: { en: 'Reach the right decision-makers and open senior-level conversations.', tr: 'Doğru karar vericilere ulaşıyor, üst düzey görüşmeleri açıyoruz.' } },
    { title: { en: 'Structure', tr: 'Yapılandır' }, text: { en: 'Shape the cooperation model, the commercial terms and the transaction.', tr: 'İş birliği modelini, ticari şartları ve işlemi şekillendiriyoruz.' } },
    { title: { en: 'Execute', tr: 'Uygula' }, text: { en: 'Run negotiations, coordinate the parties and keep the process active until it closes.', tr: 'Müzakereyi yürütüyor, tarafları koordine ediyor ve süreci kapanana kadar canlı tutuyoruz.' } },
  ],
};

export const kpis = {
  eyebrow: { en: 'At a glance', tr: 'Bir bakışta' },
  items: [
    { value: '18', suffix: '', label: { en: 'Countries', tr: 'Ülke' }, note: { en: 'Active projects, mandates and business development relationships', tr: 'Aktif proje, mandat ve iş geliştirme ilişkileri' } },
    { value: '5', suffix: '', label: { en: 'Core sectors', tr: 'Ana sektör' }, note: { en: 'Energy, infrastructure, industrial, mobility, international trade', tr: 'Enerji, altyapı, sanayi, mobilite, uluslararası ticaret' } },
    { value: '4', suffix: '', label: { en: 'Regions', tr: 'Bölge' }, note: { en: 'Türkiye, Asia, Europe and the Middle East', tr: 'Türkiye, Asya, Avrupa ve Orta Doğu' } },
  ],
};

export const finalCta = {
  title: { en: 'Exploring a market, partnership or cross-border opportunity?', tr: 'Bir pazar, ortaklık veya sınır ötesi fırsat mı değerlendiriyorsunuz?' },
  text: { en: 'Tell us what you are working on. We will come back with a clear view of whether and how we can help.', tr: 'Üzerinde çalıştığınız konuyu anlatın. Nasıl yardımcı olabileceğimize dair net bir görüşle dönelim.' },
} satisfies Record<string, Localized>;
