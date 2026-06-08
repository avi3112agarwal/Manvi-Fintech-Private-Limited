"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  MapPin,
  Banknote,
  IndianRupee,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const LOAN_TYPES = [
  "Home Loan",
  "Unsecured Business Loan",
  "Loan Against Property",
  "CC / OD Facility",
  "Machinery Loan",
  "Industrial Plot Purchase",
  "Car Loan",
  "Not sure — need guidance",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="section">
      <Container>
        <SectionHeading
          eyebrow="Talk to us"
          title={
            <>
              Let&apos;s find the{" "}
              <span className="text-gradient">right loan</span> for you
            </>
          }
          description="Share a few details. A loan expert will call you within minutes — free, no obligation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:p-8">
              <ContactItem
                icon={Phone}
                label="Call us"
                value="+91 90166 34710"
                href="tel:+919016634710"
              />
              <div className="my-5 h-px bg-ink-100" />
              <ContactItem
                icon={Mail}
                label="Email"
                value="info@manvifintech.com"
                href="mailto:info@manvifintech.com"
              />
              <div className="my-5 h-px bg-ink-100" />
              <ContactItem
                icon={MapPin}
                label="Main office"
                value="L.G. 44-45, Westfield Complex, Opp. Sankalp Shopping Center, Surat"
              />

              <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50/50 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  We&apos;re open now
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  Mon–Sat, 10:00 AM – 7:00 PM IST. Avg. response under 15
                  minutes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-50 blur-2xl" />

              {submitted ? (
                <div className="relative grid place-items-center py-14 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 border border-emerald-100">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                    Thank you.
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-ink-600">
                    A loan expert will call you within 15 minutes to begin a
                    free consultation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="relative grid gap-4 sm:grid-cols-2"
                >
                  <Field icon={User} label="Full name" placeholder="Ramesh Patel" required />
                  <Field
                    icon={Phone}
                    label="Mobile"
                    type="tel"
                    placeholder="+91 98765 xxxxx"
                    required
                  />
                  <Field icon={MapPin} label="City" placeholder="Surat" required />
                  <Select icon={Banknote} label="Loan type" options={LOAN_TYPES} required />
                  <Field
                    icon={IndianRupee}
                    label="Loan amount"
                    type="number"
                    placeholder="25,00,000"
                    className="sm:col-span-2"
                  />
                  <TextArea
                    icon={MessageSquare}
                    label="Tell us more"
                    placeholder="Briefly describe what you need…"
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <Button size="lg" className="w-full">
                      Submit application
                      <ArrowRight size={18} />
                    </Button>
                    <p className="mt-3 text-center text-[11px] text-ink-500">
                      By submitting, you agree to be contacted by Manvi Fintech.
                      We respect your privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white text-brand-700 shadow-soft">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </div>
        <div className="mt-0.5 font-display text-base font-semibold text-ink-900">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {Body}
    </a>
  ) : (
    <div>{Body}</div>
  );
}

function Field({
  icon: Icon,
  label,
  className = "",
  ...props
}: {
  icon: React.ElementType;
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          {...props}
          className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        />
      </span>
    </label>
  );
}

function Select({
  icon: Icon,
  label,
  options,
  className = "",
  ...props
}: {
  icon: React.ElementType;
  label: string;
  options: string[];
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <select
          {...props}
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-9 text-sm text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        >
          <option value="" disabled>
            Select a loan type
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400">
          ▾
        </span>
      </span>
    </label>
  );
}

function TextArea({
  icon: Icon,
  label,
  className = "",
  ...props
}: {
  icon: React.ElementType;
  label: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-ink-400" />
        <textarea
          rows={3}
          {...props}
          className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        />
      </span>
    </label>
  );
}
