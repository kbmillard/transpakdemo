"use client";

import { useEffect, useState } from "react";
import { getDemoUrl } from "@/lib/transpak-demo-utils";

type QrCodeCardProps = {
  title: string;
  subtitle?: string;
  route: string;
  meta?: string;
  footnote?: string;
};

export function QrCodeCard({ title, subtitle, route, meta, footnote }: QrCodeCardProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const QRCode = (await import("qrcode")).default;
      const url = getDemoUrl(route);
      const d = await QRCode.toDataURL(url, {
        width: 200,
        margin: 1,
        color: { dark: "#19212A", light: "#ffffffff" },
      });
      if (!cancelled) setDataUrl(d);
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [route]);

  const url = typeof window !== "undefined" ? getDemoUrl(route) : route;

  return (
    <div className="flex flex-col rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_12px_40px_-18px_rgba(25,33,42,0.2)] backdrop-blur-xl print:break-inside-avoid">
      <div className="flex items-start gap-4">
        <div className="flex h-[200px] w-[200px] shrink-0 items-center justify-center rounded-xl border border-[#19212A]/10 bg-white">
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={dataUrl} alt="" className="h-[180px] w-[180px]" />
          ) : (
            <span className="text-xs text-[#19212A]/45">Generating…</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-[#19212A]">{title}</p>
          {subtitle ? <p className="mt-1 text-xs text-[#19212A]/65">{subtitle}</p> : null}
          {meta ? <p className="mt-2 text-xs font-medium text-[#D80B3C]">{meta}</p> : null}
          <p className="mt-3 break-all font-mono text-[11px] text-[#19212A]/55">{url}</p>
          {footnote ? <p className="mt-2 text-[11px] text-[#19212A]/45">{footnote}</p> : null}
        </div>
      </div>
    </div>
  );
}
