const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/flightBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.use(cors({
    origin: 'https://backend-3xs8dnafa-jeankys-projects.vercel.app'
  }));
app.use(express.json());
app.use('/api/flights', flightRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
