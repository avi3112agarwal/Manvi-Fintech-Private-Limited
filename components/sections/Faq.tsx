"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "How long does loan approval take?",
    a: "Most approvals happen within 3–7 working days depending on the loan type, documentation completeness and the chosen lender. Some unsecured products can be sanctioned in 24–48 hours.",
  },
  {
    q: "Which documents are required?",
    a: "Standard documents include KYC (PAN, Aadhaar), address proof, income proof (ITR / salary slips / bank statements) and business proof for entrepreneurs. Our team prepares a personalised checklist.",
  },
  {
    q: "Can I apply online?",
    a: "Yes. Fill the form on this page and our team will reach out within minutes to begin a free consultation and assess eligibility.",
  },
  {
    q: "Do you charge consultation fees?",
    a: "No. Initial consultation, eligibility assessment and loan matching are free. We're compensated by partner lenders only when your loan is successfully disbursed.",
  },
  {
    q: "Which banks do you work with?",
    a: "We're partnered with 17+ leading banks and NBFCs including HDFC, ICICI, SBI, Axis, Kotak, Bajaj Finserv, Tata Capital, Aditya Birla Capital, L&T Finance, Poonawalla Fincorp and more.",
  },
  {
    q: "What is Loan Against Property?",
    a: "LAP is a secured loan where you pledge residential, commercial or industrial property as collateral. It typically offers higher loan amounts and lower interest rates than unsecured loans, with longer tenures.",
  },
  {
    q: "Can startups apply?",
    a: "Yes. We work with several lenders who finance early-stage businesses — unsecured business loans, working capital, and machinery loans backed by CGTMSE and similar schemes.",
  },
  {
    q: "How much loan can I get?",
    a: "Eligibility depends on income, business turnover, credit score, collateral and the loan type. We help you maximise eligibility across multiple lenders and structures.",
  },
  {
    q: "Are there prepayment charges?",
    a: "Prepayment charges vary by lender and product. For floating-rate retail loans, charges are typically nil. For business and fixed-rate loans, partial or full prepayment may attract a small fee — disclosed upfront.",
  },
  {
    q: "How do I track my application?",
    a: "Your dedicated relationship manager shares regular status updates over WhatsApp, email and call until disbursement.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          title={
            <>
              Common <span className="text-gradient">questions</span>
            </>
          }
          description="Quick answers to what most customers ask. Still curious? Our team is one tap away."
        />

        <div className="mt-14 mx-auto max-w-3xl">
          <div className="divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-mono text-[11px] font-semibold text-ink-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-base font-semibold text-ink-900">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid h-8 w-8 flex-none place-items-center rounded-full border border-ink-200 text-ink-700"
                    >
                      <Plus size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-[60px] text-sm leading-relaxed text-ink-600">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
