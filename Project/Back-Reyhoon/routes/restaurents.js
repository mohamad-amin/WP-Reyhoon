var express = require('express');

var comment = require('../controller/comments');
var restaurant = require('../controller/restaurants');
var router = express.Router();

/* GET all restaurants. */
router.get('/', function(req, res, next) {
    let city = req.query.city;
    let area = req.query.area;
    let categories = req.query.category;
    restaurant.getRestaurants(city, area, categories, res);
});

/* GET one restaurant. */
router.get('/:id', function(req, res, next) {
  restaurant.getRestaurantById(req.params.id, res);
});

/* Create a restaurant. */
router.post('/:id/', function(req, res, next) {
  restaurant.createRestaurant(req.body, res);
});

/* GET one restaurant's comments. */
router.get('/:id/comments', function(req, res, next) {
  restaurant.getRestaurantComments(req.params.id, res);
});

/* POST a new comment for one restaurant. */
router.post('/:id/comments',function(req,res, next) {
    comment.addComment(req.params.id, req.body, res);
});

module.exports = router;
