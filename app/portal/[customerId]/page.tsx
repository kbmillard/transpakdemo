import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getCustomerPortalById } from "@/lib/transpak-demo-utils";
import { DemoBadge } from "@/components/transpak/DemoBadge";
import { StatusChip } from "@/components/transpak/StatusChip";
import { demoJobs, shipmentRecords } from "@/lib/transpak-demo-seed";

type PageProps = {
  params: Promise<{ customerId: string }>;
};

export default async function PortalPage({ params }: PageProps) {
  const { customerId } = await params;
  const portal = getCustomerPortalById(customerId);
  if (!portal) notFound();

  const jobs = demoJobs.filter((j) => portal.visibleJobs.includes(j.id));
  const ships = shipmentRecords.filter((s) => portal.visibleShipments.includes(s.id));

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a]">
      <header className="border-b border-white/40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="TransPak" width={220} height={72} className="h-9 w-auto object-contain" />
            <DemoBadge>Secure demo</DemoBadge>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#D80B3C]">
            Exit portal
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Customer portal</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#19212A]">{portal.companyName}</h1>
          <p className="mt-2 text-sm text-[#19212A]/70">Contact: {portal.contactName}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#19212A]/75">
            Read-only demo portal. In production, access would be permissioned and connected to approved customer records.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#19212A]">Assigned contact: {portal.assignedContact}</p>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold">Job status</h2>
            <div className="mt-4 space-y-3">
              {jobs.map((j) => (
                <div key={j.id} className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-[#D80B3C]">{j.id}</p>
                      <p className="mt-1 font-bold">{j.title}</p>
                    </div>
                    <StatusChip label={j.status} tone="neutral" />
                  </div>
                  <Link href={j.qrRoute} className="mt-3 inline-flex text-xs font-semibold text-[#D80B3C]">
                    View shared link
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold">Shipments</h2>
            <div className="mt-4 space-y-3">
              {ships.map((s) => (
                <div key={s.id} className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-[#D80B3C]">{s.id}</p>
                      <p className="mt-1 text-sm font-bold">
                        {s.origin} → {s.destination}
                      </p>
                    </div>
                    <StatusChip label={s.status} tone="neutral" />
                  </div>
                  <p className="mt-2 text-xs text-[#19212A]/60">ETA: {s.eta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-bold">Documents</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {portal.documents.map((d) => (
              <div key={d.name} className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
                <p className="font-semibold">{d.name}</p>
                <p className="mt-1 text-xs text-[#19212A]/60">{d.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-bold">Latest updates</h2>
          <ul className="mt-4 space-y-3">
            {portal.updates.map((u) => (
              <li key={u.at + u.text} className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
                <p className="text-xs font-semibold text-[#19212A]/55">{u.at}</p>
                <p className="mt-2 text-sm text-[#19212A]/80">{u.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {portal.openIssues.length > 0 ? (
          <section className="rounded-[1.75rem] border border-amber-500/25 bg-amber-500/10 p-6">
            <h2 className="text-lg font-bold text-amber-950">Open issues</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-950/90">
              {portal.openIssues.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}
