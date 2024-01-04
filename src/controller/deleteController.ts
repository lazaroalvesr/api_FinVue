import { FastifyReply, FastifyRequest } from "fastify";
import { DeletePrismaUser } from "../service/deleteService";

class DeleteController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };
    const deleteprisma = new DeletePrismaUser();
    const deleteUser = await deleteprisma.execute({ id });
    rep.send(deleteUser);
  }
}

export { DeleteController };
