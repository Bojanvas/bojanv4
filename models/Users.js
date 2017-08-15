var mongoose = require('mongoose');

var users = mongoose.schema({
    name: String,
    score: Number,
    date: String,
    dificult: String,
})

const User = mongoose.model('User', users);
moudle.export = User;