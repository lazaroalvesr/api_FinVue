import { FastifyReply, FastifyRequest } from "fastify";
import { CreateService } from "../service/createService";

class CreateController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { entrada, saida, tipo } = req.body as {
      entrada: string;
      saida: string;
      tipo: string;
    };

    const bankC = new CreateService();
    const createTable = await bankC.execute({ entrada, saida, tipo });
    rep.send(createTable);
  }
}

export { CreateController };
