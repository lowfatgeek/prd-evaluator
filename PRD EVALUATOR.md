# **Product Requirements Document (PRD)**

## **Product Name**

**PRD Evaluator**

## **Document Version**

2.1

## **Status**

Draft – MVP Scope

## **Last Updated**

2026-04-13

## **Author**

Antigravity AI (Enhanced from v1.1)

---

# **1. Product Overview**

## **1.1 Product Description**

PRD Evaluator adalah aplikasi web yang memungkinkan pengguna **mengunggah dokumen Product Requirements Document (PRD)** dan mendapatkan **evaluasi otomatis berbasis AI** secara instan.

Sistem menganalisis isi dokumen dan menghasilkan laporan evaluasi yang mencakup:

- Skor kualitas PRD keseluruhan (final score)
- Penilaian per kategori (9 kategori utama)
- Analisis kekuatan dan kelemahan dokumen
- Deteksi bagian yang hilang (missing section detection)
- Rekomendasi perbaikan yang actionable

## **1.2 Tagline**

> *"Know if your PRD is ready before your first sprint."*

## **1.3 Core Value Proposition**

| Masalah | Solusi PRD Evaluator |
|---|---|
| PRD review lambat dan subjektif | Evaluasi otomatis berbasis AI dalam < 30 detik |
| Tidak tahu bagian mana yang kurang | Missing section detection yang eksplisit |
| Feedback tidak terstruktur | Output JSON terstandarisasi dengan 9 kategori |
| Tidak ada standar kualitas PRD | Scoring framework yang konsisten dan transparan |

---

# **2. Problem Statement**

Banyak tim produk membuat PRD, tetapi sering mengalami permasalahan berikut:

1. **Ketidaklengkapan**: Tidak mengetahui apakah PRD sudah cukup lengkap untuk masuk ke fase development.
2. **Subjektivitas**: Penilaian PRD antar reviewer berbeda-beda, tidak ada standar baku.
3. **Waktu review**: Review manual membutuhkan waktu lama, terutama untuk dokumen panjang.
4. **Tidak tahu kekurangan**: Sulit mengidentifikasi secara tepat bagian mana yang masih kurang.
5. **Dampak ke development**: Developer menerima requirement yang ambigu sehingga implementasi tidak efisien.

**Dampak bisnis:**
- Proyek development tidak efisien
- Scope produk berubah-ubah di tengah sprint
- Roadmap tidak realistis
- Biaya pengembangan membengkak

---

# **3. Goals**

## **3.1 Primary Goals**

1. Memungkinkan pengguna mengevaluasi kualitas PRD dalam waktu < 30 detik.
2. Menyediakan framework penilaian PRD yang konsisten dan terstandarisasi (9 kategori).
3. Memberikan feedback yang actionable untuk meningkatkan kualitas PRD.

## **3.2 Secondary Goals**

1. Mengurangi waktu review dokumen produk secara signifikan.
2. Mempermudah identifikasi kekurangan PRD secara spesifik.
3. Membantu pengguna membuat PRD yang lebih siap untuk development.
4. Menjadi referensi standar kualitas PRD di komunitas produk dan startup Indonesia.

## **3.3 Out of Scope (MVP)**

- User authentication / akun pengguna
- Multiple PRD comparison
- PRD rewrite assistant
- Team collaboration
- Custom scoring rubric

---

# **4. Success Metrics**

## **4.1 Performance Metrics**

| Metric | Target |
|---|---|
| Waktu evaluasi dokumen | < 30 detik |
| Waktu parsing dokumen | < 10 detik |
| Uptime sistem | ≥ 99% |
| File upload max size | 10 MB |

## **4.2 User Experience Metrics**

| Metric | Target |
|---|---|
| Pengguna merasa hasil evaluasi membantu | ≥ 80% |
| Pengguna menggunakan rekomendasi untuk memperbaiki PRD | ≥ 70% |
| Pengguna menyelesaikan flow upload → hasil evaluasi | ≥ 90% |

## **4.3 Business Metrics (Post-MVP)**

| Metric | Target |
|---|---|
| Monthly Active Users (MAU) | ≥ 500 user (3 bulan pertama) |
| Dokumen dievaluasi per hari | ≥ 50 dokumen |
| Return user rate | ≥ 40% |

---

# **5. Target Users**

## **5.1 Primary Users**

### **Startup Founders**
- **Context**: Sedang membangun produk digital, ingin memastikan PRD matang sebelum memulai development.
- **Pain Point**: Tidak punya reviewer PRD internal; ingin validasi cepat.
- **Goal**: Mendapatkan konfirmasi bahwa dokumennya siap untuk dikerjakan developer.

### **Product Managers**
- **Context**: Menulis PRD sebagai bagian dari rutinitas kerja.
- **Pain Point**: Review manual lama, tidak ada standar baku.
- **Goal**: Melakukan self-review cepat sebelum distribusi ke tim.

### **Developers**
- **Context**: Menerima PRD dari tim produk.
- **Pain Point**: PRD yang ambigu memperlambat implementasi.
- **Goal**: Memverifikasi kelengkapan requirement sebelum sprint dimulai.

## **5.2 Secondary Users**

### **Product Design Students**
- **Context**: Belajar membuat PRD, butuh feedback objektif.

### **Freelance Consultants**
- **Context**: Membantu klien menyusun dokumen produk; perlu alat validasi.

---

# **6. Use Cases**

## **Use Case 1 — Single PRD Evaluation (MVP)**

**Aktor**: Pengguna (User)

**Precondition**: User memiliki file PRD dalam format yang didukung.

**Flow Utama**:
1. User membuka halaman utama aplikasi (Home Page).
2. User melakukan drag & drop file ke upload zone atau klik untuk memilih file.
3. User memilih file PRD dari device-nya.
4. Sistem memvalidasi format dan ukuran file.
5. Sistem menampilkan nama file dan preview singkat yang berhasil diupload.
6. User mengklik tombol "Evaluate".
7. Sistem menampilkan loading state dengan progress indicator.
8. Sistem mengekstrak dan mem-parse isi dokumen.
9. Backend mengirim konten dokumen ke AI melalui OpenRouter API.
10. AI menganalisis dan mengembalikan hasil dalam format JSON.
11. Sistem menampilkan Evaluation Result Page.
12. User membaca hasil evaluasi dan rekomendasi.
13. User mengunduh laporan dalam format PDF (opsional).

**Alternative Flow — File tidak valid**:
- 4a. Sistem mendeteksi format file tidak didukung → tampilkan error "Format file tidak didukung. Gunakan TXT, MD, atau PDF."
- 4b. File melebihi ukuran 10MB → tampilkan error "Ukuran file terlalu besar. Maksimal 10MB."

**Alternative Flow — AI timeout**:
- 9a. OpenRouter API timeout > 30 detik → sistem menampilkan pesan error dengan opsi retry.

**Postcondition**: User mendapatkan laporan evaluasi PRD yang terstruktur.

---

# **7. Supported File Formats**

## **MVP**

| Format | Extension | Parser |
|---|---|---|
| Plain Text | `.txt` | Native string read |
| Markdown | `.md` | Native string read |
| PDF | `.pdf` | PyMuPDF / pdfplumber |

**Tidak didukung (MVP):**
- DOCX/DOC
- PPTX
- HTML
- RTF

**Rencana V2:** Penambahan dukungan DOCX menggunakan library `python-docx`.

---

# **8. Evaluation Framework**

## **8.1 Kategori Evaluasi**

PRD dievaluasi berdasarkan **9 kategori utama** berikut:

| # | Category | Key | Description |
|---|---|---|---|
| 1 | Product Clarity | `product_clarity` | Kejelasan masalah, solusi, dan value proposition produk |
| 2 | User Understanding | `user_understanding` | Pemahaman terhadap target pengguna, kebutuhan, dan persona |
| 3 | Feature Definition | `feature_definition` | Kelengkapan dan kejelasan definisi fitur produk |
| 4 | AI Design | `ai_design` | Desain dan arsitektur sistem AI (jika relevan) |
| 5 | Technical Architecture | `technical_architecture` | Kejelasan stack teknologi, arsitektur sistem, dan infrastruktur |
| 6 | Product Viability | `product_viability` | Kelayakan produk secara bisnis: monetisasi, pricing, sustainability |
| 7 | Execution Readiness | `execution_readiness` | Kesiapan dokumen untuk development: roadmap, MVP scope, prioritas |
| 8 | User Flow | `user_flow` | Kejelasan alur penggunaan dan user journey |
| 9 | Non-functional Requirements | `non_functional_requirements` | Performa, keamanan, skalabilitas, dan reliabilitas |

## **8.2 Bobot Kategori**

Untuk MVP, seluruh kategori memiliki **bobot yang sama** (masing-masing 1/9 dari total skor).

> Rencana V2: Bobot kategori dapat dikustomisasi per user atau per template industri.

## **8.3 Penanganan Kategori "AI Design" (N/A)**

Banyak PRD yang tidak memiliki unsur AI dalam produknya. Untuk menghindari penilaian yang tidak adil:

- Jika AI evaluator **tidak mendeteksi** komponen AI dalam dokumen PRD, kategori `ai_design` mendapatkan label **"N/A — Not Applicable"**.
- Skor `ai_design` **tidak diikutsertakan** dalam perhitungan `final_score`.
- `final_score` dihitung dari **rata-rata 8 kategori yang tersisa**.
- Jika AI evaluator **mendeteksi** komponen AI (misalnya produk menggunakan ML, LLM, recommendation engine, computer vision, dsb.), maka `ai_design` dinilai 1–10 secara normal dan diikutsertakan dalam rata-rata.

**Indikator kehadiran AI dalam PRD:**
- Menyebut model AI / ML / LLM / NLP / computer vision
- Menyebut training data, dataset, atau fine-tuning
- Menyebut inference, prediction, recommendation, atau classification
- Menyebut integrasi API AI pihak ketiga (OpenAI, Claude, Gemini, dll.)

**Perubahan pada JSON output jika N/A:**

```json
"ai_design": {
  "score": null,
  "applicable": false,
  "explanation": "No AI component detected in this PRD.",
  "evidence": ""
}
```

> **Catatan:** Instruksi N/A handling ini disertakan dalam System Prompt AI (lihat Appendix B).

---

# **9. Scoring System**

## **9.1 Score Range**

Setiap kategori mendapatkan nilai **1 – 10** berdasarkan panduan berikut:

| Score | Label | Kriteria |
|---|---|---|
| 1 – 3 | Very Weak | Bagian tidak ada atau sangat tidak jelas |
| 4 – 5 | Incomplete | Ada, namun tidak lengkap atau masih sangat samar |
| 6 – 7 | Adequate | Cukup, namun kurang mendalam atau kurang detail |
| 8 – 9 | Strong | Jelas, terstruktur, dan memiliki detail yang baik |
| 10 | Exceptional | Sangat lengkap, jelas, dan mencakup semua aspek secara komprehensif |

## **9.2 Aturan Mandatory Cap**

Aturan hard cap untuk mencegah skor tidak konsisten:

| Kondisi | Aturan |
|---|---|
| Technical stack tidak disebutkan | `technical_architecture` ≤ 4 |
| Roadmap atau MVP tidak ada | `execution_readiness` ≤ 4 |
| Pricing/monetization tidak ada | `product_viability` ≤ 6 |
| User flow tidak dideskripsikan | `user_flow` ≤ 5 |
| Non-functional requirements tidak ada | `non_functional_requirements` ≤ 5 |

## **9.3 Final Score**

```
# Jika ai_design applicable (PRD memiliki komponen AI):
final_score = sum(all 9 category scores) / 9

# Jika ai_design NOT applicable (N/A):
final_score = sum(8 category scores, tanpa ai_design) / 8
```

## **9.4 Verdict Mapping**

| Score Range | Verdict | Makna |
|---|---|---|
| 0.0 – 3.9 | 🔴 Very Weak | PRD sangat tidak lengkap, tidak layak dilanjutkan |
| 4.0 – 5.9 | 🟠 Early Draft | Baru tahap awal, masih banyak yang perlu diisi |
| 6.0 – 7.4 | 🟡 Good Draft | Cukup baik, tetapi masih perlu penyempurnaan |
| 7.5 – 8.4 | 🟢 Strong PRD | PRD solid, siap untuk review tim |
| 8.5 – 10.0 | ✅ Development Ready | PRD sangat siap, bisa langsung masuk development |

---

# **10. Key Features (MVP)**

## **10.1 File Upload**

**Deskripsi**: User dapat mengunggah dokumen PRD melalui interface drag-and-drop atau file picker.

**Spesifikasi:**
- Supported formats: `.txt`, `.md`, `.pdf`
- Ukuran file maksimal: **10 MB**
- Upload progress indicator (real-time)
- File name preview setelah upload berhasil
- Validasi format dan ukuran dilakukan di sisi **client dan server**

**Error States:**
- Format tidak didukung
- Ukuran file melebihi batas
- Koneksi terputus saat upload

---

## **10.2 Document Parsing**

**Deskripsi**: Backend mengekstrak isi teks dari dokumen yang diupload untuk dikirim ke AI.

**Parsing Pipeline:**
1. Terima file dari upload endpoint
2. Deteksi tipe file berdasarkan ekstensi dan MIME type
3. Ekstraksi teks berdasarkan format:
   - `.txt` dan `.md`: baca langsung sebagai string UTF-8
   - `.pdf`: gunakan `PyMuPDF` (fitz) atau `pdfplumber` untuk ekstraksi teks
4. Normalisasi whitespace dan karakter tidak terbaca
5. Limit teks ke panjang token yang aman (estimasi maks **15.000 token**)

**Penanganan Edge Case:**
- PDF yang hanya berisi gambar (scanned PDF) → tampilkan error "Dokumen tidak dapat diekstrak. Pastikan PDF berisi teks."
- File rusak atau terenkripsi → tampilkan error yang informatif

**Minimum Content Threshold:**
- Dokumen yang berhasil diekstrak harus memiliki minimal **200 karakter** teks yang bermakna (setelah normalisasi whitespace).
- Jika konten di bawah threshold, sistem **menolak evaluasi** dan mengembalikan error:

```json
{
  "error": "content_too_short",
  "message": "Document content is too short for evaluation. Please ensure your PRD has sufficient content (minimum ~200 characters).",
  "character_count": 45
}
```

- HTTP status: `422 Unprocessable Entity`
- Tujuan: mencegah pemborosan token AI untuk dokumen kosong atau nyaris kosong.
- Validasi dilakukan **setelah** parsing dan normalisasi, **sebelum** memanggil OpenRouter API.

---

## **10.3 Automated Evaluation Engine**

**Deskripsi**: Backend mengirim konten dokumen ke OpenRouter API dan memproses respons AI.

**Proses:**
1. Konstruksi System Prompt (lihat Appendix B)
2. Konstruksi User Prompt dengan isi dokumen (lihat Appendix C)
3. Kirim request ke OpenRouter API
4. Parse dan validasi respons JSON dari AI
5. Simpan hasil evaluasi ke database
6. Return hasil ke frontend

**Output evaluasi:**
- Skor per kategori (9 kategori)
- Penjelasan penilaian per kategori
- Evidence (kutipan dari dokumen yang mendukung/menolak skor)
- Kekuatan dokumen (strengths)
- Kelemahan dokumen (weaknesses)
- Missing sections
- Improvement suggestions

---

## **10.4 Missing Section Detection**

**Deskripsi**: Sistem secara eksplisit melaporkan bagian standar PRD yang tidak ditemukan dalam dokumen.

**Bagian yang dideteksi:**

| Bagian | Keterangan |
|---|---|
| Problem Statement | Permasalahan yang diselesaikan produk |
| Target Users / Personas | Siapa pengguna produk |
| Feature List | Daftar fitur utama |
| User Flow | Alur penggunaan produk |
| Technical Stack | Teknologi yang digunakan |
| Roadmap | Rencana pengembangan |
| Monetization / Pricing | Model bisnis atau harga |
| Non-functional Requirements | Performa, keamanan, skalabilitas |
| Success Metrics | Ukuran keberhasilan produk |

---

## **10.5 Evaluation Dashboard**

**Deskripsi**: Halaman hasil evaluasi menampilkan laporan lengkap dengan visualisasi.

**Komponen UI:**
- **Skor Utama**: Final score dengan tampilan besar + indicator warna
- **Verdict Badge**: Label verdict (Very Weak / Early Draft / dll.)
- **Radar Chart**: Visualisasi 9 kategori skor dalam bentuk spider chart
- **Category Score Cards**: Kartu skor per kategori dengan penjelasan singkat
- **Evidence Section**: Kutipan dari dokumen yang mendukung penilaian
- **Strengths & Weaknesses**: List kekuatan dan kelemahan
- **Missing Sections**: List bagian yang tidak ditemukan
- **Improvement Suggestions**: Rekomendasi yang actionable

---

## **10.6 Report Export**

**Deskripsi**: User dapat mengunduh laporan evaluasi dalam format PDF.

**Spesifikasi:**
- Format: PDF (A4 portrait)
- Konten: seluruh hasil evaluasi (skor, penjelasan, rekomendasi)
- File nama: `PRD_Evaluation_Report_[timestamp].pdf`

**Layout Template PDF:**

```
┌──────────────────────────────────────────┐
│  HEADER (setiap halaman)                 │
│  Logo PRD Evaluator  |  Tanggal Evaluasi │
│  Nama file PRD yang dievaluasi           │
├──────────────────────────────────────────┤
│                                          │
│  HALAMAN 1: SUMMARY                      │
│  ┌──────────────────────────────────┐    │
│  │  FINAL SCORE: 7.8 / 10          │    │
│  │  VERDICT: Strong PRD             │    │
│  └──────────────────────────────────┘    │
│                                          │
│  Radar Chart (9 kategori)                │
│                                          │
│  Strengths          │  Weaknesses        │
│  • ...              │  • ...             │
│  • ...              │  • ...             │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  HALAMAN 2: DETAIL SCORES                │
│  ┌──────────────────────────────────┐    │
│  │ Category: Product Clarity        │    │
│  │ Score: 9/10                      │    │
│  │ Explanation: ...                 │    │
│  │ Evidence: "..."                  │    │
│  └──────────────────────────────────┘    │
│  (repeat untuk setiap kategori)          │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  HALAMAN 3: RECOMMENDATIONS              │
│  Missing Sections:                       │
│  • ...                                   │
│                                          │
│  Improvement Suggestions:                │
│  • ...                                   │
│  • ...                                   │
│                                          │
├──────────────────────────────────────────┤
│  FOOTER (setiap halaman)                 │
│  "Generated by PRD Evaluator"            │
│  Page X of Y  |  prdevaluator.com        │
└──────────────────────────────────────────┘
```

**Branding PDF:**
- Header: logo PRD Evaluator (kiri), tanggal evaluasi (kanan)
- Footer: "Generated by PRD Evaluator — prdevaluator.com" + nomor halaman
- Font: Inter (konsisten dengan web app)
- Verdict badge menggunakan warna sesuai Design System (Section 12.4)
- Radar chart di-render sebagai gambar statis (PNG) dan di-embed ke PDF

**Tidak tersedia di MVP:**
- Export ke DOCX
- Share via link

---

# **11. User Flow (MVP)**

```
[1] User membuka website (Home Page — landing + upload dalam satu halaman)
         ↓
[2] User drag-drop atau pilih file PRD
         ↓
[3] Sistem validasi format & ukuran file
         ↓ (validasi gagal? → tampilkan error, kembali ke [2])
[4] User klik tombol "Evaluate"
         ↓
[5] Backend menerima file, parsing dokumen
         ↓
[6] Backend kirim teks ke OpenRouter API (AI Evaluation)
         ↓ (timeout atau error? → tampilkan error + opsi Retry)
[7] AI mengembalikan hasil JSON
         ↓
[8] Backend simpan hasil ke database, return ke frontend
         ↓
[9] Frontend menampilkan Evaluation Result Page
         ↓
[10] User membaca hasil evaluasi (opsional: download PDF)
```

**Catatan MVP:**
- Tidak ada sistem login atau akun pengguna.
- Tidak ada riwayat evaluasi yang tersimpan per user.
- Setiap evaluasi bersifat stateless dari sisi user.
- **Single Upload Policy**: User hanya dapat melakukan **1 upload dan evaluasi pada satu waktu**. Tombol "Evaluate" di-disable selama evaluasi sedang berjalan (`status: processing`). User harus menunggu hingga report selesai (`completed`) atau gagal (`failed`) sebelum dapat mengirimkan evaluasi baru.

**Implementasi Single Upload:**
- **Frontend**: tombol upload dan evaluate di-disable + pesan "Evaluation in progress..." selama status `processing`.
- **Backend**: reject `POST /api/v1/evaluate` jika sudah ada evaluasi aktif (`status: processing`) dari IP address yang sama. Response:

```json
{
  "error": "evaluation_in_progress",
  "message": "You already have an evaluation in progress. Please wait until it completes.",
  "active_evaluation_id": "uuid-string"
}
```

- HTTP status: `409 Conflict`

---

# **12. UI Pages & Components**

## **12.1 Home Page (Landing + Upload)**

**URL**: `/`

**Tujuan**: Menjelaskan fungsi aplikasi, membangun kepercayaan, dan langsung memungkinkan user untuk mengunggah serta mengevaluasi PRD — semua dalam satu halaman. Karena MVP tidak memiliki fitur autentikasi (sign up / sign in), user tidak perlu navigasi ke halaman terpisah untuk memulai evaluasi.

**Komponen:**
- **Hero Section**: tagline + upload zone langsung terintegrasi
- **Upload Zone**: area drag-and-drop, dukungan klik untuk file picker
- **File Preview**: Tampilan nama file, ukuran, dan format setelah upload
- **Language Selector**: dropdown pemilihan bahasa output evaluasi
- **Format Info**: informasi format yang didukung (TXT, MD, PDF — max 10MB)
- **Evaluate Button**: tombol primer untuk memulai evaluasi
- **Loading State**: skeleton/spinner + pesan progress ("Parsing document...", "Evaluating PRD...", "Generating report...")
- **How It Works**: langkah-langkah singkat (3 step: Upload → AI Analyze → Get Report)
- **Evaluation Categories**: preview 9 kategori dengan ikon
- **Sample Verdict**: contoh tampilan hasil evaluasi (opsional, di bawah fold)

---

## **12.2 Evaluation Result Page**

**URL**: `/result/[evaluation_id]`

**Tujuan**: Menampilkan hasil evaluasi secara lengkap dan terstruktur.

**Komponen:**
- **Score Header**: Final score (besar), verdict badge, nama file yang dievaluasi
- **Radar Chart**: Visualisasi 9 kategori dalam spider chart (menggunakan Recharts atau Chart.js)
- **Strengths Panel**: List kekuatan dokumen
- **Weaknesses Panel**: List kelemahan dokumen
- **Category Cards (Detailed Analysis)**: 9 kartu dalam **2-column grid** (card ke-9 full-width). Setiap card berisi:
  - **Circular Score Ring** (80px): donut chart dengan angka skor di tengah, warna ring sesuai score range
  - Nama kategori + ikon
  - Penjelasan penilaian (explanation)
  - Kutipan dari dokumen (evidence) — blockquote style, font monospace
  - Color-coded left border sesuai skor (merah → kuning → hijau → indigo)
- **Missing Sections Panel**: List bagian yang tidak ditemukan
- **Improvement Suggestions Panel**: List rekomendasi perbaikan
- **Download Button**: Tombol download PDF report
- **Evaluate Another PRD**: Tombol untuk kembali ke halaman utama (`/`)

---

## **12.3 Error Page**

**URL**: `/error`

**Tujuan**: Menampilkan informasi error yang informatif dan opsi recovery.

**Komponen:**
- Pesan error yang jelas
- Saran tindakan (retry, kembali ke home, cek format file)
- CTA button untuk kembali ke halaman utama (`/`)

---

## **12.4 Design System**

**Typography:**
- Font: **Inter** (Google Fonts)
- Heading: Inter 700
- Body: Inter 400
- Code/JSON: Monospace (JetBrains Mono)

**Color Palette:**
- Primary: `#F77F00` (Orange)
- Background: `#003049` (Deep Navy)
- Surface: `#013B5A`
- Text Primary: `#F8FAFC`
- Text Secondary: `#94A3B8`
- Success: `#FCBF49` (Gold)
- Warning: `#F77F00` (Orange)
- Error: `#D62828` (Crimson Red)

**Verdict Colors:**
- Very Weak: `#D62828` (Crimson Red)
- Early Draft: `#F77F00` (Orange)
- Good Draft: `#FCBF49` (Gold)
- Strong PRD: `#015B8A` (Light Navy)
- Development Ready: `#FFFFFF` (White)

**Responsive Design & Breakpoints:**

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked panels |
| Tablet | 640px – 1024px | Two column untuk score cards |
| Desktop | > 1024px | Full layout, side-by-side panels |

**Pendekatan**: Mobile-first. CSS ditulis dari mobile ke atas menggunakan `min-width` media queries.

**Penyesuaian per halaman:**

| Halaman | Mobile (< 640px) | Tablet (640-1024px) | Desktop (> 1024px) |
|---|---|---|---|
| Home Page | Hero + upload zone stacked, CTA full-width, steps vertikal | Hero + upload zone side-by-side, info sections 2-column | Full hero + upload zone center 60% max-width 600px, info sections side-by-side |
| Result Page | Score header stacked, radar chart full-width, category cards 1-column | Radar + score side-by-side, cards 2-column | Radar kiri + summary kanan, cards 3-column grid |

**Komponen Khusus Mobile:**
- Radar Chart: skala diperkecil, label font-size dikurangi
- Category Cards: collapsible accordion (ketuk untuk buka detail)
- Download PDF button: sticky bottom bar di mobile
- Language selector: tetap visible di atas upload zone

---

## **12.5 SEO & Meta Tags**

**Penerapan SEO pada setiap halaman:**

### Home Page (`/`)
```html
<title>PRD Evaluator — AI-Powered PRD Quality Assessment</title>
<meta name="description" content="Evaluate your Product Requirements Document (PRD) instantly with AI. Upload your PRD and get scores, recommendations, and missing section detection in under 30 seconds." />
<meta name="keywords" content="PRD, product requirements, evaluator, AI review, product management" />

<!-- Open Graph -->
<meta property="og:title" content="PRD Evaluator — Know if your PRD is ready" />
<meta property="og:description" content="AI-powered PRD quality assessment. Upload your PRD and get instant feedback." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://prdevaluator.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PRD Evaluator" />
<meta name="twitter:description" content="AI-powered PRD quality assessment tool." />
<meta name="twitter:image" content="/og-image.png" />
```

### Result Page (`/result/[id]`)
```html
<title>PRD Evaluation Result — PRD Evaluator</title>
<meta name="robots" content="noindex, nofollow" />
<!-- noindex karena halaman hasil bersifat unik per evaluasi -->
```

**SEO Teknis:**
- **Sitemap XML**: `/sitemap.xml` — di-generate otomatis oleh Next.js
- **Robots.txt**: `/robots.txt` — izinkan crawl home page, block result pages
- **Canonical URL**: pada setiap halaman
- **Heading hierarchy**: satu `<h1>` per halaman
- **Semantic HTML**: menggunakan `<main>`, `<section>`, `<article>`, `<nav>`
- **Performance target**: Lighthouse Score ≥ 90 (Performance, Accessibility, Best Practices, SEO)

**OG Image:**
- Ukuran: 1200 x 630 px
- Konten: logo PRD Evaluator + tagline + sample score visual
- Format: PNG

---

# **13. Technical Architecture**

## **13.1 Stack Overview**

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + Shadcn UI |
| Backend | FastAPI (Python) |
| Database | Supabase (PostgreSQL) |
| File Storage | Supabase Storage |
| AI Engine | OpenRouter API |
| PDF Generation | WeasyPrint / ReportLab |
| PDF Parsing | PyMuPDF (fitz) / pdfplumber |
| Queue / Worker | Redis + ARQ (async task queue) |
| Deployment | Railway / Render (Backend), Vercel (Frontend) |

---

## **13.2 System Architecture Diagram**

```
[Browser / User]
       ↓ HTTPS
[Next.js Frontend — Vercel]
       ↓ REST API
[FastAPI Backend — Railway/Render]
    ↓           ↓
[Supabase]   [OpenRouter API]
[PostgreSQL] [AI LLM Model]
[File Storage]
    ↓
[Redis Queue — ARQ Worker]
```

---

## **13.3 Frontend Architecture (Next.js)**

### **Directory Structure**

```
/app
  /page.tsx              → Home Page (Landing + Upload)
  /result/[id]/page.tsx  → Result Page
  /error/page.tsx        → Error Page
/components
  /ui/                   → Shadcn UI base components
  /upload/
    UploadZone.tsx       → Drag & drop upload
    FilePreview.tsx      → File info setelah upload
  /result/
    ScoreHeader.tsx      → Final score + verdict
    RadarChart.tsx       → Spider chart 9 kategori
    CategoryCard.tsx     → Kartu skor per kategori
    StrengthsPanel.tsx   → Kekuatan dokumen
    WeaknessesPanel.tsx  → Kelemahan dokumen
    MissingPanel.tsx     → Missing sections
    SuggestionsPanel.tsx → Improvement suggestions
    DownloadButton.tsx   → Tombol download PDF
/lib
  api.ts                 → API client untuk backend
  types.ts               → TypeScript interface dan types
  utils.ts               → Helper functions
/hooks
  useEvaluation.ts       → Custom hook untuk evaluation flow
```

### **State Management**

- State lokal menggunakan `useState` dan `useReducer`
- Server state menggunakan React Query (TanStack Query)
- Tidak menggunakan Redux di MVP

---

## **13.4 Backend Architecture (FastAPI)**

### **Directory Structure**

```
/app
  main.py                 → FastAPI app entry point
  /api
    /v1
      /endpoints
        upload.py         → POST /api/v1/upload
        evaluate.py       → POST /api/v1/evaluate
        results.py        → GET /api/v1/results/{id}
        export.py         → GET /api/v1/export/{id}/pdf
  /core
    config.py             → Environment & configuration
    security.py           → API key validation, rate limiting
  /services
    parser_service.py     → Document parsing logic
    ai_service.py         → OpenRouter API integration
    pdf_service.py        → PDF export generation
    db_service.py         → Database operations
  /models
    evaluation.py         → Pydantic models (request/response)
    db_models.py          → SQLAlchemy ORM models
  /worker
    tasks.py              → ARQ async task definitions
```

### **API Endpoints**

| Method | Endpoint | Deskripsi |
|---|---|---|
| `POST` | `/api/v1/upload` | Upload file PRD, return `upload_id` |
| `POST` | `/api/v1/evaluate` | Trigger evaluasi untuk `upload_id`, return `evaluation_id` |
| `GET` | `/api/v1/results/{evaluation_id}` | Ambil hasil evaluasi berdasarkan ID |
| `GET` | `/api/v1/export/{evaluation_id}/pdf` | Download PDF report |
| `GET` | `/api/v1/health` | Health check endpoint |

### **API Request/Response Detail**

#### `POST /api/v1/upload`

**Request:**
```
Content-Type: multipart/form-data
Body: file (binary)
```

**Response (200 OK):**
```json
{
  "upload_id": "uuid-string",
  "filename": "my-prd.pdf",
  "file_size": 153600,
  "format": "pdf",
  "status": "uploaded"
}
```

**Error Responses:**
```json
// 400 Bad Request - format tidak didukung
{ "error": "unsupported_format", "message": "Format file tidak didukung." }

// 413 Payload Too Large - file terlalu besar
{ "error": "file_too_large", "message": "Ukuran file maksimal 10MB." }
```

---

#### `POST /api/v1/evaluate`

**Request:**
```json
{ "upload_id": "uuid-string" }
```

**Response (202 Accepted):**
```json
{
  "evaluation_id": "uuid-string",
  "status": "processing",
  "estimated_time_seconds": 30
}
```

---

#### `GET /api/v1/results/{evaluation_id}`

**Response (200 OK):**
```json
{
  "evaluation_id": "uuid-string",
  "status": "completed",
  "filename": "my-prd.pdf",
  "evaluated_at": "2026-04-13T10:00:00Z",
  "result": {
    "final_score": 7.8,
    "verdict": "Strong PRD",
    "category_scores": {
      "product_clarity": { "score": 9, "explanation": "...", "evidence": "..." },
      "user_understanding": { "score": 8, "explanation": "...", "evidence": "..." },
      "feature_definition": { "score": 8, "explanation": "...", "evidence": "..." },
      "ai_design": { "score": 7, "explanation": "...", "evidence": "..." },
      "technical_architecture": { "score": 8, "explanation": "...", "evidence": "..." },
      "product_viability": { "score": 6, "explanation": "...", "evidence": "..." },
      "execution_readiness": { "score": 8, "explanation": "...", "evidence": "..." },
      "user_flow": { "score": 8, "explanation": "...", "evidence": "..." },
      "non_functional_requirements": { "score": 7, "explanation": "...", "evidence": "..." }
    },
    "strengths": ["...", "..."],
    "weaknesses": ["...", "..."],
    "missing_sections": ["..."],
    "improvement_suggestions": ["...", "..."]
  }
}
```

---

#### `GET /api/v1/export/{evaluation_id}/pdf`

**Response (200 OK):**
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="PRD_Evaluation_Report_20260413.pdf"
Body: [binary PDF data]
```

---

## **13.5 Database Schema**

### **Tabel `uploads`**

| Column | Type | Description |
|---|---|---|
| `id` | UUID (PK) | Upload ID |
| `filename` | VARCHAR(255) | Nama file asli |
| `file_path` | TEXT | Path di Supabase Storage |
| `file_size` | INTEGER | Ukuran file dalam bytes |
| `file_format` | VARCHAR(10) | Format file (txt, md, pdf) |
| `created_at` | TIMESTAMP | Waktu upload |
| `ip_address` | VARCHAR(45) | IP address user (untuk rate limiting) |

### **Tabel `evaluations`**

| Column | Type | Description |
|---|---|---|
| `id` | UUID (PK) | Evaluation ID |
| `upload_id` | UUID (FK → uploads.id) | Referensi ke upload |
| `status` | ENUM | `pending`, `processing`, `completed`, `failed` |
| `final_score` | DECIMAL(4,2) | Skor akhir evaluasi |
| `verdict` | VARCHAR(50) | Label verdict |
| `result_json` | JSONB | Hasil evaluasi lengkap (JSON) |
| `ai_model_used` | VARCHAR(100) | Model AI yang digunakan |
| `tokens_used` | INTEGER | Jumlah token yang digunakan |
| `created_at` | TIMESTAMP | Waktu evaluasi dimulai |
| `completed_at` | TIMESTAMP | Waktu evaluasi selesai |
| `error_message` | TEXT | Pesan error jika gagal |

### **Tabel `rate_limits`**

| Column | Type | Description |
|---|---|---|
| `id` | UUID (PK) | ID |
| `ip_address` | VARCHAR(45) | IP address |
| `request_count` | INTEGER | Jumlah evaluasi dalam window waktu |
| `window_start` | TIMESTAMP | Awal window rate limiting |

---

# **14. AI Evaluation Engine**

## **14.1 Overview**

Evaluasi PRD menggunakan **Large Language Model (LLM)** melalui **OpenRouter API**.

Model AI dikonfigurasi melalui environment variable sehingga mudah diganti tanpa perubahan kode:

```env
OPENROUTER_API_KEY=sk-or-...
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
```

**Model yang direkomendasikan:**

| Model | OpenRouter ID | Keunggulan |
|---|---|---|
| Claude 3.5 Sonnet | `anthropic/claude-3.5-sonnet` | Terbaik untuk analisis dokumen |
| GPT-4.1 | `openai/gpt-4.1` | Cepat dan akurat |
| GPT-4o | `openai/gpt-4o` | Reasoning kuat |
| Gemini 1.5 Pro | `google/gemini-pro-1.5` | Alternatif hemat |

## **14.2 AI Evaluation Flow**

```
[1] Terima upload_id dari request
         ↓
[2] Query dokumen dari database (status: uploaded)
         ↓
[3] Ekstrak teks dari file (Document Parsing Layer)
         ↓
[4] Tokenisasi: cek panjang teks, potong jika melebihi limit
         ↓
[5] Bangun System Prompt + User Prompt (lihat Appendix B & C)
         ↓
[6] Kirim request ke OpenRouter API
        temperature: 0.2 | max_tokens: 2000
         ↓
[7] Terima respons raw dari AI
         ↓
[8] Validasi respons: apakah JSON valid?
    ↓ Ya                        ↓ Tidak
[9] Parse JSON response         Retry 1x → jika gagal → set status: failed
         ↓
[10] Hitung final_score (rata-rata 9 kategori)
         ↓
[11] Simpan hasil ke tabel evaluations (status: completed)
         ↓
[12] Return hasil ke frontend
```

## **14.3 Token Management**

- **Estimasi maksimal input**: 15.000 token (sekitar 10.000-12.000 kata)
- Jika dokumen melebihi limit, sistem akan:
  1. Memotong dokumen di batas paragraf terakhir sebelum token limit
  2. Menambahkan disclaimer di hasil evaluasi: *"Dokumen melebihi batas maksimal. Evaluasi dilakukan berdasarkan [X] karakter pertama."*

## **14.4 OpenRouter API Settings**

```python
{
  "model": os.getenv("OPENROUTER_MODEL", "anthropic/claude-3.5-sonnet"),
  "temperature": 0.2,
  "max_tokens": 2000,
  "response_format": { "type": "json_object" }  # jika didukung model
}
```

---

# **15. Performance Requirements**

| Komponen | Target |
|---|---|
| File upload (10MB) | < 5 detik |
| Document parsing | < 10 detik |
| AI evaluation (API call) | < 25 detik |
| Total waktu evaluasi end-to-end | < 30 detik |
| Concurrency minimum | 20 evaluasi paralel |
| Ukuran file maksimal | 10 MB |

---

# **16. Security Requirements**

## **16.1 File Upload Security**
- Validasi tipe file berdasarkan **MIME type**, bukan hanya ekstensi
- File di-scan menggunakan library antivirus ringan (ClamAV) — opsional untuk MVP
- File tidak dapat dieksekusi; hanya diekstrak sebagai teks
- File dihapus dari storage setelah evaluasi selesai (retention: 24 jam)

## **16.2 API Security**
- Semua API key disimpan sebagai **environment variable** — tidak pernah di-commit ke repository
- Backend menggunakan **HTTPS only** di production
- CORS dikonfigurasi untuk hanya mengizinkan domain frontend yang terdaftar

## **16.3 Rate Limiting**
- Batas per IP: **10 evaluasi per jam**
- Implementasi menggunakan Redis (sliding window algorithm)
- Response saat rate limit tercapai: `429 Too Many Requests`

```json
{
  "error": "rate_limit_exceeded",
  "message": "Anda telah mencapai batas 10 evaluasi per jam. Coba lagi nanti.",
  "retry_after_seconds": 3600
}
```

## **16.4 Input Validation**
- Seluruh input dari user divalidasi di sisi server
- Penggunaan Pydantic model untuk validasi request body di FastAPI
- Sanitasi teks sebelum dimasukkan ke prompt AI

---

# **17. Scalability**

## **17.1 Horizontal Scaling**
- Backend FastAPI bersifat **stateless**, dapat di-scale secara horizontal
- Task evaluasi diproses secara **asynchronous** melalui Redis queue (ARQ)
- Worker dapat di-scale secara independen dari main API server

## **17.2 Queue Architecture**

```
[API Server] → enqueue task → [Redis Queue]
                                    ↓
                             [ARQ Worker Pool]
                              (scale horizontal)
                                    ↓
                          [OpenRouter API call]
                                    ↓
                           [Write result to DB]
```

## **17.3 Database Scaling**
- Menggunakan **Connection Pooling** via Supabase
- Index pada kolom `evaluations.status`, `evaluations.upload_id`, dan `rate_limits.ip_address`

---

# **18. Error Handling**

## **18.1 Error Categories**

| Error Code | HTTP Status | Deskripsi | User Message |
|---|---|---|---|
| `unsupported_format` | 400 | Format file tidak didukung | "Format file tidak didukung. Gunakan TXT, MD, atau PDF." |
| `file_too_large` | 413 | File melebihi 10MB | "Ukuran file maksimal 10MB." |
| `parse_failed` | 422 | Gagal mengekstrak teks dari dokumen | "Dokumen tidak dapat diproses. Pastikan file tidak rusak atau terenkripsi." |
| `ai_timeout` | 504 | OpenRouter API timeout | "Evaluasi membutuhkan waktu lebih lama dari biasanya. Silakan coba lagi." |
| `ai_error` | 502 | OpenRouter API mengembalikan error | "Terjadi masalah saat mengevaluasi. Silakan coba beberapa saat lagi." |
| `rate_limit_exceeded` | 429 | Melebihi batas evaluasi | "Anda telah mencapai batas evaluasi. Coba lagi dalam [X] menit." |
| `internal_error` | 500 | Internal server error | "Terjadi kesalahan sistem. Tim kami sedang menangani masalah ini." |

## **18.2 Retry Mechanism**
- AI evaluation gagal → otomatis retry **1 kali** setelah 5 detik
- Jika retry gagal → set status `failed`, simpan `error_message` di database
- Frontend polling setiap **3 detik** untuk status evaluasi yang `processing`

## **18.3 Logging Strategy**

### **Format**
Menggunakan **structured logging** (JSON format) untuk memudahkan parsing, filtering, dan query.

```json
{
  "timestamp": "2026-04-13T10:00:00Z",
  "level": "INFO",
  "service": "prd-evaluator-api",
  "event": "evaluation_completed",
  "evaluation_id": "uuid-string",
  "duration_ms": 12500,
  "ai_model": "anthropic/claude-3.5-sonnet",
  "tokens_used": 1850,
  "final_score": 7.8
}
```

### **Log Levels**

| Level | Penggunaan |
|---|---|
| `DEBUG` | Detail parsing, prompt construction, token counting — hanya di development |
| `INFO` | Upload berhasil, evaluasi dimulai/selesai, PDF di-generate |
| `WARNING` | Token truncation, retry triggered, rate limit mendekati batas, content too short |
| `ERROR` | Parsing failure, AI timeout, AI invalid JSON response, database error |
| `CRITICAL` | OpenRouter API down, Redis connection lost, Supabase unreachable |

### **Event yang Di-log**

| Event | Level | Data yang Dicatat |
|---|---|---|
| `file_uploaded` | INFO | filename, file_size, format, ip_address |
| `parse_started` | INFO | upload_id, format |
| `parse_completed` | INFO | upload_id, character_count, token_estimate |
| `parse_failed` | ERROR | upload_id, error_type, error_message |
| `content_too_short` | WARNING | upload_id, character_count, threshold |
| `evaluation_started` | INFO | evaluation_id, upload_id, ai_model, output_language |
| `evaluation_completed` | INFO | evaluation_id, duration_ms, tokens_used, final_score, verdict |
| `evaluation_failed` | ERROR | evaluation_id, error_type, error_message, retry_count |
| `evaluation_retried` | WARNING | evaluation_id, retry_count, reason |
| `evaluation_rejected_concurrent` | WARNING | ip_address, active_evaluation_id |
| `pdf_exported` | INFO | evaluation_id, file_size |
| `rate_limit_hit` | WARNING | ip_address, request_count, window_start |

### **Log Storage & Retention**

| Environment | Output | Retention |
|---|---|---|
| Development | stdout (console, pretty-print) | Session only |
| Production | stdout → Platform log aggregator (Railway/Render built-in) | 30 hari |

**Library**: Python `structlog` untuk structured JSON output.

---

# **19. Testing Strategy**

## **19.1 Unit Tests (Backend)**

| Test | Target |
|---|---|
| Parser TXT | Ekstraksi teks dari .txt berhasil |
| Parser MD | Ekstraksi teks dari .md berhasil |
| Parser PDF | Ekstraksi teks dari .pdf berhasil |
| Parser PDF gagal | File corrupt → raise exception yang tepat |
| File validator | Format tidak valid → raise `unsupported_format` |
| File validator | File > 10MB → raise `file_too_large` |
| Score calculator | Rata-rata 9 kategori dihitung dengan benar |
| Verdict mapper | Score range → verdict label yang benar |

## **19.2 Integration Tests (Backend)**

| Test | Target |
|---|---|
| POST /api/v1/upload | File valid → 200 OK + `upload_id` |
| POST /api/v1/upload | File invalid → 400 Bad Request |
| POST /api/v1/evaluate | Trigger evaluasi → 202 Accepted |
| GET /api/v1/results/:id | Evaluasi selesai → 200 OK + hasil |
| GET /api/v1/export/:id/pdf | PDF dihasilkan → binary response |

## **19.3 End-to-End Tests**

Menggunakan **Playwright** untuk menguji flow lengkap:

1. Upload file PRD → evaluasi → lihat hasil
2. Upload file format tidak valid → pesan error tampil
3. Upload file > 10MB → pesan error tampil
4. Download PDF report

## **19.4 AI Evaluation Quality Test**

Gunakan set **sample PRD dokumen** dengan expected score range:
- PRD minimal (hanya 1-2 halaman) → expected verdict: `Very Weak` atau `Early Draft`
- PRD standar (lengkap semua section) → expected verdict: `Good Draft` atau `Strong PRD`
- PRD komprehensif (contoh PRD terbaik) → expected verdict: `Development Ready`

---

# **20. Deployment**

## **20.1 Environment Variables**

### Backend (FastAPI)

```env
# OpenRouter AI Configuration
OPENROUTER_API_KEY=sk-or-...
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet

# Supabase
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Redis
REDIS_URL=redis://localhost:6379

# App Config
MAX_FILE_SIZE_MB=10
RATE_LIMIT_PER_HOUR=10
CORS_ALLOWED_ORIGINS=https://prdevaluator.com

# PDF Generation
PDF_EXPORT_DIR=/tmp/pdf_exports
```

### Frontend (Next.js)

```env
NEXT_PUBLIC_API_BASE_URL=https://api.prdevaluator.com
```

## **20.2 CI/CD Pipeline**

```
[GitHub Push to main]
        ↓
[GitHub Actions Trigger]
        ↓
┌───────────────────────────────────┐
│  1. Run unit tests (pytest)       │
│  2. Run linting (ruff / eslint)   │
│  3. Build Docker image (backend)  │
│  4. Build Next.js (frontend)      │
└───────────────────────────────────┘
        ↓ (if all pass)
┌───────────────────────────────────┐
│  Deploy backend → Railway/Render  │
│  Deploy frontend → Vercel         │
└───────────────────────────────────┘
```

## **20.3 Infrastructure**

| Komponen | Platform | Tier |
|---|---|---|
| Frontend | Vercel | Hobby/Pro |
| Backend API | Railway / Render | Starter |
| Database | Supabase | Free / Pro |
| File Storage | Supabase Storage | Free / Pro |
| Redis Queue | Railway Redis | Starter |

---

# **21. Roadmap**

## **MVP (v1.0) — Target: Q2 2026**

- [x] File upload (TXT, MD, PDF)
- [x] Document parsing
- [x] AI evaluation via OpenRouter
- [x] Score per 9 kategori
- [x] Missing section detection
- [x] Evaluation Result Dashboard
- [x] PDF report export
- [x] Rate limiting

---

## **V2 — Target: Q3 2026**

- [ ] Perbandingan dua PRD (side-by-side comparison)
- [ ] PRD improvement generator (AI-assisted rewrite suggestions per section)
- [ ] Support format DOCX
- [ ] Direct paste teks PRD (tanpa upload file)
- [ ] Shareable result link

---

## **V3 — Target: Q4 2026**

- [ ] User accounts & authentication
- [ ] Riwayat evaluasi per user
- [ ] Team workspace & collaboration
- [ ] Custom scoring rubric (bobot kategori dapat dikustomisasi)
- [ ] Slack / Notion integration
- [ ] API publik untuk developer

---

# **22. Risks & Mitigations**

## **22.1 AI Evaluation Inconsistency**

**Risiko**: Model AI dapat memberikan skor yang berbeda untuk dokumen yang sama pada request berbeda.

**Mitigation**:
- Gunakan `temperature: 0.2` untuk output yang lebih deterministik
- Terapkan hard cap rules (lihat Section 9.2)
- Desain System Prompt yang sangat terstruktur dengan kriteria eksplisit

---

## **22.2 Document Parsing Errors**

**Risiko**: Dokumen dengan format tidak biasa (PDF scan, encoding aneh) gagal di-parse.

**Mitigation**:
- Fallback ke plain-text extraction jika parser pertama gagal
- Pesan error yang informatif dengan panduan untuk user

---

## **22.3 Large File Processing**

**Risiko**: File besar memperlambat sistem atau menyebabkan timeout.

**Mitigation**:
- Batas ukuran file 10MB
- Pemrosesan asynchronous via Redis queue
- Token truncation untuk dokumen yang sangat panjang

---

## **22.4 OpenRouter API Downtime atau Rate Limit**

**Risiko**: OpenRouter API tidak tersedia atau mencapai limit.

**Mitigation**:
- Implementasi retry mechanism (1x retry otomatis)
- Caching model configuration — dapat berpindah model secara dinamis
- Alert monitoring jika error rate API > 5%

---

## **22.5 Abuse / Spam Evaluasi**

**Risiko**: Bot atau pengguna spamming endpoint evaluasi untuk menghabiskan quota AI.

**Mitigation**:
- Rate limiting berbasis IP (10 evaluasi/jam)
- Validasi file yang ketat sebelum memulai evaluasi
- Monitoring anomali request volume

---

# **23. Product Vision**

PRD Evaluator bertujuan menjadi **tool standar untuk menilai kualitas PRD secara objektif** di ekosistem produk digital Indonesia dan global.

Visi jangka panjang:

> *Setiap tim produk menggunakan PRD Evaluator sebagai langkah wajib sebelum memulai sprint pertama.*

Dalam jangka panjang, PRD Evaluator akan berkembang menjadi **platform kualitas dokumentasi produk** yang mencakup evaluasi PRD, analisis user story, dan validasi technical spec — semua dalam satu platform terintegrasi.

---

# **24. Internationalization (i18n)**

## **24.1 Bahasa UI**

UI aplikasi menggunakan **Bahasa Inggris** sebagai bahasa default dan satu-satunya bahasa UI. Seluruh label, button text, navigasi, placeholder, dan pesan error ditulis dalam Bahasa Inggris.

## **24.2 Bahasa Output Evaluasi**

User dapat memilih **bahasa output evaluasi AI** melalui language selector di halaman Upload sebelum memulai evaluasi.

**Bahasa yang didukung (MVP):**

| Kode | Bahasa | Label di UI |
|---|---|---|
| `en` | English | English (default) |
| `id` | Bahasa Indonesia | Bahasa Indonesia |

**Komponen UI:**
- Language selector berupa **dropdown** di halaman Upload Page (`/evaluate`), ditempatkan di atas atau di samping upload zone.
- Default: `en` (English).
- Pilihan tersimpan di localStorage untuk kunjungan berikutnya.

## **24.3 Implementasi Teknis**

**Perubahan API — `POST /api/v1/evaluate`:**
```json
{
  "upload_id": "uuid-string",
  "output_language": "id"
}
```

| Field | Type | Required | Default | Keterangan |
|---|---|---|---|---|
| `upload_id` | string (UUID) | Ya | — | ID upload yang akan dievaluasi |
| `output_language` | string | Tidak | `"en"` | Kode bahasa output: `"en"` atau `"id"` |

**Perubahan User Prompt:**

Backend menambahkan instruksi bahasa ke User Prompt yang dikirim ke AI:

```
# Jika output_language = "id":
Evaluate the following PRD document.
Provide ALL explanations, evidence, strengths, weaknesses, missing_sections, and improvement_suggestions in Bahasa Indonesia.

PRD CONTENT:
"""
<isi dokumen PRD>
"""

# Jika output_language = "en" (default):
Evaluate the following PRD document.

PRD CONTENT:
"""
<isi dokumen PRD>
"""
```

**Perubahan Database:**
- Tambah kolom `output_language VARCHAR(5) DEFAULT 'en'` di tabel `evaluations`.

> **Catatan:** Field kunci dalam JSON (key names: `product_clarity`, `user_understanding`, dsb.) dan verdict labels (`Very Weak`, `Strong PRD`, dsb.) **tetap dalam Bahasa Inggris** untuk konsistensi parsing di frontend. Hanya konten deskriptif (explanation, evidence, suggestions) yang diterjemahkan.

**Rencana V2:** Penambahan bahasa lain (Japanese, Korean, Spanish, dll.) dapat dilakukan hanya dengan menambahkan kode bahasa ke dropdown — tanpa perubahan arsitektur.

---

# **Appendix A — AI Evaluation Engine Specification**

## **Overview**

PRD Evaluator menggunakan **Large Language Model (LLM)** melalui **OpenRouter API** untuk menganalisis dokumen PRD dan menghasilkan laporan evaluasi terstruktur.

Model dikonfigurasi melalui environment variable `OPENROUTER_MODEL`. Default: `anthropic/claude-3.5-sonnet`.

---

# **Appendix B — System Prompt AI Evaluator**

System prompt berikut digunakan untuk memastikan AI melakukan evaluasi secara **konsisten, objektif, dan berbasis bukti dokumen**.

```
You are an expert Product Manager and Technical Reviewer specialized in evaluating Product Requirements Documents (PRDs).

Your task is to evaluate a PRD document objectively and produce a structured evaluation report.

IMPORTANT RULES:
1. Your evaluation MUST be based ONLY on the content provided in the PRD.
2. Do NOT invent missing information.
3. If a section is not found, explicitly state "Not found in document".
4. Scores must be consistent and justified.
5. Every score must include a clear explanation.
6. Always mention whether supporting evidence exists in the document.

The PRD must be evaluated using the following 9 categories:
1. Product Clarity
2. User Understanding
3. Feature Definition
4. AI Design
5. Technical Architecture
6. Product Viability
7. Execution Readiness
8. User Flow
9. Non-functional Requirements

Each category must receive a score from 1 to 10.

SCORING GUIDELINES:
Score 1–3: Very weak. The section is missing or extremely unclear.
Score 4–5: Present but incomplete or vague.
Score 6–7: Adequate but lacking depth or detail.
Score 8–9: Strong and clearly described.
Score 10: Exceptional clarity, completeness, and technical detail.

CATEGORY EVALUATION CRITERIA:

Product Clarity
Evaluate whether the PRD clearly explains:
- problem statement
- product description
- value proposition

User Understanding
Evaluate whether the document identifies:
- target users
- user needs
- user stories or personas

Feature Definition
Evaluate whether core features are clearly defined with:
- feature name
- feature description
- acceptance criteria or scope

AI Design
Evaluate whether AI architecture or AI functionality is described (if relevant):
- AI model or engine used
- AI input/output
- AI integration method

Technical Architecture
Evaluate whether technical stack, architecture, or system design is described:
- frontend/backend technology
- database
- infrastructure or deployment

Product Viability
Evaluate whether business feasibility is discussed:
- monetization model
- pricing
- cost awareness
- sustainability or growth potential

Execution Readiness
Evaluate whether the PRD is ready for development:
- roadmap with timeline
- MVP definition
- feature prioritization
- implementation planning

User Flow
Evaluate whether the user journey or workflow is clearly defined:
- step-by-step user flow
- alternative flows
- error states

Non-functional Requirements
Evaluate whether the PRD discusses:
- performance targets
- security requirements
- scalability plan
- reliability or uptime targets

MANDATORY SCORING RULES (hard caps):
- If technical stack is not mentioned → Technical Architecture score MUST be ≤ 4.
- If roadmap or MVP is missing → Execution Readiness score MUST be ≤ 4.
- If pricing or monetization is missing → Product Viability score MUST be ≤ 6.
- If user flow is not described → User Flow score MUST be ≤ 5.
- If non-functional requirements are missing → Non-functional score MUST be ≤ 5.

OUTPUT FORMAT (STRICT JSON):
{
  "final_score": number,
  "verdict": "Very Weak | Early Draft | Good Draft | Strong PRD | Development Ready",
  "category_scores": {
    "product_clarity": { "score": number, "explanation": "", "evidence": "" },
    "user_understanding": { "score": number, "explanation": "", "evidence": "" },
    "feature_definition": { "score": number, "explanation": "", "evidence": "" },
    "ai_design": { "score": number, "explanation": "", "evidence": "" },
    "technical_architecture": { "score": number, "explanation": "", "evidence": "" },
    "product_viability": { "score": number, "explanation": "", "evidence": "" },
    "execution_readiness": { "score": number, "explanation": "", "evidence": "" },
    "user_flow": { "score": number, "explanation": "", "evidence": "" },
    "non_functional_requirements": { "score": number, "explanation": "", "evidence": "" }
  },
  "strengths": ["", "", ""],
  "weaknesses": ["", "", ""],
  "missing_sections": [""],
  "improvement_suggestions": ["", "", ""]
}

VERDICT RULES:
0–3.9   → Very Weak
4–5.9   → Early Draft
6–7.4   → Good Draft
7.5–8.4 → Strong PRD
8.5–10  → Development Ready

The final_score MUST be the mathematical average of all 9 category scores.

IMPORTANT:
Return ONLY valid JSON. Do not add any text or explanation outside the JSON object.
```

---

# **Appendix C — User Prompt Template**

Backend akan mengirim prompt berikut ke AI:

```
Evaluate the following PRD document.

PRD CONTENT:
"""
<isi dokumen PRD>
"""
```

---

# **Appendix D — Expected JSON Output Schema**

AI harus mengembalikan JSON dengan struktur berikut (TypeScript interface representation):

```typescript
interface EvaluationResult {
  final_score: number;                    // 1.0 - 10.0
  verdict: string;                        // "Very Weak" | "Early Draft" | "Good Draft" | "Strong PRD" | "Development Ready"
  category_scores: {
    [category: string]: {
      score: number;                      // 1 - 10
      explanation: string;                // Penjelasan penilaian
      evidence: string;                   // Kutipan dari dokumen
    }
  };
  strengths: string[];                    // Minimal 2 item
  weaknesses: string[];                   // Minimal 2 item
  missing_sections: string[];             // Daftar bagian yang tidak ditemukan
  improvement_suggestions: string[];     // Minimal 3 item
}
```

---

# **Appendix E — Recommended OpenRouter Settings**

Untuk menjaga konsistensi evaluasi:

```python
openrouter_payload = {
    "model": "anthropic/claude-3.5-sonnet",  # atau dari OPENROUTER_MODEL env
    "temperature": 0.2,
    "max_tokens": 2000,
    "messages": [
        { "role": "system", "content": SYSTEM_PROMPT },
        { "role": "user", "content": user_prompt }
    ]
}
```

**Penjelasan parameter:**
- `temperature: 0.2` → Output lebih deterministik dan konsisten antar request
- `max_tokens: 2000` → Cukup untuk full JSON output dengan penjelasan lengkap
- Gunakan `response_format: { "type": "json_object" }` jika model mendukung (GPT-4o, GPT-4.1)

---

# **Appendix F — Missing Sections Reference List**

Berikut adalah daftar lengkap bagian PRD yang diperiksa untuk missing section detection:

| Section | Indikator Kehadiran |
|---|---|
| Problem Statement | Deskripsi masalah yang jelas |
| Product Description | Penjelasan singkat tentang produk |
| Target Users | Deskripsi siapa pengguna produk |
| User Personas | Detail persona pengguna |
| Feature List | Daftar fitur dengan deskripsi |
| User Flow | Alur penggunaan langkah demi langkah |
| Technical Stack | Menyebut teknologi yang digunakan |
| System Architecture | Diagram atau deskripsi arsitektur |
| Database Design | Schema atau deskripsi data |
| API Design | Endpoint atau interface deskripsi |
| Monetization / Pricing | Model bisnis atau harga |
| Roadmap | Timeline pengembangan fitur |
| MVP Definition | Scope minimum viable product |
| Success Metrics | KPI atau ukuran keberhasilan |
| Non-functional Requirements | Performa, keamanan, skalabilitas |
| Risk & Mitigation | Identifikasi risiko dan penanganannya |

---

# **Appendix G — Changelog**

| Versi | Tanggal | Perubahan Utama |
|---|---|---|
| 1.0 | 2026-04-01 | Initial draft — MVP scope, basic features, evaluation framework |
| 1.1 | 2026-04-10 | Tambah Appendix A–E (AI Engine spec, system prompt, output schema, OpenRouter settings) |
| 2.0 | 2026-04-13 | Major revision: detail API endpoints & request/response, DB schema (3 tabel), frontend/backend directory structure, deployment & CI/CD, testing strategy, design system (colors, typography), error handling catalog |
| 2.1 | 2026-04-13 | Tambah: i18n multi-language output (Section 24), responsive design breakpoints (Section 12.5), SEO & meta tags (Section 12.6), structured logging strategy (Section 18.3), AI Design N/A handling (Section 8.3), PDF report layout template (Section 10.6), minimum content threshold 200 char (Section 10.2), single upload policy (Section 11), changelog (Appendix G) |

---

*Document Version 2.1 — PRD Evaluator — Last Updated: 2026-04-13*
