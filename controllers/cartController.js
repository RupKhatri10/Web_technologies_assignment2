// cartController.js

const cartService = require('../services/cartService');

async function addToCart(req, res) {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    try {
        const cart = await cartService.addToCart(userId, productId, quantity);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function removeFromCart(req, res) {
    const { userId, productId } = req.body;

    try {
        const cart = await cartService.removeFromCart(userId, productId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addToCart,
    removeFromCart
};
