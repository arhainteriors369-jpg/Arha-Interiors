export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "corporate" | "executive" | "breakout" | "turnkey";
  location: string;
  year?: string;
  area?: string;
  image: string;
  description: string;
  scope: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

export interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
}

export interface CoreVertical {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  badge: string;
  icon: "home" | "building" | "turnkey" | "furniture";
}

export const COMPANY_INFO = {
  name: "ARHA INTERIORS",
  legalName: "Arha Interiors",
  tagline: "Spaces that grow with you",
  subtitle: "Civil & Interior Turnkey Fit out Projects",
  coreStatement: "End-to-end design, fit-out and execution for corporate, commercial and institutional spaces.",
  handoverQuote: "A single-point experience from concept through handover.",
  thankYouQuote: "Thank you for your time, trust and the opportunity to be a part of your vision. Together, let's create spaces that grow with you.",
  phone: "+91 84318 93658",
  phoneRaw: "+918431893658",
  email: "arhainteriors369@gmail.com",
  location: "Bengaluru, Karnataka, India",
  proprietor: {
    name: "Senthil Karuppasamy. R",
    role: "Proprietor & Principal Director",
    experienceYears: 16,
    previousFirm: "Ocean Life Spaces India Private Limited",
    bio: "With over 16 years of hands-on expertise in leading high-impact corporate, commercial and institutional turnkey fit-outs, Senthil Karuppasamy brings corporate-level project governance, rigorous engineering standards, and single-window accountability to ARHA Interiors."
  },
  registrations: {
    gstin: "29ESKPS8538H1ZT",
    constitution: "Proprietorship",
    registrationType: "Regular",
    issueDate: "13/08/2026",
    udyam: "UDYAM-KR-03-0745530",
    enterpriseType: "Micro • 2026–27",
    majorActivity: "Manufacturing & Interior Fit-outs",
    udyamDate: "20/08/2026",
    city: "Bengaluru, Karnataka"
  },
  pillars: [
    { title: "People Centric", description: "Crafting ergonomic, human-focused spaces that elevate collaboration, wellness, and daily productivity." },
    { title: "Innovative Designs", description: "Bespoke spatial design combining cutting-edge 3D visualization, biophilic accents, and acoustic harmony." },
    { title: "Sustainable Spaces", description: "Energy-efficient lighting, eco-friendly materials, and waste-minimized MEP execution." },
    { title: "Quality Execution", description: "Corporate-governed quality benchmarks, flawless joinery detailing, and zero-defect handovers." },
  ]
};

export const CORE_SERVICE_VERTICALS: CoreVertical[] = [
  {
    id: "residential",
    title: "RESIDENTIAL INTERIORS",
    subtitle: "Villas, Penthouses & Private Residences",
    shortDesc: "Bespoke spatial design, custom modular kitchens, luxury living rooms, and private sanctuary fit-outs.",
    badge: "Bespoke Luxury",
    icon: "home"
  },
  {
    id: "commercial",
    title: "COMMERCIAL INTERIORS",
    subtitle: "Corporate Workspaces & Tech Hubs",
    shortDesc: "High-performance offices, collaborative breakout zones, agile team suites, and branded corporate facilities.",
    badge: "Enterprise Grade",
    icon: "building"
  },
  {
    id: "turnkey",
    title: "TURNKEY SOLUTIONS",
    subtitle: "Single-Window Concept to Handover",
    shortDesc: "Single-point civil modifications, integrated MEP, HVAC, fire safety, and schedule-linked governance.",
    badge: "End-to-End Delivery",
    icon: "turnkey"
  },
  {
    id: "furniture",
    title: "FURNITURE & FIT-OUT WORKS",
    subtitle: "Custom Joinery & Architectural Millwork",
    shortDesc: "Precision factory-crafted reception desks, acoustic paneling, ergonomic workstations, and bespoke cabinetry.",
    badge: "Master Craftsmanship",
    icon: "furniture"
  }
];

export const ENTERPRISE_CLIENTS = [
  { name: "Google India", industry: "Technology", highlight: "Collaborative campus zones & open lounge environments" },
  { name: "Walmart", industry: "Retail & Tech", highlight: "Bengaluru Technology Center & breakout hubs" },
  { name: "L’Oréal India", industry: "Global Consumer", highlight: "Luxury corporate reception & executive meeting suites" },
  { name: "Table Space", industry: "Enterprise Managed Offices", highlight: "Dynamic agile co-working & interactive recreation facilities" },
  { name: "Shell", industry: "Energy & Infrastructure", highlight: "Specialized corporate workstations & technical facilities" },
  { name: "TATA", industry: "Conglomerate", highlight: "High-density smart workstations & boardroom facilities" },
  { name: "TATA Communications", industry: "Telecom & Cloud", highlight: "Executive command centers & meeting suites" },
  { name: "Fidelity", industry: "Financial Services", highlight: "Acoustic boardroom & custom illuminated conference suites" },
  { name: "OLA", industry: "Mobility & Tech", highlight: "Spacious multi-tier campus fit-outs" },
  { name: "Adobe", industry: "Creative Software", highlight: "Modern creative studio environments" },
  { name: "Dell", industry: "Computing & IT", highlight: "Corporate infrastructure & workstation wings" },
  { name: "Honeywell", industry: "Industrial & Tech", highlight: "Integrated MEP & tech-enabled conference rooms" },
  { name: "Tek Systems", industry: "IT Services", highlight: "Agile developer pods & training auditoriums" },
  { name: "TVS", industry: "Automotive", highlight: "Corporate offices & design review facilities" },
  { name: "Genpact", industry: "Professional Services", highlight: "Operations centers & collaboration lounges" },
  { name: "24/7", industry: "Customer Tech", highlight: "Round-the-clock enterprise workspace fit-outs" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Interior Design & Space Planning",
    shortDesc: "Concept development, spatial planning and photorealistic 3D visualization.",
    fullDesc: "We transform spatial footprints into ergonomic, future-proof workspaces through thorough zoning, biophilic design, circulation modeling, and immersive 3D renderings that allow clients to experience every detail before construction.",
    deliverables: [
      "Concept Moodboards & Material Palettes",
      "2D Furniture Layouts & Circulation Flow",
      "Photorealistic 3D Visualizations & Walkthroughs",
      "Statutory Code & Accessibility Compliance"
    ]
  },
  {
    id: "02",
    number: "02",
    title: "Turnkey Fit-Out Execution",
    shortDesc: "Single-point coordination from site start to final handover.",
    fullDesc: "Eliminate multi-contractor friction with our comprehensive turnkey management. We take end-to-end responsibility for procurement, civil execution, site logistics, safety, and strict schedule adherence.",
    deliverables: [
      "Single-Window Turnkey Contract",
      "Dedicated Site Management & Daily Reporting",
      "Material Quality Verification & Storage",
      "Milestone-Linked Delivery Governance"
    ]
  },
  {
    id: "03",
    number: "03",
    title: "Civil & MEP Works",
    shortDesc: "Integrated civil, electrical, plumbing, and HVAC engineering.",
    fullDesc: "Flawless technical execution covering masonry, drywalls, structural alterations, electrical distribution boards, precision HVAC ducting, advanced plumbing, fire protection systems, and data infrastructure.",
    deliverables: [
      "HVAC Ducting & Air Quality Balancing",
      "Electrical Load Calculations & LT Panels",
      "Fire Alarm, Sprinkler & Smoke Detection",
      "Structured Cabling, Access Control & CCTV"
    ]
  },
  {
    id: "04",
    number: "04",
    title: "Furniture & Custom Joinery",
    shortDesc: "Modular workstations, millwork and bespoke detailing.",
    fullDesc: "In-house craftsmanship combined with precision factory manufacturing. We build custom executive credenzas, reception consoles, acoustic wall paneling, cafeteria booths, and modular desk systems tailored to brand aesthetics.",
    deliverables: [
      "Custom Reception Feature Desks",
      "Acoustic Wall & Ceiling Paneling",
      "Ergonomic Height-Adjustable Workstations",
      "Bespoke Storage & Architectural Millwork"
    ]
  },
  {
    id: "05",
    number: "05",
    title: "Lighting Design & Installation",
    shortDesc: "Functional, architectural, and aesthetic lighting solutions.",
    fullDesc: "Human-centric lighting engineering that balances visual comfort with architectural drama. From geometric custom ring pendants to glare-free workstation lighting and smart DALI/dimming automation.",
    deliverables: [
      "Circadian Workstation Illumination",
      "Architectural Statement Chandeliers & Pendants",
      "Cove, Accent & Wall-Grazing Fixtures",
      "Smart Dimming & Energy-Saving Sensors"
    ]
  },
  {
    id: "06",
    number: "06",
    title: "Project Management & Handover",
    shortDesc: "Program, quality, coordination and zero-snag close-out.",
    fullDesc: "Corporate-level governance backed by 16 years of tier-1 fit-out experience. We ensure strict adherence to timelines and budgets, transparent snag-list resolution, and complete testing & commissioning documentation.",
    deliverables: [
      "Primavera / MS Project Fast-Track Scheduling",
      "Multi-Tier QA/QC Checklists",
      "Testing & Commissioning of MEP Services",
      "As-Built Drawings & Handover Dossier"
    ]
  }
];

export const METHODOLOGY_STEPS: StepItem[] = [
  {
    number: "01",
    title: "DISCOVER",
    tagline: "Site Intelligence & Vision Alignment",
    description: "We initiate with in-depth stakeholder sessions to map out workspace culture, headcounts, brand ethos, and technical site inspections.",
    activities: [
      "As-built structural audit & MEP feasibility",
      "Departmental workflow & headcount modeling",
      "Budget expectations & statutory parameters",
      "Comprehensive design brief development"
    ]
  },
  {
    number: "02",
    title: "DESIGN",
    tagline: "Conceptualization & 3D Visualization",
    description: "Our design team translates functional needs into inspiring spatial experiences with photorealistic renders and tactile material boards.",
    activities: [
      "Zoning, circulation & acoustic planning",
      "3D photorealistic renderings & walkthroughs",
      "Material, finish & fabric sampling boards",
      "Value engineering & sustainable selection"
    ]
  },
  {
    number: "03",
    title: "PLAN",
    tagline: "Engineering, BOQ & Procurement",
    description: "Every millimeter is detailed into structural and MEP drawings, clear cost schedules, and rigorous milestone timelines.",
    activities: [
      "Detailed architectural & GFC drawing sets",
      "Comprehensive itemized BOQ & material procurement",
      "HVAC, electrical, fire & plumbing coordination",
      "Site safety plan (HSE) & contractor onboarding"
    ]
  },
  {
    number: "04",
    title: "BUILD",
    tagline: "Precision Execution & Quality Control",
    description: "Our skilled in-house trades and site engineers mobilize with strict adherence to timelines, safety, and craftsmanship.",
    activities: [
      "Civil modifications & acoustic drywall erection",
      "MEP first & second fix installations",
      "Factory-made joinery & bespoke millwork assembly",
      "Daily site reports & weekly client progress reviews"
    ]
  },
  {
    number: "05",
    title: "HANDOVER",
    tagline: "Testing, Commissioning & Close-out",
    description: "A flawless, zero-snag delivery backed by complete regulatory certifications, warranties, and post-occupancy care.",
    activities: [
      "Stringent QA/QC snag list identification & clearing",
      "MEP testing, air balancing & electrical certification",
      "Deep cleaning & move-in readiness",
      "As-built documentation & operation manuals handover"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Corporate-Level Project Management",
    desc: "Rigorous planning, MS Project tracking, and institutional-grade governance from day one."
  },
  {
    title: "Skilled In-House Design & Execution",
    desc: "Seamless bridge between visionary architectural concepts and on-site craftsmen."
  },
  {
    title: "Strict Adherence to Timelines & Budgets",
    desc: "Fast-track capability with zero budget escalations, guaranteed by contract."
  },
  {
    title: "Transparent Communication",
    desc: "Weekly progress dashboards, real-time photographic updates, and single-window POC."
  },
  {
    title: "Bespoke Design Solutions",
    desc: "Tailored to your corporate identity, acoustic needs, and collaborative dynamics."
  },
  {
    title: "High-Quality Finishing & Detailing",
    desc: "Micro-tolerance joinery, flawless paint finishes, and premium architectural hardware."
  },
  {
    title: "Experienced In-House Labour Teams",
    desc: "Dedicated, vetted craftsmen ensuring consistent site safety and reliable craftsmanship."
  },
  {
    title: "HSE-Focused Project Delivery",
    desc: "Zero-compromise on site safety, PPE compliance, and environmentally safe disposal."
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Walmart Technology Campus",
    client: "Walmart",
    category: "corporate",
    location: "Bengaluru, Karnataka",
    year: "Fast-track Turnkey",
    area: "35,000+ sq. ft.",
    image: "/images/projects/project_img_10.jpg",
    description: "Modern collaboration hub, open breakout lounges, and high-productivity tech spaces built with ergonomic timber finishes and integrated acoustic treatments.",
    scope: ["Turnkey Fit-Out", "MEP & HVAC", "Modular Workstations", "Breakout Lounges"]
  },
  {
    id: "proj-2",
    title: "L’Oréal Corporate Headquarters",
    client: "L’Oréal India",
    category: "executive",
    location: "Bengaluru, Karnataka",
    year: "Turnkey Interior",
    area: "18,500 sq. ft.",
    image: "/images/projects/project_img_13.jpg",
    description: "Sleek, world-class reception statement with warm timber framework, recessed illumination, and luxury executive meeting suites reflecting global brand aesthetics.",
    scope: ["Custom Brand Reception", "Acoustic Conference Rooms", "Bespoke Millwork", "Architectural Lighting"]
  },
  {
    id: "proj-3",
    title: "Table Space Enterprise Hub",
    client: "Table Space",
    category: "breakout",
    location: "Bengaluru, Karnataka",
    year: "Turnkey Fit-Out",
    area: "42,000 sq. ft.",
    image: "/images/projects/project_img_14.jpg",
    description: "Dynamic recreation zones featuring biophilic green accent walls, geometric flooring, recreation foosball/ping-pong arenas, and custom banquet seating.",
    scope: ["Recreation Zones", "Biophilic Planters", "Custom Joinery", "Specialty Flooring"]
  },
  {
    id: "proj-4",
    title: "Google India Collaboration Centre",
    client: "Google India",
    category: "corporate",
    location: "Bengaluru, Karnataka",
    year: "Agile Workspace",
    area: "28,000 sq. ft.",
    image: "/images/projects/project_img_18.jpg",
    description: "Warm, open-plan agile zones with contemporary curved modular seating, suspended acoustic rafts, and glare-free circular pendant lighting.",
    scope: ["Agile Pods", "Acoustic Baffles", "Custom Upholstered Seating", "MEP Infrastructure"]
  },
  {
    id: "proj-5",
    title: "Fidelity Strategic Boardroom",
    client: "Fidelity",
    category: "executive",
    location: "Bengaluru, Karnataka",
    year: "Executive Fit-Out",
    area: "12,000 sq. ft.",
    image: "/images/projects/project_img_17.jpg",
    description: "High-spec boardroom outfitted with a showpiece geometric floating LED pendant, acoustic fluted paneling, and cutting-edge AV conferencing integration.",
    scope: ["Executive Boardroom", "Custom Ring Chandelier", "Fluted Wall Cladding", "Audio-Visual Cabling"]
  },
  {
    id: "proj-6",
    title: "TATA Enterprise Delivery Centre",
    client: "TATA",
    category: "corporate",
    location: "Bengaluru, Karnataka",
    year: "Enterprise Turnkey",
    area: "50,000+ sq. ft.",
    image: "/images/projects/project_img_15.jpg",
    description: "High-density smart workstation floor plate with optimal circulation paths, centralized cable raceways, energy-efficient panel lighting, and private focus pods.",
    scope: ["Civil Demolition & Partitions", "High-Density Desking", "Power & Data Distribution", "Air Balancing"]
  },
  {
    id: "proj-7",
    title: "OLA Mobility Campus Experience Hub",
    client: "OLA",
    category: "turnkey",
    location: "Bengaluru, Karnataka",
    year: "Turnkey Fit-Out",
    area: "30,000 sq. ft.",
    image: "/images/projects/project_img_16.jpg",
    description: "Spacious atrium and multi-functional collaboration hall designed for rapid team assemblies, townhalls, and seamless tech-forward interactions.",
    scope: ["Atrium Architecture", "Industrial Ceiling Finish", "Lighting Automation", "Safety & Fire Protection"]
  },
  {
    id: "proj-10",
    title: "Walmart Agile Café & Workspace",
    client: "Walmart",
    category: "breakout",
    location: "Bengaluru, Karnataka",
    year: "Turnkey Fit-Out",
    area: "15,000 sq. ft.",
    image: "/images/projects/project_img_5.jpg",
    description: "Vibrant high-top communal tables, acoustic booth seating, and modern pendant array designed for casual brainstorming and collaborative dining.",
    scope: ["Cafeteria Fit-out", "Bespoke High Tables", "Acoustic Wall Paneling", "Plumbing & Drainage"]
  },
  {
    id: "proj-11",
    title: "Corporate Conference Suite",
    client: "TATA Communications",
    category: "executive",
    location: "Bengaluru, Karnataka",
    year: "Turnkey MEP & AV",
    area: "8,500 sq. ft.",
    image: "/images/projects/project_img_12.jpg",
    description: "Minimalist glass-partitioned conference room with seamless acoustic demising walls, recessed perimeter illumination, and motorized privacy blinds.",
    scope: ["Acoustic Double Glazing", "Concealed AV Integration", "Motorized Blinds", "Ductable AC"]
  },
  {
    id: "proj-12",
    title: "High-Performance Workstation Floor",
    client: "Genpact / Tek Systems",
    category: "corporate",
    location: "Bengaluru, Karnataka",
    year: "Enterprise Turnkey",
    area: "40,000 sq. ft.",
    image: "/images/projects/project_img_2.jpg",
    description: "Clean modular workstation layout with acoustic fabric pin-boards, integrated raceways, and ergonomic task lighting designed for continuous operation.",
    scope: ["Modular Desking", "Electrical & Data Cabling", "Under-desk Raceways", "Floor Carpeting"]
  }
];

export const QUALITY_SAFETY_POINTS = [
  {
    title: "Safety Plan",
    code: "HSE-01",
    desc: "Strict adherence to international health and safety standards. Mandatory PPE, hot-work permits, and regular site safety toolbox drills."
  },
  {
    title: "Quality Plan",
    code: "QA-02",
    desc: "Custom Quality Assurance Plan developed specifically for each project's scope, structural demands, and material specifications."
  },
  {
    title: "Work Methodology",
    code: "METH-03",
    desc: "Transparent step-by-step engineering capturing every civil, MEP, joinery, and finishing phase with detailed inspection checklists."
  },
  {
    title: "Structured Documentation",
    code: "DOC-04",
    desc: "Weekly progress reports, material mill test certificates, change-order tracking, and complete audit documentation."
  },
  {
    title: "Quality Approach",
    code: "QC-05",
    desc: "Impeccable zero-tolerance standards for alignment, plumb, acoustic integrity, paint finish, and joinery durability."
  },
  {
    title: "In-House Labour Teams",
    code: "LABOUR-06",
    desc: "Directly employed, highly skilled carpenters, electricians, plumbers, and polishers ensuring unparalleled control over craftsmanship."
  }
];
