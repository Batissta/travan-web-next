"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import LabelInput from "./LabelInput";
import RadioType from "./RadioType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegisterSchema } from "@/types/RegisterTypes";
import Error from "../helpers/Error";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const [type, setType] = useState<string>("passageiro");

  return (
    <form
      className="flex flex-col gap-1 mb-6"
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      <div>
        <LabelInput
          {...register("nome")}
          label="Digite o seu nome"
          htmlFor="name"
          type="text"
          icon={"personality"}
          placeholder="Marco Aurélio"
        />
        <Error error={errors.nome && errors.nome.message} />
      </div>
      <div>
        <LabelInput
          {...register("email")}
          label="Endereço de email"
          htmlFor="email"
          type="email"
          icon={"email"}
          placeholder="seuemail@dominio.com.br"
        />
        <Error error={errors.email && errors.email.message} />
      </div>

      <div>
        <LabelInput
          {...register("senha")}
          label="Senha"
          htmlFor="password"
          type="password"
          icon={"password"}
          placeholder="******"
        />
        <Error error={errors.senha && errors.senha.message} />
      </div>

      <div>
        <LabelInput
          {...register("confirmaSenha")}
          label="Confirme sua senha"
          htmlFor="passwordConfirmation"
          type="password"
          icon={"password"}
          placeholder="******"
        />
        <Error error={errors.confirmaSenha && errors.confirmaSenha.message} />
      </div>

      <div className="mb-2">
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
        <Button
          type="submit"
          disabled={isSubmitting}
          className="py-3 cursor-pointer h-full w-full"
        >
          Cadastrar
        </Button>
      </motion.div>
    </form>
  );
};

export default SignUpForm;
