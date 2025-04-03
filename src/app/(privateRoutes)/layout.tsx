import Header from "@/components/global/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travan - Encontre uma carona!",
  description:
    "Aplicativo de caronas para pessoas que compartilham o mesmo destino!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
