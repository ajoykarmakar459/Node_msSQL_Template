'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', (req,res)=>userController.registerAccount(req, res))


module.exports = {
    routes: router
}
