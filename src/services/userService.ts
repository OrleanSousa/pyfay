import { userRepository } from '../repositories/userRepository';

export const userService = {
  async createUser(data: { nome: string; idade: number; email: string }) {
    if (data.idade < 18) {
      throw new Error('Usuário deve ter 18 anos ou mais');
    }
    return userRepository.createUser(data);
  },

  async createUserConfig(data: { tema: string; emailNotificacoes: boolean; usuarioId: number }) {
    const temasValidos = ['dark', 'medium', 'light'];
    if (!temasValidos.includes(data.tema)) {
      throw new Error('Tema inválido');
    }
    return userRepository.createUserConfig(data);
  },

  async listUsers() {
    return userRepository.listUsers();
  },
};
