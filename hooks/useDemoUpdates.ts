"use client";

import { useEffect, useState } from "react";
import type { ScanFlowUpdate } from "@/lib/transpak-demo-types";
import { getDemoUpdates } from "@/lib/transpak-demo-state";

/**
 * Read ScanFlow updates from localStorage only after mount so SSR and the first
 * client render match (empty). Avoids useSyncExternalStore + localStorage
 * hydration failures on Vercel/production.
 */
export function useDemoUpdates(): ScanFlowUpdate[] {
  const [updates, setUpdates] = useState<ScanFlowUpdate[]>([]);

  useEffect(() => {
    const sync = () => setUpdates(getDemoUpdates());
    sync();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "transpak-demo-updates" || e.key === null) sync();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("transpak-demo-updates", sync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("transpak-demo-updates", sync);
    };
  }, []);

  return updates;
}
