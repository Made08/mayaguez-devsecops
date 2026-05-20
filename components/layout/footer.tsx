import React from "react";
import Link from "next/link";
import { Shield, Mail, Github, Linkedin } from "lucide-react";

const footerLinks = {
  modelo: [
    { name: "Filosofía", href: "/about" },
    { name: "Escala EMAI", href: "/modelo#emai" },
    { name: "Triggers", href: "/modelo#triggers" },
    { name: "Incentivos MIG", href: "/modelo#mig" },
  ],
  recursos: [
    { name: "Documentación", href: "/docs" },
    { name: "Casos de Uso", href: "/casos-de-uso" },
    { name: "Demo Interactivo", href: "/demo" },
    { name: "Implementación", href: "/implementacion" },
  ],
  institucion: [
    { name: "Universidad Cooperativa de Colombia", href: "#" },
    { name: "Maestría en GTI", href: "#" },
    { name: "Sede Bucaramanga", href: "#" },
    { name: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-mz-border bg-mz-void">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-mz-cyan/30 bg-mz-cyan/10">
                <Shield className="h-5 w-5 text-mz-cyan" />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.18em] text-mz-text-primary">
                MAYAGÜEZ
              </span>
            </Link>
            <p className="text-body-sm text-mz-text-secondary">
              Modelo de Adopción de DevSecOps para Mejorar la Seguridad, Calidad y Eficiencia Operativa en el Ciclo de Vida del Software.
            </p>
            <div className="flex items-center gap-3">
              {[Mail, Github, Linkedin].map((Icon, index) => (
                <a key={index} href={index === 0 ? "mailto:contacto@mayaguez.dev" : "#"} className="flex h-9 w-9 items-center justify-center rounded-full border border-mz-border text-mz-text-tertiary transition-colors hover:border-mz-cyan/40 hover:text-mz-cyan" aria-label="Red social Mayagüez">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-label uppercase text-mz-text-primary">
              Modelo
            </h3>
            <ul className="space-y-2">
              {footerLinks.modelo.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-mz-text-tertiary transition-colors hover:text-mz-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-label uppercase text-mz-text-primary">
              Recursos
            </h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-mz-text-tertiary transition-colors hover:text-mz-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-label uppercase text-mz-text-primary">
              Institución
            </h3>
            <ul className="space-y-2">
              {footerLinks.institucion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-mz-text-tertiary transition-colors hover:text-mz-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-mz-border bg-mz-surface p-5">
            <h3 className="mb-3 text-label uppercase text-mz-text-primary">Siguiente paso</h3>
            <p className="mb-4 text-body-sm text-mz-text-secondary">Evalúa tu nivel de madurez DevSecOps y recibe un roadmap basado en evidencia.</p>
            <Link href="/demo" className="link-underline text-body-sm text-mz-cyan">
              Iniciar evaluación
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-mz-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-body-sm text-mz-text-tertiary">
              © 2026 Modelo Mayagüez. Universidad Cooperativa de Colombia. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-caption uppercase text-mz-text-tertiary">
              <span>Maestría GTI</span>
              <span>Madelem Chico Velasco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

