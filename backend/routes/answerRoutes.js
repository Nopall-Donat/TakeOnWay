const express = require('express');
const Answer = require('../models/answer');
const answerController = require('../controller/answerController');

const router = express.Router();

// Middleware
const cekAnswer = async (req, res, next) => {
  const id = req.params.id;
  try {
    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }
    req.answer = answer;
    next();
  } catch (err) {
    console.error('Error checking answer existence:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Routes
router.post('/answers', answerController.createAnswer);
router.get('/answers', answerController.getAllAnswers);
router.get('/answers/:id', answerController.getAnswerById);
router.put('/answers/:id', cekAnswer, answerController.updateAnswer);
router.delete('/answers/:id', cekAnswer, answerController.deleteAnswer);

module.exports = router;