"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import LabelInput from "./LabelInput";
import { motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripSchema, TTripSchema } from "@/types/SearchTypes";

const SearchTripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TTripSchema>({ resolver: zodResolver(tripSchema) });
  return (
    <form
      className="flex flex-col gap-4 my-6"
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        console.log("Form is being submitted.");
        console.log(data);
        console.log("Form has been submitted.");
        reset();
      })}
    >
      <div>
        <LabelInput
          {...register("origin", { required: "A origem é obrigatória" })}
          htmlFor="origin"
          type="text"
          icon={"pin"}
          placeholder="Salvador - BA"
          className="placeholder:text-zinc-400 text-zinc-200"
        />
        <p className="text-red-400/70">{`${
          errors.origin ? errors.origin.message : ""
        }`}</p>
      </div>

      <div>
        <LabelInput
          {...register("destiny", { required: "O destino é obrigatório" })}
          htmlFor="destiny"
          type="text"
          icon={"pin"}
          placeholder="Campina Grande - PB"
          className="placeholder:text-zinc-400 text-zinc-200"
        />
        <p className="text-red-400/70">{`${
          errors.destiny ? errors.destiny.message : ""
        }`}</p>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.99,
          rotate: "1deg",
        }}
        className="mt-6 flex outline-none"
      >
        <Button
          disabled={isSubmitting}
          type="submit"
          className="py-3 cursor-pointer h-full w-full bg-(--color-two) hover:bg-(--color-one)"
        >
          Confirmar
        </Button>
      </motion.div>
    </form>
  );
};

export default SearchTripForm;
