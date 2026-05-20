"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { questions, sectorBenchmarks, nationalAverage } from "@/lib/survey-data";
import { calculateFullScore, normalizeScore } from "@/lib/sea-calculator";
import { estimateROIByEMAI } from "@/lib/roi-calculator";
import { emaiLevels, migIncentives, doraTargets } from "@/lib/mayaguez-data";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BarChart2,
  TrendingUp,
  Shield,
  Users,
  Target,
  Zap,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SECTORS = [
  "Logística", "EdTech", "Telecomunicaciones", "Desarrollo de Software",
  "Fintech", "E-commerce", "Banca Digital", "Salud", "Manufactura",
  "Gobierno / Sector Público", "Educación", "Retail", "Otro"
];

const ROLES = [
  "CTO / Director de Tecnología", "CIO / Gerente TI", "CISO / Seguridad",
  "Product Owner / Gerente de Proyecto", "Arquitecto de Software",
  "Desarrollador / Ingeniero", "DevOps / SRE", "QA / Testing",
  "Auditor / Compliance", "Consultor", "Otro"
];

const SIZES = [
  { value: "small", label: "Pequeña (< 50 empleados)" },
  { value: "medium", label: "Mediana (50-500 empleados)" },
  { value: "large", label: "Grande (> 500 empleados)" },
];

const LIKERT_LABELS = ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"];
const DIMENSION_LABELS: Record<string, string> = {
  technical: "Técnica",
  organizational: "Organizacional",
  cultural: "Cultural",
  maturity: "Madurez",
};
const DIMENSION_COLORS: Record<string, string> = {
  technical: "#00D4FF",
  organizational: "#7C3AED",
  cultural: "#F59E0B",
  maturity: "#00C851",
};

const DIMENSION_ORDER = ["technical", "organizational", "cultural", "maturity"];

const emaiColors = [
  "text-gray-400", "text-orange-400", "text-yellow-400",
  "text-blue-400", "text-green-400", "text-purple-400"
];
const emai_bg = [
  "bg-gray-700/20 border-gray-600/30", "bg-orange-700/20 border-orange-600/30",
  "bg-yellow-700/20 border-yellow-600/30", "bg-blue-700/20 border-blue-600/30",
  "bg-green-700/20 border-green-600/30", "bg-purple-700/20 border-purple-600/30"
];

type Step = "info" | "survey-technical" | "survey-organizational" | "survey-cultural" | "survey-maturity" | "results";

interface UserInfo {
  sector: string;
  size: string;
  role: string;
  experience: number;
}

export default function DemoWizard() {
  const [step, setStep] = useState<Step>("info");
  const [userInfo, setUserInfo] = useState<UserInfo>({ sector: "", size: "", role: "", experience: 0 });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [infoErrors, setInfoErrors] = useState<Record<string, string>>({});

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;

  const stepOrder: Step[] = ["info", "survey-technical", "survey-organizational", "survey-cultural", "survey-maturity", "results"];
  const stepIndex = stepOrder.indexOf(step);
  const progressPct = step === "info" ? 5 : step === "results" ? 100 : Math.round((answeredCount / totalQuestions) * 90) + 5;

  const surveyStepDimension: Record<Step, string | null> = {
    "info": null,
    "survey-technical": "technical",
    "survey-organizational": "organizational",
    "survey-cultural": "cultural",
    "survey-maturity": "maturity",
    "results": null,
  };

  const currentDimension = surveyStepDimension[step];
  const currentQuestions = currentDimension ? questions.filter(q => q.dimension === currentDimension) : [];

  const dimensionComplete = (dim: string) =>
    questions.filter(q => q.dimension === dim).every(q => answers[q.id] !== undefined);

  const validateInfo = () => {
    const errors: Record<string, string> = {};
    if (!userInfo.sector) errors.sector = "Requerido";
    if (!userInfo.size) errors.size = "Requerido";
    if (!userInfo.role) errors.role = "Requerido";
    if (!userInfo.experience) errors.experience = "Requerido";
    setInfoErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === "info") {
      if (!validateInfo()) return;
    }
    const idx = stepOrder.indexOf(step);
    if (idx < stepOrder.length - 1) setStep(stepOrder[idx + 1]);
  };

  const handlePrev = () => {
    const idx = stepOrder.indexOf(step);
    if (idx > 0) setStep(stepOrder[idx - 1]);
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const results = useMemo(() => {
    if (answeredCount < totalQuestions) return null;
    const dimensionRawScores = {
      technical: 0, organizational: 0, cultural: 0, maturity: 0,
    };
    const dimensionCounts = { technical: 0, organizational: 0, cultural: 0, maturity: 0 };
    questions.forEach(q => {
      if (answers[q.id]) {
        dimensionRawScores[q.dimension] += answers[q.id];
        dimensionCounts[q.dimension]++;
      }
    });
    const dimensionScores = {
      technical: dimensionCounts.technical > 0 ? dimensionRawScores.technical / dimensionCounts.technical : 0,
      organizational: dimensionCounts.organizational > 0 ? dimensionRawScores.organizational / dimensionCounts.organizational : 0,
      cultural: dimensionCounts.cultural > 0 ? dimensionRawScores.cultural / dimensionCounts.cultural : 0,
      maturity: dimensionCounts.maturity > 0 ? dimensionRawScores.maturity / dimensionCounts.maturity : 0,
    };
    const normalizedScores = {
      technical: normalizeScore(dimensionScores.technical),
      organizational: normalizeScore(dimensionScores.organizational),
      cultural: normalizeScore(dimensionScores.cultural),
      maturity: normalizeScore(dimensionScores.maturity),
    };
    const full = calculateFullScore(normalizedScores);
    const migLevel = migIncentives.find(m => m.level === full.emaiLevel) || migIncentives[0];
    const sectorBenchmark = sectorBenchmarks.find(b => b.sector === userInfo.sector);
    const roi = estimateROIByEMAI(full.emaiLevel);

    const gaps: string[] = [];
    if (dimensionScores.technical < 3.5) gaps.push("Técnica: Implementar CI/CD y pruebas de seguridad automatizadas");
    if (dimensionScores.organizational < 3.5) gaps.push("Organizacional: Formalizar estrategia DevSecOps y reducir burocracia en CAB");
    if (dimensionScores.cultural < 3.5) gaps.push("Cultural: Desarrollar cultura de seguridad compartida (modelo Westrum)");
    if (dimensionScores.maturity < 3.5) gaps.push("Madurez: Implementar métricas DORA y toma de decisiones data-driven");

    return { dimensionScores, normalizedScores, full, migLevel, sectorBenchmark, roi, gaps };
  }, [answers, answeredCount, totalQuestions, userInfo.sector]);

  const reset = () => {
    setStep("info");
    setAnswers({});
    setUserInfo({ sector: "", size: "", role: "", experience: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-mayaguez-text-secondary">
            {step === "info" ? "Información General" :
             step === "results" ? "Resultados" :
             `Dimensión ${DIMENSION_LABELS[currentDimension || ""]}`}
          </span>
          <span className="text-sm text-mayaguez-accent font-medium">{progressPct}%</span>
        </div>
        <div className="h-2 bg-mayaguez-secondary/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-mayaguez-accent to-mayaguez-success transition-all duration-500 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {stepOrder.filter(s => s !== "results").map((s, i) => {
            const label = s === "info" ? "Info" : DIMENSION_LABELS[surveyStepDimension[s] || ""] || s;
            const done = stepOrder.indexOf(s) < stepIndex;
            const active = s === step;
            return (
              <span key={s} className={`text-xs ${done ? "text-mayaguez-success" : active ? "text-mayaguez-accent" : "text-mayaguez-text-muted"}`}>
                {done ? "✓ " : ""}{label}
              </span>
            );
          })}
          <span className={`text-xs ${step === "results" ? "text-mayaguez-accent" : "text-mayaguez-text-muted"}`}>Resultados</span>
        </div>
      </div>

      {/* STEP: Info */}
      {step === "info" && (
        <Card variant="bordered" className="border-mayaguez-accent/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-mayaguez-text-primary mb-2">Información General</h2>
            <p className="text-mayaguez-text-secondary mb-8">
              Estos datos nos permiten comparar tus resultados con el benchmark de tu sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                  Sector de la organización *
                </label>
                <select
                  className="w-full bg-mayaguez-primary border border-mayaguez-accent/30 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent"
                  value={userInfo.sector}
                  onChange={e => setUserInfo(p => ({ ...p, sector: e.target.value }))}
                >
                  <option value="">Selecciona tu sector</option>
                  {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {infoErrors.sector && <p className="text-xs text-mayaguez-danger mt-1">{infoErrors.sector}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                  Tamaño de la organización *
                </label>
                <div className="space-y-2">
                  {SIZES.map(size => (
                    <label key={size.value} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${userInfo.size === size.value ? "border-mayaguez-accent bg-mayaguez-accent" : "border-mayaguez-accent/40 group-hover:border-mayaguez-accent"}`}>
                        {userInfo.size === size.value && <div className="w-2 h-2 rounded-full bg-mayaguez-primary" />}
                      </div>
                      <span className="text-sm text-mayaguez-text-secondary group-hover:text-mayaguez-text-primary transition-colors">
                        {size.label}
                      </span>
                      <input type="radio" className="hidden" value={size.value} checked={userInfo.size === size.value} onChange={() => setUserInfo(p => ({ ...p, size: size.value }))} />
                    </label>
                  ))}
                </div>
                {infoErrors.size && <p className="text-xs text-mayaguez-danger mt-1">{infoErrors.size}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                  Tu rol en la organización *
                </label>
                <select
                  className="w-full bg-mayaguez-primary border border-mayaguez-accent/30 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent"
                  value={userInfo.role}
                  onChange={e => setUserInfo(p => ({ ...p, role: e.target.value }))}
                >
                  <option value="">Selecciona tu rol</option>
                  {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                {infoErrors.role && <p className="text-xs text-mayaguez-danger mt-1">{infoErrors.role}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                  Años de experiencia en TI *
                </label>
                <select
                  className="w-full bg-mayaguez-primary border border-mayaguez-accent/30 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent"
                  value={userInfo.experience}
                  onChange={e => setUserInfo(p => ({ ...p, experience: parseInt(e.target.value) }))}
                >
                  <option value={0}>Selecciona</option>
                  <option value={1}>Menos de 2 años</option>
                  <option value={2}>2-5 años</option>
                  <option value={3}>5-10 años</option>
                  <option value={4}>10-20 años</option>
                  <option value={5}>Más de 20 años</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button variant="primary" size="lg" onClick={handleNext}>
                Comenzar Evaluación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* STEP: Survey */}
      {currentDimension && currentQuestions.length > 0 && (
        <Card variant="bordered" className="border-mayaguez-accent/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: DIMENSION_COLORS[currentDimension] + "20", border: `2px solid ${DIMENSION_COLORS[currentDimension]}40` }}>
                {currentDimension === "technical" && <Shield className="h-4 w-4" style={{ color: DIMENSION_COLORS[currentDimension] }} />}
                {currentDimension === "organizational" && <Users className="h-4 w-4" style={{ color: DIMENSION_COLORS[currentDimension] }} />}
                {currentDimension === "cultural" && <Target className="h-4 w-4" style={{ color: DIMENSION_COLORS[currentDimension] }} />}
                {currentDimension === "maturity" && <BarChart2 className="h-4 w-4" style={{ color: DIMENSION_COLORS[currentDimension] }} />}
              </div>
              <h2 className="text-2xl font-bold text-mayaguez-text-primary">
                Dimensión {DIMENSION_LABELS[currentDimension]}
              </h2>
            </div>
            <p className="text-mayaguez-text-secondary mb-8 text-sm">
              Evalúa cada afirmación con la escala del 1 (Nunca) al 5 (Siempre) según la realidad actual de tu organización.
            </p>

            {/* Likert header */}
            <div className="hidden md:grid grid-cols-6 gap-2 mb-4 px-0">
              <div />
              {LIKERT_LABELS.map((l, i) => (
                <div key={l} className="text-center text-xs text-mayaguez-text-muted">
                  <div className="font-bold text-mayaguez-text-secondary">{i + 1}</div>
                  <div>{l}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {currentQuestions.map((q, idx) => (
                <div key={q.id} className={`rounded-lg p-4 border ${answers[q.id] ? "border-mayaguez-accent/20 bg-mayaguez-accent/5" : "border-mayaguez-accent/10 bg-mayaguez-secondary/20"} transition-all`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-mono text-mayaguez-accent flex-shrink-0 mt-0.5">{q.id}</span>
                    <div>
                      <p className="text-sm text-mayaguez-text-primary">{q.text}</p>
                      <span className="text-xs text-mayaguez-text-muted">{q.category}</span>
                    </div>
                    {answers[q.id] && <CheckCircle2 className="h-4 w-4 text-mayaguez-success flex-shrink-0 ml-auto mt-0.5" />}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map(val => (
                      <button
                        key={val}
                        onClick={() => handleAnswer(q.id, val)}
                        className={`flex-1 min-w-[40px] py-2 rounded-md text-sm font-medium transition-all border ${
                          answers[q.id] === val
                            ? "border-mayaguez-accent bg-mayaguez-accent text-mayaguez-primary"
                            : "border-mayaguez-accent/20 text-mayaguez-text-muted hover:border-mayaguez-accent/50 hover:text-mayaguez-text-secondary"
                        }`}
                      >
                        <span className="block text-center">{val}</span>
                        <span className="block text-center text-[10px] opacity-70 hidden md:block">{LIKERT_LABELS[val - 1]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Button variant="ghost" size="md" onClick={handlePrev}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
              <div className="text-sm text-mayaguez-text-muted">
                {currentQuestions.filter(q => answers[q.id]).length}/{currentQuestions.length} respondidas
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={handleNext}
                disabled={!dimensionComplete(currentDimension)}
              >
                {step === "survey-maturity" ? "Ver Resultados" : "Siguiente Dimensión"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* STEP: Results */}
      {step === "results" && results && (
        <div className="space-y-8">
          {/* Header result */}
          <Card variant="bordered" className={`border ${emai_bg[results.full.emaiLevel].split(" ")[1]} ${emai_bg[results.full.emaiLevel].split(" ")[0]}`}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-mayaguez-text-muted mb-1">Tu organización — {userInfo.sector}</p>
                  <h2 className="text-3xl font-bold text-mayaguez-text-primary mb-2">
                    Nivel EMAI {results.full.emaiLevel}: {emaiLevels[results.full.emaiLevel]?.name}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default" className={`text-sm px-3 py-1 ${emaiColors[results.full.emaiLevel]} border-current`}>
                      {results.migLevel.medalEmoji} {results.migLevel.medal}
                    </Badge>
                    <Badge variant="info" className="text-sm px-3 py-1">
                      DORA: {results.full.doraCategory}
                    </Badge>
                    <Badge variant="success" className="text-sm px-3 py-1">
                      EO: {results.full.sea.total.toFixed(1)}%
                    </Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-6xl font-bold ${emaiColors[results.full.emaiLevel]}`}>
                    {results.full.sea.total.toFixed(0)}
                    <span className="text-2xl">%</span>
                  </div>
                  <p className="text-xs text-mayaguez-text-muted mt-1">Score SEA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dimension scores + Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="bordered" className="border-mayaguez-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-mayaguez-text-primary mb-6">Score por Dimensión</h3>
                <div className="space-y-4">
                  {DIMENSION_ORDER.map(dim => {
                    const score = results.dimensionScores[dim as keyof typeof results.dimensionScores];
                    const pct = (score / 5) * 100;
                    const color = DIMENSION_COLORS[dim];
                    return (
                      <div key={dim}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-mayaguez-text-secondary">{DIMENSION_LABELS[dim]}</span>
                          <span className="font-semibold" style={{ color }}>{score.toFixed(2)}/5.0</span>
                        </div>
                        <div className="h-2 bg-mayaguez-secondary/50 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
                        </div>
                        <div className="flex justify-between text-xs text-mayaguez-text-muted mt-0.5">
                          <span>Promedio nacional: {nationalAverage[dim as keyof typeof nationalAverage]}</span>
                          {results.sectorBenchmark && (
                            <span>Tu sector: {results.sectorBenchmark[dim as keyof typeof results.sectorBenchmark]}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-mayaguez-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-mayaguez-text-primary mb-6">Radar de Madurez</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <RadarChart data={[
                    ...DIMENSION_ORDER.map(dim => ({
                      dimension: DIMENSION_LABELS[dim],
                      Tu: parseFloat(results.dimensionScores[dim as keyof typeof results.dimensionScores].toFixed(2)),
                      Nacional: nationalAverage[dim as keyof typeof nationalAverage],
                    }))
                  ]}>
                    <PolarGrid stroke="#1A2332" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: "#B8C5D6", fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 5]} tick={{ fill: "#6B7280", fontSize: 10 }} />
                    <Radar name="Tu Organización" dataKey="Tu" stroke="#00D4FF" fill="#00D4FF" fillOpacity={0.3} />
                    <Radar name="Promedio Nacional" dataKey="Nacional" stroke="#FFB300" fill="#FFB300" fillOpacity={0.1} />
                    <Legend wrapperStyle={{ color: "#B8C5D6", fontSize: "12px" }} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sector comparison */}
          {results.sectorBenchmark && (
            <Card variant="bordered" className="border-mayaguez-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-mayaguez-text-primary mb-6">
                  Comparativa con tu Sector ({userInfo.sector})
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={DIMENSION_ORDER.map(dim => ({
                    name: DIMENSION_LABELS[dim].substring(0, 3) + ".",
                    Tu: parseFloat(results.dimensionScores[dim as keyof typeof results.dimensionScores].toFixed(2)),
                    Sector: results.sectorBenchmark![dim as keyof typeof results.sectorBenchmark] as number,
                    Nacional: nationalAverage[dim as keyof typeof nationalAverage],
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1A2332" />
                    <XAxis dataKey="name" tick={{ fill: "#B8C5D6", fontSize: 12 }} />
                    <YAxis domain={[0, 5]} tick={{ fill: "#6B7280", fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: "#1A2332", border: "1px solid #00D4FF40", borderRadius: "8px", color: "#fff" }} />
                    <Legend wrapperStyle={{ color: "#B8C5D6", fontSize: "12px" }} />
                    <Bar dataKey="Tu" name="Tu Organización" fill="#00D4FF" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="Sector" name="Promedio Sector" fill="#7C3AED" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="Nacional" name="Promedio Nacional" fill="#FFB300" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* EMAI Level detail */}
          <Card variant="bordered" className="border-mayaguez-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-mayaguez-text-primary mb-4">
                Nivel {results.full.emaiLevel} — {emaiLevels[results.full.emaiLevel]?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-2">Estado Actual</p>
                  <p className="text-sm text-mayaguez-text-secondary">{emaiLevels[results.full.emaiLevel]?.description}</p>
                </div>
                <div>
                  <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-2">DevSecOps / SRE</p>
                  <p className="text-sm text-mayaguez-text-secondary">{emaiLevels[results.full.emaiLevel]?.devsecOps}</p>
                </div>
                <div>
                  <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-2">Autonomía (MIG)</p>
                  <p className="text-sm text-mayaguez-text-secondary">{results.migLevel.autonomy}</p>
                </div>
                <div>
                  <p className="text-xs text-mayaguez-text-muted uppercase tracking-wider mb-2">Beneficio del Equipo</p>
                  <p className="text-sm text-mayaguez-text-secondary">{results.migLevel.teamBenefit}</p>
                </div>
              </div>
              {doraTargets.find(d => d.doraCategory === results.full.doraCategory) && (
                <div className="mt-6 p-4 rounded-lg bg-mayaguez-primary/60 border border-mayaguez-accent/10">
                  <p className="text-xs text-mayaguez-accent uppercase tracking-wider mb-3">Objetivos DORA para tu Nivel ({results.full.doraCategory})</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(() => {
                      const target = doraTargets.find(d => d.doraCategory === results.full.doraCategory)!;
                      return [
                        { label: "Frecuencia", value: target.deploymentFrequency },
                        { label: "Lead Time", value: target.leadTime },
                        { label: "MTTR", value: target.mttr },
                        { label: "CFR", value: target.changeFailureRate },
                      ].map(item => (
                        <div key={item.label}>
                          <p className="text-xs text-mayaguez-text-muted mb-1">{item.label}</p>
                          <p className="text-sm font-medium text-mayaguez-accent">{item.value}</p>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Gaps + Recommendations */}
          {results.gaps.length > 0 && (
            <Card variant="bordered" className="border-mayaguez-warning/30 bg-mayaguez-warning/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-mayaguez-warning" />
                  <h3 className="text-lg font-bold text-mayaguez-text-primary">Brechas Identificadas</h3>
                </div>
                <div className="space-y-3">
                  {results.gaps.map((gap, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-mayaguez-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-mayaguez-warning/20 flex items-center justify-center text-xs font-bold text-mayaguez-warning flex-shrink-0">
                        {i + 1}
                      </span>
                      {gap}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* ROI Estimate */}
          <Card variant="bordered" className="border-mayaguez-success/30 bg-mayaguez-success/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-mayaguez-success" />
                <h3 className="text-lg font-bold text-mayaguez-text-primary">ROI Potencial Estimado</h3>
                <Badge variant="success" className="text-xs">Basado en datos del piloto Q1 2026</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Reducción Lead Time", value: `${results.roi.leadTimeReduction}%`, icon: Zap },
                  { label: "Aumento Frecuencia", value: `+${results.roi.deploymentIncrease}%`, icon: TrendingUp },
                  { label: "Reducción MTTR", value: `${results.roi.mttrReduction}%`, icon: Shield },
                  { label: "Ahorro Potencial Anual", value: `~$${(results.roi.potentialSavings / 1000).toFixed(0)}K USD`, icon: BarChart2 },
                ].map(item => (
                  <div key={item.label} className="text-center p-4 rounded-lg bg-mayaguez-primary/60">
                    <item.icon className="h-6 w-6 text-mayaguez-success mx-auto mb-2" />
                    <p className="text-xl font-bold text-mayaguez-success">{item.value}</p>
                    <p className="text-xs text-mayaguez-text-muted mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Roadmap CTA */}
          <Card variant="elevated" className="border border-mayaguez-accent/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-mayaguez-text-primary mb-3">
                Tu Próximo Paso: Roadmap de 90 Días
              </h3>
              <p className="text-mayaguez-text-secondary mb-6">
                Con nivel EMAI {results.full.emaiLevel} ({emaiLevels[results.full.emaiLevel]?.name}), tu organización puede
                escalar a Nivel {Math.min(results.full.emaiLevel + 2, 5)} en 3 meses siguiendo el roadmap del Modelo Mayagüez.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/implementacion">
                  <Button variant="primary" size="lg">
                    Ver Roadmap de Implementación
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="/docs">
                  <Button variant="outline" size="lg">
                    Documentación Completa
                  </Button>
                </a>
              </div>
              <button onClick={reset} className="mt-6 text-sm text-mayaguez-text-muted hover:text-mayaguez-accent transition-colors flex items-center gap-2 mx-auto">
                <RefreshCcw className="h-4 w-4" />
                Reiniciar evaluación
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
