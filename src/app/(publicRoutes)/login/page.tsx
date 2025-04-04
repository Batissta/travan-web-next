import React from "react";
import Link from "next/link";
import LoginForm from "@/components/form/LoginForm";

const LoginPage = () => {
  return (
    <div className="px-14 py-6 md:py-8 lg:py-12 bg-zinc-50 flex items-center justify-center">
      <div className="w-[100%] md:w-[90%] lg:w-[80%] flex flex-col">
        <h1 className="text-4xl text-zinc-900 font-[800] mb-2">Login</h1>
        <span className="text-zinc-700 mb-6">
          Faça seu login e encontre caronas para o seu destino!
        </span>
        <LoginForm />
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
