import json, re

with open('C:/Users/mgfa9/Project/personal-profile/translations.json', 'r', encoding='utf-8') as f:
    dict_data = json.load(f)

# Update Manulife (current job - user confirmed IT Full Stack Engineer)
dict_data["exp.manulife.title"] = {"id": "IT Full Stack Engineer", "en": "IT Full Stack Engineer"}
dict_data["exp.manulife.company"] = {"id": "Manulife Indonesia", "en": "Manulife Indonesia"}
dict_data["exp.manulife.date"] = {"id": "Jun 2025 - Sekarang", "en": "Jun 2025 - Present"}
dict_data["exp.manulife.d1"] = {"id": "Mengembangkan dan memelihara aplikasi internal perusahaan", "en": "Develop and maintain internal company applications"}
dict_data["exp.manulife.d2"] = {"id": "Berkolaborasi dengan tim lintas fungsi untuk pengembangan fitur baru", "en": "Collaborate with cross-functional teams on new feature development"}

# Update ADINS - after ADINS ends (June 2025), but user said Manulife is current
# Keep ADINS as previous role
dict_data["exp.adins.title"] = {"id": "Senior Software Developer", "en": "Senior Software Developer"}
dict_data["exp.adins.company"] = {"id": "PT ADINS", "en": "PT ADINS"}
dict_data["exp.adins.date"] = {"id": "Jun 2024 - Jun 2025", "en": "Jun 2024 - Jun 2025"}
dict_data["exp.adins.d1"] = {"id": "Berkontribusi pada proyek Hyundai Capital: AMS & CMS", "en": "Contributed to Hyundai Capital project: AMS & CMS"}
dict_data["exp.adins.d2"] = {"id": "Mengawasi proses development dan memastikan milestone tercapai tepat waktu", "en": "Supervised development processes, ensured milestones met on time"}
dict_data["exp.adins.d3"] = {"id": "Menggunakan .NET untuk backend, Angular untuk frontend, PostgreSQL untuk database", "en": "Used .NET for backend, Angular for frontend, PostgreSQL for database"}
dict_data["exp.adins.d4"] = {"id": "Mengimplementasikan RabbitMQ untuk message queueing dan Camunda untuk otomatisasi proses", "en": "Implemented RabbitMQ for message queueing and Camunda for process automation"}
dict_data["exp.adins.d5"] = {"id": "Integrasi sistem pihak ketiga: Asuransi Sinarmas, KBRU, PT Delima, Softphone", "en": "Third-party integration: Asuransi Sinarmas, KBRU, PT Delima, Softphone"}

# Update OCBC
dict_data["exp.ocbc.title"] = {"id": "Software Developer", "en": "Software Developer"}
dict_data["exp.ocbc.company"] = {"id": "Bank OCBC NISP", "en": "Bank OCBC NISP"}
dict_data["exp.ocbc.date"] = {"id": "Mei 2022 - Mei 2024", "en": "May 2022 - May 2024"}
dict_data["exp.ocbc.d1"] = {"id": "Mengembangkan 6+ proyek internal dengan arsitektur microservices", "en": "Developed 6+ internal projects using microservices architecture"}
dict_data["exp.ocbc.d2"] = {"id": "Membuat test scenario, SIT, dan memimpin UAT", "en": "Created test scenarios, SIT, and led UAT"}
dict_data["exp.ocbc.d3"] = {"id": "Optimasi SQL query, debugging environment development & production", "en": "Optimized SQL queries, debugged dev & production environments"}
dict_data["exp.ocbc.d4"] = {"id": "Menggunakan .NET (C#, ASP.NET Core, Web API), Angular, SQL Server", "en": "Used .NET (C#, ASP.NET Core, Web API), Angular, SQL Server"}
dict_data["exp.ocbc.d5"] = {"id": "Bekerja dengan Apache Kafka sebagai message broker", "en": "Worked with Apache Kafka as message broker"}

# Add Morning Glory (replacing MGE or adding new)
dict_data["exp.mge.title"] = {"id": "Web Programmer", "en": "Web Programmer"}
dict_data["exp.mge.company"] = {"id": "Morning Glory Enterprise", "en": "Morning Glory Enterprise"}
dict_data["exp.mge.date"] = {"id": "Nov 2020 - Feb 2021", "en": "Nov 2020 - Feb 2021"}
dict_data["exp.mge.d1"] = {"id": "Berkolaborasi dengan tim untuk testing dan refinement aplikasi", "en": "Collaborated with team on testing and application refinement"}
dict_data["exp.mge.d2"] = {"id": "Mengembangkan frontend responsif berdasarkan UI/UX design", "en": "Developed responsive frontend based on UI/UX designs"}
dict_data["exp.mge.d3"] = {"id": "Mendesain dan menstruktur skema database", "en": "Designed and structured database schemas"}
dict_data["exp.mge.d4"] = {"id": "Mengidentifikasi dan memperbaiki bug selama development", "en": "Identified and resolved bugs during development"}

# Update Drago
dict_data["exp.drago.title"] = {"id": "Junior Backend Developer", "en": "Junior Backend Developer"}
dict_data["exp.drago.company"] = {"id": "PT Drago Kreatifindo", "en": "PT Drago Kreatifindo"}
dict_data["exp.drago.date"] = {"id": "Agu 2019 - Agu 2020", "en": "Aug 2019 - Aug 2020"}
dict_data["exp.drago.d1"] = {"id": "Membantu senior backend developer membangun dan memelihara aplikasi web", "en": "Assisted senior backend developers in building web applications"}
dict_data["exp.drago.d2"] = {"id": "Memantau performa aplikasi dan memperbaiki bug", "en": "Monitored app performance and fixed bugs"}
dict_data["exp.drago.d3"] = {"id": "Mengembangkan REST API untuk aplikasi mobile dan web", "en": "Developed REST APIs for mobile and web apps"}
dict_data["exp.drago.d4"] = {"id": "Membangun sistem menggunakan PHP Laravel dan MySQL", "en": "Built systems using PHP Laravel and MySQL"}

# Remove OCBC d5 (only 4 items in CV)
# Keep all 5 as-is

with open('C:/Users/mgfa9/Project/personal-profile/translations.json', 'w', encoding='utf-8') as f:
    json.dump(dict_data, f, indent=2, ensure_ascii=False)

print(f"Updated {len(dict_data)} keys")
print("Manulife title:", dict_data["exp.manulife.title"])
print("OCBC title:", dict_data["exp.ocbc.title"])
