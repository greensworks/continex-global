import type { Localized } from '@i18n/utils';

export interface LegalSection { title: Localized; paragraphs: Localized[] }
export interface LegalDoc { title: Localized; intro: Localized; updated: string; sections: LegalSection[] }

const email = 'info@continexglobal.com';

export const privacy: LegalDoc = {
  title: { en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
  updated: '2026-09-21',
  intro: {
    en: 'Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti. (“Continex Global”) is committed to protecting the privacy of its clients, partners and website visitors. This policy explains what personal data we collect, how we use it, with whom we share it and the rights you have under the Turkish Personal Data Protection Law (KVKK) and, where applicable, the EU General Data Protection Regulation (GDPR).',
    tr: 'Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti. (“Continex Global”), müşterilerinin, iş ortaklarının ve web sitesi ziyaretçilerinin gizliliğini korumayı taahhüt eder. Bu politika hangi kişisel verileri topladığımızı, nasıl kullandığımızı, kimlerle paylaştığımızı ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ile, uygulanabildiği ölçüde, AB Genel Veri Koruma Tüzüğü (GDPR) kapsamındaki haklarınızı açıklar.',
  },
  sections: [
    { title: { en: 'Data controller', tr: 'Veri sorumlusu' }, paragraphs: [{ en: 'The data controller is Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti., 19 Mayıs Mahallesi, 19 Mayıs Caddesi, Nova Baran Plaza No:4 Kat:13, 34360 Şişli, Istanbul, Türkiye.', tr: 'Veri sorumlusu, 19 Mayıs Mahallesi, 19 Mayıs Caddesi, Nova Baran Plaza No:4 Kat:13, 34360 Şişli, İstanbul adresinde yerleşik Continex Global Danışmanlık ve Dış Ticaret Ltd. Şti.’dir.' }] },
    { title: { en: 'What we collect', tr: 'Topladığımız veriler' }, paragraphs: [
      { en: 'When you contact us, submit an enquiry or work with us, we collect the information you provide: name, company, role, e-mail address, telephone number, country and the content of your message.', tr: 'Bizimle iletişime geçtiğinizde, talep gönderdiğinizde veya birlikte çalıştığımızda sağladığınız bilgileri toplarız: ad soyad, şirket, görev, e-posta adresi, telefon numarası, ülke ve mesajınızın içeriği.' },
      { en: 'When you visit our website we may collect technical data such as IP address, browser type, pages viewed, referring source and approximate location, through cookies and similar technologies described in our Cookie Policy.', tr: 'Web sitemizi ziyaret ettiğinizde IP adresi, tarayıcı türü, görüntülenen sayfalar, geliş kaynağı ve yaklaşık konum gibi teknik verileri, Çerez Politikamızda açıklanan çerezler ve benzeri teknolojiler aracılığıyla toplayabiliriz.' },
    ] },
    { title: { en: 'How we use it', tr: 'Nasıl kullanıyoruz' }, paragraphs: [
      { en: 'We use personal data to respond to enquiries, deliver and manage our services, maintain client relationships, meet legal and accounting obligations, and to understand and improve how our website is used.', tr: 'Kişisel verileri taleplere yanıt vermek, hizmetlerimizi sunmak ve yönetmek, müşteri ilişkilerini sürdürmek, yasal ve muhasebe yükümlülüklerini yerine getirmek ve web sitemizin kullanımını anlayıp iyileştirmek için kullanırız.' },
      { en: 'Enquiries submitted through our website are recorded in our customer relationship management system so that no request is lost and follow-up can be tracked.', tr: 'Web sitemiz üzerinden gönderilen talepler, hiçbir talebin kaybolmaması ve takibin izlenebilmesi için müşteri ilişkileri yönetim sistemimize kaydedilir.' },
      { en: 'The legal bases are the performance of a contract or pre-contractual steps, our legitimate interest in running and developing our business, compliance with legal obligations and, for non-essential cookies and marketing, your consent.', tr: 'Hukuki dayanaklar; bir sözleşmenin kurulması veya ifası, işimizi yürütme ve geliştirmedeki meşru menfaatimiz, yasal yükümlülüklere uyum ve zorunlu olmayan çerezler ile pazarlama için açık rızanızdır.' },
    ] },
    { title: { en: 'Sharing', tr: 'Paylaşım' }, paragraphs: [
      { en: 'We do not sell or trade personal data. We share it only with service providers who help us operate (hosting, e-mail, CRM, analytics), bound by confidentiality and data-processing terms, and with authorities where the law requires.', tr: 'Kişisel verileri satmaz veya takas etmeyiz. Verileri yalnızca gizlilik ve veri işleme şartlarıyla bağlı hizmet sağlayıcılarla (barındırma, e-posta, CRM, analitik) ve yasanın gerektirdiği hallerde yetkili kurumlarla paylaşırız.' },
      { en: 'Some providers process data outside Türkiye or the EEA. Where this happens we rely on the safeguards required by KVKK and GDPR.', tr: 'Bazı sağlayıcılar verileri Türkiye veya AEA dışında işleyebilir. Bu durumda KVKK ve GDPR’ın gerektirdiği güvencelere dayanırız.' },
    ] },
    { title: { en: 'Security', tr: 'Güvenlik' }, paragraphs: [{ en: 'We apply appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration or destruction, and review them regularly.', tr: 'Kişisel verileri yetkisiz erişim, ifşa, değiştirme veya imhaya karşı korumak için uygun teknik ve idari tedbirleri uygular ve bunları düzenli olarak gözden geçiririz.' }] },
    { title: { en: 'Retention', tr: 'Saklama süresi' }, paragraphs: [{ en: 'We keep personal data for as long as needed for the purposes above or as required by law, then delete or anonymise it.', tr: 'Kişisel verileri yukarıdaki amaçlar için gerekli olduğu sürece veya yasanın gerektirdiği süre boyunca saklar, ardından siler veya anonim hale getiririz.' }] },
    { title: { en: 'Your rights', tr: 'Haklarınız' }, paragraphs: [{ en: `Under KVKK Article 11 and, where applicable, the GDPR, you may ask whether we process your data, request access, correction, deletion or restriction, object to processing, and withdraw consent at any time. Write to ${email} and we will respond within the statutory period.`, tr: `KVKK’nın 11. maddesi ve uygulanabildiği ölçüde GDPR kapsamında; verilerinizin işlenip işlenmediğini öğrenme, erişim, düzeltme, silme veya kısıtlama talep etme, işlemeye itiraz etme ve rızanızı dilediğiniz zaman geri çekme hakkına sahipsiniz. ${email} adresine yazın; yasal süre içinde yanıt vereceğiz.` }] },
    { title: { en: 'Third-party links', tr: 'Üçüncü taraf bağlantıları' }, paragraphs: [{ en: 'Our website may link to external sites. We are not responsible for their privacy practices and recommend reviewing their policies.', tr: 'Web sitemiz harici sitelere bağlantı verebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz; politikalarını incelemenizi öneririz.' }] },
    { title: { en: 'Changes', tr: 'Değişiklikler' }, paragraphs: [{ en: 'We may update this policy. The current version and its date are always published on this page.', tr: 'Bu politikayı güncelleyebiliriz. Güncel sürüm ve tarihi her zaman bu sayfada yayımlanır.' }] },
    { title: { en: 'Contact', tr: 'İletişim' }, paragraphs: [{ en: `Questions about this policy: ${email}.`, tr: `Bu politikayla ilgili sorularınız için: ${email}.` }] },
  ],
};

export const terms: LegalDoc = {
  title: { en: 'Terms and Conditions', tr: 'Hizmet Şartları' },
  updated: '2026-09-21',
  intro: {
    en: 'These terms govern the use of the Continex Global website and, together with the individual engagement agreement, the services we provide. By using our website or services you accept them.',
    tr: 'Bu şartlar, Continex Global web sitesinin kullanımını ve ilgili iş sözleşmesiyle birlikte sunduğumuz hizmetleri düzenler. Web sitemizi veya hizmetlerimizi kullanarak bu şartları kabul etmiş olursunuz.',
  },
  sections: [
    { title: { en: 'Services', tr: 'Hizmetler' }, paragraphs: [{ en: 'Continex Global provides cross-border business development and strategic advisory services: market entry and commercial expansion, strategic partnerships and joint ventures, project development and strategic transactions, and international representation and deal execution. The scope, fees and timeline of each engagement are defined in a written agreement.', tr: 'Continex Global, sınır ötesi iş geliştirme ve stratejik danışmanlık hizmetleri sunar: pazara giriş ve ticari büyüme, stratejik ortaklıklar ve ortak girişimler, proje geliştirme ve stratejik işlemler, uluslararası temsil ve işlem yürütme. Her işin kapsamı, ücreti ve takvimi yazılı bir sözleşmeyle belirlenir.' }] },
    { title: { en: 'Client responsibilities', tr: 'Müşteri yükümlülükleri' }, paragraphs: [{ en: 'Clients provide accurate and timely information needed for the engagement. Delays in providing information may affect timelines and outcomes.', tr: 'Müşteri, iş için gerekli bilgileri doğru ve zamanında sağlar. Bilgi sağlanmasındaki gecikmeler takvimi ve sonuçları etkileyebilir.' }] },
    { title: { en: 'Confidentiality', tr: 'Gizlilik' }, paragraphs: [{ en: 'All information exchanged during an engagement is treated as confidential. Client names, counterparties and commercial terms are not disclosed without written consent.', tr: 'İş süresince paylaşılan tüm bilgiler gizli kabul edilir. Müşteri adları, karşı taraflar ve ticari şartlar yazılı onay olmaksızın açıklanmaz.' }] },
    { title: { en: 'Fees and payment', tr: 'Ücret ve ödeme' }, paragraphs: [{ en: 'Fees and payment terms are set out in the engagement agreement. Continex Global may suspend services where payment obligations are not met.', tr: 'Ücretler ve ödeme koşulları iş sözleşmesinde belirlenir. Ödeme yükümlülüklerinin yerine getirilmemesi halinde Continex Global hizmetleri askıya alabilir.' }] },
    { title: { en: 'Intellectual property', tr: 'Fikri mülkiyet' }, paragraphs: [{ en: 'Intellectual property created or shared during an engagement remains with its owner. Continex Global may use anonymised and aggregated information for analysis and the development of its services.', tr: 'İş süresince oluşturulan veya paylaşılan fikri mülkiyet sahibinde kalır. Continex Global, anonimleştirilmiş ve toplulaştırılmış bilgileri analiz ve hizmet geliştirme amacıyla kullanabilir.' }] },
    { title: { en: 'Termination', tr: 'Fesih' }, paragraphs: [{ en: 'Either party may terminate an engagement by written notice as set out in the agreement. Outstanding payment obligations survive termination.', tr: 'Taraflardan her biri, sözleşmede belirtilen şekilde yazılı bildirimle işi sona erdirebilir. Muaccel ödeme yükümlülükleri fesihten sonra da devam eder.' }] },
    { title: { en: 'Compliance', tr: 'Mevzuata uyum' }, paragraphs: [{ en: 'Both parties comply with the laws and regulations applicable in their jurisdictions, including sanctions, export control and anti-corruption rules.', tr: 'Taraflar; yaptırımlar, ihracat kontrolü ve yolsuzlukla mücadele kuralları dahil kendi yargı alanlarındaki mevzuata uyar.' }] },
    { title: { en: 'Disputes and governing law', tr: 'Uyuşmazlıklar ve uygulanacak hukuk' }, paragraphs: [{ en: 'Disputes are first addressed through negotiation and, if needed, mediation. These terms are governed by the laws of the Republic of Türkiye; Istanbul courts and enforcement offices have jurisdiction unless the engagement agreement provides otherwise.', tr: 'Uyuşmazlıklar önce müzakere, gerekirse arabuluculuk yoluyla çözülür. Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir; iş sözleşmesinde aksi belirtilmedikçe İstanbul mahkemeleri ve icra daireleri yetkilidir.' }] },
    { title: { en: 'Changes', tr: 'Değişiklikler' }, paragraphs: [{ en: 'We may update these terms. Continued use of the website or services after publication of a new version means acceptance of it.', tr: 'Bu şartları güncelleyebiliriz. Yeni sürümün yayımlanmasından sonra web sitesinin veya hizmetlerin kullanılmaya devam edilmesi kabul anlamına gelir.' }] },
  ],
};

export const cookies: LegalDoc = {
  title: { en: 'Cookie Policy', tr: 'Çerez Politikası' },
  updated: '2026-09-21',
  intro: {
    en: 'This website uses cookies and similar technologies. Necessary cookies are always active; analytics and marketing cookies are set only after you give consent through the banner. You can change your choice at any time using the link at the bottom of this page.',
    tr: 'Bu web sitesi çerezler ve benzeri teknolojiler kullanır. Zorunlu çerezler her zaman etkindir; analitik ve pazarlama çerezleri yalnızca banner üzerinden onay vermenizden sonra yerleştirilir. Tercihinizi bu sayfanın altındaki bağlantıdan dilediğiniz zaman değiştirebilirsiniz.',
  },
  sections: [
    { title: { en: 'Necessary', tr: 'Zorunlu' }, paragraphs: [{ en: 'Required for the site to work and to remember your cookie choice. They do not identify you.', tr: 'Sitenin çalışması ve çerez tercihinizin hatırlanması için gereklidir. Sizi tanımlamaz.' }] },
    { title: { en: 'Analytics', tr: 'Analitik' }, paragraphs: [{ en: 'Google Analytics 4 and Microsoft Clarity help us understand which pages are visited, from which countries and sources, and how the site is used. IP addresses are anonymised. A business visitor identification service may be used to recognise the company network a visit comes from; it does not identify individuals.', tr: 'Google Analytics 4 ve Microsoft Clarity; hangi sayfaların, hangi ülkelerden ve kaynaklardan ziyaret edildiğini ve sitenin nasıl kullanıldığını anlamamıza yardımcı olur. IP adresleri anonimleştirilir. Ziyaretin geldiği şirket ağını tanımak için bir kurumsal ziyaretçi tanımlama hizmeti kullanılabilir; bu hizmet bireyleri tanımlamaz.' }] },
    { title: { en: 'Marketing', tr: 'Pazarlama' }, paragraphs: [{ en: 'LinkedIn Insight Tag and, if we run campaigns, Meta Pixel measure the effectiveness of our communication on those platforms.', tr: 'LinkedIn Insight Tag ve kampanya yürütmemiz halinde Meta Pixel, bu platformlardaki iletişimimizin etkinliğini ölçer.' }] },
    { title: { en: 'Managing cookies', tr: 'Çerezleri yönetme' }, paragraphs: [{ en: 'You can withdraw or change consent using the link below or by clearing cookies in your browser. Disabling cookies may affect some features.', tr: 'Onayınızı aşağıdaki bağlantıdan veya tarayıcınızdaki çerezleri temizleyerek geri çekebilir ya da değiştirebilirsiniz. Çerezlerin devre dışı bırakılması bazı özellikleri etkileyebilir.' }] },
  ],
};

export const legalDocs = { privacy, terms, cookies };
export type LegalKind = keyof typeof legalDocs;
