// ==========================================
// GAMIFICATION — XP, Ranks, Achievements
// ==========================================

const Gamification = {
    XP_PER_SHLOKA: 10,
    XP_PER_QUIZ_CORRECT: 15,
    XP_CHAPTER_BONUS: 100,
    XP_STREAK_BONUS: 5,

    RANKS: [
        { title: 'Seeker', icon: '🌱', minXP: 0, message: 'Your journey begins. Every step matters.' },
        { title: 'Student', icon: '📖', minXP: 100, message: 'You have begun to see. Keep learning.' },
        { title: 'Practitioner', icon: '🧘', minXP: 300, message: 'Knowledge is becoming practice.' },
        { title: 'Warrior', icon: '⚔️', minXP: 600, message: 'You fight your inner battles with wisdom.' },
        { title: 'Scholar', icon: '📜', minXP: 1000, message: 'Deep understanding is your weapon.' },
        { title: 'Sage', icon: '🔮', minXP: 1800, message: 'Wisdom flows through you naturally.' },
        { title: 'Enlightened', icon: '✨', minXP: 3000, message: 'You see the truth in all things.' },
        { title: 'Master', icon: '🕉️', minXP: 5000, message: 'You have mastered the Gita\'s wisdom.' },
    ],

    ACHIEVEMENTS: [
        { id: 'first_shloka', title: 'First Step', icon: '👣', desc: 'Complete your first shloka', check: d => d.completedShlokas.length >= 1 },
        { id: 'five_shlokas', title: 'Getting Started', icon: '🌟', desc: 'Complete 5 shlokas', check: d => d.completedShlokas.length >= 5 },
        { id: 'ten_shlokas', title: 'Dedicated Learner', icon: '📚', desc: 'Complete 10 shlokas', check: d => d.completedShlokas.length >= 10 },
        { id: 'twenty_five', title: 'Quarter Century', icon: '🎯', desc: 'Complete 25 shlokas', check: d => d.completedShlokas.length >= 25 },
        { id: 'first_chapter', title: 'World Conquered', icon: '🏆', desc: 'Complete all shlokas in a chapter', check: d => d.chaptersCompleted.length >= 1 },
        { id: 'streak_3', title: 'On Fire', icon: '🔥', desc: '3-day learning streak', check: d => d.streak >= 3 },
        { id: 'streak_7', title: 'Weekly Warrior', icon: '⚡', desc: '7-day learning streak', check: d => d.streak >= 7 },
        { id: 'streak_30', title: 'Monthly Master', icon: '🌙', desc: '30-day learning streak', check: d => d.streak >= 30 },
        { id: 'first_quiz', title: 'Challenger', icon: '🎮', desc: 'Take your first quiz', check: d => d.totalQuizzesTaken >= 1 },
        { id: 'perfect_quiz', title: 'Flawless', icon: '💎', desc: 'Get 100% on a quiz', check: d => d.quizScores.some(q => q.score === q.total) },
        { id: 'xp_500', title: 'Rising Power', icon: '⭐', desc: 'Earn 500 XP', check: d => d.xp >= 500 },
        { id: 'xp_1000', title: 'Powerhouse', icon: '💫', desc: 'Earn 1000 XP', check: d => d.xp >= 1000 },
    ],

    getRank(xp) {
        let rank = this.RANKS[0];
        for (const r of this.RANKS) {
            if (xp >= r.minXP) rank = r;
        }
        return rank;
    },

    getNextRank(xp) {
        for (const r of this.RANKS) {
            if (xp < r.minXP) return r;
        }
        return null;
    },

    getRankProgress(xp) {
        const current = this.getRank(xp);
        const next = this.getNextRank(xp);
        if (!next) return 100;
        const range = next.minXP - current.minXP;
        const progress = xp - current.minXP;
        return Math.min(100, Math.floor((progress / range) * 100));
    },

    awardShlokaXP() {
        const data = Storage.load();
        const oldRank = this.getRank(data.xp);
        data.xp += this.XP_PER_SHLOKA;
        const newRank = this.getRank(data.xp);
        Storage.save(data);

        showXPNotification(`+${this.XP_PER_SHLOKA} XP`);

        if (newRank.title !== oldRank.title) {
            setTimeout(() => showLevelUp(newRank), 800);
        }

        this.checkAchievements(data);
        return data;
    },

    awardQuizXP(correctCount) {
        const data = Storage.load();
        const oldRank = this.getRank(data.xp);
        const xpGained = correctCount * this.XP_PER_QUIZ_CORRECT;
        data.xp += xpGained;
        const newRank = this.getRank(data.xp);
        Storage.save(data);

        showXPNotification(`+${xpGained} XP`);

        if (newRank.title !== oldRank.title) {
            setTimeout(() => showLevelUp(newRank), 800);
        }

        this.checkAchievements(data);
        return xpGained;
    },

    awardChapterBonus(chapterNum) {
        const data = Storage.load();
        if (!data.chaptersCompleted.includes(chapterNum)) {
            data.chaptersCompleted.push(chapterNum);
            const oldRank = this.getRank(data.xp);
            data.xp += this.XP_CHAPTER_BONUS;
            const newRank = this.getRank(data.xp);
            Storage.save(data);

            showXPNotification(`+${this.XP_CHAPTER_BONUS} XP Chapter Bonus!`);
            if (newRank.title !== oldRank.title) {
                setTimeout(() => showLevelUp(newRank), 800);
            }
            this.checkAchievements(data);
        }
    },

    checkAchievements(data) {
        for (const ach of this.ACHIEVEMENTS) {
            if (!data.achievements.includes(ach.id) && ach.check(data)) {
                data.achievements.push(ach.id);
                Storage.save(data);
                setTimeout(() => showAchievement(ach), 1200);
            }
        }
    }
};

// --- UI Feedback Functions ---
function showXPNotification(text) {
    const el = document.getElementById('xp-notification');
    const amountEl = document.getElementById('xp-amount');
    amountEl.textContent = text;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 2500);
}

function showLevelUp(rank) {
    const modal = document.getElementById('level-up-modal');
    document.getElementById('level-up-rank').textContent = `${rank.icon} ${rank.title}`;
    document.getElementById('level-up-message').textContent = rank.message;
    modal.classList.remove('hidden');
}

function showAchievement(ach) {
    const toast = document.getElementById('achievement-toast');
    document.getElementById('achievement-name').textContent = `${ach.icon} ${ach.title}`;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3500);
}
