const express = require("express")
const cors = require('cors')
const { connection } = require("./config/db")
const { hotelRouter } = require("./routes/hotels.route")
const { AdventureRouter } = require("./routes/adventures.route")
const { AdventureModel } = require("./models/adventure.model")
const { HotelModel } = require("./models/hotel.model")
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Base endpoint")
})

app.use('/hotels',hotelRouter)
app.use('/adventures',AdventureRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log('Connection Done')
    }catch(error){
        console.log(error)
    }
})