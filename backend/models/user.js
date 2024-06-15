const db = require("../library/database");

const User = {
  create: async (userData) => {
    const { username, email, password, picture } = userData;
    const sql =
      "INSERT INTO tbl_users (username, email, password, picture) VALUES (?, ?, ?, ?)";
    try {
      const [result] = await db.query(sql, [
        username,
        email,
        password,
        picture,
      ]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, userData) => {
    const { username, email, password, picture } = userData;
    const sql =
      "UPDATE tbl_users SET username = ?, email = ?, password = ?, picture = ? WHERE id_user = ?";
    try {
      const [result] = await db.query(sql, [
        username,
        email,
        password,
        picture,
        id,
      ]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    const sql = "DELETE FROM tbl_users WHERE id_user = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    const sql = "SELECT * FROM tbl_users WHERE id_user = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async () => {
    const sql = "SELECT * FROM tbl_users";
    try {
      const [result] = await db.query(sql);
      return result;
    } catch (err) {
      throw err;
    }
  },
  
  autoInc: async () => {
    const sql = "alter table tbl_users auto_increment = 0;";
    try {
      return await db.query(sql);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = User;
