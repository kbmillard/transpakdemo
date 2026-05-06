"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Home, LineChart, ScanLine, User } from "lucide-react";

const items = [
  { href: "/scanflow", label: "Home", icon: Home },
  { href: "/scanflow/scanner", label: "Scan", icon: ScanLine },
  { href: "/scanflow/jobs", label: "Jobs", icon: Briefcase },
  { href: "/", label: "Updates", icon: LineChart },
  { href: "/scanflow/profile", label: "Profile", icon: User },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/50 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/scanflow"
              ? pathname === "/scanflow"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={`${href}-${label}`}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-semibold ${
                active ? "text-[#D80B3C]" : "text-[#19212A]/55"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
