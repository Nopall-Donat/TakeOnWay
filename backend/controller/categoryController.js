const Category = require('../models/category');

exports.createCategory = (req, res) => {
  const categoryData = req.body;
  Category.create(categoryData, (err, result) => {
    if (err) {
      console.error('Failed to add category:', err);
      return res.status(500).send('Failed to add category');
    }
    res.status(201).send('Category added successfully');
  });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const categoryData = req.body;
  Category.update(id, categoryData, (err, result) => {
    if (err) {
      console.error('Failed to update category:', err);
      return res.status(500).send('Failed to update category');
    }
    res.status(200).send('Category updated successfully');
  });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.delete(id, (err, result) => {
    if (err) {
      console.error('Failed to delete category:', err);
      return res.status(500).send('Failed to delete category');
    }
    res.status(200).send('Category deleted successfully');
  });
};

exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findById(id, (err, category) => {
    if (err) {
      console.error('Failed to get category:', err);
      return res.status(500).send('Failed to get category');
    }
    res.status(200).json(category);
  });
};

exports.getAllCategories = (req, res) => {
  Category.findAll((err, categories) => {
    if (err) {
      console.error('Failed to get categories:', err);
      return res.status(500).send('Failed to get categories');
    }
    res.status(200).json(categories);
  });
};
