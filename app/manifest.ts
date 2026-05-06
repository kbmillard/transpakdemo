import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TransPak AI Command Center",
    short_name: "TransPak AI",
    description:
      "TransPak AI Command Center demo — public research leads, realistic workflow records, and functional QR routes.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6f8",
    theme_color: "#19212a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
