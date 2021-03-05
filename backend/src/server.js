var dotenv = require('dotenv');
var express = require('express');

// Load .env file
dotenv.config({ path: '../.env' });


// setup express server
var app = express();
var port = process.env.PORT;

// setup routers
app.use(require('./routers/statusRouter.js'));
app.use(require('./routers/carRouter.js'));

// start server
app.listen(port, function () {
  console.log('Running on port ' + port);
})