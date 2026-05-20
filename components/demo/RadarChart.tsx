"use client";

import { Radar, RadarChart as RechartsRadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";

interface RadarChartProps {
  data: Array<Record<string, string | number>>;
}

export function RadarChart({ data }: RadarChartProps) {
  return (
    <div className="rounded-card border border-mz-border bg-mz-surface p-6 shadow-mz-card">
      <ResponsiveContainer width="100%" height={280}>
        <RechartsRadarChart data={data}>
          <PolarGrid stroke="#1E3A5F" strokeDasharray="3 3" />
          <PolarAngleAxis dataKey="dimension" tick={{ fill: "#94A3B8", fontSize: 12 }} />
          <PolarRadiusAxis domain={[0, 5]} tick={{ fill: "#64748B", fontSize: 10 }} />
          <Radar name="Tu Organización" dataKey="Tu" stroke="#00D4FF" fill="#00D4FF" fillOpacity={0.2} dot />
          <Radar name="Promedio Nacional" dataKey="Nacional" stroke="#FFB300" fill="#FFB300" fillOpacity={0.08} />
          <Legend wrapperStyle={{ color: "#94A3B8", fontSize: "12px" }} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
