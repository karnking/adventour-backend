const express = require("express")
const cors = require('cors')
const { connection } = require("./config/db")
const { hotelRouter } = require("./routes/hotels.route")
const { HotelModel } = require("./models/hotel.model")
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

HotelModel.insertMany([{
    "city":"Dubai",
    "category":"HOTEL",
    "main_img": "https://cdn1.goibibo.com/voy_ing/t_g/eaf36a569bc611e8a5dd0a9df65c8753.jpg",
    "places_see_img" : [
      "https://cdn1.goibibo.com/voy_ing/t_g/de2d2c8a946011e7b4dd025f77df004f.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_g/e8b18f489bc611e8b11d02ca8202b952.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_g/e0807aaa946011e7b5a30a4cef95d023.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_g/4ce444c81e4411eaa4030242ac110006.jpg"
    ],
    "title": "Howard Johnson by Wyndham Bur Dubai",
    "reviews": 2427,
    "address": "Howard Johnson by Wyndham Bur Dubai",
    "stars": 4.1,
    "description": "Get what you’re looking for with the style and service you want, all at a great price. We have what matters most to you, like a comfortable bed, a delicious breakfast and fresh coffee. You will also find high speed internet access, and delicious, simple food. Four Points by Sheraton Ahmedabad has a great location in the heart of the city. We are just 10km from Ahmedabad airport, 3km from the railway station and 1.5km from Paldi bus station. Shopping is just minutes away from our door. Our well-equipped meeting rooms and pre-function area totals 288 square meters. Let our team of dedicated professionals work with you to host your special event. Whether you are in town for business or leisure, convenience, comfort and value are everywhere at Four Points by Sheraton Ahmedabad.",
    "utils": [
      "Allergy-free room",
      "Blackout curtains",
      "Desk",
      "Housekeeping",
      "Coffee / tea maker",
      "Cable / satellite TV",
      "Sofa bed",
      "Walk-in shower"
    ],
    "phone": "084463 10595",
    "price": 5599
  }])

app.get('/',(req,res)=>{
    res.send("Base endpoint")
})

app.use('/hotels',hotelRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log('Connection Done')
    }catch(error){
        console.log(error)
    }
})