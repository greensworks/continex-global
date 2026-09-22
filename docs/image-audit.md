# Görsel yenileme — 22 Eylül 2026

16 özgün görsel, yerleşik `image_gen` aracıyla üretildi. Tam üretim komutları ve kaynak PNG yolları `image-generation.json` içinde; projede kullanılan WebP dosyaları `src/assets/images/` altında. Üretilen fotoğraflar temsili editoryal görsellerdir; gerçek müşteri, ekip veya tesis fotoğrafları değildir.

## İnceleme ve bölüm kararları

| Sayfa / bölüm | Uygulama |
| --- | --- |
| Ana sayfa / açılış | Mevcut video ve yüksek çözünürlüklü enerji fotoğrafı korundu; fotoğraf AVIF/WebP ile sunuluyor. |
| Ana sayfa / hizmetler | Dört hizmete ayrı kapak: pazara erişim, ortaklık görüşmesi, proje geliştirme, ticari temsil. |
| Neden Continex / çalışma yöntemi / sayılar / SSS | Metin ve süreç odaklı düzenler korundu; gereksiz dekoratif görsel eklenmedi. |
| Sektörler | Otomotive üretim hattı, altyapıya ulaşım inşaatı, tedarik zincirine lojistik deposu eklendi. Enerji ve metal işleme fotoğrafları konularıyla uyumlu oldukları için korundu. Sayfa başlığı ile sektör kartında aynı fotoğrafın tekrarı giderildi. |
| Hizmetler / ayrıntı sayfaları | Kapak görseli ile içerik görseli ayrıldı. Hizmetin kimliği, farklı sayfalardaki aynı hizmet bağlantılarında tutarlı kaldı. |
| Hakkımızda | Dikey bina cephesi yerine yatay mimari açılış; rol ve çalışma modeli görselleri korundu. Alt tanıtım bandına sahada proje geliştirme görseli eklendi. |
| Yönetim / iş ortakları | Gerçek kişi görselleri ve logolar üretilmedi veya değiştirilmedi. |
| Pazarlar | Tahıl siloları yerine uluslararası deniz bağlantılarını anlatan yeni açılış görseli. Bölgesel kapsam kartları bilgi odaklı bırakıldı. |
| Referans çalışmalar | Gayrimenkul, sanayi ortakları ve OEM yeterlilik için üç ayrı kapak. Ayrıntı sayfalarının destek görselleri konularına göre düzenlendi. Liste kartları ile alttaki ayrıntılı kaydırıcının fotoğrafları ayrıldı. |
| Insights / Görüşler | Dört yazı için dört ayrı yatay kapak; her yazının TR ve EN sürümü aynı kapağı kullanır. Kart, öne çıkan içerik ve makale başlığı aynı yazı kimliğini korur. |
| İletişim / yasal sayfalar | Form ve metin odaklı içerik düzenleri korundu. |
| Kapanış bantları | Küçük waterfront görselinin geniş kullanımını kaldıran ve hizmet içeriğiyle tekrar etmeyen eşlemeler. |

## Kalite ve dosya boyutu

- Eski kriz kapağı 674×806, eski Türkiye kapağı 1080×1920 idi. Dikey görseller yatay alanlarda kırpılıp büyütülüyordu.
- Yeni kaynaklar doğal 1536×1024 çözünürlükte. Yapay büyütme uygulanmadı.
- Üretim PNG’lerinden kalite 92 WebP ana dosyalar hazırlandı; ana dosyalar 168–500 KiB aralığında. Bunlar tarayıcıya her durumda tam boyutta gönderilmez.
- `Photo.astro`, AVIF kalite 60 ve WebP kalite 82 sürümlerini derleme sırasında oluşturur. Kaynak çözünürlüğünü aşan `srcset` adayları engellenir.
- Kartlarda gerçek CSS kırılma noktalarını izleyen `sizes` kullanılır. Özellikle 640 px altındaki Insights kartlarında yanlış `50vw` bildirimi düzeltildi.
- Ekran dışında kalan görseller tembel yüklenir; öne çıkan Insights kapağı ve makale kapağı öncelikli yüklenir. Görsellerin boyut nitelikleri korunur.
- Insights kart AVIF dosyaları: 384 px için yaklaşık 10–17 KiB; 800 px için 29–62 KiB. Öne çıkan kriz kapağı: 1200 px için yaklaşık 94 KiB.

## Tekrar üretim

`node scripts/optimize-generated-images.mjs` manifestte kayıtlı orijinal PNG’lerden WebP ana dosyaları tekrar hazırlar. Orijinal PNG’ler bu makinedeki üretim dizininde korunur; başka makinede tekrar çalıştırmak için manifestteki kaynak yollarını güncellemek gerekir. Normal `npm run build` bunlara ihtiyaç duymaz; projedeki WebP dosyalarını kullanır.

Kontrol: `npm run check`, `npm run build`; Insights masaüstü ve mobil görsel kontrolü. Derlenmiş görsel bağlantıları ve boyut ölçümleri `image-validation.json` dosyasındadır.
