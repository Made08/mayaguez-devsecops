"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail, MapPin, GraduationCap, ArrowRight, CheckCircle2,
  Shield, BarChart2, BookOpen, Zap
} from "lucide-react";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", organization: "", role: "", message: "", reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Badge variant="info" className="mb-6">Contacto y Acompañamiento</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-mayaguez-text-primary mb-6 max-w-4xl leading-tight">
            ¿Listo para Transformar tu Organización?
          </h1>
          <p className="text-xl text-mayaguez-text-secondary max-w-3xl">
            El Modelo Mayagüez es un proyecto académico de código abierto. Contáctanos para
            acompañamiento en la adopción, investigación colaborativa o presentaciones institucionales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-mayaguez-text-primary mb-6">
              Solicitar Acompañamiento
            </h2>

            {submitted ? (
              <Card variant="bordered" className="border-mayaguez-success/30 bg-mayaguez-success/5">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-mayaguez-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-mayaguez-text-primary mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-mayaguez-text-secondary">
                    Gracias por tu interés en el Modelo Mayagüez. Nos pondremos en contacto
                    contigo en los próximos días hábiles.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-mayaguez-accent hover:opacity-80 transition-opacity"
                  >
                    Enviar otro mensaje
                  </button>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent placeholder-mayaguez-text-muted"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent placeholder-mayaguez-text-muted"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                      Organización
                    </label>
                    <input
                      type="text"
                      className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent placeholder-mayaguez-text-muted"
                      placeholder="Nombre de tu empresa"
                      value={formData.organization}
                      onChange={e => setFormData(p => ({ ...p, organization: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                      Tu rol
                    </label>
                    <input
                      type="text"
                      className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent placeholder-mayaguez-text-muted"
                      placeholder="CTO, DevOps Engineer, etc."
                      value={formData.role}
                      onChange={e => setFormData(p => ({ ...p, role: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                    Motivo de contacto
                  </label>
                  <select
                    className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent"
                    value={formData.reason}
                    onChange={e => setFormData(p => ({ ...p, reason: e.target.value }))}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="acompanamiento">Acompañamiento en adopción DevSecOps</option>
                    <option value="investigacion">Investigación colaborativa</option>
                    <option value="presentacion">Presentación institucional</option>
                    <option value="piloto">Participar como organización piloto</option>
                    <option value="academia">Uso académico / tesis</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-mayaguez-text-secondary mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-mayaguez-secondary/30 border border-mayaguez-accent/20 rounded-lg px-4 py-3 text-mayaguez-text-primary text-sm focus:outline-none focus:border-mayaguez-accent placeholder-mayaguez-text-muted resize-none"
                    placeholder="Cuéntanos sobre tu organización y qué tipo de apoyo necesitas..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar Mensaje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* Institution */}
            <Card variant="bordered" className="border-mayaguez-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-mayaguez-accent" />
                  <h3 className="font-bold text-mayaguez-text-primary">Institución de Origen</h3>
                </div>
                <div className="space-y-2 text-sm text-mayaguez-text-secondary">
                  <p className="font-semibold text-mayaguez-text-primary">Universidad Cooperativa de Colombia</p>
                  <p>Maestría en Gestión de Tecnologías de la Información</p>
                  <div className="flex items-center gap-2 pt-2">
                    <MapPin className="h-4 w-4 text-mayaguez-accent flex-shrink-0" />
                    <span>Sede Bucaramanga, Colombia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author */}
            <Card variant="bordered" className="border-mayaguez-accent/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-mayaguez-text-primary mb-4">Autora del Modelo</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-mayaguez-text-primary">Madelem Chico Velasco</p>
                    <p className="text-mayaguez-text-muted text-xs">Candidata a Magíster GTI · 2026</p>
                  </div>
                  <div className="flex items-center gap-2 text-mayaguez-text-secondary">
                    <Mail className="h-4 w-4 text-mayaguez-accent flex-shrink-0" />
                    <a href="mailto:madelem.chico@campusucc.edu.co" className="hover:text-mayaguez-accent transition-colors">
                      madelem.chico@campusucc.edu.co
                    </a>
                  </div>
                  <div className="pt-2 border-t border-mayaguez-accent/10">
                    <p className="text-xs text-mayaguez-text-muted mb-1">Asesores</p>
                    <p className="text-xs text-mayaguez-text-secondary">Pedro Alberto Arias Quintero</p>
                    <p className="text-xs text-mayaguez-text-secondary">Andrea Cristina Martínez Ardila</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="space-y-3">
              {[
                { icon: Shield, label: "Evaluar Madurez DevSecOps", href: "/demo", desc: "40 preguntas, resultados inmediatos" },
                { icon: BarChart2, label: "Ver el Modelo Completo", href: "/modelo", desc: "EMAI, Triggers, MIG, DORA" },
                { icon: BookOpen, label: "Documentación Técnica", href: "/docs", desc: "Referencia completa del modelo" },
                { icon: Zap, label: "Roadmap de Implementación", href: "/implementacion", desc: "3 meses, OKRs reales" },
              ].map(({ icon: Icon, label, href, desc }) => (
                <Link key={href} href={href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-mayaguez-secondary/30 border border-mayaguez-accent/10 hover:border-mayaguez-accent/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-mayaguez-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-mayaguez-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-mayaguez-text-primary group-hover:text-mayaguez-accent transition-colors">{label}</p>
                    <p className="text-xs text-mayaguez-text-muted">{desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-mayaguez-text-muted group-hover:text-mayaguez-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
