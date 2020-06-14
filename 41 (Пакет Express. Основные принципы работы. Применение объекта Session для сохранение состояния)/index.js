var app = require("express")();
var cookiesecret = '1234567890';
var session = require('express-session')(
{
    resave:false, //сохранить даже если нет изм
    saveUninitialized:false,
    secret:cookiesecret
});

app.use(session);

app.get('/', (req, res, next) => {
    if (!isFinite(req.session.mysesval)) {
        req.session.mysesval = 0;
    }
    else {
        req.session.mysesval++;
    }
    console.log('mysesval = ', req.session.mysesval);
    res.send(`mysesval = ${req.session.mysesval}`);
});

app.listen(3000);