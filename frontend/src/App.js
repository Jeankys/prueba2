import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [flights, setFlights] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/flights')
            .then(response => setFlights(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFlight = { origin, destination, date };
        axios.post('http://localhost:5000/api/flights', newFlight)
            .then(response => setFlights([...flights, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Reserva de Vuelos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Origen"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Destino"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Guardar</button>
            </form>
            <h2>Lista de vuelos</h2>
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>{flight.origin} -> {flight.destination} el {flight.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
