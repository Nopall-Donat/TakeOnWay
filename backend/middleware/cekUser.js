const User = require('../models/user'); // Import model User

const cekUserExistence = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = user; // Menyimpan data user ke dalam objek request untuk digunakan di endpoint berikutnya
    next();
  } catch (err) {
    console.error('Error checking user existence:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = cekUserExistence;