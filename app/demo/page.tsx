import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import DemoWizard from "@/components/demo/DemoWizard";
import { Shield, BarChart2, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Evaluador de Madurez DevSecOps | Modelo Mayagüez",
  description:
    "Evalúa el nivel de madurez DevSecOps de tu organización con el cuestionario de 40 preguntas del Modelo Mayagüez. Obtén tu nivel EMAI, score SEA, categoría DORA y roadmap personalizado.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.2),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <Badge variant="info" className="mb-6">
            Evaluador Interactivo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-mayaguez-text-primary mb-4 max-w-3xl mx-auto leading-tight">
            Evaluador de Madurez DevSecOps Mayagüez
          </h1>
          <p className="text-lg text-mayaguez-text-secondary max-w-2xl mx-auto mb-8">
            40 preguntas. 4 dimensiones. Resultados inmediatos con tu nivel EMAI,
            score SEA, categoría DORA, medalla MIG y roadmap personalizado de 90 días.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: Shield, label: "40 preguntas validadas" },
              { icon: BarChart2, label: "Fórmula SEA oficial" },
              { icon: Award, label: "Medalla MIG" },
              { icon: TrendingUp, label: "ROI estimado" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-mayaguez-text-secondary">
                <Icon className="h-4 w-4 text-mayaguez-accent" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Wizard */}
      <section className="py-12 bg-mayaguez-primary">
        <div className="container-custom">
          <DemoWizard />
        </div>
      </section>
    </>
  );
}
