const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
   name: String,
   keys: [String]
});

module.exports = {
   schema: ChapterSchema,
   model: mongoose.model('Chapter', ChapterSchema)
};
