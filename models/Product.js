const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    },
    shippingCost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);