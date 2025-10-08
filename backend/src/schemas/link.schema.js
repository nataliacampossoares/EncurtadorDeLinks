import z from "zod";

export const linkSchema = z.object({
  url_original: z.url("URL Original Inválida").max(255),
  legenda: z.string("Legenda Inválida").max(255),
});
