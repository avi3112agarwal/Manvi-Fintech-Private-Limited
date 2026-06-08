"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Building2,
  Layers,
  Timer,
  MapPin,
} from "lucide-react";

type Stat = {
  icon: typeof Building2;
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  {
    icon: Building2,
    value: 25,
    suffix: "+",
    label: "Banking Partners",
    sub: "Top banks & NBFCs",
  },
  {
    icon: Layers,
    value: 7,
    suffix: "+",
    label: "Loan Products",
    sub: "Every category covered",
  },
  {
    icon: Timer,
    prefix: "<",
    value: 48,
    suffix: "hr",
    label: "Disbursal",
    sub: "From sanction to credit",
  },
  {
    icon: MapPin,
    value: 5,
    label: "Surat Branches",
    sub: "Always close to you",
  },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString("en-IN")}</span>;
}

export function Stats() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-y border-ink-100 bg-gradient-to-br from-ink-900 via-brand-900 to-brand-800"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
            By the numbers
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Trusted across Surat.{" "}
            <span className="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
              Built on outcomes.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-accent-400/60 hover:bg-white/[0.08]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                <s.icon size={18} />
              </div>

              <div className="mt-5 flex items-baseline gap-0.5 font-display text-4xl font-bold tabular-nums text-white sm:text-5xl">
                {s.prefix && <span className="text-accent-400">{s.prefix}</span>}
                <Counter to={s.value} />
                {s.suffix && (
                  <span className="text-accent-400">{s.suffix}</span>
                )}
              </div>

              <p className="mt-2 text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-brand-100/70">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
