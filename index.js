var express = require('express');
var body = require('body-parser');
var router = require('./routes/routes.js');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;


mongoose.connect("mongodb://" + process.env.DB.USER + ":" + process.env.DB.PASS + "@ds125262.mlab.com:25262/couterview", function() {
    console.log('db-conected');
});
app.use(express.static(__dirname + '/public'))
app.use('/', router);
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log('conected');
})