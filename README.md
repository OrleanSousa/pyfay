# API Usuários Express + Prisma

Este projeto é uma API REST desenvolvida com **Node.js**, **Express** e **Prisma ORM** para cadastro de usuários e suas configurações, utilizando banco de dados SQLite.

## Funcionalidades

- Cadastro de usuários (nome, idade, email)
- Cadastro de configurações para usuários (tema, emailNotificacoes)
- Listagem de usuários e suas configurações

## Estrutura

- `src/app.ts`: Inicialização da aplicação Express.
- `src/routes/userRoutes.ts`: Rotas relacionadas a usuários e configurações.
- `src/controllers/userController.ts`: Controladores das requisições.
- `src/services/userService.ts`: Lógica de negócio e validações.
- `src/repositories/userRepository.ts`: Acesso ao banco de dados via Prisma.
- `src/primaClient.ts`: Instância do Prisma Client.
- `prisma/schema.prisma`: Definição do modelo do banco de dados.

## Como rodar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute as migrações do banco:**
   ```bash
   npx prisma migrate dev
   ```

3. **Gere o Prisma Client:**
   ```bash
   npx prisma generate
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

## Testando a API

Use o [Postman](https://www.postman.com/) ou similar para enviar requisições:

### Criar usuário

- **POST** `/usuarios`
- **Body (JSON):**
  ```json
  {
    "nome": "João",
    "idade": 25,
    "email": "joao@email.com"
  }
  ```

### Criar configuração para usuário

- **POST** `/usuarios/{id}/configuracao`
- **Body (JSON):**
  ```json
  {
    "tema": "dark",
    "emailNotificacoes": true
  }
  ```

### Listar usuários

- **GET** `/usuarios`

## Visualizar o banco

Execute:
```bash
npx prisma studio
```
Acesse [http://localhost:5555](http://localhost:5555) para visualizar e editar os dados.

## Observações

- O campo `idade` deve ser maior ou igual a 18.
- O campo `tema` aceita apenas: `dark`, `medium` ou `light`.
- O campo `email` deve ser único.

---

Projeto para fins de estudo e demonstração de arquitetura limpa com Express e Prisma.
