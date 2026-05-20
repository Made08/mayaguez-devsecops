import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Referencias Académicas | Documentación Mayagüez",
};

const references = [
  {
    id: "1",
    apa: "Rajapakse, R. N., Zahedi, M., Babar, M. A., & Shen, H. (2022). Challenges and solutions when adopting DevSecOps: A systematic review. Information and Software Technology, 141, 106725.",
    relevance: "Revisión sistemática de 25 estudios que identifica los principales desafíos de adopción DevSecOps y las soluciones propuestas. Base para la identificación de brechas del modelo.",
    doi: "10.1016/j.infsof.2021.106725",
  },
  {
    id: "2",
    apa: "Mothanna, B., et al. (2024). Integrating security practices into DevOps: A systematic mapping study. Information and Software Technology, 168, 107132.",
    relevance: "Mapeo sistemático de prácticas de seguridad en DevOps. Fundamenta las dimensiones técnicas y organizacionales del cuestionario FAMA.",
    doi: "10.1016/j.infsof.2024.107132",
  },
  {
    id: "3",
    apa: "Prates, J. C., & Pereira, R. (2025). DevSecOps tools effectiveness: A comprehensive analysis of security integration in CI/CD pipelines. Journal of Systems and Software, 201, 111128.",
    relevance: "Análisis de efectividad de herramientas DevSecOps en pipelines reales. Sustenta las recomendaciones de herramientas del roadmap de implementación.",
    doi: "10.1016/j.jss.2024.111128",
  },
  {
    id: "4",
    apa: "Seotan, I. (2023). The relationship between DevSecOps maturity and organizational performance. Computers & Security, 128, 103119.",
    relevance: "Establece la correlación entre madurez DevSecOps y desempeño organizacional. Fundamento empírico para el sistema de scoring SEA.",
    doi: "10.1016/j.cose.2023.103119",
  },
  {
    id: "5",
    apa: "Zahedi, M., Shahin, M., & Babar, M. A. (2022). A systematic review of security challenges in DevOps. ACM Computing Surveys, 55(7), 1-39.",
    relevance: "Revisión exhaustiva de desafíos de seguridad en DevOps. Informa los triggers de seguridad y el diseño del gate de Policy as Code.",
    doi: "10.1145/3514094",
  },
  {
    id: "6",
    apa: "Kumar, R., & Goyal, R. (2020). Modeling continuous security. Computers & Security, 97, 101967.",
    relevance: "Marco para la seguridad continua en ciclos de vida de software. Base conceptual para el principio 'La Seguridad es un Atributo de Calidad, no una Fase'.",
    doi: "10.1016/j.cose.2020.101967",
  },
  {
    id: "7",
    apa: "Wurzer, A., Fritz, M., & Cinar, E. (2026). CICD and DevSecOps: A qualitative fallout study. International Journal of Information Management, 67, 102118.",
    relevance: "Estudio cualitativo de los efectos secundarios de implementaciones DevSecOps en organizaciones. Sustenta los anti-patrones identificados en el modelo.",
    doi: "10.1016/j.ijinfomgt.2026.102118",
  },
];

const frameworks = [
  { name: "CMMI V2.0", org: "ISACA / SEI", relevance: "Escala de madurez EMAI y criterios de evidencia por nivel" },
  { name: "COBIT 2019", org: "ISACA", relevance: "Principios de gobernanza adaptativa y Policy as Code" },
  { name: "ITIL 4 (SVS)", org: "AXELOS", relevance: "Gestión del valor sin burocracia, habilitación del cambio" },
  { name: "DORA Metrics", org: "DORA / Google", relevance: "Métricas de desempeño: Deployment Frequency, Lead Time, MTTR, CFR" },
  { name: "SRE Framework", org: "Google SRE", relevance: "Error Budgets, SLOs/SLIs, tolerancia a fallos y auto-remediación" },
  { name: "Modelo Westrum", org: "Ron Westrum", relevance: "Evaluación de cultura organizacional (generativa, burocrática, patológica)" },
  { name: "Agile (Scrum/Kanban)", org: "Agile Alliance", relevance: "Cadencia iterativa, historias de seguridad en Sprint" },
];

export default function ReferenciasPage() {
  return (
    <div>
      <div className="mb-8">
        <Badge variant="info" className="mb-3">Referencia</Badge>
        <h1 className="text-3xl font-bold text-mayaguez-text-primary mb-3">
          Referencias Académicas
        </h1>
        <p className="text-mayaguez-text-secondary">
          Base bibliográfica del Modelo Mayagüez en formato APA 7. Todas las referencias
          corresponden a investigaciones publicadas en journals de primer cuartil (Q1).
        </p>
      </div>

      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Literatura Primaria</h2>
      <div className="space-y-4 mb-10">
        {references.map((ref) => (
          <Card key={ref.id} variant="bordered" className="border-mayaguez-accent/15">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-mayaguez-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-mayaguez-text-primary leading-relaxed mb-2">{ref.apa}</p>
                  {ref.doi && (
                    <p className="text-xs font-mono text-mayaguez-text-muted mb-2">DOI: {ref.doi}</p>
                  )}
                  <p className="text-xs text-mayaguez-text-secondary italic">
                    <span className="text-mayaguez-accent font-medium">Relevancia:</span> {ref.relevance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold text-mayaguez-text-primary mb-4">Frameworks y Estándares Integrados</h2>
      <div className="overflow-x-auto rounded-lg border border-mayaguez-accent/20">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-mayaguez-secondary/50 border-b border-mayaguez-accent/20">
              <th className="text-left py-3 px-5 text-mayaguez-text-secondary font-medium">Framework</th>
              <th className="text-left py-3 px-5 text-mayaguez-text-secondary font-medium">Organización</th>
              <th className="text-left py-3 px-5 text-mayaguez-text-secondary font-medium">Relevancia en Mayagüez</th>
            </tr>
          </thead>
          <tbody>
            {frameworks.map((fw, i) => (
              <tr key={fw.name} className={`border-b border-mayaguez-accent/10 ${i % 2 === 0 ? "" : "bg-mayaguez-secondary/20"}`}>
                <td className="py-3 px-5 font-semibold text-mayaguez-accent">{fw.name}</td>
                <td className="py-3 px-5 text-mayaguez-text-secondary">{fw.org}</td>
                <td className="py-3 px-5 text-mayaguez-text-secondary">{fw.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
