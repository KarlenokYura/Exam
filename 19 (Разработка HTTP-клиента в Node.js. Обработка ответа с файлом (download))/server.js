var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.statusCode = 200;
    var body = fs.readFileSync("./file.txt");
    res.end(body);
}).listen(3000);

console.log('Server running on http://localhost:3000/');
