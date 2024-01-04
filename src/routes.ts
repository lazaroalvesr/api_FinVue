import {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
import { CreateController } from "./controller/CreateController";
import { BankController } from "./controller/listController";
import { DeleteController } from "./controller/deleteController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post("/views", async (req: FastifyRequest, rep: FastifyReply) => {
    return new CreateController().handle(req, rep);
  });

  fastify.get("/views", async (req: FastifyRequest, rep: FastifyReply) => {
    return new BankController().handle(req, rep);
  });

  fastify.delete("/views", async (req: FastifyRequest, rep: FastifyReply) => {
    return new DeleteController().handle(req, rep);
  });
};
