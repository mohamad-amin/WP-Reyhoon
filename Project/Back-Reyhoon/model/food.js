const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    foodSet: String
});

module.exports = mongoose.model('Food', FoodSchema);
