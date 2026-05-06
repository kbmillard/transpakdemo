import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAssetById } from "@/lib/transpak-demo-utils";
import { QrCodeCard } from "@/components/transpak/QrCodeCard";
import { StatusChip } from "@/components/transpak/StatusChip";
import { DemoBadge } from "@/components/transpak/DemoBadge";
import { AssetScanPanel } from "@/components/transpak/AssetScanPanel";

type PageProps = {
  params: Promise<{ assetId: string }>;
};

export default async function AssetDetailPage({ params }: PageProps) {
  const { assetId } = await params;
  const asset = getAssetById(assetId);
  if (!asset) notFound();

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
          <DemoBadge>Asset record</DemoBadge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">{asset.id}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#19212A]">{asset.name}</h1>
              <p className="mt-2 text-sm text-[#19212A]/70">
                {asset.facility} · {asset.location}
              </p>
            </div>
            <StatusChip label={asset.status} tone="neutral" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Type</p>
              <p className="mt-1 text-sm font-bold">{asset.assetType}</p>
              <p className="mt-4 text-xs font-semibold text-[#19212A]/55">Last service</p>
              <p className="mt-1 text-sm font-bold">{asset.lastService}</p>
            </div>
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">AI summary</p>
              <p className="mt-2 text-sm text-[#19212A]/78">{asset.aiSummary}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold">Open issues</p>
            {asset.openIssues.length === 0 ? (
              <p className="mt-2 text-sm text-[#19212A]/65">None logged.</p>
            ) : (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#19212A]/80">
                {asset.openIssues.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold">Maintenance notes</p>
            <ul className="mt-2 space-y-2 text-sm text-[#19212A]/78">
              {asset.maintenanceNotes.map((n) => (
                <li key={n} className="rounded-2xl border border-white/60 bg-white/70 px-3 py-2">
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Next best action</p>
            <p className="mt-2 text-sm text-[#19212A]/80">{asset.nextBestAction}</p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold">Asset QR</p>
            <div className="mt-4 max-w-md">
              <QrCodeCard title={asset.name} route={asset.qrRoute} subtitle={asset.id} meta={`Status: ${asset.status}`} />
            </div>
          </div>
        </div>

        <AssetScanPanel assetId={asset.id} assetName={asset.name} />
      </main>
    </div>
  );
}
