// Calculadora de ROI DORA del Modelo Mayagüez

export interface ROICalculatorInput {
  currentLeadTime: number; // días
  targetLeadTime: number; // horas
  currentDeploymentFrequency: number; // despliegues/mes
  targetDeploymentFrequency: number; // despliegues/semana
  currentMTTR: number; // horas
  targetMTTR: number; // minutos
  currentCFR: number; // porcentaje
  targetCFR: number; // porcentaje
  hourlyCost: number; // costo por hora de ingeniería
  incidentCostPerHour: number; // costo por hora de caída
  monthlyIncidents: number; // incidentes promedio por mes
  implementationCost: number; // costo de implementación del modelo
}

export interface ROICalculation {
  leadTimeSavings: number;
  deploymentFrequencyIncrease: number;
  mttrSavings: number;
  cfrImprovement: number;
  productivityGain: number;
  availabilityGain: number;
  totalROI: number;
  annualSavings: number;
  paybackPeriod: number; // meses
}

/**
 * Calcula el ahorro en Lead Time
 * Ahorro_LT = (LT_Actual - LT_Target) × Frecuencia × Costo_Hora
 */
export function calculateLeadTimeSavings(
  currentLeadTime: number,
  targetLeadTime: number,
  deploymentFrequency: number,
  hourlyCost: number
): number {
  const leadTimeReduction = currentLeadTime - (targetLeadTime / 24); // convertir horas a días
  return leadTimeReduction * deploymentFrequency * hourlyCost * 24; // anualizado
}

/**
 * Calcula el riesgo evitado por mejora en MTTR
 * Riesgo_Evitado = (MTTR_Actual - MTTR_Target) × Incidentes × Costo_Caída/Hora
 */
export function calculateRiskAvoidance(
  currentMTTR: number,
  targetMTTR: number,
  monthlyIncidents: number,
  incidentCostPerHour: number
): number {
  const mttrReduction = currentMTTR - (targetMTTR / 60); // convertir minutos a horas
  return mttrReduction * monthlyIncidents * incidentCostPerHour * 12; // anualizado
}

/**
 * Calcula el ROI total del Modelo Mayagüez
 * ROI_Total = ΔProductividad + ΔDisponibilidad - Costo_Implementación
 */
export function calculateROI(input: ROICalculatorInput): ROICalculation {
  // Convertir frecuencias a anual
  const annualCurrentDeployments = input.currentDeploymentFrequency * 12;
  const annualTargetDeployments = input.targetDeploymentFrequency * 52;

  // Ahorro en Lead Time
  const leadTimeSavings = calculateLeadTimeSavings(
    input.currentLeadTime,
    input.targetLeadTime,
    annualCurrentDeployments,
    input.hourlyCost
  );

  // Riesgo evitado por MTTR
  const riskAvoidance = calculateRiskAvoidance(
    input.currentMTTR,
    input.targetMTTR,
    input.monthlyIncidents,
    input.incidentCostPerHour
  );

  // Mejora en CFR (reducción de incidentes fallidos)
  const cfrImprovement = (input.currentCFR - input.targetCFR) / 100;
  const cfrSavings = cfrImprovement * annualCurrentDeployments * input.hourlyCost * 24; // estimado

  // Ganancia total
  const productivityGain = leadTimeSavings;
  const availabilityGain = riskAvoidance + cfrSavings;
  const totalGain = productivityGain + availabilityGain;
  const totalROI = totalGain - input.implementationCost;

  // Período de recuperación
  const paybackPeriod = input.implementationCost > 0 
    ? (input.implementationCost / (totalGain / 12)) 
    : 0;

  return {
    leadTimeSavings,
    deploymentFrequencyIncrease: ((annualTargetDeployments - annualCurrentDeployments) / annualCurrentDeployments) * 100,
    mttrSavings: riskAvoidance,
    cfrImprovement: cfrImprovement * 100,
    productivityGain,
    availabilityGain,
    totalROI,
    annualSavings: totalGain,
    paybackPeriod
  };
}

/**
 * Calcula el ROI usando los datos del piloto Q1 2026 del Modelo Mayagüez
 */
export function getPilotROI(): ROICalculation {
  const pilotInput: ROICalculatorInput = {
    currentLeadTime: 18, // días
    targetLeadTime: 55, // minutos
    currentDeploymentFrequency: 1.2, // despliegues/mes
    targetDeploymentFrequency: 14, // despliegues/semana
    currentMTTR: 14, // horas
    targetMTTR: 22, // minutos
    currentCFR: 38, // porcentaje
    targetCFR: 7, // porcentaje
    hourlyCost: 50, // USD/hora (estimado)
    incidentCostPerHour: 1000, // USD/hora (estimado)
    monthlyIncidents: 5, // incidentes promedio
    implementationCost: 50000 // USD (estimado)
  };

  return calculateROI(pilotInput);
}

/**
 * Estima el ROI potencial basado en el nivel EMAI actual
 */
export function estimateROIByEMAI(currentEMAI: number): {
  potentialSavings: number;
  leadTimeReduction: number;
  deploymentIncrease: number;
  mttrReduction: number;
  cfrReduction: number;
} {
  // Estimaciones basadas en datos del piloto
  const improvements = {
    0: { leadTime: 95, deployment: 800, mttr: 90, cfr: 80 },
    1: { leadTime: 85, deployment: 600, mttr: 80, cfr: 70 },
    2: { leadTime: 70, deployment: 400, mttr: 65, cfr: 55 },
    3: { leadTime: 50, deployment: 200, mttr: 45, cfr: 35 },
    4: { leadTime: 25, deployment: 80, mttr: 20, cfr: 15 },
    5: { leadTime: 10, deployment: 30, mttr: 8, cfr: 5 }
  };

  const improvement = improvements[currentEMAI as keyof typeof improvements] || improvements[0];
  
  // Estimación de ahorro anual (USD) para una organización mediana
  const baseSavings = 100000; // USD base
  const potentialSavings = baseSavings * (improvement.leadTime / 100);

  return {
    potentialSavings,
    leadTimeReduction: improvement.leadTime,
    deploymentIncrease: improvement.deployment,
    mttrReduction: improvement.mttr,
    cfrReduction: improvement.cfr
  };
}
