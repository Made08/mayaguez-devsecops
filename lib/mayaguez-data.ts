// Datos del Modelo Mayagüez - Escala EMAI, Triggers, MIG, etc.

export interface EMAILevel {
  level: number;
  name: string;
  description: string;
  cultural: string;
  devsecOps: string;
  verb: string;
  evidence: string;
}

export const emaiLevels: EMAILevel[] = [
  {
    level: 0,
    name: "Inexistente",
    description: "La organización no reconoce la necesidad del proceso",
    cultural: "Ausencia de conciencia sobre seguridad y calidad",
    devsecOps: "Intervención manual total; sin seguridad integrada",
    verb: "Ignorar",
    evidence: "Ausente"
  },
  {
    level: 1,
    name: "Ad-hoc / Inicial",
    description: "Éxito basado en esfuerzos heroicos individuales. Cultura de silos",
    cultural: "Cultura de silos, responsabilidad individual",
    devsecOps: "Scripts aislados; seguridad reactiva tras incidentes",
    verb: "Reaccionar",
    evidence: "Informal"
  },
  {
    level: 2,
    name: "Gestionado",
    description: "Procesos planificados por proyecto. Resistencia al cambio",
    cultural: "Resistencia al cambio, procesos por proyecto",
    devsecOps: "Pipelines básicos; escaneos manuales ocasionales",
    verb: "Documentar",
    evidence: "Fragmentada"
  },
  {
    level: 3,
    name: "Definido",
    description: "Estándares organizacionales claros. Cultura de colaboración Agile",
    cultural: "Colaboración Agile, estándares claros",
    devsecOps: "CI/CD integrado; seguridad Shift-Left obligatoria",
    verb: "Estandarizar",
    evidence: "Consistente"
  },
  {
    level: 4,
    name: "Medido",
    description: "Decisiones basadas en métricas cuantitativas. Cultura de predictibilidad",
    cultural: "Cultura de predictibilidad, decisiones data-driven",
    devsecOps: "Error Budgets activos; gobernanza automatizada",
    verb: "Monitorear",
    evidence: "Data-Driven"
  },
  {
    level: 5,
    name: "Optimizado",
    description: "Enfoque en innovación y mejora autónoma. Cultura de resiliencia",
    cultural: "Cultura de resiliencia, mejora autónoma",
    devsecOps: "Self-healing; seguridad proactiva y Policy as Code",
    verb: "Optimizar",
    evidence: "Evolutiva"
  }
];

export interface Trigger {
  id: string;
  type: "technical" | "security" | "maturity" | "business";
  name: string;
  condition: string;
  action: string;
  severity: "low" | "medium" | "high" | "critical";
}

export const triggers: Trigger[] = [
  // Triggers Técnicos (SRE)
  {
    id: "T-001",
    type: "technical",
    name: "Error Budget Agotado",
    condition: "Error Budget < 10%",
    action: "Bloqueo de features; solo bugfix/security-patch permitidos",
    severity: "critical"
  },
  {
    id: "T-002",
    type: "technical",
    name: "Latencia Elevada",
    condition: "Latencia P99 > 300ms por 5 min",
    action: "Suspensión de despliegues Canary/Blue-Green",
    severity: "high"
  },
  {
    id: "T-003",
    type: "technical",
    name: "Recursos Saturados",
    condition: "CPU/RAM > 85% persistente",
    action: "Auto-scaling autorizado ignorando restricciones temporales",
    severity: "medium"
  },
  // Triggers de Seguridad (DevSecOps)
  {
    id: "S-001",
    type: "security",
    name: "CVE Crítico Detectado",
    condition: "CVE Crítico (CVSS > 9.0)",
    action: "Modo Emergencia: revocación de Fast-Tracks, aprobación manual del CISO",
    severity: "critical"
  },
  {
    id: "S-002",
    type: "security",
    name: "Drift de Configuración",
    condition: "Drift de Configuración detectado",
    action: "Auto-Remediación: terraform apply automático",
    severity: "high"
  },
  {
    id: "S-003",
    type: "security",
    name: "Falla en Policy as Code",
    condition: "Falla en Policy as Code",
    action: "Hard-Stop: gate falla con código GOV-001",
    severity: "critical"
  },
  // Triggers de Madurez (CMMI/COBIT)
  {
    id: "M-001",
    type: "maturity",
    name: "Promoción a Fast-Track",
    condition: "Score EMAI > 3.8 sostenido 3 meses",
    action: "Activar Fast-Track (eliminación de CAB manual)",
    severity: "low"
  },
  {
    id: "M-002",
    type: "maturity",
    name: "Degradación por CFR Alto",
    condition: "Change Failure Rate > 15%",
    action: "Degradación de autonomía; regreso a revisión manual",
    severity: "high"
  },
  {
    id: "M-003",
    type: "maturity",
    name: "Deuda Técnica Alta",
    condition: "Deuda técnica > 10 días estimados",
    action: "Inyección automática de tareas de refactorización en Sprint",
    severity: "medium"
  },
  // Triggers de Contexto de Negocio (ITIL 4)
  {
    id: "B-001",
    type: "business",
    name: "Ventana de Congelamiento",
    condition: "Ventana de congelamiento (Freeze)",
    action: "Modo Lectura: Deny-All para cambios no críticos",
    severity: "high"
  },
  {
    id: "B-002",
    type: "business",
    name: "Ticket de Emergencia",
    condition: "Ticket de emergencia aprobado",
    action: "Break-glass: variable temporal que salta checks de SRE",
    severity: "critical"
  }
];

export interface MIGIncentive {
  level: number;
  doraCategory: string;
  medal: string;
  medalEmoji: string;
  autonomy: string;
  teamBenefit: string;
}

export const migIncentives: MIGIncentive[] = [
  {
    level: 0,
    doraCategory: "Low",
    medal: "Aprendiz",
    medalEmoji: "🐢",
    autonomy: "Control total: revisión manual de cada cambio",
    teamBenefit: "Plan de capacitación obligatorio en DevSecOps"
  },
  {
    level: 1,
    doraCategory: "Low",
    medal: "Aprendiz",
    medalEmoji: "🐢",
    autonomy: "Control total: revisión manual de cada cambio",
    teamBenefit: "Plan de capacitación obligatorio en DevSecOps"
  },
  {
    level: 2,
    doraCategory: "Medium",
    medal: "Guardián",
    medalEmoji: "🛡️",
    autonomy: "Semiautonomía: automático en Dev/Staging; manual en Prod",
    teamBenefit: "Acceso a herramientas premium de monitoreo"
  },
  {
    level: 3,
    doraCategory: "High",
    medal: "Acelerador",
    medalEmoji: "🚀",
    autonomy: "Vía Rápida Parcial: sin CAB para cambios estándar",
    teamBenefit: "Innovation Friday (4 horas/semana para proyectos libres)"
  },
  {
    level: 4,
    doraCategory: "Elite",
    medal: "Elite Performer",
    medalEmoji: "💎",
    autonomy: "Autonomía Total (Fast-Track): gobierno invisible 24/7",
    teamBenefit: "Presupuesto anual para certificaciones (AZ-400, SRE, etc.)"
  },
  {
    level: 5,
    doraCategory: "Elite",
    medal: "Maestro Adaptativo",
    medalEmoji: "🌌",
    autonomy: "Gobierno Delegado: el equipo crea sus propias reglas PaC",
    teamBenefit: "Participación como conferencistas en eventos de la industria"
  }
];

export interface Pillar {
  id: string;
  name: string;
  framework: string;
  contribution: string;
  icon: string;
}

export const pillars: Pillar[] = [
  {
    id: "governance",
    name: "Gobernanza Adaptativa",
    framework: "Adaptive Governance + COBIT 2019",
    contribution: "Ajusta controles según perfil de riesgo y madurez demostrada. Confianza Verificada.",
    icon: "shield-check"
  },
  {
    id: "value",
    name: "Gestión del Valor",
    framework: "ITIL 4 (SVS)",
    contribution: "Habilitación del cambio sin burocracia. Cambios estándar fluyen sin CAB manual.",
    icon: "workflow"
  },
  {
    id: "reliability",
    name: "Ingeniería de Confiabilidad",
    framework: "DevOps / SRE",
    contribution: "Error Budgets, SLOs/SLIs, automatización, rollback automático.",
    icon: "activity"
  },
  {
    id: "agility",
    name: "Agilidad Operativa",
    framework: "Agile (Scrum/Kanban)",
    contribution: "Cadencia iterativa, feedback loops cortos, historias de seguridad en el Sprint.",
    icon: "zap"
  },
  {
    id: "security",
    name: "Seguridad Intrínseca",
    framework: "DevSecOps / S-SDLC",
    contribution: "Shift-Left Security, SAST/DAST/SCA en pipeline, Policy as Code.",
    icon: "lock"
  },
  {
    id: "measurement",
    name: "Medición de Desempeño",
    framework: "DORA Metrics + CMMI V2.0",
    contribution: "Deployment Frequency, Lead Time, CFR, MTTR como target de madurez Elite.",
    icon: "bar-chart-2"
  }
];

export interface Principle {
  id: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    id: "automation",
    title: "La Automatización es nuestra Auditoría",
    description: "No confiamos en procesos manuales que se olvidan. Confiamos en el código que se ejecuta. Si no está en el Pipeline, no existe."
  },
  {
    id: "quality",
    title: "La Seguridad es un Atributo de Calidad, no una Fase",
    description: "No 'pasamos' a seguridad; construimos seguridad. Un código con vulnerabilidades críticas no es código terminado."
  },
  {
    id: "blame-free",
    title: "El Error es una Oportunidad de Aprendizaje (Blame-Free)",
    description: "Ante un fallo, no buscamos culpables; buscamos el eslabón débil en el sistema para automatizar su resiliencia."
  },
  {
    id: "reliability",
    title: "La Confiabilidad es el Presupuesto de la Innovación",
    description: "Respetamos nuestros Error Budgets. Si el sistema está inestable, nuestra prioridad es el cliente actual antes que el código nuevo."
  },
  {
    id: "autonomy",
    title: "La Autonomía se Gana con Evidencia",
    description: "El camino rápido hacia producción (Fast-Track) está abierto para todos los equipos que demuestren madurez Nivel 4 en su telemetría y pruebas."
  }
];

export interface DORATarget {
  emaiLevel: string;
  doraCategory: string;
  deploymentFrequency: string;
  leadTime: string;
  mttr: string;
  changeFailureRate: string;
}

export const doraTargets: DORATarget[] = [
  {
    emaiLevel: "0-1",
    doraCategory: "Low",
    deploymentFrequency: "1 vez/mes a cada 6 meses",
    leadTime: "> 6 meses",
    mttr: "> 1 semana",
    changeFailureRate: "46-60%"
  },
  {
    emaiLevel: "2",
    doraCategory: "Medium",
    deploymentFrequency: "1 vez/semana a 1 vez/mes",
    leadTime: "1 mes a 6 meses",
    mttr: "< 1 mes",
    changeFailureRate: "16-30%"
  },
  {
    emaiLevel: "3",
    doraCategory: "High",
    deploymentFrequency: "1 vez/día a 1 vez/semana",
    leadTime: "< 1 semana",
    mttr: "< 1 día",
    changeFailureRate: "16-30%"
  },
  {
    emaiLevel: "4-5",
    doraCategory: "Elite",
    deploymentFrequency: "On-demand (múltiples/día)",
    leadTime: "< 1 hora",
    mttr: "< 1 hora",
    changeFailureRate: "0-15%"
  }
];
