"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const docsSidebar = [
  {
    title: "Introducción",
    items: [
      { label: "El Problema", href: "/docs/introduccion/problema" },
      { label: "Justificación", href: "/docs/introduccion/justificacion" },
      { label: "Marco Teórico", href: "/docs/introduccion/marco-teorico" },
    ],
  },
  {
    title: "Conceptos Clave",
    items: [
      { label: "SDLC y S-SDLC", href: "/docs/conceptos/sdlc" },
      { label: "DevSecOps", href: "/docs/conceptos/devsecops" },
      { label: "Agile", href: "/docs/conceptos/agile" },
      { label: "SRE", href: "/docs/conceptos/sre" },
      { label: "ITIL 4", href: "/docs/conceptos/itil4" },
      { label: "COBIT y CMMI", href: "/docs/conceptos/cobit-cmmi" },
      { label: "DORA Metrics", href: "/docs/conceptos/dora" },
      { label: "Gobernanza Adaptativa", href: "/docs/conceptos/gobernanza" },
    ],
  },
  {
    title: "Arquitectura del Modelo",
    items: [
      { label: "Visión General", href: "/docs/modelo/arquitectura" },
      { label: "Ciclo de Confianza", href: "/docs/modelo/ciclo-confianza" },
      { label: "Capas de Control", href: "/docs/modelo/capas-control" },
    ],
  },
  {
    title: "Escala EMAI",
    items: [
      { label: "Escala 0-5", href: "/docs/emai/escala" },
      { label: "Matriz de Espectro (MEE)", href: "/docs/emai/matriz-espectro" },
      { label: "Ficha FAMA", href: "/docs/emai/ficha-fama" },
    ],
  },
  {
    title: "Triggers y Gates",
    items: [
      { label: "Triggers Técnicos", href: "/docs/triggers/tecnicos" },
      { label: "Triggers de Seguridad", href: "/docs/triggers/seguridad" },
      { label: "Triggers de Madurez", href: "/docs/triggers/madurez" },
      { label: "Triggers de Negocio", href: "/docs/triggers/negocio" },
      { label: "Algoritmo de Gates", href: "/docs/triggers/algoritmo-gates" },
    ],
  },
  {
    title: "Scoring y Métricas",
    items: [
      { label: "Fórmula SEA", href: "/docs/scoring/sea" },
      { label: "Target DORA", href: "/docs/scoring/dora-target" },
      { label: "Calculadora ROI", href: "/docs/scoring/roi" },
      { label: "Incentivos MIG", href: "/docs/scoring/mig" },
    ],
  },
  {
    title: "Implementación",
    items: [
      { label: "Mes 1 — Cimiento", href: "/docs/implementacion/mes1" },
      { label: "Mes 2 — Automatización", href: "/docs/implementacion/mes2" },
      { label: "Mes 3 — Autonomía", href: "/docs/implementacion/mes3" },
      { label: "Roles y Responsabilidades", href: "/docs/implementacion/roles" },
      { label: "Anti-patrones", href: "/docs/implementacion/anti-patrones" },
    ],
  },
  {
    title: "Referencia",
    items: [
      { label: "Glosario", href: "/docs/glosario" },
      { label: "Cuestionario (40P)", href: "/docs/cuestionario" },
      { label: "Referencias Académicas", href: "/docs/referencias" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="mb-4">
          <Link
            href="/docs"
            className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
              pathname === "/docs" ? "text-mayaguez-accent" : "text-mayaguez-text-secondary hover:text-mayaguez-accent"
            }`}
          >
            Documentación
          </Link>
        </div>
        <nav className="space-y-5">
          {docsSidebar.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-semibold text-mayaguez-text-muted uppercase tracking-wider mb-2">
                {section.title}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1.5 text-sm py-1 px-2 rounded-md transition-all ${
                          active
                            ? "text-mayaguez-accent bg-mayaguez-accent/10 font-medium"
                            : "text-mayaguez-text-secondary hover:text-mayaguez-text-primary hover:bg-mayaguez-secondary/50"
                        }`}
                      >
                        <ChevronRight
                          className={`h-3 w-3 flex-shrink-0 transition-transform ${active ? "text-mayaguez-accent rotate-90" : "opacity-40"}`}
                        />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
