const mongoose = require('mongoose')

const AdventureSchema = mongoose.Schema({
    category: String,
    main_image: String,
    title: String,
    reviews:Number,
    destination:String,
    age_range:String,
    tour_operator:String,
    travel_style:Array,
    highlights:Array,
    tour_length:String,
    str_price:mongoose.Decimal128,
    act_price:mongoose.Decimal128,
    off:Number,
    rating:mongoose.Decimal128,
    group_size:Number,
    places_see_img:Array,
    places_see_name:Array,
    user_ratings:Array
})

const AdventureModel = mongoose.model("adventure",AdventureSchema)

module.exports = {AdventureModel}