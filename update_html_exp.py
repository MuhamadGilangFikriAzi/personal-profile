import re, json

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Manulife section (current job - IT Full Stack Engineer)
old_manulife = """<div class="relative pl-8 border-l-2 border-blue-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.manulife.title')">IT Full Stack Engineer</h3>
                                <p class="text-blue-600 font-medium" x-text="$t('exp.manulife.company')">Manulife</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.manulife.date')">Jul 2025 - Present</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li><span x-html="$t('exp.manulife.d1')">Developed <strong>PDLINK Web Agent</strong> for Manulife's partner banks: <strong>DBS</strong> and <strong>Danamon</strong>.</span></li>
                            <li><span x-html="$t('exp.manulife.d2')">Built using <strong>.NET (VB)</strong> for backend, <strong>Angular</strong> for frontend, and <strong>Oracle</strong> for database.</span></li>
                        </ul>
                    </div>
                </div>"""

new_manulife = """<div class="relative pl-8 border-l-2 border-blue-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.manulife.title')">IT Full Stack Engineer</h3>
                                <p class="text-blue-600 font-medium" x-text="$t('exp.manulife.company')">Manulife Indonesia</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.manulife.date')">Jun 2025 - Present</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li x-html="$t('exp.manulife.d1')">Mengembangkan dan memelihara aplikasi internal perusahaan</li>
                            <li x-html="$t('exp.manulife.d2')">Berkolaborasi dengan tim lintas fungsi untuk pengembangan fitur baru</li>
                        </ul>
                    </div>
                </div>"""

html = html.replace(old_manulife, new_manulife)

# 2. Update ADINS section (Senior Software Developer)
old_adins = """<div class="relative pl-8 border-l-2 border-indigo-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.adins.title')">Senior Software Developer</h3>
                                <p class="text-indigo-600 font-medium" x-text="$t('exp.adins.company')">PT Adicipta Inovasi Teknologi (PT ADINS)</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.adins.date')">Jun 2024 - Present</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li><span x-html="$t('exp.adins.d1')">Contributed to the <strong>Hyundai Capital</strong> project - delivered key modules: AMS (Asset Management System) & CMS (Collection Management System).</span></li>
                            <li><span x-html="$t('exp.adins.d2')">Supervised development processes, ensured milestones met on time with high-quality standards.</span></li>
                            <li><span x-html="$t('exp.adins.d3')">Utilized <strong>.NET</strong> for backend, <strong>Angular</strong> for frontend, and <strong>PostgreSQL</strong> for database management.</span></li>
                            <li><span x-html="$t('exp.adins.d4')">Implemented <strong>RabbitMQ</strong> for message queueing and <strong>Camunda</strong> for business process automation.</span></li>
                            <li><span x-html="$t('exp.adins.d5')">Integrated multiple third-party systems: Asuransi Sinarmas, KBRU (regional bank), PT Delima (fiduciary), and Softphone system.</span></li>
                        </ul>
                    </div>
                </div>"""

new_adins = """<div class="relative pl-8 border-l-2 border-indigo-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.adins.title')">Senior Software Developer</h3>
                                <p class="text-indigo-600 font-medium" x-text="$t('exp.adins.company')">PT ADINS</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.adins.date')">Jun 2024 - Jun 2025</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li x-html="$t('exp.adins.d1')">Berkontribusi pada proyek Hyundai Capital: AMS & CMS</li>
                            <li x-html="$t('exp.adins.d2')">Mengawasi proses development dan memastikan milestone tercapai tepat waktu</li>
                            <li x-html="$t('exp.adins.d3')">.NET backend, Angular frontend, PostgreSQL database</li>
                            <li x-html="$t('exp.adins.d4')">RabbitMQ message queueing & Camunda process automation</li>
                            <li x-html="$t('exp.adins.d5')">Integrasi pihak ketiga: Asuransi Sinarmas, KBRU, PT Delima, Softphone</li>
                        </ul>
                    </div>
                </div>"""

html = html.replace(old_adins, new_adins)

# 3. Update OCBC section (Software Developer)
old_ocbc = """<div class="relative pl-8 border-l-2 border-purple-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.ocbc.title')">Agile Trainee Program</h3>
                                <p class="text-purple-600 font-medium" x-text="$t('exp.ocbc.company')">OCBC NISP</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.ocbc.date')">Agu 2018 - Okt 2019</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li><span x-html="$t('exp.ocbc.d1')">Completed Agile trainee program.</span></li>
                            <li><span x-html="$t('exp.ocbc.d2')">Contributed to digital banking application development</span></li>
                            <li><span x-html="$t('exp.ocbc.d3')">Learned Scrum, Kanban, and CI/CD pipeline</span></li>
                            <li><span x-html="$t('exp.ocbc.d4')">Participated in daily standups &amp; sprint planning</span></li>
                            <li><span x-html="$t('exp.ocbc.d5')">Created technical documentation</span></li>
                        </ul>
                    </div>
                </div>"""

new_ocbc = """<div class="relative pl-8 border-l-2 border-purple-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.ocbc.title')">Software Developer</h3>
                                <p class="text-purple-600 font-medium" x-text="$t('exp.ocbc.company')">Bank OCBC NISP</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.ocbc.date')">Mei 2022 - Mei 2024</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li x-html="$t('exp.ocbc.d1')">6+ proyek internal microservices</li>
                            <li x-html="$t('exp.ocbc.d2')">Test scenario, SIT, dan UAT</li>
                            <li x-html="$t('exp.ocbc.d3')">Optimasi SQL & debugging production</li>
                            <li x-html="$t('exp.ocbc.d4')">.NET (C#, ASP.NET Core, Web API), Angular, SQL Server</li>
                            <li x-html="$t('exp.ocbc.d5')">Apache Kafka message broker</li>
                        </ul>
                    </div>
                </div>"""

html = html.replace(old_ocbc, new_ocbc)

# 4. Update MGE -> Morning Glory
old_mge = """<div class="relative pl-8 border-l-2 border-emerald-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.mge.title')">Full Stack Developer</h3>
                                <p class="text-emerald-600 font-medium" x-text="$t('exp.mge.company')">PT Mitra Global Edukasi</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.mge.date')">Des 2022 - Nov 2024</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li><span x-html="$t('exp.mge.d1')">Built Laravel-based LMS platform</span></li>
                            <li><span x-html="$t('exp.mge.d2')">AWS EC2 &amp; RDS production servers</span></li>
                            <li><span x-html="$t('exp.mge.d3')">REST API for internal integration</span></li>
                            <li><span x-html="$t('exp.mge.d4')">Mentored junior developers</span></li>
                        </ul>
                    </div>
                </div>"""

new_morning = """<div class="relative pl-8 border-l-2 border-emerald-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.mge.title')">Web Programmer</h3>
                                <p class="text-emerald-600 font-medium" x-text="$t('exp.mge.company')">Morning Glory Enterprise</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.mge.date')">Nov 2020 - Feb 2021</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li x-html="$t('exp.mge.d1')">Testing dan refinement aplikasi</li>
                            <li x-html="$t('exp.mge.d2')">Frontend responsif dari UI/UX design</li>
                            <li x-html="$t('exp.mge.d3')">Design skema database</li>
                            <li x-html="$t('exp.mge.d4')">Identifikasi & perbaikan bug</li>
                        </ul>
                    </div>
                </div>"""

html = html.replace(old_mge, new_morning)

# 5. Update Drago section (Junior Backend Developer)
old_drago = """<div class="relative pl-8 border-l-2 border-rose-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-rose-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.drago.title')">Junior Web Developer</h3>
                                <p class="text-rose-600 font-medium" x-text="$t('exp.drago.company')">CV Drago Kreasi Indonesia</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.drago.date')">Jul 2021 - Nov 2022</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li><span x-html="$t('exp.drago.d1')">Developed company profile &amp; landing pages</span></li>
                            <li><span x-html="$t('exp.drago.d2')">Migrated WordPress to static sites</span></li>
                            <li><span x-html="$t('exp.drago.d3')">VPS deployment (DigitalOcean)</span></li>
                            <li><span x-html="$t('exp.drago.d4')">UI/UX implementation with design team</span></li>
                        </ul>
                    </div>
                </div>"""

new_drago = """<div class="relative pl-8 border-l-2 border-rose-200">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 bg-rose-600 rounded-full timeline-dot"></div>
                    <div class="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
                        <div class="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 text-lg" x-text="$t('exp.drago.title')">Junior Backend Developer</h3>
                                <p class="text-rose-600 font-medium" x-text="$t('exp.drago.company')">PT Drago Kreatifindo</p>
                            </div>
                            <span class="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border" x-text="$t('exp.drago.date')">Agu 2019 - Agu 2020</span>
                        </div>
                        <ul class="text-gray-500 text-sm mt-3 space-y-1.5 list-disc list-inside">
                            <li x-html="$t('exp.drago.d1')">Membantu build & maintain aplikasi web</li>
                            <li x-html="$t('exp.drago.d2')">Monitoring performa & fix bug</li>
                            <li x-html="$t('exp.drago.d3')">REST API untuk mobile & web</li>
                            <li x-html="$t('exp.drago.d4')">PHP Laravel & MySQL</li>
                        </ul>
                    </div>
                </div>"""

html = html.replace(old_drago, new_drago)

# Save
with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML updated successfully")
print(f"Size: {len(html)} chars")
