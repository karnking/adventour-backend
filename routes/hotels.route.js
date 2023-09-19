const {Router, query} = require('express')
const { HotelModel } = require('../models/hotel.model')

const hotelRouter = Router()

hotelRouter.get('/',async(req,res)=>{
    try{
        const {price,stars,feature,assured,sort,city} = req.query
        let q = {}
        let hotels = []
        if(price) q.price = {$lte:price}
        if(city) q.city = city
        if(stars) q.stars = {$gte:stars}
        if(feature) q.feature = feature
        if(assured) q.assured = assured=="true"
        if(sort && sort!='') hotels= HotelModel.find(q).sort({price:sort})
        else hotels = await HotelModel.find(q)
        res.send(hotels)
    }catch(error){
        console.log(error)
        res.status(400).send("Error while fetching hotels")
    }
})

hotelRouter.get('/:id',async(req,res)=>{
    try{
        const hotels = await HotelModel.findOne({_id:req.params.id})
        res.send(hotels)
    }catch(error){
        console.log(error)
        res.status(400).send("Error while fetching hotels")
    }
})

module.exports = {hotelRouter}