"use client";

import { Printer } from "lucide-react";

export function PrintFullSheetButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-[#19212A]/15 bg-white px-3 py-2 text-sm font-semibold text-[#19212A] shadow-sm hover:bg-slate-50"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print full sheet
    </button>
  );
}
