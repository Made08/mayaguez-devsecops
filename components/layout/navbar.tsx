"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Filosofía", href: "/about" },
  { name: "Modelo", href: "/modelo" },
  { name: "Implementación", href: "/implementacion" },
  { name: "Demo", href: "/demo" },
  { name: "Documentación", href: "/docs" },
  { name: "Casos de Uso", href: "/casos-de-uso" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mayaguez-primary/95 backdrop-blur-md border-b border-mayaguez-accent/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-mayaguez-accent" />
            <span className="text-xl font-bold text-mayaguez-text-primary">
              Modelo Mayagüez
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-mayaguez-accent bg-mayaguez-accent/10"
                    : "text-mayaguez-text-secondary hover:text-mayaguez-text-primary hover:bg-mayaguez-secondary/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/demo">
              <Button variant="primary" size="sm">
                Iniciar Evaluación
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-mayaguez-text-secondary hover:text-mayaguez-text-primary hover:bg-mayaguez-secondary/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-mayaguez-secondary/95 backdrop-blur-md border-t border-mayaguez-accent/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "text-mayaguez-accent bg-mayaguez-accent/10"
                    : "text-mayaguez-text-secondary hover:text-mayaguez-text-primary hover:bg-mayaguez-secondary/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Iniciar Evaluación
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
