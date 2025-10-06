import { dbPool } from "../../infra/database.js";

export class LinkRepository {
  constructor() {
    this.db = dbPool;
  }

  async findAll() {
    const result = await this.db.query("SELECT * FROM links");
    return result.rows;
  }
}
