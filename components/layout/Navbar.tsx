"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Loans" },
  { href: "#emi", label: "EMI Calculator" },
  { href: "#why-manvi", label: "Why Manvi" },
  { href: "#process", label: "Process" },
  { href: "#partners", label: "Partners" },
  { href: "#branches", label: "Branches" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-ink-100"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Tablet nav: short version */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4">
          {links.slice(0, 5).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink-700 hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" href="tel:+919876543210">
            Call us
          </Button>
          <Button size="sm" href="#contact">
            Apply for loan
          </Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 hover:bg-ink-100"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100"
                >
                  {l.label}
                </a>
              ))}
              <Button className="mt-3" href="#contact">
                Apply for loan
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
