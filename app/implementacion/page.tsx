import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Wrench,
  FileText,
  Shield,
  BarChart2,
  Zap,
  GitMerge,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Implementación Paso a Paso | Modelo Mayagüez",
  description:
    "Roadmap de implementación del Modelo Mayagüez en 3 meses: Cimiento y Visibilidad, Automatización de Controles y Autonomía y Optimización con OKRs reales.",
};

interface Step {
  kr: string;
  title: string;
  actions: string[];
  tools: string[];
  evidence: string;
}

interface Phase {
  month: number;
  title: string;
  subtitle: string;
  emaiRange: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  icon: React.ElementType;
  okr: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    month: 1,
    title: "Cimiento y Visibilidad",
    subtitle: "Establecer la línea base de madurez y observabilidad",
    emaiRange: "Nivel 1 → 2",
    color: "mayaguez-accent",
    textColor: "text-mayaguez-accent",
    borderColor: "border-mayaguez-accent/40",
    bgColor: "bg-mayaguez-accent/5",
    icon: Target,
    okr: "Objetivo: Establecer visibilidad completa del estado actual y definir el punto de partida medible",
    steps: [
      {
        kr: "KR 1.1",
        title: "Completar Ficha FAMA para 100% de servicios",
        actions: [
          "Inventariar todos los servicios del equipo piloto",
          "Aplicar cuestionario FAMA por servicio (40 dimensiones)",
          "Documentar estado actual de pipelines CI/CD",
          "Identificar brechas críticas por dimensión",
        ],
        tools: ["Azure DevOps", "Confluence", "Excel/Notion", "Jira"],
        evidence: "Ficha FAMA completada con baseline documentado para cada servicio",
      },
      {
        kr: "KR 1.2",
        title: "Configurar Dashboard de SLOs/SLIs en tiempo real",
        actions: [
          "Definir SLOs iniciales para servicios críticos (disponibilidad, latencia)",
          "Instrumentar aplicaciones con métricas básicas",
          "Configurar dashboards en Datadog/Grafana",
          "Establecer alertas iniciales para umbrales SRE",
        ],
        tools: ["Datadog", "Grafana", "Prometheus", "Azure Monitor"],
        evidence: "Dashboard activo con SLOs/SLIs visibles en tiempo real para todos los servicios",
      },
      {
        kr: "KR 1.3",
        title: "Instrumentar pipeline para medir DORA automáticamente",
        actions: [
          "Integrar métricas de Deployment Frequency en pipeline",
          "Medir Lead Time desde commit hasta despliegue",
          "Registrar Change Failure Rate automáticamente",
          "Capturar MTTR desde incidentes del sistema",
        ],
        tools: ["Azure DevOps Analytics", "Datadog", "PagerDuty", "GitHub Actions"],
        evidence: "Métricas DORA visibles en dashboard con datos históricos de las últimas 4 semanas",
      },
      {
        kr: "KR 1.4",
        title: "Firma del Manifiesto de Ingeniería Adaptativa",
        actions: [
          "Taller de alineación cultural con el equipo (2 horas)",
          "Presentación de los 5 principios del Manifiesto",
          "Firma simbólica del compromiso del equipo",
          "Publicar el Manifiesto en el repositorio del equipo",
        ],
        tools: ["Confluence/Wiki", "Miro (retrospectiva)", "Slack/Teams"],
        evidence: "Manifiesto firmado y publicado en repositorio; acta del taller de alineación",
      },
    ],
  },
  {
    month: 2,
    title: "Automatización de Controles",
    subtitle: "Integrar seguridad y gobernanza en el pipeline CI/CD",
    emaiRange: "Nivel 2 → 3",
    color: "purple-400",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/40",
    bgColor: "bg-purple-500/5",
    icon: Shield,
    okr: "Objetivo: Automatizar controles de seguridad y gobernanza eliminando validaciones manuales innecesarias",
    steps: [
      {
        kr: "KR 2.1",
        title: "Implementar Gate de Seguridad (Breaking Build)",
        actions: [
          "Integrar SonarQube/Snyk para SAST en el pipeline",
          "Configurar escaneo de dependencias (SCA) con OWASP Dependency Check",
          "Establecer umbral de breaking build para CVE Crítico (CVSS > 9.0)",
          "Integrar DAST con OWASP ZAP en ambientes de staging",
        ],
        tools: ["SonarQube", "Snyk", "OWASP ZAP", "GitHub Advanced Security"],
        evidence: "Pipeline falla automáticamente ante vulnerabilidades críticas (cero falsos negativos en primera semana)",
      },
      {
        kr: "KR 2.2",
        title: "Automatizar tickets ITSM vía API (100% despliegues)",
        actions: [
          "Integrar pipeline con ServiceNow/Jira Service Management API",
          "Auto-crear ticket de cambio con evidencia del despliegue",
          "Auto-cerrar ticket con resultado del despliegue (éxito/rollback)",
          "Eliminar creación manual de tickets de cambio",
        ],
        tools: ["ServiceNow API", "Jira Service Management", "Azure DevOps", "Webhook"],
        evidence: "100% de despliegues generan ticket automático; tiempo de creación < 5 segundos",
      },
      {
        kr: "KR 2.3",
        title: "Configurar primer Trigger de Adaptación por Error Budget",
        actions: [
          "Calcular Error Budget inicial basado en SLOs definidos",
          "Crear alerta automática cuando Error Budget < 30%",
          "Implementar bloqueo de features cuando Error Budget < 10%",
          "Dashboard de Error Budget consumido vs. disponible",
        ],
        tools: ["Datadog SLO Manager", "Prometheus + Alertmanager", "PagerDuty", "Slack"],
        evidence: "Primer trigger de adaptación activo con notificaciones automáticas al equipo",
      },
      {
        kr: "KR 2.4",
        title: "Reducir Batch Size para despliegue semanal",
        actions: [
          "Implementar Feature Flags para desacoplar despliegues de releases",
          "Dividir historias de usuario en tareas de máximo 2 días",
          "Configurar despliegues continuos a ambientes Dev/Staging",
          "Medir y reducir Lead Time de commit a producción",
        ],
        tools: ["LaunchDarkly/Azure Feature Flags", "Azure DevOps", "Kubernetes", "Helm"],
        evidence: "Frecuencia de despliegue alcanza mínimo 1 despliegue/semana (vs. baseline mensual)",
      },
    ],
  },
  {
    month: 3,
    title: "Autonomía y Optimización",
    subtitle: "Alcanzar madurez Elite y eliminar burocracia manual",
    emaiRange: "Nivel 3 → 4/5",
    color: "mayaguez-success",
    textColor: "text-mayaguez-success",
    borderColor: "border-mayaguez-success/40",
    bgColor: "bg-mayaguez-success/5",
    icon: Zap,
    okr: "Objetivo: Lograr autonomía total basada en evidencia técnica; eliminar el CAB manual para el equipo piloto",
    steps: [
      {
        kr: "KR 3.1",
        title: "Lead Time < 24h y MTTR < 1h",
        actions: [
          "Optimizar pipeline eliminando pasos manuales residuales",
          "Implementar despliegue Canary/Blue-Green automático",
          "Configurar rollback automático ante aumento de error rate",
          "Validar DORA Elite: Lead Time < 1h y MTTR < 1h",
        ],
        tools: ["ArgoCD", "Kubernetes", "Datadog", "PagerDuty"],
        evidence: "Métricas DORA en categoría Elite: Lead Time < 1h, MTTR < 1h sostenido 2 semanas",
      },
      {
        kr: "KR 3.2",
        title: "100% infraestructura con IaC y validación OPA",
        actions: [
          "Migrar toda la infraestructura del equipo a Terraform",
          "Implementar políticas OPA para validar configuraciones",
          "Configurar drift detection automático",
          "Auto-remediación vía terraform apply ante drift detectado",
        ],
        tools: ["Terraform", "OPA (Open Policy Agent)", "Azure Policy", "Checkov"],
        evidence: "100% de la infraestructura gestionada por IaC; drift corregido automáticamente en < 5 minutos",
      },
      {
        kr: "KR 3.3",
        title: "Eliminar aprobación manual del CAB para el equipo piloto",
        actions: [
          "Validar score EMAI > 3.8 sostenido durante 8 semanas",
          "Presentar evidencia técnica al comité de gobernanza",
          "Configurar Fast-Track automático para cambios estándar",
          "Implementar certificado JSON inmutable por despliegue",
        ],
        tools: ["OPA", "Azure Policy", "Azure DevOps", "Elastic/Splunk"],
        evidence: "Fast-Track activo: 0 intervenciones manuales del CAB en última semana de medición",
      },
      {
        kr: "KR 3.4",
        title: "Presentar Reporte de ROI con ahorros > 20%",
        actions: [
          "Calcular ahorro en Lead Time vs. baseline del Mes 1",
          "Cuantificar reducción de incidentes y MTTR",
          "Estimar ahorro en tiempo de ingeniería (horas)",
          "Presentar ROI usando fórmulas DORA del modelo",
        ],
        tools: ["Excel/Google Sheets", "Tableau/Power BI", "Fórmulas ROI DORA"],
        evidence: "Reporte ejecutivo con ROI > 20% demostrado con datos del trimestre",
      },
    ],
  },
];

const toolStack = [
  { category: "CI/CD", tools: ["Azure DevOps", "GitHub Actions", "GitLab CI", "Jenkins"] },
  { category: "Seguridad", tools: ["SonarQube", "Snyk", "OWASP ZAP", "Checkov"] },
  { category: "Observabilidad", tools: ["Datadog", "Grafana", "Prometheus", "Elastic"] },
  { category: "IaC & Policy", tools: ["Terraform", "OPA", "Azure Policy", "Ansible"] },
  { category: "ITSM", tools: ["ServiceNow", "Jira SM", "PagerDuty", "OpsGenie"] },
  { category: "Artefactos", tools: ["Confluence", "GitHub Wiki", "Notion", "Backstage"] },
];

export default function ImplementacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,200,81,0.15),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Badge variant="success" className="mb-6">
            Roadmap de Implementación
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-mayaguez-text-primary mb-6 max-w-4xl leading-tight">
            De Nivel 1 a Elite en 90 Días
          </h1>
          <p className="text-xl text-mayaguez-text-secondary max-w-3xl mb-8">
            Un roadmap de implementación estructurado en tres fases con OKRs trimestrales
            reales, herramientas recomendadas, acciones concretas y evidencias esperadas
            para cada Key Result.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {phases.map((p) => (
              <a key={p.month} href={`#mes${p.month}`}>
                <Badge variant="default" className={`cursor-pointer hover:border-mayaguez-accent/60 transition-colors px-3 py-1 ${p.textColor}`}>
                  Mes {p.month}: {p.title}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section className="bg-mayaguez-secondary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <Card key={phase.month} variant="bordered" className={`border ${phase.borderColor} ${phase.bgColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full border-2 ${phase.borderColor} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${phase.textColor}`} />
                    </div>
                    <Badge variant="default" className={`${phase.textColor} border-current`}>
                      {phase.emaiRange}
                    </Badge>
                  </div>
                  <h3 className={`font-bold text-lg mb-1 ${phase.textColor}`}>Mes {phase.month}</h3>
                  <p className="font-semibold text-mayaguez-text-primary text-sm mb-2">{phase.title}</p>
                  <p className="text-xs text-mayaguez-text-secondary">{phase.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Phases Detail */}
      {phases.map((phase) => {
        const Icon = phase.icon;
        return (
          <Section key={phase.month} id={`mes${phase.month}`} className={phase.month % 2 === 0 ? "bg-mayaguez-secondary/10" : ""}>
            <div className={`rounded-xl border ${phase.borderColor} ${phase.bgColor} p-6 mb-10`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full border-2 ${phase.borderColor} flex items-center justify-center`}>
                    <Icon className={`h-7 w-7 ${phase.textColor}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-2xl font-bold ${phase.textColor}`}>Mes {phase.month}</span>
                      <Badge variant="default" className={`${phase.textColor} border-current text-xs`}>
                        {phase.emaiRange}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-mayaguez-text-primary">{phase.title}</h2>
                  </div>
                </div>
                <p className="text-sm text-mayaguez-text-secondary max-w-xl italic">{phase.okr}</p>
              </div>
            </div>

            <div className="space-y-6">
              {phase.steps.map((step, stepIndex) => (
                <div key={step.kr} className="rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 overflow-hidden">
                  <div className="flex items-center gap-4 p-4 border-b border-mayaguez-accent/10">
                    <div className={`w-8 h-8 rounded-full border ${phase.borderColor} flex items-center justify-center text-xs font-bold ${phase.textColor} flex-shrink-0`}>
                      {stepIndex + 1}
                    </div>
                    <div>
                      <span className={`text-xs font-mono ${phase.textColor} mr-2`}>{step.kr}</span>
                      <span className="font-semibold text-mayaguez-text-primary">{step.title}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-mayaguez-accent/10">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className={`h-4 w-4 ${phase.textColor}`} />
                        <span className="text-xs font-semibold text-mayaguez-text-secondary uppercase tracking-wider">Acciones</span>
                      </div>
                      <ul className="space-y-2">
                        {step.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-mayaguez-text-secondary">
                            <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${phase.textColor.replace("text-", "bg-")}`} />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench className={`h-4 w-4 ${phase.textColor}`} />
                        <span className="text-xs font-semibold text-mayaguez-text-secondary uppercase tracking-wider">Herramientas</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool) => (
                          <span key={tool} className="text-xs px-2 py-1 rounded bg-mayaguez-primary/60 text-mayaguez-text-secondary border border-mayaguez-accent/20">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className={`h-4 w-4 ${phase.textColor}`} />
                        <span className="text-xs font-semibold text-mayaguez-text-secondary uppercase tracking-wider">Evidencia KR</span>
                      </div>
                      <p className="text-xs text-mayaguez-text-secondary leading-relaxed">{step.evidence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Tool Stack */}
      <Section className="bg-mayaguez-secondary/20">
        <SectionHeader
          subtitle="Stack Tecnológico Recomendado"
          title="Herramientas por Categoría"
          description="El Modelo Mayagüez es agnóstico a la herramienta. Estas son las opciones validadas en el piloto, pero cualquier herramienta equivalente funciona."
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {toolStack.map((cat) => (
            <div key={cat.category} className="rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 p-4">
              <p className="text-xs font-semibold text-mayaguez-accent uppercase tracking-wider mb-3">{cat.category}</p>
              <ul className="space-y-1.5">
                {cat.tools.map((tool) => (
                  <li key={tool} className="text-xs text-mayaguez-text-secondary">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ROI Summary */}
      <Section>
        <SectionHeader
          subtitle="Resultados del Piloto Q1 2026"
          title="Lo que Lograrás en 90 Días"
          description="Basado en los resultados reales del piloto del Modelo Mayagüez, validados en Q1 2026."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingUp, label: "Lead Time", before: "18 días", after: "55 min", improvement: "-98%" },
            { icon: Zap, label: "Frecuencia", before: "1.2/mes", after: "14/semana", improvement: "+1,066%" },
            { icon: BarChart2, label: "CFR", before: "38%", after: "7%", improvement: "-82%" },
            { icon: DollarSign, label: "Ahorro Anual", before: "$0 medido", after: "$920K USD", improvement: "ROI verificado" },
          ].map((metric) => (
            <Card key={metric.label} variant="bordered" className="text-center">
              <CardContent className="p-6">
                <metric.icon className="h-8 w-8 text-mayaguez-accent mx-auto mb-4" />
                <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-3">{metric.label}</p>
                <div className="space-y-1 mb-3">
                  <p className="text-sm text-mayaguez-text-muted line-through">{metric.before}</p>
                  <p className="text-2xl font-bold text-mayaguez-success">{metric.after}</p>
                </div>
                <Badge variant="success">{metric.improvement}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-mayaguez-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-mayaguez-text-primary mb-4">
            Comienza con tu Diagnóstico Actual
          </h2>
          <p className="text-mayaguez-text-secondary mb-8 text-lg">
            Antes de iniciar el Mes 1, evalúa tu nivel EMAI actual para calibrar el roadmap
            correctamente y saber dónde enfocar los primeros esfuerzos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Evaluar Madurez Actual
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs/implementacion/mes1">
              <Button variant="outline" size="lg">
                Documentación del Mes 1
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
