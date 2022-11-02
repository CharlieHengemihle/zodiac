const express = require('express');

const app = express();
const path = require('path');

app.use('/zodiac', require('./controllers/zodiac'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/horoscopes', require('./controllers/horoscope'));

module.exports = app;
