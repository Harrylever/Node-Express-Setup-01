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
  res.cookie('visited', true, {
    maxAge: 60000
  })
  res.send(StuffList)
})

router.get('/:item', (req, res) => {
  console.log(req.cookies)
  const { item } = req.params
  const Item = StuffList.find((g) => g.item === item)
  res.send(Item)
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
