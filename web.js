var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(16);
buffer = fs.readFileSync(index.html);


app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8', 0, 12));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
