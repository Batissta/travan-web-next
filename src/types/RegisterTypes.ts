import { z } from "zod";
import { eUsuarioTipo } from "./LoginTypes";

export const registerSchema = z
  .object({
    nome: z
      .string()
      .nonempty("This field can't be empty")
      .min(2, "O nome deve ter pelo menos 2 caracteres!")
      .max(20, "O nome deve ter no máximo 20 caracteres!"),
    email: z
      .string()
      .nonempty("This field can't be empty")
      .trim()
      .toLowerCase()
      .email("E-mail inválido!"),
    senha: z
      .string()
      .nonempty("This field can't be empty")
      .min(4, "Sua senha deve conter pelo menos 4 caracteres!"),
    confirmaSenha: z
      .string()
      .nonempty("This field can't be empty")
      .min(4, "Sua senha deve conter pelo menos 4 caracteres!"),
    tipo: z.nativeEnum(eUsuarioTipo),
  })
  .refine((data) => data.senha === data.confirmaSenha, {
    message: "As senhas devem ser iguais",
    path: ["confirmaSenha"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;
