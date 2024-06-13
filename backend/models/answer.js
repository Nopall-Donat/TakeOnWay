const db = require("../library/database");

const Answer = {
  create: async (answerData) => {
    const { user_id, discussion_id, answer } = answerData;
    const sql =
      "INSERT INTO tbl_answers (user_id, discussion_id, answer, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())";
    try {
      const [result] = await db.query(sql, [user_id, discussion_id, answer]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, answerData) => {
    const { user_id, discussion_id, answer } = answerData;
    const sql =
      "UPDATE tbl_answers SET user_id = ?, discussion_id = ?, answer = ?, updated_at = NOW() WHERE id_answer = ?";
    try {
      const [result] = await db.query(sql, [
        user_id,
        discussion_id,
        answer,
        id,
      ]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    const sql = "DELETE FROM tbl_answers WHERE id_answer = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (err) {
      throw err;
    }
  },

  findById: async (id) => {
    const sql = "SELECT * FROM tbl_answers WHERE id_answer = ?";
    try {
      const [result] = await db.query(sql, [id]);
      return result[0];
    } catch (err) {
      throw err;
    }
  },

  findAll: async () => {
    const sql = "SELECT * FROM tbl_answers";
    try {
      const [result] = await db.query(sql);
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Answer;
