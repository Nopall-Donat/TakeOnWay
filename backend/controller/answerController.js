const Answer = require("../models/answer");

exports.createAnswer = (req, res) => {
  const answerData = req.body;
  Answer.create(answerData)
    .then((result) => {
      res.status(201).send("Answer added successfully");
    })
    .catch((err) => {
      console.error("Failed to add answer:", err);
      res.status(500).send("Failed to add answer");
    });
};

exports.updateAnswer = (req, res) => {
  const id = req.params.id;
  const answerData = req.body;
  Answer.update(id, answerData)
    .then((result) => {
      res.status(200).send("Answer updated successfully");
    })
    .catch((err) => {
      console.error("Failed to update answer:", err);
      res.status(500).send("Failed to update answer");
    });
};

exports.deleteAnswer = (req, res) => {
  const id = req.params.id;
  Answer.delete(id)
    .then((result) => {
      res.status(200).send("Answer deleted successfully");
      Answer.findAll().then(answers => {
        answers.forEach((e, i) => {
          if(e.id_answer > id) {
            let oldId = e.id_answer;
            let newId = e.id_answer - 1;
            Answer.resetId(oldId, newId)
          }
        });
      })
      Answer.autoInc();
    })
    .catch((err) => {
      console.error("Failed to delete answer:", err);
      res.status(500).send("Failed to delete answer");
    });
};

exports.getAnswerById = (req, res) => {
  const id = req.params.id;
  Answer.findById(id)
    .then((answer) => {
      res.status(200).json(answer);
    })
    .catch((err) => {
      console.error("Failed to get answer:", err);
      res.status(500).send("Failed to get answer");
    });
};

exports.getAllAnswers = (req, res) => {
  Answer.findAll()
    .then((answers) => {
      res.status(200).json(answers);
    })
    .catch((err) => {
      console.error("Failed to get answers:", err);
      res.status(500).send("Failed to get answers");
    });
};
