import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { doraTargets } from "@/lib/mayaguez-data";
import { ArrowRight, TrendingUp, Zap, Activity, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Target DORA por Nivel EMAI | Documentación Mayagüez",
};

const doraMetrics = [
  {
    icon: Zap,
    name: "Deployment Frequency",
    description: "Con qué frecuencia despliega el equipo código a producción. Es el indicador más directo de la velocidad del equipo.",
    elite: "On-demand (múltiples veces al día)",
    mayaguezResult: "14 despliegues/semana (piloto Q1 2026)",
  },
  {
    icon: TrendingUp,
    name: "Lead Time for Changes",
    description: "Tiempo desde que un commit entra al repositorio hasta que está en producción. Mide la eficiencia del pipeline completo.",
    elite: "Menos de 1 hora",
    mayaguezResult: "55 minutos (piloto Q1 2026, desde 18 días)",
  },
  {
    icon: Activity,
    name: "Mean Time to Restore (MTTR)",
    description: "Tiempo promedio para restaurar el servicio tras un incidente en producción. Mide la resiliencia del equipo.",
    elite: "Menos de 1 hora",
    mayaguezResult: "22 minutos (piloto Q1 2026, desde 14 horas)",
  },
  {
    icon: AlertTriangle,
    name: "Change Failure Rate (CFR)",
    description: "Porcentaje de cambios en producción que resultan en degradación del servicio o rollback. Mide la calidad del pipeline.",
    elite: "0% - 15%",
    mayaguezResult: "7% (piloto Q1 2026, desde 38%)",
  },
];

const categoryColors = {
  "Low": "text-red-400 bg-red-500/10 border-red-500/30",
  "Medium": "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  "High": "text-blue-400 bg-blue-500/10 border-blue-500/30",
  "Elite": "text-green-400 bg-green-500/10 border-green-500/30",
};

const emaiLabelColors: Record<string, string> = {
  "0-1": "text-red-400",
  "2": "text-yellow-400",
  "3": "text-blue-400",
  "4-5": "text-green-400",
};

export default function DoraTargetPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Scoring y Métricas</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Target DORA por Nivel EMAI
        </h1>
        <p className="text-mayaguez-text-secondary max-w-2xl">
          Cada nivel EMAI del Modelo Mayagüez tiene objetivos DORA explícitos y alcanzables.
          Las métricas DORA son el lenguaje común que conecta la madurez técnica con el
          desempeño real de los equipos.
        </p>
      </div>

      {/* DORA Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {doraMetrics.map((metric) => (
          <Card key={metric.name} variant="bordered" className="border-mayaguez-accent/15">
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <metric.icon className="h-5 w-5 text-mayaguez-accent flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-mayaguez-text-primary text-sm">{metric.name}</h3>
              </div>
              <p className="text-xs text-mayaguez-text-secondary leading-relaxed mb-3">{metric.description}</p>
              <div className="space-y-1.5">
                <div className="flex gap-2 text-xs">
                  <span className="text-mayaguez-success font-medium w-16 flex-shrink-0">Elite:</span>
                  <span className="text-mayaguez-text-secondary">{metric.elite}</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="text-mayaguez-accent font-medium w-16 flex-shrink-0">Piloto:</span>
                  <span className="text-mayaguez-accent">{metric.mayaguezResult}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* DORA Targets Table */}
      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Objetivos por Nivel EMAI</h2>
      <div className="overflow-x-auto rounded-lg border border-mayaguez-accent/20 mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-mayaguez-secondary/50 border-b border-mayaguez-accent/20">
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Nivel EMAI</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">DORA</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Freq. Despliegue</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Lead Time</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">MTTR</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">CFR</th>
            </tr>
          </thead>
          <tbody>
            {doraTargets.map((row, i) => {
              const catStyle = categoryColors[row.doraCategory as keyof typeof categoryColors] || "";
              return (
                <tr key={row.emaiLevel} className={`border-b border-mayaguez-accent/10 ${i % 2 === 0 ? "" : "bg-mayaguez-secondary/20"}`}>
                  <td className={`py-3 px-4 font-bold ${emaiLabelColors[row.emaiLevel] ?? "text-mayaguez-text-primary"}`}>EMAI {row.emaiLevel}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-0.5 rounded border font-bold ${catStyle}`}>
                      {row.doraCategory}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-mayaguez-text-secondary text-xs">{row.deploymentFrequency}</td>
                  <td className="py-3 px-4 text-mayaguez-text-secondary text-xs">{row.leadTime}</td>
                  <td className="py-3 px-4 text-mayaguez-text-secondary text-xs">{row.mttr}</td>
                  <td className="py-3 px-4 text-mayaguez-text-secondary text-xs">{row.changeFailureRate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-mayaguez-accent/10">
        <Link href="/docs/scoring/sea" className="text-sm text-mayaguez-text-muted hover:text-mayaguez-accent transition-colors">
          ← Fórmula SEA
        </Link>
        <Link href="/demo" className="text-sm text-mayaguez-accent hover:opacity-80 flex items-center gap-1">
          Ver mi categoría DORA <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
