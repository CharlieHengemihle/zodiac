const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');

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
    const gemini = {
      id: '1',
      name: 'aquarius',
    };
    expect(res.body).toEqual(gemini);
  });
});
