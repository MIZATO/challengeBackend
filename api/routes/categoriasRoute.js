const { Router } = require('express');
const CategoriaController =require('../controllers/CategoriaController.js');

const router = Router()
router
  .get('/categorias', CategoriaController.getAllCategorias)
  .get('/categorias/:id', CategoriaController.getCategoria)
  .post('/categorias', CategoriaController.createCategoria)
  .put('/categorias/:id', CategoriaController.updateCategoria)
  .delete('/categorias/:id', CategoriaController.deleteCategoria)

module.exports = router;