const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/flightBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/flights', flightRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
