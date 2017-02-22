var express = require('express');
var body = require('body-parser');
var router = require('./routes/routes.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
app.use('/', router);
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log('conected');
})