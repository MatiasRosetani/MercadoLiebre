const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

const PORT = 3030;
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT} `))