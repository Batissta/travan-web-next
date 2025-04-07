import React from "react";
import { motion } from "motion/react";
import { Bus, BusFront, Car } from "lucide-react";

type ChooseVehicleProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  logo: "bus" | "van" | "car";
};

const ButtonChooseVehicle = ({ value, setValue, logo }: ChooseVehicleProps) => {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.05,
        y: -5,
        rotate: "0deg",
      }}
      whileTap={{
        scale: 0.95,
        y: -0,
        rotate: "11.25deg",
      }}
      onClick={() => setValue(logo)}
      className={`alternates font-[600] px-4 py-2 border border-(--color-two) rounded-2xl cursor-pointer text-(--color-two) flex flex-col items-center justify-center ${
        value === logo && "bg-(--color-two) text-slate-950 border-slate-950"
      }`}
    >
      {logo === "bus" && (
        <>
          <Bus width={24} height={24} />
          <p className="hidden md:block">Ônibus</p>
        </>
      )}
      {logo === "van" && (
        <>
          <BusFront width={24} height={24} />
          <p className="hidden md:block">Van</p>
        </>
      )}
      {logo === "car" && (
        <>
          <Car width={24} height={24} />
          <p className="hidden md:block">Carro</p>
        </>
      )}
    </motion.button>
  );
};

export default ButtonChooseVehicle;
