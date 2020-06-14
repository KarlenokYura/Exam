var http = require("http");
var stat = require("./lib")("./static");

http.createServer(function (req, res) {
    if (req.method = "GET") {
        if(stat.isStatic('html', req.url)) stat.sendFile(req,res, {'Content-Type':'text/html; charset=utf-8'});
        else if(stat.isStatic('css', req.url)) stat.sendFile(req,res, {'Content-Type':'text/css; charset=utf-8'});
        else if(stat.isStatic('js', req.url)) stat.sendFile(req,res, {'Content-Type':'text/javascript; charset=utf-8'});
        else if(stat.isStatic('png', req.url)) stat.sendFile(req,res, {'Content-Type':'image/png; charset=utf-8'});
        else if(stat.isStatic('docx', req.url)) stat.sendFile(req,res, {'Content-Type':'application/msword; charset=utf-8'});
        else stat.writeHTTP404(res);
    }
    else {
        res.statusCode = 405;
        res.statusMessage = "Invalid method";
        res.end("405: Invalid method");
    }}
).listen(3000)
.on("error", (err) => {
    console.log("Error: ", err.statusCode);
});

console.log("Server starts on localhost:3000");