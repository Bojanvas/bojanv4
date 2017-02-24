var express = require('express');
var body = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var router = express.Router();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})
router.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
})
router.post('/mail', function(req, res, next) {
    var person = req.body;
    console.log(person);
    var mailOptions = {
        to: 'bojan87vasilevski@gmail.com',
        from: person.email,
        subject: "From" + person.name + " " + person.surname,
        text: person.email + " message is :" + person.message
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('message send');
        res.redirect('/');
    })
})
module.exports = router;