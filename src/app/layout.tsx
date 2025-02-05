import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// Raleway
const raleway = Raleway({
  variable: "--font-raleway", 
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Página de Links",
  description: "Página de links por Guilherme Freitas",
  openGraph: {
    title: "Página de Links",
    description: "Página de links por Guilherme Freitas",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.className} bg-bg antialiased`}>
        {children}
      </body>
    </html>
  );
}
