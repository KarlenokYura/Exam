var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var imagePath = "image.png";
    if (url.parse(req.url).pathname == "/png") {
        fs.stat(imagePath, (err, stat) => {
            if (err) {
                console.log('error:' + err.message);
            } else {
                png = fs.readFile(imagePath, (err, data) => {
                    res.contentType = 'image/png';
                    res.contentLength = stat.size;
                    res.end(data);
                });
            }
        })
    }
}).listen(3000);

console.log("Server start on localhost:3000");
