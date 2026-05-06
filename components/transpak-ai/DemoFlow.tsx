"use client";

import { motion } from "framer-motion";
import type { DemoStep } from "@/lib/transpak-ai-data";

type DemoFlowProps = {
  steps: DemoStep[];
};

export function DemoFlow({ steps }: DemoFlowProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D80B3C]/8 via-transparent to-[#19212A]/8 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/40 p-6 backdrop-blur-2xl sm:p-8">
        <ol className="relative space-y-0">
          {steps.map((s, idx) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: idx * 0.04, duration: 0.35 }}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {idx < steps.length - 1 ? (
                <span
                  className="absolute left-[19px] top-10 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-[#19212A]/20 via-[#D80B3C]/20 to-transparent"
                  aria-hidden
                />
              ) : null}
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#19212A] text-sm font-bold text-white shadow-lg ring-4 ring-white/50">
                  {s.step}
                </span>
              </div>
              <div className="min-w-0 flex-1 rounded-2xl border border-[#19212A]/8 bg-white/75 px-4 py-3 shadow-sm sm:px-5 sm:py-4">
                <p className="text-sm font-medium leading-relaxed text-[#19212A] sm:text-base">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
