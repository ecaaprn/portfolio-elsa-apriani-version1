/**
 * Elsa Apriani Portfolio - Core JavaScript
 * Features: Multi-language (ID/EN), Dark/Light Mode, Filter, Scrollspy, Animations
 */

const translations = {
  id: {
    nav_home: "Home",
    nav_about: "About",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_project: "Projects",
    nav_contact: "Contact",

    hero_title: "Halo, aku <span>Elsa Apriani</span>",
    hero_nickname: "Biar makin akrab, panggil aku <strong>Ecaa</strong>",
    hero_desc: "Berfokus pada pengembangan antarmuka web yang responsif (Front-End), standarisasi dan tata kelola sistem (IT Governance), manajemen administrasi proyek TI (IT Project Administrator), serta penjaminan kualitas aplikasi (Quality Assurance).",

    badge_fe: '<i class="fas fa-code"></i> Front-End Developer',
    badge_gov: '<i class="fas fa-file-contract"></i> IT Governance',
    badge_admin: '<i class="fas fa-tasks"></i> IT Project Administrator',
    badge_qa: '<i class="fas fa-vial"></i> Quality Assurance Testing',

    about_title: "Tentang Aku",
    about_subtitle: "Profil singkat, latar belakang pendidikan, serta keahlian utama di bidang teknologi.",
    about_intro_1: 'Lulusan berprestasi Teknik Informatika (IPK 3.92/4.00) dari Universitas Muhammadiyah Prof. Dr. HAMKA dengan pengalaman 1+ tahun di bidang <strong style="color: var(--accent-pink);">IT Governance</strong>, <strong style="color: var(--accent-pink);">IT Project Administration</strong>, <strong style="color: var(--accent-pink);">Front-End Development</strong>, dan <strong style="color: var(--accent-pink);">Quality Assurance Testing</strong>.',
    about_intro_2: 'Selama perjalanan akademik dan profesional, saya telah berhasil menyelesaikan <strong style="color: var(--accent-pink);">10+ proyek berdampak</strong>. Pencapaian teknis utama meliputi perancangan dan dokumentasi <strong style="color: var(--accent-pink);">14 SOP IT Governance komprehensif</strong> (mencakup Backup, Hak Akses, dan operasional Data Center), pengembangan fitur web otomatis serta dashboard dinamis pada platform enterprise seperti <strong style="color: var(--accent-pink);">IVO E-Office</strong> dan <strong style="color: var(--accent-pink);">Tally HBT</strong>, serta memimpin <strong style="color: var(--accent-pink);">User Acceptance Testing (UAT)</strong>, <strong style="color: var(--accent-pink);">Functional Design Diagram (FDD)</strong>, <strong style="color: var(--accent-pink);">Technical Design Diagram (TDD)</strong>, dan tracking proyek melalui Project Charter. Selain itu, saya memegang beberapa sertifikat Hak Kekayaan Intelektual (HKI) serta publikasi jurnal terindeks SINTA.',
    about_intro_3: 'Saya aktif mencari peluang untuk berkontribusi menggunakan keahlian multidisiplin di bidang <strong style="color: var(--accent-pink);">IT Governance</strong>, <strong style="color: var(--accent-pink);">IT Project Administration</strong>, <strong style="color: var(--accent-pink);">Front-End Development</strong>, dan <strong style="color: var(--accent-pink);">Quality Assurance (QA) Testing</strong> guna membangun solusi TI yang andal dan berkualitas tinggi.',
    stat_exp: "Tahun Pengalaman",
    stat_proj: "Projects Selesai",
    skills_heading: "Keahlian Utama",
    tools_heading: "Tools yang Digunakan",

    edu_title: "Pendidikan dan Organisasi",
    edu_subtitle: "Perjalanan akademik, prestasi perguruan tinggi, dan pengalaman organisasi selama perkuliahan.",
    edu_degree: "Sarjana Teknik (S.T)",
    edu_univ: "Universitas Muhammadiyah Prof. DR. HAMKA (UHAMKA)",
    edu_major: 'S1 Teknik Informatika <span class="timeline-sep">|</span> <span class="edu-period">2021 - 2025</span>',
    edu_honors: '<i class="fas fa-award"></i> Lulusan Terbaik',
    edu_academic_desc: "Lulusan Terbaik Fakultas Teknologi Industri dan Informatika (FTII) UHAMKA dengan predikat Cum Laude. Memiliki fokus keahlian pada IT Governance, IT Project Administration, Front-End Development, dan Quality Assurance (QA) Testing.",

    // Organization Timeline ID
    date_aug24_nov24: "Agustus 2024 - November 2024",
    org1_role_company: 'Pengabdian Masyarakat Dosen <span class="timeline-sep">|</span> <span class="timeline-role-badge">Anggota</span>',
    org1_loc: '<i class="fas fa-map-marker-alt"></i> Bogor',
    org1_tasks: '<li>Membuat website untuk promosi wisata Arca Domas di Desa Sukaresmi, Bogor.</li><li>Menyusun naskah buku mengenai Eduekowisata Desa Sukaresmi.</li>',

    date_nov23_may24: "November 2023 - Mei 2024",
    org2_role_company: 'Panitia PKM Center FTII 2024 <span class="timeline-sep">|</span> <span class="timeline-role-badge">Data Analyst</span>',
    org2_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    org2_tasks: '<li>Mengolah data terkait judul, dosen pembimbing, dan proposal peserta PKM menggunakan <em>Microsoft Excel</em>.</li><li>Merekap dan memverifikasi kelengkapan data peserta PKM secara berkala untuk keperluan pelaporan.</li>',

    date_jun23_sep23: "Juni 2023 - September 2023",
    org3_role_company: 'Talent FTII UHAMKA <span class="timeline-sep">|</span> <span class="timeline-role-badge">Talent</span>',
    org3_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    org3_tasks: '<li>Menjadi talent dalam pembuatan konten kreatif Instagram dan TikTok untuk meningkatkan brand awareness serta promosi fakultas.</li><li>Berperan aktif menyampaikan informasi program kampus secara kreatif melalui konten video interaktif yang mampu menarik minat calon mahasiswa baru.</li>',

    date_hakteknas: "11 - 13 Agustus 2023",
    org4_role_company: 'HAKTEKNAS ke-28 <span class="timeline-sep">|</span> <span class="timeline-role-badge">Co-Organized</span>',
    org4_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Pusat',
    org4_tasks: '<li>Menjadi delegasi Uhamka sebagai <em>Co-Organized</em> pada Pameran Riset dan Inovasi Hakteknas ke-28 yang diselenggarakan oleh Kemendikbudristek.</li><li>Mempresentasikan karya inovasi dosen dan mahasiswa Uhamka — Bola Makhorijul Huruf edisi 2, Mesin Pirolisis (pengolah sampah plastik menjadi bahan bakar minyak), dan CNC 3D Printer — kepada para pengunjung pameran.</li>',

    date_jun23_aug23: "Juni 2023 - Agustus 2023",
    org5_role_company: 'Pengabdian Masyarakat Dosen <span class="timeline-sep">|</span> <span class="timeline-role-badge">Anggota</span>',
    org5_loc: '<i class="fas fa-map-marker-alt"></i> Tangerang',
    org5_tasks: '<li>Membuat video tutorial penggunaan <em>LiveWorksheet</em> sebagai buku panduan interaktif bagi guru dan siswa.</li><li>Menyusun modul pembelajaran mengenai pemanfaatan <em>LiveWorksheet</em> dalam kegiatan belajar mengajar.</li><li>Menjadi fasilitator pelatihan penggunaan <em>LiveWorksheet</em> di MAN 3 Tangerang.</li>',

    date_may23_aug23: "Mei 2023 - Agustus 2023",
    org6_role_company: 'Proyek Game Edukasi Lintas Fakultas <span class="timeline-sep">|</span> <span class="timeline-role-badge">Anggota</span>',
    org6_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    org6_tasks: '<li>Merancang dan membangun game edukasi Ular Tangga Perpajakan menggunakan <em>Adobe Animate</em> dan bahasa pemrograman <em>ActionScript</em>.</li><li>Mengembangkan tampilan kuis interaktif perpajakan di dalam papan permainan virtual.</li>',

    date_dec22_nov23: "Desember 2022 - November 2023",
    org7_role_company: 'PKM FTII UHAMKA <span class="timeline-sep">|</span> <span class="timeline-role-badge">Anggota</span>',
    org7_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    org7_tasks: '<li>Menyusun proposal dan kebutuhan pendanaan proyek robotika untuk pengajuan hibah PKM.</li><li>Berkolaborasi dengan tim teknis dalam perancangan dan perakitan purwarupa robot sesuai target waktu.</li>',

    date_jul22_oct22: "Juli 2022 - Oktober 2022",
    org8_role_company: 'PEMIRA FTII UHAMKA <span class="timeline-sep">|</span> <span class="timeline-role-badge">Bendahara</span>',
    org8_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    org8_tasks: '<li>Mengelola pencatatan administrasi keuangan dan anggaran pelaksanaan PEMIRA FT UHAMKA.</li><li>Menyusun laporan pertanggungjawaban (LPJ) keuangan kegiatan secara transparan dan akuntabel.</li>',

    // Work Experience ID
    exp_title: "Pengalaman Kerja",
    exp_subtitle: "Perjalanan karier profesional, kontribusi proyek, dan pencapaian di dunia industri.",

    date_exp_pelindo: "September 2025 - Agustus 2026",
    exp1_role_company: 'IT Governance & Front-End Developer <span class="timeline-sep">|</span> <span class="timeline-company">PT Pelabuhan Indonesia (Persero)</span>',
    exp1_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Utara',
    exp1_tasks: '<li>Menyusun dan merapikan <em>Standard Operating Procedure</em> (SOP) dalam bentuk <em>flowchart</em> terstruktur untuk meningkatkan efisiensi operasional sistem.</li><li>Mengembangkan fitur permintaan regulasi dan sistem <em>watermark</em> dokumen otomatis pada portal <em>IVO E-Office</em> di PT Pelabuhan Tanjung Priok (Non Petikemas).</li><li>Mengembangkan dashboard <em>monitoring</em> operasional bongkar muat kapal secara <em>real-time</em> pada platform <em>Tally HBT</em> di PT Pelabuhan Tanjung Priok (Non Petikemas).</li><li>Menyusun <em>Minutes of Meeting</em> (MoM), <em>User Acceptance Testing</em> (UAT), dan <em>User Guide</em> aplikasi <em>Tally HBT</em>, serta <em>Post Implementation Review</em> (PIR) sistem lainnya.</li>',

    date_exp_brantas: "Maret 2024 - April 2024",
    exp2_role_company: 'Multimedia <span class="timeline-sep">|</span> <span class="timeline-company">PT Brantas Abipraya (Persero)</span>',
    exp2_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    exp2_tasks: '<li>Merancang dan memproduksi materi publikasi digital berupa <em>flyer Workshop Photography</em>, mulai dari konsep visual, tipografi, hingga aset siap sebar.</li><li>Bertindak sebagai <em>Master of Ceremony</em> (MC) pada acara <em>Workshop Photography</em> internal, memandu jalannya acara secara interaktif dan tepat waktu.</li><li>Mengelola presensi kehadiran peserta menggunakan <em>Google Form</em>, melakukan pemantauan data secara <em>real-time</em>, dan menyusun rekapitulasi kehadiran.</li>',

    date_exp_bpti: "Oktober 2023 - Januari 2024",
    exp3_role_company: 'Multimedia <span class="timeline-sep">|</span> <span class="timeline-company">BPTI UHAMKA</span>',
    exp3_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    exp3_tasks: '<li>Mengembangkan video tutorial untuk penggunaan Website Akademik UHAMKA agar memudahkan pengguna dalam mengakses fitur-fitur akademik.</li><li>Membuat video tutorial terkait aktivasi <em>Pop-Up Blocker</em> sebagai panduan <em>Troubleshooting</em> bagi pengguna.</li><li>Menulis artikel edukatif dan merancang flyer mengenai isu <em>Cyber Security</em>, termasuk <em>Malware</em> dan <em>Scam</em>, untuk meningkatkan literasi digital pengguna.</li>',

    date_exp_perpus: "Oktober 2022 - September 2023",
    exp4_role_company: 'Asisten Perpustakaan <span class="timeline-sep">|</span> <span class="timeline-company">Universitas Muhammadiyah Prof. DR. HAMKA</span>',
    exp4_loc: '<i class="fas fa-map-marker-alt"></i> Jakarta Timur',
    exp4_tasks: '<li>Melakukan pengecekan <em>similarity</em> dan <em>plagiarism</em> skripsi mahasiswa serta memproses administrasi bebas pustaka menggunakan sistem perpustakaan berbasis TI.</li><li>Melakukan pengecekan, pendataan, dan pencatatan transaksi peminjaman serta pengembalian buku melalui sistem informasi perpustakaan.</li><li>Mengelola operasional dan administrasi perpustakaan, termasuk pengarsipan digital dan manajemen koleksi.</li><li>Menjadi panitia Pendidikan Pemakaian Perpustakaan (P3) bagi mahasiswa baru, termasuk memberikan edukasi mengenai penggunaan sistem informasi perpustakaan.</li>',

    // Projects & Contact ID
    proj_title: "Projects dan Karya Ilmiah",
    proj_subtitle: "Hasil projects, publikasi jurnal ilmiah, HKI, sertifikasi, dan lain-lainnya.",
    filter_project: "Projects",
    filter_buku: "Buku",
    filter_hki: "HKI",
    filter_jurnal: "Jurnal",
    filter_sertifikat: "Sertifikasi",
    subfilter_all: '<i class="fas fa-th-large"></i> Semua Projects',
    subfilter_webapp: '<i class="fas fa-globe"></i> Website & Aplikasi',
    subfilter_qa: '<i class="fas fa-vial"></i> QA Testing',
    subfilter_itadmin: '<i class="fas fa-server"></i> IT Administrator & Strategic',
    banner_webapp: '<div class="project-group-title"><i class="fas fa-laptop-code"></i> Website & Aplikasi</div><span class="project-group-badge">4 Projects</span>',
    banner_qa: '<div class="project-group-title"><i class="fas fa-vial"></i> Quality Assurance Testing</div><span class="project-group-badge">2 Projects</span>',
    banner_itadmin: '<div class="project-group-title"><i class="fas fa-server"></i> IT Administrator & Strategic Governance</div><span class="project-group-badge">4 Projects</span>',

    contact_title: "Hubungi Saya",
    contact_subtitle: "Tertarik berkolaborasi atau ingin berdiskusi? Jangan ragu untuk mengirim pesan.",
    contact_info_label: "INFO KONTAK",
    contact_connect_title: "Let's Connect",
    contact_desc: "Aku terbuka untuk peluang kerja sama, diskusi proyek, atau sekadar bertukar ide.",
    contact_email_label: "EMAIL",
    contact_address_label: "ALAMAT",
    contact_response_label: "JAM RESPONS",
    contact_response_val: "Senin - Jumat, 09.00 - 17.00 WIB",
    contact_form_badge: "KIRIM PESAN",
    contact_form_heading: "Formulir Kontak",
    form_name_label: "Nama Lengkap",
    form_name_placeholder: "Masukkan nama lengkap Anda",
    form_email_label: "Alamat Email",
    form_email_placeholder: "nama@email.com",
    form_message_label: "Pesan Anda",
    form_message_placeholder: "Tuliskan pesan atau penawaran kerja sama...",
    form_submit_btn: '<i class="fas fa-paper-plane"></i> Kirim Pesan',
    toast_success: "Pesan kamu telah berhasil dikirim!",
    toast_sending: "Mengirim...",
    footer_rights: "Hak Cipta Dilindungi."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_project: "Projects",
    nav_contact: "Contact",

    hero_title: "Hello, I'm <span>Elsa Apriani</span>",
    hero_nickname: "To be closer, call me <strong>Ecaa</strong>",
    hero_desc: "Focused on responsive web interface development (Front-End), system governance and standardization (IT Governance), IT project administrative management (IT Project Administrator), and application quality assurance (Quality Assurance).",

    badge_fe: '<i class="fas fa-code"></i> Front-End Developer',
    badge_gov: '<i class="fas fa-file-contract"></i> IT Governance',
    badge_admin: '<i class="fas fa-tasks"></i> IT Project Administrator',
    badge_qa: '<i class="fas fa-vial"></i> Quality Assurance Testing',

    about_title: "About Me",
    about_subtitle: "Brief profile, educational background, and core technical skills.",
    about_intro_1: 'I am an honor graduate in Informatics Engineering (GPA 3.92/4.00) from Universitas Muhammadiyah Prof. Dr. HAMKA with 1+ years of experience in <strong style="color: var(--accent-pink);">IT Governance</strong>, <strong style="color: var(--accent-pink);">IT Project Administration</strong>, <strong style="color: var(--accent-pink);">Front-End Development</strong>, and <strong style="color: var(--accent-pink);">Quality Assurance Testing</strong>.',
    about_intro_2: 'Over the course of my academic and professional career, I have successfully executed <strong style="color: var(--accent-pink);">10+ impactful projects</strong>. My core technical achievements include structuring and documenting <strong style="color: var(--accent-pink);">14 comprehensive IT Governance SOPs</strong> (covering Backup, Access Rights, and Data Center operations), developing automated web features and dynamic dashboards for enterprise platforms such as <strong style="color: var(--accent-pink);">IVO E-Office</strong> and <strong style="color: var(--accent-pink);">Tally HBT</strong>, and leading <strong style="color: var(--accent-pink);">User Acceptance Testing (UAT)</strong>, <strong style="color: var(--accent-pink);">Functional Design Diagram (FDD)</strong>, <strong style="color: var(--accent-pink);">Technical Design Diagram (TDD)</strong> and project tracking via Project Charters and Knowledge Management portals. Additionally, I hold multiple HKI for educational games and interactive websites, alongside published SINTA-indexed journal research.',
    about_intro_3: 'I am actively seeking opportunities where I can leverage my multidisciplinary expertise in <strong style="color: var(--accent-pink);">IT Governance</strong>, <strong style="color: var(--accent-pink);">IT Project Administration</strong>, <strong style="color: var(--accent-pink);">Front-End Development</strong>, and <strong style="color: var(--accent-pink);">Quality Assurance (QA) Testing</strong> to build reliable, high-quality IT solutions.',
    stat_exp: "Years Experience",
    stat_proj: "Completed Projects",
    skills_heading: "Core Competencies",
    tools_heading: "Tools used",

    edu_title: "Education and Organization",
    edu_subtitle: "Academic background, university honors, and extracurricular organizational experience.",
    edu_degree: "Bachelor of Engineering (S.T)",
    edu_univ: "Universitas Muhammadiyah Prof. DR. HAMKA (UHAMKA)",
    edu_major: 'B.Eng in Informatics Engineering <span class="timeline-sep">|</span> <span class="edu-period">2021 - 2025</span>',
    edu_honors: '<i class="fas fa-award"></i> Best Graduate',
    edu_academic_desc: "Best Graduate of the Faculty of Industrial Technology and Informatics (FTII) UHAMKA with Cum Laude honors. Specialized in IT Governance, IT Project Administration, Front-End Development, and Quality Assurance (QA) Testing.",

    // Organization Timeline EN
    date_aug24_nov24: "August 2024 - November 2024",
    org1_role_company: 'Lecturer Community Service <span class="timeline-sep">|</span> <span class="timeline-role-badge">Member</span>',
    org1_loc: '<i class="fas fa-map-marker-alt"></i> Bogor',
    org1_tasks: '<li>Developed a promotional tourism website for Arca Domas in Sukaresmi Village, Bogor.</li><li>Authored a comprehensive book manuscript on Eduecotourism in Sukaresmi Village.</li>',

    date_nov23_may24: "November 2023 - May 2024",
    org2_role_company: 'PKM Center Committee FTII 2024 <span class="timeline-sep">|</span> <span class="timeline-role-badge">Data Analyst</span>',
    org2_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    org2_tasks: '<li>Processed data regarding titles, supervising lecturers, and proposals of PKM participants using <em>Microsoft Excel</em>.</li><li>Recapped and audited participant documentation periodically for institutional reporting.</li>',

    date_jun23_sep23: "June 2023 - September 2023",
    org3_role_company: 'FTII UHAMKA Talent <span class="timeline-sep">|</span> <span class="timeline-role-badge">Talent</span>',
    org3_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    org3_tasks: '<li>Served as creative talent for Instagram and TikTok content creation to enhance faculty brand awareness and outreach.</li><li>Actively communicated campus program information creatively through interactive video content to attract prospective students.</li>',

    date_hakteknas: "August 11 - 13, 2023",
    org4_role_company: 'The 28th HAKTEKNAS <span class="timeline-sep">|</span> <span class="timeline-role-badge">Co-Organized</span>',
    org4_loc: '<i class="fas fa-map-marker-alt"></i> Central Jakarta',
    org4_tasks: '<li>Part of the Uhamka delegation serving as <em>Co-Organized</em> at the 28th National Technology Awakening Day (HAKTEKNAS) Research and Innovation Exhibition organized by Kemendikbudristek.</li><li>Demonstrated creative innovations by Uhamka faculty and students — Bola Makhorijul Huruf 2nd edition, Pyrolysis Machine (converting plastic waste into fuel oil), and CNC 3D Printer — to exhibition visitors.</li>',

    date_jun23_aug23: "June 2023 - August 2023",
    org5_role_company: 'Lecturer Community Service <span class="timeline-sep">|</span> <span class="timeline-role-badge">Member</span>',
    org5_loc: '<i class="fas fa-map-marker-alt"></i> Tangerang',
    org5_tasks: '<li>Produced video tutorials on utilizing <em>LiveWorksheet</em> as interactive guidebooks for educators and students.</li><li>Authored learning modules for integrating <em>LiveWorksheet</em> into classroom activities.</li><li>Facilitated instructional training workshops on <em>LiveWorksheet</em> at MAN 3 Tangerang.</li>',

    date_may23_aug23: "May 2023 - August 2023",
    org6_role_company: 'Inter-Faculty Educational Game Project <span class="timeline-sep">|</span> <span class="timeline-role-badge">Member</span>',
    org6_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    org6_tasks: '<li>Designed the Taxation Snakes & Ladders educational game using <em>Adobe Animate</em> and <em>ActionScript</em> programming language.</li><li>Engineered and implemented interactive taxation quiz interfaces on the virtual board game.</li>',

    date_dec22_nov23: "December 2022 - November 2023",
    org7_role_company: 'PKM FTII UHAMKA <span class="timeline-sep">|</span> <span class="timeline-role-badge">Member</span>',
    org7_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    org7_tasks: '<li>Drafted grant proposals and coordinated funding requirements for robot engineering and prototyping.</li><li>Collaborated with the engineering team throughout the robotics development lifecycle according to timeline milestones.</li>',

    date_jul22_oct22: "July 2022 - October 2022",
    org8_role_company: 'PEMIRA FTII UHAMKA (Student Election Committee) <span class="timeline-sep">|</span> <span class="timeline-role-badge">Treasurer</span>',
    org8_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    org8_tasks: '<li>Administered and coordinated all financial records and budgetary allocations for PEMIRA FT UHAMKA.</li><li>Prepared periodic financial audit reports and program accounting statements.</li>',

    // Work Experience EN
    exp_title: "Work Experience",
    exp_subtitle: "Professional career experience, project contributions, and achievements in industry.",

    date_exp_pelindo: "September 2025 - August 2026",
    exp1_role_company: 'IT Governance & Front-End Developer <span class="timeline-sep">|</span> <span class="timeline-company">PT Pelabuhan Indonesia (Persero)</span>',
    exp1_loc: '<i class="fas fa-map-marker-alt"></i> North Jakarta',
    exp1_tasks: '<li>Structured and documented Standard Operating Procedures (SOP) in clear flowcharts to streamline operational efficiency.</li><li>Developed regulatory request features and automated document watermarking on the <em>IVO E-Office</em> platform at PT Pelabuhan Tanjung Priok (Non-Container).</li><li>Engineered real-time vessel monitoring dashboard features for loading and unloading operations on the <em>Tally HBT</em> platform at PT Pelabuhan Tanjung Priok (Non-Container).</li><li>Managed Minutes of Meeting (MoM), User Acceptance Testing (UAT), and User Guides for the <em>Tally HBT</em> application, alongside Post-Implementation Reviews (PIR) for other systems.</li>',

    date_exp_brantas: "March 2024 - April 2024",
    exp2_role_company: 'Multimedia <span class="timeline-sep">|</span> <span class="timeline-company">PT Brantas Abipraya (Persero)</span>',
    exp2_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    exp2_tasks: '<li>Designed and produced digital marketing flyers for Photography Workshops, from visual concept and typography to finalized assets.</li><li>Served as Master of Ceremony (MC) during Photography Workshops, ensuring punctual agenda execution and engaging audience interaction.</li><li>Managed attendee attendance tracking via <em>Google Forms</em>, including real-time monitoring and data reporting.</li>',

    date_exp_bpti: "October 2023 - January 2024",
    exp3_role_company: 'Multimedia <span class="timeline-sep">|</span> <span class="timeline-company">BPTI UHAMKA</span>',
    exp3_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    exp3_tasks: '<li>Developed comprehensive video tutorials for navigating the UHAMKA Academic Portal to facilitate seamless user access.</li><li>Produced instructional troubleshooting videos on configuring <em>Pop-Up Blockers</em> for university users.</li><li>Authored educational cybersecurity articles and designed informative flyers (covering Malware and Scam prevention) to enhance user digital literacy.</li>',

    date_exp_perpus: "October 2022 - September 2023",
    exp4_role_company: 'Library Assistant <span class="timeline-sep">|</span> <span class="timeline-company">Universitas Muhammadiyah Prof. DR. HAMKA</span>',
    exp4_loc: '<i class="fas fa-map-marker-alt"></i> East Jakarta',
    exp4_tasks: '<li>Performed thesis similarity and plagiarism verification checks and processed library clearance certification via IT-based library systems.</li><li>Supervised, logged, and tracked library book circulation and loan transactions through the library information system.</li><li>Managed administrative library operations, digital catalog archiving, and book repository maintenance.</li><li>Served as committee member for Library User Education (P3), training freshmen on utilizing digital library systems.</li>',

    // Projects & Contact EN
    proj_title: "Projects & Scientific Paper",
    proj_subtitle: "Projects, scientific papers, journal publications, HKI, certifications, and more.",
    filter_project: "Projects",
    filter_buku: "Books",
    filter_hki: "HKI",
    filter_jurnal: "Journals",
    filter_sertifikat: "Certificates",
    subfilter_all: '<i class="fas fa-th-large"></i> All Projects',
    subfilter_webapp: '<i class="fas fa-globe"></i> Websites & Applications',
    subfilter_qa: '<i class="fas fa-vial"></i> QA Testing',
    subfilter_itadmin: '<i class="fas fa-server"></i> IT Administrator & Strategic',
    banner_webapp: '<div class="project-group-title"><i class="fas fa-laptop-code"></i> Websites & Applications</div><span class="project-group-badge">4 Projects</span>',
    banner_qa: '<div class="project-group-title"><i class="fas fa-vial"></i> Quality Assurance Testing</div><span class="project-group-badge">2 Projects</span>',
    banner_itadmin: '<div class="project-group-title"><i class="fas fa-server"></i> IT Administrator & Strategic Governance</div><span class="project-group-badge">4 Projects</span>',

    contact_title: "Contact Me",
    contact_subtitle: "Interested in collaboration or want to connect? Feel free to drop a message.",
    contact_info_label: "CONTACT INFO",
    contact_connect_title: "Let's Connect",
    contact_desc: "I am open to similar job opportunities, project discussions, or simply sharing ideas.",
    contact_email_label: "EMAIL",
    contact_address_label: "LOCATION",
    contact_response_label: "RESPONSE TIME",
    contact_response_val: "Monday - Friday, 09:00 - 17:00 WIB",
    contact_form_badge: "SEND MESSAGE",
    contact_form_heading: "Contact Form",
    form_name_label: "Full Name",
    form_name_placeholder: "Enter your full name",
    form_email_label: "Email Address",
    form_email_placeholder: "name@email.com",
    form_message_label: "Your Message",
    form_message_placeholder: "Write your message or inquiry...",
    form_submit_btn: '<i class="fas fa-paper-plane"></i> Send Message',
    toast_success: "Your message has been sent successfully!",
    toast_sending: "Sending...",
    footer_rights: "All Rights Reserved."
  }
};

const cardTextTranslations = {
  // Months
  "Januari": "January",
  "Februari": "February",
  "Maret": "March",
  "April": "April",
  "Mei": "May",
  "Juni": "June",
  "Juli": "July",
  "Agustus": "August",
  "September": "September",
  "Oktober": "October",
  "November": "November",
  "Desember": "December",

  // Group Banners & Badges
  "Website & Aplikasi": "Websites & Applications",
  "Standard Operating Procedure (SOP)": "Standard Operating Procedures (SOP)",
  "Standard Operating Procedures (SOP)": "Standard Operating Procedures (SOP)",
  "IT Administrator & Strategic Governance": "IT Administrator & Strategic Governance",
  "Quality Assurance Testing": "Quality Assurance Testing",
  "7 Project": "7 Projects",
  "6 Project": "6 Projects",
  "6 Projects": "6 Projects",
  "4 Project": "4 Projects",
  "4 Projects": "4 Projects",
  "3 Project": "3 Projects",
  "2 Project": "2 Projects",
  "2 Projects": "2 Projects",
  "1 Project": "1 Project",
  "14 SOP": "14 SOPs",
  "Sertifikat Penghargaan Akademik": "Academic Achievement Certificate",
  "Sertifikat Kepanitiaan & Event": "Committee & Event Certificate",
  "Sertifikat Pengabdian Masyarakat": "Community Service Certificate",
  "Sertifikat Hak Kekayaan Intelektual (HKI)": "HKI Certificate",
  "Sertifikat Hak Kekayaan Intelektual": "HKI Certificate",
  "Sertifikat HKI": "HKI Certificate",
  "Sertifikat Kehadiran & Partisipasi": "Attendance & Participation Certificate",
  "Sertifikat Magang & Praktik Kerja": "Internship & Practical Work Certificate",
  "Sertifikat Keahlian & Pelatihan": "Skill & Training Certificate",
  "Sertifikat Software & Web Development": "Software & Web Development Certificate",
  "Sertifikat Professional Skill": "Professional Skill Certificate",
  "Buku Ber-ISBN Resmi": "Official ISBN Book",
  "Buku Ekowisata & Pemberdayaan": "Ecotourism & Empowerment Book",
  "Buku Ajar & Referensi": "Textbook & Reference Book",
  "Sertifikat HKI Resmi Kemkumham": "Official HKI Certificate (Kemkumham)",
  "Jurnal Terindeks SINTA 4": "SINTA 4 Indexed Journal",
  "Jurnal Terindeks SINTA 5": "SINTA 5 Indexed Journal",
  "Jurnal Nasional Ber-ISSN": "National Journal (ISSN)",
  "Dokumen SOP Resmi": "Official SOP Document",
  "SOP Tata Kelola TI": "IT Governance SOP",

  // Meta Labels & Terms
  "Hak Kekayaan Intelektual (HKI)": "HKI",
  "Hak Kekayaan Intelektual": "HKI",
  "Karya Ilmiah": "Scientific Paper",
  "Karya Ilmiah Riset": "Scientific Research Paper",
  "Penanggung Jawab": "Person in Charge (PIC)",
  "Penerima": "Recipient",
  "Penulis": "Author(s)",
  "Penyusun": "Prepared By",
  "Pencipta": "Creator(s)",
  "Pemegang Hak Cipta": "Copyright Holder",
  "Fokus Bidang": "Focus Area",
  "Program Studi": "Study Program",
  "Tanggal Penerimaan": "Filing Date",
  "Tanggal Terbit": "Publication Date",
  "Tanggal": "Date",
  "Tahun": "Year",
  "Peran": "Role",
  "Institusi": "Institution",
  "Penerbit": "Publisher",
  "Nomor Permohonan": "Application No.",
  "Nomor Sertifikat": "Certificate No.",
  "No. Sertifikat": "Certificate No.",
  "Jenis Ciptaan": "Work Type",
  "Judul Ciptaan": "Title of Work",
  "Fokus Platform": "Platform Focus",
  "Tipe Monitoring": "Monitoring Type",
  "Format Data": "Data Format",
  "Bidang": "Field / Domain",
  "Keahlian": "Competency / Skill",
  "Penyelenggara": "Organizer",
  "Halaman": "Pages",
  "Terbit": "Published",
  "Kategori": "Category",
  "Volume / Nomor": "Volume / Issue",
  "Indeksasi": "Indexing",
  "Media": "Media",
  "PIC Pengembang": "Lead Developer (PIC)",
  "Status Tracker": "Status Tracker",
  "Modul Portal & Metrik": "Portal Module & Metrics",
  "Total SOP": "Total SOPs",
  "Standar Format": "Standard Format",
  "Fokus SOP": "SOP Focus",
  "Target Unit": "Target Unit",
  "Daftar Dokumen SOP": "List of SOP Documents",
  "Target Pengguna": "Target Users",

  // Headings
  "Deskripsi Project": "Project Description",
  "Deskripsi SOP": "SOP Description",
  "Deskripsi HKI": "HKI Description",
  "Deskripsi Buku": "Book Description",
  "Abstrak Jurnal": "Journal Abstract",
  "Deskripsi Sertifikat": "Certificate Description",

  // Buttons
  "Lihat Sertifikat": "View Certificate",
  "Lihat Dokumen": "View Document",
  "Lihat SOP": "View SOP",
  "Unduh SOP": "Download SOP",
  "Buka SOP": "Open SOP",
  "Buka Jurnal": "Open Journal (OJS)",
  "Buka Buku": "Open Book",
  "Lihat Buku": "View Book",
  "Buka HKI": "View HKI Document",
  "Lihat Detail": "View Details",
  "Buka Spreadsheet": "Open Spreadsheet",
  "Buka Full Spreadsheet Portal": "Open Full Spreadsheet Portal",
  "Buka User Guide (PDF)": "Open User Guide (PDF)",
  "Kunjungi Website": "Visit Website",
  "Mainkan Game": "Play Game",
  "Kunjungi Portal": "Visit Portal",
  "Buka di Play Store": "Open on Play Store",

  // Common Values
  "116 Halaman": "116 Pages",
  "104 Halaman": "104 Pages",
  "120 Halaman": "120 Pages",
  "69 Halaman": "69 Pages",
  "14 Dokumen": "14 Documents",
  "Program Komputer": "Computer Program",
  "Karya Tulis": "Written Work",
  "Permainan Interaktif": "Interactive Game",
  "Buku Referensi / Ekowisata": "Reference Book / Ecotourism",
  "Buku Ajar / Teknologi Informasi": "Textbook / Information Technology",
  "Buku Referensi / Media Pembelajaran": "Reference Book / Learning Media",
  "Buku Panduan / Tata Kelola TI": "Guidebook / IT Governance",
  "Teknologi Informasi / Keamanan Data": "Information Technology / Data Security",
  "Buku Referensi IT & Keamanan Data": "IT Reference & Data Security Book",
  "Teknik Informatika": "Informatics Engineering",
  "Tim Support Teknoka (Bidang Naskah)": "Teknoka Support Team (Editorial Division)",
  "Tim Support Bidang Naskah": "Editorial Support Team Member",
  "Fasilitator Pengabdian Masyarakat di Bogor": "Community Service Facilitator in Bogor",
  "Pelaksana & Fasilitator Pengmas": "Community Service Implementer & Facilitator",
  "Aplikasi Game Edukasi ARTAJAK": "ARTAJAK Educational Game Application",
  "Pencipta / Pengembang": "Creator / Developer",
  "Website Profil Promosi Arca Domas": "Arca Domas Promotional Profile Website",
  "Peserta Workshop & Pelatihan": "Workshop & Training Participant",
  "Peserta Pelatihan": "Training Participant",
  "Peserta Magang": "Internship Participant",
  "Peserta": "Participant",

  // Project Descriptions
  "Aplikasi operasional monitoring bongkar muat kapal dan pencatatan tally pelabuhan secara real-time pada PT Pelabuhan Tanjung Priok (Non Petikemas) yang terintegrasi dengan pelaporan logistik.": "Real-time port operational web application for vessel loading and unloading monitoring and tally recording at PT Pelabuhan Tanjung Priok (Non-Container) integrated with logistics reporting.",
  "Permainan edukasi perpajakan interaktif berbasis web dengan mekanisme papan Ludo multipemain untuk meningkatkan kesadaran dan literasi pajak masyarakat secara kompetitif dan kolaboratif.": "Web-based interactive taxation educational game featuring multiplayer Ludo board mechanics designed to enhance public tax awareness and literacy competitively and collaboratively.",
  "Platform tata kelola persuratan, administrasi digital, dan permintaan regulasi enterprise pada PT Pelabuhan Tanjung Priok (Non Petikemas) dengan implementasi watermark dokumen otomatis.": "Enterprise electronic correspondence, digital administration, and regulation request governance platform at PT Pelabuhan Tanjung Priok (Non-Container) featuring automated document watermarking.",
  "Aplikasi game edukasi Android yang memadukan permainan ular tangga interaktif dengan kuis literasi pajak untuk siswa sekolah dasar, resmi terbit di Google Play Store dan bersertifikat HKI.": "Android educational game application combining interactive snakes and ladders gameplay with tax literacy quizzes for primary school students, published on Google Play Store and registered with copyright protection.",

  // Card Paragraph Descriptions
  "Sertifikat apresiasi dan penghargaan sebagai Peserta Wisuda Berprestasi Teknik Informatika atas pencapaian akademik dan kontribusi luar biasa selama masa studi.": "Certificate of appreciation and honor as Outstanding Informatics Engineering Graduate for academic excellence and outstanding contributions during study period.",
  "Sertifikat penghargaan atas kontribusi dan dedikasi sebagai Tim Support Naskah pada seminar nasional TEKNOKA ke-9.": "Certificate of appreciation for contributions and dedication as Editorial Manuscript Support Team at the 9th TEKNOKA National Seminar.",
  "Sertifikat penghargaan atas kontribusi dalam kegiatan Pengabdian kepada Masyarakat (Pengmas) Dosen di Desa Sukaresmi, Bogor.": "Certificate of appreciation for contributions to the Lecturer Community Service program in Sukaresmi Village, Bogor.",
  "Sertifikat Surat Pencatatan Ciptaan resmi dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia untuk program komputer aplikasi game edukasi ARTAJAK.": "Official Certificate of Copyright Registration from the Ministry of Law and Human Rights Republic of Indonesia for the ARTAJAK educational game software application.",
  "Sertifikat Surat Pencatatan Ciptaan resmi dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia untuk karya tulis website promosi profil wisata Desa Sukaresmi (Arca Domas).": "Official Certificate of Copyright Registration from the Ministry of Law and Human Rights Republic of Indonesia for the promotional website work of Sukaresmi Village (Arca Domas).",
  "Sertifikat keikutsertaan dalam pelatihan pengembangan web interaktif dan pemrograman dasar.": "Certificate of participation in interactive web development training and basic programming.",
  "Sertifikat keikutsertaan dalam pelatihan dasar desain web UI/UX dan pembuatan prototipe interaktif.": "Certificate of participation in fundamental UI/UX web design training and interactive prototyping.",
  "Sertifikat keikutsertaan dalam workshop intensif web development dan pengenalan framework frontend modern.": "Certificate of participation in intensive web development workshop and modern frontend frameworks.",
  "Sertifikat kelulusan praktik kerja lapangan (magang) dengan fokus pada manajemen administrasi, pelayanan perpustakaan berbasis IT, dan digital archiving.": "Certificate of practical internship completion focusing on administrative management, IT-based library services, and digital archiving.",
  "Sertifikat apresiasi sebagai Talent Kreatif dalam pembuatan konten video promosi dan edukasi fakultas di platform Instagram dan TikTok.": "Certificate of appreciation as Creative Talent for producing promotional and educational faculty video content on Instagram and TikTok.",
  "Sertifikat apresiasi dan kontribusi aktif sebagai bendahara pada pelaksanaan Pemilihan Umum Raya (PEMIRA) Mahasiswa FTII UHAMKA.": "Certificate of appreciation and active contribution as Treasurer in the FTII UHAMKA Student General Election (PEMIRA).",
  "Sertifikat penghargaan sebagai Co-Organized dalam Pameran Riset dan Inovasi Hakteknas ke-28 mewakili delegasi UHAMKA.": "Certificate of appreciation as Co-Organized in the 28th Hakteknas Research and Innovation Exhibition representing the UHAMKA delegation.",
  "Sertifikat kompetensi penulisan pesan persuasif, penulisan konten digital, dan strategi copywriting.": "Certificate of competency in persuasive writing, digital content writing, and copywriting strategies.",
  "Sertifikat kompetensi pengembangan aplikasi web modern berbasis framework React / Next.js.": "Certificate of competency in modern web application development based on the React / Next.js framework.",
  "Sertifikat keikutsertaan dan keahlian dalam analisis data, pengolahan dataset, serta visualisasi data bisnis.": "Certificate of participation and proficiency in data analysis, dataset processing, and business data visualization.",
  "Buku panduan dan kompilasi gagasan pengembangan Eduekowisata Desa Sukaresmi yang berfokus pada potensi keanekaragaman hayati, edukasi lingkungan, serta pemberdayaan ekonomi masyarakat lokal berbasis teknologi dan konsep ekowisata berkelanjutan.": "Guidebook and compilation of development concepts for Sukaresmi Village Eduecotourism, focusing on biodiversity potential, environmental education, and local community economic empowerment based on technology and sustainable ecotourism concepts.",
  "Buku referensi yang membahas konsep dasar dan terapan algoritma teknik kompresi data serta penyembunyian/penyamaran data (steganografi & kriptografi) untuk keamanan transmisi informasi digital secara efektif.": "Reference book exploring fundamental concepts and applied algorithms of data compression and data hiding/masking techniques (steganography & cryptography) for secure and effective digital information transmission.",
  "Permainan edukasi pajak multiplayer berbasis web dengan mekanisme papan permainan Ludo yang dirancang untuk meningkatkan pemahaman perpajakan masyarakat melalui pendekatan interaktif dan kompetitif.": "Web-based multiplayer tax education game featuring Ludo game board mechanics, designed to enhance public tax literacy through interactive and competitive engagement.",
  "Website profil promosi berbasis web yang menyajikan informasi potensi alam, budaya, dan kearifan lokal situs cagar budaya Arca Domas di Desa Sukaresmi untuk mendorong kunjungan wisata dan ekonomi kreatif masyarakat.": "Promotional profile website presenting natural potential, cultural heritage, and local wisdom of the Arca Domas cultural site in Sukaresmi Village to stimulate tourism and creative village economy.",
  "Modul pembelajaran interaktif menggunakan platform Liveworksheet yang dirancang untuk mendigitalisasi lembar kerja siswa. Modul ini dilengkapi dengan fitur multimedia, drag-and-drop, serta umpan balik otomatis yang dapat mempermudah guru dalam proses evaluasi dan meningkatkan partisipasi aktif siswa dalam pembelajaran jarak jauh maupun tatap muka.": "Interactive learning module utilizing the Liveworksheet platform designed to digitize student worksheets, featuring multimedia components, drag-and-drop mechanics, and automated feedback to facilitate teacher evaluation and boost student engagement in remote and classroom learning.",
  "Permainan edukasi berbasis web yang menggabungkan mekanisme permainan ular tangga dengan materi pengetahuan perpajakan secara interaktif dan menyenangkan untuk meningkatkan literasi pajak anak-anak sekolah dasar. Aplikasi dikembangkan menggunakan metode prototipe dengan pengujian pada siswa sekolah dasar.": "Web-based educational game combining snakes and ladders mechanics with tax knowledge materials interactively and engagingly to improve primary school children's tax literacy, developed using prototyping methods and evaluated with elementary students.",
  "Buku referensi yang membahas strategi pengembangan desa eduekowisata berbasis pemberdayaan masyarakat lokal di Desa Sukaresmi, Megamendung, Bogor. Buku ini mengintegrasikan pendekatan teknologi informasi dan promosi digital untuk kemandirian ekonomi desa.": "Reference book discussing the development strategy of education-ecotourism villages based on local community empowerment in Sukaresmi Village, Megamendung, Bogor. This book integrates information technology and digital promotion approaches for village economic self-reliance.",
  "Buku referensi yang membahas pemanfaatan dan implementasi LiveWorksheet sebagai inovasi media ajar interaktif untuk meningkatkan efektivitas pembelajaran digital di madrasah dan sekolah.": "Reference book exploring the utilization and implementation of LiveWorksheet as an interactive teaching media innovation to improve the effectiveness of digital learning in schools.",
  "Buku referensi implementasi media pembelajaran digital berbasis game edukasi ARTAJAK (Ular Tangga Perpajakan) untuk meningkatkan pemahaman dan literasi perpajakan bagi generasi muda secara interaktif.": "Reference book on the implementation of digital learning media based on the ARTAJAK (Taxation Snakes & Ladders) educational game to interactively enhance tax literacy for the younger generation.",
  "Buku panduan teknis dan operasional untuk implementasi sistem pendukung keputusan (SPK) berbasis web dengan integrasi standar tata kelola dan dokumentasi proses kerja TI yang terstandarisasi.": "Technical and operational guidebook for the implementation of web-based decision support systems (DSS) with integrated IT governance standards and standardized workflow documentation.",
  "Sistem lembar kerja pemantauan terpusat untuk metrik performa, lalu lintas data, integrasi portal, dan kesehatan operasional website Insight Portal secara akurat dan berkelanjutan.": "Centralized monitoring worksheet system for performance metrics, data traffic, portal integration, and operational health of the Insight Portal website accurately and sustainably.",
  "Matriks pengujian penerimaan pengguna (UAT) komprehensif untuk modul platform Tally HBT, mencakup skenario validasi fungsional, pencatatan hasil uji, pelacakan status defect, dan persetujuan stakeholder.": "Comprehensive User Acceptance Testing (UAT) matrix for Tally HBT platform modules, covering functional validation scenarios, test logging, defect tracking, and stakeholder approvals.",
  "Permainan edukasi pajak multiplayer berbasis web dengan mekanisme papan permainan Ludo yang dirancang untuk meningkatkan pemahaman perpajakan masyarakat melalui pendekatan gamifikasi yang kolaboratif. Sistem dapat dimainkan secara bersama-sama dengan mekanisme giliran dan pertanyaan perpajakan interaktif.": "Web-based multiplayer tax education game featuring Ludo board mechanics designed to enhance public tax literacy through collaborative gamification, enabling simultaneous multiplayer gameplay with turn-based mechanics and interactive taxation questions.",
  "Platform web yang menggabungkan informasi destinasi ekowisata dengan konten edukasi lingkungan, dirancang untuk mendorong kesadaran masyarakat terhadap pelestarian alam melalui pariwisata berkelanjutan. Sistem ini menyediakan fitur manajemen konten dan informasi wisata terintegrasi khusus untuk Desa Arca Domas, Kabupaten Bogor.": "Web platform integrating ecotourism destination information with environmental education content, designed to foster community awareness toward nature conservation through sustainable tourism with integrated content management features for Arca Domas Village, Bogor Regency.",
  "Modul Pembelajaran": "Learning Module",
  "Portal terpusat untuk manajemen aset, dokumentasi tata kelola, inventaris sistem TI, dan pelacakan status kepatuhan (compliance) infrastruktur operasional.": "Centralized portal for IT asset management, governance documentation, system inventory, and operational infrastructure compliance tracking.",
  // Specific Titles & Roles
  "Wisudawan Berprestasi Teknik Informatika UHAMKA 2025": "Outstanding Informatics Engineering Graduate UHAMKA 2025",
  "Peserta Wisuda Berprestasi": "Outstanding Graduate Honoree",
  "Pemakalah Seminar Nasional": "National Seminar Presenter",
  "Pemakalah Makalah Ilmiah Teknoka": "Teknoka Scientific Paper Presenter",
  "Presenter Seminar Nasional Teknoka": "Teknoka National Seminar Presenter",
  "Sertifikat Pemakalah Seminar": "Seminar Presenter Certificate",
  "Sertifikat kontribusi sebagai Tim Support teknis dan operasional bidang naskah dalam penyelenggaraan Seminar Nasional Teknoka.": "Certificate of contribution as technical and operational Editorial Support Team in the organization of the TEKNOKA National Seminar.",
  "Sertifikat apresiasi sebagai pemakalah atas kontribusi penulisan dan penyampaian karya ilmiah riset pada Seminar Nasional Teknoka.": "Certificate of appreciation as presenter for scientific research paper writing and presentation at the TEKNOKA National Seminar."
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Sort replacement keys by length descending and precompile flexible whitespace regexes
const sortedTranslationKeys = Object.keys(cardTextTranslations).sort((a, b) => b.length - a.length);
const compiledCardTranslations = sortedTranslationKeys.map(key => {
  const trimmed = key.trim();
  const words = trimmed.split(/\s+/).map(w => escapeRegExp(w));
  let pattern = words.join('\\s+');
  if (/^[a-zA-Z0-9]/.test(trimmed)) {
    pattern = '(?<![a-zA-Z0-9])' + pattern;
  }
  if (/[a-zA-Z0-9]$/.test(trimmed)) {
    pattern = pattern + '(?![a-zA-Z0-9])';
  }
  return {
    regex: new RegExp(pattern, 'g'),
    replacement: cardTextTranslations[key]
  };
});

function translatePortfolioCards(lang) {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    // Select all text-bearing elements inside the card
    const targetElements = card.querySelectorAll(
      '.jurnal-meta-label, .jurnal-meta-value, .jurnal-ojs-title, .kpi-label, .kpi-val, ' +
      '.hki-meta-label, .hki-meta-value, .hki-edu-title, .hki-edu-abstract, .hki-tags span, .hki-detail-link, ' +
      '.jurnal-tags span, .jurnal-tag-publisher, .project-group-title, .project-group-badge, .sheet-row span, ' +
      '.jurnal-ojs-abstract-section h4, .jurnal-ojs-abstract-section p, ' +
      '.jurnal-ojs-footer .btn, .hki-edu-footer .btn, .overlay-btn, .btn'
    );

    targetElements.forEach(el => {
      if (!el.dataset.idHtml) {
        el.dataset.idHtml = el.innerHTML;
      }

      if (lang === 'id') {
        el.innerHTML = el.dataset.idHtml;
      } else {
        let content = el.dataset.idHtml;
        for (const item of compiledCardTranslations) {
          content = content.replace(item.regex, item.replacement);
        }
        el.innerHTML = content;
      }
    });
  });
}

let currentLang = localStorage.getItem('portfolio_lang') || 'id';
let currentTheme = localStorage.getItem('portfolio_theme') || 'light';

// --- THEME MANAGEMENT ---
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio_theme', theme);
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// --- LANGUAGE MANAGEMENT ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio_lang', lang);

  // Update active buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update all [data-i18n] elements
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update [data-i18n-placeholder] elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Translate all portfolio cards (Projects, Books, IPR, Journals, Certificates)
  translatePortfolioCards(lang);
}

// Initial theme apply before DOMContentLoaded for fast load without flicker
applyTheme(currentTheme);

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  setLanguage(currentLang);

  // --- THEME TOGGLE LISTENER ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // --- LANGUAGE SWITCH BUTTON LISTENERS ---
  const langIdBtn = document.getElementById('lang-id');
  const langEnBtn = document.getElementById('lang-en');

  if (langIdBtn) {
    langIdBtn.addEventListener('click', () => setLanguage('id'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }

  // --- 1. NAVBAR SCROLL EFFECT ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.querySelector('.nav-container')?.classList.add('scrolled');
    } else {
      header?.querySelector('.nav-container')?.classList.remove('scrolled');
    }
  });

  // --- 2. MOBILE MENU ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- 3. SCROLLSPY (ACTIVE NAV LINK ON SCROLL) ---
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActive);
  scrollActive(); // Run once on load

  // --- 4. INTERSECTION OBSERVER FOR SKILLS ANIMATION ---
  const skillsSection = document.getElementById('about');
  const progressFills = document.querySelectorAll('.skill-bar-fill');

  if (skillsSection && progressFills.length > 0) {
    const showSkills = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressFills.forEach(fill => {
            const percentage = fill.getAttribute('data-percentage');
            fill.style.width = percentage + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const skillsObserver = new IntersectionObserver(showSkills, {
      threshold: 0.15
    });

    skillsObserver.observe(skillsSection);
  }

  // --- 5. PORTFOLIO FILTERING (PRIMARY CATEGORIES) ---
  const setupFiltering = (filterContainerSelector, cardsSelector) => {
    const container = document.querySelector(filterContainerSelector);
    if (!container) return;

    const filterButtons = container.querySelectorAll('.filter-btn');
    const sectionElement = container.closest('section');
    const cards = sectionElement ? sectionElement.querySelectorAll(cardsSelector) : document.querySelectorAll(cardsSelector);

    let currentMainFilter = 'project';

    const updateVisibility = () => {
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (currentMainFilter === 'all' || cardCategory === currentMainFilter) {
          card.classList.remove('hide');
          void card.offsetWidth;
          card.classList.add('show');
        } else {
          card.classList.remove('show');
          card.classList.add('hide');
        }
      });
      translatePortfolioCards(currentLang);
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentMainFilter = button.getAttribute('data-filter');
        updateVisibility();
      });
    });

    const activeBtn = container.querySelector('.filter-btn.active') || filterButtons[0];
    if (activeBtn) {
      currentMainFilter = activeBtn.getAttribute('data-filter');
      updateVisibility();
    }
  };

  setupFiltering('.portfolio-filter-container', '.portfolio-card');

  // --- 6. CONTACT FORM SUBMISSION & TOAST ---
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('success-toast');
  const toastMessage = document.getElementById('toast-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        return;
      }

      submitBtn.disabled = true;
      const dict = translations[currentLang] || translations.id;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${dict.toast_sending}`;

      setTimeout(() => {
        showToast(dict.toast_success);
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }, 1500);
    });
  }

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});

