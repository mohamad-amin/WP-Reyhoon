const mongoose = require('mongoose');
const ChapterSchema = require('./chapter').schema;

const BookSchema = new mongoose.Schema({
    name: String,
    chapters: [ChapterSchema],
    tags: [String]
});

module.exports = {
    schema: BookSchema,
    model: mongoose.model('Book', BookSchema)
};
