import { ScannerClient } from "@/components/transpak/ScannerClient";

export default function ScannerPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Scanner</p>
        <h1 className="mt-1 text-2xl font-bold text-[#19212A]">Scan a QR code</h1>
        <p className="mt-2 text-sm text-[#19212A]/70">
          Scan a job, asset, shipment, or portal QR code. Demo mode also includes quick scan buttons.
        </p>
      </div>
      <ScannerClient />
    </div>
  );
}
