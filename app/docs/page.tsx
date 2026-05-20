import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Shield, BarChart2, Zap, GitMerge, Settings,
  Award, FileText, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentación | Modelo Mayagüez DevSecOps",
  description: "Documentación técnica completa del Modelo Mayagüez: EMAI, Triggers, SEA, DORA, MIG, implementación y referencia.",
};

const sections = [
  {
    icon: BookOpen,
    title: "Introducción",
    description: "El problema que resuelve Mayagüez, su justificación y el marco teórico que lo sustenta.",
    color: "text-mayaguez-accent",
    bg: "bg-mayaguez-accent/10 border-mayaguez-accent/30",
    links: [
      { label: "El Problema", href: "/docs/introduccion/problema" },
      { label: "Justificación", href: "/docs/introduccion/justificacion" },
      { label: "Marco Teórico", href: "/docs/introduccion/marco-teorico" },
    ],
  },
  {
    icon: Settings,
    title: "Conceptos Clave",
    description: "Fundamentos de DevSecOps, Agile, SRE, ITIL 4, COBIT, CMMI y métricas DORA.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    links: [
      { label: "SDLC y S-SDLC", href: "/docs/conceptos/sdlc" },
      { label: "DevSecOps", href: "/docs/conceptos/devsecops" },
      { label: "DORA Metrics", href: "/docs/conceptos/dora" },
    ],
  },
  {
    icon: GitMerge,
    title: "Arquitectura del Modelo",
    description: "El Ciclo de Confianza (Closed-Loop), las tres capas de control y su interacción.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    links: [
      { label: "Visión General", href: "/docs/modelo/arquitectura" },
      { label: "Ciclo de Confianza", href: "/docs/modelo/ciclo-confianza" },
      { label: "Capas de Control", href: "/docs/modelo/capas-control" },
    ],
  },
  {
    icon: BarChart2,
    title: "Escala EMAI",
    description: "Los seis niveles de madurez (0-5), la Matriz de Espectro Explícito y la Ficha FAMA.",
    color: "text-mayaguez-success",
    bg: "bg-mayaguez-success/10 border-mayaguez-success/30",
    links: [
      { label: "Escala 0-5", href: "/docs/emai/escala" },
      { label: "Matriz de Espectro (MEE)", href: "/docs/emai/matriz-espectro" },
      { label: "Ficha FAMA", href: "/docs/emai/ficha-fama" },
    ],
  },
  {
    icon: Shield,
    title: "Triggers y Gates",
    description: "Los cuatro tipos de triggers de adaptación y el algoritmo de decisión de gates.",
    color: "text-mayaguez-danger",
    bg: "bg-mayaguez-danger/10 border-mayaguez-danger/30",
    links: [
      { label: "Triggers Técnicos", href: "/docs/triggers/tecnicos" },
      { label: "Triggers de Seguridad", href: "/docs/triggers/seguridad" },
      { label: "Algoritmo de Gates", href: "/docs/triggers/algoritmo-gates" },
    ],
  },
  {
    icon: Zap,
    title: "Scoring y Métricas",
    description: "Fórmula SEA, target DORA por nivel EMAI, calculadora ROI y MIG.",
    color: "text-mayaguez-warning",
    bg: "bg-mayaguez-warning/10 border-mayaguez-warning/30",
    links: [
      { label: "Fórmula SEA", href: "/docs/scoring/sea" },
      { label: "Target DORA", href: "/docs/scoring/dora-target" },
      { label: "Calculadora ROI", href: "/docs/scoring/roi" },
    ],
  },
  {
    icon: Award,
    title: "Implementación",
    description: "Roadmap de 3 meses, roles, responsabilidades y anti-patrones a evitar.",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    links: [
      { label: "Mes 1 — Cimiento", href: "/docs/implementacion/mes1" },
      { label: "Mes 2 — Automatización", href: "/docs/implementacion/mes2" },
      { label: "Mes 3 — Autonomía", href: "/docs/implementacion/mes3" },
    ],
  },
  {
    icon: FileText,
    title: "Referencia",
    description: "Glosario oficial, cuestionario de 40 preguntas y referencias académicas APA 7.",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
    links: [
      { label: "Glosario", href: "/docs/glosario" },
      { label: "Cuestionario (40P)", href: "/docs/cuestionario" },
      { label: "Referencias", href: "/docs/referencias" },
    ],
  },
];

export default function DocsIndexPage() {
  return (
    <div>
      <div className="mb-10">
        <Badge variant="info" className="mb-4">Documentación Técnica</Badge>
        <h1 className="text-4xl font-bold text-mayaguez-text-primary mb-4">
          Documentación del Modelo Mayagüez
        </h1>
        <p className="text-mayaguez-text-secondary text-lg max-w-2xl">
          Referencia técnica completa del Modelo de Adopción DevSecOps Mayagüez.
          Desde los fundamentos teóricos hasta la implementación práctica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title} variant="bordered" className={`border ${section.bg.split(" ")[1]} hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${section.bg}`}>
                    <Icon className={`h-5 w-5 ${section.color}`} />
                  </div>
                  <div>
                    <h2 className="font-bold text-mayaguez-text-primary">{section.title}</h2>
                    <p className="text-sm text-mayaguez-text-secondary mt-1">{section.description}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-14">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-sm flex items-center gap-1 ${section.color} hover:opacity-80 transition-opacity`}
                      >
                        <ArrowRight className="h-3 w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 p-6 rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-mayaguez-text-primary mb-1">¿Prefieres evaluar primero?</h3>
            <p className="text-sm text-mayaguez-text-secondary">
              Realiza la evaluación de 40 preguntas y obtén tu nivel EMAI antes de leer la documentación.
            </p>
          </div>
          <Link href="/demo">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-mayaguez-accent text-mayaguez-primary font-semibold text-sm hover:bg-mayaguez-accentDark transition-colors flex-shrink-0">
              Ir al Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
