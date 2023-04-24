const request = require('supertest');
const express = require('express');

const app = express();

app.get("/api/search", async (req, res) => {
    const media = req.query.media;
    const term = req.query.term;
  
    const result = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=${media}&limit=25`
    );
    const data = await result.json(); //parse the result as JSON
    res.send(data);
  });

describe('Test the /api/search path', () => {
  test('It should respond with 200 status code', async () => {
    const response = await request(app).get('/api/search?media=music&term=adele');
    expect(response.statusCode).toBe(200);
  });
});
