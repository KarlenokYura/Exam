var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Query params");
});

app.use("/ts", function(req, res) {
    let surname = req.query.surname;
    let number = req.query.number;
    console.log("Surname: " + surname + ", number: " + number)
    res.send("Surname: " + surname + ", number: " + number);
});

app.listen(3000);