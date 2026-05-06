"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, ClipboardList, Radar, ShieldAlert, Truck } from "lucide-react";
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
import { GlassCard } from "../transpak-ai/GlassCard";
import { StatusChip } from "./StatusChip";
import { DemoBadge } from "./DemoBadge";

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
    const urgentJobs = demoJobs.filter((j) => j.status === "Urgent" || j.priority === "Critical").length;
    const blocked = demoJobs.filter((j) => j.blockers.length > 0).length;
    const docReview = demoDocuments.filter((d) => d.status === "needs_review" || d.status === "missing").length;
    const shipRisk = shipmentRecords.filter((s) => s.riskLevel === "High").length;
    return {
      leads: leadExamples.length,
      quotes: quoteRequests.length,
      jobs: demoJobs.length,
      docs: docReview,
      shipments: shipRisk,
      shopBlockers: blocked,
      urgentJobs,
      updatesDrafted: demoJobs.filter((j) => j.status === "Documentation review" || j.status === "In shop review").length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a]">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.06]">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[80vh] object-contain" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="TransPak" width={200} height={64} className="h-8 w-auto object-contain sm:h-9" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D80B3C]">TransPak AI Command Center</p>
              <p className="text-sm font-semibold text-[#19212A]/70">Demo mode: public lead examples + realistic workflow data</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/scanflow"
              className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#19212A] shadow-sm hover:border-[#D80B3C]/35"
            >
              Open ScanFlow
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/qr"
              className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#19212A] shadow-sm hover:border-[#D80B3C]/35"
            >
              View QR Sheet
            </Link>
            <Link
              href="/demo/quote-to-shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#D80B3C] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#D80B3C]/25"
            >
              Run Quote-to-Shop Demo
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[1.75rem] border border-white/60 bg-gradient-to-br from-[#19212A] via-[#1a2330] to-[#111827] p-6 text-white shadow-[0_24px_80px_-24px_rgba(17,24,39,0.65)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D80B3C]">Executive command view</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Operational signals — demo dataset</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
            Here is what the AI operating layer would feel like once it is wrapped around your real workflows.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-white/70">
            This demo uses real public lead examples, realistic TransPak-style job records, and functional QR codes to show
            how the system would work once connected to approved internal data.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "New opportunities identified", value: stats.leads },
              { label: "Quote requests organized", value: stats.quotes },
              { label: "Jobs active", value: stats.jobs },
              { label: "Documents ready for review", value: stats.docs },
              { label: "Shipments needing attention", value: stats.shipments },
              { label: "Shop blockers", value: stats.shopBlockers },
              { label: "Urgent / critical lanes", value: stats.urgentJobs },
              { label: "Customer updates drafted (demo)", value: stats.updatesDrafted },
            ].map((t) => (
              <div key={t.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-3xl font-bold tabular-nums">{t.value}</p>
                <p className="mt-1 text-xs font-medium text-white/60">{t.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Next best actions</h2>
            <GlassCard hover={false} className="p-5">
              <ul className="space-y-3 text-sm text-[#19212A]/80">
                <li className="flex gap-2">
                  <Radar className="mt-0.5 h-4 w-4 shrink-0 text-[#D80B3C]" aria-hidden />
                  Review top public research leads and assign next outreach owners (verify before outreach).
                </li>
                <li className="flex gap-2">
                  <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-[#D80B3C]" aria-hidden />
                  Clear documentation gaps on medical and export lanes before carrier booking.
                </li>
                <li className="flex gap-2">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-[#D80B3C]" aria-hidden />
                  Confirm urgent lane cutoffs and align ScanFlow photo checkpoints.
                </li>
              </ul>
            </GlassCard>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">Public lead intelligence</h2>
                <p className="mt-1 text-sm text-[#19212A]/65">
                  Public research examples for AI lead intelligence. These are not represented as TransPak customers and
                  should be verified before outreach.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {LEAD_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setLeadFilter(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    leadFilter === f ? "bg-[#19212A] text-white" : "border border-[#19212A]/10 bg-white/70 text-[#19212A]/75"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {leads.slice(0, 8).map((l) => (
                <GlassCard key={l.id} className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-base font-bold">{l.companyName}</p>
                      <p className="mt-1 text-xs text-[#19212A]/60">
                        {l.city}, {l.state} · {l.category}
                      </p>
                    </div>
                    <StatusChip label={`${l.confidenceScore}%`} tone="info" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#19212A]/78">{l.whyTransPakFit}</p>
                  <a className="mt-3 inline-flex text-xs font-semibold text-[#D80B3C]" href={l.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                  <p className="mt-3 text-[11px] text-[#19212A]/55">{l.disclaimer}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold">Shipment risks</h2>
            <GlassCard hover={false} className="p-5">
              <div className="space-y-3">
                {shipmentRecords.map((s) => (
                  <div key={s.id} className="rounded-2xl border border-[#19212A]/8 bg-white/60 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold">{s.id}</p>
                      <StatusChip label={s.riskLevel} tone={s.riskLevel === "High" ? "danger" : "warning"} />
                    </div>
                    <p className="mt-2 text-xs text-[#19212A]/65">
                      {s.origin} → {s.destination}
                    </p>
                    <Link href={s.qrRoute} className="mt-2 inline-flex text-xs font-semibold text-[#D80B3C]">
                      Open route
                    </Link>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Quote intake queue</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {quoteRequests.map((q) => {
              const action = getQuoteActions()[q.id];
              return (
                <GlassCard key={q.id} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-base font-bold">{q.companyName}</p>
                      <p className="text-sm text-[#19212A]/65">{q.serviceType}</p>
                    </div>
                    <DemoBadge>{q.approvalStatus}</DemoBadge>
                  </div>
                  <p className="mt-3 text-sm text-[#19212A]/78">{q.aiSummary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-[#19212A] px-3 py-1.5 text-xs font-semibold text-white"
                      onClick={() => {
                        setQuoteAction(q.id, "approved");
                        force((x) => x + 1);
                      }}
                    >
                      Approve intake
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-[#19212A]/15 px-3 py-1.5 text-xs font-semibold text-[#19212A]"
                      onClick={() => {
                        setQuoteAction(q.id, "job_created");
                        force((x) => x + 1);
                      }}
                    >
                      Create job
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-[#19212A]/15 px-3 py-1.5 text-xs font-semibold text-[#19212A]"
                      onClick={() => {
                        setQuoteAction(q.id, "needs_info");
                        force((x) => x + 1);
                      }}
                    >
                      Request missing info
                    </button>
                    <Link href="/demo/quote-to-shop" className="rounded-full bg-[#D80B3C] px-3 py-1.5 text-xs font-semibold text-white">
                      Open demo flow
                    </Link>
                  </div>
                  {action ? <p className="mt-3 text-xs font-semibold text-emerald-700">Saved locally: {action}</p> : null}
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Active jobs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {demoJobs.map((j) => (
              <GlassCard key={j.id} className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-[#D80B3C]">{j.id}</p>
                    <p className="text-lg font-bold">{j.title}</p>
                    <p className="text-sm text-[#19212A]/65">{j.companyName}</p>
                  </div>
                  <StatusChip label={j.status} tone="neutral" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={j.qrRoute} className="rounded-full bg-[#19212A] px-3 py-1.5 text-xs font-semibold text-white">
                    Open job
                  </Link>
                  <Link href={`/customer-updates/${j.id}`} className="rounded-full border border-[#19212A]/15 px-3 py-1.5 text-xs font-semibold">
                    Generate customer update
                  </Link>
                  <Link href="/qr" className="rounded-full border border-[#19212A]/15 px-3 py-1.5 text-xs font-semibold">
                    View QR
                  </Link>
                  <Link href={j.customerPortalRoute} className="rounded-full border border-[#19212A]/15 px-3 py-1.5 text-xs font-semibold">
                    Open portal
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Documents needing review</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {demoDocuments.map((d) => {
              const reviewed = Boolean(getReviewedDocuments()[d.id]);
              return (
                <GlassCard key={d.id} className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-bold">{d.name}</p>
                      <p className="text-sm text-[#19212A]/65">{d.jobTitle}</p>
                    </div>
                    <StatusChip
                      label={reviewed ? "Marked reviewed" : d.status.replace("_", " ")}
                      tone={reviewed ? "success" : d.status === "missing" ? "danger" : "warning"}
                    />
                  </div>
                  <p className="mt-3 text-sm text-[#19212A]/78">{d.aiExtractionSummary}</p>
                  <button
                    type="button"
                    className="mt-4 rounded-full bg-[#19212A] px-4 py-2 text-xs font-semibold text-white"
                    onClick={() => {
                      setDocumentReviewed(d.id, true);
                      force((x) => x + 1);
                    }}
                  >
                    Mark reviewed (local demo)
                  </button>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Shop / distribution blockers</h2>
            <div className="mt-4 space-y-3">
              {demoJobs
                .filter((j) => j.blockers.length > 0)
                .map((j) => (
                  <GlassCard key={j.id} hover={false} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{j.id}</p>
                        <p className="text-sm text-[#19212A]/70">{j.title}</p>
                      </div>
                      <ShieldAlert className="h-5 w-5 text-amber-600" aria-hidden />
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#19212A]/78">
                      {j.blockers.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Recent ScanFlow updates</h2>
            <GlassCard hover={false} className="mt-4 p-6">
              {updates.length === 0 ? (
                <p className="text-sm text-[#19212A]/70">
                  Scan a QR code or open a demo job to create the first field update.
                </p>
              ) : (
                <ul className="space-y-3">
                  {updates.slice(0, 8).map((u) => (
                    <li key={u.id} className="rounded-2xl border border-[#19212A]/8 bg-white/70 p-3 text-sm">
                      <p className="font-semibold">
                        {u.relatedType.toUpperCase()} · {u.relatedId}
                      </p>
                      <p className="text-xs text-[#19212A]/60">{new Date(u.createdAt).toLocaleString()}</p>
                      <p className="mt-2 text-[#19212A]/80">{u.aiSummary}</p>
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[#19212A]/10 bg-white/60 p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Human approval stays in the loop.</h2>
              <p className="mt-2 max-w-3xl text-sm text-[#19212A]/75">
                Scan a QR code → open the job → upload a photo → select a status → add a note → generate an AI summary →
                update the command center → draft a customer-ready update.
              </p>
            </div>
            <Link href="/demo/quote-to-shop" className="rounded-full bg-[#D80B3C] px-5 py-2.5 text-sm font-semibold text-white">
              Quote-to-shop demo
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
