"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { DemoJob } from "@/lib/transpak-demo-types";
import { generateAiSummaryForUpdate } from "@/lib/transpak-demo-utils";
import { saveDemoUpdateFromFields } from "@/lib/transpak-demo-state";
import { QrCodeCard } from "./QrCodeCard";
import { DemoBadge } from "./DemoBadge";

const STATUSES = [
  "Ready",
  "In progress",
  "Blocked",
  "Waiting on paperwork",
  "Photo review needed",
  "Loaded",
  "Customer update needed",
  "Completed",
] as const;

type JobScanFlowPanelProps = {
  job: DemoJob;
};

export function JobScanFlowPanel({ job }: JobScanFlowPanelProps) {
  const router = useRouter();
  const [status, setStatus] = useState<string>(STATUSES[1]);
  const [note, setNote] = useState("");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [aiSummary, setAiSummary] = useState<string | null>(null);

  const draftSummary = useMemo(
    () => generateAiSummaryForUpdate({ jobId: job.id, status, note, jobTitle: job.title }),
    [job.id, job.title, note, status],
  );

  return (
    <div className="mt-8 rounded-3xl border border-white/60 bg-gradient-to-b from-[#19212A] to-[#111827] p-5 text-white shadow-[0_24px_80px_-24px_rgba(17,24,39,0.65)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">ScanFlow actions</p>
          <p className="text-sm font-semibold text-white/90">Field update (demo)</p>
        </div>
        <DemoBadge>Offline-safe demo</DemoBadge>
      </div>

      <label className="mt-4 block text-xs font-semibold text-white/70" htmlFor={`status-${job.id}`}>
        Status
      </label>
      <select
        id={`status-${job.id}`}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s} className="text-[#19212A]">
            {s}
          </option>
        ))}
      </select>

      <label className="mt-4 block text-xs font-semibold text-white/70" htmlFor={`note-${job.id}`}>
        Text note
      </label>
      <textarea
        id={`note-${job.id}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/35"
        placeholder="What changed on the floor?"
      />

      <div className="mt-4">
        <label className="text-xs font-semibold text-white/70">Photo upload</label>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          className="mt-2 block w-full text-sm text-white/80 file:mr-3 file:rounded-full file:border-0 file:bg-white/15 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white"
          onChange={(e) => {
            const f = e.target.files?.[0];
            setPhotoName(f?.name ?? null);
          }}
        />
        {photoName ? <p className="mt-2 text-xs text-emerald-300">Selected: {photoName}</p> : null}
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/85"
      >
        Voice note placeholder — ready for iOS speech capture.
      </button>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setAiSummary(draftSummary)}
          className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
        >
          Generate AI summary
        </button>
        <button
          type="button"
          onClick={() => {
            saveDemoUpdateFromFields({
              relatedType: "job",
              relatedId: job.id,
              status,
              note,
              photoName,
            });
            router.refresh();
          }}
          className="rounded-2xl bg-[#D80B3C] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#D80B3C]/25"
        >
          Save update
        </button>
      </div>

      {aiSummary ? (
        <div className="mt-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 text-sm text-emerald-50">
          {aiSummary}
        </div>
      ) : null}

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <Link
          href={`/customer-updates/${job.id}`}
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Customer update generator
        </Link>
        <Link
          href={job.customerPortalRoute}
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Open customer portal
        </Link>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/55">Job QR</p>
        <div className="mt-3 scale-90 origin-top-left">
          <QrCodeCard title={job.title} route={job.qrRoute} subtitle={job.id} meta={`Status: ${job.status}`} />
        </div>
      </div>
    </div>
  );
}
