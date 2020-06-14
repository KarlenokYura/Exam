var express = require('express');
var router = express.Router();

router.get("/register", (req, res, next) => {
    console.log("Register-get");
    res.send("Register-get");
})

router.post("/register", (req, res, next) => {
    console.log("Register-post");
    res.send("Register-post");
})

router.put("/register", (req, res, next) => {
    console.log("Register-put");
    res.send("Register-put");
})

module.exports = router;
