# Portfolio - Personal Profile

Website portfolio pribadi bilingual (Indonesia/Inggris) yang menampilkan profil, pengalaman kerja, proyek, dan keahlian.

🌐 **Live:** [gilang.novasistem.cloud](https://gilang.novasistem.cloud)

## Fitur

- Bilingual ID/EN dengan Alpine.js i18n
- Dark-themed modern design
- Responsive mobile-friendly
- Animasi scroll halus
- Integrasi SweetBake, POS System, dan proyek lainnya

## Teknologi

- HTML5 + CSS3
- Tailwind CSS (CDN)
- Alpine.js (CDN)
- Docker (Nginx)

## Instalasi

```bash
# Clone repo
git clone https://github.com/MuhamadGilangFikriAzi/personal-profile.git
cd personal-profile

# Jalankan dengan Docker
docker build -t personal-profile .
docker run -d -p 8080:80 personal-profile

# Atau langsung buka index.html di browser
```

## Struktur

```
personal-profile/
├── index.html          # Halaman utama
├── translations.json   # Kamus bilingual ID/EN
├── Dockerfile          # Nginx container
└── nginx.conf          # Konfigurasi Nginx
```
