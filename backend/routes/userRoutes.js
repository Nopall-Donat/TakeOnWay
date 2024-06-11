// routes/userRoutes.js

const express = require('express');
const userController = require('../controller/userController');
const cekUserExistence = require('../middleware/cekUser'); // Import middleware

const router = express.Router();

// Routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);        
router.get('/users/:id', cekUserExistence, userController.getUserById); // Menggunakan middleware cekUserExistence sebelum getUserById
router.put('/users/:id', cekUserExistence, userController.updateUser); // Menggunakan middleware cekUserExistence sebelum updateUser
router.delete('/users/:id', cekUserExistence, userController.deleteUser); // Menggunakan middleware cekUserExistence sebelum deleteUser

module.exports = router;
