const express = require('express')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Running Express Server on Port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send([
    {
      item: 'milk',
      quantity: 2
    },
    {
      item: 'sugar',
      quantity: 5
    },
    {
      item: 'mayon',
      quantity: 2
    }
  ])
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(200)
})
