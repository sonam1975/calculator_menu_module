var controller = require('./controller');
var express = require('express');
// var router = require('./routes.js');
var bodyParser = require('body-parser');

var app = express(); 
const port = 3000; 

app.use(bodyParser.json());
// app.use('/test', router);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome home!');
});

app.get('/homes', controller.homes.get);

app.listen(port, () => {console.log(`Listening on port: ${port}`)});