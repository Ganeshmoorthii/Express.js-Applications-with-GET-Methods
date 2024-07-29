/*
# API Routing

Given an `app.js` file, write two APIs that sends different strings as responses.

Refer to the below table for paths and responses,

| Method | Path   | Description                                        |
| ------ | ------ | -------------------------------------------------- |
| GET    | /      | Will send the text <i>`Home Page`</i> as response  |
| GET    | /about | Will send the text <i>`About Page`</i> as response |

Export the express instance using default export syntax.

<b>Use Common JS module syntax</b>.

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

module.exports = app
