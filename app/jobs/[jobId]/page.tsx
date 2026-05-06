import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { getJobById } from "@/lib/transpak-demo-utils";
import { JobScanFlowPanel } from "@/components/transpak/JobScanFlowPanel";
import { StatusChip } from "@/components/transpak/StatusChip";
import { DemoBadge } from "@/components/transpak/DemoBadge";
import { GlassCard } from "@/components/transpak-ai/GlassCard";

type PageProps = {
  params: Promise<{ jobId: string }>;
};

export default async function JobDetailPage({ params }: PageProps) {
  const { jobId } = await params;
  const job = getJobById(jobId);
  if (!job) notFound();

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a]">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.06]">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[80vh] object-contain" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/command-center" className="text-sm font-semibold text-[#D80B3C]">
            ← Command Center
          </Link>
          <DemoBadge>Demo job</DemoBadge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">{job.id}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#19212A]">{job.title}</h1>
              <p className="mt-2 text-sm text-[#19212A]/70">{job.companyName}</p>
            </div>
            <StatusChip label={job.status} tone="neutral" />
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#19212A]/78">{job.description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard hover={false} className="p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Service</p>
              <p className="mt-1 text-sm font-bold">{job.serviceType}</p>
            </GlassCard>
            <GlassCard hover={false} className="p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Route</p>
              <p className="mt-1 text-sm font-bold">
                {job.origin} → {job.destination}
              </p>
            </GlassCard>
            <GlassCard hover={false} className="p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Dimensions / weight</p>
              <p className="mt-1 text-sm font-bold">
                {job.dimensions} · {job.weight}
              </p>
            </GlassCard>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-[#19212A]">Required documents</p>
              <ul className="mt-3 space-y-2">
                {job.requiredDocuments.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-[#19212A]/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-[#19212A]">Required photos</p>
              <ul className="mt-3 space-y-2">
                {job.requiredPhotos.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[#19212A]/80">
                    <CheckCircle2 className="h-4 w-4 text-sky-600" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {job.blockers.length > 0 ? (
            <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4">
              <p className="text-sm font-bold text-amber-950">Blockers</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-950/90">
                {job.blockers.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">AI summary</p>
              <p className="mt-2 text-sm text-[#19212A]/80">{job.aiSummary}</p>
            </div>
            <div className="rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Next best action</p>
              <p className="mt-2 text-sm text-[#19212A]/80">{job.nextBestAction}</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-lg font-bold text-[#19212A]">Timeline</p>
            <div className="mt-4 space-y-3">
              {job.timeline.map((t) => (
                <div key={t.at + t.label} className="rounded-2xl border border-white/60 bg-white/70 p-4">
                  <p className="text-xs font-semibold text-[#19212A]/55">{new Date(t.at).toLocaleString()}</p>
                  <p className="mt-1 text-sm font-bold">{t.label}</p>
                  <p className="mt-1 text-sm text-[#19212A]/75">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <JobScanFlowPanel job={job} />
      </main>
    </div>
  );
}
