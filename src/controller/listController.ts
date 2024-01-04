import { FastifyReply, FastifyRequest } from "fastify";
import { BankList } from "../service/BankList";

class BankController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const list = new BankList();
    const moneys = await list.execute();
    rep.send(moneys);
  }
}

export { BankController };
