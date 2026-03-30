import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guillermo B. Clavares — Portfolio",
  description:
    "Portfolio professionnel de Guillermo B. Clavares, étudiant en management à TBS Éducation, futur étudiant à ESCP Business School.",
  keywords: ["portfolio", "management", "TBS", "ESCP", "Guillermo Clavares"],
  openGraph: {
    title: "Guillermo B. Clavares — Portfolio",
    description: "Portfolio professionnel · TBS Éducation → ESCP Business School",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
