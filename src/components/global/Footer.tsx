import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900/10 py-8 px-12 font-(family-name:--font-poppins) flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-extrabold text-zinc-200">Travan</h1>
        <p className="text-sm text-zinc-400">Seu aplicativo de caronas!</p>
      </div>
      <Image
        priority
        src={"/logo.png"}
        alt="logo travan"
        width={124}
        height={124}
        className="m-0"
        sizes="10vw, (max-width: 768px) 124px"
      />
    </footer>
  );
};

export default Footer;
