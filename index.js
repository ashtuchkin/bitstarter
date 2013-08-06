var fs = require("fs");
var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  res.send(fs.readFileSync("index.html", "utf8"));
});

app.use(express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
