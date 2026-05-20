"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ScoreGaugeProps {
  score: number;
  emaiLevel: number;
}

function scoreColor(score: number) {
  if (score < 40) return "text-mz-red";
  if (score < 70) return "text-mz-amber";
  if (score < 85) return "text-mz-green";
  return "text-mz-cyan";
}

export function ScoreGauge({ score, emaiLevel }: ScoreGaugeProps) {
  const circumference = 251.2;
  const progress = Math.min(100, Math.max(0, score));
  const dash = circumference - (progress / 100) * circumference;

  return (
    <div className="rounded-card border border-mz-border bg-mz-surface p-6 text-center shadow-mz-card">
      <div className="relative mx-auto h-40 w-72 max-w-full">
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1E3A5F" strokeWidth="14" strokeLinecap="round" />
          <motion.path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dash }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FF3D00" />
              <stop offset="45%" stopColor="#FFB300" />
              <stop offset="75%" stopColor="#00C851" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-x-0 bottom-0">
          <p className={`font-display text-display-md ${scoreColor(score)}`}>{score.toFixed(0)}%</p>
          <p className="text-label uppercase text-mz-text-tertiary">Score SEA</p>
        </div>
      </div>
      <Badge variant="emai" emaiLevel={emaiLevel} className="mt-4">Nivel EMAI {emaiLevel}</Badge>
    </div>
  );
}
