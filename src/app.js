const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./controllers/authController'));


app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = app;
