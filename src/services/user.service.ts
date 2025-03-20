import prisma from '../prisma-client';

export class UserService {
  static async createUser(email: string, name?: string) {
    return prisma.user.create({
      data: { email, name },
    });
  }

  static async getAllUsers() {
    return prisma.user.findMany();
  }
}