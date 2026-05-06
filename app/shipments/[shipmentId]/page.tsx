import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getShipmentById } from "@/lib/transpak-demo-utils";
import { QrCodeCard } from "@/components/transpak/QrCodeCard";
import { StatusChip } from "@/components/transpak/StatusChip";
import { DemoBadge } from "@/components/transpak/DemoBadge";
import { ShipmentScanPanel } from "@/components/transpak/ShipmentScanPanel";

type PageProps = {
  params: Promise<{ shipmentId: string }>;
};

export default async function ShipmentDetailPage({ params }: PageProps) {
  const { shipmentId } = await params;
  const s = getShipmentById(shipmentId);
  if (!s) notFound();

  const riskTone = s.riskLevel === "High" ? "danger" : s.riskLevel === "Medium" ? "warning" : "neutral";

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a]">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.06]">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[80vh] object-contain" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/command-center" className="text-sm font-semibold text-[#D80B3C]">
            ← Command Center
          </Link>
          <DemoBadge>Shipment</DemoBadge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">{s.id}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#19212A]">Shipment staging</h1>
              <p className="mt-2 text-sm text-[#19212A]/70">
                Job <span className="font-semibold">{s.jobId}</span> · {s.carrier}
              </p>
            </div>
            <StatusChip label={s.status} tone="neutral" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Lane</p>
              <p className="mt-1 text-sm font-bold">
                {s.origin} → {s.destination}
              </p>
              <p className="mt-4 text-xs font-semibold text-[#19212A]/55">ETA</p>
              <p className="mt-1 text-sm font-bold">{s.eta}</p>
            </div>
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Risk</p>
              <div className="mt-2">
                <StatusChip label={s.riskLevel} tone={riskTone} />
              </div>
              <p className="mt-4 text-xs font-semibold text-[#19212A]/55">Priority</p>
              <p className="mt-1 text-sm font-bold">{s.priority}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold">Required documents</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#19212A]/78">
                {s.requiredDocuments.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Missing documents</p>
              {s.missingDocuments.length === 0 ? (
                <p className="mt-2 text-sm text-[#19212A]/65">None listed.</p>
              ) : (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#19212A]/78">
                  {s.missingDocuments.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {s.blockers.length > 0 ? (
            <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4">
              <p className="text-sm font-bold text-amber-950">Blockers</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-950/90">
                {s.blockers.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">AI summary</p>
              <p className="mt-2 text-sm text-[#19212A]/80">{s.aiSummary}</p>
            </div>
            <div className="rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Next best action</p>
              <p className="mt-2 text-sm text-[#19212A]/80">{s.nextBestAction}</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold">Shipment QR</p>
            <div className="mt-4 max-w-md">
              <QrCodeCard title={s.id} route={s.qrRoute} subtitle={s.carrier} meta={`Status: ${s.status}`} />
            </div>
          </div>
        </div>

        <ShipmentScanPanel shipmentId={s.id} />
      </main>
    </div>
  );
}
