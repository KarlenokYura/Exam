const express = require('express');
const app = express();
const cookieparser = require('cookie-parser')(); // FOR COOKIES
//const cookieparser = require('cookie-parser');     // FOR SIGNED COOKIES

//------Cookies------------------------------------------------------------

app.use(cookieparser);

app.get('/', (req, res, next) => {
    let myid = req.cookies.myid;

    if (isFinite(myid)) myid++;   // Глобальная isFinite() функция определяет, является ли переданное значение конечным числом. 
    else myid = 0;                // Если необходимо, параметр сначала преобразуется в число.

    res.cookie('myid', myid).send(`myid = ${myid}`);
})

//-------------------------------------------------------------------------

//------Signed Cookies-----------------------------------------------------

// const cookiesecret = '12345';
// app.use(cookieparser(cookiesecret));

// app.get('/', (req, res, next) => {
//     let myid = req.signedCookies.myid;

//     if (isFinite(myid)) ++myid;   // Глобальная isFinite() функция определяет, является ли переданное значение конечным числом. 
//     else myid = 0;                // Если необходимо, параметр сначала преобразуется в число.

//     console.log('myid = ', myid);
//     res.cookie('myid', myid, {signed:true}).send(`myid = ${myid}`);
// })

//-------------------------------------------------------------------------

app.listen(3000);
