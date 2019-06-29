const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    city: String,
    area: String,
    addressLine: String
});

module.exports = mongoose.model('Address', AddressSchema);
