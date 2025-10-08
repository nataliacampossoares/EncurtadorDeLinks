import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const linksTable = pgTable("links", {
  url_original: varchar({ length: 255 }),
  legenda: varchar({ length: 255 }),
  codigo: varchar({ length: 20 }),
  data_criacao: timestamp({ mode: "string" }),
  numero_cliques: integer(),
  id: uuid().primaryKey().notNull(),
});
