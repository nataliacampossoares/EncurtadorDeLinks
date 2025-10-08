import db from "../../infra/database.js";
import { linksTable } from "../../infra/db/schema.js";

export class LinkRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return this.db.select().from(linksTable);
  }
}
