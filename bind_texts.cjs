const fs = require('fs');
const path = 'C:/Users/mgfa9/Project/personal-profile/index.html';

let html = fs.readFileSync(path, 'utf-8');

// ====== BIND EXISTING TEXT TO TRANSLATION KEYS ======

const replacements = [
  // === EXPERIENCE HEADERS ===
  // Manulife
  ['<h3 class="font-bold text-gray-800 text-lg">IT Full Stack Engineer</h3>', '<h3 class="font-bold text-gray-800 text-lg" x-text="\\$t(\'exp.manulife.title\')">IT Full Stack Engineer</h3>'],
  ['<p class="text-blue-600 font-medium">Manulife</p>', '<p class="text-blue-600 font-medium" x-text="\\$t(\'exp.manulife.company\')">Manulife</p>'],
  ['<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">Jul 2025 — Present</span>', '<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="\\$t(\'exp.manulife.date\')">Jul 2025 — Present</span>'],
  ['>Developed <strong>PDLINK Web Agent</strong> for Manulife\'s partner banks: <strong>DBS</strong> and <strong>Danamon</strong>.<', '><span x-html="$t(\'exp.manulife.d1\')">Developed <strong>PDLINK Web Agent</strong> for Manulife\'s partner banks: <strong>DBS</strong> and <strong>Danamon</strong>.</span><'],
  ['>Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database.<', '><span x-html="$t(\'exp.manulife.d2\')">Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database.</span><'],

  // Adicipta
  ['<h3 class="font-bold text-gray-800 text-lg">Senior Software Developer</h3>', '<h3 class="font-bold text-gray-800 text-lg" x-text="\\$t(\'exp.adins.title\')">Senior Software Developer</h3>'],
  ['<p class="text-indigo-600 font-medium">PT Adicipta Inovasi Teknologi (PT ADINS)</p>', '<p class="text-indigo-600 font-medium" x-text="\\$t(\'exp.adins.company\')">PT Adicipta Inovasi Teknologi (PT ADINS)</p>'],
  ['<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">Jun 2024 — Present</span>', '<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="\\$t(\'exp.adins.date\')">Jun 2024 — Present</span>'],
  ['>Contributed to the <strong>Hyundai Capital</strong> project — delivered key modules: AMS (Asset Management System) & CMS (Collection Management System).<', '><span x-html="$t(\'exp.adins.d1\')">Contributed to the <strong>Hyundai Capital</strong> project — delivered key modules: AMS (Asset Management System) & CMS (Collection Management System).</span><'],
  ['>Supervised development processes, ensured milestones met on time with high-quality standards.<', '><span x-html="$t(\'exp.adins.d2\')">Supervised development processes, ensured milestones met on time with high-quality standards.</span><'],
  ['>Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management.<', '><span x-html="$t(\'exp.adins.d3\')">Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management.</span><'],
  ['>Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation.<', '><span x-html="$t(\'exp.adins.d4\')">Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation.</span><'],
  ['>Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system.<', '><span x-html="$t(\'exp.adins.d5\')">Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system.</span><'],

  // OCBC
  ['<h3 class="font-bold text-gray-800 text-lg">Software Developer</h3>', '<h3 class="font-bold text-gray-800 text-lg" x-text="\\$t(\'exp.ocbc.title\')">Software Developer</h3>'],
  ['<p class="text-purple-600 font-medium">Bank OCBC NISP</p>', '<p class="text-purple-600 font-medium" x-text="\\$t(\'exp.ocbc.company\')">Bank OCBC NISP</p>'],
  ['<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">May 2022 — May 2024</span>', '<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="\\$t(\'exp.ocbc.date\')">May 2022 — May 2024</span>'],
  ['>Developed and enhanced <strong>6+ internal projects</strong> using <strong>microservices architecture</strong>.<', '><span x-html="$t(\'exp.ocbc.d1\')">Developed and enhanced <strong>6+ internal projects</strong> using <strong>microservices architecture</strong>.</span><'],
  ['>Created test scenarios, conducted SIT, and led UAT to ensure features met business requirements.<', '><span x-html="$t(\'exp.ocbc.d2\')">Created test scenarios, conducted SIT, and led UAT to ensure features met business requirements.</span><'],
  ['>Optimized SQL queries, debugged issues across dev and production, handled system integration between legacy and modern platforms.<', '><span x-html="$t(\'exp.ocbc.d3\')">Optimized SQL queries, debugged issues across dev and production, handled system integration between legacy and modern platforms.</span><'],
  ['>Used <strong>.NET (C#, ASP.NET Core, Web API)</strong> for backend, <strong>Angular</strong> for frontend, <strong>SQL Server</strong> for database.<', '><span x-html="$t(\'exp.ocbc.d4\')">Used <strong>.NET (C#, ASP.NET Core, Web API)</strong> for backend, <strong>Angular</strong> for frontend, <strong>SQL Server</strong> for database.</span><'],
  ['>Worked with <strong>Apache Kafka</strong> as message broker for distributed systems & asynchronous communication.<', '><span x-html="$t(\'exp.ocbc.d5\')">Worked with <strong>Apache Kafka</strong> as message broker for distributed systems & asynchronous communication.</span><'],

  // MGE
  ['<h3 class="font-bold text-gray-800 text-lg">Web Programmer</h3>', '<h3 class="font-bold text-gray-800 text-lg" x-text="\\$t(\'exp.mge.title\')">Web Programmer</h3>'],
  ['<p class="text-amber-600 font-medium">Morning Glory Enterprise</p>', '<p class="text-amber-600 font-medium" x-text="\\$t(\'exp.mge.company\')">Morning Glory Enterprise</p>'],
  ['<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">Nov 2020 — Feb 2021</span>', '<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="\\$t(\'exp.mge.date\')">Nov 2020 — Feb 2021</span>'],
  ['>Collaborated with team to test applications and refine functionality based on feedback.<', '><span x-html="$t(\'exp.mge.d1\')">Collaborated with team to test applications and refine functionality based on feedback.</span><'],
  ['>Developed responsive front-end interfaces based on UI/UX designs.<', '><span x-html="$t(\'exp.mge.d2\')">Developed responsive front-end interfaces based on UI/UX designs.</span><'],
  ['>Designed and structured database schemas to meet system requirements.<', '><span x-html="$t(\'exp.mge.d3\')">Designed and structured database schemas to meet system requirements.</span><'],
  ['>Identified and resolved bugs during development, ensuring stability and performance.<', '><span x-html="$t(\'exp.mge.d4\')">Identified and resolved bugs during development, ensuring stability and performance.</span><'],

  // Drago
  ['<h3 class="font-bold text-gray-800 text-lg">Junior Backend Developer</h3>', '<h3 class="font-bold text-gray-800 text-lg" x-text="\\$t(\'exp.drago.title\')">Junior Backend Developer</h3>'],
  ['<p class="text-rose-600 font-medium">PT Drago Kreatifindo</p>', '<p class="text-rose-600 font-medium" x-text="\\$t(\'exp.drago.company\')">PT Drago Kreatifindo</p>'],
  ['<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">Aug 2019 — Aug 2020</span>', '<span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="\\$t(\'exp.drago.date\')">Aug 2019 — Aug 2020</span>'],
  ['>Assisted senior back-end developers in building and maintaining web applications.<', '><span x-html="$t(\'exp.drago.d1\')">Assisted senior back-end developers in building and maintaining web applications.</span><'],
  ['>Monitored application performance and resolved bugs and system errors.<', '><span x-html="$t(\'exp.drago.d2\')">Monitored application performance and resolved bugs and system errors.</span><'],
  ['>Developed RESTful APIs to support mobile and web applications.<', '><span x-html="$t(\'exp.drago.d3\')">Developed RESTful APIs to support mobile and web applications.</span><'],
  ['>Built systems using <strong>PHP Laravel</strong> as main framework and <strong>MySQL</strong> for database.<', '><span x-html="$t(\'exp.drago.d4\')">Built systems using <strong>PHP Laravel</strong> as main framework and <strong>MySQL</strong> for database.</span><'],

  // === PROJECT CARDS ===
  // Lab Equipment
  ['<div class="text-xl font-bold">Lab Equipment</div>', '<div class="text-xl font-bold" x-text="\\$t(\'proj.lab.title\')">Lab Equipment</div>'],
  ['<div class="text-xs text-blue-200">Borrowing System</div>', '<div class="text-xs text-blue-200" x-text="\\$t(\'proj.lab.badge\')">Borrowing System</div>'],
  ['<h3 class="font-bold text-gray-800 mb-2">Lab Equipment Borrowing System</h3>', '<h3 class="font-bold text-gray-800 mb-2" x-text="\\$t(\'proj.lab.title\')">Lab Equipment Borrowing System</h3>'],
  ['<p class="text-sm text-gray-500 mb-4">Sistem peminjaman alat laboratorium berbasis web dengan fitur CRUD alat, peminjaman multi-item, approval flow, dan dashboard admin.</p>', '<p class="text-sm text-gray-500 mb-4" x-text="\\$t(\'proj.lab.desc\')">Sistem peminjaman alat laboratorium berbasis web dengan fitur CRUD alat, peminjaman multi-item, approval flow, dan dashboard admin.</p>'],

  // Desa Digital
  ['<div class="text-xl font-bold">Desa Digital</div>', '<div class="text-xl font-bold" x-text="\\$t(\'proj.desadigital.title\')">Desa Digital</div>'],
  ['<div class="text-xs text-emerald-200">Village Information System</div>', '<div class="text-xs text-emerald-200" x-text="\\$t(\'proj.desadigital.badge\')">Village Information System</div>'],
  ['<h3 class="font-bold text-gray-800 mb-2">Desa Digital v2</h3>', '<h3 class="font-bold text-gray-800 mb-2" x-text="\\$t(\'proj.desadigital.title\')">Desa Digital v2</h3>'],
  ['<p class="text-sm text-gray-500 mb-4">Portal desa terintegrasi dengan fitur profil desa, demografi, berita, pelayanan administrasi, peta interaktif, pasar desa/UMKM, dan manajemen pengguna.</p>', '<p class="text-sm text-gray-500 mb-4" x-text="\\$t(\'proj.desadigital.desc\')">Portal desa terintegrasi dengan fitur profil desa, demografi, berita, pelayanan administrasi, peta interaktif, pasar desa/UMKM, dan manajemen pengguna.</p>'],

  // NovaTech Landing
  ['<div class="text-xl font-bold">Landing Page</div>', '<div class="text-xl font-bold" x-text="\\$t(\'proj.landing.title\')">Landing Page</div>'],
  ['<div class="text-xs text-amber-200">Web Services</div>', '<div class="text-xs text-amber-200" x-text="\\$t(\'proj.landing.badge\')">Web Services</div>'],
  ['<h3 class="font-bold text-gray-800 mb-2">NovaTech Landing Page</h3>', '<h3 class="font-bold text-gray-800 mb-2" x-text="\\$t(\'proj.landing.title\')">NovaTech Landing Page</h3>'],
  ['<p class="text-sm text-gray-500 mb-4">Landing page jasa pembuatan website profesional. Responsif, mobile-friendly, dengan navigasi smooth, pricing section, dan WhatsApp integration.</p>', '<p class="text-sm text-gray-500 mb-4" x-text="\\$t(\'proj.landing.desc\')">Landing page jasa pembuatan website profesional. Responsif, mobile-friendly, dengan navigasi smooth, pricing section, dan WhatsApp integration.</p>'],

  // Company Profile
  ['<div class="text-xl font-bold">Company Profile</div>', '<div class="text-xl font-bold" x-text="\\$t(\'proj.company.title\')">Company Profile</div>'],
  ['<div class="text-xs text-fuchsia-200">Business Template</div>', '<div class="text-xs text-fuchsia-200" x-text="\\$t(\'proj.company.badge\')">Business Template</div>'],
  ['<h3 class="font-bold text-gray-800 mb-2">Company Profile Template</h3>', '<h3 class="font-bold text-gray-800 mb-2" x-text="\\$t(\'proj.company.title\')">Company Profile Template</h3>'],
  ['<p class="text-sm text-gray-500 mb-4">Template company profile profesional multi-halaman dengan hero section, tentang kami, layanan, galeri, kontak form, dan footer.</p>', '<p class="text-sm text-gray-500 mb-4" x-text="\\$t(\'proj.company.desc\')">Template company profile profesional multi-halaman dengan hero section, tentang kami, layanan, galeri, kontak form, dan footer.</p>'],

  // POS System
  ['<div class="text-xl font-bold">POS System</div>', '<div class="text-xl font-bold" x-text="\\$t(\'proj.pos.title\')">POS System</div>'],
  ['<div class="text-xs text-lime-200">Point of Sale</div>', '<div class="text-xs text-lime-200" x-text="\\$t(\'proj.pos.badge\')">Point of Sale</div>'],
  ['<h3 class="font-bold text-gray-800 mb-2">Sistem POS Warung</h3>', '<h3 class="font-bold text-gray-800 mb-2" x-text="\\$t(\'proj.pos.title\')">Sistem POS Warung</h3>'],
  ['<p class="text-sm text-gray-500 mb-4">Sistem Point of Sale untuk warung kelontong dengan fitur POS kasir interaktif, manajemen stok produk (50+ produk real), CRUD kategori & produk, laporan revenue, cetak struk, dan data dummy barang warung lengkap.</p>', '<p class="text-sm text-gray-500 mb-4" x-text="\\$t(\'proj.pos.desc\')">Sistem Point of Sale untuk warung kelontong dengan fitur POS kasir interaktif, manajemen stok produk (50+ produk real), CRUD kategori & produk, laporan revenue, cetak struk, dan data dummy barang warung lengkap.</p>'],

  // === CONTACT ===
  ['<p class="font-semibold">Email</p>', '<p class="font-semibold" x-text="\\$t(\'contact.email\')">Email</p>'],
  ['<p class="font-semibold">LinkedIn</p>', '<p class="font-semibold" x-text="\\$t(\'contact.linkedin\')">LinkedIn</p>'],
  ['<p class="font-semibold">Location</p>', '<p class="font-semibold" x-text="\\$t(\'contact.location\')">Location</p>'],
  ['Connect with me', '<span x-text="$t(\'contact.conn\')">Connect with me</span>'],
  ['Indonesia', '<span x-text="$t(\'contact.locdetail\')">Indonesia</span>'],
];

let totalReplaced = 0;
for (const [from, to] of replacements) {
  // Use exact string replacement
  const idx = html.indexOf(from);
  if (idx !== -1) {
    html = html.split(from).join(to);
    totalReplaced++;
  }
}

// Write
fs.writeFileSync(path, html);
console.log(`✅ Replaced ${totalReplaced}/${replacements.length} text blocks`);
console.log('Lines:', html.split('\n').length);

// Verify some key replacements
const checks = [
  '$t(\'exp.manulife.title\')', 
  '$t(\'exp.ocbc.title\')',
  '$t(\'exp.drago.title\')',
  '$t(\'proj.lab.desc\')',
  '$t(\'proj.pos.desc\')',
];
for (const c of checks) {
  if (html.includes(c)) console.log(`  ✅ Found: ${c}`);
  else console.log(`  ❌ Missing: ${c}`);
}
