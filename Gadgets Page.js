/*
# Gadgets Page

Given two files `app.js` and `gadgets.html`, write an API in `app.js` file for the path `/gadgets` that sends the `gadgets.html` file as a response.

Export the express instance using default export syntax.

<b>Use Common JS module syntax</b>.

*/

const express = require('express')
const path = require('path')
const app = express()

// Define the path to the static HTML file
const filePath = path.join(__dirname, 'gadgets.html')

// Middleware to serve static files
app.use(express.static(path.join(__dirname)))

// Route to serve gadgets.html
app.get('/gadgets', (req, res) => {
  res.sendFile(filePath)
})

module.exports = app
