"use client";
import React from "react";
import LabelInput from "./LabelInput";
import { motion } from "motion/react";
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
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.99,
          rotate: "1deg",
        }}
        className="flex outline-none"
      >
        <Button className="py-4 cursor-pointer h-full w-full">Entrar</Button>
      </motion.div>
    </form>
  );
};

export default LoginForm;
