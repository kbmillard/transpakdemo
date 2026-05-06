"use client";

import { motion } from "framer-motion";
import {
  behindTheEstimateCard,
  featuredMoneyballPilotUsage,
  monthlyCostDrivers,
  monthlyUsageTiers,
  simpleExplanationCard,
} from "@/lib/transpak-ai-data";
import { GlassCard } from "./GlassCard";
import { Cloud, MapPin, Sparkles } from "lucide-react";

export function CostCards() {
  return (
    <div className="space-y-14 sm:space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.85rem] border border-[#D80B3C]/20 bg-gradient-to-br from-white/90 via-white/70 to-[#D80B3C]/[0.08] p-8 shadow-[0_24px_80px_-28px_rgba(216,11,60,0.2)] backdrop-blur-2xl sm:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D80B3C]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#19212A]/10 blur-3xl" />
        <div className="relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#19212A]/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#D80B3C]">
            <Cloud className="h-3.5 w-3.5" aria-hidden />
            Pilot band
          </span>
          <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#19212A] sm:text-3xl">
            {featuredMoneyballPilotUsage.title}
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#19212A]/55">
            {featuredMoneyballPilotUsage.priceLabel}
          </p>
          <p className="mt-4 text-5xl font-bold tabular-nums tracking-tight text-[#D80B3C] sm:text-6xl">
            {featuredMoneyballPilotUsage.mainPrice}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#19212A]/82 sm:text-lg">
            {featuredMoneyballPilotUsage.body}
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[#19212A]/10 bg-white/65 px-5 py-4 text-sm font-medium leading-relaxed text-[#19212A]/88">
            {featuredMoneyballPilotUsage.disclaimer}
          </p>
          <div className="mt-8 w-full max-w-3xl text-left">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#19212A]/50">
              Usage assumptions
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {featuredMoneyballPilotUsage.assumptions.map((line) => (
                <li
                  key={line}
                  className="rounded-full border border-white/70 bg-white/75 px-3.5 py-2 text-xs font-medium leading-snug text-[#19212A]/85 shadow-sm backdrop-blur-md sm:text-sm"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div>
        <h3 className="text-center text-xl font-bold text-[#19212A] sm:text-2xl">Usage tiers</h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#19212A]/65 sm:text-base">
          Each tier reflects estimated monthly cloud usage — how intensively the team uses AI models and
          map/location services.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {monthlyUsageTiers.map((tier, i) => (
            <GlassCard key={tier.title} className="flex h-full flex-col">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex h-full flex-col"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#D80B3C]">{tier.title}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#19212A]/45">
                  {tier.usageRangeLabel}
                </p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-[#19212A] sm:text-[1.65rem]">{tier.usageRange}</p>
                <div className="mt-4 rounded-2xl border border-[#19212A]/8 bg-[#F8FAFC]/90 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#19212A]/50">Best for</p>
                  <p className="mt-2 text-sm font-medium leading-snug text-[#19212A]">{tier.bestFor}</p>
                </div>
                <div className="mt-4 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#19212A]/50">Typical usage</p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[#19212A]/78">
                    {tier.typicalUsage.map((line) => (
                      <li key={line} className="flex gap-2">
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D80B3C]/70" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl font-bold text-[#19212A] sm:text-2xl">What changes the monthly cost?</h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {monthlyCostDrivers.map((d) => (
            <GlassCard key={d.title}>
              <p className="text-sm font-bold text-[#D80B3C]">{d.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#19212A]/82">{d.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <GlassCard hover={false} className="border-[#19212A]/10 bg-gradient-to-br from-white/80 to-[#F8FAFC]/90 lg:col-span-1">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D80B3C]/12 text-[#D80B3C]">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#19212A] sm:text-xl">{simpleExplanationCard.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#19212A]/80 sm:text-base">{simpleExplanationCard.body}</p>
              <p className="mt-5 rounded-2xl border border-[#19212A]/8 bg-white/70 p-4 text-sm leading-relaxed text-[#19212A]/85">
                {simpleExplanationCard.footnote}
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard
          hover={false}
          className="border-[#19212A]/12 bg-gradient-to-br from-[#19212A]/[0.04] to-white/70 lg:col-span-1"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#19212A]/10 text-[#19212A]">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#19212A] sm:text-xl">{behindTheEstimateCard.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#19212A]/78 sm:text-base">{behindTheEstimateCard.body}</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-[#19212A]/50 sm:text-sm">
        Directional guidance for budgeting monthly cloud usage — model activity, document volume, map and location
        services, and automation level — not a hard quote.
      </p>
    </div>
  );
}
