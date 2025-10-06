import { LinkController } from "../controllers/link.controller.js";

const controller = new LinkController();

export async function linkRoutes(fastify, options) {
  fastify.get("/links", async (request, reply) => {
    return controller.getLinks(request, reply);
  });
}
