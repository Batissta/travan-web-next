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
      className={`p-4 border border-(--color-two) rounded-2xl cursor-pointer text-(--color-two) ${
        value === logo && "bg-(--color-two) text-blue-950 border-blue-950"
      }`}
    >
      {logo === "bus" && <Bus width={38} height={38} />}
      {logo === "van" && <BusFront width={38} height={38} />}
      {logo === "car" && <Car width={38} height={38} />}
    </motion.button>
  );
};

export default ButtonChooseVehicle;
