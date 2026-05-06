export type {
  AssetRecord,
  CustomerPortalRecord,
  DemoDocument,
  DemoJob,
  JobUpdate,
  LeadExample,
  QuoteRequest,
  ScanFlowUpdate,
  ShipmentRecord,
} from "./transpak-demo-types";

export {
  assetRecords,
  customerPortalRecords,
  demoDocuments,
  demoJobs,
  leadExamples,
  quoteRequests,
  shipmentRecords,
} from "./transpak-demo-seed";

export {
  generateAiSummaryForUpdate,
  generateCustomerUpdateDraft,
  generateScanFlowUpdate,
  getAssetById,
  getCustomerPortalById,
  getDemoUrl,
  getJobById,
  getLeadById,
  getShipmentById,
} from "./transpak-demo-utils";
