"use client";
import React from "react";
import SearchTripForm from "@/components/form/SearchTripForm";
import ChooseVehicle from "@/components/home/ChooseVehicle";
// import { TextGenerateEffect } from "@/components/ui/GeneratedWord";
// import { motion } from "motion/react";
// import Separator from "@/components/ui/Separator";
// import { Button } from "@/components/ui/button";
// import { MoveRight } from "lucide-react";

// const words = `Cansado de ir de ônibus para o trabalho? Aqui você pode pegar caronas com assinatura!`;

const HomePage = () => {
  return (
    <div className="bg-blue-900/10 min-h-auto p-14 font-(font-family:--font-poppins) grid grid-cols-2 overflow-x-hidden justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-(--color-one) w-fit">
            Vá a qualquer lugar com o App do Travan
          </h1>
          <p className="text-xl font-semibold mb-8 text-(--color-two) w-fit">
            Seu próximo destino te espera. Explore, descubra e viva novas
            experiências!
          </p>
        </div>
        <div className="flex flex-col w-[80%]">
          <div className="flex flex-col col-start-2">
            <ChooseVehicle />
            <SearchTripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
