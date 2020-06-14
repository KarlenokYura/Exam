const app = require('express')();

app.get('/a', (req, res, next) => {
    console.log('Get /a');
    res.redirect('/b');
});

app.get('/b', (req, res, next) => {
    console.log('Get /b');
    res.type('html').send('Get /b');
});

app.post('/a', (req, res, next) => {
    console.log('Post /a');
    res.redirect('/b');
});

app.post('/b', (req, res, next) => {
    console.log('Post /b');
    res.type('html').send('Post /b');
});

app.post('/c', (req, res, next) => {
    console.log('Post /c');
    res.redirect(308, '/b');
});

app.listen(3000);