const {Router} = require('express')

const hotelRouter = Router()

hotelRouter.get('/',(req,res)=>{
    res.send("Hotel base")
})

module.exports = {hotelRouter}