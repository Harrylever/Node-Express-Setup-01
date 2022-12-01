const { Router } = require('express')

const router = Router()

const superMarkets = [
  {
    id: 1,
    store: 'Whole Foods',
    miles: 0.6
  },
  {
    id: 2,
    store: 'Trader Joes',
    miles: 2.5
  },
  {
    id: 3,
    store: 'Albertsons',
    miles: 2.8
  },
  {
    id: 4,
    store: 'Whole Foods',
    miles: 1.6
  },
  {
    id: 5,
    store: 'Trader Joes',
    miles: 3.5
  },
  {
    id: 6,
    store: 'Albertsons',
    miles: 4.8
  }
]

router.use((req, res, next) => {
  if (req.session.user) next()
  else res.status(401).send('unauthorized')
})

router.get('/', (req, res) => {
  const { miles } = req.query
  const ParsedMiles = parseInt(miles)
  if (!isNaN(ParsedMiles)) {
    const filteredStores = superMarkets.filter((s) => s.miles <= ParsedMiles)
    res.send(filteredStores)
  } else res.send(superMarkets)
})

module.exports = router
