var mongoose = require('mongoose');

var users = mongoose.Schema({
    name: String,
    score: Number,
    date: String,
    dificult: String,
})

const User = mongoose.model('User', users);
module.export = User;
