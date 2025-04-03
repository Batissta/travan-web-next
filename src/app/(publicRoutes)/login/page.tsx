import LabelInput from "@/components/form/LabelInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LoginPage = async () => {
  return (
    <div className="px-14 py-12 bg-zinc-50 flex items-center">
      <div className="w-[80%] mx-auto flex flex-col">
        <h1 className="text-4xl text-zinc-900 font-[800] mb2">Login</h1>
        <span className="text-zinc-700 mb-6">
          Faça seu login e embarque na viagem dos seus sonhos.
        </span>
        <form className="flex flex-col gap-4 mb-8" autoComplete="off">
          <LabelInput
            label="Endereço de email"
            htmlFor="email"
            type="email"
            icon={"email"}
            placeholder="seuemail@dominio.com.br"
          />
          <LabelInput
            label="Senha"
            htmlFor="password"
            type="password"
            icon={"password"}
            placeholder="******"
          />
          <Button className="py-6 cursor-pointer">Entrar</Button>
        </form>
        <span className="text-sm text-zinc-500 font-[600]">
          Ainda não possui cadastro?{" "}
          <Link
            className="text-zinc-900 font-[600] underline"
            href={"/cadastro"}
          >
            cadastre-se!
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
