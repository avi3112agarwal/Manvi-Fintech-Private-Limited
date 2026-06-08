"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const text = encodeURIComponent(
    "Hi Manvi Fintech, I'd like to know more about your loan options."
  );
  return (
    <motion.a
      href={`https://wa.me/919876543210?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 220, damping: 18 }}
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
