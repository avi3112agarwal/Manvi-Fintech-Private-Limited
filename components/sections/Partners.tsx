"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Bank list. To add a real logo:
 *   1. Save the file at `public/banks/<slug>.<ext>`  (SVG / PNG / WebP / JPG / AVIF)
 *   2. Set `logo: true` on the bank below
 *   3. If the file isn't SVG, also set `ext: "png"` (etc.)
 *
 * Without a logo file, the tile falls back to a clean monogram badge
 * + the bank name — so the layout never breaks.
 */
type Bank = {
  name: string;
  slug: string;
  logo?: boolean;
  ext?: "svg" | "png" | "webp" | "jpg" | "avif";
  /** Per-bank zoom inside its tile (default 1). Use >1 for logos that read small. */
  scale?: number;
};

const BANKS: Bank[] = [
  { name: "HDFC Bank", slug: "hdfc", logo: true, ext: "png", scale: 1.35 },
  { name: "ICICI Bank", slug: "icici", logo: true, ext: "png" },
  { name: "Axis Bank", slug: "axis", logo: true, ext: "png" },
  { name: "State Bank of India", slug: "sbi", logo: true, ext: "png", scale: 1.2 },
  { name: "Kotak Mahindra Bank", slug: "kotak", logo: true, ext: "png" },
  { name: "Bank of Baroda", slug: "bob", logo: true, ext: "png", scale: 1.2 },
  { name: "Canara Bank", slug: "canara", logo: true, ext: "png" },
  { name: "Union Bank of India", slug: "union-bank", logo: true, ext: "png" },
  { name: "Central Bank of India", slug: "central-bank", logo: true, ext: "png" },
  { name: "IndusInd Bank", slug: "indusind", logo: true, ext: "png" },
  { name: "IDFC First Bank", slug: "idfc-first", logo: true, ext: "png" },
  { name: "Yes Bank", slug: "yes-bank", logo: true, ext: "png" },
  { name: "RBL Bank", slug: "rbl", logo: true, ext: "png" },
  { name: "Bandhan Bank", slug: "bandhan", logo: true, ext: "png" },
  { name: "AU Small Finance Bank", slug: "au", logo: true, ext: "png" },
  { name: "SIDBI", slug: "sidbi", logo: true, ext: "png" },
  { name: "Bajaj Finserv", slug: "bajaj-finserv", logo: true, ext: "png" },
  { name: "Tata Capital", slug: "tata-capital", logo: true, ext: "png" },
  { name: "Aditya Birla Capital", slug: "aditya-birla-capital", logo: true, ext: "png", scale: 1.05 },
  { name: "L&T Finance", slug: "lt-finance", logo: true, ext: "png" },
  { name: "Cholamandalam Finance", slug: "chola", logo: true, ext: "png" },
  { name: "Shriram Finance", slug: "shriram", logo: true, ext: "jpg" },
  { name: "Poonawalla Fincorp", slug: "poonawalla", logo: true, ext: "png", scale: 1.1 },
  { name: "Clix Capital", slug: "clix", logo: true, ext: "png", scale: 1.0 },
  { name: "SMFG India Credit", slug: "smfg", logo: true, ext: "png" },
];

// Split into two rows for opposing-direction marquee.
const half = Math.ceil(BANKS.length / 2);
const ROW_A = BANKS.slice(0, half);
const ROW_B = BANKS.slice(half);

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-y border-ink-100 bg-gradient-to-br from-ink-900 via-brand-900 to-brand-800"
    >
      {/* Ambient lights */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-400/25 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative py-20 lg:py-24">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
              Banking partners
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Backed by India&apos;s{" "}
              <span className="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
                most trusted lenders
              </span>
            </h2>
          </div>
          <div className="lg:pl-6">
            <p className="text-base leading-relaxed text-brand-100/80">
              Direct relationships with{" "}
              <span className="font-semibold text-white">
                {BANKS.length}+ leading banks and NBFCs
              </span>{" "}
              — so you get sharp rates, fast approvals, and the right product
              matched to your profile.
            </p>
          </div>
        </div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 space-y-5"
        >
          <Marquee banks={ROW_A} reverse={false} duration={55} />
          <Marquee banks={ROW_B} reverse duration={65} />
        </motion.div>

        <p className="mt-12 text-center text-xs text-brand-100/60">
          Logos and trade marks are the property of their respective owners and
          are used here for representation only.
        </p>
      </Container>
    </section>
  );
}

function Marquee({
  banks,
  reverse,
  duration,
}: {
  banks: Bank[];
  reverse: boolean;
  duration: number;
}) {
  const items = [...banks, ...banks];
  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        className="flex w-max gap-5 animate-marquee group-hover/marquee:[animation-play-state:paused]"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
      >
        {items.map((b, i) => (
          <BankPill key={`${b.slug}-${i}`} bank={b} />
        ))}
      </div>
    </div>
  );
}

function BankPill({ bank }: { bank: Bank }) {
  const [errored, setErrored] = useState(false);
  const ext = bank.ext ?? "svg";
  const showLogo = bank.logo && !errored;
  const initials = bank.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group relative flex h-28 w-60 flex-none items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/95 px-6 py-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent-400/60 hover:bg-white hover:shadow-[0_18px_40px_-12px_rgba(96,165,250,0.55)]">
      {showLogo ? (
        <div className="relative h-full w-full transition-transform group-hover:scale-[1.05]">
          <div
            className="relative h-full w-full"
            style={bank.scale ? { transform: `scale(${bank.scale})` } : undefined}
          >
            <Image
              src={`/banks/${bank.slug}.${ext}`}
              alt={bank.name}
              fill
              sizes="220px"
              className="object-contain"
              onError={() => setErrored(true)}
            />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center gap-2.5">
          <div className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-ink-900 text-[11px] font-bold text-white">
            {initials}
          </div>
          <span className="font-display text-[12px] font-semibold leading-tight text-ink-900">
            {bank.name}
          </span>
        </div>
      )}

      {/* Top sheen on hover */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}
