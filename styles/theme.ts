export const mayaguezTheme = {
  colors: {
    void: "#020810",
    deep: "#060E1A",
    dark: "#0A1628",
    surface: "#0F1F35",
    elevated: "#162540",
    border: "#1E3A5F",
    cyan: "#00D4FF",
    green: "#00C851",
    amber: "#FFB300",
    red: "#FF3D00",
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
      tertiary: "#64748B",
      inverse: "#0A1628",
    },
  },
  spacing: {
    sectionSm: "64px",
    sectionMd: "96px",
    sectionLg: "128px",
    sectionXl: "160px",
  },
  radii: {
    card: "12px",
    button: "6px",
    badge: "4px",
    pill: "9999px",
  },
  shadows: {
    card: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.08)",
    hover: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.2)",
    glow: "0 0 24px rgba(0,212,255,0.15)",
    elite: "0 0 32px rgba(0,200,81,0.2)",
  },
} as const;

export type MayaguezTheme = typeof mayaguezTheme;
