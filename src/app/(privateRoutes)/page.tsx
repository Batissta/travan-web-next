import ChooseVehicle from "@/components/home/ChooseVehicle";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-blue-900/10 min-h-screen p-14 font-(font-family:--font-poppins) grid grid-cols-[44fr_56fr]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-(--color-one)">
            Vá a qualquer lugar com o App do Travan
          </h1>
          <p className="text-xl font-semibold mb-8 text-(--color-two)">
            Seu próximo destino te espera. Explore, descubra e viva novas
            experiências!
          </p>
        </div>
        <ChooseVehicle />
      </div>
    </div>
  );
};

export default HomePage;
