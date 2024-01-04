import { prisma } from "../prisma/prisma";

interface CreateProps {
  entrada: string;
  saida: string;
  tipo: string;
}

class CreateService {
  async execute({ entrada, saida, tipo }: CreateProps) {
    if (!entrada || !tipo) {
      throw new Error("both is required");
    }

    const bankCreate = await prisma.bank.create({
      data: {
        entrada,
        saida,
        tipo
      },
    });

    return bankCreate;
  }
}

export { CreateService };
