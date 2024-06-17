const db = require("../library/database");

const Category = {
  create: async (categoryData) => {
    const { name_category } = categoryData;
    const sql = "INSERT INTO tbl_categories (name_category) VALUES (?)";
    try {
      const [result] = await db.query(sql, [name_category]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, categoryData) => {
    const { name_category } = categoryData;
    const sql =
      "UPDATE tbl_categories SET name_category = ? WHERE id_category = ?";
    try {
      const [result] = await db.query(sql, [name_category, id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    const sql = "DELETE FROM tbl_categories WHERE id_category = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    const sql = "SELECT * FROM tbl_categories WHERE id_category = ?";
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
    
  autoInc: async () => {
    const sql = "ALTER TABLE tbl_categories AUTO_INCREMENT = 0;";
    try {
      return await db.query(sql);
    } catch (err) {
      throw err;
    }
  },

  resetId: async(id, newId) => {
    const sql = "UPDATE tbl_categories SET id_category = ? WHERE id_category = ?;";
    try {
      return await db.query(sql, [newId, id]);
    } catch (err) {
      throw err;
    }
  }
};

module.exports = Category;
