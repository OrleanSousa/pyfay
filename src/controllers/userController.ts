import { Request, Response } from 'express';
import { userService } from '../services/userService';

/**
 * Controller responsável por gerenciar as requisições relacionadas ao usuário.
 */
export const userController = {
  /**
   * Cria um novo usuário.
   * Espera os dados do usuário no corpo da requisição (req.body).
   * Retorna o usuário criado com status 201 ou erro com status 400.
   */
  async createUser(req: Request, res: Response) {
    try {
      const novoUsuario = await userService.createUser(req.body);
      res.status(201).json(novoUsuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  /**
   * Cria uma configuração para um usuário existente.
   * Espera o ID do usuário na URL (req.params.id) e os dados da configuração no corpo da requisição.
   * Retorna a configuração criada com status 201 ou erro com status 400.
   */
  async createUserConfig(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = { ...req.body, usuarioId: Number(id) };
      const configuracao = await userService.createUserConfig(data);
      res.status(201).json(configuracao);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  /**
   * Lista todos os usuários cadastrados.
   * Retorna um array de usuários ou erro com status 500.
   */
  async listUsers(_req: Request, res: Response) {
    try {
      const usuarios = await userService.listUsers();
      res.json(usuarios);
    } catch (error: any) {
      res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
    }
  },
};
