import { pgTable, varchar, timestamp, integer, uuid } from "drizzle-orm/pg-core"

export const linksTable = pgTable("links", {
	urlOriginal: varchar("url_original", { length: 255 }),
	legenda: varchar({ length: 255 }),
	codigo: varchar({ length: 20 }),
	dataCriacao: timestamp("data_criacao", { mode: 'string' }),
	numeroCliques: integer("numero_cliques"),
	id: uuid().primaryKey().notNull(),
});
