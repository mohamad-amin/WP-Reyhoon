const Food = require("../model/food");
const Address = require("../model/address");
const Category = require("../model/category");
const Restaurant = require("../model/restaurant");

function handleErrorData(error, data, res) {
    if (error) {
        res.status(400).send(error);
    } else {
        console.log(data);
        res.send(data);
    }
}

exports.getRestaurants = function (city, area, categories, res) {
    let query = {
        'address.city': city,
        'address.area': area
    };
    if (categories && categories.length !== 0) {
        query['categories.name'] = {$in: categories}
    }
    console.log('Query is: ' + query);
    Restaurant.find(query).exec((error, data) => handleErrorData(error, data, res));
};

exports.getRestaurantById = function (id, res) {
    Restaurant.findById(id)
        .exec((error, data) => handleErrorData(error, data, res));
};

exports.createRestaurant = function (requestBody, res) {

    let address = new Address({
        city: requestBody.address.city,
        area: requestBody.address.area,
        addressLine: requestBody.address.addressLine
    });

    let categories = requestBody.categories.map(category => new Category({
        name: category.name
    }));

    let foods = requestBody.foods.map(food => new Food({
        name: food.name,
        price: food.price,
        description: food.description,
        foodSet: food.foodSet
    }));

    let restaurant = new Restaurant({
        name: requestBody.name,
        logo: requestBody.logo,
        openingTime: requestBody.openingTime,
        closingTime: requestBody.closingTime,
        averageRate: requestBody.averageRate,
        address: address,
        categories: categories,
        foods: foods,
        comments: []
    });

    address.save()
        .then(() => Category.insertMany(categories))
        .then(() => Food.insertMany(foods))
        .then(() => restaurant.save())
        .then(
            () => res.send('Restaurant Created!'),
            err => handleErrorData(err, null, res)
        );

};

exports.getRestaurantComments = function (id, res) {
    Restaurant.find({'_id': id})
        .sort('-created_at')
        .select('comments')
        .exec((error, data) => handleErrorData(error, data, res))
        .sort();
};
