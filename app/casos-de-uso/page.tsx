import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, TrendingUp, Shield, Zap, BarChart2, Users, Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Uso | Modelo Mayagüez DevSecOps",
  description:
    "Seis perfiles organizacionales reales validados con el Modelo Mayagüez: Fintech, Banca Digital, Logística, Telecomunicaciones, Sector Público y Desarrollo de Software.",
};

const emaiColors: Record<number, string> = {
  0: "text-gray-400 bg-gray-700/20 border-gray-600/30",
  1: "text-orange-400 bg-orange-700/20 border-orange-600/30",
  2: "text-yellow-400 bg-yellow-700/20 border-yellow-600/30",
  3: "text-blue-400 bg-blue-700/20 border-blue-600/30",
  4: "text-green-400 bg-green-700/20 border-green-600/30",
  5: "text-purple-400 bg-purple-700/20 border-purple-600/30",
};

interface UseCase {
  id: string;
  sector: string;
  emoji: string;
  tagline: string;
  profile: string;
  scores: { technical: number; organizational: number; cultural: number; maturity: number };
  emaiLevel: number;
  seaScore: number;
  doraCategory: string;
  challenge: string;
  approach: string;
  keyActions: string[];
  expectedResult: string;
  insight: string;
}

const useCases: UseCase[] = [
  {
    id: "fintech",
    sector: "Startup Fintech",
    emoji: "⚡",
    tagline: "Alta cultura, baja gobernanza",
    profile: "Equipos ágiles con cultura DevOps fuerte pero sin estructura formal de gobernanza. Velocidad alta, control bajo.",
    scores: { technical: 2.45, organizational: 2.33, cultural: 2.28, maturity: 2.25 },
    emaiLevel: 2,
    seaScore: 46.6,
    doraCategory: "Medium",
    challenge: "El crecimiento rápido de la startup creó pipelines CI/CD informales. Alta frecuencia de despliegues pero sin trazabilidad ni evidencias de cumplimiento. El CAB no existe, pero tampoco existe la gobernanza necesaria para el Fast-Track.",
    approach: "El Modelo Mayagüez actúa como 'andamiaje de gobernanza' sin frenar la cultura ágil existente. Se formaliza mediante Policy as Code (OPA) en lugar de burocracia manual.",
    keyActions: [
      "Implementar Policy as Code (OPA) para formalizar controles sin CAB manual",
      "Introducir Error Budgets para disciplinar la frecuencia de despliegues",
      "Establecer Ficha FAMA por servicio crítico (regulación fintech)",
      "Configurar SAST/SCA para cumplimiento PCI-DSS automático",
    ],
    expectedResult: "Transición a EMAI 3-4 en 90 días. Score organizacional de 2.33 a 3.5+. Habilitación de Fast-Track con trazabilidad completa para reguladores.",
    insight: "Las startups tienen puntajes culturales más altos (4.5 promedio) pero menor madurez organizacional (3.6). Mayagüez les da la estructura sin quitarles la velocidad.",
  },
  {
    id: "banca",
    sector: "Banca Digital",
    emoji: "🏦",
    tagline: "Alta gobernanza, cultura rígida",
    profile: "Gran corporación bancaria con procesos ITIL maduros, COBIT establecido, pero silos entre Dev/Sec/Ops y cultura resistente al cambio.",
    scores: { technical: 2.18, organizational: 2.25, cultural: 2.25, maturity: 2.25 },
    emaiLevel: 2,
    seaScore: 44.6,
    doraCategory: "Low",
    challenge: "CAB manual que tarda 15 días en aprobar cambios estándar. Equipos de desarrollo frustrados por la burocracia. Seguridad vista como 'el departamento que bloquea'. Score técnico más bajo del sector (2.18) a pesar de alta inversión en infraestructura.",
    approach: "El modelo 'inyecta agilidad' en la corporación traduciendo los controles existentes a Policy as Code y creando el incentivo del Fast-Track para motivar a los equipos a mejorar su score EMAI.",
    keyActions: [
      "Mapear y traducir controles COBIT/ISO existentes a Policy as Code (OPA)",
      "Crear proyecto piloto con equipo voluntario motivado por el Fast-Track",
      "Reducir tiempo de aprobación de cambios estándar de 15 días a automático",
      "Implementar Shift-Left Security con capacitaciones en Secure Coding",
    ],
    expectedResult: "Reducción del Lead Time de semanas a horas para el equipo piloto. Creación de caso de éxito interno que acelera la adopción en otros equipos.",
    insight: "Las grandes corporaciones tienen alta madurez organizacional (4.1) pero procesos culturales rígidos (3.2). Mayagüez es vital para inyectar agilidad sin romper el cumplimiento.",
  },
  {
    id: "logistica",
    sector: "Empresa de Logística",
    emoji: "🚀",
    tagline: "Caso de éxito — 86/100",
    profile: "Mejor desempeño del estudio colombiano. Equilibrio sobresaliente entre dimensiones técnica (4.33), organizacional (4.30), cultural (4.20) y de madurez (4.33).",
    scores: { technical: 4.33, organizational: 4.30, cultural: 4.20, maturity: 4.33 },
    emaiLevel: 4,
    seaScore: 86.0,
    doraCategory: "Elite",
    challenge: "Con score SEA de 86/100, el desafío no es adopción sino sostenibilidad. ¿Cómo mantener la excelencia operativa a escala y evitar la regresión ante el crecimiento del equipo?",
    approach: "El Modelo Mayagüez actúa como 'plataforma de innovación'. Con Fast-Track activo, el equipo puede experimentar con nuevas tecnologías y procesos dentro de un marco de gobernanza delegada (Nivel 5).",
    keyActions: [
      "Formalizar el Fast-Track con certificados JSON inmutables por despliegue",
      "Implementar Self-Healing automático para incidentes comunes",
      "Crear un programa interno de 'Maestros Adaptivos' para replicar el modelo",
      "Contribuir como caso de referencia en la comunidad DevSecOps latinoamericana",
    ],
    expectedResult: "Transición a Nivel EMAI 5 (Maestro Adaptativo). Gobierno delegado: el equipo define sus propias reglas PaC. Participación como conferencistas en eventos de industria.",
    insight: "El sector de Logística lidera el ranking colombiano con 86/100. La combinación de madurez cultural y técnica alta es el patrón ganador del modelo.",
  },
  {
    id: "telco",
    sector: "Telecomunicaciones",
    emoji: "📡",
    tagline: "Técnica avanzada, cultura media",
    profile: "Empresa de telecomunicaciones con infraestructura técnica robusta (3.50) pero organizacional y cultural en desarrollo (3.60/3.58).",
    scores: { technical: 3.50, organizational: 3.60, cultural: 3.58, maturity: 3.75 },
    emaiLevel: 3,
    seaScore: 72.2,
    doraCategory: "High",
    challenge: "La inversión técnica no se traduce en velocidad de entrega por falta de integración organizacional. Los equipos de red, seguridad y desarrollo operan con objetivos desalineados.",
    approach: "El modelo actúa como 'integrador organizacional'. Las métricas DORA compartidas entre Dev/Sec/Ops y los OKRs trimestrales del roadmap crean alineación sin reorganización estructural.",
    keyActions: [
      "Implementar Squad model con representantes de Dev, Sec y Ops por servicio",
      "Establecer OKRs compartidos en torno a métricas DORA entre los tres equipos",
      "Automatizar la integración de cambios de red en el pipeline de software",
      "Programa de rotación entre equipos para reducir silos culturales",
    ],
    expectedResult: "Mejora de score cultural de 3.58 a 4.0+. Reducción del Lead Time a < 1 semana. Activación del Fast-Track parcial (sin CAB para cambios estándar).",
    insight: "Las telcos tienen desafíos únicos por la integración de infraestructura de red con software. El modelo Westrum de cultura generativa es crítico en este sector.",
  },
  {
    id: "publico",
    sector: "Organización Pública",
    emoji: "🏛️",
    tagline: "Transformación cultural profunda",
    profile: "Entidad del sector público con bajo puntaje cultural (2.0) y organizacional (2.5). Alta burocracia, procesos manuales y resistencia institucional al cambio.",
    scores: { technical: 2.30, organizational: 2.50, cultural: 2.00, maturity: 2.20 },
    emaiLevel: 1,
    seaScore: 43.0,
    doraCategory: "Low",
    challenge: "La burocracia institucional es structural: los cambios requieren múltiples niveles de aprobación, los controles son manuales por diseño regulatorio, y la cultura punitiva ante errores inhibe la mejora continua.",
    approach: "El modelo adopta una estrategia de 'demostración controlada'. Se crea un laboratorio de innovación con un equipo voluntario de alto desempeño para demostrar que la agilidad y el control son compatibles.",
    keyActions: [
      "Crear un 'Laboratorio de Innovación DevSecOps' con equipo voluntario",
      "Demostrar que Policy as Code cumple la normativa mejor que el CAB manual",
      "Programa intensivo de Blame-Free Culture (taller Westrum para líderes)",
      "Documentar el caso de éxito para justificar la expansión institucional",
    ],
    expectedResult: "El piloto logra EMAI 2-3 en 90 días. Los resultados del laboratorio justifican la adopción progresiva en toda la organización.",
    insight: "El sector público presenta los mayores desafíos culturales (2.0/5 promedio) pero también el mayor potencial de impacto cuando se logra la transformación.",
  },
  {
    id: "softdev",
    sector: "Empresa de Desarrollo de Software",
    emoji: "💻",
    tagline: "Perfil equilibrado para escalar",
    profile: "Empresa de desarrollo con perfil balanceado en todas las dimensiones (promedio 3.5/5). Buena base técnica pero sin estándar unificado entre proyectos.",
    scores: { technical: 3.50, organizational: 3.45, cultural: 3.50, maturity: 3.50 },
    emaiLevel: 3,
    seaScore: 69.8,
    doraCategory: "High",
    challenge: "Cada proyecto tiene su propio pipeline, sus propias herramientas de seguridad y sus propios procesos. No hay estándar organizacional que permita medir ni comparar el desempeño entre equipos.",
    approach: "El modelo actúa como 'estándar de plataforma'. La Ficha FAMA y el score SEA crean un lenguaje común de madurez que permite comparar equipos y crear competencia saludable.",
    keyActions: [
      "Implementar Platform Engineering con un Golden Path de CI/CD estándar",
      "Aplicar la MIG como sistema de gamificación entre equipos de proyecto",
      "Crear un 'Centro de Excelencia DevSecOps' interno",
      "Implementar Inner Source para compartir mejores prácticas entre proyectos",
    ],
    expectedResult: "Estandarización de pipelines en todos los proyectos. Score promedio de 3.5 a 4.0+ en 6 meses. Diferenciación competitiva frente a competidores.",
    insight: "Las empresas de desarrollo de software tienen la ventaja de entender el modelo técnicamente pero necesitan el empuje organizacional y cultural para estandarizarlo a escala.",
  },
];

export default function CasosDeUsoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Badge variant="info" className="mb-6">Casos de Uso Reales</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-mayaguez-text-primary mb-6 max-w-4xl leading-tight">
            El Modelo Mayagüez en Seis Contextos Organizacionales
          </h1>
          <p className="text-xl text-mayaguez-text-secondary max-w-3xl">
            Perfiles reales basados en los datos del estudio colombiano de 20 organizaciones.
            Cada caso ilustra cómo el modelo adapta su estrategia al perfil de riesgo y madurez específico.
          </p>
        </div>
      </section>

      {/* Overview Grid */}
      <Section className="bg-mayaguez-secondary/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((uc) => (
            <a key={uc.id} href={`#${uc.id}`}
              className="p-4 rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 hover:border-mayaguez-accent/30 transition-all text-center group">
              <div className="text-3xl mb-2">{uc.emoji}</div>
              <p className="text-xs font-semibold text-mayaguez-text-primary group-hover:text-mayaguez-accent transition-colors">
                {uc.sector}
              </p>
              <p className="text-xs text-mayaguez-text-muted mt-1">{uc.seaScore}/100</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Use Cases Detail */}
      {useCases.map((uc, i) => (
        <Section key={uc.id} id={uc.id} className={i % 2 === 1 ? "bg-mayaguez-secondary/10" : ""}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Profile */}
            <div className="lg:col-span-1">
              <div className="text-5xl mb-4">{uc.emoji}</div>
              <Badge variant="info" className="mb-3 text-xs">{uc.tagline}</Badge>
              <h2 className="text-2xl font-bold text-mayaguez-text-primary mb-2">{uc.sector}</h2>
              <p className="text-sm text-mayaguez-text-secondary mb-6 leading-relaxed">{uc.profile}</p>

              {/* Score Grid */}
              <div className="space-y-2 mb-4">
                {(["technical", "organizational", "cultural", "maturity"] as const).map(dim => {
                  const labels: Record<string, string> = { technical: "Técnica", organizational: "Org.", cultural: "Cultural", maturity: "Madurez" };
                  const score = uc.scores[dim];
                  return (
                    <div key={dim}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-mayaguez-text-muted">{labels[dim]}</span>
                        <span className="text-mayaguez-text-secondary font-medium">{score.toFixed(2)}/5</span>
                      </div>
                      <div className="h-1.5 bg-mayaguez-secondary/50 rounded-full">
                        <div className="h-full rounded-full bg-mayaguez-accent" style={{ width: `${(score / 5) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${emaiColors[uc.emaiLevel]}`}>
                  EMAI {uc.emaiLevel}
                </span>
                <span className={`text-xs px-2 py-1 rounded font-bold ${uc.doraCategory === "Elite" ? "text-green-400 bg-green-500/20" : uc.doraCategory === "High" ? "text-blue-400 bg-blue-500/20" : uc.doraCategory === "Medium" ? "text-yellow-400 bg-yellow-500/20" : "text-red-400 bg-red-500/20"}`}>
                  {uc.doraCategory}
                </span>
                <span className="text-xs px-2 py-1 rounded text-mayaguez-accent bg-mayaguez-accent/20 font-bold">
                  {uc.seaScore}/100
                </span>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-lg bg-mayaguez-danger/5 border border-mayaguez-danger/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-mayaguez-danger" />
                  <p className="text-xs font-semibold text-mayaguez-danger uppercase tracking-wider">Desafío Principal</p>
                </div>
                <p className="text-sm text-mayaguez-text-secondary leading-relaxed">{uc.challenge}</p>
              </div>

              <div className="rounded-lg bg-mayaguez-accent/5 border border-mayaguez-accent/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-mayaguez-accent" />
                  <p className="text-xs font-semibold text-mayaguez-accent uppercase tracking-wider">Enfoque Mayagüez</p>
                </div>
                <p className="text-sm text-mayaguez-text-secondary leading-relaxed">{uc.approach}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart2 className="h-4 w-4 text-mayaguez-warning" />
                  <p className="text-xs font-semibold text-mayaguez-warning uppercase tracking-wider">Acciones Clave</p>
                </div>
                <ul className="space-y-2">
                  {uc.keyActions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-mayaguez-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-mayaguez-warning/20 flex items-center justify-center text-xs text-mayaguez-warning font-bold flex-shrink-0 mt-0.5">
                        {j + 1}
                      </span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-mayaguez-success/5 border border-mayaguez-success/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-mayaguez-success" />
                  <p className="text-xs font-semibold text-mayaguez-success uppercase tracking-wider">Resultado Esperado</p>
                </div>
                <p className="text-sm text-mayaguez-text-secondary leading-relaxed">{uc.expectedResult}</p>
              </div>

              <div className="p-4 rounded-lg border border-mayaguez-accent/10 bg-mayaguez-secondary/20">
                <p className="text-xs text-mayaguez-accent font-semibold mb-1">💡 Hallazgo del Estudio</p>
                <p className="text-sm text-mayaguez-text-secondary italic">{uc.insight}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-mayaguez-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="h-12 w-12 text-mayaguez-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-mayaguez-text-primary mb-4">
            ¿Cuál es el perfil de tu organización?
          </h2>
          <p className="text-mayaguez-text-secondary mb-8 text-lg">
            Realiza la evaluación de 40 preguntas para obtener tu perfil real, compararlo
            con el benchmark de tu sector y recibir un roadmap personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Evaluar mi Organización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/implementacion">
              <Button variant="outline" size="lg">
                Ver Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
