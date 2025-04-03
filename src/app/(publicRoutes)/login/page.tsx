import LabelInput from "@/components/form/LabelInput";
import React from "react";

const page = async () => {
  return (
    <div className="px-14 py-12 bg-zinc-50 flex items-center">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl text-zinc-900 font-[600]">Login</h1>
          <span className="text-zinc-900">
            Faça seu login e embarque na viagem dos seus sonhos.
          </span>
        </div>
        <form className="flex flex-col gap-4">
          <LabelInput label="Endereço de email" htmlFor="email" type="email" />
          <LabelInput label="Senha" htmlFor="password" type="password" />
        </form>
      </div>
    </div>
  );
};

export default page;
