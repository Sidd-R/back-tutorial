const express = require('express')
const app = express.Router()

app.get('/',(req,res) => {
  res.json("hellobye")
})

module.exports = app