"use client";

import dynamic from "next/dynamic";

const CommandCenterView = dynamic(
  () => import("@/components/transpak/CommandCenterView").then((m) => ({ default: m.CommandCenterView })),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-slate-100 text-slate-600">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-[#D80B3C]"
          aria-hidden
        />
        <p className="text-sm font-medium">Loading command center…</p>
      </div>
    ),
  },
);

export function CommandCenterEntry() {
  return <CommandCenterView />;
}
