// Calculadora del Scoring de Eficiencia Adaptativa (SEA) del Modelo Mayagüez

export interface SEAScore {
  maturity: number; // M - Madurez (30%)
  coverage: number; // C - Cobertura (20%)
  appropriation: number; // A - Apropiación (20%)
  evidence: number; // E - Evidencia (15%)
  governance: number; // G - Gobernanza Sin Fricción (15%)
  total: number; // EO% - Eficiencia Operativa total
}

export interface DimensionScores {
  technical: number;
  organizational: number;
  cultural: number;
  maturity: number;
}

/**
 * Calcula el Scoring de Eficiencia Adaptativa (SEA)
 * Fórmula: EO (%) = [(M × 0.30) + (C × 0.20) + (A × 0.20) + (E × 0.15) + (G × 0.15)] × 20
 * 
 * @param maturity - Madurez (escala 0-5, alineada a COBIT 2019 y CMMI)
 * @param coverage - Cobertura (alcance de instrumentación sobre activos críticos)
 * @param appropriation - Apropiación (internalización cultural, Cultura Westrum)
 * @param evidence - Evidencia (registros inmutables en JSON, sin documentación manual)
 * @param governance - Gobernanza Sin Fricción (reducción de intervención manual en CAB y deuda técnica)
 * @returns Score SEA total (0-100)
 */
export function calculateSEA(
  maturity: number,
  coverage: number,
  appropriation: number,
  evidence: number,
  governance: number
): SEAScore {
  const weightedSum =
    maturity * 0.30 +
    coverage * 0.20 +
    appropriation * 0.20 +
    evidence * 0.15 +
    governance * 0.15;

  const total = weightedSum * 20;

  return {
    maturity,
    coverage,
    appropriation,
    evidence,
    governance,
    total: Math.min(100, Math.max(0, total))
  };
}

/**
 * Convierte los scores por dimensión del cuestionario a los parámetros del SEA
 * 
 * @param dimensionScores - Scores por dimensión (escala 1-5)
 * @returns Parámetros para cálculo SEA
 */
export function dimensionScoresToSEAParams(dimensionScores: DimensionScores): {
  maturity: number;
  coverage: number;
  appropriation: number;
  evidence: number;
  governance: number;
} {
  // Mapeo de dimensiones del cuestionario a parámetros SEA
  return {
    maturity: dimensionScores.maturity, // Directo
    coverage: dimensionScores.technical * 0.6 + dimensionScores.maturity * 0.4, // Técnica + Madurez
    appropriation: dimensionScores.cultural, // Directo
    evidence: dimensionScores.technical * 0.5 + dimensionScores.maturity * 0.5, // Técnica + Madurez
    governance: dimensionScores.organizational * 0.7 + dimensionScores.maturity * 0.3 // Organizacional + Madurez
  };
}

/**
 * Calcula el nivel EMAI basado en el score SEA total
 * 
 * @param seaScore - Score SEA total (0-100)
 * @returns Nivel EMAI (0-5)
 */
export function seaToEMAI(seaScore: number): number {
  if (seaScore < 20) return 0;
  if (seaScore < 40) return 1;
  if (seaScore < 55) return 2;
  if (seaScore < 70) return 3;
  if (seaScore < 85) return 4;
  return 5;
}

/**
 * Calcula la categoría DORA basada en el nivel EMAI
 * 
 * @param emaiLevel - Nivel EMAI (0-5)
 * @returns Categoría DORA (Low, Medium, High, Elite)
 */
export function emaiToDORACategory(emaiLevel: number): string {
  if (emaiLevel <= 1) return "Low";
  if (emaiLevel === 2) return "Medium";
  if (emaiLevel === 3) return "High";
  return "Elite";
}

/**
 * Calcula el score completo desde las respuestas del cuestionario
 * 
 * @param dimensionScores - Scores por dimensión del cuestionario (escala 1-5)
 * @returns Objeto con todos los scores calculados
 */
export function calculateFullScore(dimensionScores: DimensionScores): {
  sea: SEAScore;
  emaiLevel: number;
  doraCategory: string;
  dimensionScores: DimensionScores;
} {
  const seaParams = dimensionScoresToSEAParams(dimensionScores);
  const sea = calculateSEA(
    seaParams.maturity,
    seaParams.coverage,
    seaParams.appropriation,
    seaParams.evidence,
    seaParams.governance
  );
  const emaiLevel = seaToEMAI(sea.total);
  const doraCategory = emaiToDORACategory(emaiLevel);

  return {
    sea,
    emaiLevel,
    doraCategory,
    dimensionScores
  };
}

/**
 * Normaliza un score de escala 1-5 a escala 0-5 para cálculos SEA
 * 
 * @param score - Score en escala 1-5
 * @returns Score normalizado en escala 0-5
 */
export function normalizeScore(score: number): number {
  return (score - 1) / 4 * 5;
}

/**
 * Convierte un score normalizado (0-5) de vuelta a escala 1-5
 * 
 * @param normalizedScore - Score normalizado en escala 0-5
 * @returns Score en escala 1-5
 */
export function denormalizeScore(normalizedScore: number): number {
  return (normalizedScore / 5) * 4 + 1;
}
