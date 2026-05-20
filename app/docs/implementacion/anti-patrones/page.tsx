import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Anti-patrones de Adopción DevSecOps | Documentación Mayagüez",
};

const antiPatterns = [
  {
    id: "AP-01",
    name: "El Modelo como Checklist",
    description: "Tratar el cuestionario FAMA como un formulario de cumplimiento a completar una sola vez, en lugar de un instrumento de diagnóstico continuo.",
    symptoms: [
      "El cuestionario se responde en equipo por consenso para obtener el mejor puntaje",
      "No se registran las respuestas individuales reales",
      "El score EMAI no cambia entre evaluaciones trimestrales",
    ],
    correction: "Aplicar el cuestionario por servicio y por rol (no por equipo). Priorizar la honestidad sobre el puntaje. El score bajo es el punto de partida, no un fracaso.",
    severity: "high" as const,
  },
  {
    id: "AP-02",
    name: "Gobernanza como Burocracia Digital",
    description: "Traducir los controles del CAB manual a formularios digitales en lugar de automatizarlos con Policy as Code, generando la misma fricción en un nuevo canal.",
    symptoms: [
      "Los tickets de cambio ahora se crean en un portal web en lugar de por correo",
      "El tiempo de aprobación no se redujo significativamente",
      "El equipo percibe que 'se digitalizó la burocracia, no se eliminó'",
    ],
    correction: "Implementar OPA o Azure Policy para validación automática. El objetivo no es un portal bonito, sino cero intervención manual para cambios estándar con score EMAI > 3.",
    severity: "high" as const,
  },
  {
    id: "AP-03",
    name: "Fast-Track Sin Evidencia",
    description: "Activar el Fast-Track basado en la percepción del equipo de que 'ya son maduros', sin el score SEA sostenido de > 76% durante 8 semanas requerido por el modelo.",
    symptoms: [
      "El equipo declara nivel EMAI 4 sin artefactos JSON que lo respalden",
      "El Fast-Track se activa por presión directiva, no por evidencia técnica",
      "Los despliegues acelerados aumentan la tasa de incidentes (CFR > 15%)",
    ],
    correction: "El Fast-Track es una consecuencia de la madurez demostrada, no un objetivo. Respetar los umbrales: SEA > 76%, Error Budget > 20%, PaC Validation PASS.",
    severity: "critical" as const,
  },
  {
    id: "AP-04",
    name: "Seguridad como Gate Final",
    description: "Integrar las herramientas SAST/DAST al final del pipeline (antes de producción) en lugar de desde el inicio del ciclo de vida, manteniendo la seguridad como validación tardía.",
    symptoms: [
      "Los escáneres de seguridad bloquean despliegues urgentes frecuentemente",
      "Los desarrolladores perciben la seguridad como 'el equipo que bloquea todo'",
      "Las vulnerabilidades críticas se descubren el mismo día del release",
    ],
    correction: "Shift-Left real: SAST desde el primer commit, SCA en el pull request, DAST en ambiente de staging. La seguridad no bloquea si se integra desde el inicio.",
    severity: "high" as const,
  },
  {
    id: "AP-05",
    name: "Métricas de Vanidad DORA",
    description: "Medir el número de despliegues (Deployment Frequency) sin medir simultáneamente Change Failure Rate y MTTR, creando la ilusión de velocidad sin seguridad.",
    symptoms: [
      "La frecuencia de despliegue aumenta pero los incidentes también",
      "El MTTR no se mide porque 'los incidentes se resuelven rápido'",
      "El equipo celebra 50 despliegues semanales con 40% de CFR",
    ],
    correction: "Las cuatro métricas DORA son inseparables. Velocity sin reliability es fragilidad operativa. Implementar las cuatro simultáneamente con dashboards visibles para todo el equipo.",
    severity: "medium" as const,
  },
  {
    id: "AP-06",
    name: "La Transformación del Héroe",
    description: "Depender de un experto singular (el 'gurú DevSecOps') para implementar y mantener todo el modelo, creando un punto único de fallo cultural y técnico.",
    symptoms: [
      "Solo una persona sabe cómo funciona el pipeline de seguridad",
      "Cuando el experto sale de vacaciones, los despliegues se pausan",
      "El conocimiento del modelo no se documenta ni comparte",
    ],
    correction: "Implementar el modelo como plataforma, no como proyecto personal. El Manifiesto de Ingeniería Adaptativa debe ser firmado y vivido por todo el equipo. Rotación de conocimiento obligatoria.",
    severity: "medium" as const,
  },
  {
    id: "AP-07",
    name: "Piloto como Excepción Permanente",
    description: "El equipo piloto alcanza nivel EMAI 4 pero la adopción no se expande a otros equipos, convirtiendo el piloto en una excepción exitosa y aislada.",
    symptoms: [
      "Después de 6 meses, solo el equipo piloto tiene Fast-Track",
      "Los demás equipos justifican la no-adopción con 'nosotros somos diferentes'",
      "No hay plan de expansión institucional del modelo",
    ],
    correction: "El piloto es una demostración de posibilidad, no un privilegio permanente. Documentar el caso de éxito y crear el programa 'Maestros Adaptivos' para replicar el modelo.",
    severity: "medium" as const,
  },
  {
    id: "AP-08",
    name: "IaC sin Drift Detection",
    description: "Implementar Terraform para la infraestructura inicial pero sin configurar drift detection, permitiendo que el estado real diverja del estado declarado silenciosamente.",
    symptoms: [
      "Los administradores de sistemas modifican recursos directamente en la consola",
      "El terraform plan muestra cambios 'inesperados' en cada ejecución",
      "Los incidentes de producción son causados por configuraciones manuales no registradas",
    ],
    correction: "Drift detection automático con notificación y auto-remediación vía terraform apply. Acceso de consola restringido. Checkov en el pipeline para validar configuraciones antes del apply.",
    severity: "high" as const,
  },
];

const severityConfig = {
  critical: { label: "Crítico", color: "text-red-400", bg: "bg-red-500/10 border-red-500/30" },
  high: { label: "Alto", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/30" },
  medium: { label: "Medio", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/30" },
  low: { label: "Bajo", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30" },
};

export default function AntiPatronesPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="warning" className="mb-3">Implementación</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Anti-patrones de Adopción DevSecOps
        </h1>
        <p className="text-mayaguez-text-secondary max-w-2xl">
          Los 8 errores más comunes observados en organizaciones que intentan adoptar DevSecOps
          sin un modelo estructurado. Identificar y evitar estos anti-patrones es el primer paso
          hacia una adopción genuina.
        </p>
      </div>

      <div className="space-y-6">
        {antiPatterns.map((ap) => {
          const severity = severityConfig[ap.severity];
          return (
            <Card key={ap.id} variant="bordered" className={`border ${severity.bg.split(" ")[1]}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <XCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${severity.color}`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-mayaguez-text-muted">{ap.id}</span>
                        <h3 className="font-bold text-mayaguez-text-primary">{ap.name}</h3>
                      </div>
                      <p className="text-sm text-mayaguez-text-secondary">{ap.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-4 ${severity.color} ${severity.bg}`}>
                    {severity.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pl-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-mayaguez-warning" />
                      <p className="text-xs font-semibold text-mayaguez-warning uppercase tracking-wider">Síntomas</p>
                    </div>
                    <ul className="space-y-1.5">
                      {ap.symptoms.map((s, i) => (
                        <li key={i} className="text-xs text-mayaguez-text-secondary flex items-start gap-2">
                          <span className="text-mayaguez-warning mt-0.5">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-mayaguez-success" />
                      <p className="text-xs font-semibold text-mayaguez-success uppercase tracking-wider">Corrección</p>
                    </div>
                    <p className="text-xs text-mayaguez-text-secondary leading-relaxed">{ap.correction}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 p-5 rounded-lg bg-mayaguez-accent/5 border border-mayaguez-accent/20">
        <h3 className="font-semibold text-mayaguez-accent mb-2">¿Identificaste algún anti-patrón en tu organización?</h3>
        <p className="text-sm text-mayaguez-text-secondary mb-3">
          El evaluador de 40 preguntas detecta automáticamente los anti-patrones más comunes
          en las dimensiones organizacional y cultural, y genera recomendaciones específicas.
        </p>
        <Link href="/demo" className="inline-flex items-center gap-2 text-sm font-semibold text-mayaguez-accent hover:opacity-80">
          Ir al Evaluador <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
