var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fileBuffer = fs.readFileSync('index.html');
  contents = fileBuffer.toString('utf-8');
  response.send(contents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
