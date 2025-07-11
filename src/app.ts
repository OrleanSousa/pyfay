import express from 'express';
import userRoutes from './routes/userRoutes';

/**
 * Inicializa a aplicação Express.
 */
const app = express();

/**
 * Middleware para interpretar o corpo das requisições como JSON.
 */
app.use(express.json());

/**
 * Middleware de rotas relacionadas ao usuário.
 */
app.use(userRoutes);

/**
 * Define a porta do servidor e inicia a aplicação.
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
