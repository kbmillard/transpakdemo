"use client";

import { useSyncExternalStore } from "react";
import type { ScanFlowUpdate } from "@/lib/transpak-demo-types";
import { getDemoUpdates } from "@/lib/transpak-demo-state";

function subscribe(onStoreChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === "transpak-demo-updates" || e.key === null) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("transpak-demo-updates", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("transpak-demo-updates", onStoreChange);
  };
}

export function useDemoUpdates(): ScanFlowUpdate[] {
  return useSyncExternalStore(subscribe, () => getDemoUpdates(), () => []);
}
