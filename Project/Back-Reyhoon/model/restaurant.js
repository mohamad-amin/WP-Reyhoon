var mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    id: String, // or an autoincreament number,
    name: String, // name of restaurant
    logo: String, // src of logo image
    openingTime: Number, // time of opening
    closingTime: Number, // time of closing
    averageRate: Number, // average of comments rate

    address: {
        ref: 'Address',
        type: mongoose.Schema.Types.ObjectId
    },

    // array of food categories. e.g. fastfood or irani
    categories: [{
        ref: 'Category',
        type: mongoose.Schema.Types.ObjectId
    }],

    foods: [{
        ref: 'Food',
        type: mongoose.Schema.Types.ObjectId
    }],

    comments: [{
        ref: 'Comment',
        type: mongoose.Schema.Types.ObjectId
    }]

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
