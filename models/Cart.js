const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    quantities: [{
        type: Number,
        default: 1
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;