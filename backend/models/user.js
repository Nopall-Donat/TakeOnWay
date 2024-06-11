const db = require('../library/database');

const User = {
  create: async (userData, callback) => {
    const { username, email, password, picture } = userData;
    const sql = 'INSERT INTO tbl_users (username, email, password, picture) VALUES (?, ?, ?, ?)';
    try {
      const [result] = await db.query(sql, [username, email, password, picture]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
  
  update: async (id, userData, callback) => {
    const { username, email, password, picture } = userData;
    const sql = 'UPDATE tbl_users SET username = ?, email = ?, password = ?, picture = ? WHERE id_user = ?';
    try {
      const [result] = await db.query(sql, [username, email, password, picture, id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
  
  delete: async (id, callback) => {
    const sql = 'DELETE FROM tbl_users WHERE id_user = ?';
    try {
      const [result] = await db.query(sql, [id]);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM tbl_users WHERE id_user = ?';
    try {
        const [result] = await db.query(sql, [id]);
        return result[0]; 
    } catch (err) {
        throw err; 
    }
},


  findAll: async (callback) => {
    const sql = 'SELECT * FROM tbl_users';
    try {
      const [result] = await db.query(sql);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
};

module.exports = User;
