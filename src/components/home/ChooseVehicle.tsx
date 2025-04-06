"use client";
import React, { useState } from "react";
import ButtonChooseVehicle from "./ButtonChooseVehicle";

const ChooseVehicle = () => {
  const [value, setValue] = useState<string>("bus");
  return (
    <div className="flex gap-4 justify-between px-1">
      <ButtonChooseVehicle value={value} setValue={setValue} logo="bus" />
      <ButtonChooseVehicle value={value} setValue={setValue} logo="van" />
      <ButtonChooseVehicle value={value} setValue={setValue} logo="car" />
    </div>
  );
};

export default ChooseVehicle;
