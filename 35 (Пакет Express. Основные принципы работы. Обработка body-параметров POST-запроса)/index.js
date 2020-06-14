var app = require("express")();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));

app.post("/form", (req, res, next) => {
    if (req.body) {
        console.log("Surname: ", req.body.surname || "No surname param");
        console.log("Number: ", req.body.number || "No surname param");
        res.send("Post body params");
    }
    else {
        res.status(400).send("No bodyparser")
    }
})

app.listen(3000);