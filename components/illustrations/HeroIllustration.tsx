import { Calculator, CheckCircle2, FileDown, Sparkles } from "lucide-react";

/**
 * Hero illustration — a clean React/HTML mock-up of the EMI Calculator
 * result, surrounded by three floating credibility tags.
 *
 * Built with real DOM (not SVG text) so typography is razor-sharp,
 * nothing overflows, and the layout adapts to its container width.
 *
 * Numbers shown match a real calculation: ₹25 L · 14% p.a. · 5 yrs.
 */
export function HeroIllustration() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-md sm:max-w-lg">
      {/* Soft backdrop */}
      <div
        className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-brand-50 via-white to-accent-500/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 rounded-[36px] ring-1 ring-inset ring-brand-100/60"
        aria-hidden
      />

      {/* Dotted orbits */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 400 480"
        fill="none"
        aria-hidden
      >
        <circle
          cx="200"
          cy="240"
          r="180"
          stroke="#BFD2FE"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="240"
          r="130"
          stroke="#93B4FD"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.5"
        />
      </svg>

      {/* MAIN CARD: EMI mock */}
      <div
        className="hero-float absolute left-[6%] right-[6%] top-[14%] rounded-2xl border border-ink-200/80 bg-white p-5 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.20)] motion-reduce:animate-none sm:p-6"
      >
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-white shadow-soft">
              <Calculator size={16} />
            </div>
            <div>
              <div className="font-display text-[13px] font-semibold leading-tight text-ink-900">
                EMI Calculator
              </div>
              <div className="text-[10px] text-ink-500">
                Reducing balance method
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div className="my-4 h-px bg-ink-100" />

        {/* EMI + Donut */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
              Monthly EMI
            </div>
            <div className="mt-1 font-display text-[28px] font-bold leading-none text-ink-900 tabular-nums sm:text-[32px]">
              <span className="text-brand-700">₹</span>58,171
            </div>
            <div className="mt-1.5 text-[11px] text-ink-500 tabular-nums">
              ₹25 Lakh · 14% p.a. · 5 yrs
            </div>
          </div>
          <Donut size={104} principalPct={71.6} />
        </div>

        <div className="my-4 h-px bg-ink-100" />

        {/* Legend */}
        <div className="space-y-2 text-[11px]">
          <LegendRow
            color="bg-gradient-to-r from-accent-400 to-brand-800"
            label="Principal"
            pct="71.6%"
            value="₹25,00,000"
            valueTone="text-ink-900"
          />
          <LegendRow
            color="bg-amber-400"
            label="Interest"
            pct="28.4%"
            value="₹9,90,238"
            valueTone="text-amber-700"
          />
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-50/70 px-3 py-2.5 text-[11px]">
          <span className="font-semibold uppercase tracking-wider text-ink-600">
            Total payable
          </span>
          <span className="font-display text-sm font-bold text-brand-800 tabular-nums">
            ₹34,90,238
          </span>
        </div>
      </div>

      {/* FLOATING: Best rate matched (top-right) */}
      <div
        className="hero-float absolute right-[2%] top-[3%] flex items-center gap-3 rounded-2xl bg-ink-900 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(11,31,58,0.50)] motion-reduce:animate-none"
        style={{ animationDuration: "6s", animationDelay: "0.4s" }}
      >
        <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-brand-gradient">
          <CheckCircle2 size={16} className="text-white" />
        </div>
        <div className="leading-tight">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-white">
            Best rate matched
          </div>
          <div className="mt-0.5 text-[10px] text-ink-300">
            25+ lender comparison
          </div>
          <div className="mt-0.5 text-[11px] font-bold text-accent-400 tabular-nums">
            0.4% lower
          </div>
        </div>
      </div>

      {/* FLOATING: Sanctioned card (bottom-left) — hide on mobile to avoid overlap */}
      <div
        className="hero-float absolute left-[-2%] bottom-[3%] hidden w-[58%] rounded-2xl border border-ink-200/80 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(11,31,58,0.30)] motion-reduce:animate-none sm:block"
        style={{ animationDuration: "7.5s", animationDelay: "0.8s" }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Sanctioned
        </span>
        <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
          Business Loan · HDFC
        </div>
        <div className="mt-1 font-display text-xl font-bold text-ink-900 tabular-nums sm:text-2xl">
          ₹50,00,000
        </div>
        <div className="mt-1 text-[10px] text-ink-500">
          Disbursed in 48 hours
        </div>
      </div>

      {/* FLOATING: Schedule download (bottom-right) — hide on mobile */}
      <div
        className="hero-float absolute right-[-2%] bottom-[10%] hidden w-[44%] rounded-2xl border border-ink-200/80 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(11,31,58,0.30)] motion-reduce:animate-none sm:block"
        style={{ animationDuration: "6.5s", animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-brand-50 text-brand-700">
            <FileDown size={16} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[12px] font-semibold text-ink-900">
              EMI Schedule
            </div>
            <div className="text-[10px] text-ink-500">Excel · PDF · CSV</div>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-ink-100" />
          <div className="h-1.5 w-2/3 rounded-full bg-ink-100" />
        </div>
      </div>

      {/* FLOATING: Sparkle badge (top-left) */}
      <div
        className="hero-float absolute left-[-2%] top-[8%] flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-[0_10px_25px_-10px_rgba(11,31,58,0.30)] ring-1 ring-ink-200 motion-reduce:animate-none"
        style={{ animationDuration: "5.5s" }}
      >
        <Sparkles size={12} className="text-amber-500" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-700">
          25+ lenders
        </span>
      </div>
    </div>
  );
}

function LegendRow({
  color,
  label,
  pct,
  value,
  valueTone,
}: {
  color: string;
  label: string;
  pct: string;
  value: string;
  valueTone: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-sm ${color}`} />
        <span className="font-semibold text-ink-900">{label}</span>
        <span className="text-ink-500 tabular-nums">· {pct}</span>
      </div>
      <span className={`font-semibold tabular-nums ${valueTone}`}>{value}</span>
    </div>
  );
}

/**
 * Pure-SVG donut, no text. The text lives in HTML on top of it for
 * sharper rendering. principalPct is 0–100; the remainder is interest.
 */
function Donut({
  size = 110,
  principalPct,
}: {
  size?: number;
  principalPct: number;
}) {
  const r = 38;
  const c = 2 * Math.PI * r; // ≈ 238.76
  const principalLen = (principalPct / 100) * c;
  const interestLen = c - principalLen;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full -rotate-90"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroDonut" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#0B3B91" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="#F1F5F9"
          strokeWidth="12"
          fill="none"
        />
        {/* Principal arc */}
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="url(#heroDonut)"
          strokeWidth="12"
          fill="none"
          strokeDasharray={`${principalLen} ${c}`}
          strokeLinecap="butt"
        />
        {/* Interest arc */}
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="#FBBF24"
          strokeWidth="12"
          fill="none"
          strokeDasharray={`${interestLen} ${c}`}
          strokeDashoffset={-principalLen}
          strokeLinecap="butt"
        />
      </svg>
      {/* Center label */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="text-center leading-tight">
          <div className="text-[8px] font-semibold uppercase tracking-wider text-ink-500">
            Total
          </div>
          <div className="font-display text-[11px] font-bold text-ink-900 tabular-nums">
            ₹34.9L
          </div>
        </div>
      </div>
    </div>
  );
}
