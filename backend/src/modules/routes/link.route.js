import { LinkController } from "../controllers/link.controller.js";
import { LinkRepository } from "../repositories/link.repository.js";
import { LinkService } from "../services/link.service.js";

const repository = new LinkRepository();
const service = new LinkService(repository);
const controller = new LinkController(service);

export async function linkRoutes(fastify, options) {
  fastify.get("/links", async (request, reply) => {
    return controller.getLinks(request, reply);
  });

  fastify.post("/links", async (request, reply) => {
    return controller.createLink(request, reply);
  });
}
