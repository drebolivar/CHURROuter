const Churro = require('../models/churro')

const getChurros = async (req, res) =>{
    try{
        const churros = await Churro.find()
        return res.status(200).json({churros})
    } catch (e){
        return res.status(500).send(e.message);
    }
}

const createChurro = async(req, res) =>{
    try{
        const churro = await new Churro(req.body)
        await churro.save()
        return res.status(201).json({
            churro,
        });
    }catch (e){
        return res.status(500).json({error: e.message})
    }
}

const getChurroById = async (req, res) =>{
    try{
        const {id} = req.params;
        const churro = await Churro.findById(id)
        if(churro) {
            return res.status(200).json({churro})
        }        
        return res.status(404).send('Churro with the specified ID does not exist')
    }catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getChurros, createChurro, getChurroById
}