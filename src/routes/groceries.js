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

router.use((req, res, next) => {
  if (req.session.user) next()
  else res.status(401).send('unauthorized')
})

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

router.get('/shopping/cart', (req, res) => {
  const { cart } = req.session
  if (!cart) {
    res.send('you have not cart session')
  } else {
    res.send(cart)
  }
})

router.post('/shopping/cart/item', (req, res) => {
  const { item, quantity } = req.body
  const cartItem = { item, quantity }
  const { cart } = req.session
  if (cart) {
    console.log('This is cart', cart)
    req.session.cart.items.push(cartItem)
  } else {
    console.log('There no is cart')
    req.session.cart = {
      items: [cartItem]
    }
  }
  res.status(201).send('ok')
})

module.exports = router
