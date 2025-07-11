import { Router } from 'express';
import { userController } from '../controllers/userController';

const router = Router();

router.post('/usuarios', userController.createUser);
router.post('/usuarios/:id/configuracao', userController.createUserConfig);
router.get('/usuarios', userController.listUsers);

export default router;
