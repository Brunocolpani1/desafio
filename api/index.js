const express = require('express')

const usersRouter = require('./users')
const financesRouter = require('./finances')
const viabilityRouter = require('./currentMoney')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App online!')
})

router.use('/users', usersRouter)
router.use('/finances', financesRouter)
router.use('/currentMoney', viabilityRouter)

module.exports = router