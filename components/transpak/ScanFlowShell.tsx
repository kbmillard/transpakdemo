import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileBottomNav } from "./MobileBottomNav";
import { DemoBadge } from "./DemoBadge";

type ScanFlowShellProps = {
  title?: string;
  children: ReactNode;
};

export function ScanFlowShell({ title = "ScanFlow", children }: ScanFlowShellProps) {
  return (
    <div className="relative min-h-screen bg-[#f4f6f8] pb-24 text-[#19212a]">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.07]">
        <Image src="/brand/mark.png" alt="" width={512} height={512} className="h-auto max-h-[70vh] w-[85vw] object-contain" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3 px-4 py-3">
          <Link href="/scanflow" className="flex items-center gap-2">
            <Image src="/brand/mark.png" alt="TransPak" width={36} height={36} className="h-9 w-9 object-contain" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#D80B3C]">TransPak</p>
              <p className="text-sm font-bold leading-none">{title}</p>
            </div>
          </Link>
          <DemoBadge>Demo mode</DemoBadge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-md px-4 py-4">{children}</main>
      <MobileBottomNav />
    </div>
  );
}
