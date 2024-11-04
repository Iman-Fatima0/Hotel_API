const rooms = require('./Data');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 8000;

fs.appendFile("Readm.md", "");


app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

app.get('/api/rooms/available', (req, res) => {
    const available = rooms.filter(room => room.available);
    res.json(available);
});

app.get('/api/rooms/single', (req, res) => {
    const single = rooms.filter(room => room.type === 'single');
    res.json(single);
});

app.get('/api/rooms/double', (req, res) => {
    const double = rooms.filter(room => room.type === 'double');
    res.json(double);
});

app.get('/api/rooms/price/under-150', (req, res) => {
    const under150 = rooms.filter(room => room.price < 150);
    res.json(under150);
});

app.listen(port, () => {
    console.log('listening on port', port);
});
