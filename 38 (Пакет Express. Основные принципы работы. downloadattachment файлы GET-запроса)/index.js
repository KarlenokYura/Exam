var fs = require("fs");
var app = require("express")();

app.get('/download', (req, res,next) =>{
  console.log('download');
  res.download('./Static/1.png', '1.png');
})

app.get('/png', (req, res, next)=>{
  console.log('attachment');
  res.attachment('./static/1.png');
  var rs = fs.ReadStream('./static/1.png');
  rs.pipe(res);
})

app.get('/js', (req, res, next)=>{
  console.log('attachment');
  res.attachment('./static/1.js');
  var rs = fs.ReadStream('./static/1.js');
  rs.pipe(res);
})

app.listen(3000);
