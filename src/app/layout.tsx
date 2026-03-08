import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos base para la aplicación de la cafetería.
// Aquí definimos el título y la descripción que se usarán por defecto.
export const metadata: Metadata = {
  title: "Mi Latte | Tu café de barrio en digital",
  description:
    "Mi Latte: café de especialidad, dulces caseros y ambiente acogedor. Ahora también en el mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-black`}
      >
        {children}
      </body>
    </html>
  );
}
