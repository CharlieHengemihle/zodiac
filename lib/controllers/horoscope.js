const { Router } = require('express');
const { horoscopes } = require('../horoscope-data');

module.exports = Router().get('/:name', (req, res) => {
  let match;
  for (const horoscope of horoscopes) {
    if (horoscope.name === req.params.name) {
      match = horoscope;
    }
  }
  return res.json(match);
});
