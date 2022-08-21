const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('This is gonna be great');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})