const express = require('express');
const categoryController = require('../controller/categoryController');
const checkCategoryExistence = require('../middleware/checkCategory'); // Import middleware

const router = express.Router();

//Routes
router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);        
router.get('/categories/:id', checkCategoryExistence, categoryController.getCategoryById); // Gunakan middleware checkCategoryExistence sebelum getCategoryById
router.put('/categories/:id', checkCategoryExistence, categoryController.updateCategory); // Gunakan middleware checkCategoryExistence sebelum updateCategory
router.delete('/categories/:id', checkCategoryExistence, categoryController.deleteCategory); // Gunakan middleware checkCategoryExistence sebelum deleteCategory

module.exports = router;
