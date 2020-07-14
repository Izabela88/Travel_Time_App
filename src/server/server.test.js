const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

app.get('/', async (req, res) => {
  res.json({ message: 'pass!' })
})

it('Gets the test endpoint', async done => {
  // Sends GET Request to / endpoint
  const res = await request.get('/')

  // ...
  done()
})
