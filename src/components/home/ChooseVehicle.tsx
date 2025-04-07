"use client";
import ButtonChooseVehicle from "./ButtonChooseVehicle";

const ChooseVehicle = ({
  vehicle,
  setVehicle,
}: {
  vehicle: string;
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ButtonChooseVehicle value={vehicle} setValue={setVehicle} logo="bus" />
      <ButtonChooseVehicle value={vehicle} setValue={setVehicle} logo="van" />
      <ButtonChooseVehicle value={vehicle} setValue={setVehicle} logo="car" />
    </div>
  );
};

export default ChooseVehicle;
