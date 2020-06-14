var app = require("express")();
var xmlparser = require("express-xml-bodyparser");
var xmlbuilder = require("xmlbuilder");

app.use(xmlparser());

//Content-Length : 117
//Content-Type : application/xml
//Accept : application/xml

app.post("/xml", (req, res, next) => {
    var x = Number(req.body.calculate.x[0].value);
    var y = Number(req.body.calculate.y[0].value);

    var result = xmlbuilder.create("result").att("example", "xml-post");
    result.ele("sum", {value: x + y});

    console.log(result.toString({pretty: true}));
    res.send(result.toString({pretty: true}))
})

app.listen(3000);