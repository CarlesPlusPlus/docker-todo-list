const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req,res) => {
  res.send('Root req.');
})
app.listen(port, () => {
  console.log(`Todo list server is listening on port ${port}`);
});