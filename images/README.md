# Fotoğraflar Klasörü 📸💕

Bu klasöre sevgilinle çektiğiniz fotoğrafları ekleyin:

## Gerekli Fotoğraflar:
- `photo1.jpg` - İlk buluşmanızdan bir fotoğraf
- `photo2.jpg` - En mutlu anınızdan bir fotoğraf  
- `photo3.jpg` - Birlikte gülüştüğünüz bir fotoğraf

## Fotoğraf Önerileri:
- Kare formatında (1:1 oran) en iyi görünür
- Yüksek çözünürlüklü olmasına gerek yok, web için optimize edilmiş boyutta olabilir
- JPG veya PNG formatında olabilir

## Fotoğraf İsimleri:
Fotoğrafları tam olarak şu isimlerle kaydedin:
- photo1.jpg
- photo2.jpg  
- photo3.jpg

## Fotoğraf Açıklamalarını Değiştirmek:
`index.html` dosyasında şu satırları bulup kendi açıklamalarınızla değiştirin:

```html
<div class="photo-caption">İlk buluşmamız 💕</div>
<div class="photo-caption">En mutlu anımız 🥰</div>
<div class="photo-caption">Birlikte gülüşümüz 😊</div>
```

Fotoğrafları ekledikten sonra `index.html` dosyasını tarayıcıda açın ve romantik sürprizinizin keyfini çıkarın! 🌹💖

## Görsel Optimizasyonu (Kısa Rehber)

1. Neden optimize etmeli?
	- Mobil veri kullanımı ve sayfa hızı için daha küçük boyutlu görseller kullanın.

2. Hangi boyutlarda kaydetmeliyim?
	- Örnek: 480px (küçük), 800px (orta), 1200px (büyük).

3. Dosya adlandırma önerisi:
	- Orijinal: `photo1.jpg`
	- Boyutlu: `photo1-480w.jpg`, `photo1-800w.jpg`, `photo1-1200w.jpg`

4. Nasıl uygularım?
	- `index.html` içindeki `<img>` etiketleri şimdilik `data-srcset` ile yer tutucu içerir. Ürettiğiniz boyutlu dosyaları aynı klasöre koyup `data-srcset` içeriğini `srcset` olarak değiştirin.

	Örnek değişiklik:

	```html
	<!-- önce -->
	<img loading="lazy" src="images/photo1.jpg" data-srcset="images/photo1-480w.jpg 480w, images/photo1-800w.jpg 800w, images/photo1-1200w.jpg 1200w" sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw">

	<!-- sonra -->
	<img loading="lazy" src="images/photo1-800w.jpg" srcset="images/photo1-480w.jpg 480w, images/photo1-800w.jpg 800w, images/photo1-1200w.jpg 1200w" sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw">
	```

5. Hızlı komutlar (ImageMagick ile yeniden boyutlandırma):

	```bash
	magick convert photo1.jpg -resize 480 photo1-480w.jpg
	magick convert photo1.jpg -resize 800 photo1-800w.jpg
	magick convert photo1.jpg -resize 1200 photo1-1200w.jpg
	```

6. Ek öneriler:
	- `jpeg`/`jpg` için kalite %75-%85 arası iyi bir denge sağlar.
	- `webp` formatına dönüştürmek daha iyi sıkıştırma sağlar (tarayıcı desteğini kontrol edin).

7. Test:
	- Değişiklikleri kaydettikten sonra basit bir sunucu ile test edin: `python -m http.server` ve tarayıcınızda `http://localhost:8000` açın.

Herhangi bir görseli sizin için yeniden boyutlandırıp `srcset` olarak yerleştirmemi ister misiniz? Eğer isterseniz hangi dosyayı kullanacağınızı söyleyin, ben örnek üç boyutu oluşturacak şekilde rehber kodu ekleyeyim.