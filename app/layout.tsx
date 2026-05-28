import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Style House Barber Shop | Tu estilo, nuestra pasión",
  description:
    "El destino premium para el hombre moderno en Asunción. Combinamos técnica, precisión y estilo para que siempre luzcas tu mejor versión.",
  keywords: ["barbería", "barbershop", "corte de pelo", "style house", "asunción", "paraguay"],
  icons: {
    icon: "/logo-stylehouse.png",
    apple: "/logo-stylehouse.png",
  },
  openGraph: {
    title: "Style House Barber Shop",
    description: "Tu estilo, nuestra pasión.",
    type: "website",
    locale: "es_PY",
    images: [{ url: "/logo-stylehouse.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
