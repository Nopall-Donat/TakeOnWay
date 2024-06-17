const Discussion = require("../models/discussion");

exports.createDiscussion = (req, res) => {
  const discussionData = req.body;
  Discussion.create(discussionData)
    .then((result) => {
      res.status(201).send("Discussion added successfully");
    })
    .catch((err) => {
      console.error("Failed to add discussion:", err);
      res.status(500).send("Failed to add discussion");
    });
};

exports.updateDiscussion = (req, res) => {
  const id = req.params.id;
  const discussionData = req.body;
  Discussion.update(id, discussionData)
    .then((result) => {
      res.status(200).send("Discussion updated successfully");
    })
    .catch((err) => {
      console.error("Failed to update discussion:", err);
      res.status(500).send("Failed to update discussion");
    });
};

exports.deleteDiscussion = (req, res) => {
  const id = req.params.id;
  Discussion.delete(id)
    .then((result) => {
      res.status(200).send("Discussion deleted successfully");
      Discussion.findAll().then(discussions => {
        discussions.forEach((e, i) => {
          if(e.id_discussion > id) {
            let oldId = e.id_discussion;
            let newId = e.id_discussion - 1;
            Discussion.resetId(oldId, newId)
          }
        });
      })
      Discussion.autoInc();
    })
    .catch((err) => {
      console.error("Failed to delete discussion:", err);
      res.status(500).send("Failed to delete discussion");
    });
};

exports.getDiscussionById = (req, res) => {
  const id = req.params.id;
  Discussion.findById(id)
    .then((discussion) => {
      res.status(200).json(discussion);
    })
    .catch((err) => {
      console.error("Failed to get discussion:", err);
      res.status(500).send("Failed to get discussion");
    });
};

exports.getAllDiscussions = (req, res) => {
  Discussion.findAll()
    .then((discussions) => {
      res.status(200).json(discussions);
    })
    .catch((err) => {
      console.error("Failed to get discussions:", err);
      res.status(500).send("Failed to get discussions");
    });
};
