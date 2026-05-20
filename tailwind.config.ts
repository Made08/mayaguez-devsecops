import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "mz-void": "#020810",
        "mz-deep": "#060E1A",
        "mz-dark": "#0A1628",
        "mz-surface": "#0F1F35",
        "mz-elevated": "#162540",
        "mz-border": "#1E3A5F",
        "mz-cyan": {
          DEFAULT: "#00D4FF",
          light: "#7ECFFF",
          dark: "#0099CC",
          glow: "#00D4FF20",
        },
        "mz-green": {
          DEFAULT: "#00C851",
          light: "#4ADE80",
          dark: "#009940",
          glow: "#00C85120",
        },
        "mz-amber": {
          DEFAULT: "#FFB300",
          light: "#FCD34D",
          dark: "#CC8F00",
          glow: "#FFB30020",
        },
        "mz-red": {
          DEFAULT: "#FF3D00",
          light: "#FF7043",
          dark: "#CC3100",
          glow: "#FF3D0020",
        },
        "mz-text": {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          tertiary: "#64748B",
          inverse: "#0A1628",
        },
        mayaguez: {
          primary: "#0A1628",
          secondary: "#0F1F35",
          accent: "#00D4FF",
          accentDark: "#0099CC",
          success: "#00C851",
          warning: "#FFB300",
          danger: "#FF3D00",
          text: {
            primary: "#F8FAFC",
            secondary: "#94A3B8",
            muted: "#64748B"
          }
        }
      },
      spacing: {
        "section-sm": "64px",
        "section-md": "96px",
        "section-lg": "128px",
        "section-xl": "160px",
      },
      borderRadius: {
        card: "12px",
        button: "6px",
        badge: "4px",
        pill: "9999px",
      },
      boxShadow: {
        "mz-card": "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.08)",
        "mz-hover": "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.2)",
        "mz-glow": "0 0 24px rgba(0,212,255,0.15)",
        "mz-elite": "0 0 32px rgba(0,200,81,0.2)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["40px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-sm": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-lg": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-md": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        label: ["12px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "500" }],
        caption: ["11px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "400" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #020810 0%, #060E1A 45%, #0A1628 100%)",
        "mz-grid": "linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grid-drift": "gridDrift 24s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
