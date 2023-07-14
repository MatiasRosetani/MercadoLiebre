const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.use('/static', express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log('servidor corriendo en el puerto ${port}'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});