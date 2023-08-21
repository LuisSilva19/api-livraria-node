import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res) => {
      try {
        const livrosFind = await livros.find().populate('autor');
        res.status(200).json(livrosFind);
      } catch (err) {
        log.error(err.message)
        res.status(500).send({ message: err.message });
      }
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
  
      const livro = await livros.findById(id).populate('autor', 'nome');
  
      if (!livro) {
        res.status(404).send({ message: 'Livro não encontrado' });
      } else {
        res.status(200).send(livro);
      }
    } catch (err) {
      log.error(err.message)
      res.status(500).send({ message: err.message });
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      const livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      log.error(err.message)
      res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      log.info('Livro atualizado com sucesso')
      res.status(200).send({ message: 'Livro atualizado com sucesso' });
    } catch (err) {
      log.error(err.message)
      res.status(500).send({ message: err.message });
    }
  };

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      log.info('Livro removido com sucesso' )
      res.status(200).send({ message: 'Livro removido com sucesso' });
    } catch (err) {
      log.error(err.message)
      res.status(500).send({ message: err.message });
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const livrosFind = await livros.find({ 'editora': editora });
      log.info(livrosFind)
      res.status(200).send(livrosFind);
    } catch (err) {
      log.error(err.message)
      res.status(500).send({ message: err.message });
    }
  };

}

export default LivroController