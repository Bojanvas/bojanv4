var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
})

module.exports = router;