const rooms = require('./Data');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 5600;
// const data=data.rooms;
fs.appendFile("Hello.txt", "I am creating a file with js code that conatiansAPI creation through get method !",(err)=>
{
    if(err)
    {
        console.error("Failed to write to file");
    }
    else{
        console.log("Message written to Hello.txt");
        console.log('Server is running on port 5600');  // Replace with your desired port number. 5600 is just an example. You can choose any port number.
    }
});
app.get('/', (req, res) =>{
res.send('You are currently getting the data for rooms!'); 
})

app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

app.get('/api/rooms/available', (req, res) => {
    const available = rooms.filter((room) => room.available);
    res.json(available);
});

app.get('/api/rooms/single', (req, res) => {
    const single = rooms.filter((room) => room.type == 'single');
    res.json(single);
});

app.get('/api/rooms/double', (req, res) => {
    const double = rooms.filter((room) => room.type == 'double');
    res.json(double);
});

app.get('/api/rooms/price/under-150', (req, res) => {
    const under150 = rooms.filter((room) => room.price < 150);
    res.json(under150);
});

app.listen(port, () => {
    console.log('listening on port', port);
});
