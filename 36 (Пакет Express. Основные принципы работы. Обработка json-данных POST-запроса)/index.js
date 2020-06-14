var express = require('express');
var app = express();

app.use(express.json());

app.post('/json', (req, res) => {
    if(req.body) {
        if (req.accepts('json')) {
            res.type('json').send(JSON.stringify(Object.assign({src:'server'}, req.body)))
        }
        else {
            res.type('txt').send('server');
        }
   }
    else res.status(400).type('txt').send('no bodyparser');
})

app.listen(3000);