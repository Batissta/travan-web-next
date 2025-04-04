"use client";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
import { Button } from "../ui/button";
import LabelInput from "./LabelInput";

const SignUpForm = () => {
  // const [name, setName] = React.useState<string>("");
  // const [email, setEmail] = React.useState<string>("");
  // const [password, setPassword] = React.useState<string>("");
  // const [confirm, setConfirm] = React.useState<string>("");
  const [type, setType] = React.useState<string>("passageiro");

  return (
    <form
      className="flex flex-col gap-4 mb-8"
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
      <RadioGroup className="grid grid-cols-2 gap-4">
        <label
          htmlFor="passageiro"
          onClick={() => {
            setType("passageiro");
          }}
          className={`rounded-2xl py-4 px-6 gap-2 text-zinc-50 checked:bg-zinc-900 checked:text-zinc-900 flex flex-col justify-center items-center ${
            type !== "passageiro" ? "bg-zinc-200" : "bg-zinc-950"
          }`}
        >
          <RadioGroupItem
            value="passageiro"
            id="passageiro"
            checked={type === "passageiro"}
            className="hidden"
          />
          <div className="flex flex-col">
            <h1
              className={`text-zinc-50 text-center ${
                type !== "passageiro" ? "text-zinc-950" : "text-zinc-200"
              }`}
            >
              Passageiro
            </h1>
            <span
              className={`text-zinc-400 text-xs text-center ${
                type !== "passageiro" ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Você veio buscar caronas
            </span>
          </div>
        </label>

        <label
          htmlFor="motorista"
          onClick={() => {
            setType("motorista");
          }}
          className={`rounded-2xl py-4 px-6 gap-2 text-zinc-50 flex flex-col justify-center items-center  ${
            type !== "motorista" ? "bg-zinc-200" : "bg-zinc-950"
          }`}
        >
          <RadioGroupItem
            value="motorista"
            checked={type === "motorista"}
            id="motorista"
            className="hidden"
          />
          <div className="flex flex-col">
            <h1
              className={`text-zinc-50 text-center ${
                type !== "motorista" ? "text-zinc-950" : "text-zinc-200"
              }`}
            >
              Motorista
            </h1>
            <span
              className={`text-zinc-400 text-xs text-center ${
                type !== "motorista" ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Você veio oferecer caronas
            </span>
          </div>
        </label>
      </RadioGroup>
      <Button className="py-6 cursor-pointer">Entrar</Button>
    </form>
  );
};

export default SignUpForm;
