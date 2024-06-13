const User = require("../models/user");

exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData)
    .then((result) => {
      res.status(201).send("User added successfully");
    })
    .catch((err) => {
      console.error("Failed to add user:", err);
      res.status(500).send("Failed to add user");
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  User.update(id, userData)
    .then((result) => {
      res.status(200).send("User updated successfully");
    })
    .catch((err) => {
      console.error("Failed to update user:", err);
      res.status(500).send("Failed to update user");
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id)
    .then((result) => {
      res.status(200).send("User deleted successfully");
    })
    .catch((err) => {
      console.error("Failed to delete user:", err);
      res.status(500).send("Failed to delete user");
    });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error("Failed to get user:", err);
      res.status(500).send("Failed to get user");
    });
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error("Failed to get users:", err);
      res.status(500).send("Failed to get users");
    });
};
