export type LeadExample = {
  id: string;
  companyName: string;
  website: string;
  city: string;
  state: string;
  category: string;
  industry: string;
  publicSignal: string;
  whyTransPakFit: string;
  suggestedServices: string[];
  salesTalkingPoint: string;
  nextAction: string;
  confidenceScore: number;
  status: string;
  sourceLabel: string;
  disclaimer: string;
};

export type QuoteRequest = {
  id: string;
  receivedAt: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  productDescription: string;
  dimensions: string;
  weight: string;
  origin: string;
  destination: string;
  urgency: string;
  requestedDate: string;
  notes: string;
  uploadedFiles: string[];
  aiSummary: string;
  missingFields: string[];
  riskFlags: string[];
  suggestedNextStep: string;
  approvalStatus: "pending" | "approved" | "needs_info";
};

export type JobUpdate = {
  at: string;
  label: string;
  detail: string;
};

export type DemoJob = {
  id: string;
  customerId: string;
  customerName: string;
  companyName: string;
  serviceType: string;
  title: string;
  description: string;
  dimensions: string;
  weight: string;
  origin: string;
  destination: string;
  assignedDepartment: string;
  assignedOwner: string;
  status: string;
  priority: string;
  dueDate: string;
  requiredDocuments: string[];
  requiredPhotos: string[];
  blockers: string[];
  aiSummary: string;
  nextBestAction: string;
  qrRoute: string;
  customerPortalRoute: string;
  photos: string[];
  updates: JobUpdate[];
  timeline: JobUpdate[];
};

export type AssetRecord = {
  id: string;
  assetType: string;
  name: string;
  facility: string;
  location: string;
  status: string;
  lastService: string;
  openIssues: string[];
  qrRoute: string;
  maintenanceNotes: string[];
  aiSummary: string;
  nextBestAction: string;
};

export type ShipmentRecord = {
  id: string;
  jobId: string;
  carrier: string;
  origin: string;
  destination: string;
  status: string;
  priority: string;
  eta: string;
  requiredDocuments: string[];
  missingDocuments: string[];
  blockers: string[];
  riskLevel: string;
  qrRoute: string;
  aiSummary: string;
  nextBestAction: string;
};

export type CustomerPortalRecord = {
  customerId: string;
  companyName: string;
  contactName: string;
  visibleJobs: string[];
  visibleShipments: string[];
  documents: { name: string; status: string }[];
  updates: { at: string; text: string }[];
  portalRoute: string;
  assignedContact: string;
  openIssues: string[];
};

export type ScanFlowUpdate = {
  id: string;
  relatedType: "job" | "asset" | "shipment";
  relatedId: string;
  createdAt: string;
  status: string;
  note: string;
  photoName: string | null;
  aiSummary: string;
  createdBy: string;
  nextAction: string;
};

export type DemoDocument = {
  id: string;
  name: string;
  jobId: string;
  jobTitle: string;
  status: "ready" | "missing" | "needs_review" | "approved";
  aiExtractionSummary: string;
  missingFields: string[];
  nextAction: string;
};
