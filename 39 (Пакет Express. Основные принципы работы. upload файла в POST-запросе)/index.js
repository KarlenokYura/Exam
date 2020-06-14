var app = require("express")();
var multer = require('multer');
var fs = require('fs');

app.post('/upload', multer({dest: 'upload/'}).single('file'),  (req, res) => {
  console.log(req.file);
  fs.renameSync(`upload/${req.file.filename}`, `upload/${req.file.originalname}`);
  res.send(`Upload ${req.file.originalname}`);
});

app.listen(3000);
