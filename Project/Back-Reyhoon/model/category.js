const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Category', CategorySchema);
