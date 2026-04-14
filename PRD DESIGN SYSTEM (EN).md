# **PRD Design System — PRD Evaluator**

## **Document Info**

| Field | Detail |
|---|---|
| Product Name | PRD Evaluator App |
| Document Type | Design System Specification |
| Version | 1.0 |
| Status | Ready for Designer Handoff |
| Last Updated | 2026-04-13 |
| Reference | PRD Evaluator v2.1 |
| Target Audience | UI/UX Designer |

---

## **Table of Contents**

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

## **1.1 About PRD Evaluator**

PRD Evaluator is a web application that allows users to **upload a Product Requirements Document (PRD)** and receive an **automated AI-powered evaluation** in under 30 seconds.

## **1.2 Tagline**

> *"Know if your PRD is ready before your first sprint."*

## **1.3 What the Product Does**

1. User opens the home page and directly **uploads** a PRD file (supported formats: TXT, MD, PDF)
2. AI **analyzes** the document content across 9 evaluation categories
3. User receives a **structured evaluation report** with scores, strengths, weaknesses, and recommendations
4. User can **download the report** as a PDF

> **Note:** The landing page and upload page have been merged into a single Home Page since the MVP has no authentication feature. Users can start evaluating immediately without additional navigation.

## **1.4 Target Users**

| User | Description |
|---|---|
| Startup Founders | Want to validate their PRD is mature before starting development |
| Product Managers | Need a fast, standardized self-review process |
| Developers | Verify requirement completeness before sprint begins |
| Product Design Students | Need objective feedback for learning |
| Freelance Consultants | Validate product documentation for clients |

## **1.5 Mood & Feel**

| Aspect | Description |
|---|---|
| Tone | Professional, trustworthy, modern |
| Vibe | Dark-themed SaaS tool — premium feel, not playful |
| Visual Analogy | Similar to analytics dashboard tools (Vercel, Linear, Raycast) |
| Personality | Confident, intelligent, minimal yet informative |

---

# **2. Design Principles**

The following principles should guide all design decisions throughout the project:

### **2.1 Clarity Over Decoration**
Every visual element must serve a purpose. Avoid ornamental elements that don't help the user understand information.

### **2.2 Data-First Design**
This is a **reporting tool**. Scores, charts, and insights should be the hero of every page — not decoration.

### **2.3 Progressive Disclosure**
Don't display all information at once. Use hierarchy, collapsible sections, and visual grouping to guide the user's eye.

### **2.4 Instant Trust**
First-time users should immediately trust that this tool is credible. Use clean visuals, neat typography, and consistent colors.

### **2.5 Mobile-Aware**
Design starts from mobile, then scales up to desktop. Every component must work on small screens.

---

# **3. Brand Identity**

## **3.1 Logo**

| Aspect | Specification |
|---|---|
| Product Name | PRD Evaluator |
| Style | Wordmark + icon/logomark |
| Logo Tone | Geometric, clean, modern |
| Primary Logo Color | Indigo `#6366F1` on dark background |
| Required Variations | Full color (dark bg), Full color (light bg), Monochrome white, Favicon (16x16, 32x32, 192x192) |

> **Deliverable:** Designer creates the complete logo with all variations listed above.

## **3.2 Favicon**

- Format: ICO + PNG (16x16, 32x32, 192x192)
- Must be readable at small sizes
- Use logomark only (without wordmark)

---

# **4. Color System**

## **4.1 Core Palette**

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#F77F00` | Primary buttons, links, accents, highlights (Orange) |
| `--color-primary-hover` | `#FCBF49` | Primary button hover state (Gold) |
| `--color-primary-subtle` | `rgba(247, 127, 0, 0.1)` | Badge backgrounds, subtle highlights |
| `--color-bg` | `#003049` | Main page background (Deep Navy) |
| `--color-surface` | `#013b5a` | Cards, panels, containers (Lighter Navy) |
| `--color-surface-elevated` | `#024a71` | Elevated cards, modals, dropdowns |
| `--color-border` | `#0a4e76` | Card borders, dividers |

## **4.2 Text Colors**

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#F8FAFC` | Headings, primary body text |
| `--color-text-secondary` | `#94A3B8` | Labels, captions, helper text |
| `--color-text-muted` | `#64748B` | Placeholders, disabled text |

## **4.3 Semantic / Feedback Colors**

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#FCBF49` | Success states, positive indicators, gold accents |
| `--color-warning` | `#F77F00` | Warning states, orange indicators |
| `--color-error` | `#D62828` | Error states, crimson reds, weaknesses |
| `--color-info` | `#94A3B8` | Informational messages, slate/neutral |

## **4.4 Verdict Colors (Critical)**

These colors are used to display evaluation verdicts. They must be highly distinct and clearly differentiable:

| Verdict | Hex | Emoji | Usage |
|---|---|---|---|
| Very Weak (0–3.9) | `#D62828` | 🔴 | Badge, score ring, border |
| Early Draft (4–5.9) | `#F77F00` | 🟠 | Badge, score ring, border |
| Good Draft (6–7.4) | `#FCBF49` | 🟡 | Badge, score ring, border |
| Strong PRD (7.5–8.4) | `#015b8a` | 🔵 | Badge, score ring, border |
| Development Ready (8.5–10) | `#ffffff` | ✅ | Badge, score ring, border |

> **Note for Designer:** Verdict colors are used across many components — Score Header, Radar Chart, Category Cards, PDF Report, and Verdict Badge. Ensure sufficient contrast against `--color-surface`.

## **4.5 Score Bar / Gauge Colors**

For progress bars or gauges on category scores:

| Score Range | Color |
|---|---|
| 1–3 | `#D62828` (Crimson) |
| 4–5 | `#F77F00` (Orange) |
| 6–7 | `#FCBF49` (Gold) |
| 8–9 | `#015b8a` (Light Navy) |
| 10 | `#ffffff` (White) |

---

# **5. Typography**

## **5.1 Font Families**

| Usage | Font | Source |
|---|---|---|
| UI Text (headings, body, labels) | **Inter** | Google Fonts |
| Code / JSON / Monospace | **JetBrains Mono** | Google Fonts |

## **5.2 Type Scale**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `--text-display` | 48px / 3rem | 700 (Bold) | 1.1 | Large final score number |
| `--text-h1` | 36px / 2.25rem | 700 (Bold) | 1.2 | Hero heading |
| `--text-h2` | 28px / 1.75rem | 700 (Bold) | 1.3 | Section heading |
| `--text-h3` | 22px / 1.375rem | 600 (SemiBold) | 1.4 | Card heading, panel title |
| `--text-h4` | 18px / 1.125rem | 600 (SemiBold) | 1.4 | Sub-section heading |
| `--text-body` | 16px / 1rem | 400 (Regular) | 1.6 | Body text, paragraphs |
| `--text-body-sm` | 14px / 0.875rem | 400 (Regular) | 1.5 | Secondary body, card body |
| `--text-caption` | 12px / 0.75rem | 400 (Regular) | 1.4 | Caption, small labels, timestamps |
| `--text-code` | 14px / 0.875rem | 400 (Regular) | 1.6 | Code blocks, JSON preview |

## **5.3 Usage by Context**

| Context | Font | Size | Weight |
|---|---|---|---|
| Hero tagline | Inter | h1 (36px) | 700 |
| Section title | Inter | h2 (28px) | 700 |
| Card title | Inter | h3 (22px) | 600 |
| Button text | Inter | body (16px) | 600 |
| Body text | Inter | body (16px) | 400 |
| Input label | Inter | body-sm (14px) | 500 |
| Placeholder | Inter | body (16px) | 400 |
| Score number (large) | Inter | display (48px) | 700 |
| Evidence quote | JetBrains Mono | body-sm (14px) | 400 |
| JSON output | JetBrains Mono | code (14px) | 400 |

---

# **6. Spacing & Layout Grid**

## **6.1 Spacing Scale (Base: 4px)**

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight spacing (icon to text) |
| `--space-2` | 8px | Horizontal input padding |
| `--space-3` | 12px | Inline spacing |
| `--space-4` | 16px | Card inner padding, small element gaps |
| `--space-5` | 20px | — |
| `--space-6` | 24px | Section padding, card padding |
| `--space-8` | 32px | Section gaps |
| `--space-10` | 40px | Layout padding |
| `--space-12` | 48px | Large section gaps |
| `--space-16` | 64px | Page section spacing |
| `--space-20` | 80px | Hero section padding |

## **6.2 Border Radius**

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Badge, tag, chip |
| `--radius-md` | 8px | Input, small card |
| `--radius-lg` | 12px | Card, panel |
| `--radius-xl` | 16px | Modal, large container |
| `--radius-full` | 9999px | Pill button, avatar |

## **6.3 Elevation / Shadow**

| Level | Shadow | Usage |
|---|---|---|
| Level 0 | none | Flat surface |
| Level 1 | `0 1px 3px rgba(0,0,0,0.3)` | Card, panel |
| Level 2 | `0 4px 12px rgba(0,0,0,0.4)` | Dropdown, popover |
| Level 3 | `0 8px 24px rgba(0,0,0,0.5)` | Modal, dialog |

> **Note:** On dark themes, shadows are less effective. Use **border + subtle background difference** as the primary method of element separation. Shadows serve only as a supplement.

## **6.4 Container Width**

| Breakpoint | Max Width |
|---|---|
| Content area | 1200px |
| Narrow content (upload page) | 600px |
| Card grid | 1100px |

---

# **7. Responsive Breakpoints**

## **7.1 Breakpoint Definitions**

| Name | Width | Description |
|---|---|---|
| Mobile | < 640px | Single column, stacked panels |
| Tablet | 640px – 1024px | Two columns for score cards |
| Desktop | > 1024px | Full layout, side-by-side panels |

**Approach:** Mobile-first. CSS is written from mobile upward using `min-width` media queries.

## **7.2 Layout per Page**

### Home Page (Landing + Upload)

| Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---|---|---|
| Hero + upload zone stacked, CTA full-width, info sections vertical | Hero + upload zone side-by-side, info sections 2-column | Full hero + upload zone centered 60% max-width 600px, info sections side-by-side |

### Result Page

| Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---|---|---|
| Score header stacked, radar chart full-width, category cards 1-column | Radar + score side-by-side, cards 2-column | Radar left + summary right, cards 3-column grid |

## **7.3 Mobile-Specific Behaviors**

| Component | Mobile Behavior |
|---|---|
| Radar Chart | Scaled down, label font-size reduced |
| Category Cards | Collapsible accordion (tap to expand details) |
| Download PDF Button | Sticky bottom bar |
| Language Selector | Remains visible above the upload zone |
| Navigation | Simplified — logo + minimal nav |

---

# **8. Iconography**

## **8.1 Icon Style**

| Aspect | Specification |
|---|---|
| Style | Outline / Line icons (2px stroke) |
| Recommended Library | Lucide Icons or Phosphor Icons |
| Default Size | 20px × 20px (inside buttons), 24px × 24px (standalone) |
| Color | Follows text color context (`text-primary` or `text-secondary`) |

## **8.2 Icon Usage**

| Context | Required Icon |
|---|---|
| Upload File | Upload / Cloud-Upload |
| File Types | FileText (TXT), FileCode (MD), FileType (PDF) |
| Evaluate / Analyze | Sparkles / Wand / Scan |
| Download PDF | Download / FileDown |
| Score Category | 9 icons for each evaluation category (see below) |
| Success | CheckCircle |
| Error | AlertCircle / XCircle |
| Warning | AlertTriangle |
| Info | Info |
| Retry | RefreshCw |
| External Link | ExternalLink |
| Language | Globe |

## **8.3 Category Icons (9 Evaluation Categories)**

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

> **Note:** Designer is free to choose the most appropriate icon as long as the style remains consistent throughout.

---

# **9. Component Library**

Below is the list of UI components that need to be designed. Each component must be designed for **all applicable states**.

## **9.1 Buttons**

### Variants

| Variant | Usage | Style |
|---|---|---|
| Primary | Main CTA ("Evaluate My PRD", "Evaluate") | Solid `--color-primary`, white text |
| Secondary | Secondary actions ("Evaluate Another PRD") | Outline border `--color-primary` |
| Ghost | Minor actions, navigation | Transparent, primary text color |
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
| Style | Custom dropdown with globe icon |
| Options | 🇺🇸 English (default), 🇮🇩 Bahasa Indonesia |
| Position | Above the upload zone on the Home Page (`/`) |
| Behavior | Selection is persisted in localStorage |

---

## **9.3 Upload Zone**

The primary component on the Upload page.

| Property | Specification |
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
| Drag Over | Border changes to primary color, subtle glow, background tint |
| File Selected | Display FilePreview (file name, size, format icon) |
| Uploading | Progress bar, file name, percentage |
| Error | Red border, error message below |

---

## **9.4 File Preview Card**

Appears after a file is successfully selected, replacing the upload zone placeholder.

| Property | Specification |
|---|---|
| Layout | Horizontal: [icon] [file info] [remove button] |
| File Icon | Icon matching format (TXT/MD/PDF) |
| File Name | Truncate if too long |
| File Size | Format: "1.2 MB" |
| File Format Badge | Small badge: "PDF", "TXT", "MD" |
| Remove Button | X button to remove file and reset |

---

## **9.5 Score Header**

The hero component on the Result page — displays the Final Score and Verdict.

| Property | Specification |
|---|---|
| Final Score | Display size (48px), bold, color matches verdict |
| Score Format | "7.8 / 10" |
| Verdict Badge | Rounded pill, verdict color background, white text |
| File Name | Below score, caption font, text-secondary color |
| Evaluated At | Evaluation timestamp, caption font |

### Score Ring / Gauge (Optional)

Consider a circular gauge/ring surrounding the score number:
- Ring track: `--color-border`
- Ring fill: verdict color
- Fill animation on page load

---

## **9.6 Category Score Card**

9 cards in a **2-column grid** (9th card spans full-width), one for each evaluation category.

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

| Property | Specification |
|---|---|
| Grid Layout | 2-column grid (desktop/tablet), 1-column (mobile) |
| 9th Card | Full-width (spans 2 columns) |
| Border Radius | `--radius-lg` |
| Background | `--color-surface` |
| Border Left | 3px solid score range color (provides quick visual scanning) |
| Header Row | [Circular Score Ring] [Category Icon + Category Name] |
| Explanation | Body text (Inter), 2–4 sentences, `--color-text-primary` |
| Hover | Border glow `--color-primary`, subtle translateY(-2px) lift |

### Circular Score Ring

| Property | Specification |
|---|---|
| Type | Donut / ring chart (SVG or CSS) |
| Size (Desktop) | 80px × 80px |
| Size (Tablet) | 72px × 72px |
| Size (Mobile) | 64px × 64px |
| Ring Thickness | 6px |
| Ring Track | `--color-border` (#2D2D4A) |
| Ring Fill | Score range color, proportional fill (score/10 × 360°) |
| Center Number | Score (e.g. "7.8"), font 28-32px bold |
| Center Sublabel | "/10" (caption size, `--color-text-muted`) — or score label ("Strong") |
| Animation | Clockwise fill from 0° to target, 0.8s ease-out, triggered on scroll-into-view |

**Ring Colors per Score Range:**

| Score | Ring Color | Label |
|---|---|---|
| 1–3 | `#EF4444` (Red) | Very Weak |
| 4–5 | `#F97316` (Orange) | Incomplete |
| 6–7 | `#EAB308` (Yellow) | Adequate |
| 8–9 | `#22C55E` (Green) | Strong |
| 10 | `#6366F1` (Indigo) | Exceptional |

### Evidence Section (within Card)

| Property | Specification |
|---|---|
| Background | `--color-surface-elevated` (#252540) |
| Border Left | 2px solid `--color-text-muted` |
| Font | JetBrains Mono, 13px, italic |
| Color | `--color-text-secondary` |
| Label | 💬 "From your PRD:" (subtle, caption size) |
| Overflow | Truncate after 3 lines + "Show more ▾" expandable |
| Border Radius | `--radius-md` |

### Mobile Behavior

- Cards become a **1-column stack**
- Cards function as **collapsible accordions**
- Default: collapsed (only shows circular ring + category name + score)
- Tap/click: expands to reveal explanation + evidence

---

## **9.7 Panel Components**

Used for Strengths, Weaknesses, Missing Sections, and Improvement Suggestions.

### Strengths Panel

| Property | Specification |
|---|---|
| Icon | CheckCircle (`--color-success`) |
| Title | "Strengths" |
| Border Left | 3px solid `--color-success` |
| Items | Bulleted list, `--color-text-primary` |

### Weaknesses Panel

| Property | Specification |
|---|---|
| Icon | AlertCircle (`--color-error`) |
| Title | "Weaknesses" |
| Border Left | 3px solid `--color-error` |
| Items | Bulleted list, `--color-text-primary` |

### Missing Sections Panel

| Property | Specification |
|---|---|
| Icon | AlertTriangle (`--color-warning`) |
| Title | "Missing Sections" |
| Border Left | 3px solid `--color-warning` |
| Items | Bulleted list or tag/chip list |

### Improvement Suggestions Panel

| Property | Specification |
|---|---|
| Icon | Sparkles (`--color-info`) |
| Title | "Improvement Suggestions" |
| Border Left | 3px solid `--color-info` |
| Items | Numbered list with brief descriptions |

---

## **9.8 Loading State**

Used while the evaluation is in progress.

| Property | Specification |
|---|---|
| Type | Skeleton loader + progress message |
| Messages (rotating) | "Parsing document...", "Evaluating PRD...", "Generating report..." |
| Duration | ~15–30 seconds |
| Visual | Animated pulse/shimmer skeleton cards |
| Progress Indicator | Stepped progress (3 steps): Parse → Evaluate → Generate |

---

## **9.9 Error States**

| Error Type | Visual |
|---|---|
| File format error | Inline error below upload zone, red border |
| File too large | Inline error below upload zone |
| Parse failed | Full error card with icon, message, and retry button |
| AI timeout | Full error card with retry button |
| Rate limit | Full error card with countdown timer |
| General error | Full page error with CTA to return home |

### Error Card Template

| Property | Specification |
|---|---|
| Icon | XCircle / AlertCircle (48px) |
| Title | Bold, text-primary |
| Message | Body text, text-secondary |
| Action Button | Primary button "Try Again" or "Back to Home" |
| Background | `--color-surface` |
| Border | 1px solid `--color-error` (optional) |

---

## **9.10 Verdict Badge**

Used in the Score Header and PDF Report.

| Verdict | Background | Text | Border Radius |
|---|---|---|---|
| Very Weak | `#EF4444` | White | `--radius-full` (pill) |
| Early Draft | `#F97316` | White | `--radius-full` |
| Good Draft | `#EAB308` | `#1A1A2E` (dark) | `--radius-full` |
| Strong PRD | `#22C55E` | White | `--radius-full` |
| Development Ready | `#6366F1` | White | `--radius-full` |

---

## **9.11 Navigation / Header**

| Property | Specification |
|---|---|
| Position | Sticky top |
| Height | 64px |
| Background | `--color-bg` with subtle opacity/blur |
| Left | Logo (wordmark) |
| Right | CTA button (small): "Evaluate PRD" |
| Mobile | Logo + hamburger (if needed) or simple logo + CTA |
| Border Bottom | 1px solid `--color-border` |

---

## **9.12 Footer**

| Property | Specification |
|---|---|
| Background | `--color-bg` |
| Content | "Built with ❤️ by [Author]" · "PRD Evaluator" · Year |
| Border Top | 1px solid `--color-border` |
| Padding | `--space-8` vertical |
| Text | `--color-text-muted`, caption size |

---

# **10. Page Specifications**

## **10.1 Home Page — Landing + Upload (`/`)**

### Purpose
Explain the application's functionality, build trust, and **allow users to upload and evaluate their PRD directly** — all on a single page. Since the MVP has no authentication feature, users do not need to navigate to a separate page to start evaluating.

### Sections

#### A. Hero Section + Upload Zone (Above the Fold)
| Element | Description |
|---|---|
| Headline (H1) | "Know if your PRD is ready before your first sprint." |
| Sub-headline | Brief description of what PRD Evaluator does |
| Upload Zone | Drag & drop area integrated directly into the hero section |
| Language Selector | Dropdown for output language selection (🌐 EN ▾) |
| File Preview | Appears after file is selected (name, size, format) |
| Format Info | "Supports: TXT, MD, PDF (max 10MB)" |
| Evaluate Button (Primary, Large) | "Evaluate My PRD" — starts evaluation |
| Loading State | Skeleton/spinner + progress messages during evaluation |

#### B. How It Works (Below the Fold)
3-step horizontal layout (desktop) / vertical layout (mobile):

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | Upload icon | Upload Your PRD | Drag & drop a TXT, MD, or PDF file |
| 2 | Sparkles/AI icon | AI Analyzes | AI evaluates 9 key categories instantly |
| 3 | BarChart icon | Get Your Report | Receive scores, insights, and recommendations |

#### C. Evaluation Categories Preview
3×3 grid (desktop) or list (mobile) showing the 9 evaluation categories:
- Each item: [Icon] + [Category Name] + [Short description]
- Style: card or grid item with subtle hover effect

#### D. Sample Verdict Preview (Optional)
Sample evaluation result display (mock data):
- Mini Score Header + Radar Chart preview
- Purpose: show users what they will receive

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
│  SAMPLE VERDICT (optional)      │
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

### Purpose
Display the complete evaluation results in a structured and visual format.

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
│  │  (9 categories) │                   │     │
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

The most critical component on the Result Page — visualizes scores across all 9 categories.

| Property | Specification |
|---|---|
| Type | Radar / Spider Chart |
| Axes | 9 (one per category) |
| Scale | 1 – 10 |
| Fill | Verdict color at ~20% opacity |
| Stroke | Verdict color, 2px |
| Grid Lines | Concentric pentagons/circles, `--color-border` |
| Labels | Category name at each axis, `--color-text-secondary` |
| Data Points | Dots at each axis, verdict color |
| Frontend Library | Recharts or Chart.js |

### Sizing

| Breakpoint | Chart Size |
|---|---|
| Mobile | 280px × 280px, reduced label font size |
| Tablet | 360px × 360px |
| Desktop | 400px × 400px |

### Interactions

- Hover on data point: tooltip displaying "Category: Score/10"
- Fill/draw animation on page load

## **11.2 Category Score Ring**

The primary visual within Category Cards — replaces the progress bar:

| Property | Specification |
|---|---|
| Type | Circular donut/ring chart (SVG or CSS) |
| Ring Track | `--color-border`, thickness 6px |
| Ring Fill | Score range color, proportional fill (score/10 × 360°) |
| Center Content | Score number (28-32px bold) + "/10" sublabel |
| Size | 80px (desktop), 72px (tablet), 64px (mobile) |
| Animation | Clockwise fill from 0° to target, 0.8s ease-out, on scroll-into-view |

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
| Score Number | Count-up from 0 to final score (1.5s duration) |
| Radar Chart | Draw-in from center to final shape (1s) |
| Category Score Rings | Clockwise fill from 0° to target (0.8s, staggered per card, triggered on scroll-into-view) |
| Category Cards | Staggered fade-in from top to bottom (100ms delay per card) |
| Verdict Badge | Scale bounce-in (0.3s) |
| Loading Messages | Fade rotate every 3 seconds |
| Upload Zone (drag over) | Subtle pulsing border glow |

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

Used for non-blocking feedback:

| Property | Specification |
|---|---|
| Position | Top-right (desktop), Top-center (mobile) |
| Duration | 4 seconds auto-dismiss |
| Types | Success (green), Error (red), Info (blue), Warning (yellow) |
| Animation | Slide in from right, fade out |

---

# **14. Accessibility**

## **14.1 Guidelines**

| Requirement | Target |
|---|---|
| WCAG Level | AA minimum |
| Color Contrast | ≥ 4.5:1 for normal text, ≥ 3:1 for large text |
| Focus Indicators | Visible focus ring on all interactive elements |
| Keyboard Navigation | All interactions must be keyboard accessible |
| Screen Reader | Semantic HTML, ARIA labels on custom components |
| Alt Text | On all images and icons that convey information |

## **14.2 Focus Ring Style**

| Property | Value |
|---|---|
| Outline | 2px solid `--color-primary` |
| Outline Offset | 2px |
| Border Radius | Matches the element |

## **14.3 Color-Blind Considerations**

Verdict colors must never rely solely on color — always accompanied by:
- **Text label** (Very Weak, Early Draft, etc.)
- **Emoji icon** (🔴, 🟠, 🟡, 🟢, ✅)
- **Pattern/shape differences** where possible

---

# **15. PDF Report Design**

Users can download the evaluation report as a PDF. The designer needs to create the PDF layout.

## **15.1 General Specifications**

| Property | Specification |
|---|---|
| Format | A4 Portrait |
| Margins | 20mm on all sides |
| Font | Inter (body), JetBrains Mono (code) |
| File Name | `PRD_Evaluation_Report_[timestamp].pdf` |

## **15.2 Layout Template**

### Header (every page)
```
[PRD Evaluator Logo]                    [Evaluation Date]
[Name of the evaluated PRD file]
─────────────────────────────────────────
```

### Page 1: Summary
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
│  [Radar Chart — 9 categories]            │
│  (rendered as a static PNG image)        │
│                                          │
│  ┌────────────────┐┌────────────────┐    │
│  │  ✅ Strengths  ││  ❌ Weaknesses │    │
│  │  • ...         ││  • ...        │    │
│  │  • ...         ││  • ...        │    │
│  └────────────────┘└────────────────┘    │
│                                          │
└──────────────────────────────────────────┘
```

### Page 2: Detail Scores
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
│  (repeated for each category)            │
│                                          │
└──────────────────────────────────────────┘
```

### Page 3: Recommendations
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

### Footer (every page)
```
─────────────────────────────────────────
Generated by PRD Evaluator              Page X of Y
prdevaluator.com
```

## **15.3 PDF Branding**

| Element | Specification |
|---|---|
| Logo | PRD Evaluator logo (header left) |
| Date | Header right |
| Footer text | "Generated by PRD Evaluator — prdevaluator.com" |
| Footer page number | "Page X of Y" bottom right |
| Verdict Badge | Uses verdict colors (print-safe version) |
| Radar Chart | Rendered as a static image (PNG) embedded in PDF |
| Color Mode | **Light background for PDF** — white/light gray, not dark |

> **Important:** The PDF uses a **light color scheme** (not dark mode) for optimal print quality.

---

# **16. SEO & Meta Assets**

## **16.1 Open Graph Image**

The designer needs to create an OG Image:

| Property | Specification |
|---|---|
| Size | 1200 × 630 px |
| Format | PNG |
| Content | PRD Evaluator logo + Tagline + Sample score visual |
| Background | Dark gradient (matching brand) |
| Text | Readable, high contrast |

## **16.2 Twitter Card Image**

- Same as OG Image (1200 × 630 px)
- Ensure primary text is within the center safe zone

## **16.3 Favicon Set**

| Size | Format | Usage |
|---|---|---|
| 16 × 16 | ICO/PNG | Browser tab |
| 32 × 32 | PNG | Browser tab (HiDPI) |
| 192 × 192 | PNG | Android home screen |
| 512 × 512 | PNG | PWA splash screen |
| apple-touch-icon | 180 × 180 PNG | iOS home screen |

---

# **17. Design Deliverables Checklist**

Below is the checklist of expected deliverables from the UI/UX Designer:

## **17.1 Logo & Brand Assets**

- [ ] Logo full color (dark background)
- [ ] Logo full color (light background — for PDF)
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
- [ ] Radar Chart (9 categories)
- [ ] Category Score Card (2-column grid + circular score ring + evidence block)
- [ ] Circular Score Ring component (all score range variants)
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

- [ ] PDF Page 1 — Summary (cover)
- [ ] PDF Page 2 — Detail Scores
- [ ] PDF Page 3 — Recommendations
- [ ] PDF Header & Footer

## **17.5 Interaction & Motion**

- [ ] Micro-animation specs (duration, easing)
- [ ] Score count-up animation reference
- [ ] Radar chart draw-in animation reference
- [ ] Loading state transition flow
- [ ] Page transition specs

## **17.6 Design System File**

- [ ] Color tokens (all colors documented)
- [ ] Typography scale
- [ ] Spacing scale
- [ ] Icon set (all icons used)
- [ ] Component library (reusable)
- [ ] Responsive grid documentation

---

> **Final Notes for Designer:**
>
> 1. **Images/Illustrations:** If using illustrations on the landing page, maintain a consistent style — geometric, abstract, professional. Not cartoon or playful.
>
> 2. **Dark Mode First:** The entire web UI uses a dark theme. The PDF report uses a light theme.
>
> 3. **Visual References:** Competitor/visual inspiration to look at: Vercel Dashboard, Linear App, Raycast, Stripe Dashboard.
>
> 4. **UI Language:** All labels, buttons, and UI text are in **English**. Evaluation content can be in English or Bahasa Indonesia (selected by the user).
>
> 5. **Design Tool:** Feel free to use Figma, Sketch, or Adobe XD. Ensure deliverables are accessible and inspectable by developers.
>
> 6. **Handoff:** Include spacing, color tokens, and font specs in the design file. Use auto-layout and component/instance systems in Figma when possible.

---

*PRD Design System v1.0 — PRD Evaluator — 2026-04-13*
