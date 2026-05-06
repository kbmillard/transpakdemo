import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getJobById } from "@/lib/transpak-demo-utils";
import { CustomerUpdateClient } from "@/components/transpak/CustomerUpdateClient";
import { DemoBadge } from "@/components/transpak/DemoBadge";

type PageProps = {
  params: Promise<{ jobId: string }>;
};

export default async function CustomerUpdatePage({ params }: PageProps) {
  const { jobId } = await params;
  const job = getJobById(jobId);
  if (!job) notFound();

  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-16 text-[#19212a]">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.06]">
        <Image src="/brand/mark.png" alt="" width={900} height={900} className="max-h-[80vh] object-contain" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={`/jobs/${job.id}`} className="text-sm font-semibold text-[#D80B3C]">
            ← Job
          </Link>
          <DemoBadge>Human-approved drafting</DemoBadge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">{job.id}</p>
          <h1 className="mt-2 text-3xl font-bold text-[#19212A]">Customer update generator</h1>
          <p className="mt-3 text-sm text-[#19212A]/75">
            Internal context is summarized into customer-safe language. Review before sharing externally.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Status</p>
              <p className="mt-1 text-sm font-bold">{job.status}</p>
            </div>
            <div className="rounded-2xl border border-[#19212A]/10 bg-white/70 p-4">
              <p className="text-xs font-semibold text-[#19212A]/55">Blockers</p>
              <p className="mt-1 text-sm font-bold">{job.blockers.length ? job.blockers.join("; ") : "None listed"}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold">Photo / doc checkpoints (demo)</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {job.requiredPhotos.map((p) => (
                <li key={p} className="rounded-2xl border border-white/60 bg-white/70 px-3 py-2 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CustomerUpdateClient job={job} />
      </main>
    </div>
  );
}
