const express = require('express');
const router = express.Router();

const cartRoutes = require('./cartRoutes');
const userRoutes = require('./userRoutes');

router.use('/cart', cartRoutes);
router.use('/user', userRoutes);

module.exports = router;
