const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const groceriesRoute = require('./routes/groceries')
const marketRoute = require('./routes/markets')
const authRoute = require('./routes/auth')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(session({
  secret: 'dgldfgjisfjmm4j549jk9fkg;m43k56edgiiwdcs',
  resave: false,
  saveUninitialized: false
}))

// Middleware function for logging request routes and methods
app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url}`)
  next()
})

app.use('/api/v1/groceries', groceriesRoute)
app.use('/api/v1/markets', marketRoute)
app.use('/api/v1/auth', authRoute)

app.listen(PORT, () => {
  console.log(`Running Express Server on Port ${PORT}`)
})
