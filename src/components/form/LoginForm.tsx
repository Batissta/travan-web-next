"use client";
import React, { useState } from "react";
import LabelInput from "./LabelInput";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginSchema } from "@/types/LoginTypes";
import Error from "../helpers/Error";
import { login } from "@/server-actions/api";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const handleSubmitForm = async (data: TLoginSchema) => {
    const response = await login(data);
    if (response?.success) {
      return router.push("/");
    }
    reset();
    setError("Credênciais Inválidas!");
  };

  return (
    <form
      className="flex flex-col gap-1 mb-8"
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
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
          Entrar
        </Button>
      </motion.div>
      <Error error={error && error} />
    </form>
  );
};

export default LoginForm;
