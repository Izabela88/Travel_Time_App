const dotenv = require('dotenv');
dotenv.config();

var path = require('path');

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
  res.sendFile(__dirname + '../../dist/index.html')
})
app.post('/', function (_req, res) {
  res.redirect('/trips')
})

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

// // designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Server 8081!')
})

var PORT = process.env.PORT || 8081;