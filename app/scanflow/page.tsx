import Link from "next/link";
import { AlertTriangle, Camera, QrCode } from "lucide-react";
import { demoJobs } from "@/lib/transpak-demo-seed";
import { StatusChip } from "@/components/transpak/StatusChip";
import { DemoBadge } from "@/components/transpak/DemoBadge";

export default function ScanflowHomePage() {
  const urgent = demoJobs.filter((j) => j.status === "Urgent" || j.priority === "Critical");
  const active = demoJobs.slice(0, 4);

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-[0_16px_60px_-24px_rgba(25,33,42,0.22)] backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Today</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#19212A]">ScanFlow field home</h1>
        <p className="mt-2 text-sm leading-relaxed text-[#19212A]/75">
          The first version can run as a web app or mobile PWA. If the workflow proves value, the same system can become a
          dedicated iOS or Android app.
        </p>
        <Link
          href="/scanflow/scanner"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#19212A] px-4 py-4 text-sm font-semibold text-white shadow-xl shadow-[#19212A]/25"
        >
          <Camera className="h-5 w-5" aria-hidden />
          Scan QR
        </Link>
      </div>

      <div className="rounded-3xl border border-amber-500/25 bg-amber-500/10 p-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-900" aria-hidden />
          <p className="text-sm font-bold text-amber-950">Urgent queue</p>
        </div>
        <div className="mt-3 space-y-2">
          {urgent.map((j) => (
            <Link
              key={j.id}
              href={j.qrRoute}
              className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-3 py-2 text-sm font-semibold text-[#19212A]"
            >
              <span>{j.id}</span>
              <StatusChip label={j.status} tone="danger" />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#19212A]">Assigned jobs</p>
          <DemoBadge>Demo dataset</DemoBadge>
        </div>
        <div className="mt-3 space-y-3">
          {active.map((j) => (
            <Link
              key={j.id}
              href={j.qrRoute}
              className="block rounded-3xl border border-white/60 bg-white/85 p-4 shadow-sm backdrop-blur-xl"
            >
              <p className="text-xs font-semibold text-[#D80B3C]">{j.id}</p>
              <p className="mt-1 text-base font-bold text-[#19212A]">{j.title}</p>
              <p className="mt-1 text-xs text-[#19212A]/60">{j.companyName}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/60 bg-white/85 p-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-[#19212A]" aria-hidden />
          <p className="text-sm font-bold">Quick links</p>
        </div>
        <div className="mt-3 grid gap-2">
          <Link href="/jobs/TPK-1001" className="rounded-2xl border border-[#19212A]/10 bg-white px-3 py-2 text-sm font-semibold">
            Open demo job QR
          </Link>
          <Link href="/" className="rounded-2xl border border-[#19212A]/10 bg-white px-3 py-2 text-sm font-semibold">
            Command center
          </Link>
        </div>
      </div>
    </div>
  );
}
