var express = require('express');
var body = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var router = express.Router();

var countSchema = mongoose.Schema;

var View = new countSchema({
    firstviews: Number,
    secondviews: Number,
}, { collection: 'view' });

var Visits = mongoose.model('Visits', View);
router.use(body.json());
router.use(body.urlencoded({ extended: false }));

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
        subject: "From " + person.name + " " + person.surname,
        text: person.email + " message is :" + person.message
    }
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            return console.log(error);
        }
        console.log('message send');
        res.redirect('/');
    })
})
router.post('/view', function(req, res) {
    var view = req.body;
    var id = '5940224d734d1d6c423d7ab4';
    Visits.findOne({ _id: id, }, function(error, count) {
        if (error) {
            console.log(error);
        } else {
            count.firstviews = count.firstviews + 1;
            count.save(function(err) {
                if (err) {
                    console.error('ERROR!');
                }
            });
        }
    })
})
router.post('/viewsecond', function(req, res) {
    var view = req.body;
    var id = '5940224d734d1d6c423d7ab4';
    Visits.findOne({ _id: id, }, function(error, count) {
        if (error) {
            console.log(error);
        } else {
            count.secondviews = count.secondviews + 1;
            count.save(function(err) {
                if (err) {
                    console.error('ERROR!');
                }
            });
        }
    })
})
router.get('/results/all', function(req, res) {
    let Users = require('../models/Users');
    Users.find({}, function(error, docs) {
        if (!error) {
            res.send(docs);
        } else {
            console.log(error)
            throw error;
        }
    })
});
router.get('/results/:dif', function(req, res) {
    var dif = req.params.dif;
    let Users = require('../models/Users');
    Users.find({ 'dificult': dif }, function(error, docs) {
        if (!error) {
            res.send(docs);
        } else {
            console.log(error)
            throw error;
        }
    })
});

router.get('/results/Levels', function(req, res) {
    let Levels = require('../models/Levels');
    Users.find({}, function(error, docs) {
        if (!error) {
            res.send(docs);
        } else {
            console.log(error)
            throw error;
        }
    })
});
router.get('/results', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/results.html'));
})
router.post('/results', function(req, res) {
    var results = req.body;
    console.log(results);
    let Users = require('../models/Users');
    let newUser = new Users;
    newUser.name = results.name;
    newUser.score = results.score;
    newUser.date = results.date;
    newUser.dificult = results.dificult;
    newUser.location = results.location;

    newUser.save(function(err) {
        if (err) {
            console.log('faild to save user this is the error:' + err)
        }
    });
    res.send('Good joob');
})

router.post('/levels', function(req, res) {
    var level = req.body;
    console.log(level);
    let Levels = require('../models/Levels');
    Levels.findOne({"id":level.id},function(error, docs){
        console.log("this is docs : "+ docs + "this is length"+docs.length+ "this is type :"+typeof(docs) );
        if(docs){
            if (error) {
                console.log(error);
            } else {
                docs.name = level.name;
                docs.location = level.location;
                docs.level = level.level;

                docs.save(function(err) {
                    if (err) {
                        console.error('ERROR!');
                    }
                });
            }
        } else {
            var newLevels = new Levels;
            newLevels.id = level.id;
            newLevels.name = level.name;
            newLevels.location = level.location;
            newLevels.level = level.level;
        
            newLevels.save(function(err) {
                if (err) {
                    console.log('faild to save user this is the error:' + err)
                }
            });
            res.send('Good joob');
        }
    })

})
module.exports = router;