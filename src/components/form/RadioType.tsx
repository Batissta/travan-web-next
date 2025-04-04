"use client";
import { Dispatch, SetStateAction } from "react";

const RadioType = ({
  type,
  setType,
}: {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <label
        htmlFor="passageiro"
        onClick={() => {
          setType("passageiro");
        }}
        className={`${labelClassname} ${
          type !== "passageiro" ? "bg-zinc-50 border-zinc-600" : "bg-zinc-950"
        }`}
      >
        <div className="flex flex-col">
          <h1
            className={`text-center ${
              type !== "passageiro" ? "text-zinc-800" : "text-zinc-100"
            }`}
          >
            Passageiro
          </h1>
          <span
            className={`text-xs text-center ${
              type !== "passageiro" ? "text-zinc-600" : "text-zinc-300"
            }`}
          >
            Você veio encontrar caronas
          </span>
        </div>
      </label>

      <label
        htmlFor="motorista"
        onClick={() => {
          setType("motorista");
        }}
        className={`${labelClassname} ${
          type !== "motorista" ? "bg-zinc-50 border-zinc-600" : "bg-zinc-950"
        }`}
      >
        <div className="flex flex-col">
          <h1
            className={`text-center ${
              type !== "motorista" ? "text-zinc-800" : "text-zinc-100"
            }`}
          >
            Motorista
          </h1>
          <span
            className={`text-xs text-center ${
              type !== "motorista" ? "text-zinc-600" : "text-zinc-300"
            }`}
          >
            Você veio oferecer caronas
          </span>
        </div>
      </label>
    </div>
  );
};
const labelClassname = `cursor-pointer rounded-2xl py-2 px-4 gap-2 flex flex-col justify-center items-center border border-transparent shadow shadow-violet-800/20 duration-200`;

export default RadioType;
