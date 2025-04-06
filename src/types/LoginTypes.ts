import { z } from "zod";

export enum eUsuarioTipo {
  motorista = "motorista",
  passageiro = "passageiro",
}

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .trim()
    .toLowerCase()
    .email("E-mail inválido!"),
  senha: z
    .string()
    .nonempty("Password is required")
    .min(4, "Sua senha deve conter pelo menos 4 caracteres!"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
