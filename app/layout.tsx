import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TransPak AI Command Center",
  description:
    "Operational demo workspace — public-fit leads, quote intake, jobs, shipments, documents, ScanFlow field updates, and customer-ready drafts.",
  applicationName: "TransPak AI Command Center",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "TransPak AI Command Center",
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#19212a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Fixed brand watermark (mark reads better at low opacity than full wordmark). Assets: public/brand/mark.png */}
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center" aria-hidden>
          <Image
            src="/brand/mark.png"
            alt=""
            width={1024}
            height={1024}
            className="h-auto w-[min(88vw,540px)] max-h-[min(72vh,520px)] max-w-[1024px] select-none object-contain opacity-[0.16] sm:opacity-[0.14]"
            sizes="(max-width: 768px) 88vw, 540px"
            priority
          />
          {/* Light edge wash only — previous full-screen tint hid the mark entirely */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_50%_48%,transparent_0%,transparent_50%,rgba(244,246,248,0.28)_78%,rgba(244,246,248,0.72)_100%)]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
