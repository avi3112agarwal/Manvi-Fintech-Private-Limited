"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Share Your Requirement",
    desc: "Tell us about your loan goal, business or property situation in a quick free consultation.",
  },
  {
    n: "02",
    title: "Financial Assessment",
    desc: "Soft eligibility check across partner banks — without affecting your credit score.",
  },
  {
    n: "03",
    title: "Bank Matching",
    desc: "We match you to the lender offering the strongest terms for your profile.",
  },
  {
    n: "04",
    title: "Documentation Support",
    desc: "Personalised checklist. We help you prepare a clean, lender-ready file.",
  },
  {
    n: "05",
    title: "Approval & Disbursement",
    desc: "Sanction letter, final terms negotiated, and funds credited — end to end.",
  },
  {
    n: "06",
    title: "Post-Disbursal Service",
    desc: "Statement help, prepayment guidance, top-ups — your RM stays with you.",
  },
];

export function Process() {
  return (
    <section id="process" className="section bg-ink-900 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="How it works"
          title={
            <span className="text-white">
              From your first call to{" "}
              <span className="text-gradient">funds in your account</span>
            </span>
          }
          description={
            <span className="text-ink-300">
              A repeatable, transparent process — so you know exactly what
              happens at every step.
            </span>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="relative rounded-2xl border border-ink-800 bg-ink-800/40 backdrop-blur p-7 hover:border-brand-600/60 transition"
            >
              <div className="font-display text-3xl font-semibold text-gradient">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
