import os
import PIL.Image
from PIL import ImageFilter

os.makedirs("public/images/katalog", exist_ok=True)

def process_and_save(src_page_idx, crop_box, dest_path, target_size=(1200, 800)):
    """
    src_page_idx: int (0 to 23)
    crop_box: tuple (x1, y1, x2, y2) in 0.0 to 1.0 relative coordinates
    dest_path: str
    target_size: tuple (width, height)
    """
    img_path = f"public/katalog_pages/katalog_p{src_page_idx:02d}.jpg"
    img = PIL.Image.open(img_path)
    w, h = img.size
    
    x1 = int(crop_box[0] * w)
    y1 = int(crop_box[1] * h)
    x2 = int(crop_box[2] * w)
    y2 = int(crop_box[3] * h)
    
    cropped = img.crop((x1, y1, x2, y2))
    
    cw, ch = cropped.size
    target_w, target_h = target_size
    target_ratio = target_w / target_h
    current_ratio = cw / ch
    
    if current_ratio > target_ratio:
        new_w = int(ch * target_ratio)
        offset = (cw - new_w) // 2
        cropped = cropped.crop((offset, 0, offset + new_w, ch))
    else:
        new_h = int(cw / target_ratio)
        offset = (ch - new_h) // 2
        cropped = cropped.crop((0, offset, cw, offset + new_h))
        
    resized = cropped.resize(target_size, PIL.Image.Resampling.LANCZOS)
    sharp = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=100, threshold=3))
    sharp.save(dest_path, "WEBP", quality=92)
    print(f"Saved: {dest_path}")

# 1. MALATYA SÖVE İMALATI
# Page 9: CNC Pencere söve profilleri (MRC 12-17)
process_and_save(9, (0.04, 0.17, 0.96, 0.92), "public/images/katalog/sove-hero.webp")
# Page 10: Söve profil modelleri (MRC 18-27)
process_and_save(10, (0.04, 0.15, 0.96, 0.92), "public/images/katalog/sove-modelleri.webp")
# Page 11: Kat silmeleri ve denizlikler (MRC 28-37)
process_and_save(11, (0.04, 0.15, 0.96, 0.92), "public/images/katalog/sove-kat-silmesi.webp")

# 2. MALATYA DIŞ CEPHE MANTOLAMA
# Page 5: MRC Mantolama Paketi (Paket EPS, file, dübel, köşe profili)
process_and_save(5, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/mantolama-hero.webp")
# Page 6: EPS Levha katmanları ve aksesuarlar
process_and_save(6, (0.04, 0.15, 0.96, 0.85), "public/images/katalog/mantolama-katmanlar.webp")
# Page 12: Bina söve & mantolama uygulaması
process_and_save(12, (0.02, 0.68, 0.35, 0.96), "public/images/katalog/mantolama-uygulama.webp")

# 3. MALATYA YALITIM
# Page 4: Taşyünü, XPS, Yerden Isıtma Straforu
process_and_save(4, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/yalitim-hero.webp")
# Page 6: Beyaz ve Karbonlu EPS Levha Blokları
process_and_save(6, (0.04, 0.22, 0.96, 0.72), "public/images/katalog/yalitim-levhalar.webp")
# Page 2: Membran, Brüt Beton Astarı & EPS Strafor
process_and_save(2, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/yalitim-asmolen.webp")

# 4. EPS ISI YALITIM LEVHASI
# Page 6: EPS Isı Yalıtım Levhaları (Karbonlu & Beyaz)
process_and_save(6, (0.04, 0.18, 0.96, 0.76), "public/images/katalog/eps-hero.webp")
# Page 5: EPS Levha Paketleri (Üst Paket Alanı)
process_and_save(5, (0.65, 0.10, 0.98, 0.40), "public/images/katalog/eps-dansite.webp")
# Page 3: Asmolen Levhalar & Asmolen Strafor
process_and_save(3, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/eps-asmolen.webp")

# 5. DEKORATİF DIŞ CEPHE KAPLAMA
# Page 7: Fugalı Cephe Kaplama Panelleri (MRC 01-06)
process_and_save(7, (0.04, 0.16, 0.96, 0.92), "public/images/katalog/cephe-kaplama-hero.webp")
# Page 15: Taş Desen & Ahşap / Betopan Paneller
process_and_save(15, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/tas-desen-panel.webp")
# Page 21: Dekoratif Saray Tacı Modelleri
process_and_save(21, (0.04, 0.15, 0.96, 0.85), "public/images/katalog/saray-taci-motif.webp")

# 6. TAŞYÜNÜ YANMAZ SÖVE
# Page 8: Taşyünü Söveler & Ahşap Söve
process_and_save(8, (0.04, 0.14, 0.96, 0.88), "public/images/katalog/tasyunu-hero.webp")
# Page 4: Taşyünü Levhalar (Sağ Üst Bölüm)
process_and_save(4, (0.65, 0.12, 0.98, 0.50), "public/images/katalog/tasyunu-yanmaz.webp")
# Page 8: Ahşap Desenli ve Taşyünü Profiller
process_and_save(8, (0.04, 0.45, 0.96, 0.90), "public/images/katalog/tasyunu-profiller.webp")

print("All optimized catalog images generated successfully!")
