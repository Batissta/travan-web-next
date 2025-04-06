import { z } from "zod";

export const tripSchema = z
  .object({
    origin: z.string().nonempty("Sua origem não pode estar vazia"),
    destiny: z.string().nonempty("Seu destino não pode estar vazio"),
  })
  .refine((data) => data.origin !== data.destiny, {
    message: "The destiny must be different from the origin",
    path: ["destiny"],
  });

export type TTripSchema = z.infer<typeof tripSchema>;
