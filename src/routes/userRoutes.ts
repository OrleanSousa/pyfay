import { Router } from 'express';
import { userController } from '../controllers/userController';

/**
 * Define as rotas relacionadas ao usuário e suas configurações.
 */
const router = Router();

/**
 * Rota para criar um novo usuário.
 * Espera os dados do usuário no corpo da requisição.
 * POST /usuarios
 */
router.post('/usuarios', userController.createUser);

/**
 * Rota para criar uma configuração para um usuário existente.
 * Espera o ID do usuário na URL e os dados da configuração no corpo da requisição.
 * POST /usuarios/:id/configuracao
 */
router.post('/usuarios/:id/configuracao', userController.createUserConfig);

/**
 * Rota para listar todos os usuários cadastrados.
 * GET /usuarios
 */
router.get('/usuarios', userController.listUsers);

export default router;
