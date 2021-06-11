const mongoose = require('mongoose');

const opinionSchema =  mongoose.Schema({
    name: String,
    //opinion: String,
    phoneNumber: String,
    email: String,
    rooms: Number,

    registerDate: { type:Date, default:Date.now }
});

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = { Opinion }
