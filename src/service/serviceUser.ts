// serviceUser.ts
import { prisma } from "../database/repositoryClient";

export class ServiceUser {
  async create(name: string, username: string) {
    return prisma.user.create({
      data: { name, username },
    });
  }
}
