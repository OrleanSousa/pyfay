import { prisma } from '../primaClient'; // Instância do Prisma Client

/**
 * Interface para os dados necessários na criação de um usuário.
 */
interface UserData {
  nome: string;
  idade: number;
  email: string;
}

/**
 * Interface para os dados necessários na criação de uma configuração de usuário.
 */
interface ConfigData {
  tema: string;
  emailNotificacoes: boolean;
  usuarioId: number;
}

/**
 * userRepository é responsável por acessar o banco de dados
 * e realizar operações relacionadas ao usuário e suas configurações.
 */
export const userRepository = {
  /**
   * Cria um novo usuário no banco de dados.
   * @param data Dados do usuário (nome, idade, email)
   * @returns Usuário criado
   */
  async createUser(data: UserData) {
    return prisma.usuario.create({ data });
  },

  /**
   * Cria uma nova configuração para um usuário.
   * @param data Dados da configuração (tema, emailNotificacoes, usuarioId)
   * @returns Configuração criada
   */
  async createUserConfig(data: ConfigData) {
    return prisma.configuracaoUsuario.create({ data });
  },

  /**
   * Lista todos os usuários cadastrados, incluindo suas configurações.
   * @returns Array de usuários com configurações
   */
  async listUsers() {
    return prisma.usuario.findMany({
      include: { configuracoes: true },
    });
  },
};
