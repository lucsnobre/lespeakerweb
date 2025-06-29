import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LeSpeaker Audio Parts",
  description: "Especialistas em reparo e otimização de equipamentos de som.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="fixed top-0 left-0 w-full h-full -z-10 noise-bg" />
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
} 