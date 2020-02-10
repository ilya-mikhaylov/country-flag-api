const mongoose = require ('mongoose');

const restaurantSchema = new mongoose.Schema ({
    name: String,
    location: String,
    kitchen: String,
    average: Number,
    reviews: Array,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
