var express = require('express');
var router = express.Router();

/* GET all restaurants. */
router.get('/', function(req, res, next) {
  // Todo: call controller
});

/* GET one restaurant. */
router.get('/:id', function(req, res, next) {
  // Todo: call controller
});

/* Create a restaurant. */
router.post('/:id/', function(req, res, next) {
  // Todo: call controller
});

/* GET one restaurant's comments. */
router.get('/:id/comments', function(req, res, next) {
  // Todo: call controller
});

/* POST a new comment for one restaurant. */
router.post('/:id/comments',function(req,res){
  // Todo: call controller
});

module.exports = router;
