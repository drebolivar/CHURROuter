const Churro = require('../models/churro')

const getChurros = async (req, res) =>{
    try{
        const churros = await Churro.find()
        return res.status(200).json({churros})
    } catch (e){
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getChurros
}