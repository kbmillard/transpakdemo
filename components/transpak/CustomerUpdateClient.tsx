"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { DemoJob } from "@/lib/transpak-demo-types";
import { generateCustomerUpdateDraft } from "@/lib/transpak-demo-utils";
import { setCustomerUpdateApproved } from "@/lib/transpak-demo-state";

type CustomerUpdateClientProps = {
  job: DemoJob;
};

export function CustomerUpdateClient({ job }: CustomerUpdateClientProps) {
  const draft = useMemo(() => generateCustomerUpdateDraft(job), [job]);
  const [copied, setCopied] = useState(false);
  const [approved, setApproved] = useState(false);

  return (
    <div className="rounded-[1.75rem] border border-white/60 bg-white/75 p-6 backdrop-blur-xl sm:p-8">
      <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Customer-ready draft</p>
      <p className="mt-3 text-sm leading-relaxed text-[#19212A]/82">{draft}</p>
      <p className="mt-4 text-xs font-semibold text-[#19212A]/55">
        Human approval stays in the loop. This demo does not send email — copy only.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-[#19212A] px-4 py-2 text-xs font-semibold text-white"
          onClick={async () => {
            await navigator.clipboard.writeText(draft);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? "Copied" : "Copy update"}
        </button>
        <button
          type="button"
          className="rounded-full border border-[#19212A]/15 px-4 py-2 text-xs font-semibold"
          onClick={() => {
            setApproved(true);
            setCustomerUpdateApproved(job.id, true);
          }}
        >
          {approved ? "Marked approved (local)" : "Mark approved"}
        </button>
        <Link href={job.customerPortalRoute} className="rounded-full bg-[#D80B3C] px-4 py-2 text-xs font-semibold text-white">
          Open customer portal
        </Link>
        <Link href="/" className="rounded-full border border-[#19212A]/15 px-4 py-2 text-xs font-semibold">
          Back to home
        </Link>
      </div>
    </div>
  );
}
