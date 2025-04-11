import type { Metadata } from "next";
import Image from "next/image";

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
    <main className="bg-slate-950 grid grid-col-1 md:grid-cols-2 min-h-screen">
      <div className="flex-col justify-center items-center hidden md:flex">
        <Image
          priority
          src={"/slogon.png"}
          alt="logo travan"
          width={724}
          height={724}
          className="m-0"
          sizes="50vw, (max-width: 768px) 0vw"
        />
      </div>
      {children}
    </main>
  );
}
