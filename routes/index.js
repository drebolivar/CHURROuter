const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> res.send(`Chu are routing with CHURROuter`))

module.exports = router;