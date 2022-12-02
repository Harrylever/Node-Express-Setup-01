const { Router } = require('express')
const User = require('../database/schema/user')
const { hashPassword, comparePassword } = require('../utils/helpers')

const router = Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).send('Forbidden')
  const userDB = await User.findOne({ email })
  if (!userDB) return res.status(401).send('Unauthorized')
  const isValid = comparePassword(password, userDB.password)
  if (isValid) {
    req.session.user = userDB
    return res.status(200).send('Successfully Logged in')
  } else {
    return res.status(400).send('Error logging in')
  }
})

router.post('/register', async (req, res) => {
  const { email } = req.body

  const userDB = await User.findOne({ email })
  if (userDB) {
    res.status(400).json({ msg: 'User already exists' })
  } else {
    const password = hashPassword(req.body.password)
    console.log(password)
    const newUser = await User.create({ email, password })
    newUser.save()
    res.status(201).json({ statusMsg: 'User created' })
  }
})

module.exports = router
