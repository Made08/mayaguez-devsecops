# Modelo Mayagüez — Adopción DevSecOps

> **Confianza Verificada. Velocidad con Sentido.**

Sitio web oficial del **Modelo de Adopción de DevSecOps para Mejorar la Seguridad, Calidad y Eficiencia Operativa en el Ciclo de Vida del Software en Organizaciones TI: MAYAGÜEZ**.

---

## Sobre el Proyecto

El Modelo Mayagüez es un framework de adopción progresiva y medible de DevSecOps diseñado para organizaciones TI latinoamericanas. Fue desarrollado como investigación de Maestría en Gestión de Tecnologías de la Información en la **Universidad Cooperativa de Colombia — Sede Bucaramanga**.

- **Autora**: Madelem Chico Velasco
- **Asesores**: Pedro Alberto Arias Quintero / Andrea Cristina Martínez Ardila
- **Año**: 2026
- **Validación**: 20 organizaciones del Valle del Cauca y Colombia

---

## Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14+ (App Router) | Framework principal |
| TypeScript | Tipado estricto |
| Tailwind CSS | Estilo y diseño (tema Mayagüez personalizado) |
| Recharts | Gráficas: RadarChart, BarChart |
| Framer Motion | Animaciones (disponible, uso progresivo) |
| Lucide React | Iconografía |
| React Hook Form + Zod | Formularios con validación |
| Fuse.js | Búsqueda local en documentación |

---

## Estructura de Carpetas

```
mayaguez-devsecops/
├── app/
│   ├── page.tsx                  # Home — Hero, Pilares, ROI
│   ├── about/page.tsx            # Filosofía — Principios, Ciclo de Confianza
│   ├── modelo/page.tsx           # EMAI, SEA, Triggers, Gates, MIG, DORA
│   ├── implementacion/page.tsx   # Roadmap 3 meses con OKRs reales
│   ├── demo/page.tsx             # Evaluador de 40 preguntas + resultados SEA
│   ├── casos-de-uso/page.tsx     # 6 perfiles organizacionales
│   ├── contacto/page.tsx         # Formulario + info institucional
│   └── docs/
│       ├── layout.tsx            # Layout con sidebar de navegación
│       ├── page.tsx              # Índice de documentación
│       ├── glosario/page.tsx     # Glosario oficial (24 términos)
│       ├── cuestionario/page.tsx # 40 preguntas del instrumento
│       ├── referencias/page.tsx  # Referencias académicas APA 7
│       └── [...slug]/page.tsx    # Catch-all con contenido inline
├── components/
│   ├── ui/                       # Button, Card, Badge, Section
│   ├── layout/                   # Navbar, Footer
│   └── demo/
│       └── DemoWizard.tsx        # Evaluador interactivo completo
├── lib/
│   ├── mayaguez-data.ts          # EMAI, Triggers, MIG, Pilares, DORA
│   ├── sea-calculator.ts         # Fórmula SEA oficial
│   ├── survey-data.ts            # 40 preguntas + benchmarks por sector
│   ├── roi-calculator.ts         # Calculadora ROI DORA
│   └── utils.ts                  # cn() helper
└── tailwind.config.ts            # Tema Mayagüez (colores, fuentes, animaciones)
```

---

## Ejecutar Localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
http://localhost:3000
```

---

## Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# O conectar el repositorio en https://vercel.com/new
# Framework: Next.js (auto-detectado)
# Build command: npm run build
# Output directory: .next
```

---

## Paleta de Colores Mayagüez

| Token | Valor | Uso |
|---|---|---|
| `mayaguez-primary` | `#0A1628` | Fondo principal |
| `mayaguez-secondary` | `#1A2332` | Fondos secundarios |
| `mayaguez-accent` | `#00D4FF` | Acento cian tecnológico |
| `mayaguez-success` | `#00C851` | Verde — Elite/éxito |
| `mayaguez-warning` | `#FFB300` | Ámbar — alertas |
| `mayaguez-danger` | `#FF3D00` | Rojo — crítico |

---

## Páginas del Sitio

| Ruta | Contenido |
|---|---|
| `/` | Hero, 6 pilares, estadísticas, manifiesto, ROI |
| `/about` | Filosofía, origen, Ciclo de Confianza, comparativa |
| `/modelo` | EMAI 0-5, fórmula SEA, Triggers, Gates, MIG, DORA |
| `/implementacion` | Roadmap 3 meses, OKRs, herramientas, evidencias |
| `/demo` | Evaluador 40 preguntas + resultados + RadarChart |
| `/casos-de-uso` | 6 perfiles: Fintech, Banca, Logística, Telco, Público, Software |
| `/docs` | Documentación técnica con sidebar navegable |
| `/contacto` | Formulario + info Universidad Cooperativa de Colombia |

---

## Funcionalidades Clave

- **Evaluador SEA Funcional**: El demo aplica la fórmula oficial `EO(%) = [(M×0.30)+(C×0.20)+(A×0.20)+(E×0.15)+(G×0.15)]×20`
- **RadarChart de 4 dimensiones**: Comparativa visual con promedio nacional y sector
- **Comparativa por sector**: Datos reales de 7 sectores colombianos
- **ROI estimado**: Basado en datos del piloto Q1 2026
- **Documentación navegable**: Sidebar con 30+ secciones temáticas
- **Diseño responsive**: Mobile-first con breakpoints md/lg
- **Modo oscuro nativo**: Tema enterprise cybersecurity-grade

---

## Créditos

- **Universidad Cooperativa de Colombia** — Sede Bucaramanga
- **Programa**: Maestría en Gestión de Tecnologías de la Información
- **Autora**: Madelem Chico Velasco
- **Año**: 2026

---

## Licencia

Ver [LICENSE](LICENSE) para detalles.
Proyecto Mayagüez para la adopcion DevSecOps
