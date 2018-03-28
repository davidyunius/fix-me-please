const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router
  .get('/', booksController.all)
  .post('/', booksController.create)
  .put('/:id', booksController.update)
  .delete('/:id', booksController.delete)

module.exports = router