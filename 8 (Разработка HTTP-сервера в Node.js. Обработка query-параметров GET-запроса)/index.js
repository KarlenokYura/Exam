let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
  if (req.method == "GET") {
    var x = parseInt(url.parse(req.url, true).query.x);
    var y = parseInt(url.parse(req.url, true).query.y);
    if ((Number.isInteger(x)) && (Number.isInteger(y))) {
        res.write("Sum: " + (x + y) + "\n");
        res.write("Sub: " + (x - y) + "\n");
        res.write("Mul: " + (x * y) + "\n");                    
        res.end("Div: " + (x / y));
    }
    else {
        res.end("Query error");
    }
  }
}).listen(3000);

console.log("Server start on localhost:3000");