const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET /api/leaderboard — public leaderboard ranked by XP
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
            .select('displayName progress.xp progress.streak progress.bestStreak progress.completedShlokas progress.chaptersCompleted progress.achievements')
            .sort({ 'progress.xp': -1 })
            .limit(50);

        const leaderboard = users.map((u, index) => ({
            rank: index + 1,
            displayName: u.displayName || 'Seeker',
            xp: u.progress.xp || 0,
            streak: u.progress.streak || 0,
            bestStreak: u.progress.bestStreak || 0,
            shlokasLearned: u.progress.completedShlokas ? u.progress.completedShlokas.length : 0,
            chaptersCompleted: u.progress.chaptersCompleted ? u.progress.chaptersCompleted.length : 0,
            achievements: u.progress.achievements ? u.progress.achievements.length : 0
        }));

        res.json(leaderboard);
    } catch (err) {
        console.error('Leaderboard error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
