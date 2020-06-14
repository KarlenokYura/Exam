var express = require("express");
var app = express();

app.get("/", function(request, response){
    response.send("Uri param");
});

app.get('/p/:first', function(req, res) {
  res.send("First uri param: " + req.params.first);
});

app.get('/p/:first/:second', function(req, res) {
  res.send("First uri param: " + req.params.first + ", second uri param: " + req.params.second);
});

app.listen(3000);
