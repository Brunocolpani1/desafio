const express = require('express');

const usersRouter = require('./users');
const financesRouter = require('./finances');
const currentRouter = require('./currentMoney');
const goingRouter = require('./goingCancun');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger');
const juros = require('./juros')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('App online!');
});

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/users', usersRouter);
router.use('/finances', financesRouter);
router.use('/currentMoney', currentRouter);
router.use('/goingCancun', goingRouter);
router.use('/juros', juros);

module.exports = router;