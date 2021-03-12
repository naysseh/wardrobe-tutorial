var http = require('http');
var url = 'http://api.coindesk.com/v1/bpi/currentprice.json';

http.get(url, function (res) {
  var body = '';

  res.on('data', function (chunk) {
    body += chunk;
  });

  res.on('end', function () {
    var bitcoinRes = JSON.parse(body);
    var value = bitcoinRes.bpi.USD.rate;
    console.log("1 BTC = $" + value + " (USD)");
  });

}).on('error', function (err) {
  console.log("Error: ", err);
});

