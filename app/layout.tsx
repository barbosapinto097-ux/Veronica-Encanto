import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verônica Encanto — Beleza, Estilo & Cuidado",
  description: "Perfumes, joias, relógios, sublimação personalizada, manicure e Tupperware.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
