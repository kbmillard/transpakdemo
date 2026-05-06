"use client";

import { useRouter } from "next/navigation";
import { clearDemoUpdates } from "@/lib/transpak-demo-state";

export function ClearDemoUpdatesButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        clearDemoUpdates();
        router.refresh();
      }}
      className="rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
    >
      Clear demo updates
    </button>
  );
}
