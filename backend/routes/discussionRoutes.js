const express = require('express');
const discussionController = require('../controller/discussionController');
const Discussion = require('../models/discussion');

const router = express.Router();

//Middleware
const cekDiscussionExistence = async (req, res, next) => {
    const id = req.params.id;
    try {
      const discussion = await Discussion.findById(id);
      if (!discussion) {
        return res.status(404).json({ message: 'Discussion not found' });
      }
      req.discussion = discussion; // Menyimpan data discussion ke dalam objek request untuk digunakan di endpoint berikutnya
      next();
    } catch (err) {
      console.error('Error checking discussion existence:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

// Routes
router.post('/discussions', discussionController.createDiscussion);
router.get('/discussions', discussionController.getAllDiscussions);        
router.get('/discussions/:id', cekDiscussionExistence, discussionController.getDiscussionById); // Menggunakan middleware cekDiscussionExistence sebelum getDiscussionById
router.put('/discussions/:id', cekDiscussionExistence, discussionController.updateDiscussion); // Menggunakan middleware cekDiscussionExistence sebelum updateDiscussion
router.delete('/discussions/:id', cekDiscussionExistence, discussionController.deleteDiscussion); // Menggunakan middleware cekDiscussionExistence sebelum deleteDiscussion

module.exports = router;
