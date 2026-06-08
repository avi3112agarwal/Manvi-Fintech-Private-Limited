import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Manvi Fintech Private Limited"
      className={cn("inline-flex items-center gap-3 group", className)}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient shadow-soft ring-1 ring-inset ring-white/15">
        <span className="font-display text-white text-base font-bold tracking-tight">
          M
        </span>
        <span className="absolute -inset-0.5 rounded-xl bg-brand-gradient opacity-0 blur transition group-hover:opacity-40" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display font-semibold text-[15px] tracking-tight",
            invert ? "text-white" : "text-ink-900",
          )}
        >
          Manvi Fintech
        </span>
        <span
          className={cn(
            "mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em]",
            invert ? "text-ink-400" : "text-ink-500",
          )}
        >
          Private Limited
        </span>
      </span>
    </Link>
  );
}
