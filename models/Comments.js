const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);