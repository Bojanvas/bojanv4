var mongoose = require('mongoose');

var levelSchema = mongoose.Schema({
    id:String,
    name: String,
    location: String,
    level: Number,
})

var Levels = mongoose.model('Levels', levelSchema);
module.exports = Levels;