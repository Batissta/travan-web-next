"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import LabelInput from "./LabelInput";
import { motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripSchema, TTripSchema } from "@/types/SearchTypes";
import Error from "../helpers/Error";
import { Search } from "lucide-react";
import ChooseVehicle from "../home/ChooseVehicle";

const SearchTripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TTripSchema>({ resolver: zodResolver(tripSchema) });
  const [vehicle, setVehicle] = useState<string>("bus");
  return (
    <form
      className="flex flex-col gap-3 my-6"
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        console.log("Form is being submitted.");
        console.log(data);
        console.log("Form has been submitted.");
        reset();
      })}
    >
      <ChooseVehicle vehicle={vehicle} setVehicle={setVehicle} />
      <div className="mt-2">
        <LabelInput
          {...register("origin", { required: "A origem é obrigatória" })}
          htmlFor="origin"
          type="text"
          icon={"pin"}
          placeholder="Ponto um"
          className="placeholder:text-zinc-400 text-zinc-200"
        />
        <Error error={errors.origin && errors.origin.message} />
      </div>

      <div>
        <LabelInput
          {...register("destiny", { required: "O destino é obrigatório" })}
          htmlFor="destiny"
          type="text"
          icon={"pin"}
          placeholder="Ponto dois"
          className="placeholder:text-zinc-400 text-zinc-200"
        />
        <Error error={errors.destiny && errors.destiny.message} />
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.99,
          rotate: "1deg",
        }}
        className="mt-4 flex outline-none"
      >
        <Button
          disabled={isSubmitting}
          type="submit"
          className="py-3 cursor-pointer h-full w-full bg-(--color-two) hover:bg-(--color-one)"
        >
          Procurar caronas <Search />
        </Button>
      </motion.div>
    </form>
  );
};

export default SearchTripForm;
