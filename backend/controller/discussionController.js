// controllers/discussionController.js

const Discussion = require('../models/discussion');

exports.createDiscussion = (req, res) => {
  const discussionData = req.body;
  Discussion.create(discussionData, (err, result) => {
    if (err) {
      console.error('Failed to add discussion:', err);
      return res.status(500).send('Failed to add discussion');
    }
    res.status(201).send('Discussion added successfully');
  });
};

exports.updateDiscussion = (req, res) => {
  const id = req.params.id;
  const discussionData = req.body;
  Discussion.update(id, discussionData, (err, result) => {
    if (err) {
      console.error('Failed to update discussion:', err);
      return res.status(500).send('Failed to update discussion');
    }
    res.status(200).send('Discussion updated successfully');
  });
};

exports.deleteDiscussion = (req, res) => {
  const id = req.params.id;
  Discussion.delete(id, (err, result) => {
    if (err) {
      console.error('Failed to delete discussion:', err);
      return res.status(500).send('Failed to delete discussion');
    }
    res.status(200).send('Discussion deleted successfully');
  });
};

exports.getDiscussionById = (req, res) => {
  const id = req.params.id;
  Discussion.findById(id, (err, discussion) => {
    if (err) {
      console.error('Failed to get discussion:', err);
      return res.status(500).send('Failed to get discussion');
    }
    res.status(200).json(discussion);
  });
};

exports.getAllDiscussions = (req, res) => {
  Discussion.findAll((err, discussions) => {
    if (err) {
      console.error('Failed to get discussions:', err);
      return res.status(500).send('Failed to get discussions');
    }
    res.status(200).json(discussions);
  });
};
