import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pillars, principles } from "@/lib/mayaguez-data";
import {
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  Shield,
  Workflow,
  Activity,
  Zap,
  Lock,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  GitMerge,
  RefreshCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Filosofía del Modelo Mayagüez | DevSecOps Adoption",
  description:
    "Conoce la filosofía, misión, visión y principios del Modelo Mayagüez de adopción DevSecOps para organizaciones TI latinoamericanas.",
};

const iconMap: Record<string, React.ElementType> = {
  "shield-check": Shield,
  workflow: Workflow,
  activity: Activity,
  zap: Zap,
  lock: Lock,
  "bar-chart-2": BarChart2,
};

const pillarColors = [
  "border-mayaguez-accent/40 bg-mayaguez-accent/5",
  "border-blue-500/40 bg-blue-500/5",
  "border-purple-500/40 bg-purple-500/5",
  "border-mayaguez-warning/40 bg-mayaguez-warning/5",
  "border-mayaguez-danger/40 bg-mayaguez-danger/5",
  "border-mayaguez-success/40 bg-mayaguez-success/5",
];

const comparisonModels = [
  {
    aspect: "Escala de madurez",
    traditional: "Genérica, sin contexto latinoamericano",
    mayaguez: "EMAI 0-5 alineada a CMMI V2.0 con criterios DevSecOps/SRE explícitos",
  },
  {
    aspect: "Dimensiones evaluadas",
    traditional: "Principalmente técnica",
    mayaguez: "Técnica + Organizacional + Cultural + Gobernanza",
  },
  {
    aspect: "Mecanismo de adaptación",
    traditional: "Manual, basado en consultoría",
    mayaguez: "Triggers automáticos (SRE, Seguridad, Madurez, Negocio)",
  },
  {
    aspect: "Fórmula de scoring",
    traditional: "Cualitativos subjetivos",
    mayaguez: "SEA: fórmula ponderada con evidencia inmutable (EO%)",
  },
  {
    aspect: "Gobernanza",
    traditional: "CAB manual como control estático",
    mayaguez: "Gobernanza adaptativa: Fast-Track para madurez ≥ 4",
  },
  {
    aspect: "Métricas de referencia",
    traditional: "Vagas o inexistentes",
    mayaguez: "DORA Metrics (Elite) como objetivo explícito por nivel",
  },
  {
    aspect: "Incentivos",
    traditional: "No contemplados",
    mayaguez: "Matriz de Incentivos Gamificados (MIG) por nivel EMAI",
  },
  {
    aspect: "Contexto",
    traditional: "Grandes corporaciones con recursos ilimitados",
    mayaguez: "Organizaciones TI colombianas y latinoamericanas, todo tamaño",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Badge variant="info" className="mb-6">
            Filosofía y Fundamentos
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-mayaguez-text-primary mb-6 max-w-4xl leading-tight">
            El Modelo Mayagüez
          </h1>
          <p className="text-xl text-mayaguez-text-secondary max-w-3xl mb-8">
            Un framework de adopción DevSecOps diseñado desde la evidencia académica y validado
            con organizaciones reales colombianas para resolver la brecha entre velocidad y control.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Evaluar mi Organización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/modelo">
              <Button variant="outline" size="lg">
                Ver el Modelo Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Origen */}
      <Section className="bg-mayaguez-secondary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Origen Académico"
              title="Universidad Cooperativa de Colombia"
              description="El Modelo Mayagüez nació como investigación de Maestría en Gestión de Tecnologías de la Información, respaldado por metodología científica y validación empírica con organizaciones reales."
            />
            <div className="space-y-4">
              {[
                { label: "Institución", value: "Universidad Cooperativa de Colombia — Sede Bucaramanga" },
                { label: "Programa", value: "Maestría en Gestión de Tecnologías de la Información" },
                { label: "Autora", value: "Madelem Chico Velasco" },
                { label: "Asesores", value: "Pedro Alberto Arias Quintero / Andrea Cristina Martínez Ardila" },
                { label: "Año", value: "2026" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 py-3 border-b border-mayaguez-accent/10">
                  <span className="text-mayaguez-accent text-sm font-medium w-32 flex-shrink-0">{item.label}</span>
                  <span className="text-mayaguez-text-secondary text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Card variant="bordered">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-mayaguez-accent mb-4" />
                <h3 className="text-lg font-semibold text-mayaguez-text-primary mb-3">Pregunta de Investigación</h3>
                <p className="text-mayaguez-text-secondary text-sm italic leading-relaxed">
                  "¿Cómo diseñar un modelo de adopción DevSecOps adaptable a organizaciones TI con
                  distintos niveles de madurez tecnológica, que integre factores técnicos,
                  organizacionales, culturales y de gobernanza para mejorar la seguridad, la calidad
                  del software y la eficiencia operativa en el ciclo de vida del desarrollo de software?"
                </p>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-mayaguez-success mb-4" />
                <h3 className="text-lg font-semibold text-mayaguez-text-primary mb-3">Objetivo General</h3>
                <p className="text-mayaguez-text-secondary text-sm leading-relaxed">
                  Construir un modelo de adopción de DevSecOps adaptado a organizaciones TI con
                  distintos niveles de madurez tecnológica, que permita mejorar la seguridad, la
                  calidad del software y la eficiencia operativa en el SDLC.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visión y Misión */}
      <Section>
        <SectionHeader
          subtitle="Propósito"
          title="Visión y Misión"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="elevated" className="border border-mayaguez-accent/20">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-mayaguez-accent/10 flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-mayaguez-accent" />
              </div>
              <h3 className="text-xl font-bold text-mayaguez-text-primary mb-4">Visión</h3>
              <p className="text-mayaguez-text-secondary leading-relaxed">
                Convertirse en el estándar de referencia para la adopción progresiva y medible de
                DevSecOps en organizaciones TI latinoamericanas, garantizando que la seguridad sea
                un atributo intrínseco del software y no una validación perimetral tardía. El modelo
                aspira a demostrar que la velocidad de entrega y el control institucional no son
                fuerzas opuestas, sino dimensiones complementarias de la excelencia operativa.
              </p>
            </CardContent>
          </Card>
          <Card variant="elevated" className="border border-mayaguez-success/20">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-mayaguez-success/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-mayaguez-success" />
              </div>
              <h3 className="text-xl font-bold text-mayaguez-text-primary mb-4">Misión</h3>
              <p className="text-mayaguez-text-secondary leading-relaxed">
                Proporcionar a las organizaciones TI una hoja de ruta estructurada, adaptable y
                evaluable para incorporar prácticas DevSecOps de forma progresiva, integrando
                factores técnicos, organizacionales, culturales y de gobernanza, con el fin de
                mejorar la seguridad, la calidad del software y la eficiencia operativa en el
                ciclo de vida del desarrollo de software.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Manifiesto */}
      <Section className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Filosofía Central"
          title="Manifiesto de Ingeniería Adaptativa"
          description="Los cinco principios que gobiernan cada decisión del Modelo Mayagüez. No son aspiraciones: son contratos técnicos y culturales."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <Card key={principle.id} variant="bordered" className="relative group hover:border-mayaguez-accent/40 transition-all duration-300">
              <div className="absolute top-4 right-4 text-5xl font-bold text-mayaguez-accent/10 group-hover:text-mayaguez-accent/20 transition-all">
                {String(index + 1).padStart(2, "0")}
              </div>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-mayaguez-accent/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-5 w-5 text-mayaguez-accent" />
                </div>
                <CardTitle className="text-base pr-8">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-mayaguez-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Ciclo de Confianza */}
      <Section>
        <SectionHeader
          subtitle="Arquitectura del Modelo"
          title="El Ciclo de Confianza (Closed-Loop)"
          description="El Modelo Mayagüez opera bajo un paradigma de bucle cerrado con tres capas que garantizan adaptación continua basada en evidencia."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "A",
              title: "Entradas — Capa de Sensorización",
              subtitle: "Sensing",
              color: "text-mayaguez-accent border-mayaguez-accent/30",
              bg: "bg-mayaguez-accent/5",
              items: [
                "Gobernanza y Control de Cambios (RACI, CAB)",
                "Desempeño e Ingeniería (DORA, automatización)",
                "Seguridad y Cumplimiento (Vaults, Policy as Code)",
                "Cultura y Capacidades (Westrum, Squads, Skills)",
              ],
            },
            {
              label: "B",
              title: "Proceso — Motor de Inferencia",
              subtitle: "Modelo",
              color: "text-purple-400 border-purple-500/30",
              bg: "bg-purple-500/5",
              items: [
                "Madurez (nivel de institucionalización de prácticas)",
                "Cobertura (alcance del modelo en la infraestructura)",
                "Apropiación (grado en que la cultura vive el modelo)",
                "Evidencia (calidad de artefactos inmutables generados)",
              ],
            },
            {
              label: "C",
              title: "Salidas — Valor de Negocio",
              subtitle: "Eficiencia Operativa",
              color: "text-mayaguez-success border-mayaguez-success/30",
              bg: "bg-mayaguez-success/5",
              items: [
                "Madurez Técnica y de Proceso (evolución EMAI 0-5)",
                "Cobertura del Ecosistema (IaC, cumplimiento PCI/ISO)",
                "Salud Cultural y Operativa (Fast-Track, Error Budget)",
                "ROI medible con fórmulas DORA validadas",
              ],
            },
          ].map((layer) => (
            <Card key={layer.label} variant="bordered" className={`border ${layer.color} ${layer.bg}`}>
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full border ${layer.color} text-lg font-bold mb-4`}>
                  {layer.label}
                </div>
                <h3 className="text-base font-semibold text-mayaguez-text-primary mb-1">{layer.title}</h3>
                <p className={`text-xs font-medium mb-4 ${layer.color.split(" ")[0]}`}>{layer.subtitle}</p>
                <ul className="space-y-2">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-mayaguez-text-secondary">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${layer.color.split(" ")[0].replace("text-", "bg-")}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Control layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Control Plane",
              subtitle: "Cerebro Normativo",
              desc: "Políticas COBIT/ISO traducidas a Policy as Code (OPA/Azure Policy). Define las reglas de gobernanza que se ejecutan automáticamente.",
              color: "text-mayaguez-accent",
            },
            {
              icon: Activity,
              title: "Capa de Telemetría",
              subtitle: "Sistema Nervioso",
              desc: "Recolección masiva de SLIs, SLOs y métricas DORA en tiempo real. La organización tiene visibilidad total de su estado.",
              color: "text-purple-400",
            },
            {
              icon: GitMerge,
              title: "Capa de Ejecución",
              subtitle: "Músculo Operativo",
              desc: "Gates inteligentes en el pipeline CI/CD que activan bloqueos automáticos o liberan el Fast-Track según evidencia técnica.",
              color: "text-mayaguez-success",
            },
          ].map((layer) => (
            <div key={layer.title} className="flex gap-4 p-5 rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10">
              <layer.icon className={`h-6 w-6 flex-shrink-0 mt-1 ${layer.color}`} />
              <div>
                <h4 className="font-semibold text-mayaguez-text-primary text-sm">{layer.title}</h4>
                <p className={`text-xs font-medium mb-2 ${layer.color}`}>{layer.subtitle}</p>
                <p className="text-xs text-mayaguez-text-secondary leading-relaxed">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6 Pilares */}
      <Section className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Integración de Frameworks"
          title="Los Seis Pilares del Modelo"
          description="Mayagüez no inventa un framework nuevo — orquesta los mejores marcos existentes en una arquitectura sinérgica y coherente."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Shield;
            return (
              <Card key={pillar.id} variant="bordered" className={`border ${pillarColors[index]} transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-mayaguez-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-mayaguez-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mayaguez-text-primary text-sm">{pillar.name}</h3>
                      <p className="text-xs text-mayaguez-accent">{pillar.framework}</p>
                    </div>
                  </div>
                  <p className="text-sm text-mayaguez-text-secondary leading-relaxed">
                    {pillar.contribution}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Comparación con modelos existentes */}
      <Section>
        <SectionHeader
          subtitle="Diferenciación"
          title="Mayagüez vs. Enfoques Tradicionales"
          description="Comparativa frente a los modelos revisados en la literatura académica (Rajapakse 2022, Mothanna 2024, Prates 2025, Seotan 2023, Zahedi 2022)."
        />
        <div className="overflow-x-auto rounded-lg border border-mayaguez-accent/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mayaguez-secondary/50 border-b border-mayaguez-accent/20">
                <th className="text-left py-4 px-6 text-mayaguez-text-secondary font-medium">Aspecto</th>
                <th className="text-left py-4 px-6 text-mayaguez-warning font-medium">Modelos Tradicionales</th>
                <th className="text-left py-4 px-6 text-mayaguez-accent font-medium">Modelo Mayagüez</th>
              </tr>
            </thead>
            <tbody>
              {comparisonModels.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={`border-b border-mayaguez-accent/10 ${i % 2 === 0 ? "bg-mayaguez-primary" : "bg-mayaguez-secondary/20"} hover:bg-mayaguez-secondary/30 transition-colors`}
                >
                  <td className="py-4 px-6 font-medium text-mayaguez-text-primary">{row.aspect}</td>
                  <td className="py-4 px-6 text-mayaguez-text-secondary">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-mayaguez-warning flex-shrink-0" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-mayaguez-text-secondary">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-mayaguez-success flex-shrink-0" />
                      {row.mayaguez}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-mayaguez-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <RefreshCcw className="h-12 w-12 text-mayaguez-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-mayaguez-text-primary mb-4">
            El Ciclo de Confianza Comienza con un Diagnóstico
          </h2>
          <p className="text-mayaguez-text-secondary mb-8 text-lg">
            Evalúa tu organización con el instrumento de 40 preguntas del modelo y obtén tu nivel
            EMAI, score SEA y roadmap personalizado de implementación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Iniciar Evaluación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg">
                Leer Documentación
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
