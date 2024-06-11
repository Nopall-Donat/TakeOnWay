const db = require('../library/database');

const Category = {
  create: async (categoryData, callback) => {
    const { name } = categoryData;
    const sql = 'INSERT INTO tbl_categories (name_categories) VALUES (?)';
    try {
      const [result] = await db.query(sql, [name]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  update: async (id, categoryData, callback) => {
    const { name } = categoryData;
    const sql = 'UPDATE tbl_categories SET name_categories = ? WHERE id_categories = ?';
    try {
      const [result] = await db.query(sql, [name, id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  delete: async (id, callback) => {
    const sql = 'DELETE FROM tbl_categories WHERE id_categories = ?';
    try {
      const [result] = await db.query(sql, [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM tbl_categories WHERE id_categories = ?';
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async (callback) => {
    const sql = 'SELECT * FROM tbl_categories';
    try {
      const [result] = await db.query(sql);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
};

module.exports = Category;
