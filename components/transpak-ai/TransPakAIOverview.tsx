"use client";

import Link from "next/link";
import { useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Globe2,
  Layers,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Monitor,
  Printer,
  QrCode,
  Radar,
  Shield,
  Smartphone,
  Sparkles,
  XCircle,
} from "lucide-react";
import {
  appReadyWorkflowsSection,
  buildPathTransitionSection,
  buildPhilosophySectionHeader,
  demoSteps,
  founderVisionStatementAttribution,
  founderVisionStatementParagraphs,
  heroMetrics,
  heroNextActions,
  moneyballMonthlyUsageSectionSubtitle,
  moneyballMonthlyUsageSectionTitle,
  moneyballPilotIncluded,
  moneyballPilotNotIncluded,
  moneyballPilotSectionBody,
  moneyballPilotSectionIntro,
  moneyballPilotSectionSubtitle,
  moneyballPilotTrustNote,
  moneyballPilotUsageNote,
  opportunityTabs,
  pilotPhases,
} from "@/lib/transpak-ai-data";
import { AvoidedCostsComparison } from "./AvoidedCostsComparison";
import { CostCards } from "./CostCards";
import { DemoFlow } from "./DemoFlow";
import { FeatureTabs } from "./FeatureTabs";
import { GlassCard } from "./GlassCard";
import { TransPakLogo } from "./TransPakLogo";

const appReadyCardIcons = [Monitor, Smartphone, Globe2, ListChecks] as const;

const navItems = [
  { id: "vision", label: "Vision" },
  { id: "opportunities", label: "AI Opportunities" },
  { id: "app-workflows", label: "App-ready" },
  { id: "paths", label: "Build path" },
  { id: "avoided", label: "Savings" },
  { id: "pilot", label: "Pilot Plan" },
  { id: "demo", label: "Demo Flow" },
  { id: "live-demo", label: "Live demo" },
] as const;

const oneLayerStrategy = {
  title: "One layer at a time",
  body: "Do not rebuild the whole company on day one. Start with one workflow, prove it reduces workload or improves visibility, then add the next layer.",
} as const;

const ideasDuringWorkCard = {
  title: "The best ideas appear during the work",
  body: "AI development should stay flexible. As TransPak’s teams use each layer, new use cases will surface from real workflows — not from guessing everything upfront.",
} as const;

const bigIdeas = [
  {
    title: "See opportunity earlier",
    body: "AI monitors markets, accounts, facility growth, industry signals, and geography to help sales teams find better-fit prospects.",
    icon: Radar,
  },
  {
    title: "Move work faster",
    body: "AI turns calls, emails, quote requests, documents, and job notes into structured actions instead of scattered information.",
    icon: LayoutDashboard,
  },
  {
    title: "Protect margin",
    body: "AI flags cost drift, freight changes, material waste, quote risk, and repeated job patterns before they become invisible losses.",
    icon: Shield,
  },
  {
    title: "Improve customer experience",
    body: "AI helps generate clearer updates, faster responses, better document access, and more consistent communication.",
    icon: Sparkles,
  },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function TransPakAIOverview() {
  const onNav = useCallback((id: string) => () => scrollToId(id), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-[#19212A]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#D80B3C]/12 blur-[100px]" />
        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-[#19212A]/10 blur-[90px]" />
        <div className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/10 blur-[80px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="flex shrink-0 items-center gap-2 rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D80B3C]"
            aria-label="TransPak AI overview home"
          >
            <TransPakLogo variant="full" priority />
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-[#19212A]/8 bg-white/50 px-1 py-1 text-sm font-semibold text-[#19212A]/75 backdrop-blur-md lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={onNav(item.id)}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-[#19212A]/5 hover:text-[#19212A]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={onNav("pilot")}
            className="hidden shrink-0 rounded-full bg-[#D80B3C] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#D80B3C]/25 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
          >
            Start with the first AI layer
          </button>
        </div>

        <div className="border-t border-white/30 px-4 py-2 lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={onNav(item.id)}
                className="whitespace-nowrap rounded-full border border-[#19212A]/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#19212A]/85"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={onNav("pilot")}
              className="whitespace-nowrap rounded-full bg-[#D80B3C] px-3 py-1.5 text-xs font-semibold text-white"
            >
              Start with the first AI layer
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="pointer-events-none absolute right-6 top-10 sm:right-10 lg:right-16">
            <TransPakLogo
              variant="mark"
              className="h-36 w-auto object-contain opacity-[0.07] sm:h-44"
            />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C] sm:text-sm">
                AI Strategy Overview for TransPak
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-[#19212A] sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]">
                Keep current platforms. Add the AI operating layer on top.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                An AI operating layer that works with TransPak’s existing platforms and workflows — helping organize lead
                intelligence, quote intake, proposal support, document review, customer updates, shop visibility,
                distribution activity, and leadership reporting.
              </p>
              <p className="mt-5 max-w-xl border-l-2 border-[#D80B3C]/45 pl-4 text-base font-medium leading-relaxed text-[#19212A]/90 sm:text-lg">
                The goal is not to replace current systems. The goal is to make the systems TransPak already uses
                smarter, faster, and easier to act on.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                The plan stays simple: build one useful AI layer at a time, prove it creates value, then expand only
                where the return is obvious.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onNav("opportunities")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#19212A] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#111827]"
                >
                  View AI Opportunities
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={onNav("paths")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[#19212A] backdrop-blur-md transition hover:border-[#D80B3C]/35"
                >
                  Build path
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D80B3C] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#D80B3C]/25 transition hover:brightness-110"
                >
                  <LayoutDashboard className="h-4 w-4" aria-hidden />
                  Launch AI Command Center
                </Link>
                <Link
                  href="/scanflow"
                  className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/15 bg-white/90 px-5 py-3 text-sm font-semibold text-[#19212A] backdrop-blur-md transition hover:border-[#D80B3C]/35"
                >
                  <Smartphone className="h-4 w-4" aria-hidden />
                  Open ScanFlow Mobile Demo
                </Link>
                <Link
                  href="/qr"
                  className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/15 bg-white/90 px-5 py-3 text-sm font-semibold text-[#19212A] backdrop-blur-md transition hover:border-[#D80B3C]/35"
                >
                  <Printer className="h-4 w-4" aria-hidden />
                  Print QR Demo Sheet
                </Link>
                <Link
                  href="/demo/quote-to-shop"
                  className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/15 bg-white/90 px-5 py-3 text-sm font-semibold text-[#19212A] backdrop-blur-md transition hover:border-[#D80B3C]/35"
                >
                  <QrCode className="h-4 w-4" aria-hidden />
                  Watch Quote-to-Shop Demo
                </Link>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#19212A]/72 sm:text-base">
                Every workflow shown here can start as a small AI layer and grow into a web app, mobile field tool,
                iOS/Android app, customer portal, or leadership command view after value is proven.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D80B3C]/20 via-transparent to-[#19212A]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#19212A] via-[#1a2330] to-[#111827] p-5 shadow-[0_24px_80px_-20px_rgba(17,24,39,0.65)] sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 opacity-20">
                  <TransPakLogo variant="mark" className="h-32 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                      <BarChart3 className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/55">Live view</p>
                      <p className="text-lg font-bold tracking-tight text-white">TransPak AI Command View</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Signals on
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {heroMetrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 backdrop-blur-sm sm:px-4"
                    >
                      <p className="text-2xl font-bold tabular-nums text-white sm:text-3xl">{m.value}</p>
                      <p className="mt-1 text-[11px] font-medium leading-snug text-white/60 sm:text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#D80B3C]">Next best actions</p>
                  <ul className="mt-3 space-y-2.5">
                    {heroNextActions.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 text-xs font-medium leading-relaxed text-white/85 sm:text-sm"
                      >
                        <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="live-demo" className="scroll-mt-28 border-t border-[#19212A]/6 bg-white/25 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">Connected demo layer</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                Explore the TransPak AI Command Center + ScanFlow
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                This demo uses real public lead examples, realistic TransPak-style job records, and functional QR codes to
                show how the system would work once connected to approved internal data.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                Once a workflow proves useful, it does not have to stay as a dashboard or prompt. It can become an internal
                web app, iOS or Android field tool, customer portal, QR scan workflow, shop-floor checklist, logistics board,
                or leadership command view.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
              <GlassCard className="border-[#D80B3C]/12">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                    <LayoutDashboard className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#19212A]">Command Center</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78">
                      Executive operations view with lead intelligence, quotes, jobs, documents, shipments, and ScanFlow
                      updates — all demo-safe and local-first.
                    </p>
                    <Link
                      href="/"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D80B3C] hover:underline"
                    >
                      Launch Command Center
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="border-[#D80B3C]/12">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                    <Smartphone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#19212A]">ScanFlow + QR sheet</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78">
                      Mobile-first ScanFlow routes with real QR codes that open live demo pages — includes scanner fallbacks
                      for browsers without camera access.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link href="/scanflow" className="text-sm font-semibold text-[#D80B3C] hover:underline">
                        Open ScanFlow
                      </Link>
                      <span className="text-[#19212A]/25" aria-hidden>
                        ·
                      </span>
                      <Link href="/qr" className="text-sm font-semibold text-[#D80B3C] hover:underline">
                        QR Demo Sheet
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/demo/quote-to-shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#19212A] px-6 py-3 text-sm font-semibold text-white shadow-xl"
              >
                Run Quote-to-Shop Demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section id="vision" className="scroll-mt-28 border-t border-[#19212A]/6 bg-white/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                The goal is not to add another tool. The goal is to reduce the workload.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#19212A]/78">
                TransPak already has complex work moving through sales, design, crating, packaging, distribution,
                logistics, and customer communication. AI becomes valuable when it sits above those workflows,
                watches for signals, organizes information, drafts the next step, and gives each team a clearer view
                of what needs attention.
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                TransPak does not need to start by replacing existing tools. The first move is to add an AI layer
                that sits above current workflows, organizes information, and pushes useful outputs back into the
                right places — including sales and customer records where those live today.
              </p>
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 md:grid-cols-2">
              <GlassCard className="border-[#D80B3C]/15">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                  <Layers className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#19212A]">{oneLayerStrategy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{oneLayerStrategy.body}</p>
              </GlassCard>
              <GlassCard className="border-[#D80B3C]/15">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                  <Lightbulb className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#19212A]">{ideasDuringWorkCard.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{ideasDuringWorkCard.body}</p>
              </GlassCard>
            </div>

            <div
              id="build-philosophy"
              className="mx-auto mt-16 max-w-3xl scroll-mt-28 border-t border-[#19212A]/10 pt-14 sm:mt-20 sm:pt-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">
                  {buildPhilosophySectionHeader.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                  {buildPhilosophySectionHeader.title}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#19212A]/76 sm:text-lg">
                  {buildPhilosophySectionHeader.intro}
                </p>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto mt-10 max-w-3xl sm:mt-12"
              >
                <div
                  className="pointer-events-none absolute left-5 top-7 font-serif text-[4.5rem] leading-[0.85] text-[#D80B3C]/[0.18] sm:left-8 sm:top-9 sm:text-[5.5rem]"
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="relative rounded-[1.75rem] border border-[#19212A]/10 bg-gradient-to-b from-white/92 to-white/55 px-8 pb-9 pt-11 shadow-[0_12px_48px_-18px_rgba(25,33,42,0.14)] backdrop-blur-xl sm:px-11 sm:pb-11 sm:pt-14">
                  <div className="space-y-5 text-left text-[0.9375rem] font-medium leading-[1.65] text-[#19212A]/88 sm:text-base sm:leading-relaxed">
                    {founderVisionStatementParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <footer className="mt-9 border-t border-[#19212A]/10 pt-6 text-sm font-semibold tracking-tight text-[#19212A] sm:text-[0.9375rem]">
                    <span className="font-normal text-[#D80B3C]">&mdash; </span>
                    {founderVisionStatementAttribution}
                  </footer>
                </blockquote>
              </motion.figure>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
              {bigIdeas.map(({ title, body, icon: Icon }) => (
                <GlassCard key={title}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[#19212A]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78">{body}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section
          id="opportunities"
          className="scroll-mt-28 border-t border-[#19212A]/6 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">Department coverage</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                What AI can do across TransPak
              </h2>
              <p className="mt-4 text-base text-[#19212A]/70 sm:text-lg">
                Each card is written as a business outcome first — not a feature list for its own sake.
              </p>
            </div>
            <div className="mt-12">
              <FeatureTabs tabs={opportunityTabs} />
            </div>
          </div>
        </section>

        <section
          id="app-workflows"
          className="scroll-mt-28 border-t border-[#19212A]/6 bg-white/25 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">
                {appReadyWorkflowsSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                {appReadyWorkflowsSection.title}
              </h2>
              {appReadyWorkflowsSection.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                  {p}
                </p>
              ))}
            </motion.div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
              {appReadyWorkflowsSection.cards.map((card, i) => {
                const Icon = appReadyCardIcons[i] ?? Monitor;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <GlassCard className="h-full border-[#D80B3C]/12">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80B3C]/10 text-[#D80B3C]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="text-lg font-bold text-[#19212A]">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{card.body}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm font-medium leading-relaxed text-[#19212A]/72 sm:text-base">
              {appReadyWorkflowsSection.closingLine}
            </p>
          </div>
        </section>

        <section id="paths" className="scroll-mt-28 border-t border-[#19212A]/6 bg-white/30 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">
                {buildPathTransitionSection.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#19212A] sm:text-3xl">
                {buildPathTransitionSection.title}
              </h2>
              {buildPathTransitionSection.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 text-base leading-relaxed text-[#19212A]/78 sm:text-lg">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="avoided"
          className="scroll-mt-28 border-t border-[#19212A]/6 bg-gradient-to-b from-[#F4F6F8] via-white/40 to-[#F4F6F8] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AvoidedCostsComparison />
          </div>
        </section>

        <section id="pilot" className="scroll-mt-28 border-t border-[#19212A]/6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">The Moneyball Pilot</h2>
              <p className="mt-4 text-lg font-medium text-[#19212A]/80">{moneyballPilotSectionSubtitle}</p>
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#19212A]/72 sm:text-base">
                {moneyballPilotSectionBody}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-[#D80B3C]/20 bg-gradient-to-br from-white/95 to-[#D80B3C]/[0.06] p-8 text-center shadow-[0_20px_60px_-24px_rgba(216,11,60,0.15)] backdrop-blur-xl sm:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">
                Estimated monthly cloud usage
              </p>
              <p className="mt-3 text-4xl font-bold tabular-nums text-[#19212A] sm:text-5xl">$150–$750/mo</p>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#19212A]/80 sm:text-lg">
                {moneyballPilotSectionIntro}
              </p>
            </motion.div>

            <div className="mt-14">
              <h3 className="text-center text-xl font-bold text-[#19212A] sm:text-2xl">Included in the Moneyball Pilot</h3>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#19212A]/65 sm:text-base">
                What the pilot is designed to deliver in daily work — usage costs scale with how often teams use AI
                and map/location services.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {moneyballPilotIncluded.map((item) => (
                  <GlassCard key={item.title}>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D80B3C]" aria-hidden />
                      <div>
                        <h4 className="text-base font-bold text-[#19212A]">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium leading-relaxed text-[#19212A]/75 sm:text-base">
                {moneyballPilotTrustNote}
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-center text-xl font-bold text-[#19212A] sm:text-2xl">
                Not included in the low monthly usage estimate
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#19212A]/65 sm:text-base">
                These patterns typically push monthly cloud usage higher when you turn them on.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {moneyballPilotNotIncluded.map((line) => (
                  <div
                    key={line}
                    className="flex gap-3 rounded-2xl border border-[#19212A]/10 bg-[#19212A]/[0.03] px-4 py-3.5 backdrop-blur-sm"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#19212A]/35" aria-hidden />
                    <p className="text-sm font-medium leading-snug text-[#19212A]/80">{line}</p>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium leading-relaxed text-[#19212A]/70">
                {moneyballPilotUsageNote}
              </p>
            </div>

            <div className="mt-14">
              <h3 className="text-center text-xl font-bold text-[#19212A] sm:text-2xl">Pilot timeline</h3>
              <div className="mx-auto mt-10 max-w-4xl space-y-5">
                {pilotPhases.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative flex gap-4 rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur-xl sm:gap-6 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D80B3C] text-sm font-bold text-white shadow-lg shadow-[#D80B3C]/30">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#19212A] sm:text-lg">{phase.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cost" className="scroll-mt-28 border-t border-[#19212A]/6 bg-white/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                {moneyballMonthlyUsageSectionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#19212A]/75 sm:text-lg">
                {moneyballMonthlyUsageSectionSubtitle}
              </p>
            </div>
            <div className="mt-12">
              <CostCards />
            </div>
          </div>
        </section>

        <section id="demo" className="scroll-mt-28 border-t border-[#19212A]/6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
                One demo flow that shows the whole vision
              </h2>
              <p className="mt-4 text-base text-[#19212A]/72 sm:text-lg">
                A single storyboard from prospect signal to leadership visibility — without changing how your teams
                think about the work.
              </p>
            </div>
            <div className="mt-10">
              <DemoFlow steps={demoSteps} />
            </div>
          </div>
        </section>

        <section className="border-t border-[#19212A]/6 bg-gradient-to-br from-[#19212A] via-[#1a2330] to-[#111827] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with one workflow. Build from there.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                TransPak does not need to solve every AI opportunity at once. The right first step is choosing one
                workflow where automation, visibility, or workload reduction would create immediate value.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/72 sm:text-lg">
                That first workflow can start as a focused AI layer, then grow into a dashboard, internal web app, iOS
                or Android tool, customer portal, QR scan system, shop-floor workflow, or leadership command view once
                the value is proven.
              </p>
              <button
                type="button"
                onClick={onNav("pilot")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D80B3C] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#D80B3C]/35 transition hover:brightness-110"
              >
                Start with the first AI layer
                <ArrowRight className="h-5 w-5" aria-hidden />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#19212A]/8 bg-white/50 py-10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <TransPakLogo variant="full" />
          <p className="max-w-md text-xs leading-relaxed text-[#19212A]/55 sm:text-sm">
            AI overview prepared for TransPak by Recyclic Bravery.
          </p>
        </div>
      </footer>
    </div>
  );
}
