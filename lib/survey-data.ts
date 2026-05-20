// Datos del cuestionario de evaluación DevSecOps Mayagüez (40 preguntas)

export interface Question {
  id: string;
  dimension: "technical" | "organizational" | "cultural" | "maturity";
  text: string;
  category: string;
}

export const questions: Question[] = [
  // Sección Técnica (P1-P10)
  {
    id: "P1",
    dimension: "technical",
    text: "La organización cuenta con pipelines CI/CD implementados.",
    category: "Infraestructura"
  },
  {
    id: "P2",
    dimension: "technical",
    text: "Se integran herramientas de seguridad (SAST, DAST, SCA) dentro del pipeline.",
    category: "Seguridad"
  },
  {
    id: "P3",
    dimension: "technical",
    text: "Las pruebas de seguridad se ejecutan de forma automatizada.",
    category: "Automatización"
  },
  {
    id: "P4",
    dimension: "technical",
    text: "La seguridad se incorpora desde etapas tempranas del desarrollo (Shift-Left).",
    category: "Shift-Left"
  },
  {
    id: "P5",
    dimension: "technical",
    text: "Existe monitoreo continuo de vulnerabilidades en producción.",
    category: "Monitoreo"
  },
  {
    id: "P6",
    dimension: "technical",
    text: "Se gestionan secretos mediante herramientas seguras (vaults).",
    category: "Seguridad"
  },
  {
    id: "P7",
    dimension: "technical",
    text: "Se utilizan prácticas de infraestructura como código (IaC).",
    category: "Infraestructura"
  },
  {
    id: "P8",
    dimension: "technical",
    text: "Las métricas DORA son utilizadas para medir el desempeño del equipo.",
    category: "Métricas"
  },
  {
    id: "P9",
    dimension: "technical",
    text: "Existe integración entre herramientas de desarrollo, seguridad y operaciones.",
    category: "Integración"
  },
  {
    id: "P10",
    dimension: "technical",
    text: "Los procesos de despliegue son mayormente automatizados.",
    category: "Automatización"
  },
  // Sección Organizacional (P11-P20)
  {
    id: "P11",
    dimension: "organizational",
    text: "Existe una estrategia formal para la adopción de DevSecOps.",
    category: "Estrategia"
  },
  {
    id: "P12",
    dimension: "organizational",
    text: "Las áreas de desarrollo, seguridad y operaciones trabajan de forma integrada.",
    category: "Colaboración"
  },
  {
    id: "P13",
    dimension: "organizational",
    text: "Existen roles y responsabilidades claramente definidos (RACI).",
    category: "Gobernanza"
  },
  {
    id: "P14",
    dimension: "organizational",
    text: "La organización cuenta con procesos de gestión de cambios estructurados.",
    category: "Gestión de Cambios"
  },
  {
    id: "P15",
    dimension: "organizational",
    text: "La seguridad está alineada con los objetivos del negocio.",
    category: "Alineación"
  },
  {
    id: "P16",
    dimension: "organizational",
    text: "Se cuenta con políticas de seguridad formalizadas.",
    category: "Políticas"
  },
  {
    id: "P17",
    dimension: "organizational",
    text: "Los procesos de aprobación (CAB) son eficientes y no generan cuellos de botella.",
    category: "Eficiencia"
  },
  {
    id: "P18",
    dimension: "organizational",
    text: "Se realizan auditorías periódicas de seguridad.",
    category: "Auditoría"
  },
  {
    id: "P19",
    dimension: "organizational",
    text: "Existe apoyo de la alta dirección para iniciativas DevSecOps.",
    category: "Liderazgo"
  },
  {
    id: "P20",
    dimension: "organizational",
    text: "Se asignan recursos suficientes para implementar seguridad en el SDLC.",
    category: "Recursos"
  },
  // Sección Cultural (P21-P30)
  {
    id: "P21",
    dimension: "cultural",
    text: "Los equipos consideran la seguridad como responsabilidad compartida.",
    category: "Responsabilidad"
  },
  {
    id: "P22",
    dimension: "cultural",
    text: "Existe una cultura de colaboración entre equipos (Dev, Sec, Ops).",
    category: "Colaboración"
  },
  {
    id: "P23",
    dimension: "cultural",
    text: "Los desarrolladores aplican prácticas de codificación segura.",
    category: "Prácticas"
  },
  {
    id: "P24",
    dimension: "cultural",
    text: "Se promueve la mejora continua en temas de seguridad.",
    category: "Mejora Continua"
  },
  {
    id: "P25",
    dimension: "cultural",
    text: "Existe apertura al cambio en la adopción de nuevas prácticas.",
    category: "Adaptabilidad"
  },
  {
    id: "P26",
    dimension: "cultural",
    text: "Se capacita regularmente al personal en seguridad.",
    category: "Capacitación"
  },
  {
    id: "P27",
    dimension: "cultural",
    text: "Los equipos identifican y corrigen vulnerabilidades de forma proactiva.",
    category: "Proactividad"
  },
  {
    id: "P28",
    dimension: "cultural",
    text: "Se fomenta la comunicación abierta sobre incidentes de seguridad.",
    category: "Comunicación"
  },
  {
    id: "P29",
    dimension: "cultural",
    text: "La organización aprende de errores y fallos sin cultura punitiva.",
    category: "Blame-Free"
  },
  {
    id: "P30",
    dimension: "cultural",
    text: "La seguridad es percibida como un habilitador y no como un obstáculo.",
    category: "Percepción"
  },
  // Sección Madurez (P31-P40)
  {
    id: "P31",
    dimension: "maturity",
    text: "Los procesos de desarrollo y seguridad están estandarizados.",
    category: "Estandarización"
  },
  {
    id: "P32",
    dimension: "maturity",
    text: "La organización mide su nivel de madurez en DevSecOps.",
    category: "Medición"
  },
  {
    id: "P33",
    dimension: "maturity",
    text: "Se utilizan indicadores para evaluar la mejora continua.",
    category: "Indicadores"
  },
  {
    id: "P34",
    dimension: "maturity",
    text: "Existe trazabilidad completa de los cambios en el software.",
    category: "Trazabilidad"
  },
  {
    id: "P35",
    dimension: "maturity",
    text: "Se generan evidencias automáticas de cumplimiento (logs/reportes).",
    category: "Evidencias"
  },
  {
    id: "P36",
    dimension: "maturity",
    text: "La organización puede auditar sus procesos de seguridad en cualquier momento.",
    category: "Auditoría"
  },
  {
    id: "P37",
    dimension: "maturity",
    text: "Los equipos tienen autonomía en función de su desempeño.",
    category: "Autonomía"
  },
  {
    id: "P38",
    dimension: "maturity",
    text: "La toma de decisiones se basa en datos y métricas.",
    category: "Data-Driven"
  },
  {
    id: "P39",
    dimension: "maturity",
    text: "Existe una evolución progresiva en la adopción de prácticas DevSecOps.",
    category: "Evolución"
  },
  {
    id: "P40",
    dimension: "maturity",
    text: "La organización adapta sus controles según el nivel de riesgo.",
    category: "Adaptabilidad"
  }
];

export interface SectorBenchmark {
  sector: string;
  technical: number;
  organizational: number;
  cultural: number;
  maturity: number;
  general: number;
}

export const sectorBenchmarks: SectorBenchmark[] = [
  {
    sector: "Logística",
    technical: 4.33,
    organizational: 4.30,
    cultural: 4.20,
    maturity: 4.33,
    general: 86.0
  },
  {
    sector: "EdTech",
    technical: 4.30,
    organizational: 3.90,
    cultural: 3.80,
    maturity: 4.00,
    general: 80.6
  },
  {
    sector: "Telecomunicaciones",
    technical: 3.50,
    organizational: 3.60,
    cultural: 3.58,
    maturity: 3.75,
    general: 72.2
  },
  {
    sector: "Desarrollo de Software",
    technical: 3.50,
    organizational: 3.45,
    cultural: 3.50,
    maturity: 3.50,
    general: 69.8
  },
  {
    sector: "Fintech",
    technical: 2.45,
    organizational: 2.33,
    cultural: 2.28,
    maturity: 2.25,
    general: 46.6
  },
  {
    sector: "E-commerce",
    technical: 2.60,
    organizational: 2.70,
    cultural: 2.50,
    maturity: 2.50,
    general: 51.4
  },
  {
    sector: "Banca Digital",
    technical: 2.18,
    organizational: 2.25,
    cultural: 2.25,
    maturity: 2.25,
    general: 44.6
  }
];

export const nationalAverage: SectorBenchmark = {
  sector: "Promedio Nacional (Colombia)",
  technical: 4.1,
  organizational: 3.2,
  cultural: 2.8,
  maturity: 3.5,
  general: 68.0
};

export interface SurveyResponse {
  sector: string;
  companySize: "small" | "medium" | "large";
  role: string;
  experience: number;
  answers: Record<string, number>; // Question ID -> Score 1-5
}

export interface SurveyResult {
  dimensionScores: {
    technical: number;
    organizational: number;
    cultural: number;
    maturity: number;
  };
  seaScore: number;
  emaiLevel: number;
  doraCategory: string;
  medal: string;
  medalEmoji: string;
  comparison: {
    user: number;
    sector: number;
    national: number;
  };
  gaps: string[];
  recommendations: string[];
}
