var express = require('express');
var router = express.Router();

// define the status route
router.get('/status', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;