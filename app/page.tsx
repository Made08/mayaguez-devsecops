import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { pillars, principles } from "@/lib/mayaguez-data";
import { ArrowRight, Shield, Zap, Lock, Activity, BarChart2, Workflow, TrendingUp, Users, Target, CheckCircle2 } from "lucide-react";

const iconMap = {
  "shield-check": Shield,
  "workflow": Workflow,
  "activity": Activity,
  "zap": Zap,
  "lock": Lock,
  "bar-chart-2": BarChart2,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Statistics Section */}
      <Section className="bg-mayaguez-secondary/30">
        <SectionHeader
          title="Validado con Datos Reales"
          subtitle="Impacto Medido"
          description="El Modelo Mayagüez fue validado con 20 organizaciones del Valle del Cauca y Colombia, demostrando mejoras significativas en seguridad, calidad y eficiencia operativa."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Organizaciones Evaluadas"
            value="20"
            icon={Users}
            description="Valle del Cauca y Colombia"
          />
          <StatCard
            label="Reducción Lead Time"
            value="98%"
            icon={TrendingUp}
            description="18 días → 55 minutos"
          />
          <StatCard
            label="Aumento Frecuencia"
            value="+1,066%"
            icon={Zap}
            description="1.2/mes → 14/semana"
          />
          <StatCard
            label="Mejora CFR"
            value="38% → 7%"
            icon={Target}
            description="Change Failure Rate"
          />
        </div>
      </Section>

      {/* Pillars Section */}
      <Section>
        <SectionHeader
          title="Seis Pilares Integrados"
          subtitle="Arquitectura del Modelo"
          description="El Modelo Mayagüez fusiona sinérgicamente seis pilares fundamentales para crear un framework completo de adopción DevSecOps."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || Shield;
            return (
              <Card key={pillar.id} variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-mayaguez-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-mayaguez-accent" />
                  </div>
                  <CardTitle>{pillar.name}</CardTitle>
                  <CardDescription>{pillar.framework}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-mayaguez-text-secondary">
                    {pillar.contribution}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-mayaguez-secondary/30">
        <SectionHeader
          title="El Problema que Resolvemos"
          subtitle="Brecha Velocidad vs. Control"
          description="La transformación digital ha generado un conflicto estructural entre agilidad y control en las organizaciones TI."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ProblemItem
              title="Seguridad Tardía"
              description="Las actividades de seguridad se incorporan en etapas finales del SDLC, aumentando el costo de corrección hasta 30 veces."
              severity="high"
            />
            <ProblemItem
              title="Modelos Genéricos"
              description="Los marcos internacionales proponen recetas estandarizadas para entornos con recursos ilimitados, ignorando la heterogeneidad real."
              severity="medium"
            />
            <ProblemItem
              title="Brecha Técnico-Cultural"
              description="El 90% de las organizaciones tienen pipelines CI/CD, pero solo el 30% reporta procesos de aprobación eficientes."
              severity="high"
            />
          </div>
          <div className="space-y-6">
            <ProblemItem
              title="Ausencia de Escalas Medibles"
              description="Los modelos existentes no definen cómo evoluciona la organización en el tiempo ni conectan métricas con gobernanza."
              severity="medium"
            />
            <ProblemItem
              title="Silos Organizacionales"
              description="La seguridad sigue siendo vista como 'responsabilidad de otros' (cultura promedio: 2.8/5 en Colombia)."
              severity="high"
            />
            <ProblemItem
              title="Burocracia de Aprobación"
              description="Los Comités de Cambios (CAB) manuales frenan la velocidad técnica sin agregar valor real de control."
              severity="medium"
            />
          </div>
        </div>
      </Section>

      {/* Principles Section */}
      <Section>
        <SectionHeader
          title="Manifiesto de Ingeniería Adaptativa"
          subtitle="Cinco Principios Fundamentales"
          description="El Modelo Mayagüez se rige por cinco principios que definen su filosofía de ingeniería y gobernanza."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card key={principle.id} variant="bordered" className="relative">
              <div className="absolute top-4 right-4 text-4xl font-bold text-mayaguez-accent/20">
                0{index + 1}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-mayaguez-text-secondary">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ROI Section */}
      <Section className="bg-gradient-to-b from-mayaguez-secondary/30 to-mayaguez-primary">
        <SectionHeader
          title="ROI del Piloto Q1 2026"
          subtitle="Resultados Comprobados"
          description="El piloto del Modelo Mayagüez demostró un retorno de inversión significativo con mejoras cuantificables en todas las dimensiones."
          centered
        />
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="border-2 border-mayaguez-accent/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ROIMetric
                    label="Lead Time"
                    before="18 días"
                    after="55 minutos"
                    improvement="98% reducción"
                  />
                  <ROIMetric
                    label="Frecuencia de Despliegue"
                    before="1.2/mes"
                    after="14/semana"
                    improvement="+1,066% aumento"
                  />
                  <ROIMetric
                    label="MTTR"
                    before="14 horas"
                    after="22 minutos"
                    improvement="97% reducción"
                  />
                </div>
                <div className="space-y-4">
                  <ROIMetric
                    label="Change Failure Rate"
                    before="38%"
                    after="7%"
                    improvement="82% reducción"
                  />
                  <div className="pt-4 border-t border-mayaguez-accent/20">
                    <p className="text-3xl font-bold text-mayaguez-success mb-2">$920,000 USD</p>
                    <p className="text-sm text-mayaguez-text-secondary">
                      Ahorro anual estimado en pérdidas evitadas por caídas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-mayaguez-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-mayaguez-text-primary mb-6">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-mayaguez-text-secondary mb-8">
            Evalúa tu nivel de madurez DevSecOps actual y descubre cómo el Modelo Mayagüez puede ayudarte a alcanzar la excelencia operativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button variant="primary" size="lg" className="text-lg">
                Iniciar Evaluación Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/implementacion">
              <Button variant="outline" size="lg" className="text-lg">
                Ver Roadmap de Implementación
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function StatCard({ label, value, icon: Icon, description }: { label: string; value: string; icon: any; description: string }) {
  return (
    <Card variant="bordered">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Icon className="h-8 w-8 text-mayaguez-accent" />
          <Badge variant="success">Validado</Badge>
        </div>
        <p className="text-3xl font-bold text-mayaguez-text-primary mb-2">{value}</p>
        <p className="text-sm font-medium text-mayaguez-text-secondary mb-1">{label}</p>
        <p className="text-xs text-mayaguez-text-muted">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProblemItem({ title, description, severity }: { title: string; description: string; severity: "high" | "medium" | "low" }) {
  const severityColors = {
    high: "text-mayaguez-danger",
    medium: "text-mayaguez-warning",
    low: "text-mayaguez-accent"
  };

  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className={`w-2 h-2 rounded-full mt-2 ${severityColors[severity]}`} />
      </div>
      <div>
        <h4 className="font-semibold text-mayaguez-text-primary mb-1">{title}</h4>
        <p className="text-sm text-mayaguez-text-secondary">{description}</p>
      </div>
    </div>
  );
}

function ROIMetric({ label, before, after, improvement }: { label: string; before: string; after: string; improvement: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-mayaguez-text-secondary mb-2">{label}</p>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-mayaguez-text-muted mb-1">Antes</p>
          <p className="text-lg font-semibold text-mayaguez-text-secondary">{before}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-mayaguez-accent flex-shrink-0" />
        <div className="flex-1">
          <p className="text-xs text-mayaguez-text-muted mb-1">Después</p>
          <p className="text-lg font-semibold text-mayaguez-success">{after}</p>
        </div>
      </div>
      <p className="text-xs text-mayaguez-accent mt-1">{improvement}</p>
    </div>
  );
}
