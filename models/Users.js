var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    score: Number,
    date: String,
    dificult: String,
    location: String,
})

var User = mongoose.model('User', usersSchema);
module.exports = User;
