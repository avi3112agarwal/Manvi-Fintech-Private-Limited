"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  Landmark,
  Banknote,
  Cog,
  Factory,
  Car,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Home,
    title: "Home Loan",
    desc: "Finance your dream home with competitive rates and expert guidance.",
    benefits: ["Starting from 7%* p.a.", "Tenure up to 30 years", "Up to 90% LTV"],
  },
  {
    icon: Briefcase,
    title: "Unsecured Business Loan",
    desc: "Collateral-free funding to grow your business and capture opportunities.",
    benefits: ["Up to ₹5 Cr", "Tenure up to 7 years", "No collateral required"],
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    desc: "Unlock the value of your residential or commercial property without selling.",
    benefits: ["Up to ₹10 Cr", "Lowest interest rates", "Long tenure"],
  },
  {
    icon: Banknote,
    title: "CC / OD Facility",
    desc: "Working capital limits — unsecured under CGTMSE as well as secured options.",
    benefits: ["Unsecured under CGTMSE", "Secured CC / OD", "Renewable annually"],
  },
  {
    icon: Cog,
    title: "Machinery Loan",
    desc: "Finance new or used equipment and machinery for business expansion.",
    benefits: ["Up to 90% funding", "CGTMSE schemes", "Sector-specific"],
  },
  {
    icon: Factory,
    title: "Industrial Plot Purchase",
    desc: "Purchase industrial land in GIDC and approved zones with flexible terms.",
    benefits: ["GIDC approved", "Long tenure", "Customised EMI"],
  },
  {
    icon: Car,
    title: "Car Loan",
    desc: "Quick approvals and attractive financing for new and pre-owned cars.",
    benefits: ["Up to 100% on-road", "Low interest rates", "Instant approval"],
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <Container>
        <SectionHeading
          eyebrow="Loan products"
          title={
            <>
              One partner for{" "}
              <span className="text-gradient">every loan need</span>
            </>
          }
          description="From your first home loan to a multi-crore industrial acquisition — every product, matched to the right lender."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((it, i) => (
            <motion.a
              href="#contact"
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 transition hover:border-brand-300 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white">
                  <it.icon size={22} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {it.desc}
              </p>

              <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-4">
                {it.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[12.5px] text-ink-700"
                  >
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                Apply now <ArrowRight size={14} />
              </div>
            </motion.a>
          ))}

          {/* Inline CTA card — institutional brand-gradient block */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-900 p-7 text-white"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-700/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
                Not sure?
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight">
                Let our experts match you with the right loan
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Compare offers across 25+ banks and NBFCs. Free consultation,
                no obligation.
              </p>
            </div>

            <a
              href="#contact"
              className="relative mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-ink-50"
            >
              Talk to an expert <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
