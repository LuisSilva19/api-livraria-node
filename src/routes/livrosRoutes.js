import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Rotas para gerenciamento de livros.
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Listar livros
 *     description: Retorna uma lista de livros.
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros.
 */
router.get("/livros", LivroController.listarLivros);

/**
 * @swagger
 * /livros/busca:
 *   get:
 *     summary: Listar livros por editora
 *     description: Retorna uma lista de livros de uma editora específica.
 *     tags: [Livros]
 *     parameters:
 *       - in: query
 *         name: editora
 *         required: true
 *         description: Nome da editora para filtrar os livros.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de livros da editora.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 titulo: Livro A
 *                 editora: Editora X
 *               - id: 2
 *                 titulo: Livro B
 *                 editora: Editora X
 *       400:
 *         description: Parâmetros inválidos ou ausentes na solicitação.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/livros/busca", LivroController.listarLivroPorEditora);

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Buscar livro por ID
 *     description: Retorna um livro com base no ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Dados do livro.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Propriedades do livro
 */
router.get("/livros/:id", LivroController.listarLivroPorId);

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cadastrar livro
 *     description: Cadastra um novo livro.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             // Esquema do corpo da requisição
 *     tags: [Livros]
 *     responses:
 *       201:
 *         description: Livro cadastrado com sucesso.
 */
router.post("/livros", LivroController.cadastrarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualizar livro
 *     description: Atualiza os dados de um livro existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             // Esquema do corpo da requisição
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso.
 */
router.put("/livros/:id", LivroController.atualizarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Excluir livro
 *     description: Exclui um livro existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Livro removido com sucesso.
 */
router.delete("/livros/:id", LivroController.excluirLivro);

export default router;
