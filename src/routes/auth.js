const { Router } = require('express')
const User = require('../database/schema/user')
const { hashPassword } = require('../utils/helpers')

const router = Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    if (req.session.user) {
      if (req.session.user.username === username) {
        res.send(req.session.user)
      } else {
        req.session.user = {
          username
        }
        res.send(req.session.user.username)
      }
    } else {
      req.session.user = {
        username
      }
      res.send(req.session)
    }
  } else res.status(401).send('Error please enter valid details')
})

router.post('/register', async (req, res) => {
  const { username, email } = req.body

  const userDB = await User.findOne({ $or: [{ username }, { email }] })
  if (userDB) {
    res.status(400).json({ msg: 'User already exists' })
  } else {
    const password = hashPassword(req.body.password)
    console.log(password)
    const newUser = await User.create({ username, password, email })
    newUser.save()
    res.status(201).json({ statusMsg: 'User created' })
  }
})

module.exports = router
