const {Router} = require('express')
const { AdventureModel } = require('../models/adventure.model')

const AdventureRouter = Router()

AdventureRouter.get('/',async(req,res)=>{
    try{
        const adventures = await AdventureModel.find()
        res.send(adventures)
    }catch(error){
        console.log(error)
        res.status(400).send("Error while fetching Adventures")
    }
})

AdventureRouter.get('/:id',async(req,res)=>{
    try{
        const adventures = await AdventureModel.findOne({_id:req.params.id})
        res.send(adventures)
    }catch(error){
        console.log(error)
        res.status(400).send("Error while fetching Adventures")
    }
})

module.exports = {AdventureRouter}