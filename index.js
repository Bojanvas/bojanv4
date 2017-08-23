var express = require('express');
var body = require('body-parser');
var router = require('./routes/routes.js');
var mongoose = require('mongoose');
var app = express();


mongoose.connect("mongodb://" + process.env.DBUSER + ":" + process.env.DBPASS + "@ds125262.mlab.com:25262/couterview", function() {
    console.log('db-conected');
});
app.use(express.static(__dirname + '/public'))
app.use('/', router);
app.use(body.json());
app.use(body.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});