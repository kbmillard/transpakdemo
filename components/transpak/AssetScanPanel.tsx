"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveDemoUpdateFromFields } from "@/lib/transpak-demo-state";

type AssetScanPanelProps = {
  assetId: string;
  assetName: string;
};

export function AssetScanPanel({ assetId, assetName }: AssetScanPanelProps) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("In progress");

  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 backdrop-blur-xl">
      <p className="text-sm font-bold text-[#19212A]">Maintenance update (demo)</p>
      <p className="mt-1 text-xs text-[#19212A]/60">{assetName}</p>
      <label className="mt-4 block text-xs font-semibold text-[#19212A]/60" htmlFor={`asset-status-${assetId}`}>
        Status
      </label>
      <select
        id={`asset-status-${assetId}`}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-[#19212A]/12 bg-white px-3 py-2 text-sm"
      >
        {["Ready", "In progress", "Blocked", "Needs PM"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <label className="mt-4 block text-xs font-semibold text-[#19212A]/60" htmlFor={`asset-note-${assetId}`}>
        Note
      </label>
      <textarea
        id={`asset-note-${assetId}`}
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
            relatedType: "asset",
            relatedId: assetId,
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
