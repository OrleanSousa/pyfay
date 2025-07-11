"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
// Rota para criar usuário
app.post('/usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, idade, email } = req.body;
    if (idade < 18) {
        return res.status(400).json({ error: 'Usuário deve ter 18 anos ou mais' });
    }
    try {
        const novoUsuario = yield prisma.usuario.create({
            data: { nome, idade, email },
        });
        res.status(201).json(novoUsuario);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário', details: error });
    }
}));
// Rota para criar configuração de usuário
app.post('/usuarios/:id/configuracao', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tema, emailNotificacoes } = req.body;
    if (!['dark', 'medium', 'light'].includes(tema)) {
        return res.status(400).json({ error: 'Tema inválido' });
    }
    try {
        const configuracao = yield prisma.configuracaoUsuario.create({
            data: {
                tema,
                emailNotificacoes,
                usuarioId: Number(id),
            },
        });
        res.status(201).json(configuracao);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar configuração', details: error });
    }
}));
// Rota para listar usuários
app.get('/usuarios', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield prisma.usuario.findMany({
            include: { configuracoes: true },
        });
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários', details: error });
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
