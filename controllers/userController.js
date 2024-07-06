const userService = require('../services/userService');

// Controller function to handle user registration
async function registerUser(req, res) {
    try {
        // const { username, password, email, shippingAddress } = req.body;
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controller function to handle user login
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const {token} = await userService.loginUser(email, password);
        res.status(200).json({ 
            message: 'User logged in successfully', 
            token: token
         });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerUser,
    loginUser,
};