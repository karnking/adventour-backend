const mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    main_img: String,
    places_see_img: Array,
    title: String,
    reviews:Number,
    address:String,
    stars:mongoose.Decimal128,
    about:Array,
    description:String,
    utils:Array,
    phone:String,
    price:Number,
    off:String,
    city:String,
    feedback:Array
})

const HotelModel = mongoose.model("hotel",HotelSchema)

module.exports = {HotelModel}