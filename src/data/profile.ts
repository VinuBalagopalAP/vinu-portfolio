// Single source of truth for portfolio content.
// Used by the home page (src/pages/index.astro) and /llms.txt (src/pages/llms.txt.ts).

export const site = {
  url: "https://vinu.world/",
  name: "Vinu Balagopal A P",
  title: "Vinu Balagopal A P — Founder & Product Engineer",
  jobTitle: "Founder & Product Engineer",
  description:
    "Vinu Balagopal A P is a founder and product engineer from Kerala, India, shipping 0→1 products across FinTech, EdTech, and analytics. Currently building FillWire.",
  email: "vinubalagopalap@gmail.com",
  region: "Kerala",
  country: "IN",
  image: "https://vinu.world/og-image.png",
  photo: "https://vinu.world/profile_pic.webp",
  twitter: "@vinubalagopalap",
  currentCompany: { name: "FillWire", url: "https://fillwire.com" },
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "KMCT College of Engineering, Kozhikode",
    university: "APJ Abdul Kalam Technological University"
  },
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/vinubalagopalap/" },
    { label: "Twitter", url: "https://x.com/vinubalagopalap" },
    { label: "Medium", url: "https://medium.com/@vinubalagopalap" },
    { label: "GitHub", url: "https://github.com/VinuBalagopalAP" },
    { label: "TradingView", url: "https://in.tradingview.com/u/vinubalagopalap/" }
  ]
};

export const projects = [
  {
    name: "FillWire",
    category: "Trading Platform · Execution · Current Focus",
    description: "Strategy execution and multi-account trade copier platform, combining an in-house multi-asset strategy desk, trade mirroring across connected accounts, and a pre-broker risk firewall (The Gate). Supports MT5, cTrader, BlackArrow, and JustMarkets.",
    tags: ["Execution Engine", "Trade Copier", "Risk Management", "MT5 / cTrader"],
    links: [
      { label: "Visit FillWire", url: "https://fillwire.com" }
    ]
  },
  {
    name: "Toastlytics",
    category: "FinTech · AI Trading Journal",
    description: "AI-powered trading journal and risk intelligence platform, built solo end to end: a FastAPI analytics backend with MT5 report ingestion, chart OCR, and candle pattern analysis; a Next.js trader dashboard with behavioural analytics, equity curves, the proprietary Toast Score, an AI coach, and a crypto backtest workspace on live Binance data; and an Astro marketing site with 164 articles, 78 localized SEO pages, and 6 trading calculators.",
    tags: ["FastAPI", "Next.js", "Supabase", "Astro", "Python"],
    links: [
      { label: "Explore Toastlytics", url: "https://toastlytics.com" }
    ]
  },
  {
    name: "ClaudForge",
    category: "Developer Tools · CLI & PyPI",
    description: "Terminal-native, CI/CD-style deployment manager for Claude.ai Skills. Turns skill publishing from a manual zip-and-click ritual into a terminal workflow: package, validate, upload, track, roll back, and clean up skills at scale, with self-healing browser automation, profile persistence, and rollback snapshots.",
    tags: ["Python", "Playwright", "Browser Automation", "CLI", "PyPI"],
    links: [
      { label: "Website", url: "https://claudforge.vercel.app/" },
      { label: "GitHub", url: "https://github.com/VinuBalagopalAP/claudforge" },
      { label: "PyPI", url: "https://pypi.org/project/claudforge/" }
    ]
  },
  {
    name: "Bex DR / IDR",
    category: "Trading Technology · Pine Script v6",
    description: "Professional Defining Range (DR) and Initial Defining Range (IDR) indicator in Pine Script v6 for session-based traders. Features dynamic STD expansion levels, automatic DR body break detection, candle breakout highlighting, and multi-session tracking across Regular, After-hours, and Overnight sessions.",
    tags: ["Pine Script v6", "TradingView", "Defining Range", "Session Levels"],
    links: [
      { label: "TradingView Script", url: "https://in.tradingview.com/script/E7r5U0OM-Bex-DR/" }
    ]
  },
  {
    name: "Bex KillZones & Sessions",
    category: "Market Microstructure · Pine Script v6",
    description: "Lightweight institutional session indicator built for ICT and Smart Money Concepts traders. Automatically tracks dynamic session highs & lows, real-time ranges, and institutional Kill Zones (Asia, London, New York AM/PM) with zero external dependencies.",
    tags: ["Pine Script v6", "TradingView", "Kill Zones", "ICT / SMC"],
    links: [
      { label: "TradingView Script", url: "https://in.tradingview.com/script/QyLjO7cS-Bex-KillZones-Sessions/" }
    ]
  },
  {
    name: "KOA Online & Me Chef",
    category: "Mobile Apps · Official Association Apps",
    description: "Official apps for the Kerala Olympic Association and the Federation of Kerala Hotel Association (FKHA), built on a shared feature architecture. Both stream live Facebook and YouTube feeds, with a custom Node.js backend powering targeted push notifications to all users.",
    tags: ["Flutter", "Dart", "Firebase Push Notifications", "Node.js"],
    links: []
  },
  {
    name: "Metfie",
    category: "Mobile App · Dating & Social Discovery",
    description: "Dating and social discovery app: browse people by interests, location, and age group, get mutual-match notifications through Firebase, and chat, audio call, or video call through the Agora SDK.",
    tags: ["Flutter", "Dart", "Firebase", "Agora SDK"],
    links: []
  }
];

export const metrics = [
  { num: "47,000+", label: "Students in Community" },
  { num: "250+", label: "Partner Organisations" },
  { num: "9,400", label: "Startup Ideas in 3 Months" },
  { num: "200+", label: "Community Events" }
];

export const experience = [
  {
    role: "Founder",
    org: "FillWire",
    url: "https://fillwire.com",
    meta: "",
    dates: "2026 – Present",
    summary: "Building FillWire, a strategy execution and multi-account trade copier platform: an in-house multi-asset strategy desk, trade mirroring across connected accounts, and a pre-broker risk firewall (The Gate), with support for MT5, cTrader, BlackArrow, and JustMarkets.",
    tags: ["Execution Engine", "Trade Copier", "Risk Management", "MT5 / cTrader"]
  },
  {
    role: "Founder & Research Engineer",
    org: "Toastlytics",
    url: "https://toastlytics.com",
    meta: "Full-time · Remote",
    dates: "Aug 2025 · Paused",
    summary: "Built Toastlytics solo across a FastAPI analytics backend with multi-tenant Supabase/Postgres and row-level security, a Next.js trader dashboard, an Astro SEO content engine, and an internal ops workspace with Kanban tasks, version history, RBAC, realtime notifications, and offline PWA sync. Also published the Bex DR and Bex KillZones & Sessions indicators on TradingView.",
    tags: ["FastAPI", "Next.js", "Supabase", "Astro", "Python", "Pine Script"]
  },
  {
    role: "Product Manager",
    org: "DEIENAMI",
    url: "https://deienami.com/",
    meta: "Full-time · Trivandrum, Kerala",
    dates: "Feb 2025 – Jul 2025",
    summary: "Owned product strategy across medical SaaS, physical products, and B2B software, leading client engagement and go-to-market execution. Helped an FMCG client turn a debt position into profit within 3–4 months by identifying the right retail locations and distribution channels and introducing new consumable product lines.",
    tags: ["Product Strategy", "B2B SaaS", "Go-to-Market", "Stakeholder Management"]
  },
  {
    role: "Product Engineer",
    org: "Appxiom",
    url: "https://www.appxiom.com/",
    meta: "Full-time, after an R&D internship · Bengaluru, Karnataka",
    dates: "Jul 2023 – Sep 2024",
    summary: "Benchmarked app analytics tools globally to define Appxiom's positioning, then designed a goal-based analytics approach that maps engineering data directly to business outcomes, cutting the hours CEOs, CPOs, and PMs spent configuring and interpreting dashboards. Drove roadmapping and UX design thinking, and contributed to the lightweight mobile performance monitoring SDK at Appxiom's core.",
    tags: ["Product Strategy & Roadmapping", "Mobile SDK", "Data Analytics", "Agile Scrum", "UX Design Thinking"]
  },
  {
    role: "Fellow – Technology Evangelization / Program Associate",
    org: "GTech μLearn",
    url: "https://mulearn.org/",
    meta: "Kerala",
    dates: "Jan 2022 – Jun 2023",
    summary: "Scaled the μLearn student community to 47,000+ students and 250+ partner organisations across Kerala. Led a campaign that grew the student startup pipeline from 20 ideas to 9,400 in three months, ran statewide learning and entrepreneurship programs, and conducted a UX case study for the YIP student registration portal.",
    tags: ["Community Growth", "Campaign Strategy", "Entrepreneurship Programs", "UX Research"]
  },
  {
    role: "Software Developer (Part-time Roles)",
    org: "Ycorp · KAIMLY Technologies · Centrric",
    url: "",
    meta: "Kerala",
    dates: "2021 – 2022",
    summary: "Built Flutter/Dart mobile apps for booking, milk subscription, and surfing platforms: integrating APIs, migrating codebases to null-safety, and delivering UI frontends. At Centrric, built a custom QR interface package comparable to QRCode Monkey.",
    tags: ["Flutter", "Dart", "Kotlin", "Android", "SDK Development"]
  }
];

export const skills = [
  { group: "Product", items: ["Strategy & Roadmapping", "0→1 Product Development", "User Research", "Go-to-Market", "RBAC/Auth Design", "Stakeholder Management", "UX Design Thinking"] },
  { group: "Engineering", items: ["Python", "FastAPI", "Next.js", "Astro", "Supabase", "PostgreSQL", "Flutter", "Dart", "Pine Script", "Node.js"] },
  { group: "Analytics", items: ["Trading Analytics", "Behavioral Analytics", "Data Pipelines", "OCR", "MT5 Ingestion", "Binance API", "Data Visualization"] },
  { group: "Growth", items: ["SEO Architecture", "Content Systems", "Waitlist/Referral Systems", "Programmatic SEO"] },
  { group: "Tools", items: ["Docker", "CI/CD", "TradingView", "Vercel", "Git", "Agora SDK", "Firebase"] }
];
