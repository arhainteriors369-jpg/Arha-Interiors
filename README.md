# ARHA INTERIORS 🏛️✨
> **Spaces that grow with you** — Civil & Interior Turnkey Fit-Out Projects

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Status-Proprietary-D4AF37?style=for-the-badge)](#)

---

## 📖 Overview

**ARHA INTERIORS** is the digital flagship web application for **ARHA INTERIORS**, a premier civil and interior turnkey contracting firm headquartered in **Bengaluru, Karnataka, India**. 

Directed by industry veteran **Senthil Karuppasamy. R** (16+ years of expertise delivering tier-1 enterprise fit-outs across South India), ARHA Interiors specializes in single-window, concept-to-handover execution for corporate workspaces, commercial tech hubs, bespoke residences, and institutional facilities.

This web application combines a high-end luxury dark aesthetic (Deep Emerald & Warm Gold) with interactive tools including a **real-time turnkey scope & timeline estimator**, a **dual-layer Before/After site transformation slider**, a **filterable project gallery**, and a **consultation proposal modal**.

---

## 🌟 Key Features

### 🏛️ Cinematic Ambient Hero
- Full-bleed ambient video background (`hero-bg.mp4`) with subtle gold atmospheric lighting.
- High-conversion call-to-actions linking directly to consultation bookings, portfolio exploration, and WhatsApp inquiries.

### 🏢 Enterprise Client Marquee
- Highlights executive and corporate fit-out experience for marquee clients:
  - **Google India**, **Walmart**, **L’Oréal India**, **Table Space**, **Shell**, **TATA**, **TATA Communications**, **Fidelity**, **OLA**, **Adobe**, **Dell**, **Honeywell**, **Tek Systems**, **TVS**, **Genpact**, **24/7**.

### 🛠️ Core Service Verticals & Offerings
- **Commercial Interiors**: High-density smart desking, collaborative breakout hubs, acoustic boardrooms, and command centers.
- **Residential Interiors**: Bespoke villas, penthouses, custom modular kitchens, and luxury living sanctuaries.
- **Turnkey Solutions**: Single-window contracts covering civil demolitions/partitions, integrated MEP, HVAC, fire fighting, and fast-track schedules.
- **Custom Joinery & Millwork**: Factory-crafted executive credenzas, acoustic paneling, reception desks, and ergonomic workstations.
- **Specialized Engineering**: Architectural lighting, circadian illumination, DALI dimming, testing & commissioning, and zero-snag handovers.

### 🖼️ Filterable Project Portfolio Showcase
- Categorized gallery tabs: **All**, **Corporate**, **Executive Suites**, **Breakout Zones**, and **Turnkey Delivery**.
- Features high-resolution project photography with area metrics (sq. ft.), client details, and complete scope checklists.
- Direct "Request Similar Project" trigger that pre-populates consultation forms.

### 🎛️ Interactive Before & After Transformation Slider
- Interactive touch- and drag-enabled split-screen slider comparing raw bare-shell civil structures with completed corporate handovers.

### 📐 Interactive Turnkey Scope & Timeline Estimator
- Dynamic square-footage slider (`1,000` to `50,000+` sq. ft.).
- Space type selection (Commercial, Residential, Turnkey, Custom Furniture).
- Multi-select scope selector (Civil, MEP/HVAC, Modular Furniture, Lighting, Acoustic Paneling, Structured Cabling).
- Real-time milestone timeline projection and immediate transfer to the consultation modal.

### 📋 5-Stage Turnkey Process Methodology
1. **01. DISCOVER**: Site audit, MEP feasibility, space zoning & headcount modeling.
2. **02. DESIGN**: Photorealistic 3D visualization, tactile material boards & statutory compliance.
3. **03. PLAN**: Itemized BOQ, GFC engineering drawings, HSE safety protocols.
4. **04. BUILD**: Direct in-house labor execution, MEP rough-ins, millwork assembly & daily reporting.
5. **05. HANDOVER**: Stringent QA/QC snag clearance, MEP load testing, as-built drawings & warranty transfer.

### 🛡️ Quality Assurance & HSE Safety Governance
- Built-in compliance standards: **HSE-01** (Safety Plan), **QA-02** (Quality Plan), **METH-03** (Methodology), **DOC-04** (Documentation), **QC-05** (Zero-Tolerance Quality Approach), and **LABOUR-06** (Direct In-House Labour Teams).

### 📑 Leadership & Statutory Credentials
- Detailed leadership bio for **Senthil Karuppasamy. R** (Principal Director, ex-Ocean Life Spaces India Pvt Ltd).
- 8-wing coordination hierarchy: Project Management, Purchase & Stores, Site Execution, Architecture & 3D, QS/QC Auditing, etc.
- Interactive copy-to-clipboard badges for statutory registrations:
  - **GSTIN**: `29ESKPS8538H1ZT`
  - **UDYAM**: `UDYAM-KR-03-0745530`

### 💬 Instant Consultation & RFP Modal
- Comprehensive inquiry form with pre-filled scope and area details.
- Confetti celebration animation upon submission powered by `canvas-confetti`.
- Direct telephone and WhatsApp connectivity.

---

## 💻 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Animations & Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Typography** | [Google Fonts](https://fonts.google.com/) (`Cinzel` for luxury serif headings, `Plus Jakarta Sans` for body copy) |

---

## 📁 Project Structure

```
arha-interiors/
├── public/
│   ├── images/
│   │   ├── arha_logo_monogram.png    # Brand monogram logo
│   │   └── projects/                  # Real corporate project photography
│   └── videos/
│       └── hero-bg.mp4                # Ambient cinematic hero video
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css                # Tailwind v4 theme variables, gradients & dark mode
│   │   ├── layout.tsx                 # Root layout, Google Fonts integration & SEO metadata
│   │   └── page.tsx                   # Main SPA container & state orchestration
│   ├── components/
│   │   ├── ArhaLogo.tsx               # Monogram & typography brand emblem
│   │   ├── BeforeAfterSlider.tsx      # Dual-layer interactive transformation slider
│   │   ├── ClientMarquee.tsx          # Enterprise client marquee banner
│   │   ├── ConsultationModal.tsx      # Multi-step proposal form modal with confetti
│   │   ├── ContactSection.tsx         # Direct contact channels, maps & WhatsApp link
│   │   ├── CostEstimator.tsx          # Real-time turnkey scope & timeline calculator
│   │   ├── Footer.tsx                 # Luxury footer with quick links & company info
│   │   ├── HeroSection.tsx            # Cinematic hero with video background & CTAs
│   │   ├── LeadershipSection.tsx      # Leadership spotlight & statutory registry cards
│   │   ├── Navbar.tsx                 # Fixed glassmorphic navigation bar with mobile sheet
│   │   ├── ProcessMethodology.tsx     # 5-stage turnkey workflow cards
│   │   ├── ProjectPortfolio.tsx       # Filterable portfolio gallery with modal triggers
│   │   ├── QualitySafetySection.tsx   # HSE safety protocols & QA/QC standards
│   │   └── ServicesSection.tsx        # Comprehensive services breakdown & deliverables
│   └── data/
│       └── companyData.ts             # Central single-source-of-truth for company & project data
├── next.config.ts                     # Next.js configuration
├── package.json                       # Scripts and project dependencies
├── postcss.config.mjs                 # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.18+ (Node.js 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone & Navigate

```bash
git clone https://github.com/KishanthDev/Arha-Interiors.git
cd "Arha Interiors"
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and builds production-optimized bundle |
| `npm run start` | Runs the production build server |
| `npm run lint` | Runs ESLint analysis across TypeScript and React code |

---

## 🎨 Design System & Palette

The design reflects institutional reliability and bespoke luxury tailored for corporate decision-makers and architectural clients:

- **Deep Emerald Base**: `#08120D` & `#07110C`
- **Forest Green Panels**: `#12261C` & `#14291F`
- **Warm Champagne Gold**: `#D4AF37`, `#E5C365`, & `#F7E7B4`
- **Off-White / Sand Text**: `#F4EFEA` & `#FBF8F1`
- **Typography**: 
  - **Headings**: `Cinzel` (Classical Roman proportions)
  - **Body / Interface**: `Plus Jakarta Sans` (Clean, contemporary geometry)

---

## 📞 Contact & Business Inquiries

**ARHA INTERIORS**  
- **Director**: Senthil Karuppasamy. R
- **Phone**: [+91 84318 93658](tel:+918431893658)
- **Email**: [info@arhainteriors.co.in](mailto:info@arhainteriors.co.in)
- **Location**: Bengaluru, Karnataka, India
- **GSTIN**: `29ESKPS8538H1ZT`
- **MSME Udyam**: `UDYAM-KR-03-0745530`

---

*© 2026 ARHA INTERIORS. All Rights Reserved. Spaces that grow with you.*