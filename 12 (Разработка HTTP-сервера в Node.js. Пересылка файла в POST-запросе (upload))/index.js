var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(fs.readFileSync('./index.html'));
    }
    else if (req.method == 'POST') {
        var data = '';
        req.on('data', (chunk) => {data += chunk;});
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        });
    }
}).listen(3000);

console.log("Server start on localhost:3000");
