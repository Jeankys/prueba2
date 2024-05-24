const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

// Crear un vuelo
router.post('/', async (req, res) => {
    const { origin, destination, date } = req.body;
    const newFlight = new Flight({ origin, destination, date });
    try {
        const savedFlight = await newFlight.save();
        res.status(201).json(savedFlight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener todos los vuelos
router.get('/', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
