"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routeFromScanText } from "@/lib/scan-routing";

export function ScannerClient() {
  const router = useRouter();
  const [hint, setHint] = useState<string | null>(null);
  const [manual, setManual] = useState("");
  const cleanupRef = useRef<(() => Promise<void>) | null>(null);

  useEffect(() => {
    let cancelled = false;
    const start = async () => {
      try {
        const { Html5Qrcode } = await import("html5-qrcode");
        const html5 = new Html5Qrcode("scan-region");
        await html5.start(
          { facingMode: "environment" },
          { fps: 8, qrbox: { width: 260, height: 260 } },
          (decoded) => {
            const ok = routeFromScanText(decoded, router);
            setHint(ok ? `Opened: ${decoded}` : `Could not route: ${decoded}`);
          },
          () => {},
        );
        cleanupRef.current = async () => {
          await html5.stop();
          await html5.clear();
        };
      } catch {
        if (!cancelled) {
          setHint("Camera scanner unavailable in this browser — use manual entry or demo buttons.");
        }
      }
    };
    void start();
    return () => {
      cancelled = true;
      void cleanupRef.current?.();
    };
  }, [router]);

  return (
    <div className="space-y-4">
      <div
        id="scan-region"
        className="overflow-hidden rounded-3xl border border-white/60 bg-black shadow-[0_24px_80px_-24px_rgba(17,24,39,0.65)]"
      />

      {hint ? (
        <div className="rounded-2xl border border-white/60 bg-white/80 p-4 text-sm text-[#19212A]/80 backdrop-blur-xl">
          {hint}
        </div>
      ) : null}

      <div className="rounded-3xl border border-white/60 bg-white/80 p-4 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#D80B3C]">Manual entry</p>
        <p className="mt-2 text-sm text-[#19212A]/70">
          Paste a scanned route or demo URL (for example <span className="font-mono">/jobs/TPK-1001</span>).
        </p>
        <div className="mt-3 flex gap-2">
          <input
            value={manual}
            onChange={(e) => setManual(e.target.value)}
            className="w-full rounded-2xl border border-[#19212A]/12 bg-white px-3 py-2 text-sm outline-none focus:border-[#D80B3C]/45"
            placeholder="/jobs/TPK-1001"
          />
          <button
            type="button"
            className="rounded-2xl bg-[#19212A] px-4 py-2 text-sm font-semibold text-white"
            onClick={() => {
              const ok = routeFromScanText(manual, router);
              setHint(ok ? `Routing…` : "Could not parse route.");
            }}
          >
            Go
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/60 bg-white/80 p-4 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#D80B3C]">Demo scan buttons</p>
        <p className="mt-2 text-sm text-[#19212A]/70">
          Scan a job, asset, shipment, or portal QR code. Demo mode also includes quick scan buttons.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            { label: "Scan TPK-1001", path: "/jobs/TPK-1001" },
            { label: "Scan TPK-1008", path: "/jobs/TPK-1008" },
            { label: "Scan FORKLIFT-04", path: "/assets/FORKLIFT-04" },
            { label: "Scan SHP-2207", path: "/shipments/SHP-2207" },
          ].map((b) => (
            <button
              key={b.path}
              type="button"
              className="rounded-2xl border border-[#19212A]/10 bg-white px-4 py-3 text-left text-sm font-semibold text-[#19212A] hover:border-[#D80B3C]/35"
              onClick={() => router.push(b.path)}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
