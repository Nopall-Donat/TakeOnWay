const User = require('../models/user');

exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (err, result) => {
    if (err) {
      console.error('Failed to add user:', err);
      return res.status(500).send('Failed to add user');
    }
    res.status(201).send('User added successfully');
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  User.update(id, userData, (err, result) => {
    if (err) {
      console.error('Failed to update user:', err);
      return res.status(500).send('Failed to update user');
    }
    res.status(200).send('User updated successfully');
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, result) => {
    if (err) {
      console.error('Failed to delete user:', err);
      return res.status(500).send('Failed to delete user');
    }
    res.status(200).send('User deleted successfully');
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      console.error('Failed to get user:', err);
      return res.status(500).send('Failed to get user');
    }
    res.status(200).json(user);
  });
};

exports.getAllUsers = (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      console.error('Failed to get users:', err);
      return res.status(500).send('Failed to get users');
    }
    res.status(200).json(users);
  });
};
