const mongoose = require('mongoose');
const Address = require('./address')
const Category = require('./category')
const Food = require('./food')
const Comment = require('./comment')

const RestaurantSchema = new mongoose.Schema({
    name: String,
    logo: String,
    openingTime: Number,
    closingTime: Number,
    averageRate: Number,
    address: mongoose.model('Address').schema,
    categories: [mongoose.model('Category').schema],
    foods: [mongoose.model('Food').schema],
    comments: [mongoose.model('Comment').schema]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
