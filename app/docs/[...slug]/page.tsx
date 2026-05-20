import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentación | Modelo Mayagüez",
};

const docContent: Record<string, { title: string; content: string[] }> = {
  "introduccion/problema": {
    title: "El Problema: Velocidad vs. Control",
    content: [
      "La transformación digital ha generado un conflicto estructural en las organizaciones TI: mientras los negocios demandan ciclos de entrega cada vez más cortos, los modelos de gobernanza tradicionales actúan como cuellos de botella manuales y estáticos.",
      "Los seis problemas concretos que el Modelo Mayagüez resuelve son: (1) Seguridad tardía — las actividades SAST/DAST/SCA se incorporan en etapas finales, aumentando el costo de corrección hasta 30 veces; (2) Modelos genéricos que ignoran la heterogeneidad organizacional; (3) Brecha técnico-cultural — el 90% tiene CI/CD pero solo el 30% tiene procesos de aprobación eficientes; (4) Ausencia de escalas de madurez medibles con conexión a decisiones de gobernanza; (5) Silos organizacionales — cultura promedio 2.8/5; (6) Burocracia de aprobación — CABs manuales sin valor real.",
      "Los datos del estudio de 20 organizaciones colombianas confirman este diagnóstico: dimensión técnica promedio 4.1/5, pero cultural 2.8/5 y organizacional 3.2/5. La brecha entre capacidad técnica y adopción organizacional-cultural es el problema central que Mayagüez resuelve.",
    ],
  },
  "introduccion/justificacion": {
    title: "Justificación del Modelo",
    content: [
      "La necesidad de un modelo adaptado al contexto latinoamericano surge de la insuficiencia de los frameworks internacionales existentes. Los modelos revisados en la literatura (Rajapakse 2022, Mothanna 2024, Prates 2025, Seotan 2023, Zahedi 2022) presentan limitaciones comunes: son agnósticos a la cultura organizacional local, no definen escalas de madurez con criterios DevSecOps/SRE explícitos, no conectan métricas de desempeño con decisiones de gobernanza automática, y asumen recursos ilimitados no disponibles en organizaciones latinoamericanas.",
      "El Modelo Mayagüez justifica su construcción en tres pilares: (1) Evidencia empírica — 20 organizaciones evaluadas con instrumento validado; (2) Integración sinérgica — no inventa un nuevo framework sino que orquesta CMMI, COBIT, ITIL 4, DORA, SRE y Agile en una arquitectura coherente; (3) Adaptabilidad — el modelo ajusta sus controles automáticamente según el perfil de riesgo y la madurez demostrada.",
    ],
  },
  "introduccion/marco-teorico": {
    title: "Marco Teórico",
    content: [
      "El Modelo Mayagüez integra seis frameworks consolidados en una arquitectura sinérgica. La gobernanza adaptativa (COBIT 2019) define las políticas que se traducen a Policy as Code. La gestión del valor (ITIL 4 SVS) habilita el cambio sin burocracia, permitiendo que los cambios estándar fluyan sin CAB manual. La ingeniería de confiabilidad (SRE de Google) aporta Error Budgets, SLOs/SLIs y mecanismos de rollback automático.",
      "La agilidad operativa (Agile/Scrum/Kanban) aporta la cadencia iterativa y los feedback loops cortos necesarios para la mejora continua. La seguridad intrínseca (DevSecOps/S-SDLC) garantiza el Shift-Left y la integración de SAST/DAST/SCA en el pipeline. La medición de desempeño (DORA Metrics + CMMI V2.0) define los objetivos cuantitativos de evolución hacia el nivel Elite.",
      "La Escala de Madurez Adaptativa Integral (EMAI 0-5) es el eje que integra todos estos marcos, alineando los criterios de madurez CMMI con las prácticas DevSecOps/SRE y la cultura organizacional según el modelo Westrum.",
    ],
  },
  "conceptos/devsecops": {
    title: "DevSecOps: Seguridad como Atributo de Calidad",
    content: [
      "DevSecOps es la integración de prácticas de seguridad en todas las fases del ciclo de vida del software, desde el diseño hasta la operación. A diferencia del modelo tradicional donde la seguridad es una validación perimetral tardía, DevSecOps convierte la seguridad en un atributo intrínseco del software.",
      "El principio Shift-Left Security implica que las actividades de seguridad (SAST, DAST, SCA, análisis de secretos) se integran desde las primeras fases del SDLC. Esto reduce el costo de corrección de vulnerabilidades hasta 30 veces comparado con encontrarlas en producción.",
      "Las herramientas clave del pilar de Seguridad Intrínseca del Modelo Mayagüez incluyen: SonarQube/Semgrep (SAST), OWASP ZAP/Burp Suite (DAST), Snyk/Dependabot (SCA), HashiCorp Vault/Azure Key Vault (gestión de secretos), y OPA/Azure Policy (Policy as Code).",
    ],
  },
  "conceptos/dora": {
    title: "DORA Metrics: El Estándar de Desempeño DevOps",
    content: [
      "DORA (DevOps Research and Assessment) es el estándar global para medir el desempeño de equipos DevOps, desarrollado por el equipo de investigación de Google. Define cuatro métricas clave que el Modelo Mayagüez adopta como objetivos de evolución por nivel EMAI.",
      "Deployment Frequency: Con qué frecuencia despliega el equipo a producción. Rango Elite: múltiples veces al día (on-demand). Lead Time for Changes: Tiempo desde commit hasta producción. Elite: < 1 hora. Mean Time to Restore (MTTR): Tiempo de recuperación ante incidentes. Elite: < 1 hora. Change Failure Rate: Porcentaje de despliegues que causan degradación. Elite: 0-15%.",
      "El piloto Q1 2026 del Modelo Mayagüez logró la transición de categoría Low a Elite: Lead Time de 18 días a 55 minutos (-98%), Frecuencia de 1.2/mes a 14/semana (+1,066%), MTTR de 14 horas a 22 minutos (-97%), CFR de 38% a 7% (-82%).",
    ],
  },
  "modelo/arquitectura": {
    title: "Arquitectura del Modelo Mayagüez",
    content: [
      "El Modelo Mayagüez opera bajo un paradigma de bucle cerrado (Closed-Loop) con tres capas funcionales que garantizan adaptación continua basada en evidencia técnica inmutable.",
      "La Capa de Sensorización (Sensing) recolecta telemetría de cuatro dimensiones: gobernanza y control de cambios (RACI, tiempos de aprobación CAB, integridad CMDB), desempeño e ingeniería (stack de herramientas, automatización de pruebas, métricas DORA), seguridad y cumplimiento (Vaults, transición de validaciones manuales a Policy as Code), y cultura y capacidades (modelo Westrum, estructura de Squads, Skills).",
      "El Motor de Inferencia calcula el Índice de Adaptación evaluando cuatro variables: Madurez (nivel de institucionalización), Cobertura (alcance del modelo), Apropiación (grado cultural) y Evidencia (calidad de artefactos). Las Salidas incluyen el nivel EMAI, la categoría DORA y el estado de gobernanza (Fast-Track o Gate Burocrático).",
    ],
  },
  "emai/escala": {
    title: "Escala EMAI 0-5",
    content: [
      "La Escala de Madurez Adaptativa Integral (EMAI) es el eje central del Modelo Mayagüez, alineada con CMMI V2.0. Define seis niveles de evolución que integran la descripción cultural, el criterio DevSecOps/SRE, el verbo rector y el tipo de evidencia esperado.",
      "Nivel 0 (Inexistente): La organización no reconoce la necesidad. Intervención manual total, sin seguridad. Verbo: Ignorar. Evidencia: Ausente. Nivel 1 (Ad-hoc/Inicial): Éxito basado en esfuerzos heroicos. Scripts aislados, seguridad reactiva. Verbo: Reaccionar. Nivel 2 (Gestionado): Procesos por proyecto, resistencia al cambio. Pipelines básicos. Verbo: Documentar.",
      "Nivel 3 (Definido): Estándares organizacionales. CI/CD integrado, Shift-Left obligatorio. Verbo: Estandarizar. Nivel 4 (Medido): Decisiones data-driven. Error Budgets activos, gobernanza automatizada. Verbo: Monitorear. Nivel 5 (Optimizado): Mejora autónoma. Self-healing, Policy as Code. Verbo: Optimizar.",
    ],
  },
  "scoring/sea": {
    title: "Fórmula SEA: Scoring de Eficiencia Adaptativa",
    content: [
      "El SEA es la fórmula oficial del Modelo Mayagüez para calcular el Índice de Eficiencia Operativa de una organización. La fórmula pondera cinco dimensiones críticas:",
      "EO (%) = [(M × 0.30) + (C × 0.20) + (A × 0.20) + (E × 0.15) + (G × 0.15)] × 20. Donde: M = Madurez (30%) — Escala EMAI 0-5; C = Cobertura (20%) — Alcance de instrumentación; A = Apropiación (20%) — Internalización cultural (Westrum); E = Evidencia (15%) — Registros inmutables en JSON; G = Gobernanza Sin Fricción (15%) — Reducción de intervención manual en CAB.",
      "Un score de 0-20% corresponde a Nivel EMAI 0, 20-40% a Nivel 1, 40-55% a Nivel 2, 55-70% a Nivel 3, 70-85% a Nivel 4, y 85-100% a Nivel 5 (Elite). El Modelo Mayagüez utiliza el SEA como base para las decisiones automáticas de gobernanza: un score sostenido > 76% (EMAI > 3.8) durante 3 meses activa el Fast-Track.",
    ],
  },
  "implementacion/mes1": {
    title: "Mes 1: Cimiento y Visibilidad (Nivel 1→2)",
    content: [
      "El primer mes establece la línea base de madurez y la infraestructura de observabilidad necesaria para todo el proceso de adopción. Sin visibilidad, no hay mejora medible.",
      "KR 1.1: Completar la Ficha FAMA para el 100% de servicios del equipo piloto. Esto incluye inventariar servicios, aplicar el cuestionario de 40 preguntas por servicio y documentar el estado actual de pipelines CI/CD. Herramientas: Confluence, Jira.",
      "KR 1.2: Configurar Dashboard SLOs/SLIs en tiempo real (Datadog/Grafana). KR 1.3: Instrumentar el pipeline para medir las cuatro métricas DORA automáticamente. KR 1.4: Firma del Manifiesto de Ingeniería Adaptativa con el equipo completo.",
    ],
  },
  "implementacion/mes2": {
    title: "Mes 2: Automatización de Controles (Nivel 2→3)",
    content: [
      "El segundo mes automatiza los controles de seguridad y gobernanza, eliminando las validaciones manuales que generan cuellos de botella sin agregar valor real.",
      "KR 2.1: Implementar el Gate de Seguridad (Breaking Build) que bloquea automáticamente ante vulnerabilidades críticas (CVSS > 9.0). Herramientas: SonarQube, Snyk, OWASP ZAP. KR 2.2: Automatizar la creación y cierre de tickets de cambio vía API (100% de despliegues). Herramientas: ServiceNow API, Jira Service Management.",
      "KR 2.3: Configurar el primer Trigger de Adaptación por Error Budget — alerta al 30%, bloqueo al 10%. KR 2.4: Reducir el Batch Size para lograr frecuencia de despliegue semanal usando Feature Flags.",
    ],
  },
  "implementacion/mes3": {
    title: "Mes 3: Autonomía y Optimización (Nivel 3→4/5)",
    content: [
      "El tercer mes consolida la madurez Elite y elimina definitivamente la aprobación manual del CAB para el equipo piloto, activando el Fast-Track basado en evidencia técnica.",
      "KR 3.1: Alcanzar Lead Time < 24h y MTTR < 1h consistentemente — validar categoría DORA Elite. KR 3.2: Migrar el 100% de la infraestructura a IaC (Terraform) con validación OPA automática y drift detection.",
      "KR 3.3: Eliminar la aprobación manual del CAB presentando evidencia de score EMAI > 3.8 sostenido 8 semanas. KR 3.4: Presentar Reporte de ROI con ahorros > 20% en tiempo de ingeniería usando las fórmulas DORA del modelo.",
    ],
  },
};

type PageParams = {
  params: {
    slug: string[];
  };
};

export default function DocSlugPage({ params }: PageParams) {
  const slugKey = params.slug.join("/");
  const content = docContent[slugKey];

  if (content) {
    return (
      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-mayaguez-text-muted mb-4">
            <Link href="/docs" className="hover:text-mayaguez-accent transition-colors">Docs</Link>
            <span>/</span>
            {params.slug.map((s, i) => (
              <span key={i} className={i === params.slug.length - 1 ? "text-mayaguez-accent" : ""}>
                {i > 0 && <span className="mr-2">/</span>}{s}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">{content.title}</h1>
        </div>
        <div className="prose prose-invert max-w-none">
          {content.content.map((para, i) => (
            <p key={i} className="text-mayaguez-text-secondary leading-relaxed mb-4">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between pt-6 border-t border-mayaguez-accent/10">
          <Link href="/docs" className="text-sm text-mayaguez-text-muted hover:text-mayaguez-accent transition-colors flex items-center gap-1">
            ← Volver a Documentación
          </Link>
          <Link href="/demo" className="text-sm text-mayaguez-accent hover:opacity-80 transition-opacity flex items-center gap-1">
            Iniciar Evaluación <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-mayaguez-text-muted mb-4">
          <Link href="/docs" className="hover:text-mayaguez-accent transition-colors">Docs</Link>
          <span>/</span>
          <span className="text-mayaguez-accent">{params.slug.join(" / ")}</span>
        </div>
        <Badge variant="warning" className="mb-4">En construcción</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          {params.slug[params.slug.length - 1]
            .split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
        </h1>
        <p className="text-mayaguez-text-secondary">
          Esta sección de la documentación está en proceso de publicación. Mientras tanto,
          puedes consultar el modelo directamente en el demo interactivo o revisar la
          documentación disponible.
        </p>
      </div>

      <div className="rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 p-6">
        <BookOpen className="h-8 w-8 text-mayaguez-accent mb-4" />
        <h3 className="font-semibold text-mayaguez-text-primary mb-2">
          ¿Buscas información específica?
        </h3>
        <p className="text-sm text-mayaguez-text-secondary mb-4">
          Todo el contenido del Modelo Mayagüez está disponible en:
        </p>
        <div className="space-y-2">
          {[
            { label: "Demo interactivo — Evaluación de 40 preguntas con resultados SEA", href: "/demo" },
            { label: "Filosofía — Principios, visión y misión del modelo", href: "/about" },
            { label: "Modelo — EMAI, Triggers, Gates y MIG", href: "/modelo" },
            { label: "Implementación — Roadmap de 90 días", href: "/implementacion" },
            { label: "Casos de uso — 6 perfiles organizacionales", href: "/casos-de-uso" },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="flex items-center gap-2 text-sm text-mayaguez-accent hover:opacity-80 transition-opacity">
              <ArrowRight className="h-3 w-3" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
