const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
const registerUser = async (userData) => {
    try {
        // Create a new user using the User schema
        const newUser = new User(userData);
        // Save the user to the database
        await newUser.save();
        return { success: true, message: 'User registered successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// User login
const loginUser = async (email, password) => {
    try {
        // Find the user with the provided email
        const user = await User.findOne({ email });
        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }
        // Check if the provided password matches the user's password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return { success: false, message: 'Invalid email or password' };
        }
        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, "thisisasecretkey");
        return { success: true, message: 'User logged in successfully', token };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = {
    registerUser,
    loginUser,
};