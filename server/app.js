const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const port = 3001;


//MongoDB Setup
mongoose.connect('mongodb://mongo:27017', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());

const todosRouter = require('./routes/todos.js');
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Todo list server is listening on port ${port}`);
});