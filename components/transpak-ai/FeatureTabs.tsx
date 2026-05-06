"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";
import type { OpportunityTab } from "@/lib/transpak-ai-data";
import { GlassCard } from "./GlassCard";

type FeatureTabsProps = {
  tabs: OpportunityTab[];
};

export function FeatureTabs({ tabs }: FeatureTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "sales");
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-all sm:px-5 sm:text-[0.9375rem]",
                selected
                  ? "bg-[#D80B3C] text-white shadow-lg shadow-[#D80B3C]/25"
                  : "border border-[#19212A]/10 bg-white/70 text-[#19212A]/80 backdrop-blur-md hover:border-[#D80B3C]/30 hover:text-[#19212A]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {active.features.map((f) => (
            <GlassCard key={f.name}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D80B3C]">
                    {f.department}
                  </p>
                  <h4 className="mt-1 text-lg font-bold tracking-tight text-[#19212A] sm:text-xl">
                    {f.name}
                  </h4>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#D80B3C]/12 text-[#D80B3C]">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <dl className="space-y-3 text-sm leading-relaxed text-[#19212A]/85 sm:text-[0.9375rem]">
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-[#19212A]">
                    <Building2 className="h-3.5 w-3.5 text-[#D80B3C]" aria-hidden />
                    What it does
                  </dt>
                  <dd className="mt-1">{f.whatItDoes}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#19212A]">Business value</dt>
                  <dd className="mt-1">{f.businessValue}</dd>
                </div>
                <div className="rounded-2xl border border-[#19212A]/8 bg-[#F8FAFC] p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-[#19212A]/60">
                    First version
                  </dt>
                  <dd className="mt-1.5 text-[#19212A]/90">{f.firstVersion}</dd>
                </div>
              </dl>
            </GlassCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
