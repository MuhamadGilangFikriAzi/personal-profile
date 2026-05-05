import json

with open('C:/Users/mgfa9/Project/personal-profile/translations.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

additions = {
    "proj.lab.title": {"id": "Lab Equipment Borrowing", "en": "Lab Equipment Borrowing"},
    "proj.lab.desc": {"id": "Sistem peminjaman alat laboratorium berbasis web dengan manajemen pengguna, role-based access, dan tracking peminjaman real-time menggunakan Laravel + PostgreSQL.", "en": "Web-based lab equipment borrowing system with user management, role-based access, and real-time borrowing tracking using Laravel + PostgreSQL."},
    "proj.lab.badge": {"id": "In Progress", "en": "In Progress"},

    "proj.company.title": {"id": "Company Profile", "en": "Company Profile"},
    "proj.company.desc": {"id": "Company profile website responsif dengan desain modern, menampilkan layanan, portofolio, dan informasi kontak. Dibangun dengan HTML, Tailwind CSS, dan Alpine.js.", "en": "Responsive company profile website with modern design, showcasing services, portfolio, and contact info. Built with HTML, Tailwind CSS, and Alpine.js."},
    "proj.company.badge": {"id": "Selesai", "en": "Done"},

    "proj.desadigital.title": {"id": "DesaDigital v2", "en": "DesaDigital v2"},
    "proj.desadigital.desc": {"id": "Platform digital desa dengan fitur berita, pengaduan, manajemen surat, dan peta desa. Sistem berbasis Laravel + MySQL dengan middleware admin dan autentikasi multi-level.", "en": "Village digital platform with news, complaints, letter management, and village map. Laravel + MySQL based system with admin middleware and multi-level authentication."},
    "proj.desadigital.badge": {"id": "Selesai", "en": "Done"},

    "proj.pos.title": {"id": "POS System", "en": "POS System"},
    "proj.pos.desc": {"id": "Sistem Point of Sales untuk kasir dengan manajemen produk, transaksi, dan laporan keuangan. Dibangun dengan Laravel + MySQL, dilengkapi fitur cetak struk dan dashboard analitik.", "en": "Point of Sales system for cashier with product management, transactions, and financial reporting. Built with Laravel + MySQL, includes receipt printing and analytics dashboard."},
    "proj.pos.badge": {"id": "Selesai", "en": "Done"},

    "proj.landing.title": {"id": "Landing Page", "en": "Landing Page"},
    "proj.landing.desc": {"id": "Landing page modern dan responsif untuk personal branding dengan desain clean, animasi halus, dan optimalisasi performa. Dibangun dengan HTML, Tailwind CSS, dan Alpine.js.", "en": "Modern responsive landing page for personal branding with clean design, smooth animations, and performance optimization. Built with HTML, Tailwind CSS, and Alpine.js."},
    "proj.landing.badge": {"id": "Selesai", "en": "Done"},
}

d.update(additions)

with open('C:/Users/mgfa9/Project/personal-profile/translations.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

print(f"Added {len(additions)} project keys. Total: {len(d)} keys")
