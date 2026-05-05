const fs = require('fs');
const path = 'C:/Users/mgfa9/Project/personal-profile/index.html';

let html = fs.readFileSync(path, 'utf-8');

// Dictionary
const dict = JSON.parse(fs.readFileSync('C:/Users/mgfa9/Project/personal-profile/translations.json', 'utf-8'));

// Add extra keys
Object.assign(dict, {
  "exp.manulife.title": {"id": "IT Full Stack Engineer", "en": "IT Full Stack Engineer"},
  "exp.manulife.company": {"id": "Manulife", "en": "Manulife"},
  "exp.manulife.date": {"id": "Jul 2025 — Sekarang", "en": "Jul 2025 — Present"},
  "exp.manulife.d1": {"id": "Mengembangkan <strong>PDLINK Web Agent</strong> untuk bank mitra Manulife. <strong>DBS</strong> dan <strong>Danamon</strong>.", "en": "Developed <strong>PDLINK Web Agent</strong> for Manulife's partner banks: <strong>DBS</strong> and <strong>Danamon</strong>."},
  "exp.manulife.d2": {"id": "Dibangun dengan <strong>.NET (VB)</strong> backend, <strong>Angular</strong> frontend, <strong>Oracle</strong> database.", "en": "Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database."},
  "exp.adins.title": {"id": "Senior Software Developer", "en": "Senior Software Developer"},
  "exp.adins.company": {"id": "PT Adicipta Inovasi Teknologi (PT ADINS)", "en": "PT Adicipta Inovasi Teknologi (PT ADINS)"},
  "exp.adins.date": {"id": "Jun 2024 — Sekarang", "en": "Jun 2024 — Present"},
  "exp.adins.d1": {"id": "Modul AMS & CMS proyek <strong>Hyundai Capital</strong>.", "en": "AMS & CMS modules for <strong>Hyundai Capital</strong>."},
  "exp.adins.d2": {"id": "Supervisi development, milestone tepat waktu.", "en": "Supervised development, on-time milestones."},
  "exp.adins.d3": {"id": "<strong>.NET</strong> backend, <strong>Angular</strong> frontend, <strong>PostgreSQL</strong> database.", "en": "<strong>.NET</strong> backend, <strong>Angular</strong> frontend, <strong>PostgreSQL</strong> database."},
  "exp.adins.d4": {"id": "<strong>RabbitMQ</strong> message queue + <strong>Camunda</strong> BPM.", "en": "<strong>RabbitMQ</strong> + <strong>Camunda</strong> BPM."},
  "exp.adins.d5": {"id": "Integrasi: Asuransi Sinarmas, KBRU, PT Delima, Softphone.", "en": "Integration: Sinarmas, KBRU, Delima, Softphone."},
  "exp.ocbc.title": {"id": "Software Developer", "en": "Software Developer"},
  "exp.ocbc.company": {"id": "Bank OCBC NISP", "en": "Bank OCBC NISP"},
  "exp.ocbc.date": {"id": "Mei 2022 — Mei 2024", "en": "May 2022 — May 2024"},
  "exp.ocbc.d1": {"id": "<strong>6+ proyek internal</strong> microservices.", "en": "<strong>6+ internal projects</strong> microservices."},
  "exp.ocbc.d2": {"id": "SIT, UAT, business requirements.", "en": "SIT, UAT, business requirements."},
  "exp.ocbc.d3": {"id": "SQL optimization, dev/prod debugging, legacy integration.", "en": "SQL optimization, dev/prod debugging, legacy integration."},
  "exp.ocbc.d4": {"id": "<strong>.NET (C#, Web API)</strong> + <strong>Angular</strong> + <strong>SQL Server</strong>.", "en": "<strong>.NET (C#, Web API)</strong> + <strong>Angular</strong> + <strong>SQL Server</strong>."},
  "exp.ocbc.d5": {"id": "<strong>Apache Kafka</strong> message broker.", "en": "<strong>Apache Kafka</strong> message broker."},
  "exp.mge.title": {"id": "Web Programmer", "en": "Web Programmer"},
  "exp.mge.company": {"id": "Morning Glory Enterprise", "en": "Morning Glory Enterprise"},
  "exp.mge.date": {"id": "Nov 2020 — Feb 2021", "en": "Nov 2020 — Feb 2021"},
  "exp.mge.d1": {"id": "Testing & refinement berdasarkan feedback.", "en": "Testing & refinement based on feedback."},
  "exp.mge.d2": {"id": "Front-end responsif dari desain UI/UX.", "en": "Responsive front-end from UI/UX designs."},
  "exp.mge.d3": {"id": "Desain skema database.", "en": "Database schema design."},
  "exp.mge.d4": {"id": "Bug fixing, stabilitas, performa.", "en": "Bug fixing, stability, performance."},
  "exp.drago.title": {"id": "Junior Backend Developer", "en": "Junior Backend Developer"},
  "exp.drago.company": {"id": "PT Drago Kreatifindo", "en": "PT Drago Kreatifindo"},
  "exp.drago.date": {"id": "Agu 2019 — Agu 2020", "en": "Aug 2019 — Aug 2020"},
  "exp.drago.d1": {"id": "Bantu senior developer bangun & maintain web apps.", "en": "Assisted senior devs build & maintain web apps."},
  "exp.drago.d2": {"id": "Monitor performa, fix bug & error sistem.", "en": "Monitor performance, fix bugs & errors."},
  "exp.drago.d3": {"id": "RESTful API untuk mobile & web.", "en": "RESTful APIs for mobile & web."},
  "exp.drago.d4": {"id": "<strong>PHP Laravel</strong> + <strong>MySQL</strong>.", "en": "<strong>PHP Laravel</strong> + <strong>MySQL</strong>."},
  "proj.lab.title": {"id": "Lab Equipment Borrowing System", "en": "Lab Equipment Borrowing System"},
  "proj.lab.badge": {"id": "Sistem Peminjaman", "en": "Borrowing System"},
  "proj.lab.desc": {"id": "Sistem peminjaman alat lab: CRUD alat, multi-item, approval, dashboard.", "en": "Lab borrowing system: CRUD, multi-item, approval, dashboard."},
  "proj.desadigital.title": {"id": "Desa Digital v2", "en": "Desa Digital v2"},
  "proj.desadigital.badge": {"id": "Sistem Informasi Desa", "en": "Village Info System"},
  "proj.desadigital.desc": {"id": "Portal desa: profil, demografi, berita, layanan, peta, pasar/UMKM, user management.", "en": "Village portal: profile, demographics, news, services, map, market/UMKM, user mgmt."},
  "proj.landing.title": {"id": "NovaTech Landing Page", "en": "NovaTech Landing Page"},
  "proj.landing.badge": {"id": "Jasa Web", "en": "Web Services"},
  "proj.landing.desc": {"id": "Landing page jasa website: responsif, pricing, WhatsApp integration.", "en": "Web services landing: responsive, pricing, WhatsApp."},
  "proj.company.title": {"id": "Company Profile Template", "en": "Company Profile Template"},
  "proj.company.badge": {"id": "Template Bisnis", "en": "Business Template"},
  "proj.company.desc": {"id": "Template company profile: hero, about, services, gallery, contact.", "en": "Company profile template: hero, about, services, gallery, contact."},
  "proj.pos.title": {"id": "Sistem POS Warung", "en": "POS System"},
  "proj.pos.badge": {"id": "Point of Sale", "en": "Point of Sale"},
  "proj.pos.desc": {"id": "POS warung: kasir interaktif, stok 50+ produk, CRUD, laporan, cetak struk.", "en": "Grocery POS: interactive, 50+ products, CRUD, reports, receipts."},
  "proj.live": {"id": "Demo Langsung", "en": "Live Demo"},
  "contact.email": {"id": "Email", "en": "Email"},
  "contact.linkedin": {"id": "LinkedIn", "en": "LinkedIn"},
  "contact.location": {"id": "Lokasi", "en": "Location"},
  "contact.locdetail": {"id": "Indonesia", "en": "Indonesia"},
  "contact.conn": {"id": "Terhubung dengan saya", "en": "Connect with me"},
});

// ============ HTML MODIFICATIONS ============

// 1. Body lang
html = html.replace(
  '<body x-data="{ mobileOpen: false }">',
  '<body x-data="{ lang: \'id\', mobileOpen: false }" x-init="if(localStorage.getItem(\'lang\')) lang = localStorage.getItem(\'lang\')">'
);

// 2. Lang switcher
html = html.replace(
  '<!-- NAVBAR -->',
  `<!-- LANG SWITCHER -->
    <div class="fixed top-20 right-4 z-[100] flex gap-1 rounded-full p-1 shadow-sm border"
         :class="scrolled ? 'bg-white/90 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-md'">
        <button @click="lang='id'; localStorage.setItem('lang','id')" :class="lang==='id' ? 'bg-blue-600 text-white shadow-sm' : (scrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/70 hover:text-white')" class="px-3 py-0.5 text-xs font-semibold rounded-full transition">ID</button>
        <button @click="lang='en'; localStorage.setItem('lang','en')" :class="lang==='en' ? 'bg-blue-600 text-white shadow-sm' : (scrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/70 hover:text-white')" class="px-3 py-0.5 text-xs font-semibold rounded-full transition">EN</button>
    </div>
    <!-- NAVBAR -->`
);

// 3. Helper: replace first occurrence only
const replaceOnce = (find, replace) => {
  const idx = html.indexOf(find);
  if (idx === -1) { console.log(`  NOT FOUND: "${find.substring(0, 60)}"`); return false; }
  html = html.substring(0, idx) + replace + html.substring(idx + find.length);
  return true;
};

// ===== Hero section =====
replaceOnce('Available for opportunities', '<span x-text="$t(\'hero.available\')">Available for opportunities</span>');
replaceOnce('Hi, I\'m <span class="gradient-text">Gilang</span>', '<span x-html="$t(\'hero.title\')">Hi, I\'m <span class="gradient-text">Gilang</span></span>');
replaceOnce('Software Developer with <span class="text-white font-semibold">5 years</span> of experience', '<span x-html="$t(\'hero.subtitle\')">Software Developer with <span class="text-white font-semibold">5 years</span> of experience</span>');
replaceOnce('Crafting robust backend systems and engaging frontend experiences &mdash; from .NET and Laravel to Angular and Tailwind.', '<span x-text="$t(\'hero.desc\')">Crafting robust backend systems and engaging frontend experiences &mdash; from .NET and Laravel to Angular and Tailwind.</span>');
replaceOnce('>View My Work<', ' x-text="$t(\'hero.view\')">View My Work<');
replaceOnce('>Contact Me<', ' x-text="$t(\'hero.contact\')">Contact Me<');

// ===== About =====
replaceOnce('>About Me<', ' x-text="$t(\'about.label\')">About Me<');
replaceOnce('>Passionate <span class="gradient-text">Full Stack</span> Developer<', '><span x-html="$t(\'about.title\')">Passionate <span class="gradient-text">Full Stack</span> Developer</span><');

// About paragraphs (use first occurrence - they're unique enough)
replaceOnce(
  'Software Developer with approximately <strong class="text-gray-800">5 years</strong> of experience, specializing in building enterprise-scale applications using microservices architecture. Currently working as <strong class="text-gray-800">IT Full Stack Engineer at Manulife</strong>. Previously served as <strong class="text-gray-800">Senior Developer at PT Adicipta Inovasi Teknologi</strong>, <strong class="text-gray-800">Software Developer at Bank OCBC NISP</strong>, <strong class="text-gray-800">Web Developer at Morning Glory Enterprise</strong>, and <strong class="text-gray-800">Junior Backend Developer at PT Drago Kreatifindo</strong>.',
  '<span x-html="$t(\'about.p1\')">Software Developer with approximately <strong class="text-gray-800">5 years</strong> of experience, specializing in building enterprise-scale applications using microservices architecture. Currently working as <strong class="text-gray-800">IT Full Stack Engineer at Manulife</strong>. Previously served as <strong class="text-gray-800">Senior Developer at PT Adicipta Inovasi Teknologi</strong>, <strong class="text-gray-800">Software Developer at Bank OCBC NISP</strong>, <strong class="text-gray-800">Web Developer at Morning Glory Enterprise</strong>, and <strong class="text-gray-800">Junior Backend Developer at PT Drago Kreatifindo</strong>.</span>'
);

replaceOnce(
  'Proficient in backend development with <strong>.NET (C#, VB), Laravel, CodeIgniter</strong>, and modern frontend with <strong>Angular, JavaScript, TypeScript</strong>. Experienced with <strong>Apache Kafka, RabbitMQ</strong> for message brokering and <strong>Camunda</strong> for business process automation. Skilled in <strong>PostgreSQL, SQL Server, MySQL, Oracle</strong> for database management. Comfortable with <strong>microservices architecture</strong> and third-party system integrations in large-scale national projects.',
  '<span x-html="$t(\'about.p2\')">Proficient in backend development with <strong>.NET (C#, VB), Laravel, CodeIgniter</strong>, and modern frontend with <strong>Angular, JavaScript, TypeScript</strong>. Experienced with <strong>Apache Kafka, RabbitMQ</strong> for message brokering and <strong>Camunda</strong> for business process automation. Skilled in <strong>PostgreSQL, SQL Server, MySQL, Oracle</strong> for database management. Comfortable with <strong>microservices architecture</strong> and third-party system integrations in large-scale national projects.</span>'
);

// Stat boxes - these have specific class patterns we can target
replaceOnce('>Years Exp<', ' x-text="$t(\'about.years\')">Years Exp<');
replaceOnce('>Companies<', ' x-text="$t(\'about.companies\')">Companies<');
replaceOnce('>Projects<', ' x-text="$t(\'about.projects\')">Projects<');
replaceOnce('>Technologies<', ' x-text="$t(\'about.tech\')">Technologies<');

// ===== Skills =====
replaceOnce('>Skills<', ' x-text="$t(\'skills.label\')">Skills<');
replaceOnce('>Tech Stack<', ' x-text="$t(\'skills.title\')">Tech Stack<');
replaceOnce('Technologies I work with on a daily basis', '<span x-text="$t(\'skills.desc\')">Technologies I work with on a daily basis</span>');
replaceOnce('>Backend<', ' x-text="$t(\'skills.backend\')">Backend<');
replaceOnce('>Frontend<', ' x-text="$t(\'skills.frontend\')">Frontend<');
replaceOnce('>Tools<', ' x-text="$t(\'skills.tools\')">Tools<');

// ===== Experience section headers =====
replaceOnce('>Experience<', ' x-text="$t(\'exp.label\')">Experience<');
replaceOnce('>Work History<', ' x-text="$t(\'exp.title\')">Work History<');
replaceOnce('My professional journey', '<span x-text="$t(\'exp.desc\')">My professional journey</span>');
replaceOnce('>Download CV<', ' x-text="$t(\'exp.dl\')">Download CV<');

// ===== Manulife =====
replaceOnce('>IT Full Stack Engineer<', ' x-text="$t(\'exp.manulife.title\')">IT Full Stack Engineer<');
replaceOnce('>Manulife<', ' x-text="$t(\'exp.manulife.company\')">Manulife<');
replaceOnce('>Jul 2025 — Present<', ' x-text="$t(\'exp.manulife.date\')">Jul 2025 — Present<');
replaceOnce('Developed <strong>PDLINK Web Agent</strong> for Manulife\'s partner banks: <strong>DBS</strong> and <strong>Danamon</strong>.', '<span x-html="$t(\'exp.manulife.d1\')">Developed <strong>PDLINK Web Agent</strong> for Manulife\'s partner banks: <strong>DBS</strong> and <strong>Danamon</strong>.</span>');
replaceOnce('Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database.', '<span x-html="$t(\'exp.manulife.d2\')">Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database.</span>');

// ===== Adicipta =====
replaceOnce('>Senior Software Developer<', ' x-text="$t(\'exp.adins.title\')">Senior Software Developer<');
replaceOnce('>PT Adicipta Inovasi Teknologi (PT ADINS)<', ' x-text="$t(\'exp.adins.company\')">PT Adicipta Inovasi Teknologi (PT ADINS)<');
replaceOnce('>Jun 2024 — Present<', ' x-text="$t(\'exp.adins.date\')">Jun 2024 — Present<');
replaceOnce('Contributed to the <strong>Hyundai Capital</strong> project — delivered key modules: AMS (Asset Management System) & CMS (Collection Management System).', '<span x-html="$t(\'exp.adins.d1\')">Contributed to the <strong>Hyundai Capital</strong> project — delivered key modules: AMS (Asset Management System) & CMS (Collection Management System).</span>');
replaceOnce('Supervised development processes, ensured milestones met on time with high-quality standards.', '<span x-html="$t(\'exp.adins.d2\')">Supervised development processes, ensured milestones met on time with high-quality standards.</span>');
replaceOnce('Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management.', '<span x-html="$t(\'exp.adins.d3\')">Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management.</span>');
replaceOnce('Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation.', '<span x-html="$t(\'exp.adins.d4\')">Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation.</span>');
replaceOnce('Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system.', '<span x-html="$t(\'exp.adins.d5\')">Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system.</span>');

// ===== OCBC =====
replaceOnce('>Software Developer<', ' x-text="$t(\'exp.ocbc.title\')">Software Developer<');
replaceOnce('>Bank OCBC NISP<', ' x-text="$t(\'exp.ocbc.company\')">Bank OCBC NISP<');
replaceOnce('>May 2022 — May 2024<', ' x-text="$t(\'exp.ocbc.date\')">May 2022 — May 2024<');
replaceOnce('Developed and enhanced <strong>6+ internal projects</strong> using <strong>microservices architecture</strong>.', '<span x-html="$t(\'exp.ocbc.d1\')">Developed and enhanced <strong>6+ internal projects</strong> using <strong>microservices architecture</strong>.</span>');
replaceOnce('Created test scenarios, conducted SIT, and led UAT to ensure features met business requirements.', '<span x-html="$t(\'exp.ocbc.d2\')">Created test scenarios, conducted SIT, and led UAT to ensure features met business requirements.</span>');
replaceOnce('Optimized SQL queries, debugged issues across dev and production, handled system integration between legacy and modern platforms.', '<span x-html="$t(\'exp.ocbc.d3\')">Optimized SQL queries, debugged issues across dev and production, handled system integration between legacy and modern platforms.</span>');
replaceOnce('Used <strong>.NET (C#, ASP.NET Core, Web API)</strong> for backend, <strong>Angular</strong> for frontend, <strong>SQL Server</strong> for database.', '<span x-html="$t(\'exp.ocbc.d4\')">Used <strong>.NET (C#, ASP.NET Core, Web API)</strong> for backend, <strong>Angular</strong> for frontend, <strong>SQL Server</strong> for database.</span>');
replaceOnce('Worked with <strong>Apache Kafka</strong> as message broker for distributed systems & asynchronous communication.', '<span x-html="$t(\'exp.ocbc.d5\')">Worked with <strong>Apache Kafka</strong> as message broker for distributed systems & asynchronous communication.</span>');

// ===== MGE =====
replaceOnce('>Web Programmer<', ' x-text="$t(\'exp.mge.title\')">Web Programmer<');
replaceOnce('>Morning Glory Enterprise<', ' x-text="$t(\'exp.mge.company\')">Morning Glory Enterprise<');
replaceOnce('>Nov 2020 — Feb 2021<', ' x-text="$t(\'exp.mge.date\')">Nov 2020 — Feb 2021<');
replaceOnce('Collaborated with team to test applications and refine functionality based on feedback.', '<span x-html="$t(\'exp.mge.d1\')">Collaborated with team to test applications and refine functionality based on feedback.</span>');
replaceOnce('Developed responsive front-end interfaces based on UI/UX designs.', '<span x-html="$t(\'exp.mge.d2\')">Developed responsive front-end interfaces based on UI/UX designs.</span>');
replaceOnce('Designed and structured database schemas to meet system requirements.', '<span x-html="$t(\'exp.mge.d3\')">Designed and structured database schemas to meet system requirements.</span>');
replaceOnce('Identified and resolved bugs during development, ensuring stability and performance.', '<span x-html="$t(\'exp.mge.d4\')">Identified and resolved bugs during development, ensuring stability and performance.</span>');

// ===== Drago =====
replaceOnce('>Junior Backend Developer<', ' x-text="$t(\'exp.drago.title\')">Junior Backend Developer<');
replaceOnce('>PT Drago Kreatifindo<', ' x-text="$t(\'exp.drago.company\')">PT Drago Kreatifindo<');
replaceOnce('>Aug 2019 — Aug 2020<', ' x-text="$t(\'exp.drago.date\')">Aug 2019 — Aug 2020<');
replaceOnce('Assisted senior back-end developers in building and maintaining web applications.', '<span x-html="$t(\'exp.drago.d1\')">Assisted senior back-end developers in building and maintaining web applications.</span>');
replaceOnce('Monitored application performance and resolved bugs and system errors.', '<span x-html="$t(\'exp.drago.d2\')">Monitored application performance and resolved bugs and system errors.</span>');
replaceOnce('Developed RESTful APIs to support mobile and web applications.', '<span x-html="$t(\'exp.drago.d3\')">Developed RESTful APIs to support mobile and web applications.</span>');
replaceOnce('Built systems using <strong>PHP Laravel</strong> as main framework and <strong>MySQL</strong> for database.', '<span x-html="$t(\'exp.drago.d4\')">Built systems using <strong>PHP Laravel</strong> as main framework and <strong>MySQL</strong> for database.</span>');

// ===== Projects =====
// These need careful targeting since short names like "Skills" and "Projects" appear multiple times
// Card badges (in gradient divs)
replaceOnce('>Borrowing System<', ' x-text="$t(\'proj.lab.badge\')">Borrowing System<');
replaceOnce('>Village Information System<', ' x-text="$t(\'proj.desadigital.badge\')">Village Information System<');
replaceOnce('>Web Services<', ' x-text="$t(\'proj.landing.badge\')">Web Services<');
replaceOnce('>Business Template<', ' x-text="$t(\'proj.company.badge\')">Business Template<');
replaceOnce('>Point of Sale<', ' x-text="$t(\'proj.pos.badge\')">Point of Sale<');

// h3 titles
replaceOnce('>Lab Equipment Borrowing System<', ' x-text="$t(\'proj.lab.title\')">Lab Equipment Borrowing System<');
replaceOnce('>NovaTech Landing Page<', ' x-text="$t(\'proj.landing.title\')">NovaTech Landing Page<');
replaceOnce('>Company Profile Template<', ' x-text="$t(\'proj.company.title\')">Company Profile Template<');
replaceOnce('>Sistem POS Warung<', ' x-text="$t(\'proj.pos.title\')">Sistem POS Warung<');

// Card descriptions
replaceOnce(
  'Sistem peminjaman alat laboratorium berbasis web dengan fitur CRUD alat, peminjaman multi-item, approval flow, dan dashboard admin.',
  '<span x-text="$t(\'proj.lab.desc\')">Sistem peminjaman alat laboratorium berbasis web dengan fitur CRUD alat, peminjaman multi-item, approval flow, dan dashboard admin.</span>'
);
replaceOnce(
  'Portal desa terintegrasi dengan fitur profil desa, demografi, berita, pelayanan administrasi, peta interaktif, pasar desa/UMKM, dan manajemen pengguna.',
  '<span x-text="$t(\'proj.desadigital.desc\')">Portal desa terintegrasi dengan fitur profil desa, demografi, berita, pelayanan administrasi, peta interaktif, pasar desa/UMKM, dan manajemen pengguna.</span>'
);
replaceOnce(
  'Landing page jasa pembuatan website profesional. Responsif, mobile-friendly, dengan navigasi smooth, pricing section, dan WhatsApp integration.',
  '<span x-text="$t(\'proj.landing.desc\')">Landing page jasa pembuatan website profesional. Responsif, mobile-friendly, dengan navigasi smooth, pricing section, dan WhatsApp integration.</span>'
);
replaceOnce(
  'Template company profile profesional multi-halaman dengan hero section, tentang kami, layanan, galeri, kontak form, dan footer.',
  '<span x-text="$t(\'proj.company.desc\')">Template company profile profesional multi-halaman dengan hero section, tentang kami, layanan, galeri, kontak form, dan footer.</span>'
);
replaceOnce(
  'Sistem Point of Sale untuk warung kelontong dengan fitur POS kasir interaktif, manajemen stok produk (50+ produk real), CRUD kategori & produk, laporan revenue, cetak struk, dan data dummy barang warung lengkap.',
  '<span x-text="$t(\'proj.pos.desc\')">Sistem Point of Sale untuk warung kelontong dengan fitur POS kasir interaktif, manajemen stok produk (50+ produk real), CRUD kategori & produk, laporan revenue, cetak struk, dan data dummy barang warung lengkap.</span>'
);

// Live Demo buttons
replaceOnce('>Live Demo<', ' x-text="$t(\'proj.live\')">Live Demo<');

// ===== Contact =====
replaceOnce('>Contact<', ' x-text="$t(\'contact.label\')">Contact<');
replaceOnce('>Let\'s Work Together<', ' x-text="$t(\'contact.title\')">Let\'s Work Together<');
replaceOnce('Have a project in mind or just want to chat? Feel free to reach out!', '<span x-text="$t(\'contact.desc\')">Have a project in mind or just want to chat? Feel free to reach out!</span>');
replaceOnce('>Email<', ' x-text="$t(\'contact.email\')">Email<');
replaceOnce('>LinkedIn<', ' x-text="$t(\'contact.linkedin\')">LinkedIn<');
replaceOnce('>Location<', ' x-text="$t(\'contact.location\')">Location<');
replaceOnce('Connect with me', '<span x-text="$t(\'contact.conn\')">Connect with me</span>');
replaceOnce('Indonesia', '<span x-text="$t(\'contact.locdetail\')">Indonesia</span>');

// ===== Nav items =====
// Desktop nav
replaceOnce('text-sm font-medium transition">About</a>', 'text-sm font-medium transition"><span x-text="$t(\'nav.about\')">About</span></a>');
replaceOnce('text-sm font-medium transition">Skills</a>', 'text-sm font-medium transition"><span x-text="$t(\'nav.skills\')">Skills</span></a>');
replaceOnce('text-sm font-medium transition">Experience</a>', 'text-sm font-medium transition"><span x-text="$t(\'nav.exp\')">Experience</span></a>');
replaceOnce('text-sm font-medium transition">Projects</a>', 'text-sm font-medium transition"><span x-text="$t(\'nav.proj\')">Projects</span></a>');
replaceOnce('rounded-xl">Contact</a>', 'rounded-xl"><span x-text="$t(\'nav.contact\')">Contact</span></a>');

// Mobile nav
replaceOnce('hover:bg-blue-50">About</a>', 'hover:bg-blue-50"><span x-text="$t(\'nav.about\')">About</span></a>');
replaceOnce('hover:bg-blue-50">Skills</a>', 'hover:bg-blue-50"><span x-text="$t(\'nav.skills\')">Skills</span></a>');
replaceOnce('hover:bg-blue-50">Experience</a>', 'hover:bg-blue-50"><span x-text="$t(\'nav.exp\')">Experience</span></a>');
replaceOnce('hover:bg-blue-50">Projects</a>', 'hover:bg-blue-50"><span x-text="$t(\'nav.proj\')">Projects</span></a>');
replaceOnce('text-center">Contact</a>', 'text-center"><span x-text="$t(\'nav.contact\')">Contact</span></a>');

// ===== Alpine init =====
const script = `
<script>
document.addEventListener('alpine:init', () => {
    Alpine.magic('t', () => key => {
        const dict = ${JSON.stringify(dict)};
        const el = document.querySelector('[x-data]');
        const lang = el ? el.__x.getUnobservedData().lang : 'id';
        return dict[key] ? dict[key][lang] : key;
    });
});
</script>
</body>`;

html = html.replace('</body>', script);

fs.writeFileSync(path, html);
console.log('✅ Done!');

// Final verification
const bad = (html.match(/\\\$t\(/g) || []).length;
const good = (html.match(/(?<!\\)\$t\(/g) || []).length;
const dw = (html.match(/<span[^>]*><span[^>]*\$t\(/g) || []).length;
console.log(`Bad \\\$t: ${bad}, Good \$t(): ${good}, Double-wrap: ${dw}`);
console.log(`Lines: ${html.split('\n').length}`);
