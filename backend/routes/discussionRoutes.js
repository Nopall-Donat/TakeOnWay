const express = require('express');
const discussionController = require('../controller/discussionController');
const checkDiscussionExistence = require('../middleware/checkDiscussion');

const router = express.Router();

// Routes
router.post('/discussions', discussionController.createDiscussion);
router.get('/discussions', discussionController.getAllDiscussions);        
router.get('/discussions/:id', checkDiscussionExistence, discussionController.getDiscussionById); // Menggunakan middleware checkDiscussionExistence sebelum getDiscussionById
router.put('/discussions/:id', checkDiscussionExistence, discussionController.updateDiscussion); // Menggunakan middleware checkDiscussionExistence sebelum updateDiscussion
router.delete('/discussions/:id', checkDiscussionExistence, discussionController.deleteDiscussion); // Menggunakan middleware checkDiscussionExistence sebelum deleteDiscussion

module.exports = router;
