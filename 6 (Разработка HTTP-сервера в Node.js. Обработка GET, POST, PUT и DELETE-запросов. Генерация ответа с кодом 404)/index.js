var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
  if (req.method == "GET" && url.parse(req.url).pathname == "/exam") {
    res.end("Get");
    console.log("Get")
  }
  else if (req.method == "POST" && url.parse(req.url).pathname == "/exam") {
    res.end("Post");
    console.log("Post")
  }
  else if (req.method == "PUT" && url.parse(req.url).pathname == "/exam") {
    res.end("Put");
    console.log("Put")
  }
  else if (req.method == "DELETE" && url.parse(req.url).pathname == "/exam") {
    res.end("Delete");
    console.log("Delete")
  }
  else {
    res.statusCode = 404;
    res.statusMessage = "Error message"
    res.end("Error 404")
  }
}).listen(3000);

console.log("Server start on localhost:3000");