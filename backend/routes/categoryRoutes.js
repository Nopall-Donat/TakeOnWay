const express = require('express');
const categoryController = require('../controller/categoryController');
const Category = require('../models/category');

const router = express.Router();

//Middleware
const cekCategory = async (req, res, next) => {
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      next(); // Lanjutkan ke router kategori jika kategori ditemukan
    } catch (err) {
      console.error('Error checking category existence:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

//Routes
router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);        
router.get('/categories/:id', cekCategory, categoryController.getCategoryById); // Gunakan middleware cekCategory sebelum getCategoryById
router.put('/categories/:id', cekCategory, categoryController.updateCategory); // Gunakan middleware cekCategory sebelum updateCategory
router.delete('/categories/:id', cekCategory, categoryController.deleteCategory); // Gunakan middleware cekCategory sebelum deleteCategory

module.exports = router;
