
var _ = require('lodash');
const rooms = require('./Data');
const fs=require('fs');
fs.appendFile()
const express = require('express')
const app = express()



const port=3000;
app.get(' /api/rooms',(req,res)=>{
    res.json(rooms)
;})
app.get(' /api/rooms/available',(req,res)=>{
    const available=rooms.filter(rooms=>rooms.available);
    res.json(available);
})

app.get(' /api/rooms/single',(req,res)=>{
    const single=rooms.filter(rooms=>rooms.type=='Single');
     res.json(single);
})

app.get('/api/rooms/double',(req,res)=>{
    const double=rooms.filter(rooms=>rooms.type=='double');
     res.json(double);
})

app.get('/api/rooms/price/under-150',(req,res)=>{
    const under150=rooms.filter(rooms=>rooms.price<150)
    res.json(under150);
})
app.listen(port,()=>{console.log('listening on port',port)});