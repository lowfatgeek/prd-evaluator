# **PRD Design System — PRD Evaluator**

## **Document Info**

| Field | Detail |
|---|---|
| Product Name | PRD Evaluator App|
| Document Type | Design System Specification |
| Version | 1.0 |
| Status | Ready for Designer Handoff |
| Last Updated | 2026-04-13 |
| Reference | PRD Evaluator v2.1 |
| Target Audience | UI/UX Designer |

---

## **Daftar Isi**

1. [Product Context](#1-product-context)
2. [Design Principles](#2-design-principles)
3. [Brand Identity](#3-brand-identity)
4. [Color System](#4-color-system)
5. [Typography](#5-typography)
6. [Spacing & Layout Grid](#6-spacing--layout-grid)
7. [Responsive Breakpoints](#7-responsive-breakpoints)
8. [Iconography](#8-iconography)
9. [Component Library](#9-component-library)
10. [Page Specifications](#10-page-specifications)
11. [Data Visualization](#11-data-visualization)
12. [Interaction & Motion](#12-interaction--motion)
13. [States & Feedback](#13-states--feedback)
14. [Accessibility](#14-accessibility)
15. [PDF Report Design](#15-pdf-report-design)
16. [SEO & Meta Assets](#16-seo--meta-assets)
17. [Design Deliverables Checklist](#17-design-deliverables-checklist)

---

# **1. Product Context**

## **1.1 Tentang PRD Evaluator**

PRD Evaluator adalah aplikasi web yang memungkinkan pengguna **mengunggah dokumen PRD (Product Requirements Document)** dan mendapatkan **evaluasi otomatis berbasis AI** dalam waktu < 30 detik.

## **1.2 Tagline**

> *"Know if your PRD is ready before your first sprint."*

## **1.3 Apa yang Dilakukan Produk Ini**

1. User membuka halaman utama dan langsung **upload** file PRD (format: TXT, MD, PDF)
2. AI **menganalisis** isi dokumen berdasarkan 9 kategori evaluasi
3. User mendapatkan **laporan evaluasi** berupa skor, kekuatan, kelemahan, dan rekomendasi
4. User dapat **download report** dalam format PDF

> **Catatan:** Landing page dan upload page digabung menjadi satu halaman (Home Page) karena MVP tidak memiliki fitur autentikasi. User dapat langsung memulai evaluasi tanpa navigasi tambahan.

## **1.4 Target Users**

| User | Deskripsi |
|---|---|
| Startup Founders | Ingin memastikan PRD matang sebelum development |
| Product Managers | Butuh self-review cepat dan terstandarisasi |
| Developers | Verifikasi kelengkapan requirement dokumen |
| Product Design Students | Butuh feedback objektif untuk belajar |
| Freelance Consultants | Validasi dokumen produk untuk klien |

## **1.5 Mood & Feel**

| Aspek | Deskripsi |
|---|---|
| Tone | Profesional, trustworthy, modern |
| Vibe | Dark-themed SaaS tool — premium feel, bukan playful |
| Analogi Visual | Seperti dashboard analytics tool (Vercel, Linear, Raycast) |
| Personality | Confident, intelligent, minimal tapi informatif |

---

# **2. Design Principles**

Berikut prinsip desain yang harus dipegang selama proses design:

### **2.1 Clarity Over Decoration**
Setiap elemen visual harus memiliki tujuan. Hindari ornamen yang tidak membantu user memahami informasi.

### **2.2 Data-First Design**
Produk ini adalah **reporting tool**. Skor, chart, dan insight harus menjadi hero dari setiap halaman — bukan dekorasi.

### **2.3 Progressive Disclosure**
Jangan tampilkan semua informasi sekaligus. Gunakan hierarchy, collapsible sections, dan visual grouping untuk memandu mata user.

### **2.4 Instant Trust**
User baru harus langsung percaya bahwa tool ini kredibel. Gunakan visual yang bersih, tipografi yang rapi, dan warna yang konsisten.

### **2.5 Mobile-Aware**
Design dimulai dari mobile, lalu diperluas ke desktop. Setiap komponen harus bekerja di layar kecil.

---

# **3. Brand Identity**

## **3.1 Logo**

| Aspek | Spesifikasi |
|---|---|
| Nama Produk | PRD Evaluator |
| Style | Wordmark + icon/logomark |
| Tone Logo | Geometrik, clean, modern |
| Warna Utama Logo | Indigo `#6366F1` di atas dark background |
| Variasi yang Dibutuhkan | Full color (dark bg), Full color (light bg), Monochrome white, Favicon (16x16, 32x32, 192x192) |

> **Deliverable:** Designer membuat logo lengkap dengan variasi di atas.

## **3.2 Favicon**

- Format: ICO + PNG (16x16, 32x32, 192x192)
- Harus readable di ukuran kecil
- Gunakan logomark saja (tanpa wordmark)

---

# **4. Color System**

## **4.1 Core Palette**

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | `#F77F00` | Tombol utama, link, accent, highlight (Orange) |
| `--color-primary-hover` | `#FCBF49` | Hover state tombol utama (Gold) |
| `--color-primary-subtle` | `rgba(247, 127, 0, 0.1)` | Background badge, subtle highlights |
| `--color-bg` | `#003049` | Background utama halaman (Deep Navy) |
| `--color-surface` | `#013b5a` | Card, panel, container (Lighter Navy) |
| `--color-surface-elevated` | `#024a71` | Elevated card, modal, dropdown |
| `--color-border` | `#0a4e76` | Border card, divider |

## **4.2 Text Colors**

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-text-primary` | `#F8FAFC` | Heading, body text utama |
| `--color-text-secondary` | `#94A3B8` | Label, caption, helper text |
| `--color-text-muted` | `#64748B` | Placeholder, disabled text |

## **4.3 Semantic / Feedback Colors**

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-success` | `#FCBF49` | Sukses, positif, aksen emas |
| `--color-warning` | `#F77F00` | Warning, oranye |
| `--color-error` | `#D62828` | Error, merah crimson, kelemahan |
| `--color-info` | `#94A3B8` | Informasi, slate/netral |

## **4.4 Verdict Colors (Sangat Penting)**

Warna ini digunakan untuk menampilkan verdict evaluasi. Harus sangat jelas dan distinct:

| Verdict | Hex | Emoji | Penggunaan |
|---|---|---|---|
| Very Weak (0–3.9) | `#D62828` | 🔴 | Badge, score ring, border |
| Early Draft (4–5.9) | `#F77F00` | 🟠 | Badge, score ring, border |
| Good Draft (6–7.4) | `#FCBF49` | 🟡 | Badge, score ring, border |
| Strong PRD (7.5–8.4) | `#015b8a` | 🔵 | Badge, score ring, border |
| Development Ready (8.5–10) | `#ffffff` | ✅ | Badge, score ring, border |

> **Catatan untuk Designer:** Verdict colors digunakan di banyak tempat — Score Header, Radar Chart, Category Cards, PDF Report, dan Verdict Badge. Pastikan kontras cukup di atas `--color-surface`.

## **4.5 Score Bar / Gauge Colors**

Untuk progress bar atau gauge pada category scores:

| Score Range | Color |
|---|---|
| 1–3 | `#D62828` (merah crimson) |
| 4–5 | `#F77F00` (orange) |
| 6–7 | `#FCBF49` (emas) |
| 8–9 | `#015b8a` (navy muda) |
| 10 | `#ffffff` (putih) |

---

# **5. Typography**

## **5.1 Font Families**

| Penggunaan | Font | Source |
|---|---|---|
| UI Text (heading, body, label) | **Inter** | Google Fonts |
| Code / JSON / Monospace | **JetBrains Mono** | Google Fonts |

## **5.2 Type Scale**

| Token | Size | Weight | Line Height | Penggunaan |
|---|---|---|---|---|
| `--text-display` | 48px / 3rem | 700 (Bold) | 1.1 | Final Score angka besar |
| `--text-h1` | 36px / 2.25rem | 700 (Bold) | 1.2 | Hero heading |
| `--text-h2` | 28px / 1.75rem | 700 (Bold) | 1.3 | Section heading |
| `--text-h3` | 22px / 1.375rem | 600 (SemiBold) | 1.4 | Card heading, panel title |
| `--text-h4` | 18px / 1.125rem | 600 (SemiBold) | 1.4 | Sub-section heading |
| `--text-body` | 16px / 1rem | 400 (Regular) | 1.6 | Body text, paragraf |
| `--text-body-sm` | 14px / 0.875rem | 400 (Regular) | 1.5 | Secondary body, card body |
| `--text-caption` | 12px / 0.75rem | 400 (Regular) | 1.4 | Caption, label kecil, timestamp |
| `--text-code` | 14px / 0.875rem | 400 (Regular) | 1.6 | Code blocks, JSON preview |

## **5.3 Penggunaan per Konteks**

| Konteks | Font | Size | Weight |
|---|---|---|---|
| Hero tagline | Inter | h1 (36px) | 700 |
| Section title | Inter | h2 (28px) | 700 |
| Card title | Inter | h3 (22px) | 600 |
| Button text | Inter | body (16px) | 600 |
| Body text | Inter | body (16px) | 400 |
| Input label | Inter | body-sm (14px) | 500 |
| Placeholder | Inter | body (16px) | 400 |
| Score number (besar) | Inter | display (48px) | 700 |
| Evidence quote | JetBrains Mono | body-sm (14px) | 400 |
| JSON output | JetBrains Mono | code (14px) | 400 |

---

# **6. Spacing & Layout Grid**

## **6.1 Spacing Scale (Base: 4px)**

| Token | Value | Penggunaan |
|---|---|---|
| `--space-1` | 4px | Tight spacing (icon ke text) |
| `--space-2` | 8px | Input padding horizontal |
| `--space-3` | 12px | Inline spacing |
| `--space-4` | 16px | Card inner padding, gap antar elemen kecil |
| `--space-5` | 20px | — |
| `--space-6` | 24px | Section padding, card padding |
| `--space-8` | 32px | Gap antar section |
| `--space-10` | 40px | Layout padding |
| `--space-12` | 48px | Section gap besar |
| `--space-16` | 64px | Page section spacing |
| `--space-20` | 80px | Hero section padding |

## **6.2 Border Radius**

| Token | Value | Penggunaan |
|---|---|---|
| `--radius-sm` | 6px | Badge, tag, chip |
| `--radius-md` | 8px | Input, small card |
| `--radius-lg` | 12px | Card, panel |
| `--radius-xl` | 16px | Modal, large container |
| `--radius-full` | 9999px | Pill button, avatar |

## **6.3 Elevation / Shadow**

| Level | Shadow | Penggunaan |
|---|---|---|
| Level 0 | none | Flat surface |
| Level 1 | `0 1px 3px rgba(0,0,0,0.3)` | Card, panel |
| Level 2 | `0 4px 12px rgba(0,0,0,0.4)` | Dropdown, popover |
| Level 3 | `0 8px 24px rgba(0,0,0,0.5)` | Modal, dialog |

> **Catatan:** Pada dark theme, shadow kurang efektif. Gunakan **border + subtle background difference** sebagai pengganti utama untuk memisahkan elemen. Shadow hanya sebagai pelengkap.

## **6.4 Container Width**

| Breakpoint | Max Width |
|---|---|
| Content area | 1200px |
| Narrow content (upload page) | 600px |
| Card grid | 1100px |

---

# **7. Responsive Breakpoints**

## **7.1 Breakpoint Definitions**

| Nama | Width | Keterangan |
|---|---|---|
| Mobile | < 640px | Single column, stacked panels |
| Tablet | 640px – 1024px | Two column untuk score cards |
| Desktop | > 1024px | Full layout, side-by-side panels |

**Pendekatan:** Mobile-first. CSS ditulis dari mobile ke atas (`min-width` media queries).

## **7.2 Layout per Halaman**

### Home Page (Landing + Upload)

| Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---|---|---|
| Hero + upload zone stacked, CTA full-width, info sections vertikal | Hero + upload zone side-by-side, info sections 2-column | Full hero + upload zone center 60% max-width 600px, info sections side-by-side |

### Result Page

| Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---|---|---|
| Score header stacked, radar chart full-width, category cards 1-column | Radar + score side-by-side, cards 2-column | Radar kiri + summary kanan, cards 3-column grid |

## **7.3 Mobile-Specific Behaviors**

| Komponen | Behavior Mobile |
|---|---|
| Radar Chart | Skala diperkecil, label font-size dikurangi |
| Category Cards | Collapsible accordion (ketuk untuk buka detail) |
| Download PDF Button | Sticky bottom bar |
| Language Selector | Tetap visible di atas upload zone |
| Navigation | Simplified — logo + minimal nav |

---

# **8. Iconography**

## **8.1 Icon Style**

| Aspek | Spesifikasi |
|---|---|
| Style | Outline / Line icons (2px stroke) |
| Library Rekomendasi | Lucide Icons atau Phosphor Icons |
| Ukuran Default | 20px × 20px (dalam button), 24px × 24px (standalone) |
| Warna | Mengikuti text color context (`text-primary` atau `text-secondary`) |

## **8.2 Icon Usage**

| Konteks | Icon Yang Dibutuhkan |
|---|---|
| Upload File | Upload / Cloud-Upload |
| File Types | FileText (TXT), FileCode (MD), FileType (PDF) |
| Evaluate / Analyze | Sparkles / Wand / Scan |
| Download PDF | Download / FileDown |
| Score Category | 9 icon untuk masing-masing kategori evaluasi (lihat bawah) |
| Success | CheckCircle |
| Error | AlertCircle / XCircle |
| Warning | AlertTriangle |
| Info | Info |
| Retry | RefreshCw |
| External Link | ExternalLink |
| Language | Globe |

## **8.3 Category Icons (9 Kategori Evaluasi)**

| # | Category | Suggested Icon |
|---|---|---|
| 1 | Product Clarity | Lightbulb / Target |
| 2 | User Understanding | Users / UserCheck |
| 3 | Feature Definition | Layers / ListChecks |
| 4 | AI Design | Brain / Cpu |
| 5 | Technical Architecture | Server / Code |
| 6 | Product Viability | TrendingUp / DollarSign |
| 7 | Execution Readiness | Rocket / CalendarCheck |
| 8 | User Flow | Route / GitBranch |
| 9 | Non-functional Requirements | Shield / Gauge |

> **Catatan:** Designer bebas memilih icon yang paling sesuai selama konsisten dalam style.

---

# **9. Component Library**

Berikut daftar komponen UI yang perlu di-design. Setiap komponen perlu di-design untuk **semua states** yang berlaku.

## **9.1 Buttons**

### Variants

| Variant | Penggunaan | Style |
|---|---|---|
| Primary | CTA utama ("Evaluate My PRD", "Evaluate") | Solid `--color-primary`, text white |
| Secondary | Aksi sekunder ("Evaluate Another PRD") | Outline border `--color-primary` |
| Ghost | Aksi minor, navigation | Transparent, text color primary |
| Danger | (reserved) | Solid `--color-error` |

### States

| State | Visual |
|---|---|
| Default | Normal appearance |
| Hover | Lighten / glow effect |
| Active | Darker shade |
| Disabled | Opacity 50%, cursor not-allowed |
| Loading | Spinner icon + "Processing..." text |

### Sizes

| Size | Padding | Font Size |
|---|---|---|
| Small | 8px 16px | 14px |
| Medium (default) | 12px 24px | 16px |
| Large | 16px 32px | 18px |

---

## **9.2 Input / Form Fields**

### Text Input / File Input

| Property | Value |
|---|---|
| Height | 44px (medium) |
| Border | 1px solid `--color-border` |
| Border Radius | `--radius-md` (8px) |
| Background | `--color-surface` |
| Text | `--color-text-primary` |
| Placeholder | `--color-text-muted` |
| Focus Border | `--color-primary` |

### Dropdown (Language Selector)

| Property | Value |
|---|---|
| Style | Custom dropdown dengan globe icon |
| Options | 🇺🇸 English (default), 🇮🇩 Bahasa Indonesia |
| Position | Di atas upload zone di Home Page (`/`) |
| Behavior | Pilihan tersimpan di localStorage |

---

## **9.3 Upload Zone**

Komponen utama di halaman Upload.

| Property | Spesifikasi |
|---|---|
| Style | Dashed border area, large drop zone |
| Border | 2px dashed `--color-border` |
| Border (hover/dragover) | 2px dashed `--color-primary` |
| Background | `--color-surface` |
| Background (hover) | `rgba(99, 102, 241, 0.05)` |
| Border Radius | `--radius-xl` (16px) |
| Icon | Cloud-Upload (48px, `--color-text-secondary`) |
| Primary Text | "Drag & drop your PRD here" |
| Secondary Text | "or click to browse files" |
| Format Info | "Supports: TXT, MD, PDF (max 10MB)" |
| Min Height | 240px |

### States

| State | Visual |
|---|---|
| Empty (default) | Dashed border, upload icon, helper text |
| Drag Over | Border berubah primary, subtle glow, background tint |
| File Selected | Tampilkan FilePreview (nama file, ukuran, format icon) |
| Uploading | Progress bar, file name, persentase |
| Error | Red border, error message di bawah |

---

## **9.4 File Preview Card**

Muncul setelah file berhasil dipilih, menggantikan upload zone placeholder.

| Property | Spesifikasi |
|---|---|
| Layout | Horizontal: [icon] [file info] [remove button] |
| File Icon | Icon sesuai format (TXT/MD/PDF) |
| File Name | Truncate jika terlalu panjang |
| File Size | Format: "1.2 MB" |
| File Format Badge | Badge kecil: "PDF", "TXT", "MD" |
| Remove Button | X button untuk hapus file dan reset |

---

## **9.5 Score Header**

Komponen hero di halaman Result — menampilkan Final Score dan Verdict.

| Property | Spesifikasi |
|---|---|
| Final Score | Display size (48px), bold, warna sesuai verdict |
| Format Score | "7.8 / 10" |
| Verdict Badge | Rounded pill, background verdict color, teks putih |
| File Name | Di bawah score, font caption, warna text-secondary |
| Evaluated At | Timestamp evaluasi, font caption |

### Score Ring / Gauge (Opsional)

Pertimbangkan circular gauge/ring di sekitar score angka:
- Ring track: `--color-border`
- Ring fill: verdict color
- Animasi fill saat page load

---

## **9.6 Category Score Card**

9 kartu dalam **2-column grid** (card ke-9 full-width span), satu untuk setiap kategori evaluasi.

### Card Layout

```
┌── 3px color-coded left border ──────────────────────────────┐
│                                                             │
│   ┌──────────┐                                              │
│   │          │   CATEGORY NAME                              │
│   │   7.8    │   ──────────────────────────────────          │
│   │   /10    │   Explanation text goes here. This            │
│   │  (ring)  │   section provides AI's assessment            │
│   │  Strong  │   of this category with enough room           │
│   └──────────┘   to read comfortably.                        │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ 💬 From your PRD:                                    │   │
│   │ ┊ "Evidence quote from the document that supports   │   │
│   │ ┊  this score assessment..."                        │   │
│   │                              [Show more ▾]          │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Card Properties

| Property | Spesifikasi |
|---|---|
| Grid Layout | 2-column grid (desktop/tablet), 1-column (mobile) |
| Card ke-9 | Full-width (span 2 kolom) |
| Border Radius | `--radius-lg` |
| Background | `--color-surface` |
| Border Left | 3px solid score range color (memberikan visual scanning cepat) |
| Header Row | [Circular Score Ring] [Category Icon + Category Name] |
| Explanation | Body text (Inter), 2–4 kalimat, `--color-text-primary` |
| Hover | Border glow `--color-primary`, subtle translateY(-2px) lift |

### Circular Score Ring

| Property | Spesifikasi |
|---|---|
| Type | Donut / ring chart (SVG atau CSS) |
| Size (Desktop) | 80px × 80px |
| Size (Tablet) | 72px × 72px |
| Size (Mobile) | 64px × 64px |
| Ring Thickness | 6px |
| Ring Track | `--color-border` (#2D2D4A) |
| Ring Fill | Score range color, proportional (score/10 × 360°) |
| Center Number | Score (e.g. "7.8"), font 28-32px bold |
| Center Sublabel | "/10" (caption size, `--color-text-muted`) — atau score label ("Strong") |
| Animation | Clockwise fill dari 0° ke target, 0.8s ease-out, triggered on scroll-into-view |

**Ring Colors per Score Range:**

| Score | Ring Color | Label |
|---|---|---|
| 1–3 | `#EF4444` (Red) | Very Weak |
| 4–5 | `#F97316` (Orange) | Incomplete |
| 6–7 | `#EAB308` (Yellow) | Adequate |
| 8–9 | `#22C55E` (Green) | Strong |
| 10 | `#6366F1` (Indigo) | Exceptional |

### Evidence Section (dalam Card)

| Property | Spesifikasi |
|---|---|
| Background | `--color-surface-elevated` (#252540) |
| Border Left | 2px solid `--color-text-muted` |
| Font | JetBrains Mono, 13px, italic |
| Color | `--color-text-secondary` |
| Label | 💬 "From your PRD:" (subtle, caption size) |
| Overflow | Truncate setelah 3 baris + "Show more ▾" expandable |
| Border Radius | `--radius-md` |

### Mobile Behavior

- Cards menjadi **1-column stack**
- Cards bersifat **collapsible accordion**
- Default: collapsed (hanya tampilkan circular ring + category name + score)
- Tap/klik: expand untuk lihat explanation + evidence

---

## **9.7 Panel Components**

Digunakan untuk Strengths, Weaknesses, Missing Sections, dan Improvement Suggestions.

### Strengths Panel

| Property | Spesifikasi |
|---|---|
| Icon | CheckCircle (`--color-success`) |
| Title | "Strengths" |
| Border Left | 3px solid `--color-success` |
| Items | Bulleted list, `--color-text-primary` |

### Weaknesses Panel

| Property | Spesifikasi |
|---|---|
| Icon | AlertCircle (`--color-error`) |
| Title | "Weaknesses" |
| Border Left | 3px solid `--color-error` |
| Items | Bulleted list, `--color-text-primary` |

### Missing Sections Panel

| Property | Spesifikasi |
|---|---|
| Icon | AlertTriangle (`--color-warning`) |
| Title | "Missing Sections" |
| Border Left | 3px solid `--color-warning` |
| Items | Bulleted list atau tag/chip list |

### Improvement Suggestions Panel

| Property | Spesifikasi |
|---|---|
| Icon | Sparkles (`--color-info`) |
| Title | "Improvement Suggestions" |
| Border Left | 3px solid `--color-info` |
| Items | Numbered list dengan brief description |

---

## **9.8 Loading State**

Digunakan saat evaluasi sedang berlangsung.

| Property | Spesifikasi |
|---|---|
| Type | Skeleton loader + progress message |
| Messages (rotating) | "Parsing document...", "Evaluating PRD...", "Generating report..." |
| Duration | ~15–30 detik |
| Visual | Animated pulse/shimmer skeleton cards |
| Progress Indicator | Stepped progress (3 steps): Parse → Evaluate → Generate |

---

## **9.9 Error States**

| Tipe Error | Visual |
|---|---|
| File format error | Inline error di bawah upload zone, red border |
| File too large | Inline error di bawah upload zone |
| Parse failed | Full error card dengan icon, pesan, dan retry button |
| AI timeout | Full error card dengan retry button |
| Rate limit | Full error card dengan countdown timer |
| General error | Full page error dengan CTA kembali ke home |

### Error Card Template

| Property | Spesifikasi |
|---|---|
| Icon | XCircle / AlertCircle (48px) |
| Title | Bold, text-primary |
| Message | Body text, text-secondary |
| Action Button | Primary button "Try Again" atau "Back to Home" |
| Background | `--color-surface` |
| Border | 1px solid `--color-error` (opsional) |

---

## **9.10 Verdict Badge**

Digunakan di Score Header dan PDF Report.

| Verdict | Background | Text | Border Radius |
|---|---|---|---|
| Very Weak | `#EF4444` | White | `--radius-full` (pill) |
| Early Draft | `#F97316` | White | `--radius-full` |
| Good Draft | `#EAB308` | `#1A1A2E` (dark) | `--radius-full` |
| Strong PRD | `#22C55E` | White | `--radius-full` |
| Development Ready | `#6366F1` | White | `--radius-full` |

---

## **9.11 Navigation / Header**

| Property | Spesifikasi |
|---|---|
| Position | Sticky top |
| Height | 64px |
| Background | `--color-bg` dengan subtle opacity/blur |
| Left | Logo (wordmark) |
| Right | CTA button (small): "Evaluate PRD" |
| Mobile | Logo + hamburger (jika perlu) atau simpel logo + CTA |
| Border Bottom | 1px solid `--color-border` |

---

## **9.12 Footer**

| Property | Spesifikasi |
|---|---|
| Background | `--color-bg` |
| Content | "Built with ❤️ by [Author]" · "PRD Evaluator" · Year |
| Border Top | 1px solid `--color-border` |
| Padding | `--space-8` vertikal |
| Text | `--color-text-muted`, caption size |

---

# **10. Page Specifications**

## **10.1 Home Page — Landing + Upload (`/`)**

### Tujuan
Menjelaskan fungsi aplikasi, membangun kepercayaan, dan **langsung memungkinkan user mengunggah serta mengevaluasi PRD** — semua dalam satu halaman. Karena MVP tidak memiliki fitur autentikasi, user tidak perlu navigasi ke halaman terpisah.

### Sections

#### A. Hero Section + Upload Zone (Above the Fold)
| Elemen | Deskripsi |
|---|---|
| Headline (H1) | "Know if your PRD is ready before your first sprint." |
| Sub-headline | Deskripsi singkat tentang apa yang dilakukan PRD Evaluator |
| Upload Zone | Drag & drop area terintegrasi langsung di hero section |
| Language Selector | Dropdown pemilihan bahasa output (🌐 EN ▾) |
| File Preview | Muncul setelah file dipilih (nama, ukuran, format) |
| Format Info | "Supports: TXT, MD, PDF (max 10MB)" |
| Evaluate Button (Primary, Large) | "Evaluate My PRD" — memulai evaluasi |
| Loading State | Skeleton/spinner + pesan progress saat evaluasi berjalan |

#### B. How It Works (Below the Fold)
3-step horizontal (desktop) / vertikal (mobile):

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | Upload icon | Upload Your PRD | Drag & drop file TXT, MD, or PDF |
| 2 | Sparkles/AI icon | AI Analyzes | AI evaluates 9 key categories instantly |
| 3 | BarChart icon | Get Your Report | Receive scores, insights, and recommendations |

#### C. Evaluation Categories Preview
Grid 3×3 (desktop) atau list (mobile) dari 9 kategori evaluasi:
- Setiap item: [Icon] + [Category Name] + [Short description]
- Style: card atau grid item dengan subtle hover

#### D. Sample Verdict Preview (Opsional)
Contoh tampilan hasil evaluasi (mock data):
- Mini Score Header + Radar Chart preview
- Tujuan: menunjukkan user apa yang akan mereka dapatkan

### Layout

```
┌─────────────────────────────────┐
│  Navigation Bar                 │
├─────────────────────────────────┤
│                                 │
│  Headline: "Know if your PRD    │
│  is ready before your first     │
│  sprint."                       │
│  Sub-headline: brief description│
│                                 │
│  [Language Selector: 🌐 EN ▾]  │
│                                 │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │     📄 Upload Zone        │  │
│  │     (drag & drop area)    │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  [File Preview Card]  (if selected) │
│  Format info: TXT, MD, PDF      │
│  Max size: 10MB                 │
│                                 │
│  ┌───────────────────────────┐  │
│  │   🚀 Evaluate My PRD      │  │
│  └───────────────────────────┘  │
│                                 │
│ ─ ─ ─ ─ ─ ─ FOLD ─ ─ ─ ─ ─ ─  │
│                                 │
│  HOW IT WORKS                   │
│  [1] Upload → [2] AI → [3] Report│
│                                 │
│  EVALUATION CATEGORIES          │
│  [9 category cards grid]        │
│                                 │
│  SAMPLE VERDICT (opsional)      │
│  [Mini score preview]           │
│                                 │
│  Footer                        │
└─────────────────────────────────┘
```

### States Flow

```
[Empty Upload Zone]
      ↓ (select/drop file)
[File Preview Shown, Evaluate Button Enabled]
      ↓ (click Evaluate)
[Loading State — skeleton + progress messages]
      ↓ (completed)
[Redirect to Result Page]
```

---

## **10.2 Evaluation Result Page (`/result/[id]`)**

### Tujuan
Menampilkan hasil evaluasi secara lengkap dan terstruktur.

### Layout (Desktop)

```
┌─────────────────────────────────────────────┐
│  Navigation Bar                             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  SCORE HEADER                        │    │
│  │  [Score: 7.8/10]  [Verdict Badge]    │    │
│  │  File: my-prd.pdf  |  Apr 13, 2026   │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌──────────────┐ ┌───────────────────┐     │
│  │              │ │ Strengths Panel   │     │
│  │  Radar Chart │ │ Weaknesses Panel  │     │
│  │  (9 kategori)│ │                   │     │
│  │              │ │                   │     │
│  └──────────────┘ └───────────────────┘     │
│                                             │
│  DETAILED ANALYSIS (2-column grid)          │
│  ┌───────────────────┐ ┌──────────────────┐ │
│  │ ⭕ Category 1     │ │ ⭕ Category 2    │ │
│  │ Ring + Explanation │ │ Ring + Explanation│ │
│  │ 💬 Evidence...    │ │ 💬 Evidence...   │ │
│  └───────────────────┘ └──────────────────┘ │
│  ┌───────────────────┐ ┌──────────────────┐ │
│  │ ⭕ Category 3     │ │ ⭕ Category 4    │ │
│  └───────────────────┘ └──────────────────┘ │
│            ... (repeat) ...                 │
│  ┌──────────────────────────────────────┐   │
│  │ ⭕ Category 9 (full-width span)     │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  Missing Sections Panel              │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  Improvement Suggestions Panel       │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────┐ ┌────────────────────┐    │
│  │📥 Download PDF│ │🔄 Evaluate Another│    │
│  └──────────────┘ └────────────────────┘    │
│                                             │
│  Footer                                    │
└─────────────────────────────────────────────┘
```

---

## **10.3 Error Page (`/error`)**

### Layout

```
┌─────────────────────────────────┐
│  Navigation Bar                 │
├─────────────────────────────────┤
│                                 │
│        ❌ (large icon)          │
│                                 │
│    Something went wrong         │
│    [Error description]          │
│                                 │
│    [Retry Button]               │
│    [Back to Home]               │
│                                 │
│  Footer                        │
└─────────────────────────────────┘
```

---

# **11. Data Visualization**

## **11.1 Radar Chart (Spider Chart)**

Komponen paling penting di Result Page — menampilkan skor 9 kategori secara visual.

| Property | Spesifikasi |
|---|---|
| Type | Radar / Spider Chart |
| Axes | 9 (satu per kategori) |
| Scale | 1 – 10 |
| Fill | Verdict color dengan opacity ~20% |
| Stroke | Verdict color, 2px |
| Grid Lines | Concentric pentagons/circles, `--color-border` |
| Labels | Category name di setiap axis, `--color-text-secondary` |
| Data Points | Dots pada setiap axis, verdict color |
| Library Frontend | Recharts atau Chart.js |

### Ukuran

| Breakpoint | Chart Size |
|---|---|
| Mobile | 280px × 280px, label font dikecilkan |
| Tablet | 360px × 360px |
| Desktop | 400px × 400px |

### Interaksi

- Hover pada data point: tooltip dengan "Category: Score/10"
- Animasi fill/draw saat page load

## **11.2 Category Score Ring**

Visual utama di dalam Category Cards — menggantikan progress bar:

| Property | Spesifikasi |
|---|---|
| Type | Circular donut/ring chart (SVG atau CSS) |
| Ring Track | `--color-border`, thickness 6px |
| Ring Fill | Score range color, proportional fill (score/10 × 360°) |
| Center Content | Score number (28-32px bold) + "/10" sublabel |
| Size | 80px (desktop), 72px (tablet), 64px (mobile) |
| Animation | Clockwise fill dari 0° ke target, 0.8s ease-out, pada scroll-into-view |

---

# **12. Interaction & Motion**

## **12.1 Transition Defaults**

| Property | Duration | Easing |
|---|---|---|
| Color, background, border | 150ms | ease-in-out |
| Transform (scale, translate) | 200ms | ease-out |
| Opacity (fade in/out) | 250ms | ease-in-out |

## **12.2 Page Transitions**

| Transition | Animation |
|---|---|
| Home → Loading | Crossfade upload zone → skeleton |
| Loading → Result | Fade in + staggered card reveal |
| Any → Error | Fade in error state |
| Result → Home | Fade transition (via "Evaluate Another PRD") |

## **12.3 Component Animations**

| Component | Animation |
|---|---|
| Score Number | Count-up dari 0 ke final score (1.5s duration) |
| Radar Chart | Draw-in dari center ke final shape (1s) |
| Category Score Rings | Clockwise fill dari 0° ke target (0.8s, staggered per card, triggered on scroll-into-view) |
| Category Cards | Staggered fade-in dari atas ke bawah (delay 100ms per card) |
| Verdict Badge | Scale bounce-in (0.3s) |
| Loading Messages | Fade rotate setiap 3 detik |
| Upload Zone (drag over) | Subtle pulse border glow |

## **12.4 Hover Effects**

| Component | Hover Effect |
|---|---|
| Primary Button | Background lighten, subtle lift shadow |
| Category Card | Border glow `--color-primary`, translateY(-2px) lift, ring subtle pulse |
| Panel Item | Background tint |
| CTA link | Underline slide-in |
| Nav links | Color transition |

---

# **13. States & Feedback**

## **13.1 Global States**

| State | Visual Feedback |
|---|---|
| Loading (page) | Skeleton shimmer |
| Loading (button) | Spinner + disabled state |
| Success | Green checkmark, transition to next step |
| Error (inline) | Red border, error text below field |
| Error (full page) | Error page layout |
| Empty | Placeholder illustration + helpful text |
| Disabled | Opacity 50%, cursor not-allowed |

## **13.2 Toast / Notification**

Digunakan untuk feedback non-blocking:

| Property | Spesifikasi |
|---|---|
| Position | Top-right (desktop), Top-center (mobile) |
| Duration | 4 detik auto-dismiss |
| Types | Success (green), Error (red), Info (blue), Warning (yellow) |
| Animation | Slide in dari kanan, fade out |

---

# **14. Accessibility**

## **14.1 Guidelines**

| Requirement | Target |
|---|---|
| WCAG Level | AA minimum |
| Color Contrast | ≥ 4.5:1 untuk normal text, ≥ 3:1 untuk large text |
| Focus Indicators | Visible focus ring pada semua interactive elements |
| Keyboard Navigation | Semua interaksi harus accessible via keyboard |
| Screen Reader | Semantic HTML, ARIA labels pada komponen custom |
| Alt Text | Pada semua gambar dan icon yang menyampaikan informasi |

## **14.2 Focus Ring Style**

| Property | Value |
|---|---|
| Outline | 2px solid `--color-primary` |
| Outline Offset | 2px |
| Border Radius | Mengikuti elemen |

## **14.3 Color-Blind Considerations**

Verdict colors tidak hanya mengandalkan warna — selalu disertai:
- **Text label** (Very Weak, Early Draft, dll.)
- **Emoji icon** (🔴, 🟠, 🟡, 🟢, ✅)
- **Pattern/shape differences** jika memungkinkan

---

# **15. PDF Report Design**

User dapat mengunduh laporan evaluasi sebagai PDF. Designer perlu mendesain layout PDF ini.

## **15.1 Spesifikasi Umum**

| Property | Spesifikasi |
|---|---|
| Format | A4 Portrait |
| Margin | 20mm semua sisi |
| Font | Inter (body), JetBrains Mono (code) |
| File Name | `PRD_Evaluation_Report_[timestamp].pdf` |

## **15.2 Layout Template**

### Header (setiap halaman)
```
[Logo PRD Evaluator]                    [Tanggal Evaluasi]
[Nama file PRD yang dievaluasi]
─────────────────────────────────────────
```

### Halaman 1: Summary
```
┌──────────────────────────────────────────┐
│                                          │
│  FINAL SCORE                             │
│  ┌──────────────────────────────────┐    │
│  │                                  │    │
│  │   7.8 / 10                       │    │
│  │   [VERDICT BADGE: Strong PRD]    │    │
│  │                                  │    │
│  └──────────────────────────────────┘    │
│                                          │
│  [Radar Chart — 9 kategori]              │
│  (render sebagai gambar statis PNG)      │
│                                          │
│  ┌────────────────┐┌────────────────┐    │
│  │  ✅ Strengths  ││  ❌ Weaknesses │    │
│  │  • ...         ││  • ...        │    │
│  │  • ...         ││  • ...        │    │
│  └────────────────┘└────────────────┘    │
│                                          │
└──────────────────────────────────────────┘
```

### Halaman 2: Detail Scores
```
┌──────────────────────────────────────────┐
│  DETAILED CATEGORY SCORES                │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │ 💡 Product Clarity         9/10  │    │
│  │ Explanation: ................... │    │
│  │ Evidence: "..................."  │    │
│  └──────────────────────────────────┘    │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │ 👥 User Understanding      8/10 │    │
│  │ Explanation: ................... │    │
│  │ Evidence: "..................."  │    │
│  └──────────────────────────────────┘    │
│                                          │
│  (repeat untuk setiap kategori)          │
│                                          │
└──────────────────────────────────────────┘
```

### Halaman 3: Recommendations
```
┌──────────────────────────────────────────┐
│  RECOMMENDATIONS                         │
│                                          │
│  ⚠️ Missing Sections:                   │
│  • Monetization / Pricing                │
│  • Non-functional Requirements           │
│                                          │
│  💡 Improvement Suggestions:             │
│  1. Add pricing model ...                │
│  2. Include performance targets ...      │
│  3. Define user personas in detail ...   │
│                                          │
└──────────────────────────────────────────┘
```

### Footer (setiap halaman)
```
─────────────────────────────────────────
Generated by PRD Evaluator              Page X of Y
prdevaluator.com
```

## **15.3 PDF Branding**

| Elemen | Spesifikasi |
|---|---|
| Logo | PRD Evaluator logo (header kiri) |
| Tanggal | Header kanan |
| Footer text | "Generated by PRD Evaluator — prdevaluator.com" |
| Footer page number | "Page X of Y" kanan bawah |
| Verdict Badge | Menggunakan verdict colors (print-safe version) |
| Radar Chart | Rendered sebagai gambar statis (PNG) embedded ke PDF |
| Color Mode | **Light background untuk PDF** — putih/light gray, bukan dark |

> **Penting:** PDF menggunakan **light color scheme** (bukan dark mode) untuk hasil cetak yang optimal.

---

# **16. SEO & Meta Assets**

## **16.1 Open Graph Image**

Designer perlu membuat OG Image:

| Property | Spesifikasi |
|---|---|
| Ukuran | 1200 × 630 px |
| Format | PNG |
| Konten | Logo PRD Evaluator + Tagline + Sample score visual |
| Background | Gradient gelap (sesuai brand) |
| Text | Readable, high contrast |

## **16.2 Twitter Card Image**

- Sama dengan OG Image (1200 × 630 px)
- Pastikan teks utama berada di center (safe zone)

## **16.3 Favicon Set**

| Size | Format | Penggunaan |
|---|---|---|
| 16 × 16 | ICO/PNG | Browser tab |
| 32 × 32 | PNG | Browser tab (HiDPI) |
| 192 × 192 | PNG | Android home screen |
| 512 × 512 | PNG | PWA splash screen |
| apple-touch-icon | 180 × 180 PNG | iOS home screen |

---

# **17. Design Deliverables Checklist**

Berikut checklist deliverables yang diharapkan dari UI/UX Designer:

## **17.1 Logo & Brand Assets**

- [ ] Logo full color (dark background)
- [ ] Logo full color (light background — untuk PDF)
- [ ] Logo monochrome (white)
- [ ] Logomark / Icon only
- [ ] Favicon set (16, 32, 192, 512px)
- [ ] Apple touch icon (180px)
- [ ] OG Image (1200 × 630px)

## **17.2 UI Design — Pages (High Fidelity)**

- [ ] Home Page (Landing + Upload) — Desktop, Tablet, Mobile
- [ ] Home Page — All states (empty, file selected, loading, error)
- [ ] Result Page — Desktop, Tablet, Mobile
- [ ] Result Page — All verdict variants (5 variants)
- [ ] Error Page — Desktop, Mobile

## **17.3 Component Design**

- [ ] Button variants (Primary, Secondary, Ghost) × states
- [ ] Upload Zone (all states)
- [ ] File Preview Card
- [ ] Score Header + Verdict Badge
- [ ] Radar Chart (9 kategori)
- [ ] Category Score Card (2-column grid + circular score ring + evidence block)
- [ ] Circular Score Ring component (semua score range variants)
- [ ] Strengths Panel
- [ ] Weaknesses Panel
- [ ] Missing Sections Panel
- [ ] Improvement Suggestions Panel
- [ ] Loading State (skeleton + progress messages)
- [ ] Error Cards (inline + full page)
- [ ] Language Selector Dropdown
- [ ] Navigation Bar (desktop + mobile)
- [ ] Footer
- [ ] Toast/Notification (4 types)
- [ ] Download PDF Button

## **17.4 PDF Report**

- [ ] PDF Cover / Halaman 1 (Summary)
- [ ] PDF Halaman 2 (Detail Scores)
- [ ] PDF Halaman 3 (Recommendations)
- [ ] PDF Header & Footer

## **17.5 Interaction & Motion**

- [ ] Micro-animation specs (duration, easing)
- [ ] Score count-up animation reference
- [ ] Radar chart draw-in animation reference
- [ ] Loading state transition flow
- [ ] Page transition specs

## **17.6 Design System File**

- [ ] Color tokens (semua warna terdokumentasi)
- [ ] Typography scale
- [ ] Spacing scale
- [ ] Icon set (semua icon yang digunakan)
- [ ] Component library (reusable)
- [ ] Responsive grid documentation

---

> **Catatan Akhir untuk Designer:**
>
> 1. **Gambar/Ilustrasi:** Jika menggunakan ilustrasi di landing page, gunakan style yang konsisten — geometric, abstract, professional. Bukan cartoon/playful.
>
> 2. **Dark Mode First:** Seluruh UI web menggunakan dark theme. PDF report menggunakan light theme.
>
> 3. **Referensi Visual:** Competitor/inspirasi visual yang bisa dilihat: Vercel Dashboard, Linear App, Raycast, Stripe Dashboard.
>
> 4. **Bahasa UI:** Semua label, button, dan teks UI dalam **Bahasa Inggris**. Konten evaluasi bisa Bahasa Indonesia atau Inggris (dipilih user).
>
> 5. **Design Tool:** Bebas menggunakan Figma, Sketch, atau Adobe XD. Pastikan deliverable dapat diakses dan di-inspect oleh developer.
>
> 6. **Handoff:** Sertakan spacing, color tokens, dan font specs dalam design file. Gunakan auto-layout dan component/instance system di Figma jika memungkinkan.

---

*PRD Design System v1.0 — PRD Evaluator — 2026-04-13*
