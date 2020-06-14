var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    if (req.method == "POST") {
        res.statusCode = 200;
        var data = "";
        req.on("data", (chunk) => {
            data += chunk.toString("utf-8")
        });
        req.on("end", () => {
            res.end(data);
        })
    }
}).listen(3000);

console.log("Server starts on localhost:3000");