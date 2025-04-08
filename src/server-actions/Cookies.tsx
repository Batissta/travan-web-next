"use server";
import { cookies } from "next/headers";

export const setCookies = async (key: string, value: string) => {
  (await cookies()).set(key, value, {
    httpOnly: true,
  });
  return { success: true, key, value };
};

export const getCookies = async (key: string) => {
  const value = (await cookies()).get(key);
  return value;
};
