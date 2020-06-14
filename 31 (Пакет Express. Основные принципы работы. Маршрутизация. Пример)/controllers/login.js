var express = require('express');
var router = express.Router();

router.get("/login", (req, res, next) => {
    console.log("Login-get");
    res.send("Login-get");
})

router.post("/login", (req, res, next) => {
    console.log("Login-post");
    res.send("Login-post");
})

router.put("/login", (req, res, next) => {
    console.log("Login-put");
    res.send("Login-put");
})

module.exports = router;
