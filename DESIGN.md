# Design System: PRD Evaluator

## Global Guidelines
- **Theme**: Dark mode only. Clean, professional, modern SaaS look (similar to Vercel, Linear).
- **Style**: Data-first, clear hierarchy, minimalistic. Avoid ornamental elements.
- **Corners**: Subtle roundness, mostly 8px to 12px for containers.

## 🎨 Color Palette
- **Primary**: `#F77F00` (Safety Orange)
- **Primary Hover**: `#FCBF49` (Dandelion)
- **Primary Subtle**: `rgba(247, 127, 0, 0.1)`

### Backgrounds & Surfaces
- **Background**: `#003049` (Deep Navy)
- **Surface**: `#013b5a` (Lighter Navy)
- **Surface Elevated**: `#024a71` (Selected states/Modals)
- **Border/Divider**: `#0a4e76`

### Text Colors
- **Text Primary**: `#f8fafc` (Headings, primary body)
- **Text Secondary**: `#94a3b8` (Labels, captions, icons)
- **Text Muted**: `#64748b` (Placeholders, disabled elements)

### Semantic & Feedback Colors
- **Success**: `#FCBF49` (Gold - Positive feedback)
- **Warning**: `#F77F00` (Orange)
- **Error**: `#D62828` (Crimson Red)
- **Info**: `#94a3b8`

### Verdict / Score Range Colors
- **1-3 (Very Weak)**: `#D62828` (Crimson)
- **4-5 (Incomplete)**: `#F77F00` (Orange)
- **6-7 (Adequate)**: `#FCBF49` (Gold)
- **8-9 (Strong)**: `#015b8a` (Light Navy/Cyan Tint)
- **10 (Exceptional)**: `#ffffff`

## 🔤 Typography
- **Primary Font**: `Inter` (used for all UI text, headings, buttons)
- **Monospace Font**: `JetBrains Mono` (used for code, JSON, evidence blocks)
- **Base Size**: 16px
- **Weights**: Regular (400) for body, SemiBold (600) for components/small headings, Bold (700) for large headings

## 📐 Spacing & Layout
- **Base Unit**: 4px
- **Padding/Margins**: Use standard multiples (8px, 16px, 24px, 32px)
- **Max Width**: Content area constrained to `1200px` (or `600px` for narrow focused forms like upload).
- **Responsive**: Mobile-first design, single column on mobile, transitioning to 2-column or 3-column grids on desktop.

## 🟥 Shape & Borders
- **Border Radius Small**: `6px` (badges, tags)
- **Border Radius Medium**: `8px` (inputs, small buttons, default elements)
- **Border Radius Large**: `12px` (cards, dialogs)
- **Border Radius Extra Large**: `16px` (large containers, upload zone)
- **Border Radius Full**: `9999px` (pill buttons, circular badges)

## 🧩 Components Instructions

### Buttons
- **Primary Buttons**: Solid background `#F77F00`, text `#ffffff`, radius `8px`, SemiBold. Hover: `#FCBF49`.
- **Secondary Buttons**: Transparent background, border `1px solid #F77F00`, text `#F77F00`, radius `8px`.
- **Ghost Buttons**: Transparent background, text `#f8fafc` or `#94a3b8`, no border.

### Inputs & Forms
- **Style**: Background `#013b5a`, border `1px solid #0a4e76`, text `#f8fafc`, radius `8px`. Focus state should change border to `#F77F00`. Height `44px`.

### Upload Zone
- **Style**: Dashed border `2px dashed #0a4e76`, background `#013b5a`, radius `16px`. Hover state changes border to `#F77F00` and background to `rgba(247, 127, 0, 0.05)`.

### Cards (Category Score Cards)
- **Style**: Background `#013b5a`, radius `12px`, no shadow by default (use border and subtle background difference). Left border `3px solid [Score Color]` to indicate status. 
- **Hover**: Subtle translateY(-2px), border glow `#F77F00`.
- **Evidence Panel (inner)**: Background `#024a71`, left border `2px solid #94a3b8`, radius `8px`, Monospace text `13px`, text color `#94a3b8`.

### Badges / Verdict Tags
- **Style**: Pill shape (`9999px` radius), background matched to verdict color, text white (or dark for yellow).

### Circular Score Rings
- **Track**: `#0a4e76`, thickness 6px.
- **Fill**: verdict/score color.

### Icons
- **Style**: Solid or Line icons with 2px stroke, size generally 20px (inline) or 24px (standalone). Color inherits from text context.

## 🌟 Interaction & State Effects
- Use transitions on colors and border (`150ms ease-in-out`), and transform for hover lift (`200ms ease-out`).
- Focus rings for accessibility: `2px solid #F77F00` with `2px` offset.
- Provide clear visual distinction for disabled states (50% opacity).
