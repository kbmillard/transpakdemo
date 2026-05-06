"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { demoJobs, quoteRequests } from "@/lib/transpak-demo-seed";
import { QrCodeCard } from "./QrCodeCard";
import { GlassCard } from "../transpak-ai/GlassCard";

const quote = quoteRequests[0]!;
const job = demoJobs.find((j) => j.id === "TPK-1001")!;

const STEPS = [
  {
    title: "Quote request arrives",
    body: "Inbound web quote captures dimensions, destination urgency, and attachments — routed into an intake queue.",
  },
  {
    title: "AI structures intake",
    body: "AI summarizes the request, flags missing fields, and suggests the right service lane for human review.",
  },
  {
    title: "Estimator review",
    body: "A human approves the structured intake, assigns owners, and confirms what must be true before the job is created.",
  },
  {
    title: "Job + QR created",
    body: "A demo job record is created with a customer-safe QR route for ScanFlow field updates.",
  },
  {
    title: "ScanFlow field update",
    body: "A technician scans the QR route, uploads a checkpoint photo, selects status, and saves an auditable update locally.",
  },
  {
    title: "Customer update draft",
    body: "A customer-ready update draft appears for approval — nothing sends automatically in demo mode.",
  },
  {
    title: "Executive dashboard reflects change",
    body: "Leadership sees refreshed queues, risks, and recent ScanFlow activity tied to the job lane.",
  },
] as const;

export function QuoteToShopDemo() {
  const [step, setStep] = useState(0);
  const progress = useMemo(() => Math.round(((step + 1) / STEPS.length) * 100), [step]);

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-24">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.06]">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[85vh] object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D80B3C]">Quote-to-shop</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
            Guided workflow demo — quote request to leadership visibility
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#19212A]/75 sm:text-base">
            This is a demo workflow using realistic TransPak-style data. The same pattern can be connected to approved
            internal systems later.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/jobs/TPK-1001" className="rounded-full bg-[#19212A] px-4 py-2 text-xs font-semibold text-white">
              Open job QR
            </Link>
            <Link href="/scanflow" className="rounded-full border border-[#19212A]/12 bg-white px-4 py-2 text-xs font-semibold">
              Open ScanFlow
            </Link>
            <Link href="/customer-updates/TPK-1001" className="rounded-full border border-[#19212A]/12 bg-white px-4 py-2 text-xs font-semibold">
              Generate customer update
            </Link>
            <Link href="/command-center" className="rounded-full bg-[#D80B3C] px-4 py-2 text-xs font-semibold text-white">
              View command center
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
          <GlassCard hover={false} className="h-fit p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#19212A]/55">Progress</p>
            <p className="mt-2 text-4xl font-bold tabular-nums text-[#19212A]">{progress}%</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#19212A]/10">
              <div className="h-full rounded-full bg-[#D80B3C]" style={{ width: `${progress}%` }} />
            </div>
            <ol className="mt-6 space-y-3">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    className={`flex w-full items-start gap-3 rounded-2xl px-3 py-2 text-left text-sm font-semibold ${
                      i === step ? "bg-[#19212A] text-white" : "text-[#19212A]/75 hover:bg-[#19212A]/5"
                    }`}
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/15 text-xs">
                      {i + 1}
                    </span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Step {step + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-[#19212A]">{STEPS[step].title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{STEPS[step].body}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-600" aria-hidden />
              </div>

              {step === 0 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-white/70 p-5">
                  <p className="text-sm font-bold">{quote.companyName}</p>
                  <p className="mt-2 text-sm text-[#19212A]/75">{quote.productDescription}</p>
                  <div className="mt-4 grid gap-2 text-sm text-[#19212A]/75 sm:grid-cols-2">
                    <p>
                      <span className="font-semibold text-[#19212A]">Dimensions:</span> {quote.dimensions}
                    </p>
                    <p>
                      <span className="font-semibold text-[#19212A]">Destination:</span> {quote.destination}
                    </p>
                    <p>
                      <span className="font-semibold text-[#19212A]">Urgency:</span> {quote.urgency}
                    </p>
                    <p>
                      <span className="font-semibold text-[#19212A]">Files:</span> {quote.uploadedFiles.join(", ")}
                    </p>
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-white/70 p-5">
                  <p className="text-sm font-semibold text-[#19212A]">AI summary</p>
                  <p className="mt-2 text-sm text-[#19212A]/78">{quote.aiSummary}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-amber-900">Missing fields</p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-amber-950/90">
                        {quote.missingFields.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-[#D80B3C]/25 bg-[#D80B3C]/10 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#8f0630]">Risk flags</p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#19212A]/80">
                        {quote.riskFlags.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-white/70 p-5">
                  <p className="text-sm font-semibold text-[#19212A]">Human approval</p>
                  <p className="mt-2 text-sm text-[#19212A]/78">
                    Assign packaging engineering + logistics reviewers. Confirm lifting points before releasing to shop.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-[#19212A] px-3 py-1 text-white">Sales owner: Jamie Alvarez</span>
                    <span className="rounded-full border border-[#19212A]/15 px-3 py-1">Estimator review required</span>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="mt-6">
                  <QrCodeCard title={job.title} subtitle={job.id} route={job.qrRoute} meta={`Priority: ${job.priority}`} />
                </div>
              ) : null}

              {step === 4 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-white/70 p-5">
                  <p className="text-sm font-semibold text-[#19212A]">Phone mock</p>
                  <p className="mt-2 text-sm text-[#19212A]/78">
                    Open <Link className="font-semibold text-[#D80B3C]" href="/jobs/TPK-1001">/jobs/TPK-1001</Link> on a
                    phone-width viewport and use the ScanFlow panel to upload a photo and save an update.
                  </p>
                </div>
              ) : null}

              {step === 5 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-white/70 p-5">
                  <p className="text-sm font-semibold text-[#19212A]">Customer-ready draft</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78">
                    Your packaging job is currently in shop review. The team has completed initial inspection and is waiting on
                    final weight confirmation before final crate release. The next update will be sent after the final
                    checkpoint photos are reviewed.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-[#19212A]/55">Human approval stays in the loop.</p>
                </div>
              ) : null}

              {step === 6 ? (
                <div className="mt-6 rounded-2xl border border-[#19212A]/10 bg-[#19212A] p-5 text-white">
                  <p className="text-sm font-semibold">Executive dashboard</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Jobs active", value: "10+" },
                      { label: "Docs needing attention", value: "6" },
                      { label: "ScanFlow updates", value: "Live (local demo)" },
                    ].map((x) => (
                      <div key={x.label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                        <p className="text-2xl font-bold">{x.value}</p>
                        <p className="mt-1 text-xs text-white/70">{x.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/command-center" className="mt-4 inline-flex rounded-full bg-[#D80B3C] px-4 py-2 text-xs font-semibold">
                    Open command center
                  </Link>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#19212A]/15 px-5 py-2 text-sm font-semibold disabled:opacity-40"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#19212A] px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
                  disabled={step === STEPS.length - 1}
                  onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
                >
                  Next
                </button>
              </div>
            </GlassCard>

            <p className="text-center text-xs text-[#19212A]/55">
              Start with one workflow. Prove value. Build from there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
