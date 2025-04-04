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
    <main className="bg-[url(/background.jpg)] bg-center grid grid-cols-2 h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <Image
          priority
          src={"/slogon.png"}
          alt="logo travan"
          width={512}
          height={512}
          className="m-0"
          sizes="20vw"
        />
      </div>
      {children}
    </main>
  );
}
