import { prisma } from "../prisma/prisma";

interface deleteProps {
  id: string;
}

class DeletePrismaUser {
  async execute({ id }: deleteProps) {
    if (!id) {
      throw new Error("id is required");
    
    }
    const idDelete = await prisma.bank.findFirst({
      where: {
        id: id,
      },
    });

    if (!idDelete) {
      throw new Error("delete user not found");
    }

    await prisma.bank.delete({
      where: {
        id: idDelete?.id,
      },
    });

    return idDelete;
  }
}

export { DeletePrismaUser };
