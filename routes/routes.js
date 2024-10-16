const express = require('express');
const router = express.Router();
const { setUser } = require('../controller/userController');

router.post('/setUser', setUser); // Using the controller function

module.exports = router;
