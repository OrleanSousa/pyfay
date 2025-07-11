import { userRepository } from '../repositories/userRepository';

/**
 * Serviço responsável pela lógica de negócio relacionada ao usuário.
 * Realiza validações antes de acessar o repositório.
 */
export const userService = {
  /**
   * Cria um novo usuário após validar a idade.
   * @param data Dados do usuário (nome, idade, email)
   * @throws Erro se a idade for menor que 18 anos
   * @returns Usuário criado
   */
  async createUser(data: { nome: string; idade: number; email: string }) {
    if (data.idade < 18) {
      throw new Error('Usuário deve ter 18 anos ou mais');
    }
    return userRepository.createUser(data);
  },

  /**
   * Cria uma configuração para um usuário após validar o tema.
   * @param data Dados da configuração (tema, emailNotificacoes, usuarioId)
   * @throws Erro se o tema não for válido
   * @returns Configuração criada
   */
  async createUserConfig(data: { tema: string; emailNotificacoes: boolean; usuarioId: number }) {
    const temasValidos = ['dark', 'medium', 'light'];
    if (!temasValidos.includes(data.tema)) {
      throw new Error('Tema inválido');
    }
    return userRepository.createUserConfig(data);
  },

  /**
   * Lista todos os usuários cadastrados.
   * @returns Array de usuários
   */
  async listUsers() {
    return userRepository.listUsers();
  },
};
