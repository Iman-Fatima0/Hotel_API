const data = require('./Data'); 
const rooms=data.rooms;
const fs = require('fs');
const express = require('express');
const app = express();
const port = 5600;

fs.appendFile("Hello.txt", "I am creating a file with js code that contains API creation through get method !", (err) => {
    if (err) {
        console.error("Failed to write to file");
    } else {
        console.log("Message written to Hello.txt");
        console.log('Server is running on port 5600');
    }
});

app.get('/', (req, res) => {
    res.send('You are currently getting the data for rooms!'); 
});

app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

app.get('/api/rooms/available', (req, res) => {
   
    const available = rooms.filter((array_element)=>{return array_element.available == true;});
     res.json(available);
});

app.get('/api/rooms/single', (req, res) => {
    const single = rooms.filter((array_element)=>{return array_element.type =="single";});
     res.json(single);
    
});

app.get('/api/rooms/double', (req, res) => {
    const double=rooms.filter((array_element)=>{return array_element.type =="double";});
    res.json(double);
  
});

app.get('/api/rooms/price/under150', (req, res) => {
    const under150=rooms.filter((array_element)=>{return array_element.price<150; });
    res.json(under150);
});

app.listen(port, () => {
    console.log('Listening on port', port);
});