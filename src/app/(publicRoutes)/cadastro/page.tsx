import SignUpForm from "@/components/form/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUpPage = async () => {
  return (
    <div className="px-14 py-12 bg-zinc-50 flex items-center">
      <div className="w-[80%] mx-auto flex flex-col">
        <h1 className="text-4xl text-zinc-900 font-[800] mb2">Cadastre-se</h1>
        <span className="text-zinc-700 mb-6">
          Faça o seu cadastro e encontre caronas para o seu destino!
        </span>
        <SignUpForm />
        <span className="text-sm text-zinc-500 font-[600]">
          Já possui uma conta?{" "}
          <Link className="text-zinc-900 font-[600] underline" href={"/login"}>
            realize o login!
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
