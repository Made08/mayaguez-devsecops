"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  tone?: "cyan" | "green" | "amber" | "red";
  className?: string;
}

const toneClasses = {
  cyan: "text-mz-cyan",
  green: "text-mz-green",
  amber: "text-mz-amber",
  red: "text-mz-red",
};

export function StatBlock({ value, suffix = "", label, description, tone = "cyan", className }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border-l border-mz-border pl-6", className)}
    >
      <div className={cn("font-display text-display-sm md:text-display-lg", toneClasses[tone])}>
        {display}{suffix && <span className="text-display-sm text-mz-text-secondary">{suffix}</span>}
      </div>
      <p className="text-label uppercase text-mz-text-tertiary">{label}</p>
      {description && <p className="mt-2 text-body-sm text-mz-text-secondary">{description}</p>}
    </motion.div>
  );
}
