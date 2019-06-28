const Food = require("../model/food");
const Address = require("../model/address");
const Category = require("../model/category");
const Restaurant = require("../model/restaurant");

function handleErrorData(error, data, res) {
    if (error) {
        res.status(400).send(error);
    } else {
        res.send(data);
    }
}

exports.getRestaurants = function (city, area, categories, res) {
    query = {
        'address.city': city,
        'address.area': area
    };
    if (categories.length !== 0) {
        query['categories.name'] = {$in: categories} // Todo: Check
    }
    Restaurant.find(query, function (error, data) {
        handleErrorData(error, data, res);
    });
};

exports.getRestaurantById = function (id, res) {
    Restaurant.find({'id': id}, function (error, data) {
        handleErrorData(error, data, res);
    })
};

exports.createRestaurant = function (requestBody, res) {
    
    let restaurant = new Restaurant();
    restaurant.id = requestBody.id;
    restaurant.name = requestBody.name;
    restaurant.logo = requestBody.name;
    restaurant.openingTime = requestBody.openingTime;
    restaurant.closingTime = requestBody.closingTime;
    restaurant.averageRate = requestBody.averageRate;

    let address = new Address();
    address.id = requestBody.address.id;
    address.city = requestBody.address.city;
    address.area = requestBody.address.area;
    address.addressLine = requestBody.address.addressLine;
    restaurant.address = address;

    let foods = [];
    requestBody.foods.forEach(food => {
        var new_food = new Food();
        new_food.id = food.id;
        new_food.name =food.name;
        new_food.price = food.price;
        new_food.description = food.description;
        new_food.foodSet = food.foodSet;
        foods.push(new_food);
        restaurant.foods.push(newFood);
    });

    let categories = [];
    requestBody.categories.forEach(category => {
        var new_category = new Category();
        new_category.id = category.id;
        new_category.name = category.name;
        categories.push(new_category);
        restaurant.categories.push(new_category);
    });

    address.save()
        .then(saved => {
            if (saved) {
                categories.forEach(category => {
                    category.save();
                });
            } else {
                throw error; // Todo: check
            }
        })
        .then(saved => {
            if (saved) {
                foods.forEach(food => {
                    food.save();
                })
            } else {
                throw error; // Todo: check
            }
        })
        .then(saved => {
            if (saved) {
                restaurant.save();
            } else {
                throw error;
            }
        })
        .then(saved => {
            if (saved) {
                res.send('Restaurant Created!');
            } else {
                throw error;
            }
        })
        .catch(err => {
            handleErrorData(err, null, res);
        });

};

exports.getRestaurantComments = function (id, res) {
    Restaurant.find({'id': id}, 'comments').sort('-created_at').exec(function (error, data) {
        handleErrorData(error, data, res);
    }).sort();
};
