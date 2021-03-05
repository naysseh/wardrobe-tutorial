var http = require('http');
var url = 'http://api.coindesk.com/v1/bpi/currentprice.json';

http.get(url, function (res) {
  var body = '';

  res.on('data', function (chunk) {
    body += chunk;
  });

  res.on('end', function () {
    var bitcoinRes = JSON.parse(body);
    console.log("JSON response recieved: ", bitcoinRes.bpi.USD.rate);
  });

}).on('error', function (err) {
  console.log("Error: ", err);
});

