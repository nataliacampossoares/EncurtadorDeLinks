import { nanoid } from "nanoid";
import { linkSchema } from "../../schemas/link.schema.js";

export class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
  }

  async getAllLinks() {
    return await this.linkRepository.findAll();
  }

  async createLink({ url_original, legenda }) {
    const result = linkSchema.safeParse({ url_original, legenda });

    if (!result.success) {
      throw new Error(result.error.issues.map((err) => err.message).join(", "));
    }

    const codigo = nanoid(6);

    return await this.linkRepository.create({ url_original, legenda, codigo });
  }
}
