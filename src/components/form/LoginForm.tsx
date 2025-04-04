"use client";
import React from "react";
import LabelInput from "./LabelInput";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <form
      className="flex flex-col gap-4 mb-8"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
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
  );
};

export default LoginForm;
