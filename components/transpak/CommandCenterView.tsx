"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { ClipboardList, Radar, ShieldAlert, Truck } from "lucide-react";
import {
  demoDocuments,
  demoJobs,
  leadExamples,
  quoteRequests,
  shipmentRecords,
} from "@/lib/transpak-demo-seed";
import { useDemoUpdates } from "@/hooks/useDemoUpdates";
import {
  getQuoteActions,
  getReviewedDocuments,
  setDocumentReviewed,
  setQuoteAction,
} from "@/lib/transpak-demo-state";
import { StatusChip } from "./StatusChip";
import { DemoBadge } from "./DemoBadge";
import { ClearDemoUpdatesButton } from "./ClearDemoUpdatesButton";

const LEAD_FILTERS = [
  "All",
  "Data centers",
  "Aerospace",
  "Medical",
  "Semiconductor",
  "Industrial",
  "Robotics",
  "Battery/EV",
  "Defense",
  "Lab equipment",
] as const;

function filterLabelToCategory(label: string): string | null {
  const map: Record<string, string> = {
    "Data centers": "Data centers",
    Aerospace: "Aerospace",
    Medical: "Medical",
    Semiconductor: "Semiconductor",
    Industrial: "Industrial",
    Robotics: "Robotics",
    "Battery/EV": "Battery/EV",
    Defense: "Defense",
    "Lab equipment": "Lab equipment",
  };
  return map[label] ?? null;
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-3 py-2">
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="p-0">{children}</div>
    </section>
  );
}

export function CommandCenterView() {
  const updates = useDemoUpdates();
  const [leadFilter, setLeadFilter] = useState<string>("All");
  const [, force] = useState(0);

  const leads = useMemo(() => {
    if (leadFilter === "All") return leadExamples;
    const cat = filterLabelToCategory(leadFilter);
    return leadExamples.filter((l) => (cat ? l.category === cat : true));
  }, [leadFilter]);

  const stats = useMemo(() => {
    const blockedJobs = demoJobs.filter((j) => j.blockers.length > 0).length;
    const docReview = demoDocuments.filter((d) => d.status === "needs_review" || d.status === "missing").length;
    const shipRisk = shipmentRecords.filter((s) => s.riskLevel === "High").length;
    const drafts = demoJobs.filter(
      (j) => j.status === "Documentation review" || j.status === "In shop review" || j.status === "Customer update needed",
    ).length;
    return {
      leads: leadExamples.length,
      quotes: quoteRequests.length,
      jobs: demoJobs.length,
      blockedJobs,
      docs: docReview,
      shipmentsAtRisk: shipRisk,
      updatesDrafted: drafts,
      scanflowUpdates: updates.length,
    };
  }, [updates.length]);

  const kpi = [
    { label: "Public-fit accounts", value: stats.leads },
    { label: "Quote requests", value: stats.quotes },
    { label: "Active jobs", value: stats.jobs },
    { label: "Blocked jobs", value: stats.blockedJobs },
    { label: "Docs needing review", value: stats.docs },
    { label: "Shipments at risk", value: stats.shipmentsAtRisk },
    { label: "Customer updates drafted", value: stats.updatesDrafted },
    { label: "ScanFlow updates", value: stats.scanflowUpdates },
  ];

  return (
    <div className="min-h-screen bg-slate-100 pb-12 text-slate-900">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.04]">
        <Image src="/brand/mark.png" alt="" width={720} height={720} className="max-h-[70vh] object-contain" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            <Image src="/brand/logo.png" alt="TransPak" width={160} height={52} className="h-7 w-auto shrink-0 object-contain sm:h-8" />
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-slate-600">AI Command Center</p>
            </div>
            <DemoBadge>Demo mode</DemoBadge>
            <span className="hidden text-[11px] text-slate-500 sm:inline">Demo data</span>
            <span className="hidden text-[11px] text-slate-500 sm:inline">·</span>
            <span className="hidden text-[11px] text-slate-500 sm:inline">Human approval enabled</span>
          </div>
          <nav className="flex flex-wrap items-center gap-1 text-xs font-semibold">
            <Link href="/scanflow" className="rounded px-2 py-1 text-slate-700 hover:bg-slate-100">
              ScanFlow
            </Link>
            <Link href="/qr" className="rounded px-2 py-1 text-slate-700 hover:bg-slate-100">
              QR Sheet
            </Link>
            <Link href="/demo/quote-to-shop" className="rounded px-2 py-1 text-slate-700 hover:bg-slate-100">
              Quote-to-Shop
            </Link>
            <Link href="/portal/CUST-001" className="rounded px-2 py-1 text-slate-700 hover:bg-slate-100">
              Customer Portal
            </Link>
            <ClearDemoUpdatesButton />
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1600px] space-y-4 px-3 py-4 sm:px-4">
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">AI Command Center</h1>
          <p className="mt-1 max-w-4xl text-sm text-slate-600">
            Live demo workspace for public-fit leads, quote intake, active jobs, shipment risks, documents, field updates,
            and customer-ready communication.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Demo data uses public lead examples and realistic workflow records. Production would connect only to approved
            internal systems.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            This demo uses real public lead examples, realistic TransPak-style job records, and functional QR codes to show
            how the system would work once connected to approved internal data.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {kpi.map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <p className="text-2xl font-bold tabular-nums text-slate-900">{t.value}</p>
              <p className="text-[11px] font-medium leading-tight text-slate-500">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            <Panel title="Quote intake queue">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-2">Quote ID</th>
                      <th className="px-3 py-2">Company</th>
                      <th className="px-3 py-2">Service</th>
                      <th className="px-3 py-2">Urgency</th>
                      <th className="px-3 py-2">Missing fields</th>
                      <th className="px-3 py-2">Next step</th>
                      <th className="px-3 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quoteRequests.map((q) => {
                      const action = getQuoteActions()[q.id];
                      return (
                        <tr key={q.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="whitespace-nowrap px-3 py-2 font-mono font-semibold text-[#D80B3C]">{q.id}</td>
                          <td className="px-3 py-2">{q.companyName}</td>
                          <td className="px-3 py-2">{q.serviceType}</td>
                          <td className="px-3 py-2">{q.urgency}</td>
                          <td className="max-w-[180px] truncate px-3 py-2 text-slate-600">{q.missingFields.join(", ")}</td>
                          <td className="max-w-[200px] px-3 py-2 text-slate-600">{q.suggestedNextStep}</td>
                          <td className="whitespace-nowrap px-3 py-2">
                            <div className="flex flex-wrap gap-1">
                              <button
                                type="button"
                                className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50"
                                onClick={() => {
                                  setQuoteAction(q.id, "approved");
                                  force((x) => x + 1);
                                }}
                              >
                                Approve
                              </button>
                              <button
                                type="button"
                                className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50"
                                onClick={() => {
                                  setQuoteAction(q.id, "needs_info");
                                  force((x) => x + 1);
                                }}
                              >
                                Request info
                              </button>
                              <Link href="/demo/quote-to-shop" className="rounded bg-[#D80B3C] px-2 py-0.5 text-[11px] font-semibold text-white">
                                Flow
                              </Link>
                            </div>
                            {action ? <p className="mt-1 text-[10px] text-emerald-700">Local: {action}</p> : null}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Active jobs">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[960px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-2">Job ID</th>
                      <th className="px-3 py-2">Company</th>
                      <th className="px-3 py-2">Title</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Priority</th>
                      <th className="px-3 py-2">Owner</th>
                      <th className="px-3 py-2">Due</th>
                      <th className="px-3 py-2">Blockers</th>
                      <th className="px-3 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoJobs.map((j) => (
                      <tr key={j.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="whitespace-nowrap px-3 py-2 font-mono font-semibold text-[#D80B3C]">{j.id}</td>
                        <td className="px-3 py-2">{j.companyName}</td>
                        <td className="max-w-[220px] px-3 py-2">{j.title}</td>
                        <td className="px-3 py-2">
                          <StatusChip label={j.status} tone="neutral" />
                        </td>
                        <td className="px-3 py-2">{j.priority}</td>
                        <td className="px-3 py-2">{j.assignedOwner}</td>
                        <td className="whitespace-nowrap px-3 py-2">{j.dueDate}</td>
                        <td className="max-w-[160px] truncate px-3 py-2 text-slate-600">{j.blockers.join("; ") || "—"}</td>
                        <td className="whitespace-nowrap px-3 py-2">
                          <div className="flex flex-wrap gap-1">
                            <Link href={j.qrRoute} className="rounded border border-slate-300 px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50">
                              Open
                            </Link>
                            <Link href={`/customer-updates/${j.id}`} className="rounded border border-slate-300 px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50">
                              Update
                            </Link>
                            <Link href="/qr" className="rounded border border-slate-300 px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50">
                              QR
                            </Link>
                            <Link href="/scanflow/scanner" className="rounded border border-slate-300 px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50">
                              ScanFlow
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Public lead intelligence">
              <p className="border-b border-slate-100 px-3 py-2 text-[11px] text-slate-600">
                Public research examples for AI lead intelligence. These are not represented as TransPak customers and should
                be verified before outreach.
              </p>
              <div className="flex flex-wrap gap-1 border-b border-slate-100 px-3 py-2">
                {LEAD_FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setLeadFilter(f)}
                    className={`rounded px-2 py-0.5 text-[11px] font-semibold ${
                      leadFilter === f ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-2">Company</th>
                      <th className="px-3 py-2">Industry</th>
                      <th className="px-3 py-2">Location</th>
                      <th className="px-3 py-2">Fit</th>
                      <th className="px-3 py-2">Conf.</th>
                      <th className="px-3 py-2">Next action</th>
                      <th className="px-3 py-2">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-2 font-semibold">{l.companyName}</td>
                        <td className="px-3 py-2">{l.industry}</td>
                        <td className="whitespace-nowrap px-3 py-2">
                          {l.city}, {l.state}
                        </td>
                        <td className="max-w-[280px] px-3 py-2 text-slate-600">{l.whyTransPakFit}</td>
                        <td className="px-3 py-2">{l.confidenceScore}%</td>
                        <td className="max-w-[200px] px-3 py-2 text-slate-600">{l.nextAction}</td>
                        <td className="max-w-[140px] px-3 py-2 text-[10px] text-slate-500">{l.disclaimer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Document review hub">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-2">Document</th>
                      <th className="px-3 py-2">Job</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Extraction</th>
                      <th className="px-3 py-2">Missing</th>
                      <th className="px-3 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoDocuments.map((d) => {
                      const reviewed = Boolean(getReviewedDocuments()[d.id]);
                      return (
                        <tr key={d.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="px-3 py-2 font-medium">{d.name}</td>
                          <td className="px-3 py-2">{d.jobTitle}</td>
                          <td className="px-3 py-2">
                            <StatusChip
                              label={reviewed ? "Reviewed" : d.status.replace("_", " ")}
                              tone={reviewed ? "success" : d.status === "missing" ? "danger" : "warning"}
                            />
                          </td>
                          <td className="max-w-[260px] px-3 py-2 text-slate-600">{d.aiExtractionSummary}</td>
                          <td className="px-3 py-2 text-slate-600">{d.missingFields.join(", ") || "—"}</td>
                          <td className="px-3 py-2">
                            <button
                              type="button"
                              className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50"
                              onClick={() => {
                                setDocumentReviewed(d.id, true);
                                force((x) => x + 1);
                              }}
                            >
                              Mark reviewed
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Panel>
          </div>

          <aside className="space-y-4">
            <Panel title="Next best actions">
              <ul className="space-y-2 px-3 py-3 text-xs text-slate-700">
                <li className="flex gap-2">
                  <Radar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D80B3C]" aria-hidden />
                  Review top public-fit leads; assign owners — verify before outreach.
                </li>
                <li className="flex gap-2">
                  <ClipboardList className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D80B3C]" aria-hidden />
                  Close documentation gaps on medical/export lanes before carrier booking.
                </li>
                <li className="flex gap-2">
                  <Truck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D80B3C]" aria-hidden />
                  Confirm urgent lane cutoffs; align ScanFlow photo checkpoints.
                </li>
              </ul>
              <p className="border-t border-slate-100 px-3 py-2 text-[10px] text-slate-500">
                Start with one workflow. Prove value. Build from there.
              </p>
            </Panel>

            <Panel title="Shipment risk monitor">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[10px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-2 py-1.5">ID</th>
                      <th className="px-2 py-1.5">Job</th>
                      <th className="px-2 py-1.5">Risk</th>
                      <th className="px-2 py-1.5">Missing</th>
                      <th className="px-2 py-1.5">Next</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipmentRecords.map((s) => (
                      <tr key={s.id} className="border-b border-slate-100">
                        <td className="px-2 py-1.5 font-mono text-[11px] font-semibold">{s.id}</td>
                        <td className="px-2 py-1.5 text-[11px]">{s.jobId}</td>
                        <td className="px-2 py-1.5">
                          <StatusChip label={s.riskLevel} tone={s.riskLevel === "High" ? "danger" : "warning"} />
                        </td>
                        <td className="max-w-[100px] truncate px-2 py-1.5 text-[11px]">{s.missingDocuments.join(", ") || "—"}</td>
                        <td className="px-2 py-1.5">
                          <Link href={s.qrRoute} className="text-[11px] font-semibold text-[#D80B3C]">
                            Open
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Shop / distribution blockers">
              <div className="max-h-[280px] overflow-y-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead className="sticky top-0 border-b border-slate-200 bg-slate-50 text-[10px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-2 py-1.5">Job</th>
                      <th className="px-2 py-1.5">Blocker</th>
                      <th className="px-2 py-1.5">Dept</th>
                      <th className="px-2 py-1.5">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoJobs
                      .filter((j) => j.blockers.length > 0)
                      .flatMap((j) =>
                        j.blockers.map((b) => (
                          <tr key={`${j.id}-${b}`} className="border-b border-slate-100">
                            <td className="px-2 py-1.5 font-mono text-[11px]">{j.id}</td>
                            <td className="px-2 py-1.5 text-[11px]">{b}</td>
                            <td className="px-2 py-1.5 text-[11px]">{j.assignedDepartment}</td>
                            <td className="px-2 py-1.5 text-[11px]">{j.assignedOwner}</td>
                          </tr>
                        )),
                      )}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Customer update drafts">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[10px] font-semibold uppercase text-slate-600">
                    <tr>
                      <th className="px-2 py-1.5">Job</th>
                      <th className="px-2 py-1.5">Company</th>
                      <th className="px-2 py-1.5">Status</th>
                      <th className="px-2 py-1.5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoJobs.slice(0, 6).map((j) => (
                      <tr key={j.id} className="border-b border-slate-100">
                        <td className="px-2 py-1.5 font-mono text-[11px]">{j.id}</td>
                        <td className="max-w-[120px] truncate px-2 py-1.5">{j.companyName}</td>
                        <td className="px-2 py-1.5">
                          <StatusChip label={j.status} tone="neutral" />
                        </td>
                        <td className="px-2 py-1.5">
                          <Link href={`/customer-updates/${j.id}`} className="text-[11px] font-semibold text-[#D80B3C]">
                            Generate
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <Panel title="Recent ScanFlow updates">
              <div className="px-3 py-3">
                {updates.length === 0 ? (
                  <p className="text-xs text-slate-600">
                    Scan a QR code or open a demo job to create the first field update.
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {updates.slice(0, 12).map((u) => (
                      <li key={u.id} className="rounded border border-slate-100 bg-slate-50 p-2 text-[11px]">
                        <span className="font-semibold">
                          {u.relatedType.toUpperCase()} · {u.relatedId}
                        </span>
                        <span className="text-slate-500"> · {new Date(u.createdAt).toLocaleString()}</span>
                        <p className="mt-1 text-slate-700">{u.aiSummary}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Panel>

            <div className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-[11px] text-slate-600 shadow-sm">
              <p className="font-semibold text-slate-800">Human approval stays in the loop.</p>
              <p className="mt-1">
                Scan a QR code → open the job → upload a photo → select a status → add a note → generate an AI summary →
                update the command center → draft a customer-ready update.
              </p>
              <p className="mt-2 text-[10px] text-slate-500">
                The first version can run as a web app or mobile PWA. If the workflow proves value, the same system can become
                a dedicated iOS or Android app.
              </p>
            </div>
          </aside>
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-600 shadow-sm">
          <ShieldAlert className="h-4 w-4 text-amber-600" aria-hidden />
          <span>Operational demo — not connected to live TransPak ERP/CRM.</span>
        </div>
      </main>
    </div>
  );
}
