"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { User, Car } from "lucide-react";
import { TResolverSignUp } from "./SignUpForm";
import { eUsuarioTipo } from "@/types/LoginTypes";

interface RoleSelectorProps {
  register: TResolverSignUp;
  defaultValue?: string;
}

export function RoleSelector({ register, defaultValue }: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<string>(defaultValue || "");

  const handleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <label
        className={cn(
          "relative flex-1 cursor-pointer rounded-2xl border p-2 shadow-sm transition-all",
          "hover:border-primary/50",
          selectedRole === eUsuarioTipo.passageiro
            ? "bg-zinc-950 border-zinc-600"
            : "border-border"
        )}
        onClick={() => handleSelect(eUsuarioTipo.passageiro)}
      >
        <input
          type="radio"
          className="sr-only"
          value={eUsuarioTipo.passageiro}
          {...register("tipo")}
          onChange={() => handleSelect(eUsuarioTipo.passageiro)}
          checked={selectedRole === eUsuarioTipo.passageiro}
        />
        <div className="flex flex-col items-center text-center">
          <User
            className={cn(
              "h-8 w-8 text-zinc-50",
              selectedRole === eUsuarioTipo.passageiro
                ? "text-zinc-200"
                : "text-zinc-700"
            )}
          />
          <h3
            className={cn(
              "font-medium",
              selectedRole === eUsuarioTipo.passageiro
                ? "text-zinc-200"
                : "text-zinc-700"
            )}
          >
            Passageiro
          </h3>
          <p
            className={cn(
              "text-sm text-muted-foreground",
              selectedRole === eUsuarioTipo.passageiro
                ? "text-zinc-400"
                : "text-zinc-600"
            )}
          >
            Preciso de uma carona
          </p>
        </div>
      </label>

      <label
        className={cn(
          "relative flex-1 cursor-pointer rounded-2xl border p-2 shadow-sm transition-all",
          "hover:border-primary/50",
          selectedRole === eUsuarioTipo.motorista
            ? "bg-zinc-950 border-zinc-600"
            : "border-border"
        )}
        onClick={() => handleSelect(eUsuarioTipo.motorista)}
      >
        <input
          type="radio"
          className="sr-only"
          value={eUsuarioTipo.motorista}
          {...register("tipo")}
          onChange={() => handleSelect(eUsuarioTipo.motorista)}
          checked={selectedRole === eUsuarioTipo.motorista}
        />
        <div className="flex flex-col items-center text-center">
          <Car
            className={cn(
              "h-8 w-8 text-zinc-50",
              selectedRole === eUsuarioTipo.motorista
                ? "text-zinc-200"
                : "text-zinc-700"
            )}
          />
          <h3
            className={cn(
              "font-medium",
              selectedRole === eUsuarioTipo.motorista
                ? "text-zinc-200"
                : "text-zinc-700"
            )}
          >
            Motorista
          </h3>
          <p
            className={cn(
              "text-sm text-muted-foreground",
              selectedRole === eUsuarioTipo.motorista
                ? "text-zinc-400"
                : "text-zinc-600"
            )}
          >
            Posso oferecer carona
          </p>
        </div>
      </label>
    </div>
  );
}
