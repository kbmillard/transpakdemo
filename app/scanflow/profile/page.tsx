import { DemoBadge } from "@/components/transpak/DemoBadge";

export default function ScanflowProfilePage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Profile</p>
        <h1 className="mt-1 text-2xl font-bold text-[#19212A]">Field technician</h1>
      </div>
      <div className="rounded-3xl border border-white/60 bg-white/85 p-5 backdrop-blur-xl">
        <p className="text-sm font-semibold text-[#19212A]">Demo operator</p>
        <p className="mt-2 text-sm text-[#19212A]/70">
          This profile would sync to your identity provider in production. Demo mode stores updates locally in your browser.
        </p>
        <div className="mt-4">
          <DemoBadge>Local-only demo state</DemoBadge>
        </div>
      </div>
    </div>
  );
}
