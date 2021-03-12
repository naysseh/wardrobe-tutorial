var https = require("https");
var url = "https://free.currconv.com/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=4a9548e48427521a158b";

// this and the URL both work (below where options is in the GET request)
var options = {
  host: 'free.currconv.com',
  path: '/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=4a9548e48427521a158b'
};

https.get(options, function (res) {
  var dataResponse = '';
  res.on('data', function (chunk) {
    dataResponse += chunk;
  });
  res.on('end', function () {
    var jsonResponse = JSON.parse(dataResponse);
    console.log("1 USD = " + jsonResponse.USD_GBP + " GBP");
  });
  //error catching should probably go here
});
