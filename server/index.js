var express = require('express');

var app = express(); 
const port = 3000; 

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello world');
})
app.listen(port, () => {console.log(`Listening on port: ${port}`)});