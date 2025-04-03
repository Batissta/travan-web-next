"use client";
import { BadgePlus, Files, Fingerprint } from "lucide-react";
import Link from "next/link";
import React from "react";
import useMedia from "@/hooks/useMedia";
import HeaderNavMobile from "./HeaderNavMobile";

enum ePaths {
  viagens = "/viagens",
  perfil = "/perfil",
  caronas = "/caronas",
}

const HeaderNav = () => {
  const mobile = useMedia("(width <= 840px)");
  if (!mobile)
    return (
      <nav>
        <ul className="flex gap-4 items-center text-zinc-200 uppercase">
          <Link
            href={ePaths.viagens}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <BadgePlus />
              Viagens
            </li>
          </Link>
          <Link
            href={ePaths.perfil}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <Files />
              Suas caronas
            </li>
          </Link>
          <Link
            href={ePaths.caronas}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <Fingerprint />
              Perfil
            </li>
          </Link>
        </ul>
      </nav>
    );
  return <HeaderNavMobile />;
};

export default HeaderNav;
