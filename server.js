// adding dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { agent } = require('./agent');
const morgan = require('morgan');
const { apiInstance } = require('./axios-instance');
// adding data configuration and enviroment file
require('dotenv').config();

// bodyparser urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// bodyparser json
app.use(bodyParser.json());

// HTTP request logger middleware
app.use(morgan('dev'));

// adding cors
app.use(cors());

// creating default port
const port = process.env.PORT || 4000;
// running server
app.listen(port, () => {
    console.log(`server is live on port ${port}`)
});