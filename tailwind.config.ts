import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        brand: {
          DEFAULT: "#0B3B91",
          50: "#EFF4FF",
          100: "#DBE6FF",
          200: "#BFD2FE",
          300: "#93B4FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#0B3B91",
          900: "#082B6B",
        },
        accent: {
          DEFAULT: "#60A5FA",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        gold: {
          DEFAULT: "#F59E0B",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        glow: "0 20px 60px -20px rgba(11, 59, 145, 0.45)",
        gold: "0 20px 60px -20px rgba(245, 158, 11, 0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(11,59,145,0.10), transparent 60%)",
        "brand-gradient":
          "linear-gradient(135deg, #0B3B91 0%, #2563EB 50%, #60A5FA 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-15px) scale(1.05)" },
          "66%": { transform: "translate(-15px,10px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "blob-drift": "blob-drift 14s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
