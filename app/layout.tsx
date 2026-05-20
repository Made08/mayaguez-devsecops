import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Modelo Mayagüez - Adopción DevSecOps",
  description: "Modelo de Adopción de DevSecOps para Mejorar la Seguridad, Calidad y Eficiencia Operativa en el Ciclo de Vida del Software en Organizaciones TI",
  keywords: "DevSecOps, DevSecOps adoption model, IT organizations, Technology maturity, Maturity model, Software security, Software quality, Operational efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-mz-void text-mz-text-primary`}>
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
