var https = require("https");
const { config } = require('./config.js');

var newURL = "https://free.currconv.com/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=" + config.key;

https.get(newURL, function (res) {
  var dataResponse = '';
  res.on('data', function (chunk) {
    dataResponse += chunk;
  });
  res.on('end', function () {
    var jsonResponse = JSON.parse(dataResponse);
    console.log("1 USD = " + jsonResponse.USD_GBP + " GBP");
  });
<<<<<<< HEAD
  res.on('error', function (err) {
    console.error(err);
  })
  //error catching should probaby go here
});
=======
  //error catching should probably go here
});
>>>>>>> 23cf3953d4cdd1c4bda73b185894942d1c105e02
