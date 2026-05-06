"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveDemoUpdateFromFields } from "@/lib/transpak-demo-state";

type ShipmentScanPanelProps = {
  shipmentId: string;
};

export function ShipmentScanPanel({ shipmentId }: ShipmentScanPanelProps) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("Staging");

  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 backdrop-blur-xl">
      <p className="text-sm font-bold text-[#19212A]">Staging update (demo)</p>
      <label className="mt-4 block text-xs font-semibold text-[#19212A]/60" htmlFor={`ship-status-${shipmentId}`}>
        Status
      </label>
      <select
        id={`ship-status-${shipmentId}`}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-[#19212A]/12 bg-white px-3 py-2 text-sm"
      >
        {["Staging", "Loaded", "In transit", "Delivered", "Exception"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <label className="mt-4 block text-xs font-semibold text-[#19212A]/60" htmlFor={`ship-note-${shipmentId}`}>
        Note
      </label>
      <textarea
        id={`ship-note-${shipmentId}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        className="mt-2 w-full rounded-2xl border border-[#19212A]/12 bg-white px-3 py-2 text-sm"
      />
      <button
        type="button"
        className="mt-4 w-full rounded-2xl bg-[#19212A] px-4 py-3 text-sm font-semibold text-white"
        onClick={() => {
          saveDemoUpdateFromFields({
            relatedType: "shipment",
            relatedId: shipmentId,
            status,
            note,
            photoName: null,
          });
          router.refresh();
        }}
      >
        Save local update
      </button>
    </div>
  );
}
