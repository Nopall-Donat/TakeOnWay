const express = require('express');
const answerController = require('../controller/answerController');
const checkAnswerExistence = require('../middleware/checkAnswer'); // Import middleware

const router = express.Router();

// Routes
router.post('/answers', answerController.createAnswer);
router.get('/answers', answerController.getAllAnswers);
router.get('/answers/:id', checkAnswerExistence, answerController.getAnswerById);
router.put('/answers/:id', checkAnswerExistence, answerController.updateAnswer);
router.delete('/answers/:id', checkAnswerExistence, answerController.deleteAnswer);

module.exports = router;