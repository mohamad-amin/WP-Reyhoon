const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    author: String,
    packaging: Number,
    deliveryTime: Number,
    text: String,
    created_at: Date,
    quality: {
        type: Number,
        min: 0,
        max: 5
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
