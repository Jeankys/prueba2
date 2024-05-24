const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
