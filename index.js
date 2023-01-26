const express = require('express')
const cors = require('cors')
const app = express()
const route1 = require('./route1')

app.use(cors())
app.use(express.json())
app.use('/abc',route1)

let cred = {
  "vivek": 123,
  "sidd": 456
}

app.get('/',(req, res) => {
  console.log(req.body);
  res.json(cred[req.params.name])
})
app.post('/',(req,res) => {
  console.log(req.body);
  res.json("data recieved")
})

app.listen(5678)