import { z } from "zod";

export enum eUsuarioTipo {
  motorista = "motorista",
  passageiro = "passageiro",
}

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O campo email é obrigatório!")
    .trim()
    .toLowerCase()
    .email("E-mail inválido!"),
  senha: z
    .string()
    .nonempty("O campo senha é obrigatório!")
    .min(4, "Sua senha deve conter no mínimo 4 caracteres!"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
