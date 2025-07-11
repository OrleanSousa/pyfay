import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const novoUsuario = await userService.createUser(req.body);
      res.status(201).json(novoUsuario);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

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

  async listUsers(_req: Request, res: Response) {
    try {
      const usuarios = await userService.listUsers();
      res.json(usuarios);
    } catch (error: any) {
      res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
    }
  },
};
