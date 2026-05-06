import type { ReactNode } from "react";
import { ScanFlowShell } from "@/components/transpak/ScanFlowShell";

export default function ScanflowLayout({ children }: { children: ReactNode }) {
  return <ScanFlowShell>{children}</ScanFlowShell>;
}
