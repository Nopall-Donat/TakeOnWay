const mysql = require('mysql2');
const dbConfig = require('./library/database');

const db = mysql.createConnection(dbConfig);

// Menguji koneksi dengan query sederhana
db.query('SELECT 1 + 1 AS result', (error, results, fields) => {
  if (error) {
    console.error('Gagal terhubung ke database:', error);
    return;
  }
  console.log('Berhasil terhubung ke database. Hasil query:', results[0].result);
});

// Menutup koneksi setelah selesai
db.end();
