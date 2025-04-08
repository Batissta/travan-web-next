"use server";
import { registerSchema, TRegisterSchema } from "@/types/RegisterTypes";

const API_KEY = `http://localhost:2005`;

export const createUser = async (payload: TRegisterSchema) => {
  const payloadVerification = registerSchema.safeParse(payload);
  if (!payloadVerification.success) return;
  const response = await fetch(`${API_KEY}/api/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return { id: data.usuario.id, nome: data.usuario.nome };
};
