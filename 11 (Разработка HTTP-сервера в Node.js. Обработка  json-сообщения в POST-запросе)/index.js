let http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    if (url.parse(req.url, true).pathname === '/json') {
        if (req.method == 'POST') {
            let data = "";
            req.on('data', (chunk) => {
                data += chunk;
            });
            req.on('end', () => {
                let result = JSON.parse(data);
                res.end(JSON.stringify({Sum: (result.x + result.y)}));
            });
        }
    }
}).listen(3000);

console.log("Server start on localhost:3000");

/*{
	"x":5,
	"y":5
}*/
