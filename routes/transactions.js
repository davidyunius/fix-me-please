const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions');

router
  .get('/', transactionsController.all)
  .post('/', transactionsController.create)
  .put('/:id', transactionsController.update)
  .delete('/:id', transactionsController.delete)

module.exports = router