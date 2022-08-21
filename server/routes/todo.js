const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    //Get todos from mongo
    //Return list of todos.
    res.send('This should return a list of todos.');
});

router.post('/', (req, res) => {
    //Save todo.
});