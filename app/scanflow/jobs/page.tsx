import Link from "next/link";
import { demoJobs } from "@/lib/transpak-demo-seed";
import { StatusChip } from "@/components/transpak/StatusChip";

export default function ScanflowJobsPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Jobs</p>
        <h1 className="mt-1 text-2xl font-bold text-[#19212A]">Active demo jobs</h1>
      </div>
      <div className="space-y-3">
        {demoJobs.map((j) => (
          <Link
            key={j.id}
            href={j.qrRoute}
            className="block rounded-3xl border border-white/60 bg-white/85 p-4 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-[#D80B3C]">{j.id}</p>
                <p className="mt-1 text-base font-bold text-[#19212A]">{j.title}</p>
                <p className="mt-1 text-xs text-[#19212A]/60">{j.companyName}</p>
              </div>
              <StatusChip label={j.status} tone="neutral" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
