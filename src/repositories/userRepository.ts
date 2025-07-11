import { prisma } from '../primaClient'; // Aqui você exporta sua instância Prisma

interface UserData {
  nome: string;
  idade: number;
  email: string;
}

interface ConfigData {
  tema: string;
  emailNotificacoes: boolean;
  usuarioId: number;
}

export const userRepository = {
  async createUser(data: UserData) {
    return prisma.usuario.create({ data });
  },

  async createUserConfig(data: ConfigData) {
    return prisma.configuracaoUsuario.create({ data });
  },

  async listUsers() {
    return prisma.usuario.findMany({
      include: { configuracoes: true },
    });
  },
};
