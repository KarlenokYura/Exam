var http = require("http").createServer((req, res) => {
    if (req.method == "GET") {
        require("fs").createReadStream("./text.txt").pipe(res);
    }
    if (req.method == "POST") {
        req.pipe(require("fs").createWriteStream("./text.txt"));
        res.end();
    }
})

http.listen(3000);