import type { ReactNode } from "react";

type QrCodeGridProps = {
  children: ReactNode;
};

export function QrCodeGrid({ children }: QrCodeGridProps) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">{children}</div>;
}
