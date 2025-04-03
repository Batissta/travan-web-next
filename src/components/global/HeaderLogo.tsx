"use client";
import React from "react";
import useMedia from "@/hooks/useMedia";
import Image from "next/image";

const HeaderLogo = () => {
  const mobile = useMedia("(width <= 800px)");
  return (
    <>
      {mobile ? (
        <Image
          priority
          src={"/logo.png"}
          width={120}
          height={70}
          alt="Travan Logo"
          className="h-[50px] lg:h-[70px] w-auto"
          sizes="15vw"
        />
      ) : (
        <Image
          priority
          src={"/name.png"}
          width={220}
          height={70}
          alt="Travan assinatura"
          className="h-[50px] lg:h-[70px] w-auto"
          sizes="15vw"
        />
      )}
    </>
  );
};

export default HeaderLogo;
