import type { Localized } from '@i18n/utils';

/** Homepage copy from the client brief (second, definitive brief). */

export const whatWeDo = {
  eyebrow: { en: 'What we do', tr: 'Hizmetlerimiz' },
  title: {
    en: 'We build and execute cross-border <span class="text-mist-300">business opportunities.</span>',
    tr: 'Uluslararası <span class="text-mist-300">iş fırsatlarını</span> yapılandırıyor ve hayata geçiriyoruz.',
  },
} satisfies Record<string, Localized>;

export const whyContinex = {
  eyebrow: { en: 'Why Continex', tr: 'Neden Continex' },
  title: {
    en: 'More than advice. <span class="text-mist-300">Active commercial execution.</span>',
    tr: 'Danışmanlığın ötesinde: <span class="text-mist-300">sahada ticari sonuç.</span>',
  },
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
  title: {
    en: 'A simple, disciplined process <span class="text-mist-300">from first conversation to closing.</span>',
    tr: '<span class="text-mist-300">İlk temastan kapanışa kadar</span> yalın ve disiplinli bir çalışma yöntemi.',
  },
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

export const faq = {
  title: { en: 'Frequently asked questions about Continex Global', tr: 'Continex Global hakkında sık sorulan sorular' },
  items: [
    {
      q: { en: 'What exactly does Continex Global do?', tr: 'Continex Global tam olarak ne yapar?' },
      a: {
        en: 'We build and execute cross-border business opportunities: entering a new market, finding and signing the right partner, developing a project and running the commercial process through to a transaction. We work as part of your team, in the market, not as an outside observer.',
        tr: 'Uluslararası iş fırsatlarını yapılandırır ve hayata geçiririz: yeni bir pazara giriş, doğru iş ortağının bulunması ve anlaşmanın imzalanması, proje geliştirme ve ticari sürecin işlem kapanışına kadar yürütülmesi. Dışarıdan gözlemci olarak değil, hedef pazarda ekibinizin bir parçası olarak çalışırız.',
      },
    },
    {
      q: { en: 'How is this different from a consulting firm?', tr: 'Bu, danışmanlık şirketlerinden nasıl farklı?' },
      a: {
        en: 'A report is not a result. We take responsibility for the commercial outcome: opening doors at owner and CEO level, running the negotiations and coordinating the parties until something is signed or closed.',
        tr: 'Rapor tek başına sonuç değildir. Ticari sonucun sorumluluğunu üstleniriz: şirket sahibi ve üst yönetim düzeyinde kapıları açar, müzakereleri yürütür ve imza ya da kapanış gerçekleşene kadar tarafları koordine ederiz.',
      },
    },
    {
      q: { en: 'Which markets and sectors do you cover?', tr: 'Hangi pazarlarda ve sektörlerde çalışıyorsunuz?' },
      a: {
        en: 'Türkiye is our home market and China is our strongest international relationship base; we also work across Europe, the Middle East, Central Asia and Southeast Asia. Our sectors are energy and power, infrastructure and construction, industrial and manufacturing, mobility and automotive, and international trade and supply chains.',
        tr: 'Ana pazarımız Türkiye, en güçlü uluslararası ilişki tabanımız ise Çin’dir; ayrıca Avrupa, Orta Doğu, Orta Asya ve Güneydoğu Asya’da çalışırız. Sektörlerimiz enerji, altyapı ve inşaat, sanayi ve imalat, mobilite ve otomotiv ile uluslararası ticaret ve tedarik zincirleridir.',
      },
    },
    {
      q: { en: 'Do you work with both companies entering Türkiye and Turkish companies going abroad?', tr: 'Hem Türkiye’ye giren hem de yurt dışına açılan şirketlerle çalışıyor musunuz?' },
      a: {
        en: 'Yes, in both directions. International companies use us to enter and build traction in Türkiye and the wider region; Turkish companies use us to reach partners, customers and investors in China, Europe and the Middle East.',
        tr: 'Evet, her iki yönde de. Uluslararası şirketler Türkiye ve çevre bölgeye giriş yapıp ticari ivme kazanmak için; Türk şirketleri ise Çin, Avrupa ve Orta Doğu’da iş ortağı, müşteri ve yatırımcıya ulaşmak için bizimle çalışır.',
      },
    },
    {
      q: { en: 'How does an engagement start?', tr: 'Bir çalışma nasıl başlar?' },
      a: {
        en: 'With a conversation about what you are trying to achieve. We come back with an honest view of whether the objective is realistic, what the route to it looks like and what our role would be. Every mandate is defined by a commercial result, not by a number of meetings.',
        tr: 'Hedefinizi konuştuğumuz bir görüşmeyle. Hedefin gerçekçi olup olmadığına, sonuca giden yolun neye benzediğine ve bizim rolümüzün ne olacağına dair açık bir değerlendirmeyle size döneriz. Her görev, toplantı sayısıyla değil, ölçülebilir bir ticari sonuçla tanımlanır.',
      },
    },
    {
      q: { en: 'How do you handle confidentiality?', tr: 'Gizliliği nasıl yönetiyorsunuz?' },
      a: {
        en: 'Mandates are confidential by default. The work we publish is anonymised where the client requires it, and we do not use a client’s name, documents or pipeline in another process.',
        tr: 'Görevler esas olarak gizlidir. Yayımladığımız çalışmalar, müşterinin talebi hâlinde anonimleştirilir; hiçbir müşterinin adı, belgeleri veya iş hattı başka bir süreçte kullanılmaz.',
      },
    },
  ],
};
