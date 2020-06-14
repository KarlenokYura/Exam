let http = require('http');
let qs = require('querystring');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.method == 'GET'){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(fs.readFileSync('./index.html'));
      }
    else if (req.method == 'POST'){
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            var result = "";
            var params = qs.parse(data);
            for(var param in params) {result += `${param} = ${params[param]}<br/>`
            }
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.end(result);
      });
    }
}).listen(3000);

console.log("Server start on localhost:3000");