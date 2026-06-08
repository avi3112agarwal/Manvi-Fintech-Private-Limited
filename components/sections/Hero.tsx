"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background flourishes — heavy blur blobs only on desktop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-50" />
      <div className="pointer-events-none absolute -top-40 -right-40 hidden h-[480px] w-[480px] rounded-full bg-accent-500/10 blur-3xl motion-safe:animate-blob-drift lg:block" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 hidden h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-3xl motion-safe:animate-blob-drift lg:block" />

      <Container className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              <Sparkles size={12} />
              Your trusted partner for smart financial solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="h-display mt-4 text-[2rem] leading-[1.05] sm:text-5xl lg:text-[3.25rem]"
            >
              Funding your growth,{" "}
              <span className="text-gradient">powering your dreams.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-xl text-base text-ink-600 leading-relaxed sm:text-lg"
            >
              Helping individuals and businesses access the right financing
              solutions through trusted banking partnerships and expert
              financial guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href="#contact">
                Apply for loan
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="secondary" href="#contact">
                <PhoneCall size={18} />
                Talk to an expert
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200"
            >
              <div className="bg-white px-5 py-4">
                <div className="font-display text-2xl font-bold tabular-nums text-ink-900">
                  25<span className="text-brand-700">+</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                  Banking partners
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <div className="font-display text-2xl font-bold tabular-nums text-ink-900">
                  48<span className="text-brand-700">hr</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                  Disbursal
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <div className="font-display text-2xl font-bold tabular-nums text-ink-900">
                  7<span className="text-brand-700">+</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                  Loan products
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
