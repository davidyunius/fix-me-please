const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', {
  useMongoClient: true,
  connectTimeoutMS: 1000
}, (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

const books = require('./routes/books');
const transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000, () => {
  console.log('listening on port 3000');
})
