import { prisma } from "../database/repositoryClient";

export class ServiceTechnology {
  async list(userId: string) {
    return prisma.technology.findMany({
      where: { userId },
    });
  }

  async create(title: string, deadline: Date, user: any) {
    return prisma.technology.create({
      data: {
        title,
        deadline,
        User: { connect: { id: user.id } },
      },
    });
  }

  async update(id: string, title: string, deadline: Date, user: any) {
    const technology = await prisma.technology.findUnique({
      where: { id },
    });

    if (!technology || technology.userId !== user.id) {
      throw new Error("Technology not found");
    }

    return prisma.technology.update({
      where: { id },
      data: { title, deadline },
    });
  }

  async updateStatus(id: string, user: any) {
    const technology = await prisma.technology.findUnique({
      where: { id },
    });

    if (!technology || technology.userId !== user.id) {
      throw new Error("Technology not found");
    }

    return prisma.technology.update({
      where: { id },
      data: { studied: !technology.studied },
    });
  }

  async delete(id: string, user: any) {
    const technology = await prisma.technology.findUnique({
      where: { id },
    });

    if (!technology || technology.userId !== user.id) {
      throw new Error("Technology not found");
    }

    return prisma.technology.delete({
      where: { id },
    });
  }
}