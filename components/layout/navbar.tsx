"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown, Globe2, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Filosofía", href: "/about" },
  { name: "Modelo", href: "/modelo" },
  { name: "Implementación", href: "/implementacion" },
  { name: "Demo", href: "/demo" },
  { name: "Documentación", href: "/docs" },
  { name: "Casos", href: "/casos-de-uso" },
];

const megaMenu = [
  {
    title: "Modelo",
    links: [
      { label: "Escala EMAI 0-5", href: "/modelo#emai" },
      { label: "Triggers de Adaptación", href: "/modelo#triggers" },
      { label: "Algoritmo de Gates", href: "/modelo#gates" },
    ],
  },
  {
    title: "Evaluación",
    links: [
      { label: "Demo interactivo", href: "/demo" },
      { label: "Cuestionario 40 preguntas", href: "/docs/cuestionario" },
      { label: "Scoring SEA", href: "/docs/scoring/sea" },
    ],
  },
  {
    title: "Implementación",
    links: [
      { label: "Roadmap de 90 días", href: "/implementacion" },
      { label: "Roles y responsabilidades", href: "/docs/implementacion/roles" },
      { label: "Anti-patrones", href: "/docs/implementacion/anti-patrones" },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 bg-mz-dark/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-b border-mz-border shadow-mz-card" : "border-b border-transparent"
      )}
      aria-label="Navegación principal"
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex items-center gap-3" aria-label="Mayagüez inicio">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-mz-cyan/30 bg-mz-cyan/10 shadow-mz-glow">
              <Shield className="h-5 w-5 text-mz-cyan" />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.18em] text-mz-text-primary">
              MAYAGÜEZ
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-6 text-body-sm font-medium text-mz-text-secondary transition-colors hover:text-mz-cyan",
                    active && "text-mz-cyan after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-mz-cyan"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-6 text-body-sm font-medium text-mz-text-secondary transition-colors hover:text-mz-cyan"
              onMouseEnter={() => setMegaOpen(true)}
              onClick={() => setMegaOpen((value) => !value)}
              aria-expanded={megaOpen}
            >
              Explorar <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
            </button>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="inline-flex items-center gap-2 text-caption uppercase text-mz-text-tertiary hover:text-mz-cyan" aria-label="Idioma español Colombia">
              <Globe2 className="h-4 w-4" /> ES / CO
            </button>
            <Link href="/demo">
              <Button variant="primary" size="sm">Iniciar Evaluación</Button>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-button border border-mz-border p-2 text-mz-text-secondary transition-colors hover:border-mz-cyan/50 hover:text-mz-cyan lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {megaOpen && (
        <div
          className="hidden border-y border-mz-border bg-mz-surface/95 shadow-mz-hover backdrop-blur-xl lg:block"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="container-custom grid grid-cols-3 gap-8 py-8">
            {megaMenu.map((column) => (
              <div key={column.title}>
                <p className="section-kicker mb-4">{column.title}</p>
                <div className="space-y-3">
                  {column.links.map((link) => (
                    <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-card border border-transparent px-4 py-3 text-body-sm text-mz-text-secondary transition-all hover:border-mz-cyan/30 hover:bg-mz-elevated hover:text-mz-text-primary">
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-mz-cyan opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-mz-void/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú" />
          <aside className="absolute right-0 top-0 h-screen w-[86vw] max-w-sm border-l border-mz-border bg-mz-surface p-6 shadow-mz-hover">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-base font-bold tracking-[0.18em] text-mz-text-primary">MAYAGÜEZ</span>
              <button className="rounded-button border border-mz-border p-2 text-mz-text-secondary" onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block rounded-card border border-transparent px-4 py-3 text-body-md text-mz-text-secondary",
                    pathname === item.href ? "border-mz-cyan/30 bg-mz-cyan/10 text-mz-cyan" : "hover:bg-mz-elevated hover:text-mz-text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="mt-8 block">
              <Button variant="primary" size="lg" className="w-full">Iniciar Evaluación</Button>
            </Link>
          </aside>
        </div>
      )}
    </nav>
  );
}
