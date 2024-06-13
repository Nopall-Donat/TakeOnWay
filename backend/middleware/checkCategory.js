const Category = require("../models/category");

const checkCategoryExistence = async (req, res, next) => {
    const id = req.params.id;
    try {
        const category = await Category.findById(id);
        if (!category) {
        return res.status(404).json({ message: "Category not found" });
        }
        req.category = category;
        next(); // Lanjutkan ke router kategori jika kategori ditemukan
    } catch (err) {
        console.error("Error checking category existence:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = checkCategoryExistence;
