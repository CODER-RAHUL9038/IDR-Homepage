<div align="center">

<br/>

<!-- LOGO -->
<img src="idr-logo-icon.svg" alt="IDR Logo" width="80" height="80" />

<br/>
<br/>

# Institute of Digital Risk

### Advancing the Future of Digital Risk

**An industry-led training and deployment institute for digital, cyber and AI risk practitioners**

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com)

<br/>

![License](https://img.shields.io/badge/license-MIT-FF6B1A?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-FF6B1A?style=flat-square)
![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-yes-FF6B1A?style=flat-square)

<br/>

---

</div>

<br/>

##  🚀  Demo



- [Live Demo](https://institute-of-digital-risks.netlify.app/)

<br/>

---

<br/>

## 📋 Table of Contents

- [Overview](#-overview)
- [Preview](#-preview)
- [Brand & Logo](#-brand--logo)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Form Integration](#-form-integration)
- [Design Tokens](#-design-tokens)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Animations](#-animations)
- [Roadmap](#-roadmap)
- [License](#-license)

<br/>

---

<br/>

## 🌐 Overview

The **Institute of Digital Risk (IDR)** homepage is a fully responsive, vanilla HTML/CSS/JS marketing website built for an industry-led training and deployment institute specialising in digital, cyber and AI risk.

IDR bridges the gap between **academic rigour** and **real-world practice** — training the next generation of risk practitioners for deployment in regulated, high-consequence environments including financial services, critical infrastructure and emerging technology sectors.

> Built with zero dependencies. No frameworks. No build tools. Just clean, production-ready code.

<br/>

---

<br/>

## 🖼️ Preview

<br/>

<div align="center">

### 🖥️ Desktop View

```
┌─────────────────────────────────────────────────────────┐
│  IDR ─────────────  About  Services  Community  [CTA]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Advancing the              ┌──────────────┐          │
│   Future of          ◆       │   ◆          │          │
│   Digital Risk.      │       │  ╔══════╗    │          │
│                      │       │  ║      ║    │          │
│   [ Explore Programs ]       │  ╚══════╝    │          │
│   [ Hire Talent      ]       └──────────────┘          │
│                                                         │
│   3 ──── UK ──── AI+                                    │
└─────────────────────────────────────────────────────────┘
```

### 📱 Mobile View

```
┌──────────────────────┐
│  IDR              ☰  │
├──────────────────────┤
│                      │
│  Advancing the       │
│  Future of           │
│  Digital Risk.       │
│                      │
│  [ Explore Programs ]│
│  [ Hire Talent      ]│
│                      │
│  3  │  UK  │  AI+    │
└──────────────────────┘
```

</div>

<br/>

---

<br/>

## 🎨 Brand & Logo

The IDR brand is built around an **isometric cube** — a geometric form that communicates structure, layered complexity, and resilience. These are the core ideas behind risk management: understanding what you can see, and preparing for what you can't.

<br/>

<div align="center">

| Variant | Usage | File |
|---|---|---|
| **Icon Only** | Favicon, app icon, avatar | `idr-logo-icon.svg` |
| **Full Lockup** | Header, documents, presentations | `idr-logo-full.svg` |

</div>

<br/>

### Colour Palette

<br/>

<div align="center">

| Swatch | Name | Hex | Usage |
|:---:|---|---|---|
| 🟠 | **IDR Orange** | `#FF6B1A` | Primary brand, CTAs, accents |
| 🔴 | **Deep Orange** | `#E64A00` | Hover states, gradients |
| ⚫ | **Pitch Black** | `#0D0D0D` | Backgrounds |
| 🔲 | **Charcoal** | `#1C1C1C` | Section alternates |
| ⬜ | **White** | `#FFFFFF` | Text, icons |

</div>

<br/>

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | DM Serif Display | 400 (italic) |
| Body / UI | DM Sans | 300 · 400 · 500 · 700 |

<br/>

### Design Rationale

- **Cube icon** — The isometric form suggests structure and the multi-dimensional nature of risk. The orange top face represents the active, visible risk layer; the dark faces represent depth and the unseen.
- **Orange on black** — High contrast, urgent but controlled. Appropriate for a high-consequence field.
- **Thin orange rule** — The divider separating `IDR` from the full name acts as a visual anchor and reinforces precision.

<br/>

---

<br/>

## ✨ Features

<br/>

```
✅  Fully responsive — mobile, tablet and desktop
✅  Zero CSS frameworks — pure vanilla HTML / CSS / JS
✅  Sticky navigation with smooth scroll
✅  Hamburger menu with animated X transform + staggered slide-in
✅  Scroll-triggered fade-up animations (IntersectionObserver)
✅  Floating animated isometric cube (CSS keyframes)
✅  Service cards with hover reveal effect
✅  4-step pipeline visualization
✅  Contact / register interest form with toast notification
✅  Body scroll lock when mobile menu is open
✅  Custom orange scrollbar
✅  Semantic HTML5 structure
✅  Accessible — aria-labels, role attributes, focus states
✅  Google Fonts — DM Sans + DM Serif Display
✅  SVG logos (icon-only and full lockup)
✅  No build tools, no dependencies
```

<br/>

---

<br/>

## 📁 Project Structure

```
idr/
│
├── index.html          ← Main HTML (semantic, zero inline styles)
├── style.css           ← All styles + animations + responsive
├── main.js             ← Interactions, scroll observer, form handler
│
├── idr-logo-icon.svg   ← Cube mark (favicon / app icon variant)
└── idr-logo-full.svg   ← Full logo lockup (IDR + wordmark)
```

<br/>

---

<br/>

## 📄 Sections

The page is built across **5 core sections**, each mapped to a semantic landmark:

<br/>

### 1 · Hero

```
Headline     →  "Advancing the Future of Digital Risk."
Subheading   →  Mission statement + bridging copy
CTA buttons  →  "Explore Programs" / "Hire Talent"
Stats bar    →  3 core pillars · UK university partner · AI+ specialisms
Visual       →  Animated floating isometric cube (desktop only)
```

### 2 · About IDR

```
Layout       →  Sticky left column + scrolling right body copy
Content      →  2–3 paragraphs on IDR's mission and university partnership
Badges       →  Digital Risk · Cyber Risk · AI Governance · NIST · ISO 27001 · NIS2
```

### 3 · Service Pillars / Model

```
Cards (×3)   →  Academy | Innovation & Incubation | Advisory Services
Pipeline     →  Train → Hire → Innovate → Deploy  (visual step tracker)
```

### 4 · Community / Who We Serve

```
Audience     →  Students · Early-Career · Practitioners · Organisations
Sectors      →  Financial Services · Critical Infrastructure · Healthcare · Energy · ...
```

### 5 · Contact / Register Interest

```
Form fields  →  First Name · Last Name · Email · Interest (select) · Message
On submit    →  Simulated async → toast notification
Contact info →  Email + location
```

<br/>

---

<br/>

## 🛠️ Tech Stack

<br/>

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Semantic elements: `header`, `nav`, `main`, `section`, `footer` |
| Styling | CSS3 | Custom properties, Grid, Flexbox, `clamp()`, keyframes |
| Scripting | Vanilla JS (ES6+) | IntersectionObserver, classList, fetch-ready form handler |
| Fonts | Google Fonts | DM Sans + DM Serif Display |
| Icons / Logo | Inline SVG | No icon library required |
| Build | None | Open `index.html` directly in any browser |

<br/>

---

<br/>

## 🚀 Getting Started

<br/>

### Option 1 — Open directly

```bash
# No install needed. Just open in your browser.
open index.html
```

<br/>

### Option 2 — Local dev server

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit → `http://localhost:3000`

<br/>

### Option 3 — Deploy

The site is entirely static — drop the four files anywhere:

```
Netlify   →  Drag & drop the folder at netlify.com/drop
Vercel    →  vercel deploy
GitHub Pages → push to /docs or root of a gh-pages branch
Any host  →  Upload index.html, style.css, main.js, SVGs
```

<br/>

---

<br/>

## 📬 Form Integration

The contact form is frontend-only by default. To wire it up to a real backend, replace the `setTimeout` block in `main.js` with one of the following:

<br/>

### Formspree (recommended — no backend needed)

```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
});
```

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → copy your endpoint URL
3. Replace `YOUR_FORM_ID` above

<br/>

### Netlify Forms

```html
<!-- Add these two attributes to the <form> tag in index.html -->
<form name="contact" netlify ...>
```

Then deploy to Netlify — submissions land in your Netlify dashboard automatically.

<br/>

### Custom API endpoint

```js
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: form.firstName.value,
    lastName:  form.lastName.value,
    email:     form.email.value,
    interest:  form.interest.value,
    message:   form.message.value
  })
});
```

<br/>

---

<br/>

## 🎨 Design Tokens

All colours and values are defined as CSS custom properties in `:root`. Override them to retheme the site instantly:

```css
:root {
  --orange:       #FF6B1A;   /* primary brand */
  --orange-deep:  #E64A00;   /* hover / gradient end */
  --orange-light: #FF8C42;   /* subtle accents */

  --black:        #0D0D0D;   /* page background */
  --charcoal:     #1C1C1C;   /* alternate section bg */
  --card-bg:      #181818;   /* card backgrounds */

  --muted:        #888888;   /* secondary text */
  --border:       #2A2A2A;   /* dividers, card borders */

  --white:        #FFFFFF;   /* primary text */
}
```

<br/>

---

<br/>

## 📐 Responsive Breakpoints

```
≥ 1025px   Desktop   →  Two-column hero, sticky about sidebar, 3-col cards
≤ 1024px   Tablet    →  Single-column hero (cube hidden), 2-col cards
≤  768px   Mobile    →  Hamburger nav, stacked cards, centred footer
```

<br/>

---

<br/>

## 🎬 Animations

<br/>

| Animation | Trigger | Duration | Easing |
|---|---|---|---|
| Fade-up sections | Scroll (IntersectionObserver) | 0.65s | `ease` |
| Staggered nav items | Hamburger click | 0.3s + delay | `ease` |
| Hamburger → X morph | Click | 0.35s | `cubic-bezier(0.23,1,0.32,1)` |
| Nav slide-down | Click | 0.4s | `cubic-bezier(0.23,1,0.32,1)` |
| Floating cube | Always (loop) | 6s | `ease-in-out` |
| Card top-bar reveal | Hover | 0.3s | `ease` |
| Button lift | Hover | 0.15s | `ease` |
| Toast notification | Form submit | 0.35s | `cubic-bezier(0.34,1.56,0.64,1)` |

<br/>

---

<br/>

## 🗺️ Roadmap

```
☐  Wire up Formspree / real form backend
☐  Add a dedicated Programmes / Academy page
☐  Add a Team / Partners page
☐  Dark / light mode toggle
☐  Add page transition animations
☐  CMS integration (Contentful / Sanity)
☐  Cookie consent banner
☐  Analytics integration (Plausible / GA4)
```

<br/>

---

<br/>

## 📄 License

```
MIT License — © 2025 Institute of Digital Risk

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files, to deal in
the Software without restriction.
```

<br/>

---

<br/>

<div align="center">

**Built for the risk-ready.**

<br/>

[![IDR](https://img.shields.io/badge/IDR-Institute_of_Digital_Risk-FF6B1A?style=for-the-badge)](mailto:hello@idr.institute)

<br/>

*hello@idr.institute · United Kingdom*

</div>
