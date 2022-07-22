const {Router} = require('express');
const controller = require('../controller')
const router = Router();

router.get('/', (req, res)=> res.send(`You're routing with CHURROuter`))

router.get('/churro', controller.getChurros)

router.post('/churro', controller.createChurro)

router.get('/churro/:id', controller.getChurroById)

module.exports = router;