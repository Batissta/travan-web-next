"use client";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import LabelInput from "./LabelInput";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegisterSchema } from "@/types/RegisterTypes";
import Error from "../helpers/Error";
import { createUser } from "@/server-actions/api";
import { eUsuarioTipo } from "@/types/LoginTypes";
import { RoleSelector } from "./RadioTypeV0";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const handleFormSubmit = async (data: TRegisterSchema) => {
    const response = await createUser({ ...data });
    console.log(response);
    reset();
  };
  return (
    <form
      className="flex flex-col gap-1 mb-6"
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
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
        <RoleSelector
          register={register}
          defaultValue={eUsuarioTipo.passageiro}
        />
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

export type TResolverSignUp = UseFormRegister<{
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  tipo: eUsuarioTipo;
}>;
