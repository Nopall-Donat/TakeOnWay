const db = require("../library/database");

const Category = {
  create: async (categoryData) => {
    const { name_categories } = categoryData;
    const sql = "INSERT INTO tbl_categories (name_categories) VALUES (?)";
    try {
      const [result] = await db.query(sql, [name_categories]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, categoryData) => {
    const { name_categories } = categoryData;
    const sql =
      "UPDATE tbl_categories SET name_categories = ? WHERE id_categories = ?";
    try {
      const [result] = await db.query(sql, [name_categories, id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    const sql = "DELETE FROM tbl_categories WHERE id_categories = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    const sql = "SELECT * FROM tbl_categories WHERE id_categories = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async () => {
    const sql = "SELECT * FROM tbl_categories";
    try {
      const [result] = await db.query(sql);
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Category;
