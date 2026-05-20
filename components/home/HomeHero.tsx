"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6 + i * 0.1, ease: "easeOut" },
  }),
};

const heroStats = [
  { value: "20", label: "Orgs. evaluadas" },
  { value: "EMAI 0-5", label: "Escala de madurez" },
  { value: "40P", label: "Cuestionario validado" },
  { value: "SEA", label: "Score oficial" },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 mz-grid-bg animate-grid-drift opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_55%,rgba(0,212,255,0.12),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-mz-void via-mz-void/80 to-mz-dark/40" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-mz-cyan/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-mz-green/5 blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-5xl pt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-label uppercase text-mz-cyan">[01]</span>
              <span className="h-px w-12 bg-mz-cyan" />
              <Badge variant="info">Modelo de Adopción DevSecOps</Badge>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 max-w-4xl font-display text-display-md text-mz-text-primary md:text-display-lg xl:text-display-xl"
          >
            Confianza Verificada.<br />
            <span className="text-mz-cyan">Velocidad con Sentido.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-3xl text-body-lg text-mz-text-secondary md:text-xl"
          >
            El Modelo Mayagüez es un framework de adopción progresiva y medible de DevSecOps
            para organizaciones TI, integrando factores técnicos, organizacionales, culturales
            y de gobernanza.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-16 flex flex-col gap-4 sm:flex-row">
            <Link href="/demo">
              <Button variant="primary" size="lg">
                Iniciar Evaluación Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Conocer el Modelo
              </Button>
            </Link>
          </motion.div>

          <div className="grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="rounded-card border border-mz-border bg-mz-surface/70 p-4 shadow-mz-card backdrop-blur-sm"
              >
                <ShieldCheck className="mb-3 h-4 w-4 text-mz-cyan" />
                <div className="font-display text-heading-lg text-mz-text-primary">{stat.value}</div>
                <div className="text-caption uppercase text-mz-text-tertiary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2 text-caption uppercase text-mz-text-tertiary">
          Explorar
          <ChevronDown className="h-5 w-5 text-mz-cyan" />
        </div>
      </motion.div>
    </section>
  );
}
