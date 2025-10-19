import { fastifyCors } from "@fastify/cors";
import Fastify from "fastify";
import { linkRoutes } from "./modules/routes/link.route.js";

const app = Fastify({
  logger: false,
});

app.register(linkRoutes);
app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

app.setErrorHandler((error, _, reply) => {
  const statusCode = error.statusCode ?? 500;

  reply.status(statusCode).send({
    message: error.message || "Erro interno do servidor",
    code: error.code || "INTERNAL_ERROR",
  });
});

const port = process.env.PORT || 8080;

try {
  app.listen({ host: "0.0.0.0", port }).then(() => {
    console.log(`Server running at http://localhost:${port}/api`);
  });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
