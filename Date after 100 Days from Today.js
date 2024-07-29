/*
# Date after 100 Days from Today

Given an `app.js` file, write an API with path `/` using express JS to send the date after 100 days from today as a response in `DD/MM/YYYY` format.

Export the express instance using default export syntax.

Use the third-party package `date-fns`.

<b>Use Common JS module syntax</b>.

*/

const express = require('express')
const addDays = require('date-fns/addDays')

const app = express()

app.get('/', (request, response) => {
  const dateTime = new Date()
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100,
  )

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

module.exports = app
