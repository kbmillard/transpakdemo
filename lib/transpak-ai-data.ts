export type Feature = {
  name: string;
  department: string;
  whatItDoes: string;
  businessValue: string;
  firstVersion: string;
};

export type OpportunityTab = {
  id: string;
  label: string;
  features: Feature[];
};

/** After department tabs — workflows that can mature into web/mobile apps. */
export const appReadyWorkflowsSection = {
  eyebrow: "App-ready workflows",
  title: "Anything useful can become an app.",
  paragraphs: [
    "The AI layer does not have to stay as a dashboard or a document. When a workflow proves useful, it can become a custom internal app for the people who need it most — office teams, sales reps, estimators, shop managers, warehouse teams, drivers, customer service, finance, compliance, or leadership.",
    "Some tools may start as simple web dashboards. Others may become mobile-first field tools, QR scan workflows, iOS or Android apps, customer portals, shop-floor checklists, routing boards, photo review tools, maintenance logs, document hubs, or executive command views.",
    "The point is not to build an app for the sake of having an app. The point is to turn the workflows that actually save time into tools people can open, use, and trust every day.",
  ],
  closingLine:
    "Every card on this page can start as a small workflow and grow into a dedicated app if the value is proven.",
  cards: [
    {
      title: "Internal Web Apps",
      body: "Dashboards, intake forms, command centers, review queues, quote tools, document hubs, and leadership views that work from a browser.",
    },
    {
      title: "iOS and Android Field Apps",
      body: "Mobile tools for photos, QR scans, maintenance logs, safety reports, shipment checks, shop updates, location tracking, and field approvals.",
    },
    {
      title: "Customer and Vendor Portals",
      body: "Read-only status views, document vaults, quote updates, job progress, certificates, BOLs, invoices, and customer-ready communication hubs.",
    },
    {
      title: "Workflow-Specific Tools",
      body: "Instead of forcing teams into generic software, each app can be shaped around one real workflow: quote intake, lead handoff, inventory movement, photo QC, safety reporting, or executive reporting.",
    },
  ],
} as const;

/** Short bridge before Planning Comparison (replaces long two-path cards). */
export const buildPathTransitionSection = {
  eyebrow: "Build path",
  title: "Two ways to start — one has less drag.",
  paragraphs: [
    "TransPak could approach AI as a broad internal enterprise rollout, or start with a focused workflow layer that proves value first. The difference is not ambition. The difference is how quickly the first useful system gets into the hands of the people doing the work.",
    "The recommended starting point is simple: keep the existing platforms in place, build one focused AI layer around a real workflow, test it with users, and expand only after value is visible.",
  ],
} as const;

export const opportunityTabs: OpportunityTab[] = [
  {
    id: "sales",
    label: "Sales",
    features: [
      {
        name: "AI Lead Generation Command Center",
        department: "Sales / Business Development",
        whatItDoes:
          "Finds, organizes, scores, and maps companies that may need crating, packaging, logistics, or design services — then prepares the lead record, notes, and next step for an approved handoff into the current sales workflow and customer records.",
        businessValue:
          "Helps sales focus on better-fit opportunities while keeping lead and account data aligned with how TransPak already tracks customers.",
        firstVersion:
          "Start with AI-generated lead intelligence, human approval, and clean handoff into the CRM or sales system of record.",
      },
      {
        name: "Account Intelligence Monitor",
        department: "Sales / Strategy",
        whatItDoes:
          "Watches target accounts for expansion signals, facility openings, hiring activity, industry movement, and reasons to reach out.",
        businessValue: "Creates timely reasons to call instead of generic outreach.",
        firstVersion: "Weekly intelligence briefs for target accounts and industries.",
      },
      {
        name: "Sales Call Summary Assistant",
        department: "Sales",
        whatItDoes:
          "Turns call notes or recordings into summaries, customer needs, objections, next steps, and follow-up drafts that can be added back into the right sales workflow.",
        businessValue: "Reduces manual sales admin and prevents details from getting lost.",
        firstVersion:
          "Manual upload or typed notes first, then expand into deeper phone and meeting workflows later.",
      },
      {
        name: "Outreach Drafting Assistant",
        department: "Sales",
        whatItDoes:
          "Drafts tailored emails and talking points based on the customer, industry, location, and likely packaging and logistics needs.",
        businessValue: "Helps reps move faster while keeping messaging relevant.",
        firstVersion: "Human-approved drafts only.",
      },
    ],
  },
  {
    id: "office",
    label: "Office",
    features: [
      {
        name: "Smart Quote Intake",
        department: "Sales Support / Office",
        whatItDoes:
          "Turns website forms, emails, photos, dimensions, destinations, urgency, and service type into organized quote information that can flow into the current sales process.",
        businessValue: "Cuts down back-and-forth and gives estimators cleaner information.",
        firstVersion:
          "Smart intake form with upload fields, AI summary, review queue, and a possible mobile-friendly app path for field photos and dimensions.",
      },
      {
        name: "Proposal Builder",
        department: "Sales / Estimating",
        whatItDoes:
          "Uses information from the current workflow, customer records, and quote history to draft proposal language, scope, assumptions, exclusions, timelines, and customer-ready summaries.",
        businessValue: "Speeds up quoting while keeping final pricing under human control.",
        firstVersion: "Use templates and human approval before anything goes to a customer.",
      },
      {
        name: "Document Extraction Hub",
        department: "Office / Compliance / Finance",
        whatItDoes:
          "Reads invoices, BOLs, packing lists, customs documents, certificates, insurance files, and vendor paperwork.",
        businessValue: "Reduces manual entry and makes paperwork searchable.",
        firstVersion: "Upload document, AI extracts fields, human verifies.",
      },
      {
        name: "Internal Knowledge Assistant",
        department: "Office / HR / Training",
        whatItDoes:
          "Lets staff ask questions about SOPs, customer processes, shipping rules, packaging requirements, and internal procedures.",
        businessValue: "Reduces repeated questions and helps new employees ramp faster.",
        firstVersion: "Start with uploaded PDFs, SOPs, guides, and internal docs.",
      },
    ],
  },
  {
    id: "distribution",
    label: "Distribution Centers",
    features: [
      {
        name: "Inventory Forecasting",
        department: "Distribution Centers",
        whatItDoes:
          "Predicts material demand, shortage risk, overstock, reorder timing, and recurring stock issues.",
        businessValue: "Helps prevent last-minute shortages and excess inventory.",
        firstVersion:
          "Use existing inventory exports and simple forecasting before full system integrations.",
      },
      {
        name: "QR Location System",
        department: "Warehouse / Distribution",
        whatItDoes:
          "Tracks materials, crates, finished goods, staging areas, and movement through scan-based workflows.",
        businessValue: "Creates better visibility without immediately buying expensive warehouse systems.",
        firstVersion:
          "QR labels, mobile scans, and simple location dashboards before deeper warehouse system integration.",
      },
      {
        name: "Putaway and Slotting Suggestions",
        department: "Warehouse / Operations",
        whatItDoes:
          "Suggests better placement for materials and finished goods based on frequency, size, weight, and destination.",
        businessValue: "Reduces wasted motion and improves warehouse flow.",
        firstVersion: "Start with movement history and worker scan data.",
      },
      {
        name: "Distribution Exception Monitor",
        department: "DC / Logistics",
        whatItDoes:
          "Flags missing paperwork, late staging, shipment blockers, inventory problems, and urgent customer-impacting issues.",
        businessValue: "Helps teams catch problems before they become customer complaints.",
        firstVersion: "Daily exception dashboard with human review.",
      },
    ],
  },
  {
    id: "shops",
    label: "Custom Shops",
    features: [
      {
        name: "Packaging Design Copilot",
        department: "Design / Engineering",
        whatItDoes:
          "Helps recommend design direction based on dimensions, product sensitivity, destination, handling risk, and similar past jobs.",
        businessValue: "Helps teams reuse knowledge and move faster during design intake.",
        firstVersion:
          "Start with design intake, risk profile, material recommendations, and similar-job search. Do not try to auto-create CAD first.",
      },
      {
        name: "Shop Floor Scheduler",
        department: "Shop Operations",
        whatItDoes:
          "Prioritizes jobs by due date, material availability, labor, machine availability, customer priority, and blockers.",
        businessValue: "Gives managers a clearer daily view of what should happen next.",
        firstVersion: "Kanban board plus AI priority suggestions. Manager approves all schedule changes.",
      },
      {
        name: "Photo Quality Checkpoints",
        department: "Quality / Shop",
        whatItDoes:
          "Uses required photos to confirm visible steps such as labeling, strapping, foam placement, crate markings, damage checks, and completion status.",
        businessValue: "Creates a simple proof trail and reduces missed steps.",
        firstVersion:
          "Mobile photo uploads first. A dedicated shop-floor iOS or Android workflow can come later if the ROI is proven.",
      },
      {
        name: "Maintenance Logger",
        department: "Shop / Facilities",
        whatItDoes:
          "Tracks issues, maintenance history, machine notes, photos, hours, and recurring problems for saws, CNC equipment, compressors, forklifts, and shop assets.",
        businessValue: "Helps prevent downtime and spot recurring equipment problems.",
        firstVersion:
          "QR tag on each asset with simple issue logs, photo uploads, mobile-friendly forms, and weekly summaries.",
      },
    ],
  },
  {
    id: "logistics",
    label: "Logistics",
    features: [
      {
        name: "Shipment Risk Monitor",
        department: "Logistics",
        whatItDoes:
          "Flags delayed shipments, weather risk, missing documents, carrier issues, and customer-impacting exceptions.",
        businessValue: "Helps logistics teams act before customers have to ask.",
        firstVersion:
          "Use shipment records, tracking uploads, and manual status fields before full carrier integrations.",
      },
      {
        name: "Route and Load Optimizer",
        department: "Dispatch / Logistics",
        whatItDoes:
          "Suggests better delivery routes, pickup sequence, consolidation opportunities, and cube utilization.",
        businessValue: "Can reduce unnecessary miles, delays, and fragmented shipments.",
        firstVersion: "Suggested routes and load notes first, not automated dispatch.",
      },
      {
        name: "Freight Consolidation Suggestions",
        department: "Logistics",
        whatItDoes:
          "Finds opportunities to combine pickups, deliveries, lanes, and recurring customer routes.",
        businessValue: "Improves efficiency across repeat lanes and nearby customer activity.",
        firstVersion: "Start with job address clustering and shipment history.",
      },
      {
        name: "Customs / Compliance Checklist",
        department: "Logistics / Compliance",
        whatItDoes: "Reviews paperwork for missing fields, missing documents, and required handoff items.",
        businessValue: "Reduces delays caused by incomplete paperwork.",
        firstVersion: "AI checklist plus human approval.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance & Compliance",
    features: [
      {
        name: "Margin Risk Alerts",
        department: "Finance / Leadership",
        whatItDoes:
          "Flags jobs where freight, labor, materials, rush changes, or scope drift may reduce margin.",
        businessValue: "Helps protect profit before the job closes.",
        firstVersion: "Rules first, AI explanation second.",
      },
      {
        name: "Invoice and BOL Matching",
        department: "Finance / Office",
        whatItDoes:
          "Compares invoices, bills of lading, job records, quote amounts, and shipment documents.",
        businessValue: "Reduces manual review and helps catch mismatches.",
        firstVersion: "AI extraction plus human review queue.",
      },
      {
        name: "Waste and Material Variance Monitor",
        department: "Finance / Operations",
        whatItDoes:
          "Compares expected material use against actual usage and flags repeated waste patterns.",
        businessValue: "Helps identify hidden losses in materials and process variation.",
        firstVersion: "Start with job records, material estimates, and manual usage uploads.",
      },
      {
        name: "Safety and Incident Intelligence",
        department: "Safety / HR / Ops",
        whatItDoes:
          "Organizes near misses, unsafe stacking, equipment issues, PPE reports, and repeated risk patterns.",
        businessValue: "Creates better visibility into facility safety trends.",
        firstVersion: "Mobile report form and weekly AI digest by facility.",
      },
    ],
  },
  {
    id: "cx",
    label: "Customer Experience",
    features: [
      {
        name: "Read-only Customer Portal",
        department: "Customer Operations",
        whatItDoes:
          "Lets customers view quote status, job status, documents, photos, tracking links, and contacts.",
        businessValue: "Reduces status-check emails and gives customers a more professional experience.",
        firstVersion:
          "Read-only status portal before complex self-service. Can expand into a customer-facing web or mobile experience later.",
      },
      {
        name: "Customer Update Generator",
        department: "Customer Success / Sales",
        whatItDoes:
          "Creates clean customer updates from job status, shipment activity, documents, and open issues.",
        businessValue: "Improves communication consistency and saves time.",
        firstVersion: "Human-approved update drafts.",
      },
      {
        name: "Customer Document Vault",
        department: "Customer Ops / Compliance",
        whatItDoes:
          "Stores proposals, certificates, BOLs, packing lists, inspection photos, and invoices in one customer-facing location.",
        businessValue: "Makes documents easier to find and share.",
        firstVersion: "Secure customer folders and simple document links.",
      },
      {
        name: "Service History Summary",
        department: "Sales / Customer Ops",
        whatItDoes:
          "Summarizes past work, recurring needs, open issues, contacts, and likely next opportunities for each customer.",
        businessValue: "Helps sales and account teams walk into conversations prepared.",
        firstVersion: "Account summary page generated from customer records and documents.",
      },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    features: [
      {
        name: "Executive AI Dashboard",
        department: "Leadership",
        whatItDoes:
          "Shows opportunities, quote activity, shipment issues, margin alerts, facility blockers, customer risks, and AI-recommended next moves by pulling together information from current workflows, customer records, documents, and operational signals from existing systems.",
        businessValue:
          "Gives leadership a clearer operating picture without digging through separate systems.",
        firstVersion:
          "Start with a daily command view and weekly executive brief. Can become a leadership web app once the workflow is proven.",
      },
      {
        name: "Network Intelligence Map",
        department: "Leadership / Sales / Logistics",
        whatItDoes:
          "Maps customers, prospects, facilities, lanes, quote activity, service areas, and market opportunities.",
        businessValue: "Helps leadership see where TransPak can grow and where operations are under pressure.",
        firstVersion: "Customer locations, prospect locations, public data, and simple scoring.",
      },
      {
        name: "Opportunity Heat Map",
        department: "Leadership / Sales",
        whatItDoes:
          "Highlights industries and regions with strong fit for crating, packaging, logistics, design, data center, semiconductor, aerospace, and industrial needs.",
        businessValue: "Focuses sales and expansion energy on better-fit markets.",
        firstVersion: "Start with selected industries and public signals.",
      },
      {
        name: "Weekly AI Briefing",
        department: "Leadership",
        whatItDoes:
          "Summarizes important changes, risks, opportunities, bottlenecks, customer issues, and recommended actions.",
        businessValue: "Saves leadership time and keeps the business moving with clearer priorities.",
        firstVersion: "Email or dashboard-based weekly briefing.",
      },
    ],
  },
];

/** Heading stack above the founder quote in Vision (build philosophy). */
export const buildPhilosophySectionHeader = {
  eyebrow: "Build philosophy",
  title: "How AI Should Be Built for a Real Business",
  intro:
    "AI should be shaped around real workflows — then improved as the business reveals what it needs next.",
} as const;

/** Vision section — founder statement (build philosophy centerpiece). */
export const founderVisionStatementParagraphs: readonly string[] = [
  "Wherever TransPak sees automation creating value — across sales, office workflows, quoting, design, crating, packaging, logistics, distribution centers, custom shops, finance, compliance, customer updates, or leadership reporting — it can probably be done. The opportunity is to think bigger across every department, then build one useful AI layer at a time.",
  "Not every AI use case has to be known on day one. In fact, the best ideas will usually appear as the work progresses.",
  "Once teams start using the first AI layer, new opportunities for automation, visibility, and workload reduction will naturally show up inside the real day-to-day process.",
  "That is how AI for business should be built: not as a one-time install where everything is guessed upfront, but as an evolving system. The process works a lot like building and refining this website — reviewing what is there, adding what creates value, removing what does not fit, improving the message, and shaping the system around the real goal.",
  "The same idea applies inside a business. You start with the real workflow, test what helps, then keep modifying, removing, adding, and improving until the system fits the people, the process, and the company.",
];

export const founderVisionStatementAttribution = "Kyle Millard, Owner of Recyclic Bravery";

export type PilotIncludedItem = {
  title: string;
  description: string;
};

export const moneyballPilotIncluded: PilotIncludedItem[] = [
  {
    title: "Branded AI Command Dashboard",
    description:
      "An executive view of opportunities, quote activity, documents needing review, risks, and next recommended actions — designed to sit above current systems, not replace them.",
  },
  {
    title: "AI Lead Command Center",
    description:
      "Finds, organizes, scores, and prioritizes target companies, then prepares approved lead information for the current sales workflow and customer records.",
  },
  {
    title: "Smart Quote Intake",
    description:
      "Turns quote requests, photos, dimensions, urgency, destination, and service type into organized information that can support the current sales process.",
  },
  {
    title: "Proposal Draft Support",
    description:
      "Creates first-draft proposal language, scope, assumptions, exclusions, and customer-ready summaries using information from the current workflow.",
  },
  {
    title: "Document Review Hub",
    description:
      "Summarizes and extracts key details from BOLs, invoices, packing lists, certificates, job documents, and customer files for review.",
  },
  {
    title: "Basic Opportunity Mapping",
    description:
      "Shows customer, prospect, and opportunity locations with geography-based intelligence that supports sales and account planning.",
  },
  {
    title: "One Focused Operations Workflow",
    description:
      "One selected shop, distribution, logistics, or customer operations workflow such as blockers, shipment exceptions, photo QC, or simple location tracking.",
  },
];

export const moneyballPilotNotIncluded: string[] = [
  "Full multi-location rollout",
  "Always-on heavy account scanning",
  "Large-scale document processing",
  "Full customer portal traffic",
  "High-volume routing and place searches",
  "Fixed camera computer vision",
  "Fully automated quoting",
  "Deep enterprise system integrations",
  "Department-wide usage across hundreds of users",
];

export const moneyballPilotUsageNote =
  "These items can be added later, but they would increase monthly AI and map/location usage.";

export const moneyballPilotTrustNote =
  "The first AI layer should be built around the systems and processes TransPak already trusts.";

export type PilotPhase = {
  title: string;
  description: string;
};

export const pilotPhases: PilotPhase[] = [
  {
    title: "Phase 1: Discovery and workflow mapping",
    description:
      "Identify the exact bottlenecks, teams, documents, quote flows, and sales processes to target first.",
  },
  {
    title: "Phase 2: Roll out the first operating layer",
    description:
      "Put the command view, lead intelligence, approved handoff points, quote intake, document review, and proposal workflows in front of the pilot team.",
  },
  {
    title: "Phase 3: Test with real users",
    description: "Run real TransPak-style examples through the system and adjust around feedback.",
  },
  {
    title: "Phase 4: Expand what works",
    description: "Add deeper workflows only after the first version proves value.",
  },
];

export type DemoStep = {
  step: number;
  text: string;
};

export const demoSteps: DemoStep[] = [
  { step: 1, text: "A target company appears from market and map-based prospecting." },
  { step: 2, text: "AI summarizes why the company is a strong fit." },
  { step: 3, text: "Sales outreach is drafted and approved." },
  { step: 4, text: "Approved lead details, notes, and next steps are placed into the right sales workflow." },
  { step: 5, text: "A call or meeting is summarized into customer needs and follow-up actions." },
  { step: 6, text: "A quote request is created with photos, dimensions, urgency, and destination." },
  { step: 7, text: "A proposal draft is created for review." },
  { step: 8, text: "Documents are uploaded, read, and organized." },
  { step: 9, text: "The job appears on a shop or distribution board." },
  { step: 10, text: "Leadership sees opportunity, progress, risk, and next actions in one view." },
];

export const moneyballMonthlyUsageSectionTitle = "Moneyball Monthly Usage Estimate";

export const moneyballMonthlyUsageSectionSubtitle =
  "The main variable cost is how much the team uses AI models, document analysis, lead research, map views, geocoding, route checks, and place/location tools — while the AI layer works alongside TransPak’s existing systems and current workflows.";

export const featuredMoneyballPilotUsage = {
  title: "Moneyball Pilot Monthly Cloud Usage",
  mainPrice: "$150–$750/mo",
  priceLabel: "Estimated monthly cloud usage",
  body: "This range is for a focused AI pilot where a small team uses the system daily for lead summaries, quote organization, proposal drafts, document summaries, account research, basic opportunity mapping, and human-approved automation.",
  disclaimer:
    "This estimate is for monthly AI and map/location usage only. It assumes the AI layer works with TransPak’s existing systems and workflows instead of requiring a parallel enterprise stack. This is not a build cost, not a software license, and not an annual fee.",
  assumptions: [
    "10–25 active users",
    "Daily AI summaries and drafts",
    "Light-to-moderate document review",
    "Lead and account research",
    "Basic map views and geocoding",
    "Human-approved automation",
    "No always-on heavy scanning",
    "No large-scale document processing",
    "No full multi-location rollout yet",
  ],
};

export type MonthlyUsageTier = {
  title: string;
  usageRange: string;
  usageRangeLabel: string;
  bestFor: string;
  typicalUsage: string[];
};

export const monthlyUsageTiers: MonthlyUsageTier[] = [
  {
    title: "Tiny Test Group",
    usageRange: "$25–$150/mo",
    usageRangeLabel: "Estimated monthly usage",
    bestFor: "Very small internal test group.",
    typicalUsage: [
      "3–8 users",
      "Light AI summaries",
      "A few quote and proposal drafts",
      "Small document volume",
      "Limited map usage",
      "Mostly manual testing",
    ],
  },
  {
    title: "Moneyball Pilot",
    usageRange: "$150–$750/mo",
    usageRangeLabel: "Estimated monthly usage",
    bestFor: "Focused real pilot with a small team using AI daily.",
    typicalUsage: [
      "10–25 users",
      "Lead summaries",
      "Quote intake support",
      "Proposal draft support",
      "Sales and account summaries",
      "Document summaries",
      "Basic map and geocoding usage",
      "Human-approved automation",
    ],
  },
  {
    title: "Active Department Pilot",
    usageRange: "$750–$2,500/mo",
    usageRangeLabel: "Estimated monthly usage",
    bestFor: "One department or a few connected teams using the system heavily.",
    typicalUsage: [
      "25–75 users",
      "More daily AI actions",
      "Regular document review",
      "More customer updates",
      "More map and location usage",
      "More account monitoring",
      "More workflow automation",
    ],
  },
  {
    title: "Heavy Multi-Team Usage",
    usageRange: "$2,500–$10,000+/mo",
    usageRangeLabel: "Estimated monthly usage",
    bestFor: "Multiple teams, higher document volume, frequent AI actions, and heavier map/location intelligence.",
    typicalUsage: [
      "75+ users",
      "High-volume summaries and drafts",
      "Larger document processing",
      "More automated monitoring",
      "Frequent map views, route checks, geocoding, and place searches",
      "More leadership reporting and customer updates",
    ],
  },
];

export type MonthlyCostDriver = {
  title: string;
  description: string;
};

export const monthlyCostDrivers: MonthlyCostDriver[] = [
  {
    title: "Users",
    description:
      "More users means more summaries, drafts, searches, document reviews, and customer updates.",
  },
  {
    title: "AI activity",
    description:
      "Lead research, quote summaries, proposal drafts, customer updates, account briefs, and executive reports all use AI model usage.",
  },
  {
    title: "Document volume",
    description: "Longer documents and higher file volume cost more because the AI has to read and summarize more content.",
  },
  {
    title: "Map and location activity",
    description: "Map views, geocoding, route checks, place searches, and location intelligence are usage-based.",
  },
  {
    title: "Automation level",
    description:
      "Manual, human-approved workflows cost less than always-on monitoring across accounts, shipments, documents, and locations.",
  },
];

export const simpleExplanationCard = {
  title: "Why the Moneyball version stays low-cost",
  body: "The Moneyball version stays low-cost because TransPak does not need to duplicate platform investment, fund a $250k+ integration program on day one, or stand up a second enterprise stack before AI workflows are proven. The first step is a focused AI operating layer where the main variable cost is actual usage.",
  footnote:
    "Most early pilots can stay in the $150–$750/mo range by keeping automation human-approved, limiting heavy document processing, using lightweight AI for routine work, and saving advanced reasoning for harder tasks.",
};

/** Planning comparison (Savings section) — internal enterprise AI vs. focused build partner. */
export const planningComparisonSection = {
  eyebrow: "Planning comparison",
  title: "Internal AI Tools vs. a Focused AI Build Partner",
  subtitle:
    "TransPak may already have access to AI inside existing platforms. The larger opportunity is turning that access into real workflow automation across sales, quoting, office work, design, crating, packaging, logistics, distribution centers, custom shops, finance, compliance, customer updates, and leadership reporting.",
  framing:
    'The point is not “avoid buying a CRM.” The point is “avoid spending heavily on a broad internal AI rollout before proving one useful workflow.”',
  footerNote:
    "These are planning comparisons, example benchmarks, and planning exposure ranges — not quotes, vendor bids, or guaranteed costs. Actual numbers depend on user counts, vendors, security requirements, scope, and adoption.",
} as const;

export type PlanningTierBenchmarkRow = {
  seats: string;
  exampleAnnual: string;
};

export type InternalEnterpriseAiItem = {
  title: string;
  planningLabel: string;
  body: string;
  tierRows?: PlanningTierBenchmarkRow[];
  tierTableNote?: string;
};

export type PartnerBuildRouteItem = {
  title: string;
  body: string;
};

export const internalEnterpriseAiRoute = {
  cardTitle: "Internal Enterprise AI Route",
  cardSubtitle:
    "Existing tools may already include AI access. The real cost is turning that access into working business automation.",
  items: [
    {
      title: "Platform AI add-ons and enterprise licenses",
      planningLabel: "Planning benchmark — not a quote",
      body: "Some enterprise AI tools are priced per user. For example, Microsoft 365 Copilot enterprise is publicly listed at $30 per user/month, paid yearly, and requires a qualifying Microsoft 365 plan — a public benchmark and example only, not a quote and not a claim about TransPak’s exact licenses. That can be useful, but licenses alone do not create working sales, quoting, logistics, shop, distribution, or reporting workflows.",
      tierRows: [
        { seats: "50 users", exampleAnnual: "$18,000/year" },
        { seats: "100 users", exampleAnnual: "$36,000/year" },
        { seats: "250 users", exampleAnnual: "$90,000/year" },
        { seats: "500 users", exampleAnnual: "$180,000/year" },
      ],
      tierTableNote:
        "Illustrative annual planning math at a $30/user/month public benchmark (× 12 months). Example only — not quotes, not guaranteed prices, and not a claim about TransPak’s licensing.",
    },
    {
      title: "Included AI still needs workflow design",
      planningLabel: "Lower software cost does not remove implementation work",
      body: "Some AI access may already be included inside existing business platforms. That helps with writing, summarizing, searching, and general productivity, but someone still has to map the workflow, connect the data, define the process, test use cases, and turn AI access into daily operational value.",
    },
    {
      title: "Internal rollout exposure",
      planningLabel: "Example range: $50k–$250k+ in planning exposure",
      body: "Even when the software platforms are already in place, a broad internal AI rollout can still create serious cost exposure before workflow value is proven. That includes internal staff time, IT/security review, data cleanup, workflow mapping, governance, testing, training, documentation, adoption, integrations, and stalled pilot risk.",
    },
    {
      title: "Custom implementation still has to happen",
      planningLabel: "Weeks to months of internal effort",
      body: "Someone still has to turn AI ideas into dashboards, automations, alerts, forms, routing logic, reporting views, searchable records, and practical workflow tools employees actually use.",
    },
    {
      title: "Risk of stalled pilots",
      planningLabel: "Lost time before measurable value",
      body: "AI pilots often stall when they stay as disconnected experiments, prompts, or meetings instead of becoming tools inside the real day-to-day work.",
    },
  ] satisfies InternalEnterpriseAiItem[],
};

export const recyclicBraveryPartnerRoute = {
  cardTitle: "Recyclic Bravery AI Build Partner Route",
  cardSubtitle:
    "Keep the platforms. Add a focused workflow builder around the problems that actually slow people down. The goal is not just AI access — it is turning useful workflows into tools people can actually open, use, and trust.",
  items: [
    {
      title: "No need to rebuy platforms already in place",
      body: "The AI layer can work around the current CRM (where sales uses one), existing ERP, spreadsheets, website forms, quote requests, PDFs, email workflows, maps, reporting files, and internal processes.",
    },
    {
      title: "Use internal AI where it makes sense",
      body: "Existing platform AI can still be part of the system. Recyclic Bravery’s role is to help turn that AI access into practical workflow tools instead of leaving it as general-purpose software.",
    },
    {
      title: "Build the missing workflow layer",
      body: "Create dashboards, alerts, summaries, lead cleanup, quote intake tools, routing logic, searchable records, shop visibility, reporting views, customer follow-up reminders, and next-step recommendations.",
    },
    {
      title: "Reduce the burden on internal teams",
      body: "TransPak’s team should not have to invent the AI roadmap, build every workflow, test every idea, document the process, and manage adoption alone. Recyclic Bravery can help prototype, build, refine, and organize the AI layer around the work already happening.",
    },
    {
      title: "Prove value before scaling",
      body: "Start with one workflow. Measure the value. Then expand into the next department, process, or data source.",
    },
    {
      title: "Turn proven workflows into apps",
      body: "Once a workflow proves useful, it does not have to stay as a dashboard or prompt. It can become an internal web app, iOS or Android field tool, customer portal, QR scan workflow, shop-floor checklist, logistics board, or leadership command view. That step comes after value is clear — not as a day-one promise for every workflow.",
    },
  ] satisfies PartnerBuildRouteItem[],
};

export type SavingsCallout = {
  title: string;
  mainNumber: string;
  subtext: string;
};

export const savingsCallouts: SavingsCallout[] = [
  {
    title: "Internal rollout planning exposure",
    mainNumber: "$50k–$250k+ example planning exposure",
    subtext:
      "Broad internal programs can absorb serious time and cost across IT, security, data cleanup, workflow mapping, training, governance, and integrations — even when AI features may already be available inside existing business systems.",
  },
  {
    title: "Licenses vs. working workflows",
    mainNumber: "Per-user AI seats are one line item",
    subtext:
      "Planning benchmarks for enterprise AI add-ons scale with headcount. Useful automation still requires workflow design, connections to quote requests, PDFs, website forms, Microsoft/email systems, and adoption in real day-to-day work — not licenses alone.",
  },
];

export const behindTheEstimateCard = {
  title: "Behind the estimate",
  body: "Routine summaries and drafts can be routed through lower-cost AI models. Harder reasoning, longer documents, and more complex analysis can use stronger models only when needed. Map and location costs depend on map views, geocoding, route checks, and place searches. Depending on the task, usage may combine OpenAI, Claude, Gemini, and Google Maps (including Places-style lookups where needed).",
};

export const moneyballPilotSectionIntro =
  "The pilot focuses on real daily workflows: lead intelligence, quote intake, proposal support, document review, account summaries, opportunity mapping, and one selected operations workflow. The variable cost comes from AI usage, document volume, map/location usage, and number of users.";

export const moneyballPilotSectionSubtitle =
  "A focused AI layer designed to prove workflow value while working with TransPak’s existing systems and current workflows.";

export const moneyballPilotSectionBody =
  "The pilot does not require replacing core business platforms. The first version can generate lead intelligence, quote summaries, document summaries, proposal support, and next-step recommendations, then hand approved information back into the right internal workflow — including the CRM where sales teams already work.";

export const heroMetrics = [
  { label: "New opportunities identified", value: "42" },
  { label: "Quote requests organized", value: "11" },
  { label: "Documents ready for review", value: "23" },
  { label: "Margin risks flagged", value: "7" },
  { label: "Shipments needing attention", value: "5" },
  { label: "Shop jobs with blockers", value: "9" },
];

export const heroNextActions = [
  "Prioritize data center prospect with expansion signal.",
  "Review quote where freight and material costs may reduce margin.",
  "Send customer-ready update from shipment and document records.",
  "Move urgent crating job ahead based on delivery deadline.",
];
