var express = require("express");
var app = express();

var loginRouter = require('./controllers/login');
var registerRouter = require('./controllers/register');
var homeRouter = require('./controllers/home');

app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', homeRouter);

var server = app.listen(3000);