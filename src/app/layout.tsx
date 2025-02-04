import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";  // Adicione a importação do Raleway
import "./globals.css";

// Defina a fonte Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Defina a fonte Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  Raleway
const raleway = Raleway({
  variable: "--font-family", 
  subsets: ["latin"],
  weight: "400",  
  style: "normal", 
});

export const metadata: Metadata = {
  title: "Pagina de links",
  description: "Pagina de links por Guilherme freitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}  // Adicione a variável da fonte Raleway
      >
        {children}
      </body>
    </html>
  );
}
