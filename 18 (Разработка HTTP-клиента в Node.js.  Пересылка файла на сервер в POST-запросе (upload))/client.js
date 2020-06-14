var http = require('http');
var fs = require('fs');

var body = fs.readFileSync('file.txt');

var options = {
    host: 'localhost',
    path: '/',
    port: 3000,
    method: 'POST',
    headers: { 'content-type': 'multipart/form-data;' }
};

var req = http.request(options, (res) => {
    var data = "";
    res.on("data", (chunk)=>{
        console.log("data: body: ", data += chunk.toString("utf-8"));
    });
    res.on("end", ()=>{console.log("end: body: ", data);});
});

req.on("error", (e)=>{console.log("error: ", e.message);});
req.end(body);
