const express = require('express');
const { liveFeed } = require('../controllers/liveFeedController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/liveFeed').get(protect,liveFeed);

module.exports = router;