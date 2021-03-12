var http = require('http');
var url = 'http://api.coindesk.com/v1/bpi/currentprice.json';

http.get(url, function (res) {
  //create var for the body of the response from URL
  var body = '';

  //add on data to the body from the response
  res.on('data', function (chunk) {
    body += chunk;
  });

  //end of data - go thru JSON and get correct val
  res.on('end', function () {
    var bitcoinRes = JSON.parse(body);
    var value = bitcoinRes.bpi.USD.rate;
    console.log("1 BTC = $" + value + " (USD)");
  });

});

