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

/** Deterministic demo “next step” copy — varies by field status selection. */
export function recommendedNextStepForFieldStatus(
  status: string,
  job?: Pick<DemoJob, "blockers" | "nextBestAction">,
): string {
  const s = status.trim().toLowerCase();

  if (s === "completed") {
    return "Finalize internal checklists, archive field evidence, and route a customer-safe closure note after approver sign-off.";
  }
  if (s === "blocked") {
    if (job?.blockers?.length) {
      return `Clear blockers first: ${job.blockers.slice(0, 2).join("; ")}. Reassign owner if stalled.`;
    }
    return "Identify owning department, set a dated recovery plan, and hold outbound customer promises until unblocked.";
  }
  if (s === "waiting on paperwork") {
    return "Route missing documents to compliance; do not advance carrier or customer timelines until the file is complete.";
  }
  if (s === "photo review needed") {
    return "Send uploads to QA; reshoot failed checkpoints before the job status advances.";
  }
  if (s === "customer update needed") {
    return "Draft customer-facing wording for approver review; keep internal risk language out of external copy.";
  }
  if (s === "loaded") {
    return "Confirm BOL / pickup proof, capture carrier PRO, and reflect handoff in the command center lane.";
  }
  if (s === "ready") {
    return "Run pre-start verification (tools, materials, work order) before clocking meaningful floor time.";
  }
  if (s === "in progress") {
    return "Continue photo checkpoints; escalate variances to the lead tech before end of shift.";
  }
  return "Confirm documentation checkpoints and publish a customer-ready update after human review.";
}

export function generateAiSummaryForUpdate(params: {
  jobId: string;
  status: string;
  note: string;
  jobTitle?: string;
  job?: Pick<DemoJob, "blockers" | "nextBestAction">;
}): string {
  const title = params.jobTitle ?? params.jobId;
  const next = recommendedNextStepForFieldStatus(params.status, params.job);
  return (
    `AI summary: ${title} moved to ${params.status}. ` +
    (params.note.trim()
      ? `Field note captured: ${params.note.trim().slice(0, 160)}${params.note.length > 160 ? "…" : ""} `
      : "") +
    `Recommended next step: ${next}`
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
  const job = params.relatedType === "job" ? getJobById(params.relatedId) : undefined;
  const aiSummary = generateAiSummaryForUpdate({
    jobId: params.relatedId,
    status: params.status,
    note: params.note,
    jobTitle: job?.title,
    job,
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
