const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();

const rutaPublic = path.join(__dirname, 'public');

app.use(express.static(rutaPublic));

app.get('/', (reg, res) => {
    const ruta = path.join(__dirname, './views/home.htmI');
    res.sendFile(ruta);
});

app - get('/login', (reg, res) => {
     const ruta = path.join(_dirname, './views/login.htmI');
    res.sendFile(ruta);
});

app-get('/register',(reg,res)=>{
    const ruta = path. join(__dirname, './views/register.htmi')
    res.sendFile (ruta);
    });
    

        /* app.use('/static', express.static(__dirname + '/public'));
         */
        /* app.get('/', (req, res) => {
            res.sendFile(__dirname + '/views/home.html');
        });
        
        app.get('/login', (req, res) => {
            res.sendFile(__dirname + '/views/login.html');
        });
        
        app.get('/register', (req, res) => {
            res.sendFile(__dirname + '/views/register.html');
        }); */

        const PORT = 3030;
        app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT} `))