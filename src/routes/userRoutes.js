// src/routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.post('/create', (req, res) => userController.createUser(req, res));
router.post('/signin', (req, res) => userController.signIn(req, res));

module.exports = router;