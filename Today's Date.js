/*
# Today's Date

Given an `app.js` file, write an API with path `/` using express JS that sends today's date as a response in `DD-MM-YYYY` format.

Export the express instance using default export syntax.

<b>Use Common JS module syntax</b>.

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const date = new Date()
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`
  res.send(`${formattedDate}`)
})

module.exports = app
