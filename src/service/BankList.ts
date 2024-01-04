import { prisma } from "../prisma/prisma";

class BankList {
  async execute() {
    const listBank = await prisma.bank.findMany();
    return listBank
  }
}

export { BankList }