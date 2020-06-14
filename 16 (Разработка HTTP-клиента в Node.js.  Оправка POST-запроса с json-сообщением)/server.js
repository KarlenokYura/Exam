var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    if (req.method == "POST") {
        res.statusCode = 200;
        var body = [];
        req.on("data", (chunk) => {
            body = chunk.toString();
            body = JSON.parse(body);
        })
        .on("end", () => {
            res.end(JSON.stringify({
                    _comment: "Response: " + body.comment,
                    x_plus_y: body.x + body.y,
                    concat_s_o: body.s + ": " + body.o.surname + ' ' + body.o.name,
                    length_m: body.m.length
            }));
        })
    }
}).listen(3000);

console.log("Server starts on localhost:3000");