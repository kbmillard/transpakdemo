import Image from "next/image";
import Link from "next/link";
import { PrintFullSheetButton } from "@/components/transpak/PrintFullSheetButton";
import { assetRecords, customerPortalRecords, demoJobs, shipmentRecords } from "@/lib/transpak-demo-seed";
import { QrCodeCard } from "@/components/transpak/QrCodeCard";
import { QrCodeGrid } from "@/components/transpak/QrCodeGrid";

export default function QrDemoSheetPage() {
  const portals = customerPortalRecords.slice(0, 4);

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a] print:bg-white">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.05] print:hidden">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[85vh] object-contain" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/75 backdrop-blur-xl print:static print:bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="TransPak" width={220} height={72} className="h-9 w-auto object-contain" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D80B3C]">ScanFlow</p>
              <p className="text-lg font-bold">QR Demo Sheet</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 print:hidden">
            <PrintFullSheetButton />
            <Link href="/" className="text-sm font-semibold text-[#D80B3C]">
              ← Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-[#19212A]/10 bg-white/75 p-6 backdrop-blur-xl print:border-[#19212A]/15">
          <h1 className="text-2xl font-bold tracking-tight text-[#19212A]">TransPak ScanFlow QR Demo Sheet</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#19212A]/75">
            Demo QR codes route to public demo pages. Replace with approved internal URLs when connected.
          </p>
          <p className="mt-3 text-sm text-[#19212A]/70">
            This demo uses real public lead examples, realistic TransPak-style job records, and functional QR codes to show how
            the system would work once connected to approved internal data.
          </p>
          <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#19212A]/85 print:hidden">
            <strong className="text-[#19212A]">Where to print:</strong> Each job, asset, and shipment record in the app includes
            the same QR with a <strong>Print label</strong> button — use that for a single sticker. This page is optional: use it
            when you want every demo QR in one place, <strong>Print label</strong> per card, or <strong>Print full sheet</strong>{" "}
            for the entire page.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Jobs</h2>
          <QrCodeGrid>
            {demoJobs.map((j) => (
              <QrCodeCard
                key={j.id}
                title={j.title}
                subtitle={j.id}
                route={j.qrRoute}
                meta={`Status: ${j.status}`}
                footnote="Suggested scan action: open job detail + ScanFlow panel"
              />
            ))}
          </QrCodeGrid>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Assets</h2>
          <QrCodeGrid>
            {assetRecords.map((a) => (
              <QrCodeCard
                key={a.id}
                title={a.name}
                subtitle={a.id}
                route={a.qrRoute}
                meta={`Status: ${a.status}`}
                footnote="Suggested scan action: log maintenance note"
              />
            ))}
          </QrCodeGrid>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Shipments</h2>
          <QrCodeGrid>
            {shipmentRecords.map((s) => (
              <QrCodeCard
                key={s.id}
                title={s.id}
                subtitle={s.carrier}
                route={s.qrRoute}
                meta={`Risk: ${s.riskLevel}`}
                footnote="Suggested scan action: confirm staging/docs"
              />
            ))}
          </QrCodeGrid>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Customer portals</h2>
          <QrCodeGrid>
            {portals.map((p) => (
              <QrCodeCard
                key={p.customerId}
                title={p.companyName}
                subtitle={p.customerId}
                route={p.portalRoute}
                meta="Read-only portal"
                footnote="Suggested scan action: share externally only after approval"
              />
            ))}
          </QrCodeGrid>
        </section>
      </main>
    </div>
  );
}
