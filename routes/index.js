const {Router} = require('express');
const controller = require('../controller')
const router = Router();

router.get('/', (req, res)=> res.send(`You are routing with CHURROuter`))

router.get('/churro', controller.getChurros)

module.exports = router;