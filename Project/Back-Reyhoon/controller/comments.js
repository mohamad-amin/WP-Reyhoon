const Comment = require('../model/comment');
const Restaurant = require('../model/restaurant');

function handleErrorData(error, data, res) {
    if (error) {
        res.status(400).send(error);
    } else {
        res.send(data);
    }
}

exports.addComment = function(restaurantId, requestBody, res) {

    let com = new Comment({
        author: requestBody.author,
        quality: requestBody.quality,
        packaging: requestBody.packaging,
        deliveryTime: requestBody.deliveryTime,
        text: requestBody.text,
        created_at: requestBody.created_at
    })
    com.save().then(() => {
        Restaurant.findById(restaurantId)
            .exec((error, data) => {
                if (error) {
                    handleErrorData(error, null, res)
                } else {
                    data.comments.push(com);
                    data.save().then(() => handleErrorData(error, data, res), err => handleErrorData(err, data, res));
                }
            });
    });

}
