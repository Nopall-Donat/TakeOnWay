// config/db.js

const mysql = require('mysql2');

// Buat koneksi ke database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_tow',
  waitForConnections: true,
});

module.exports = pool.promise(); 