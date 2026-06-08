"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const BULLETS = [
  "Free consultation",
  "Reply within 15 minutes",
  "25+ banking partners",
  "No hidden charges",
];

export function FinalCTA() {
  return (
    <section className="relative section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-white shadow-glow sm:px-12 sm:py-20"
        >
          {/* Decorative */}
          <div className="pointer-events-none absolute -top-32 -right-32 hidden h-[460px] w-[460px] rounded-full bg-brand-700/30 blur-3xl motion-safe:animate-blob-drift lg:block" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 hidden h-[420px] w-[420px] rounded-full bg-accent-500/25 blur-3xl motion-safe:animate-blob-drift lg:block" />
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-15" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
              Ready to find the{" "}
              <span className="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
                right loan solution?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Get expert guidance and access financing solutions tailored to
              your needs — across India&apos;s leading banks and NBFCs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                variant="secondary"
                href="#contact"
                className="!bg-white !text-ink-900 hover:!bg-ink-100"
              >
                Apply now
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                href="tel:+919016634710"
                className="!bg-transparent !border !border-white/30 hover:!bg-white/10"
              >
                <PhoneCall size={18} />
                +91 90166 34710
              </Button>
            </div>

            <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-ink-300">
              {BULLETS.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
