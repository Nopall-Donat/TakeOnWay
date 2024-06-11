const db = require('../library/database');

const Discussion = {
  create: async (discussionData, callback) => {
    const { user_id, category_id, title } = discussionData;
    const sql = 'INSERT INTO tbl_discussions (user_id, category_id, title, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())';
    try {
      const [result] = await db.query(sql, [user_id, category_id, title]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
  
  update: async (id, discussionData, callback) => {
    const { user_id, category_id, title } = discussionData;
    const sql = 'UPDATE tbl_discussions SET user_id = ?, category_id = ?, title = ?, updated_at = NOW() WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [user_id, category_id, title, id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
  
  delete: async (id, callback) => {
    const sql = 'DELETE FROM tbl_discussions WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  findById: async (id, callback) => {
    const sql = 'SELECT * FROM tbl_discussions WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [id]);
      callback(null, result[0]);
    } catch (err) {
      callback(err);
    }
  },

  findAll: async (callback) => {
    const sql = 'SELECT * FROM tbl_discussions';
    try {
      const [result] = await db.query(sql);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
};

module.exports = Discussion;
