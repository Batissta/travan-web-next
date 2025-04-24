import type { Metadata } from "next";
import {
  Geist,
  Poppins,
  Montserrat_Alternates,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alterates",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Travan - Sua carona chegou",
  description:
    "Aplicativo de caronas para pessoas que compartilham o mesmo destino!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${montserratAlternates.variable} ${poppins.variable} antialiased bg-zinc-950`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
