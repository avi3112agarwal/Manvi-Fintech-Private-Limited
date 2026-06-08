"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Manvi sanctioned my home loan with 0.4% lower interest than my own bank offered. The process was smooth, transparent, and over in 9 days.",
    name: "Sweta Shah",
    role: "Home Buyer, Vesu",
    initials: "SS",
    tag: "Home Loan",
  },
  {
    quote:
      "Got ₹2.4 Cr business loan in 11 days. Their team understood my business and matched me to a lender who really fit — not just whoever pays them the most.",
    name: "Hardik Patel",
    role: "MD, Patel Engineering Works",
    initials: "HP",
    tag: "Business Loan",
  },
  {
    quote:
      "We needed a machinery loan with CGTMSE backing. Manvi structured it cleanly and the disbursal happened well in time for our import shipment.",
    name: "Rajiv Mehta",
    role: "Director, Mehta Industries (GIDC Sachin)",
    initials: "RM",
    tag: "Machinery Loan",
  },
  {
    quote:
      "LAP against my commercial property went through without a single follow-up from my side. Refreshing to deal with a team this organised.",
    name: "Bharti Modi",
    role: "Owner, Modi Textiles",
    initials: "BM",
    tag: "LAP",
  },
  {
    quote:
      "As an SME owner, I'd been turned away by two banks before. Manvi found me a working capital facility within a week. Game changer.",
    name: "Mihir Kapadia",
    role: "Founder, Kapadia Trading Co.",
    initials: "MK",
    tag: "Working Capital",
  },
  {
    quote:
      "Bought an industrial plot in GIDC with their help — they negotiated the rate down by almost a full percent. Strong banking relationships clearly show.",
    name: "Anil Ranchhod",
    role: "Promoter, Ranchhod Polymers",
    initials: "AR",
    tag: "Industrial Plot",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <Container>
        <SectionHeading
          eyebrow="Customer stories"
          title={
            <>
              Trusted by families,{" "}
              <span className="text-gradient">trusted by businesses</span>
            </>
          }
          description="From first-time home buyers to industrial promoters — real customers, real outcomes."
        />

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-ink-700">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm">
            <span className="font-semibold text-ink-900">4.9</span> · 320+
            verified reviews
          </span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft hover:border-brand-200 transition"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-brand-50"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    {t.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-ink-900">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-ink-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
