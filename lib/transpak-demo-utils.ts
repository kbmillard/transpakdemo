import {
  assetRecords,
  customerPortalRecords,
  demoJobs,
  leadExamples,
  shipmentRecords,
} from "./transpak-demo-seed";
import type { DemoJob, ScanFlowUpdate } from "./transpak-demo-types";

export function getDemoUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined") {
    return `${window.location.origin}${normalized}`;
  }
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}${normalized}` : normalized;
}

export function getJobById(id: string): DemoJob | undefined {
  return demoJobs.find((j) => j.id === id);
}

export function getAssetById(id: string) {
  return assetRecords.find((a) => a.id === id);
}

export function getShipmentById(id: string) {
  return shipmentRecords.find((s) => s.id === id);
}

export function getLeadById(id: string) {
  return leadExamples.find((l) => l.id === id);
}

export function getCustomerPortalById(customerId: string) {
  return customerPortalRecords.find((c) => c.customerId === customerId);
}

export function generateAiSummaryForUpdate(params: {
  jobId: string;
  status: string;
  note: string;
  jobTitle?: string;
}): string {
  const title = params.jobTitle ?? params.jobId;
  return (
    `AI summary: ${title} moved to ${params.status}. ` +
    (params.note.trim()
      ? `Field note captured: ${params.note.trim().slice(0, 160)}${params.note.length > 160 ? "…" : ""} `
      : "") +
    `Recommended next step: confirm documentation checkpoints and publish a customer-ready update after human review.`
  );
}

export function generateCustomerUpdateDraft(job: DemoJob): string {
  const blockerLine =
    job.blockers.length > 0
      ? `Current focus items include: ${job.blockers.join("; ")}.`
      : `There are no additional internal blockers highlighted at this time beyond standard checkpoints.`;

  return (
    `Your packaging job is currently in ${job.status.toLowerCase()}. ` +
    `${blockerLine} ` +
    `Next steps will follow once required checkpoints are satisfied and release criteria are met. ` +
    `If you need anything urgently, reply to your assigned contact and we will prioritize visibility on timing.`
  );
}

export function generateScanFlowUpdate(params: {
  relatedType: ScanFlowUpdate["relatedType"];
  relatedId: string;
  status: string;
  note: string;
  photoName: string | null;
  createdBy?: string;
}): ScanFlowUpdate {
  const createdAt = new Date().toISOString();
  const aiSummary = generateAiSummaryForUpdate({
    jobId: params.relatedId,
    status: params.status,
    note: params.note,
  });

  return {
    id: `SFU-${createdAt}-${Math.random().toString(36).slice(2, 8)}`,
    relatedType: params.relatedType,
    relatedId: params.relatedId,
    createdAt,
    status: params.status,
    note: params.note,
    photoName: params.photoName,
    aiSummary,
    createdBy: params.createdBy ?? "Field tech (demo)",
    nextAction: "Publish customer-ready draft after human approval",
  };
}
