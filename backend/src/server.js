import Fastify from "fastify";
import { linkRoutes } from "./modules/routes/link.route.js";

const app = Fastify({
  logger: true,
});

app.register(linkRoutes, { prefix: "/api" });

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
