const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        // Get the bearer token from the request headers
        const token = req.headers.authorization.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, "thisisasecretkey");

        // Find the user associated with the token
        const user = await User.findById(decoded.userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Attach the user object to the request
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = auth;