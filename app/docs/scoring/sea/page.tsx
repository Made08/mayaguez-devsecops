import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fórmula SEA — Scoring de Eficiencia Adaptativa | Documentación Mayagüez",
};

const seaParams = [
  {
    key: "M",
    name: "Madurez (Maturity)",
    weight: 0.30,
    weightPct: "30%",
    description: "Nivel de institucionalización de prácticas DevSecOps en la organización. Escala alineada con COBIT 2019 y CMMI V2.0. Mide qué tan repetibles, documentadas y gestionadas son las prácticas.",
    source: "Dimensión de Madurez del cuestionario (P31-P40)",
    max: 5,
    example: "Si el promedio de las preguntas P31-P40 es 3.5/5, M = 3.5",
  },
  {
    key: "C",
    name: "Cobertura (Coverage)",
    weight: 0.20,
    weightPct: "20%",
    description: "Alcance de instrumentación del modelo sobre los activos críticos de la organización. Combina la dimensión técnica y de madurez. Mide qué porcentaje de la infraestructura está cubierta.",
    source: "Combinación: Técnica (60%) + Madurez (40%)",
    max: 5,
    example: "C = (Técnica × 0.6) + (Madurez × 0.4)",
  },
  {
    key: "A",
    name: "Apropiación (Appropriation)",
    weight: 0.20,
    weightPct: "20%",
    description: "Grado en que la cultura organizacional ha internalizado el modelo DevSecOps. Basado en el modelo Westrum de cultura generativa. Mide si el equipo vive los principios, no solo los conoce.",
    source: "Dimensión Cultural del cuestionario (P21-P30)",
    max: 5,
    example: "Si el promedio de P21-P30 es 2.8/5, A = 2.8",
  },
  {
    key: "E",
    name: "Evidencia (Evidence)",
    weight: 0.15,
    weightPct: "15%",
    description: "Calidad de los artefactos inmutables generados por el pipeline. Mide si existen registros en JSON (no documentación manual) de cada despliegue, auditoría, rollback y validación de política.",
    source: "Combinación: Técnica (50%) + Madurez (50%)",
    max: 5,
    example: "E = (Técnica × 0.5) + (Madurez × 0.5)",
  },
  {
    key: "G",
    name: "Gobernanza Sin Fricción",
    weight: 0.15,
    weightPct: "15%",
    description: "Grado de reducción de intervención manual en el proceso de aprobación de cambios (CAB) y deuda técnica acumulada. Mide si la gobernanza fluye automáticamente basada en evidencia.",
    source: "Combinación: Organizacional (70%) + Madurez (30%)",
    max: 5,
    example: "G = (Organizacional × 0.7) + (Madurez × 0.3)",
  },
];

const emaiMapping = [
  { range: "0 - 19.9%", level: 0, name: "Inexistente", dora: "Low" },
  { range: "20 - 39.9%", level: 1, name: "Ad-hoc / Inicial", dora: "Low" },
  { range: "40 - 54.9%", level: 2, name: "Gestionado", dora: "Medium" },
  { range: "55 - 69.9%", level: 3, name: "Definido", dora: "High" },
  { range: "70 - 84.9%", level: 4, name: "Medido", dora: "Elite" },
  { range: "85 - 100%", level: 5, name: "Optimizado", dora: "Elite" },
];

const levelColors = [
  "text-gray-400", "text-orange-400", "text-yellow-400",
  "text-blue-400", "text-green-400", "text-purple-400",
];

export default function SeaPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Scoring y Métricas</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Fórmula SEA: Scoring de Eficiencia Adaptativa
        </h1>
        <p className="text-mayaguez-text-secondary max-w-2xl">
          El SEA es el índice oficial del Modelo Mayagüez que cuantifica la Eficiencia Operativa
          de una organización TI en el proceso de adopción DevSecOps.
        </p>
      </div>

      {/* The Formula */}
      <Card variant="bordered" className="border-mayaguez-accent/30 bg-mayaguez-accent/5 mb-8">
        <CardContent className="p-6">
          <p className="text-xs font-semibold text-mayaguez-accent uppercase tracking-wider mb-4">Fórmula Oficial</p>
          <div className="font-mono text-mayaguez-text-primary">
            <p className="text-lg mb-1">
              <span className="text-mayaguez-accent font-bold">EO (%)</span> =
            </p>
            <div className="pl-6 text-base space-y-1 text-mayaguez-text-secondary">
              <p>[ <span className="text-mayaguez-accent">M</span> × 0.30  <span className="text-mayaguez-text-muted">(Madurez 30%)</span></p>
              <p>+ <span className="text-purple-400">C</span> × 0.20  <span className="text-mayaguez-text-muted">(Cobertura 20%)</span></p>
              <p>+ <span className="text-yellow-400">A</span> × 0.20  <span className="text-mayaguez-text-muted">(Apropiación 20%)</span></p>
              <p>+ <span className="text-blue-400">E</span> × 0.15  <span className="text-mayaguez-text-muted">(Evidencia 15%)</span></p>
              <p>+ <span className="text-mayaguez-success">G</span> × 0.15 ] <span className="text-mayaguez-text-muted">(Gobernanza 15%)</span></p>
              <p className="mt-2">× 20 <span className="text-mayaguez-text-muted text-sm">→ Escala a 0-100%</span></p>
            </div>
          </div>
          <p className="text-xs text-mayaguez-text-muted mt-4">
            Donde cada parámetro tiene un rango normalizado de 0 a 5, alineado con la Escala EMAI.
          </p>
        </CardContent>
      </Card>

      {/* Parameters Detail */}
      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Parámetros SEA</h2>
      <div className="space-y-4 mb-10">
        {seaParams.map((param) => (
          <Card key={param.key} variant="bordered" className="border-mayaguez-accent/10">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-mayaguez-accent/10 flex items-center justify-center font-bold text-xl text-mayaguez-accent flex-shrink-0">
                  {param.key}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-mayaguez-text-primary">{param.name}</h3>
                    <Badge variant="info" className="text-xs">{param.weightPct}</Badge>
                  </div>
                  <p className="text-sm text-mayaguez-text-secondary mb-3">{param.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-xs bg-mayaguez-primary/60 rounded px-3 py-2">
                      <p className="text-mayaguez-text-muted mb-1">Fuente de datos</p>
                      <p className="text-mayaguez-text-secondary font-mono">{param.source}</p>
                    </div>
                    <div className="text-xs bg-mayaguez-primary/60 rounded px-3 py-2">
                      <p className="text-mayaguez-text-muted mb-1">Ejemplo de cálculo</p>
                      <p className="text-mayaguez-text-secondary font-mono">{param.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* EMAI Mapping */}
      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Mapeo SEA → EMAI → DORA</h2>
      <div className="overflow-x-auto rounded-lg border border-mayaguez-accent/20 mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-mayaguez-secondary/50 border-b border-mayaguez-accent/20">
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Score SEA (EO%)</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Nivel EMAI</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Nombre</th>
              <th className="text-left py-3 px-4 text-mayaguez-text-secondary font-medium">Categoría DORA</th>
            </tr>
          </thead>
          <tbody>
            {emaiMapping.map((row, i) => (
              <tr key={row.level} className={`border-b border-mayaguez-accent/10 ${i % 2 === 0 ? "" : "bg-mayaguez-secondary/20"}`}>
                <td className="py-3 px-4 font-mono text-mayaguez-text-secondary">{row.range}</td>
                <td className={`py-3 px-4 font-bold ${levelColors[row.level]}`}>EMAI {row.level}</td>
                <td className={`py-3 px-4 ${levelColors[row.level]}`}>{row.name}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                    row.dora === "Elite" ? "text-green-400 bg-green-500/20" :
                    row.dora === "High" ? "text-blue-400 bg-blue-500/20" :
                    row.dora === "Medium" ? "text-yellow-400 bg-yellow-500/20" :
                    "text-red-400 bg-red-500/20"
                  }`}>{row.dora}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Example Calculation */}
      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Ejemplo de Cálculo</h2>
      <Card variant="bordered" className="border-mayaguez-accent/20 mb-8">
        <CardContent className="p-6">
          <p className="text-xs text-mayaguez-text-muted mb-4">Organización tipo: Empresa de Logística (caso real del estudio)</p>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex gap-4">
              <span className="text-mayaguez-accent w-6">M</span>
              <span className="text-mayaguez-text-secondary">= 4.33 (Madurez: promedio P31-P40)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-purple-400 w-6">C</span>
              <span className="text-mayaguez-text-secondary">= 4.33 × 0.6 + 4.33 × 0.4 = 4.33 (Cobertura)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-yellow-400 w-6">A</span>
              <span className="text-mayaguez-text-secondary">= 4.20 (Cultural: promedio P21-P30)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-400 w-6">E</span>
              <span className="text-mayaguez-text-secondary">= 4.33 × 0.5 + 4.33 × 0.5 = 4.33 (Evidencia)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-mayaguez-success w-6">G</span>
              <span className="text-mayaguez-text-secondary">= 4.30 × 0.7 + 4.33 × 0.3 = 4.31 (Gobernanza)</span>
            </div>
            <div className="border-t border-mayaguez-accent/20 pt-2 mt-2">
              <span className="text-mayaguez-text-secondary">EO(%) = [4.33×0.30 + 4.33×0.20 + 4.20×0.20 + 4.33×0.15 + 4.31×0.15] × 20</span>
            </div>
            <div className="flex gap-4">
              <span className="text-mayaguez-accent font-bold">EO</span>
              <span className="text-mayaguez-success font-bold">= 86.0% → EMAI 5 → Elite</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between pt-6 border-t border-mayaguez-accent/10">
        <Link href="/docs" className="text-sm text-mayaguez-text-muted hover:text-mayaguez-accent transition-colors">
          ← Documentación
        </Link>
        <Link href="/demo" className="text-sm text-mayaguez-accent hover:opacity-80 flex items-center gap-1">
          Calcular mi Score SEA <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
