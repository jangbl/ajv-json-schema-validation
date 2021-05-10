const express = require('express');
const userController = require('../controller/user-controller');
const validateDto = require('../middleware/validate-dto');
const userSchema = require('../schema/user');

const router = express.Router();
router.post('/register', validateDto(userSchema), userController.register);

module.exports = router;
