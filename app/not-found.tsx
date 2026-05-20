import Link from "next/link";
import { Shield, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-16 w-16 text-mayaguez-accent/40" />
        </div>
        <p className="text-8xl font-bold text-mayaguez-accent/20 mb-4">404</p>
        <h1 className="text-2xl font-bold text-mayaguez-text-primary mb-3">
          Página no encontrada
        </h1>
        <p className="text-mayaguez-text-secondary mb-8">
          Esta ruta no existe en el Modelo Mayagüez. Puede que el contenido
          haya sido movido o aún esté en construcción.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary">
              <Home className="mr-2 h-4 w-4" />
              Ir al Inicio
            </Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline">
              Documentación
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 max-w-xs mx-auto">
          {[
            { label: "Evaluador", href: "/demo" },
            { label: "Modelo EMAI", href: "/modelo" },
            { label: "Implementación", href: "/implementacion" },
            { label: "Casos de Uso", href: "/casos-de-uso" },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="text-sm text-mayaguez-accent hover:opacity-80 transition-opacity text-center py-2 rounded-lg border border-mayaguez-accent/20 hover:border-mayaguez-accent/40">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
