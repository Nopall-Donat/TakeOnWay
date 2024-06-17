const Category = require("../models/category");

exports.createCategory = (req, res) => {
  const categoryData = req.body;
  Category.create(categoryData)
    .then((result) => {
      res.status(201).send("Category added successfully");
    })
    .catch((err) => {
      console.error("Failed to add category:", err);
      res.status(500).send("Failed to add category");
    });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const categoryData = req.body;
  Category.update(id, categoryData)
    .then((result) => {
      res.status(200).send("Category updated successfully");
    })
    .catch((err) => {
      console.error("Failed to update category:", err);
      res.status(500).send("Failed to update category");
    });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.delete(id)
    .then((result) => {
      res.status(200).send("Category deleted successfully");
      Category.findAll().then(categories => {
        categories.forEach((e, i) => {
          if(e.id_category > id) {
            let oldId = e.id_category;
            let newId = e.id_category - 1;
            Category.resetId(oldId, newId)
          }
        });
      })
      Category.autoInc();
    })
    .catch((err) => {
      console.error("Failed to delete category:", err);
      res.status(500).send("Failed to delete category");
    });
};

exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.error("Failed to get category:", err);
      res.status(500).send("Failed to get category");
    });
};

exports.getAllCategories = (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error("Failed to get categories:", err);
      res.status(500).send("Failed to get categories");
    });
};
