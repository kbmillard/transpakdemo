"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-12px_rgba(25,33,42,0.18)] backdrop-blur-xl",
        hover
          ? "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#D80B3C]/25 hover:shadow-[0_16px_48px_-12px_rgba(216,11,60,0.12)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
