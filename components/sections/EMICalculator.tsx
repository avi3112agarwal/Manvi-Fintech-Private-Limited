"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  IndianRupee,
  Percent,
  CalendarRange,
  Banknote,
  Search,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  FileText,
  Wallet,
  TrendingUp,
  CheckCircle2,
  User,
  Phone,
  Calculator,
  Info,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const LOAN_TYPES = [
  { label: "Home Loan", rate: 7 },
  { label: "Unsecured Business Loan", rate: 14 },
  { label: "Loan Against Property", rate: 9.5 },
  { label: "Working Capital (CC/OD)", rate: 11 },
  { label: "Machinery Loan", rate: 11.5 },
  { label: "Industrial Plot Loan", rate: 10.5 },
  { label: "Car Loan", rate: 9.25 },
];

const fmt = (n: number) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

const fmtINR = (n: number) => `₹${fmt(Math.round(n))}`;

const fmtCompact = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return `₹${fmt(n)}`;
};

type Row = {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
};

function buildAmortization(P: number, annualRate: number, n: number): Row[] {
  const r = annualRate / 12 / 100;
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const rows: Row[] = [];
  let balance = P;
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    const principal = emi - interest;
    balance = Math.max(0, balance - principal);
    rows.push({
      month: m,
      emi: Math.round(emi),
      principal: Math.round(principal),
      interest: Math.round(interest),
      balance: Math.round(balance),
    });
  }
  return rows;
}

export function EMICalculator() {
  const [loanType, setLoanType] = useState(LOAN_TYPES[1].label);
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(LOAN_TYPES[1].rate);
  const [tenure, setTenure] = useState(60);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const onLoanTypeChange = (val: string) => {
    setLoanType(val);
    const lt = LOAN_TYPES.find((l) => l.label === val);
    if (lt) setRate(lt.rate);
  };

  const { emi, total, interest, schedule, principalPct, interestPct } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - amount;
    const principalPct = (amount / total) * 100;
    const interestPct = (interest / total) * 100;
    const schedule = buildAmortization(amount, rate, n);
    return {
      emi: Math.round(emi),
      total: Math.round(total),
      interest: Math.round(interest),
      schedule,
      principalPct,
      interestPct,
    };
  }, [amount, rate, tenure]);

  return (
    <section id="emi" className="section bg-ink-50/60 border-y border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="Loan estimator"
          title={
            <>
              Calculate your EMI{" "}
              <span className="text-gradient">instantly</span>
            </>
          }
          description="Know your monthly EMI, total interest payable, and full repayment schedule in seconds."
        />

        {/* Calculator panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft"
        >
          {/* Panel header */}
          <div className="flex flex-col gap-3 border-b border-ink-100 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
                <Calculator size={18} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight text-ink-900">
                  EMI Calculator
                </h3>
                <p className="text-xs text-ink-500">
                  Reducing balance method · accurate to the rupee
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
              <span className="hidden items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600 sm:inline-flex">
                <Info size={11} /> Indicative rates
              </span>
            </div>
          </div>

          {/* Body grid */}
          <div className="grid gap-0 lg:grid-cols-5">
            {/* Inputs */}
            <div className="border-b border-ink-100 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                Inputs
              </div>
              <div className="mt-5">
                <SelectField
                  label="Loan type"
                  icon={Banknote}
                  value={loanType}
                  onChange={onLoanTypeChange}
                  options={LOAN_TYPES.map((l) => l.label)}
                />
                <div className="my-7 h-px bg-ink-100" />
                <Slider
                  icon={IndianRupee}
                  label="Loan amount"
                  value={amount}
                  min={100000}
                  max={150000000}
                  step={100000}
                  onChange={setAmount}
                  display={fmtCompact(amount)}
                  ticks={[
                    { label: "₹1 L", value: 100000 },
                    { label: "₹5 Cr", value: 50000000 },
                    { label: "₹10 Cr", value: 100000000 },
                    { label: "₹15 Cr", value: 150000000 },
                  ]}
                />
                <div className="my-7 h-px bg-ink-100" />
                <Slider
                  icon={Percent}
                  label="Interest rate (p.a.)"
                  value={rate}
                  min={6.5}
                  max={24}
                  step={0.05}
                  onChange={setRate}
                  display={`${rate.toFixed(2)} %`}
                  ticks={[
                    { label: "6.5%", value: 6.5 },
                    { label: "12%", value: 12 },
                    { label: "18%", value: 18 },
                    { label: "24%", value: 24 },
                  ]}
                />
                <div className="my-7 h-px bg-ink-100" />
                <Slider
                  icon={CalendarRange}
                  label="Tenure"
                  value={tenure}
                  min={6}
                  max={360}
                  step={6}
                  onChange={setTenure}
                  display={`${tenure} months · ${(tenure / 12).toFixed(1)} yrs`}
                  ticks={[
                    { label: "6 mo", value: 6 },
                    { label: "5 yr", value: 60 },
                    { label: "15 yr", value: 180 },
                    { label: "30 yr", value: 360 },
                  ]}
                />
              </div>
            </div>

            {/* Result */}
            <div className="relative overflow-hidden bg-ink-900 p-6 text-white sm:p-8 lg:col-span-2">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-700/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />

              <div className="relative">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-100">
                  Monthly EMI
                </div>
                <motion.div
                  key={emi}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 font-display text-5xl font-bold tabular-nums sm:text-[56px]"
                >
                  <span className="text-accent-400">₹</span>
                  {fmt(emi)}
                </motion.div>
                <div className="mt-1 text-xs text-ink-300">
                  for {(tenure / 12).toFixed(1)} years @ {rate.toFixed(2)}% p.a.
                </div>

                {/* Pie + center labels */}
                <div className="relative mt-5 h-44">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <defs>
                          <linearGradient
                            id="brandGradPie"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="100%" stopColor="#0B3B91" />
                          </linearGradient>
                        </defs>
                        <Pie
                          data={[
                            { name: "Principal", value: amount },
                            { name: "Interest", value: interest },
                          ]}
                          dataKey="value"
                          innerRadius={48}
                          outerRadius={78}
                          startAngle={90}
                          endAngle={-270}
                          stroke="none"
                          paddingAngle={2}
                        >
                          <Cell fill="url(#brandGradPie)" />
                          <Cell fill="#FBBF24" />
                        </Pie>
                        <Tooltip
                          formatter={(v) => fmtINR(Number(v))}
                          contentStyle={{
                            background: "#0F172A",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 10,
                            color: "#fff",
                            fontSize: 12,
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                  {/* Center label */}
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-ink-300">
                        Total payable
                      </div>
                      <div className="mt-0.5 font-display text-sm font-semibold text-white tabular-nums">
                        {fmtCompact(total)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Split legend — exact match to pie slices */}
                <div className="mt-5 space-y-2 text-xs">
                  <LegendRow
                    color="bg-gradient-to-r from-accent-400 to-brand-800"
                    label="Principal"
                    pct={principalPct}
                    value={fmtCompact(amount)}
                  />
                  <LegendRow
                    color="bg-amber-400"
                    label="Interest"
                    pct={interestPct}
                    value={fmtCompact(interest)}
                  />
                </div>

                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="mt-6 w-full"
                >
                  Get this loan
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KPI summary */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            icon={Wallet}
            label="Monthly EMI"
            value={fmtINR(emi)}
            tone="brand"
          />
          <SummaryCard
            icon={IndianRupee}
            label="Principal amount"
            value={fmtCompact(amount)}
            tone="ink"
          />
          <SummaryCard
            icon={TrendingUp}
            label="Total interest"
            value={fmtCompact(interest)}
            tone="gold"
          />
          <SummaryCard
            icon={Banknote}
            label="Total payable"
            value={fmtCompact(total)}
            tone="success"
          />
        </div>

        <AmortizationTable
          rows={schedule}
          amount={amount}
          rate={rate}
          loanType={loanType}
        />

        <EMILeadCapture loanType={loanType} amount={amount} />
      </Container>
    </section>
  );
}

function LegendRow({
  color,
  label,
  pct,
  value,
}: {
  color: string;
  label: string;
  pct: number;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-ink-300">
          <span className={`inline-block h-2.5 w-2.5 rounded-sm ${color}`} />
          <span className="font-medium uppercase tracking-wider">{label}</span>
          <span className="text-ink-500">· {pct.toFixed(1)}%</span>
        </div>
        <span className="font-display font-semibold text-white tabular-nums">
          {value}
        </span>
      </div>
      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  tone: "brand" | "ink" | "gold" | "success";
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-50 text-brand-700 ring-brand-100",
    ink: "bg-ink-100 text-ink-900 ring-ink-200",
    gold: "bg-amber-50 text-amber-700 ring-amber-100",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-ink-200 bg-white p-5"
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 flex-none place-items-center rounded-xl ring-1 ring-inset ${tones[tone]}`}
        >
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {label}
          </div>
          <div className="mt-0.5 font-display text-xl font-bold text-ink-900 tabular-nums truncate">
            {value}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Slider({
  icon: Icon,
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  ticks,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  ticks: { label: string; value: number }[];
}) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(((value - min) / (max - min)) * 100);
  }, [value, min, max]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink-700">
          <Icon size={14} />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {label}
          </span>
        </div>
        <span className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-900 tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-4 w-full"
        style={{ ["--val" as never]: `${pct}%` }}
      />
      <div className="relative mt-2 h-3.5">
        {ticks.map((t) => {
          const tPct = ((t.value - min) / (max - min)) * 100;
          return (
            <span
              key={t.label}
              className="absolute -translate-x-1/2 text-[10px] text-ink-400 tabular-nums"
              style={{ left: `${tPct}%` }}
            >
              {t.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function SelectField({
  label,
  icon: Icon,
  value,
  onChange,
  options,
}: {
  label: string;
  icon: React.ElementType;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-ink-700">
        <Icon size={14} />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </span>
      </span>
      <span className="relative mt-3 block">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-ink-200 bg-white py-3 px-4 pr-9 text-sm font-medium text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400">
          ▾
        </span>
      </span>
    </label>
  );
}

/* ----- Amortization table ----- */

function AmortizationTable({
  rows,
  amount,
  rate,
  loanType,
}: {
  rows: Row[];
  amount: number;
  rate: number;
  loanType: string;
}) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    if (!q.trim()) return rows;
    const needle = q.trim().toLowerCase();
    return rows.filter((r) =>
      [r.month, r.emi, r.principal, r.interest, r.balance]
        .map(String)
        .some((v) => v.toLowerCase().includes(needle))
    );
  }, [q, rows]);

  useEffect(() => {
    setPage(1);
  }, [q, rows.length]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const view = filtered.slice(start, start + perPage);

  const monthLabel = (m: number) => {
    const yr = Math.floor((m - 1) / 12) + 1;
    const mo = ((m - 1) % 12) + 1;
    return `Y${yr} · M${mo}`;
  };

  const downloadCSV = () => {
    const header = "Month,EMI,Principal,Interest,Outstanding Balance\n";
    const body = rows
      .map((r) => `${r.month},${r.emi},${r.principal},${r.interest},${r.balance}`)
      .join("\n");
    const blob = new Blob([`﻿${header}${body}`], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `manvi-emi-schedule-${loanType.replace(/\s+/g, "-").toLowerCase()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = async () => {
    const { jsPDF } = await import("jspdf");
    const autoTable = (await import("jspdf-autotable")).default;
    const doc = new jsPDF({ unit: "pt" });
    doc.setFontSize(16);
    doc.text("Manvi Fintech — EMI Schedule", 40, 50);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
      `Loan: ${loanType} · Amount: ${fmtCompact(amount)} · Rate: ${rate.toFixed(2)}% p.a.`,
      40,
      68
    );
    autoTable(doc, {
      startY: 90,
      head: [["Month", "EMI", "Principal", "Interest", "Outstanding"]],
      body: rows.map((r) => [
        monthLabel(r.month),
        fmtINR(r.emi),
        fmtINR(r.principal),
        fmtINR(r.interest),
        fmtINR(r.balance),
      ]),
      headStyles: { fillColor: [11, 59, 145], textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 8.5 },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      margin: { left: 40, right: 40 },
    });
    doc.save(
      `manvi-emi-schedule-${loanType.replace(/\s+/g, "-").toLowerCase()}.pdf`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mt-10 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft"
    >
      <div className="flex flex-col gap-4 border-b border-ink-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900">
            Amortization Schedule
          </h3>
          <p className="mt-1 text-xs text-ink-500">
            Month-wise EMI breakdown · {rows.length} months · reducing balance
            method
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="relative">
            <Search
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search month, amount…"
              className="h-9 w-48 rounded-full border border-ink-200 bg-white pl-8 pr-3 text-xs text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
            />
          </label>
          <button
            onClick={downloadCSV}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 text-xs font-medium text-ink-900 hover:border-brand-300 hover:bg-brand-50"
          >
            <FileSpreadsheet size={14} /> Excel
          </button>
          <button
            onClick={downloadPDF}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink-900 px-3 text-xs font-medium text-white hover:bg-brand-800"
          >
            <FileText size={14} /> PDF
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-ink-50/60 text-left text-[11px] font-semibold uppercase tracking-wider text-ink-500">
              <th className="px-5 py-3">Month</th>
              <th className="px-5 py-3 text-right">EMI</th>
              <th className="px-5 py-3 text-right">Principal</th>
              <th className="px-5 py-3 text-right">Interest</th>
              <th className="px-5 py-3 text-right">Outstanding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 text-ink-700 tabular-nums">
            {view.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-10 text-center text-sm text-ink-500"
                >
                  No matching months
                </td>
              </tr>
            ) : (
              view.map((r) => (
                <tr key={r.month} className="hover:bg-ink-50/60">
                  <td className="px-5 py-3 text-ink-900 font-medium">
                    {monthLabel(r.month)}
                  </td>
                  <td className="px-5 py-3 text-right">{fmtINR(r.emi)}</td>
                  <td className="px-5 py-3 text-right text-brand-700 font-medium">
                    {fmtINR(r.principal)}
                  </td>
                  <td className="px-5 py-3 text-right text-amber-700 font-medium">
                    {fmtINR(r.interest)}
                  </td>
                  <td className="px-5 py-3 text-right text-ink-900 font-semibold">
                    {fmtINR(r.balance)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-ink-100 p-4">
        <div className="text-xs text-ink-500">
          Showing{" "}
          <span className="font-medium text-ink-900">
            {view.length === 0 ? 0 : start + 1}
          </span>
          –
          <span className="font-medium text-ink-900">{start + view.length}</span>{" "}
          of <span className="font-medium text-ink-900">{filtered.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-xs text-ink-700">
            Page <span className="font-semibold text-ink-900">{page}</span> /{" "}
            {pages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ----- Lead Capture under EMI ----- */

function EMILeadCapture({
  loanType,
  amount,
}: {
  loanType: string;
  amount: number;
}) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative mt-10 overflow-hidden rounded-2xl border border-ink-200 bg-white p-8 shadow-soft sm:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="eyebrow">Talk to an expert</span>
          <h3 className="mt-4 h-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            Need <span className="text-gradient">better interest rates?</span>
          </h3>
          <p className="mt-3 max-w-md text-sm text-ink-600 leading-relaxed">
            Our experts compare and negotiate offers across 25+ banks and NBFCs
            on your behalf — fully matched to your profile, at no cost.
          </p>
          <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-700">
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" /> Free
              consultation
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" /> No
              obligation
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" /> Reply in
              15 min
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-5 text-ink-900">
          {submitted ? (
            <div className="grid place-items-center py-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              <h4 className="mt-3 font-display text-lg font-semibold">
                We&apos;ll call you back
              </h4>
              <p className="mt-1 text-xs text-ink-600">
                A loan expert will reach out within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <MiniField
                icon={User}
                label="Name"
                placeholder="Your name"
                required
              />
              <MiniField
                icon={Phone}
                label="Mobile"
                type="tel"
                placeholder="+91 98765 xxxxx"
                required
              />
              <MiniSelect
                icon={Banknote}
                label="Loan requirement"
                defaultValue={`${loanType} · ${fmtCompact(amount)}`}
                options={LOAN_TYPES.map((l) => l.label)}
              />
              <Button size="md" className="w-full">
                Get free consultation
                <ArrowRight size={16} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MiniField({
  icon: Icon,
  label,
  ...props
}: {
  icon: React.ElementType;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="relative mt-1 block">
        <Icon
          size={14}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
        />
        <input
          {...props}
          className="w-full rounded-xl border border-ink-200 bg-white py-2.5 pl-9 pr-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        />
      </span>
    </label>
  );
}

function MiniSelect({
  icon: Icon,
  label,
  defaultValue,
  options,
}: {
  icon: React.ElementType;
  label: string;
  defaultValue: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="relative mt-1 block">
        <Icon
          size={14}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
        />
        <select
          defaultValue={defaultValue}
          className="w-full appearance-none rounded-xl border border-ink-200 bg-white py-2.5 pl-9 pr-9 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        >
          <option value={defaultValue}>{defaultValue}</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400">
          ▾
        </span>
      </span>
    </label>
  );
}
