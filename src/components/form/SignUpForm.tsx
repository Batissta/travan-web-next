"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import LabelInput from "./LabelInput";
import RadioType from "./RadioType";

const SignUpForm = () => {
  // const [name, setName] = React.useState<string>("");
  // const [email, setEmail] = React.useState<string>("");
  // const [password, setPassword] = React.useState<string>("");
  // const [confirm, setConfirm] = React.useState<string>("");
  const [type, setType] = useState<string>("passageiro");

  return (
    <form
      className="flex flex-col gap-4 mb-6"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <LabelInput
        label="Digite o seu nome"
        htmlFor="name"
        type="text"
        icon={"personality"}
        placeholder="Marco Aurélio"
      />
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
      <LabelInput
        label="Confirme sua senha"
        htmlFor="passwordConfirmation"
        type="password"
        icon={"password"}
        placeholder="******"
      />
      <div>
        <label className="block mb-2">Tipo</label>
        <RadioType type={type} setType={setType} />
      </div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.99,
          rotate: "1deg",
        }}
        className="flex outline-none"
      >
        <Button className="py-3 cursor-pointer h-full w-full">Cadastrar</Button>
      </motion.div>
    </form>
  );
};

export default SignUpForm;
