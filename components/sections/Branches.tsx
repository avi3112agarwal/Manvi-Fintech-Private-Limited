"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BRANCHES = [
  {
    name: "Ghod Dod Road",
    area: "Ghod Dod Road, Surat",
    note: "Main office",
    map: "https://maps.google.com/?q=Ghod+Dod+Road+Surat",
  },
  {
    name: "Ring Road",
    area: "Ring Road, Surat",
    note: "Retail & home loans",
    map: "https://maps.google.com/?q=Ring+Road+Surat",
  },
  {
    name: "Sachin",
    area: "Sachin GIDC, Surat",
    note: "Industrial loans desk",
    map: "https://maps.google.com/?q=Sachin+GIDC+Surat",
  },
  {
    name: "Parvat Patiya",
    area: "Parvat Patiya, Surat",
    note: "Retail branch",
    map: "https://maps.google.com/?q=Parvat+Patiya+Surat",
  },
  {
    name: "Hoziwala Industries",
    area: "Hoziwala Estate, Surat",
    note: "MSME desk",
    map: "https://maps.google.com/?q=Hoziwala+Industries+Surat",
  },
];

export function Branches() {
  return (
    <section id="branches" className="section">
      <Container>
        <SectionHeading
          eyebrow="Branch network"
          title={
            <>
              Serving customers{" "}
              <span className="text-gradient">across Surat</span>
            </>
          }
          description="Walk in for a face-to-face consultation. Five branches, one team."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b, i) => (
            <motion.a
              key={b.name}
              href={b.map}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white hover:border-brand-300 hover:shadow-soft transition"
            >
              {/* Map preview */}
              <div className="relative h-32 overflow-hidden border-b border-ink-100 bg-gradient-to-br from-brand-50 to-accent-500/10">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(30,64,175,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 200 120"
                  fill="none"
                >
                  <path
                    d={`M-10 ${30 + (i % 3) * 10} Q 50 ${
                      60 + (i % 2) * 20
                    } 120 ${40 + (i % 4) * 12} T 220 ${60 + (i % 3) * 8}`}
                    stroke="rgba(30,64,175,0.4)"
                    strokeWidth="1.2"
                  />
                  <path
                    d={`M-10 ${70 + (i % 2) * 10} Q 80 ${30} 140 ${
                      80 + (i % 3) * 10
                    } T 220 ${40}`}
                    stroke="rgba(6,182,212,0.4)"
                    strokeWidth="1"
                  />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-3 -z-10 animate-ping rounded-full bg-brand-500/30" />
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-700 shadow-soft">
                      <MapPin size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  {b.note}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                  {b.name} Branch
                </h3>
                <div className="mt-1 text-sm text-ink-600">{b.area}</div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    <ExternalLink size={12} /> Maps
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1 text-xs font-semibold text-ink-700">
                    <Phone size={12} /> Call
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
