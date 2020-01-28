var controller = require('./controller');
var router = require('express').Router;

router.get('/homes', (req, res) => {
  res.send('received homes');
})

module.exports = router;