"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(0,212,255,0.08),transparent_65%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mayaguez-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="info" className="mb-6">
              Modelo de Adopción DevSecOps
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-mayaguez-text-primary mb-6 leading-tight"
          >
            Confianza Verificada.<br />
            <span className="text-mayaguez-accent">Velocidad con Sentido.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-mayaguez-text-secondary mb-10 max-w-3xl mx-auto"
          >
            El Modelo Mayagüez es un framework de adopción progresiva y medible de DevSecOps
            para organizaciones TI, integrando factores técnicos, organizacionales, culturales
            y de gobernanza.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/demo">
              <Button variant="primary" size="lg" className="text-lg">
                Iniciar Evaluación Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg">
                Conocer el Modelo
              </Button>
            </Link>
          </motion.div>

          {/* Inline stats strip */}
          <div className="flex flex-wrap justify-center gap-6">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-mayaguez-accent/20 bg-mayaguez-secondary/40 backdrop-blur-sm"
              >
                <ShieldCheck className="h-4 w-4 text-mayaguez-accent flex-shrink-0" />
                <span className="font-bold text-mayaguez-text-primary">{stat.value}</span>
                <span className="text-mayaguez-text-muted text-sm">{stat.label}</span>
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
        <div className="w-5 h-8 rounded-full border-2 border-mayaguez-accent/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-mayaguez-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
