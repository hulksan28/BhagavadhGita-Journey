const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// GET /api/progress — load user progress
router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('progress');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user.progress);
    } catch (err) {
        console.error('Load progress error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT /api/progress — save user progress
router.put('/', authMiddleware, async (req, res) => {
    try {
        const progressData = req.body;

        // Validate basic structure
        const allowed = [
            'completedShlokas', 'xp', 'streak', 'bestStreak', 'lastActiveDate',
            'achievements', 'quizScores', 'dailyShlokaDate', 'dailyShlokaId',
            'pace', 'totalQuizzesTaken', 'totalCorrectAnswers', 'chaptersCompleted'
        ];

        const update = {};
        for (const key of allowed) {
            if (progressData[key] !== undefined) {
                update[`progress.${key}`] = progressData[key];
            }
        }

        const user = await User.findByIdAndUpdate(
            req.userId,
            { $set: update },
            { new: true }
        ).select('progress');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.progress);
    } catch (err) {
        console.error('Save progress error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
