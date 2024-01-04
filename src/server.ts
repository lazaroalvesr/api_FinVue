import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

const start = async () => {
  await app.register(routes);
  await app.register(cors);

  try {
    await app.listen({ port: 3334 });
  } catch (e) {
    console.log(e);
  }
};

start();
