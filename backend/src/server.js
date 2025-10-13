import Fastify from "fastify";
import { linkRoutes } from "./modules/routes/link.route.js";

const app = Fastify({
  logger: false,
});

app.register(linkRoutes);

app.setErrorHandler((error, _, reply) => {
  const statusCode = error.statusCode ?? 500;

  reply.status(statusCode).send({
    message: error.message || "Erro interno do servidor",
    code: error.code || "INTERNAL_ERROR",
  });
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
