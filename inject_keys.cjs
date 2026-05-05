const fs = require('fs');
const path = 'C:/Users/mgfa9/Project/personal-profile/index.html';

let html = fs.readFileSync(path, 'utf-8');

// ====== ADD TRANSLATION KEYS for experience & project descriptions ======
// Inject expanded dictionary into Alpine store

const newKeys = `  "exp.manulife.title": {"id": "IT Full Stack Engineer", "en": "IT Full Stack Engineer"},
  "exp.manulife.company": {"id": "Manulife", "en": "Manulife"},
  "exp.manulife.date": {"id": "Jul 2025 — Sekarang", "en": "Jul 2025 — Present"},
  "exp.manulife.d1": {"id": "Mengembangkan <strong>PDLINK Web Agent</strong> untuk bank mitra Manulife: <strong>DBS</strong> dan <strong>Danamon</strong>.", "en": "Developed <strong>PDLINK Web Agent</strong> for Manulife's partner banks: <strong>DBS</strong> and <strong>Danamon</strong>."},
  "exp.manulife.d2": {"id": "Dibangun menggunakan <strong>.NET (VB)</strong> untuk backend, <strong>Angular</strong> untuk frontend, dan <strong>Oracle</strong> untuk database.", "en": "Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database."},

  "exp.adins.title": {"id": "Senior Software Developer", "en": "Senior Software Developer"},
  "exp.adins.company": {"id": "PT Adicipta Inovasi Teknologi (PT ADINS)", "en": "PT Adicipta Inovasi Teknologi (PT ADINS)"},
  "exp.adins.date": {"id": "Jun 2024 — Sekarang", "en": "Jun 2024 — Present"},
  "exp.adins.d1": {"id": "Berkontribusi pada proyek <strong>Hyundai Capital</strong> — mengirimkan modul utama: AMS (Asset Management System) & CMS (Collection Management System).", "en": "Contributed to the <strong>Hyundai Capital</strong> project — delivered key modules: AMS (Asset Management System) & CMS (Collection Management System)."},
  "exp.adins.d2": {"id": "Mengawasi proses pengembangan, memastikan pencapaian milestone tepat waktu dengan standar kualitas tinggi.", "en": "Supervised development processes, ensured milestones met on time with high-quality standards."},
  "exp.adins.d3": {"id": "Menggunakan <strong>.NET</strong> untuk backend, <strong>Angular</strong> untuk frontend, dan <strong>PostgreSQL</strong> untuk manajemen database.", "en": "Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management."},
  "exp.adins.d4": {"id": "Mengimplementasikan <strong>RabbitMQ</strong> untuk antrian pesan dan <strong>Camunda</strong> untuk otomatisasi proses bisnis.", "en": "Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation."},
  "exp.adins.d5": {"id": "Mengintegrasikan banyak sistem pihak ketiga: Asuransi Sinarmas, KBRU (bank regional), PT Delima (fidusia), dan sistem Softphone.", "en": "Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system."},

  "exp.ocbc.title": {"id": "Software Developer", "en": "Software Developer"},
  "exp.ocbc.company": {"id": "Bank OCBC NISP", "en": "Bank OCBC NISP"},
  "exp.ocbc.date": {"id": "Mei 2022 — Mei 2024", "en": "May 2022 — May 2024"},
  "exp.ocbc.d1": {"id": "Mengembangkan dan meningkatkan <strong>6+ proyek internal</strong> menggunakan <strong>arsitektur microservices</strong>.", "en": "Developed and enhanced <strong>6+ internal projects</strong> using <strong>microservices architecture</strong>."},
  "exp.ocbc.d2": {"id": "Membuat skenario pengujian, melakukan SIT, dan memimpin UAT untuk memastikan fitur memenuhi kebutuhan bisnis.", "en": "Created test scenarios, conducted SIT, and led UAT to ensure features met business requirements."},
  "exp.ocbc.d3": {"id": "Mengoptimalkan query SQL, debug issue di dev dan production, menangani integrasi sistem antara platform lama dan modern.", "en": "Optimized SQL queries, debugged issues across dev and production, handled system integration between legacy and modern platforms."},
  "exp.ocbc.d4": {"id": "Menggunakan <strong>.NET (C#, ASP.NET Core, Web API)</strong> untuk backend, <strong>Angular</strong> untuk frontend, <strong>SQL Server</strong> untuk database.", "en": "Used <strong>.NET (C#, ASP.NET Core, Web API)</strong> for backend, <strong>Angular</strong> for frontend, <strong>SQL Server</strong> for database."},
  "exp.ocbc.d5": {"id": "Bekerja dengan <strong>Apache Kafka</strong> sebagai message broker untuk sistem terdistribusi & komunikasi asinkron.", "en": "Worked with <strong>Apache Kafka</strong> as message broker for distributed systems & asynchronous communication."},

  "exp.mge.title": {"id": "Web Programmer", "en": "Web Programmer"},
  "exp.mge.company": {"id": "Morning Glory Enterprise", "en": "Morning Glory Enterprise"},
  "exp.mge.date": {"id": "Nov 2020 — Feb 2021", "en": "Nov 2020 — Feb 2021"},
  "exp.mge.d1": {"id": "Berkolaborasi dengan tim untuk menguji aplikasi dan menyempurnakan fungsionalitas berdasarkan umpan balik.", "en": "Collaborated with team to test applications and refine functionality based on feedback."},
  "exp.mge.d2": {"id": "Mengembangkan antarmuka front-end responsif berdasarkan desain UI/UX.", "en": "Developed responsive front-end interfaces based on UI/UX designs."},
  "exp.mge.d3": {"id": "Merancang dan menyusun skema database untuk memenuhi kebutuhan sistem.", "en": "Designed and structured database schemas to meet system requirements."},
  "exp.mge.d4": {"id": "Mengidentifikasi dan memperbaiki bug selama pengembangan, memastikan stabilitas dan kinerja.", "en": "Identified and resolved bugs during development, ensuring stability and performance."},

  "exp.drago.title": {"id": "Junior Backend Developer", "en": "Junior Backend Developer"},
  "exp.drago.company": {"id": "PT Drago Kreatifindo", "en": "PT Drago Kreatifindo"},
  "exp.drago.date": {"id": "Agu 2019 — Agu 2020", "en": "Aug 2019 — Aug 2020"},
  "exp.drago.d1": {"id": "Membantu pengembang backend senior dalam membangun dan memelihara aplikasi web.", "en": "Assisted senior back-end developers in building and maintaining web applications."},
  "exp.drago.d2": {"id": "Memantau kinerja aplikasi dan memperbaiki bug serta kesalahan sistem.", "en": "Monitored application performance and resolved bugs and system errors."},
  "exp.drago.d3": {"id": "Mengembangkan RESTful API untuk mendukung aplikasi mobile dan web.", "en": "Developed RESTful APIs to support mobile and web applications."},
  "exp.drago.d4": {"id": "Membangun sistem menggunakan <strong>PHP Laravel</strong> sebagai framework utama dan <strong>MySQL</strong> untuk database.", "en": "Built systems using <strong>PHP Laravel</strong> as main framework and <strong>MySQL</strong> for database."},

  "proj.lab.title": {"id": "Lab Equipment Borrowing System", "en": "Lab Equipment Borrowing System"},
  "proj.lab.desc": {"id": "Sistem peminjaman alat laboratorium berbasis web dengan fitur CRUD alat, peminjaman multi-item, approval flow, dan dashboard admin.", "en": "Web-based laboratory equipment borrowing system with CRUD tools, multi-item borrowing, approval flow, and admin dashboard."},
  "proj.lab.badge": {"id": "Sistem Peminjaman", "en": "Borrowing System"},

  "proj.desadigital.title": {"id": "Desa Digital v2", "en": "Desa Digital v2"},
  "proj.desadigital.desc": {"id": "Portal desa terintegrasi dengan fitur profil desa, demografi, berita, pelayanan administrasi, peta interaktif, pasar desa/UMKM, dan manajemen pengguna.", "en": "Integrated village portal featuring village profile, demographics, news, admin services, interactive map, village market/UMKM, and user management."},
  "proj.desadigital.badge": {"id": "Sistem Informasi Desa", "en": "Village Information System"},

  "proj.landing.title": {"id": "NovaTech Landing Page", "en": "NovaTech Landing Page"},
  "proj.landing.desc": {"id": "Landing page jasa pembuatan website profesional. Responsif, mobile-friendly, dengan navigasi smooth, pricing section, dan WhatsApp integration.", "en": "Professional web services landing page. Responsive, mobile-friendly, with smooth navigation, pricing section, and WhatsApp integration."},
  "proj.landing.badge": {"id": "Jasa Web", "en": "Web Services"},

  "proj.company.title": {"id": "Company Profile Template", "en": "Company Profile Template"},
  "proj.company.desc": {"id": "Template company profile profesional multi-halaman dengan hero section, tentang kami, layanan, galeri, kontak form, dan footer.", "en": "Professional multi-page company profile template with hero section, about us, services, gallery, contact form, and footer."},
  "proj.company.badge": {"id": "Template Bisnis", "en": "Business Template"},

  "proj.pos.title": {"id": "Sistem POS Warung", "en": "POS System"},
  "proj.pos.desc": {"id": "Sistem Point of Sale untuk warung kelontong dengan fitur POS kasir interaktif, manajemen stok produk (50+ produk real), CRUD kategori & produk, laporan revenue, cetak struk, dan data dummy barang warung lengkap.", "en": "Point of Sale system for grocery stores with interactive POS interface, product stock management (50+ real products), category & product CRUD, revenue reports, receipt printing, and complete grocery product data."},
  "proj.pos.badge": {"id": "Point of Sale", "en": "Point of Sale"},

  "contact.email": {"id": "Email", "en": "Email"},
  "contact.linkedin": {"id": "LinkedIn", "en": "LinkedIn"},
  "contact.location": {"id": "Lokasi", "en": "Location"},
  "contact.locdetail": {"id": "Indonesia", "en": "Indonesia"},
  "contact.conn": {"id": "Terhubung dengan saya", "en": "Connect with me"},`;

// Inject new keys into the Alpine store (before closing )
// Find the `Alpine.magic` script and inject dict before it
html = html.replace(
  "document.addEventListener('alpine:init', () => {",
  "document.addEventListener('alpine:init', () => {\n" +
  "    Alpine.store('dict', {\n" +
  `      ${newKeys.trim()}\n` +
  "    });"
);

fs.writeFileSync(path, html);
console.log('✅ New translation keys injected');
console.log('Lines:', html.split('\n').length);
