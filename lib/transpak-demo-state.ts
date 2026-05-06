"use client";

import type { ScanFlowUpdate } from "./transpak-demo-types";
import { generateScanFlowUpdate } from "./transpak-demo-utils";

const UPDATES_KEY = "transpak-demo-updates";
const APPROVED_UPDATES_KEY = "transpak-demo-approved-customer-updates";
const DOC_REVIEW_KEY = "transpak-demo-reviewed-docs";
const QUOTE_ACTION_KEY = "transpak-demo-quote-actions";

export function getDemoUpdates(): ScanFlowUpdate[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(UPDATES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ScanFlowUpdate[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveDemoUpdate(update: ScanFlowUpdate): void {
  if (typeof window === "undefined") return;
  const prev = getDemoUpdates();
  window.localStorage.setItem(UPDATES_KEY, JSON.stringify([update, ...prev]));
  window.dispatchEvent(new Event("transpak-demo-updates"));
}

export function saveDemoUpdateFromFields(params: Parameters<typeof generateScanFlowUpdate>[0]): ScanFlowUpdate {
  const u = generateScanFlowUpdate(params);
  saveDemoUpdate(u);
  return u;
}

export function clearDemoUpdates(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(UPDATES_KEY);
  window.dispatchEvent(new Event("transpak-demo-updates"));
}

export function getApprovedCustomerUpdates(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(APPROVED_UPDATES_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function setCustomerUpdateApproved(jobId: string, approved: boolean): void {
  if (typeof window === "undefined") return;
  const prev = getApprovedCustomerUpdates();
  prev[jobId] = approved;
  window.localStorage.setItem(APPROVED_UPDATES_KEY, JSON.stringify(prev));
}

export function getReviewedDocuments(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(DOC_REVIEW_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function setDocumentReviewed(docId: string, reviewed: boolean): void {
  if (typeof window === "undefined") return;
  const prev = getReviewedDocuments();
  prev[docId] = reviewed;
  window.localStorage.setItem(DOC_REVIEW_KEY, JSON.stringify(prev));
}

export function getQuoteActions(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(QUOTE_ACTION_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function setQuoteAction(quoteId: string, action: string): void {
  if (typeof window === "undefined") return;
  const prev = getQuoteActions();
  prev[quoteId] = action;
  window.localStorage.setItem(QUOTE_ACTION_KEY, JSON.stringify(prev));
}
