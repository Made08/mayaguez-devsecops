import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { emaiLevels, triggers, migIncentives, doraTargets } from "@/lib/mayaguez-data";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  TrendingUp,
  Briefcase,
  Zap,
  CheckCircle2,
  XCircle,
  Lock,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modelo de Adopción DevSecOps | Mayagüez",
  description:
    "Escala EMAI 0-5, Triggers de Adaptación, Algoritmo de Gates, Matriz de Incentivos Gamificados y métricas DORA del Modelo Mayagüez.",
};

const emaiColors = [
  { border: "border-gray-600/40", bg: "bg-gray-700/10", text: "text-gray-400", badge: "bg-gray-700/20 text-gray-400 border-gray-600/30" },
  { border: "border-orange-600/40", bg: "bg-orange-700/10", text: "text-orange-400", badge: "bg-orange-700/20 text-orange-400 border-orange-600/30" },
  { border: "border-yellow-600/40", bg: "bg-yellow-700/10", text: "text-yellow-400", badge: "bg-yellow-700/20 text-yellow-400 border-yellow-600/30" },
  { border: "border-blue-600/40", bg: "bg-blue-700/10", text: "text-blue-400", badge: "bg-blue-700/20 text-blue-400 border-blue-600/30" },
  { border: "border-green-600/40", bg: "bg-green-700/10", text: "text-green-400", badge: "bg-mayaguez-success/20 text-mayaguez-success border-mayaguez-success/30" },
  { border: "border-purple-600/40", bg: "bg-purple-700/10", text: "text-purple-400", badge: "bg-purple-700/20 text-purple-400 border-purple-600/30" },
];

const triggerTypeConfig = {
  technical: { label: "SRE", color: "text-mayaguez-accent", bg: "bg-mayaguez-accent/10 border-mayaguez-accent/30", icon: Activity },
  security: { label: "DevSecOps", color: "text-mayaguez-danger", bg: "bg-mayaguez-danger/10 border-mayaguez-danger/30", icon: Lock },
  maturity: { label: "CMMI/COBIT", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/30", icon: TrendingUp },
  business: { label: "ITIL 4", color: "text-mayaguez-warning", bg: "bg-mayaguez-warning/10 border-mayaguez-warning/30", icon: Briefcase },
};

const severityConfig = {
  low: { label: "Bajo", color: "text-mayaguez-success", bg: "bg-mayaguez-success/20" },
  medium: { label: "Medio", color: "text-mayaguez-warning", bg: "bg-mayaguez-warning/20" },
  high: { label: "Alto", color: "text-orange-400", bg: "bg-orange-500/20" },
  critical: { label: "Crítico", color: "text-mayaguez-danger", bg: "bg-mayaguez-danger/20" },
};

const doraColors = {
  "Low": "text-red-400 bg-red-500/20",
  "Medium": "text-yellow-400 bg-yellow-500/20",
  "High": "text-blue-400 bg-blue-500/20",
  "Elite": "text-mayaguez-success bg-mayaguez-success/20",
};

export default function ModeloPage() {
  const triggersByType = {
    technical: triggers.filter((t) => t.type === "technical"),
    security: triggers.filter((t) => t.type === "security"),
    maturity: triggers.filter((t) => t.type === "maturity"),
    business: triggers.filter((t) => t.type === "business"),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Badge variant="info" className="mb-6">
            Arquitectura del Modelo
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-mayaguez-text-primary mb-6 max-w-4xl leading-tight">
            Modelo de Adopción DevSecOps
          </h1>
          <p className="text-xl text-mayaguez-text-secondary max-w-3xl mb-4">
            La Escala EMAI, los Triggers de Adaptación, el Algoritmo de Gates y la Matriz de
            Incentivos Gamificados que conforman el núcleo técnico del Modelo Mayagüez.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {["#emai", "#triggers", "#gates", "#mig", "#dora"].map((anchor) => (
              <a key={anchor} href={anchor}>
                <Badge variant="default" className="cursor-pointer hover:border-mayaguez-accent/60 transition-colors px-3 py-1">
                  {anchor.replace("#", "").toUpperCase()}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMAI Scale */}
      <Section id="emai">
        <SectionHeader
          subtitle="Escala de Madurez Adaptativa Integral"
          title="EMAI 0-5 — Alineada con CMMI V2.0"
          description="La EMAI es el eje central del modelo. Cada nivel define la descripción cultural, el criterio DevSecOps/SRE correspondiente, el verbo rector y la calidad de evidencia esperada."
        />
        <div className="space-y-4">
          {emaiLevels.map((level) => {
            const colors = emaiColors[level.level];
            return (
              <div
                key={level.level}
                className={`rounded-lg border ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:shadow-lg hover:shadow-mayaguez-accent/5`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:w-56 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full border-2 ${colors.border} flex items-center justify-center text-xl font-bold ${colors.text}`}>
                      {level.level}
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${colors.text}`}>{level.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${colors.badge}`}>
                        {level.verb}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-1">Descripción</p>
                      <p className="text-sm text-mayaguez-text-secondary">{level.description}</p>
                    </div>
                    <div>
                      <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-1">DevSecOps / SRE</p>
                      <p className="text-sm text-mayaguez-text-secondary">{level.devsecOps}</p>
                    </div>
                    <div>
                      <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-1">Tipo de Evidencia</p>
                      <span className={`text-sm font-medium ${colors.text}`}>{level.evidence}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SEA Formula */}
      <Section className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Fórmula Oficial"
          title="Scoring de Eficiencia Adaptativa (SEA)"
          description="La fórmula SEA calcula el índice de Eficiencia Operativa ponderando cinco dimensiones críticas del modelo."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card variant="elevated" className="border border-mayaguez-accent/20">
            <CardContent className="p-8">
              <h3 className="text-sm font-medium text-mayaguez-accent uppercase tracking-wider mb-6">Fórmula</h3>
              <div className="font-mono text-mayaguez-text-primary bg-mayaguez-primary/80 rounded-lg p-4 text-sm mb-6 border border-mayaguez-accent/20">
                <p className="text-mayaguez-accent mb-2">EO (%) =</p>
                <p className="ml-4">[(M × 0.30) +</p>
                <p className="ml-5">(C × 0.20) +</p>
                <p className="ml-5">(A × 0.20) +</p>
                <p className="ml-5">(E × 0.15) +</p>
                <p className="ml-5">(G × 0.15)] × 20</p>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-3">
            {[
              { key: "M", name: "Madurez", weight: "30%", desc: "Escala EMAI 0-5, alineada a COBIT 2019 y CMMI" },
              { key: "C", name: "Cobertura", weight: "20%", desc: "Alcance de instrumentación sobre activos críticos" },
              { key: "A", name: "Apropiación", weight: "20%", desc: "Internalización cultural (Cultura Westrum)" },
              { key: "E", name: "Evidencia", weight: "15%", desc: "Registros inmutables en JSON, sin documentación manual" },
              { key: "G", name: "Gobernanza Sin Fricción", weight: "15%", desc: "Reducción de intervención manual en CAB y deuda técnica" },
            ].map((param) => (
              <div key={param.key} className="flex items-start gap-4 p-4 rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10">
                <div className="w-8 h-8 rounded bg-mayaguez-accent/20 flex items-center justify-center font-bold text-mayaguez-accent flex-shrink-0">
                  {param.key}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-mayaguez-text-primary text-sm">{param.name}</span>
                    <Badge variant="info" className="text-xs">{param.weight}</Badge>
                  </div>
                  <p className="text-xs text-mayaguez-text-secondary">{param.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Triggers */}
      <Section id="triggers">
        <SectionHeader
          subtitle="Mecanismos de Autorregulación"
          title="Triggers de Adaptación"
          description="Cuatro tipos de triggers que cambian el estado de gobernanza automáticamente según condiciones técnicas, de seguridad, madurez o contexto de negocio."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(Object.keys(triggersByType) as Array<keyof typeof triggersByType>).map((type) => {
            const config = triggerTypeConfig[type];
            const Icon = config.icon;
            return (
              <div key={type}>
                <div className={`flex items-center gap-3 mb-4 p-3 rounded-lg border ${config.bg}`}>
                  <Icon className={`h-5 w-5 ${config.color}`} />
                  <div>
                    <h3 className={`font-semibold text-sm ${config.color}`}>Triggers {config.label}</h3>
                    <p className="text-xs text-mayaguez-text-muted">
                      {type === "technical" && "Basados en métricas SRE (Error Budget, Latencia, Recursos)"}
                      {type === "security" && "Basados en amenazas de seguridad (CVE, Drift, PaC)"}
                      {type === "maturity" && "Basados en evolución de madurez (EMAI, CFR, Deuda Técnica)"}
                      {type === "business" && "Basados en contexto de negocio (Freeze, Break-glass)"}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {triggersByType[type].map((trigger) => {
                    const severity = severityConfig[trigger.severity];
                    return (
                      <div key={trigger.id} className="rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-mayaguez-accent">{trigger.id}</span>
                            <span className="font-medium text-mayaguez-text-primary text-sm">{trigger.name}</span>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${severity.color} ${severity.bg}`}>
                            {severity.label}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-mayaguez-text-muted mb-1">Condición</p>
                            <p className="text-xs text-mayaguez-text-secondary font-mono bg-mayaguez-primary/50 rounded px-2 py-1">
                              {trigger.condition}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-mayaguez-text-muted mb-1">Acción</p>
                            <p className="text-xs text-mayaguez-text-secondary">{trigger.action}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Algorithm Gates */}
      <Section id="gates" className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Flujo de Decisión"
          title="Algoritmo de Adaptación de Gates"
          description="El motor central de gobernanza que determina si un despliegue activa el Fast-Track (autonomía) o el Gate Burocrático (control manual)."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered" className="border-mayaguez-success/40 bg-mayaguez-success/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-mayaguez-success" />
                  <h3 className="font-bold text-mayaguez-success">Fast-Track Activado</h3>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    "Madurez ≥ Nivel 4 (Elite)",
                    "Error Budget > 20%",
                    "PaC Validation == PASS",
                  ].map((cond) => (
                    <div key={cond} className="flex items-center gap-2 text-sm text-mayaguez-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-mayaguez-success flex-shrink-0" />
                      {cond}
                    </div>
                  ))}
                </div>
                <div className="bg-mayaguez-primary/60 rounded-lg p-3 border border-mayaguez-success/20">
                  <p className="text-xs text-mayaguez-text-muted mb-1">Resultado</p>
                  <p className="text-sm font-medium text-mayaguez-success">
                    Despliegue Automático + Certificado JSON inmutable
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card variant="bordered" className="border-mayaguez-warning/40 bg-mayaguez-warning/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-6 w-6 text-mayaguez-warning" />
                  <h3 className="font-bold text-mayaguez-warning">Gate Burocrático</h3>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    "Madurez < Nivel 4, o",
                    "Error Budget ≤ 20%, o",
                    "PaC Validation == FAIL",
                  ].map((cond) => (
                    <div key={cond} className="flex items-center gap-2 text-sm text-mayaguez-text-secondary">
                      <XCircle className="h-4 w-4 text-mayaguez-warning flex-shrink-0" />
                      {cond}
                    </div>
                  ))}
                </div>
                <div className="bg-mayaguez-primary/60 rounded-lg p-3 border border-mayaguez-warning/20">
                  <p className="text-xs text-mayaguez-text-muted mb-1">Resultado</p>
                  <p className="text-sm font-medium text-mayaguez-warning">
                    Detener despliegue + Plan de Acción sugerido automáticamente
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pseudocode */}
          <Card variant="bordered" className="border-mayaguez-accent/20">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-mayaguez-accent uppercase tracking-wider mb-4">Algoritmo (Pseudocódigo)</h3>
              <pre className="font-mono text-sm text-mayaguez-text-secondary bg-mayaguez-primary rounded-lg p-4 overflow-x-auto border border-mayaguez-accent/10 leading-relaxed">
{`SI Madurez >= Nivel 4 (Elite)
   Y Error_Budget > 20%
   Y PaC_Validation == PASS
ENTONCES:
   Activar Fast-Track (omitir CAB manual)
   SALIDA: Despliegue Automático
           + Certificado JSON inmutable

SI CUALQUIER condición falla:
ENTONCES:
   Gate Burocrático
   SALIDA: Detener despliegue
           + Plan de Acción sugerido`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* DORA Targets */}
      <Section id="dora">
        <SectionHeader
          subtitle="Métricas de Referencia"
          title="Target DORA por Nivel EMAI"
          description="Cada nivel EMAI tiene objetivos DORA explícitos. El nivel Elite (4-5) representa el estado de 'Confianza Verificada': despliegues on-demand, Lead Time < 1 hora."
        />
        <div className="overflow-x-auto rounded-lg border border-mayaguez-accent/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mayaguez-secondary/50 border-b border-mayaguez-accent/20">
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">Nivel EMAI</th>
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">Categoría DORA</th>
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">Frecuencia de Despliegue</th>
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">Lead Time</th>
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">MTTR</th>
                <th className="text-left py-4 px-5 text-mayaguez-text-secondary font-medium">CFR</th>
              </tr>
            </thead>
            <tbody>
              {doraTargets.map((row, i) => {
                const doraStyle = doraColors[row.doraCategory as keyof typeof doraColors] || "";
                return (
                  <tr
                    key={row.emaiLevel}
                    className={`border-b border-mayaguez-accent/10 ${i % 2 === 0 ? "bg-mayaguez-primary" : "bg-mayaguez-secondary/20"} hover:bg-mayaguez-secondary/30 transition-colors`}
                  >
                    <td className="py-4 px-5 font-semibold text-mayaguez-text-primary">EMAI {row.emaiLevel}</td>
                    <td className="py-4 px-5">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${doraStyle}`}>
                        {row.doraCategory}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-mayaguez-text-secondary">{row.deploymentFrequency}</td>
                    <td className="py-4 px-5 text-mayaguez-text-secondary">{row.leadTime}</td>
                    <td className="py-4 px-5 text-mayaguez-text-secondary">{row.mttr}</td>
                    <td className="py-4 px-5 text-mayaguez-text-secondary">{row.changeFailureRate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* MIG - Gamified Incentives */}
      <Section id="mig" className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Sistema de Incentivos"
          title="Matriz de Incentivos Gamificados (MIG)"
          description="El modelo premia la madurez con autonomía real. Cada nivel EMAI corresponde a una medalla, un nivel de autonomía y un beneficio tangible para el equipo."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {migIncentives.filter((_, i) => i !== 0).map((incentive) => {
            const colors = emaiColors[incentive.level];
            return (
              <Card key={incentive.level} variant="bordered" className={`border ${colors.border} ${colors.bg} transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{incentive.medalEmoji}</div>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${colors.badge}`}>
                        EMAI {incentive.level}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${doraColors[incentive.doraCategory as keyof typeof doraColors]}`}>
                        {incentive.doraCategory}
                      </span>
                    </div>
                  </div>
                  <h3 className={`font-bold text-lg mb-1 ${colors.text}`}>{incentive.medal}</h3>
                  <div className="space-y-3 mt-4">
                    <div>
                      <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-1">Autonomía</p>
                      <p className="text-sm text-mayaguez-text-secondary">{incentive.autonomy}</p>
                    </div>
                    <div className="pt-3 border-t border-mayaguez-accent/10">
                      <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-1">Beneficio del Equipo</p>
                      <p className="text-sm text-mayaguez-text-secondary">{incentive.teamBenefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="h-12 w-12 text-mayaguez-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-mayaguez-text-primary mb-4">
            ¿En qué nivel EMAI está tu organización?
          </h2>
          <p className="text-mayaguez-text-secondary mb-8 text-lg">
            Responde el cuestionario de 40 preguntas y obtén tu score SEA, nivel EMAI, categoría
            DORA y medalla MIG personalizada con roadmap de mejora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Iniciar Evaluación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/implementacion">
              <Button variant="outline" size="lg">
                Ver Roadmap de Implementación
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
