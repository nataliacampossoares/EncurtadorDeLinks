import { customAlphabet } from "nanoid";
import { linkSchema } from "../../schemas/link.schema.js";

const nanoid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6
);

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

    const codigo = nanoid();

    return await this.linkRepository.create({ url_original, legenda, codigo });
  }

  async deleteLink(id) {
    await this.getLinkById(id);
    return await this.linkRepository.delete(id);
  }

  async getLinkById(id) {
    const link = await this.linkRepository.getById(id);
    if (!link) {
      throw new Error("Link não encontrado");
    }
    return link;
  }

  async updateLink(id, payload) {
    if (id !== payload.id) {
      throw new Error("ID do link não corresponde ao ID do payload");
    }

    // Verifica se o link existe
    await this.getLinkById(id);

    const result = linkSchema.safeParse(payload);
    if (!result.success) {
      throw new Error(result.error.issues.map((err) => err.message).join(", "));
    }

    return await this.linkRepository.update(id, payload);
  }

  async getOriginalURL(code) {
    const link = await this.linkRepository.getByCode(code);
    if (!link) {
      throw new Error("Link não encontrado");
    }
    return link.url_original;
  }

  async incrementAccessCount(code) {
    const link = await this.linkRepository.getByCode(code);
    if (!link) {
      throw new Error("Link não encontrado");
    }
    link.numero_cliques += 1;
    await this.linkRepository.update(link.id, link);
  }
}
