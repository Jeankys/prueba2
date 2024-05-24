const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    date: String,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
