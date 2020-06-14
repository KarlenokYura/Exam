var http = require("http");

var json = `{
    "comment": "Comment",
    "x": 1,
    "y": 2,
    "s": "Stroka",
    "m": ["a","b","c"],
    "o": {"surname":"Karlenok", "name":"Yura"}
}`;

var options = {
    host: "localhost",
    path: "/",
    port: 3000,
    method: "POST",
    headers: {
        "Content-Type": "application/json"
      }
}
const req = http.request(options, (res) => {
    console.log("method: ", req.method);
    console.log("response: ", res.statusCode);
    console.log("statusMessage: ", res.statusMessage);

    var body = [];
    res.on("data", (chunk) => {
        body = chunk.toString();
        body = JSON.parse(body);
    });
    res.on("end", () => {
        console.log(({
                _comment: "Response: " + body.comment,
                x_plus_y: body.x + body.y,
                concat_s_o: body.s + ": " + body.o.surname + ' ' + body.o.name,
                length_m: body.m.length
        }));
    })
});

req.on("error", (e)=>{console.log("error: ", e.message);});
req.end(json);