import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { questions } from "@/lib/survey-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cuestionario de Evaluación DevSecOps | Documentación Mayagüez",
};

const dimensionInfo: Record<string, { label: string; color: string; range: string; desc: string }> = {
  technical: {
    label: "Técnica",
    color: "text-mayaguez-accent",
    range: "P1–P10",
    desc: "Evalúa la adopción de pipelines CI/CD, herramientas de seguridad, automatización, IaC y métricas DORA.",
  },
  organizational: {
    label: "Organizacional",
    color: "text-purple-400",
    range: "P11–P20",
    desc: "Evalúa la estrategia formal, integración Dev-Sec-Ops, RACI, gestión de cambios y apoyo directivo.",
  },
  cultural: {
    label: "Cultural",
    color: "text-mayaguez-warning",
    range: "P21–P30",
    desc: "Evalúa la cultura de responsabilidad compartida, colaboración, capacitación y apertura al cambio.",
  },
  maturity: {
    label: "Madurez",
    color: "text-mayaguez-success",
    range: "P31–P40",
    desc: "Evalúa la estandarización, medición, trazabilidad, autonomía basada en datos y adaptabilidad.",
  },
};

const dimensionOrder = ["technical", "organizational", "cultural", "maturity"];

export default function CuestionarioPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Referencia</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Cuestionario de Evaluación de Adopción DevSecOps
        </h1>
        <p className="text-mayaguez-text-secondary mb-2">
          40 preguntas en escala Likert (1-5) organizadas en 4 dimensiones. Este instrumento fue
          diseñado y validado con 20 organizaciones colombianas como parte de la investigación del
          Modelo Mayagüez (2026).
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="default">40 preguntas</Badge>
          <Badge variant="default">Escala Likert 1-5</Badge>
          <Badge variant="default">4 dimensiones</Badge>
          <Badge variant="default">Validado Colombia 2026</Badge>
        </div>
      </div>

      {/* Scale reference */}
      <Card variant="bordered" className="border-mayaguez-accent/20 mb-8">
        <CardContent className="p-5">
          <p className="text-sm font-semibold text-mayaguez-accent mb-3 uppercase tracking-wider">Escala de Respuesta</p>
          <div className="flex flex-wrap gap-3">
            {[
              { val: 1, label: "Nunca" },
              { val: 2, label: "Raramente" },
              { val: 3, label: "A veces" },
              { val: 4, label: "Frecuentemente" },
              { val: 5, label: "Siempre" },
            ].map(({ val, label }) => (
              <div key={val} className="flex items-center gap-2 text-sm">
                <span className="w-7 h-7 rounded-full bg-mayaguez-secondary/50 border border-mayaguez-accent/30 flex items-center justify-center font-bold text-mayaguez-accent text-xs">
                  {val}
                </span>
                <span className="text-mayaguez-text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Questions by dimension */}
      {dimensionOrder.map((dim) => {
        const info = dimensionInfo[dim];
        const dimQuestions = questions.filter(q => q.dimension === dim);
        return (
          <div key={dim} className="mb-10">
            <div className="flex items-start gap-3 mb-4 p-4 rounded-lg bg-mayaguez-secondary/20 border border-mayaguez-accent/10">
              <div>
                <span className={`font-bold text-lg ${info.color}`}>{info.label}</span>
                <span className="text-mayaguez-text-muted text-sm ml-2">({info.range})</span>
                <p className="text-sm text-mayaguez-text-secondary mt-1">{info.desc}</p>
              </div>
            </div>
            <div className="space-y-2">
              {dimQuestions.map((q) => (
                <div key={q.id} className="flex items-start gap-3 p-3 rounded-lg bg-mayaguez-secondary/20 border border-mayaguez-accent/10">
                  <span className={`font-mono text-xs font-bold ${info.color} w-8 flex-shrink-0 pt-0.5`}>{q.id}</span>
                  <div className="flex-1">
                    <p className="text-sm text-mayaguez-text-primary">{q.text}</p>
                    <span className="text-xs text-mayaguez-text-muted">{q.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-8 p-5 rounded-lg bg-mayaguez-accent/10 border border-mayaguez-accent/30">
        <p className="text-sm font-semibold text-mayaguez-accent mb-2">¿Quieres responder el cuestionario?</p>
        <p className="text-sm text-mayaguez-text-secondary mb-3">
          El Demo Interactivo aplica este cuestionario, calcula tu score SEA con la fórmula oficial
          y te entrega resultados con comparativa de sector y roadmap personalizado.
        </p>
        <Link href="/demo" className="inline-flex items-center gap-2 text-sm font-semibold text-mayaguez-accent hover:opacity-80 transition-opacity">
          Ir al Evaluador Interactivo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
