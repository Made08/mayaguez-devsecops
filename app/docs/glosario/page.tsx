import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Glosario Oficial | Documentación Mayagüez",
};

const glossary = [
  { term: "EMAI", def: "Escala de Madurez Adaptativa Integral (0-5). Eje central del modelo que define el nivel de evolución DevSecOps de una organización, alineada con CMMI V2.0." },
  { term: "SEA", def: "Scoring de Eficiencia Adaptativa. Fórmula ponderada: EO(%) = [(M×0.30) + (C×0.20) + (A×0.20) + (E×0.15) + (G×0.15)] × 20." },
  { term: "MEE", def: "Matriz de Espectro Explícito. Define verbos rectores, adjetivos de evidencia, alcance y completitud para cada nivel EMAI." },
  { term: "MIG", def: "Matriz de Incentivos Gamificados. Sistema de medallas (🐢🛡️🚀💎🌌) que otorga beneficios de autonomía y equipo según nivel EMAI." },
  { term: "FAMA", def: "Ficha de Auditoría de Madurez Adaptativa. Instrumento de diagnóstico inicial que evalúa el estado actual de cada servicio del equipo piloto." },
  { term: "Fast-Track", def: "Ruta de despliegue acelerada activada automáticamente para equipos con madurez ≥ Nivel 4 y error budget > 20%. Elimina la aprobación manual del CAB." },
  { term: "Confianza Verificada", def: "Estado en el que la autonomía se otorga basada en evidencia técnica inmutable, no en jerarquía ni confianza subjetiva." },
  { term: "Trigger de Adaptación", def: "Evento lógico que dispara automáticamente una transición en el modelo de gobierno. Tipos: Técnico (SRE), Seguridad (DevSecOps), Madurez (CMMI/COBIT), Negocio (ITIL 4)." },
  { term: "Error Budget", def: "Margen de error permitido antes de priorizar estabilidad sobre innovación. Calculado como: 1 - SLO objetivo. Cuando se agota (< 10%), solo se permiten bugfix y security-patch." },
  { term: "Policy as Code (PaC)", def: "Reglas de cumplimiento de gobernanza traducidas a código ejecutable (OPA/Azure Policy). Permite auditoría automatizada e inmutable en lugar de revisión manual." },
  { term: "Shift-Left Security", def: "Integración de actividades de seguridad desde las etapas más tempranas del SDLC, reduciendo el costo de corrección hasta 30 veces vs. etapas finales." },
  { term: "Blame-Free Culture", def: "Cultura organizacional donde los fallos generan aprendizaje sistemático, no búsqueda de culpables. Fundamentada en el modelo Westrum de cultura generativa." },
  { term: "CAB", def: "Change Advisory Board. Comité de Asesoría de Cambios. En el Modelo Mayagüez, el CAB manual es eliminado para equipos que alcanzan madurez ≥ Nivel 4 mediante Fast-Track." },
  { term: "DORA", def: "DevOps Research and Assessment. Estándar global de métricas de desempeño DevOps con cuatro indicadores clave: Deployment Frequency, Lead Time, MTTR y Change Failure Rate." },
  { term: "SLO / SLI", def: "Service Level Objective / Indicator. Objetivos e indicadores de nivel de servicio usados en SRE para definir la confiabilidad esperada de un sistema." },
  { term: "IaC", def: "Infrastructure as Code. Gestión de infraestructura mediante archivos de configuración declarativos versionados (Terraform, Ansible), habilitando reproducibilidad y drift detection." },
  { term: "SAST", def: "Static Application Security Testing. Análisis estático del código fuente para detectar vulnerabilidades antes de la ejecución. Herramientas: SonarQube, Semgrep, Checkmarx." },
  { term: "DAST", def: "Dynamic Application Security Testing. Pruebas de seguridad sobre aplicaciones en ejecución. Herramientas: OWASP ZAP, Burp Suite." },
  { term: "SCA", def: "Software Composition Analysis. Análisis de dependencias de terceros para detectar CVEs conocidos. Herramientas: Snyk, OWASP Dependency Check, Dependabot." },
  { term: "S-SDLC", def: "Secure Software Development Life Cycle. Versión del SDLC que integra actividades de seguridad en cada fase del ciclo de vida del software." },
  { term: "CVE / CVSS", def: "Common Vulnerabilities and Exposures / Common Vulnerability Scoring System. El Modelo Mayagüez activa modo emergencia ante CVE Crítico (CVSS > 9.0)." },
  { term: "OPA", def: "Open Policy Agent. Motor de políticas de código abierto usado para implementar Policy as Code en pipelines CI/CD e infraestructura." },
  { term: "Canary / Blue-Green", def: "Estrategias de despliegue progresivo que minimizan el riesgo. El modelo las suspende automáticamente cuando la latencia P99 supera 300ms por más de 5 minutos." },
  { term: "Break-Glass", def: "Mecanismo de emergencia que permite saltarse controles normales ante una situación crítica aprobada. Genera trazabilidad inmutable del evento." },
];

export default function GlosarioPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Referencia</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">Glosario Oficial del Modelo Mayagüez</h1>
        <p className="text-mayaguez-text-secondary">
          Definiciones oficiales de todos los términos, siglas y conceptos del Modelo Mayagüez.
        </p>
      </div>

      <div className="space-y-3">
        {glossary.map((entry) => (
          <div key={entry.term} className="rounded-lg p-4 bg-mayaguez-secondary/30 border border-mayaguez-accent/10 hover:border-mayaguez-accent/30 transition-colors">
            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-mayaguez-accent text-sm min-w-[120px] flex-shrink-0 pt-0.5">
                {entry.term}
              </span>
              <p className="text-sm text-mayaguez-text-secondary leading-relaxed">{entry.def}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
