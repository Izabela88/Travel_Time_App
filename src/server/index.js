const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
global.appRoot = path.resolve(__dirname);

const express = require('express');
const app = express();
module.exports = app;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))


app.get('/', function (_req, res) {
  res.sendFile(appRoot + '../../dist/index.html')
})
app.post('/', function (_req, res) {
  res.redirect('/trips')
})

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

// // designates what port the app will listen to for incoming requests

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
