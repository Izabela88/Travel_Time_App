const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.get("/trips", function (req, res) {
  res.sendFile('dist/trips.html')
});

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Server 8081!')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

// defining variable using let instead of const
let projectData = {};
// single GET route to get the projectData
app.get("/trips", function (req, res) {
  res.send(projectData);
});

// Single POST route to post all data
app.post("/addData", function (req, res) {
  // Destructuring values from request body
  const {
    destination,
    country,
    weatherInfo,
  } = req.body;
  // Updating projectData variable
  projectData.name = destination;
  projectData.countryName = country;
  projectData.description = weatherInfo;
  // Sending the success response
  res.send("sucess");
});
