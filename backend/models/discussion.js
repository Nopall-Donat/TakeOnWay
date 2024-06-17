const db = require('../library/database');

const Discussion = {
  create: async (discussionData) => {
    const { user_id, category_id, title } = discussionData;
    const sql = 'INSERT INTO tbl_discussions (user_id, category_id, title, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())';
    try {
      const [result] = await db.query(sql, [user_id, category_id, title]);
      return result;
    } catch (err) {
      throw err;
    }
  },
  
  update: async (id, discussionData) => {
    const { user_id, category_id, title } = discussionData;
    const sql = 'UPDATE tbl_discussions SET user_id = ?, category_id = ?, title = ?, updated_at = NOW() WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [user_id, category_id, title, id]);
      return result;
    } catch (err) {
      throw err;
    }
  },
  
  delete: async (id) => {
    const sql = 'DELETE FROM tbl_discussions WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM tbl_discussions WHERE id_discussion = ?';
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async (callback) => {
    const sql = 'SELECT * FROM tbl_discussions';
    try {
      const [result] = await db.query(sql);
      return result;
    } catch (err) {
      throw err;
    }
  },
    
  autoInc: async () => {
    const sql = "ALTER TABLE tbl_discussions AUTO_INCREMENT = 0;";
    try {
      return await db.query(sql);
    } catch (err) {
      throw err;
    }
  },

  resetId: async(id, newId) => {
    const sql = "UPDATE tbl_discussions SET id_discussion = ? WHERE id_discussion = ?;";
    try {
      return await db.query(sql, [newId, id]);
    } catch (err) {
      throw err;
    }
  }
};

module.exports = Discussion;
