import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Roles y Responsabilidades | Documentación Mayagüez",
};

const roles = [
  {
    role: "Líder Técnico (Tech Lead)",
    responsibility: "Garante del pipeline y la calidad técnica",
    activities: [
      "Mantener el pipeline CI/CD y la configuración de herramientas de seguridad",
      "Revisar y aprobar cambios a la configuración de Policy as Code",
      "Gestionar el error budget y decidir la pausa de features cuando se agota",
      "Liderar la adopción de mejores prácticas técnicas en el equipo",
      "Reportar métricas DORA al dashboard semanal",
    ],
    emai: "Aplica desde Nivel 2",
    color: "text-mayaguez-accent",
    bg: "border-mayaguez-accent/20 bg-mayaguez-accent/5",
  },
  {
    role: "Ingeniero DevSecOps",
    responsibility: "Constructor y mantenedor de la plataforma de automatización",
    activities: [
      "Diseñar e implementar el Golden Path del pipeline CI/CD",
      "Integrar herramientas SAST, DAST, SCA y gestión de secretos",
      "Implementar IaC con Terraform y configurar drift detection",
      "Escribir y mantener políticas OPA para validación automática",
      "Crear y mantener dashboards de observabilidad (SLOs/SLIs, DORA)",
    ],
    emai: "Aplica desde Nivel 2",
    color: "text-purple-400",
    bg: "border-purple-500/20 bg-purple-500/5",
  },
  {
    role: "Gerente de Producto / Product Owner",
    responsibility: "Priorización del backlog con visibilidad de riesgo técnico",
    activities: [
      "Incluir historias de seguridad (threat modeling, hardening) en el sprint",
      "Respetar la pausa de features cuando el error budget se agota",
      "Facilitar la comunicación entre el equipo técnico y stakeholders del negocio",
      "Aprobar el Manifiesto de Ingeniería Adaptativa como compromiso del producto",
      "Participar en la revisión mensual de métricas DORA con el equipo",
    ],
    emai: "Aplica desde Nivel 1",
    color: "text-mayaguez-warning",
    bg: "border-mayaguez-warning/20 bg-mayaguez-warning/5",
  },
  {
    role: "Responsable de Seguridad (CISO / Security Champion)",
    responsibility: "Definición y validación de políticas de seguridad como código",
    activities: [
      "Traducir requisitos normativos (PCI-DSS, ISO 27001) a políticas OPA",
      "Validar la configuración de herramientas SAST/DAST/SCA",
      "Revisar y aprobar las reglas del gate de seguridad (breaking build)",
      "Gestionar el proceso de respuesta ante vulnerabilidades críticas (CVE > 9.0)",
      "Auditar los certificados JSON inmutables generados por el pipeline",
    ],
    emai: "Aplica desde Nivel 2",
    color: "text-mayaguez-danger",
    bg: "border-mayaguez-danger/20 bg-mayaguez-danger/5",
  },
  {
    role: "Director TI / CTO",
    responsibility: "Patrocinio ejecutivo y remoción de obstáculos institucionales",
    activities: [
      "Aprobar la eliminación del CAB manual cuando el equipo alcanza EMAI ≥ 4",
      "Comunicar el Modelo Mayagüez a los stakeholders del negocio",
      "Asignar el tiempo y los recursos necesarios para el roadmap de 90 días",
      "Validar el reporte de ROI al final de cada trimestre",
      "Escalar el modelo a otros equipos basado en el caso de éxito del piloto",
    ],
    emai: "Aplica desde Nivel 1",
    color: "text-mayaguez-success",
    bg: "border-mayaguez-success/20 bg-mayaguez-success/5",
  },
  {
    role: "SRE (Site Reliability Engineer)",
    responsibility: "Gestión de confiabilidad y cultura de incidentes",
    activities: [
      "Definir y monitorear SLOs/SLIs para servicios críticos",
      "Gestionar el cálculo y visualización del error budget",
      "Liderar post-mortems sin culpa (blame-free) ante incidentes",
      "Implementar y validar estrategias de despliegue Canary/Blue-Green",
      "Configurar alertas automáticas para triggers de adaptación SRE",
    ],
    emai: "Aplica desde Nivel 3",
    color: "text-blue-400",
    bg: "border-blue-500/20 bg-blue-500/5",
  },
];

export default function RolesPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Implementación</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Roles y Responsabilidades
        </h1>
        <p className="text-mayaguez-text-secondary max-w-2xl">
          El Modelo Mayagüez requiere que todos los roles del equipo tengan responsabilidades
          explícitas. La adopción DevSecOps no es responsabilidad exclusiva del equipo de DevOps:
          es un compromiso colectivo.
        </p>
      </div>

      <div className="space-y-5">
        {roles.map((r) => (
          <Card key={r.role} variant="bordered" className={`border ${r.bg.split(" ")[0]} ${r.bg.split(" ")[1]}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className={`font-bold text-lg ${r.color}`}>{r.role}</h3>
                  <p className="text-sm text-mayaguez-text-secondary">{r.responsibility}</p>
                </div>
                <Badge variant="default" className={`text-xs flex-shrink-0 ${r.color} border-current`}>
                  {r.emai}
                </Badge>
              </div>
              <ul className="space-y-2">
                {r.activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-mayaguez-text-secondary">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${r.color.replace("text-", "bg-")}`} />
                    {a}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
