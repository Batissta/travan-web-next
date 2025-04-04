import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900/10 py-6 px-8 font-(family-name:--font-poppins) flex flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-4xl font-extrabold text-(--color-one)">Travan</h1>
          <p className="text-sm text-(--color-two)">
            Seu aplicativo de caronas!
          </p>
        </div>
        <Image
          priority
          src={"/logo.png"}
          alt="logo travan"
          width={124}
          height={124}
          className="m-0 scale-x-[-1]"
          sizes="10vw, (max-width: 768px) 124px"
        />
      </div>
      <p className="text-center text-blue-200/50 text-xs">
        Travan. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
