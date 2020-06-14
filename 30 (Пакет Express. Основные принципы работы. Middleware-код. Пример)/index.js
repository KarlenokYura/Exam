var express = require("express");
var app = express();

app.use((req, res, next) => {
    console.log("Pre 1 use");
    next();
    console.log("Post 1 use");
});

app.use((req, res, next) => {
    console.log("Pre 2 use");
    next();
    console.log("Post 2 use");
});

app.use((req, res) => {
    console.log("Pre 3 use");
    console.log("Finish message");
    res.send("Finish message");
    console.log("Post 3 use");
});

var server = app.listen(3000);