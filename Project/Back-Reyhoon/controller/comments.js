const Comment = require('../models/comments');
const Restaurant = require('../models/restaurant');

function handleErrorData(error, data, res) {
    if (error) {
        res.status(400).send(error);
    } else {
        res.send(data);
    }
}

exports.addComment = function(restaurantId, requestBody, res){

    new Comment({
        id: requestBody.id,
        author: requestBody.author,
        quality: requestBody.quality,
        packaging: requestBody.packaging,
        deliveryTime: requestBody.deliveryTime,
        text: requestBody.text,
        created_at: body.created_at
    }).save().then(saved => {
       if (saved) {
           Restaurant.findOne({'id' : restaurantId}, function(err, data) {
                if (err) {
                    handleErrorData(err, null, res);
                } else {
                    data.comments.push(comment);
                    data.save().then(saved => {
                        if (saved) {
                            console.log('Comment Added!');
                        } else {
                            throw error; // Todo: check
                        }
                    }).catch(err => {
                        handleErrorData(err, null, res);
                    });
                }
            });
       }  else {
           throw error; // Todo: check
       }
    }).catch(err => {
        handleErrorData(err, null, res);
    });

};
