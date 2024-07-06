const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    recordingOfSale: {
        type: String,
        required: true
    },
});

exports.Order = mongoose.model('Order', orderSchema);