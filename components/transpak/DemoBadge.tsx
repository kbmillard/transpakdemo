type DemoBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function DemoBadge({ children, className = "" }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#19212A]/10 bg-white/70 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#19212A]/70 ${className}`}
    >
      {children}
    </span>
  );
}
