"use client";

import { motion } from "framer-motion";
import {
  internalEnterpriseAiRoute,
  planningComparisonSection,
  recyclicBraveryPartnerRoute,
  savingsCallouts,
} from "@/lib/transpak-ai-data";
import { ArrowDownRight, Landmark, Sparkles } from "lucide-react";

/** Recyclic Bravery / partner column — TransPak red. */
const MB = {
  panel: "border-[#D80B3C]/20 bg-gradient-to-b from-white/90 to-[#D80B3C]/[0.07]",
  shadow: "shadow-[0_24px_70px_-24px_rgba(216,11,60,0.22)]",
  iconBg: "bg-[#D80B3C]/12 text-[#D80B3C]",
  divider: "border-[#D80B3C]/14",
  label: "text-[#D80B3C]",
} as const;

/** Internal / caution column — blue-grey contrast. */
const ENT = {
  panel: "border-[#4E647A]/22 bg-gradient-to-b from-white/85 to-[#4E647A]/[0.06]",
  shadow: "shadow-[0_20px_60px_-28px_rgba(74,95,117,0.18)]",
  iconBg: "bg-[#4E647A]/12 text-[#4E647A]",
  divider: "border-[#4E647A]/12",
  category: "text-[#4E647A]",
  banner: "border-[#4E647A]/15 bg-[#4E647A]/[0.04] text-[#19212A]/65",
} as const;

export function AvoidedCostsComparison() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D80B3C]">
          {planningComparisonSection.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#19212A] sm:text-4xl">
          {planningComparisonSection.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#19212A]/75 sm:text-lg">
          {planningComparisonSection.subtitle}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl sm:p-8 ${ENT.panel} ${ENT.shadow}`}
        >
          <div className={`mb-6 flex items-center gap-3 border-b pb-5 ${ENT.divider}`}>
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${ENT.iconBg}`}>
              <Landmark className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#19212A] sm:text-2xl">
                {internalEnterpriseAiRoute.cardTitle}
              </h3>
              <p className="mt-1 text-sm leading-snug text-[#19212A]/65">{internalEnterpriseAiRoute.cardSubtitle}</p>
            </div>
          </div>
          <p className={`mb-5 rounded-xl px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide ${ENT.banner}`}>
            Planning benchmarks, example ranges, and planning exposure — not quotes
          </p>
          <ul className="flex flex-1 flex-col gap-4">
            {internalEnterpriseAiRoute.items.map((row, i) => (
              <li
                key={row.title}
                className="rounded-2xl border border-white/50 bg-white/55 p-4 shadow-sm backdrop-blur-md sm:p-5"
              >
                <p className={`text-[11px] font-bold uppercase tracking-wide ${ENT.category}`}>
                  {i + 1}. {row.title}
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-snug text-[#19212A]/88 sm:text-sm">{row.planningLabel}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#19212A]/75">{row.body}</p>
                {row.tierRows && row.tierRows.length > 0 ? (
                  <div className="mt-4 overflow-hidden rounded-xl border border-[#19212A]/10 bg-white/70">
                    <table className="w-full text-left text-[12px] sm:text-[13px]">
                      <thead>
                        <tr className="border-b border-[#19212A]/10 bg-[#19212A]/[0.04]">
                          <th className="px-3 py-2 font-bold text-[#19212A]/80">Seats</th>
                          <th className="px-3 py-2 font-bold text-[#19212A]/80">Example annual benchmark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {row.tierRows.map((t) => (
                          <tr key={t.seats} className="border-b border-[#19212A]/6 last:border-0">
                            <td className="px-3 py-2 font-medium text-[#19212A]/85">{t.seats}</td>
                            <td className="px-3 py-2 tabular-nums font-semibold text-[#19212A]">{t.exampleAnnual}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {row.tierTableNote ? (
                      <p className="border-t border-[#19212A]/8 bg-white/80 px-3 py-2 text-[10px] font-medium leading-snug text-[#19212A]/60">
                        {row.tierTableNote}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl sm:p-8 ${MB.panel} ${MB.shadow}`}
        >
          <div className={`mb-6 flex items-center gap-3 border-b pb-5 ${MB.divider}`}>
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${MB.iconBg}`}>
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#19212A] sm:text-2xl">
                {recyclicBraveryPartnerRoute.cardTitle}
              </h3>
              <p className="mt-1 text-sm leading-snug text-[#19212A]/72">{recyclicBraveryPartnerRoute.cardSubtitle}</p>
            </div>
          </div>
          <ul className="flex flex-1 flex-col gap-4">
            {recyclicBraveryPartnerRoute.items.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/60 bg-white/65 p-4 shadow-sm backdrop-blur-md sm:p-5"
              >
                <p className={`text-[11px] font-bold uppercase tracking-wide ${MB.label}`}>
                  {i + 1}. {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#19212A]/78">{item.body}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl rounded-2xl border border-[#D80B3C]/20 bg-gradient-to-br from-white/90 to-[#D80B3C]/[0.06] px-6 py-5 text-center text-base font-medium leading-relaxed text-[#19212A]/88 shadow-sm backdrop-blur-md sm:px-8 sm:py-6 sm:text-lg"
      >
        {planningComparisonSection.framing}
      </motion.p>

      <div className="grid gap-5 lg:grid-cols-2">
        {savingsCallouts.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-[#D80B3C]/30 bg-gradient-to-br from-[#D80B3C] via-[#c20935] to-[#19212A] p-6 text-white shadow-[0_20px_50px_-12px_rgba(216,11,60,0.45)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <ArrowDownRight className="mt-1 h-6 w-6 shrink-0 opacity-90" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{c.title}</p>
                <p className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{c.mainNumber}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{c.subtext}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-2xl border border-[#19212A]/10 bg-white/50 px-5 py-4 text-center text-sm leading-relaxed text-[#19212A]/72 backdrop-blur-md sm:px-8 sm:text-[0.9375rem]"
      >
        {planningComparisonSection.footerNote}
      </motion.p>
    </div>
  );
}
