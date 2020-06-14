var express = require('express');
var router = express.Router();

router.get("/home", (req, res, next) => {
    console.log("Home-get");
    res.send("Home-get");
})

router.post("/home", (req, res, next) => {
    console.log("Home-post");
    res.send("Home-post");
})

router.put("/home", (req, res, next) => {
    console.log("Home-put");
    res.send("Home-put");
})

module.exports = router;
