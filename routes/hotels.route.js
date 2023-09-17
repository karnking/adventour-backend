const {Router} = require('express')
const { HotelModel } = require('../models/hotel.model')

const hotelRouter = Router()

hotelRouter.get('/',async(req,res)=>{
    try{
        const hotels = await HotelModel.find()
        console.log(hotels)
        res.send(hotels)
    }catch(error){
        console.log(error)
        res.status(400).send("Error while fetching hotels")
    }
})

module.exports = {hotelRouter}