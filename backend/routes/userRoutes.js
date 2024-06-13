// routes/userRoutes.js

const express = require('express');
const userController = require('../controller/userController');
const checkUserExistence = require('../middleware/checkUser'); // Import middleware

const router = express.Router();

// Routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);        
router.get('/users/:id', checkUserExistence, userController.getUserById); // Menggunakan middleware checkUserExistence sebelum getUserById
router.put('/users/:id', checkUserExistence, userController.updateUser); // Menggunakan middleware checkUserExistence sebelum updateUser
router.delete('/users/:id', checkUserExistence, userController.deleteUser); // Menggunakan middleware checkUserExistence sebelum deleteUser

module.exports = router;
