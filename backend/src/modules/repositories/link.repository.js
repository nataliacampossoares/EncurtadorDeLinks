import db from "../../infra/database.js";
import { linksTable } from "../../infra/db/schema.js";

export class LinkRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return await this.db.select().from(linksTable);
  }

  async create({ url_original, legenda, codigo }) {
    const result = await this.db
      .insert(linksTable)
      .values({
        id: crypto.randomUUID(),
        codigo,
        legenda,
        urlOriginal: url_original,
        dataCriacao: new Date().toISOString(),
        numeroCliques: 0,
      })
      .returning();

    return result[0];
  }
}
