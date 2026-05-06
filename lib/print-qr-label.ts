function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type PrintQrLabelOpts = {
  dataUrl: string;
  title: string;
  subtitle?: string;
  url: string;
  meta?: string;
  footnote?: string;
};

/** Opens a compact window formatted for a single label and triggers the print dialog. */
export function printQrLabel(opts: PrintQrLabelOpts): void {
  if (typeof window === "undefined") return;
  const w = window.open("", "_blank", "noopener,noreferrer,width=420,height=720");
  if (!w) {
    window.alert("Pop-up blocked — allow pop-ups for this site to print labels.");
    return;
  }

  const sub = opts.subtitle ? `<p class="sub">${escapeHtml(opts.subtitle)}</p>` : "";
  const meta = opts.meta ? `<p class="meta">${escapeHtml(opts.meta)}</p>` : "";
  const foot = opts.footnote ? `<p class="foot">${escapeHtml(opts.footnote)}</p>` : "";

  w.document.open();
  w.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(opts.title)} — TransPak</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; color: #19212a; }
  .brand { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; color: #d80b3c; margin: 0 0 12px; }
  h1 { font-size: 15px; margin: 0 0 6px; line-height: 1.25; }
  .sub { font-size: 12px; margin: 0 0 4px; color: #334155; }
  .meta { font-size: 11px; margin: 0 0 12px; font-weight: 600; color: #b91c1c; }
  img { display: block; width: 200px; height: 200px; margin: 0 auto 12px; }
  .url { font-size: 10px; word-break: break-all; color: #64748b; margin: 0 0 8px; font-family: ui-monospace, monospace; }
  .foot { font-size: 10px; color: #94a3b8; margin: 0; }
  @media print {
    body { padding: 12px; }
  }
</style>
</head>
<body>
  <p class="brand">TRANSPAK · SCANFLOW</p>
  <h1>${escapeHtml(opts.title)}</h1>
  ${sub}
  ${meta}
  <img src="${opts.dataUrl}" width="200" height="200" alt="QR code"/>
  <p class="url">${escapeHtml(opts.url)}</p>
  ${foot}
  <script>
    window.addEventListener("load", function () {
      setTimeout(function () { window.print(); }, 100);
    });
  <\/script>
</body>
</html>`);
  w.document.close();
}
