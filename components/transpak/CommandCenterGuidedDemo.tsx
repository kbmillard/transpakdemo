"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const DEMO_PATH = [
  { n: 1, label: "Quote", href: "/demo/quote-to-shop" },
  { n: 2, label: "Job", href: "/jobs/TPK-1001" },
  { n: 3, label: "QR", href: "/jobs/TPK-1001" },
  { n: 4, label: "ScanFlow", href: "/scanflow" },
  { n: 5, label: "Customer Update", href: "/customer-updates/TPK-1001" },
  { n: 6, label: "Command Center", href: "/#command-center-kpis" },
] as const;

const STEPS = [
  {
    title: "Review the quote request",
    body:
      "See how an inbound request becomes a structured intake record with missing fields, risks, and a suggested next step.",
    href: "/demo/quote-to-shop",
    cta: "Review Quote",
    primary: true,
  },
  {
    title: "Open the job",
    body: "View the realistic TransPak-style job created from the intake workflow.",
    href: "/jobs/TPK-1001",
    cta: "Open Job TPK-1001",
    primary: false,
  },
  {
    title: "View the QR code",
    body: "Every job, asset, or shipment can have a scannable route into the right workflow.",
    href: "/jobs/TPK-1001",
    cta: "Open Job QR",
    primary: false,
  },
  {
    title: "Add a field update",
    body: "Use ScanFlow to change status, add a note, upload a photo, and generate a simple AI summary.",
    href: "/scanflow",
    cta: "Open ScanFlow",
    primary: false,
  },
  {
    title: "Generate customer update",
    body:
      "Turn internal status, blockers, and checkpoints into a customer-ready update that still requires human approval.",
    href: "/customer-updates/TPK-1001",
    cta: "Generate Update",
    primary: false,
  },
] as const;

export function CommandCenterGuidedDemo() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
      <div className="min-w-0 flex-1 space-y-3">
        <nav
          aria-label="Demo path"
          className="flex flex-wrap items-center gap-x-1 gap-y-2 rounded-lg border border-slate-200 bg-white px-2 py-2 text-[11px] shadow-sm sm:gap-x-2 sm:px-3"
        >
          <span className="hidden pr-1 font-semibold uppercase tracking-wide text-slate-500 sm:inline">Demo path</span>
          {DEMO_PATH.map((item, i) => (
            <span key={item.href} className="flex items-center">
              {i > 0 ? (
                <ChevronRight className="mx-0.5 hidden h-3.5 w-3.5 shrink-0 text-slate-300 sm:inline" aria-hidden />
              ) : null}
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 sm:gap-1.5 sm:px-2"
              >
                <span className="tabular-nums text-slate-400">{item.n}.</span>
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <section
          aria-labelledby="start-here-heading"
          className="rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-100 px-4 py-3 sm:px-5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Start here</p>
            <h2 id="start-here-heading" className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
              Quote-to-Shop AI Demo
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Follow one realistic workflow from quote intake to shop update to customer-ready communication. This shows how
              the AI operating layer can organize work, connect field updates, keep human approval in the loop, and give
              leadership visibility without replacing existing systems.
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <ol className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-slate-200">
              {STEPS.map((step, index) => (
                <li key={step.href} className="lg:px-4 lg:first:pl-0 lg:last:pr-0">
                  <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50/50 p-3 lg:border-0 lg:bg-transparent lg:p-0">
                    <span className="text-[10px] font-semibold tabular-nums text-slate-400">Step {index + 1}</span>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-1.5 flex-1 text-[11px] leading-snug text-slate-600">{step.body}</p>
                    <Link
                      href={step.href}
                      className={
                        step.primary
                          ? "mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#D80B3C] px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-[#c00a35] sm:w-auto"
                          : "mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-800 shadow-sm hover:bg-slate-50 sm:w-auto"
                      }
                    >
                      {step.cta}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <aside
        className="shrink-0 rounded-lg border border-slate-200 bg-slate-50/90 px-4 py-3 text-xs leading-relaxed text-slate-600 shadow-sm xl:sticky xl:top-24 xl:w-[min(100%,280px)]"
        aria-labelledby="how-to-read-heading"
      >
        <p id="how-to-read-heading" className="font-semibold text-slate-900">
          How to read this demo
        </p>
        <p className="mt-2">
          This is demo mode. The leads are public research examples, the jobs are realistic TransPak-style records, and the QR
          codes are functional demo routes. In production, the same workflow would connect only to approved internal systems.
        </p>
      </aside>
    </div>
  );
}
