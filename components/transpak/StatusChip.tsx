type StatusChipProps = {
  label: string;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
};

const tones: Record<NonNullable<StatusChipProps["tone"]>, string> = {
  neutral: "border-[#19212A]/12 bg-[#19212A]/5 text-[#19212A]/80",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-900",
  danger: "border-[#D80B3C]/35 bg-[#D80B3C]/10 text-[#8f0630]",
  info: "border-sky-500/30 bg-sky-500/10 text-sky-900",
};

export function StatusChip({ label, tone = "neutral" }: StatusChipProps) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{label}</span>
  );
}
