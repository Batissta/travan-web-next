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
    <div className="bg-blue-900/10 min-h-auto p-14 font-(font-family:--font-poppins) grid grid-cols-[44fr_56fr] overflow-x-hidden">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
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
      {/* <div className="w-full relative">
        <div className="bg-(--color-one) absolute top-0 bottom-0 left-0 right-[-56px] h-full rounded-l-4xl p-12 pr-[104px]">
          <div className="grid gap-2">
            <TextGenerateEffect
              className="font-(family-name:--font-poppins)"
              duration={1}
              filter={false}
              words={words}
            />
            <motion.p
              className="text-slate-800"
              initial={{
                opacity: 0,
                x: "50vh",
              }}
              animate={{
                opacity: 1,
                x: "0",
              }}
              transition={{
                duration: 3,
              }}
            >
              Saiba como funcionam os planos de assinatura!
            </motion.p>
            <Separator className="mb-10" />
            <div className="grid grid-cols-2 items-center gap-4">
              <motion.div
                className="bg-slate-950 rounded-2xl border border-(--color-two) p-4"
                initial={{
                  opacity: 0,
                  y: "50px",
                }}
                animate={{
                  opacity: 1,
                  y: "0",
                }}
                transition={{
                  duration: 3,
                }}
              >
                <h2 className="text-(--color-one) text-xl font-extrabold">
                  Caronas com assinatura!
                </h2>
                <Separator className="bg-(--color-one)" />
                <p className="text-(--color-two) text-sm">
                  O melhor plano para você estudante e trabalhador!
                </p>
                <Button className="bg-transparent border border-slate-400/20 mt-2 self-end hover:bg-transparent">
                  <MoveRight />
                </Button>
              </motion.div>
              <motion.div
                className="bg-slate-950 rounded-2xl border border-(--color-two) p-4"
                initial={{
                  opacity: 0,
                  y: "50px",
                }}
                animate={{
                  opacity: 1,
                  y: "0",
                }}
                transition={{
                  duration: 3,
                }}
              >
                <h2 className="text-(--color-one) text-xl font-extrabold">
                  Caronas com assinatura!
                </h2>
                <Separator className="bg-(--color-one)" />
                <p className="text-(--color-two) text-sm">
                  O melhor plano para você estudante e trabalhador!
                </p>
                <Button className="bg-transparent border border-slate-400/20 mt-2 self-end hover:bg-transparent">
                  <MoveRight />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
