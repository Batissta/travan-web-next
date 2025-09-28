"use server";
import { loginSchema, TLoginSchema } from "@/types/LoginTypes";
import { registerSchema, TRegisterSchema } from "@/types/RegisterTypes";
import { setCookies } from "./Cookies";

const API_KEY = `http://18.117.195.248:7070/`;

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

export const login = async (payload: TLoginSchema) => {
  const payloadVerification = loginSchema.safeParse(payload);
  if (!payloadVerification.success) return;
  const response = await fetch(`${API_KEY}/api/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  const success = data.authorization ? true : false;
  if (success) return setCookies("token", data.authorization);
  return {
    success,
  };
};
