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
    <footer className="bg-mayaguez-secondary border-t border-mayaguez-accent/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-mayaguez-accent" />
              <span className="text-xl font-bold text-mayaguez-text-primary">
                Modelo Mayagüez
              </span>
            </Link>
            <p className="text-sm text-mayaguez-text-secondary">
              Modelo de Adopción de DevSecOps para Mejorar la Seguridad, Calidad y Eficiencia Operativa en el Ciclo de Vida del Software.
            </p>
          </div>

          {/* Modelo Links */}
          <div>
            <h3 className="text-sm font-semibold text-mayaguez-text-primary uppercase tracking-wider mb-4">
              Modelo
            </h3>
            <ul className="space-y-2">
              {footerLinks.modelo.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos Links */}
          <div>
            <h3 className="text-sm font-semibold text-mayaguez-text-primary uppercase tracking-wider mb-4">
              Recursos
            </h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institución Links */}
          <div>
            <h3 className="text-sm font-semibold text-mayaguez-text-primary uppercase tracking-wider mb-4">
              Institución
            </h3>
            <ul className="space-y-2">
              {footerLinks.institucion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mayaguez-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-mayaguez-text-muted">
              © 2026 Modelo Mayagüez. Universidad Cooperativa de Colombia. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contacto@mayaguez.dev"
                className="text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-mayaguez-text-secondary hover:text-mayaguez-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
