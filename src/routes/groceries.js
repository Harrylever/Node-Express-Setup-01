const { Router } = require('express')

const router = Router()

const StuffList = [
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
]

router.get('/', (req, res, next) => {
  console.log('Before Handling Request')
  next()
}, (req, res) => {
  res.send(StuffList)
})

router.get('/stuff/:item', (req, res) => {
  const { ItemId } = req.params
  const item = StuffList.find((g) => g.item === ItemId)
  console.log(item)
  res.status(200).send(item || 'Item not found')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
