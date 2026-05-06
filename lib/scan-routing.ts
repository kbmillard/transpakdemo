import { assetRecords, demoJobs, shipmentRecords } from "./transpak-demo-seed";

function pathFromText(text: string): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    const u = new URL(trimmed);
    return u.pathname + u.search;
  } catch {
    if (trimmed.startsWith("/")) return trimmed.split("?")[0] ?? trimmed;
  }
  const job = demoJobs.map((j) => j.id).find((id) => trimmed.includes(id));
  if (job) return `/jobs/${job}`;
  const asset = assetRecords.map((a) => a.id).find((id) => trimmed.includes(id));
  if (asset) return `/assets/${asset}`;
  const ship = shipmentRecords.map((s) => s.id).find((id) => trimmed.includes(id));
  if (ship) return `/shipments/${ship}`;
  const portal = trimmed.match(/CUST-[A-Z0-9-]+/);
  if (portal) return `/portal/${portal[0]}`;
  return null;
}

export function routeFromScanText(text: string, router: { push: (href: string) => void }): boolean {
  const p = pathFromText(text);
  if (!p) return false;
  router.push(p);
  return true;
}
