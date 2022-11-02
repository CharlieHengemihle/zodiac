const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');
const { horoscopes } = require('../lib/horoscope-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('horoscope route', () => {
  it('/horoscope/:name should return a horoscope for the given sign', async () => {
    const res = await request(app).get('/horoscopes/gemini');
    const gemini = {
      id: '5',
      name: 'gemini',
      dates: 'May 21 - Jun 20',
      symbol: 'Twins',
      horoscope: 'Look out behind you!',
    };
    expect(res.body).toEqual(gemini);
  });
});
