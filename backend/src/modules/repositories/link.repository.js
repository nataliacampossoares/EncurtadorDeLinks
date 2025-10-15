import { eq, ilike } from "drizzle-orm";
import db from "../../infra/database.js";
import { linksTable } from "../../infra/db/schema.js";

export class LinkRepository {
  constructor() {
    this.db = db;
  }

  async findAll(legenda) {
    if (legenda) {
      return await this.db
        .select()
        .from(linksTable)
        .where(ilike(linksTable.legenda, `%${legenda}%`));
    }
    return await this.db.select().from(linksTable);
  }

  async create({ url_original, legenda, codigo }) {
    const result = await this.db
      .insert(linksTable)
      .values({
        id: crypto.randomUUID(),
        codigo,
        legenda,
        url_original,
        data_criacao: new Date().toISOString(),
        numero_cliques: 0,
      })
      .returning();

    return result[0];
  }

  async delete(id) {
    await this.db.delete(linksTable).where(eq(linksTable.id, id));
  }

  async getById(id) {
    const result = await this.db
      .select()
      .from(linksTable)
      .where(eq(linksTable.id, id))
      .limit(1);

    return result[0];
  }

  async update(id, { url_original, legenda, codigo, numero_cliques }) {
    const result = await this.db
      .update(linksTable)
      .set({ url_original, legenda, codigo, numero_cliques })
      .where(eq(linksTable.id, id))
      .returning();

    return result[0];
  }

  async getByCode(code) {
    const result = await this.db
      .select()
      .from(linksTable)
      .where(eq(linksTable.codigo, code))
      .limit(1);

    return result[0];
  }
}
