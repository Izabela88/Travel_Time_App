/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express to run server and routes
const express = require('express');
var path = require('path');

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Server 8081!')
})