// ==========================================
// STORAGE — LocalStorage Persistence Layer
// ==========================================

const Storage = {
    KEY: 'gita_journey_data',

    getDefaultData() {
        return {
            completedShlokas: [],   // ["1.1", "1.2", ...]
            xp: 0,
            streak: 0,
            bestStreak: 0,
            lastActiveDate: null,
            achievements: [],       // ["first_shloka", ...]
            quizScores: [],         // [{chapter, score, total, date}]
            dailyShlokaDate: null,
            dailyShlokaId: null,
            pace: 'balanced',       // relaxed, balanced, intensive
            totalQuizzesTaken: 0,
            totalCorrectAnswers: 0,
            startDate: new Date().toISOString(),
            chaptersCompleted: []
        };
    },

    load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (raw) {
                const data = JSON.parse(raw);
                // Merge with defaults for any missing keys
                return { ...this.getDefaultData(), ...data };
            }
        } catch (e) {
            console.error('Storage load error:', e);
        }
        return this.getDefaultData();
    },

    save(data) {
        try {
            localStorage.setItem(this.KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Storage save error:', e);
        }
    },

    update(partial) {
        const data = this.load();
        Object.assign(data, partial);
        this.save(data);
        return data;
    },

    markShlokaCompleted(shlokaId) {
        const data = this.load();
        if (!data.completedShlokas.includes(shlokaId)) {
            data.completedShlokas.push(shlokaId);
            this.save(data);
        }
        return data;
    },

    isShlokaCompleted(shlokaId) {
        return this.load().completedShlokas.includes(shlokaId);
    },

    getCompletedCountForChapter(chapterNum) {
        const data = this.load();
        return data.completedShlokas.filter(id => id.startsWith(chapterNum + '.')).length;
    },

    updateStreak() {
        const data = this.load();
        const today = new Date().toISOString().split('T')[0];

        if (data.lastActiveDate === today) return data;

        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (data.lastActiveDate === yesterday) {
            data.streak += 1;
        } else if (data.lastActiveDate !== today) {
            data.streak = 1;
        }

        data.lastActiveDate = today;
        if (data.streak > data.bestStreak) data.bestStreak = data.streak;
        this.save(data);
        return data;
    },

    getDailyShloka() {
        const data = this.load();
        const today = new Date().toISOString().split('T')[0];

        if (data.dailyShlokaDate === today && data.dailyShlokaId) {
            const [ch, v] = data.dailyShlokaId.split('.').map(Number);
            return getShloka(ch, v);
        }

        // Pick a new daily shloka
        const all = getAllShlokas();
        if (all.length === 0) return null;

        // Prefer uncompleted shlokas
        const uncompleted = all.filter(s => !data.completedShlokas.includes(s.id));
        const pool = uncompleted.length > 0 ? uncompleted : all;

        // Use date as seed for consistent daily pick
        const dayNum = Math.floor(Date.now() / 86400000);
        const shloka = pool[dayNum % pool.length];

        data.dailyShlokaDate = today;
        data.dailyShlokaId = shloka.id;
        this.save(data);
        return shloka;
    },

    addQuizScore(chapter, score, total) {
        const data = this.load();
        data.quizScores.push({
            chapter, score, total,
            date: new Date().toISOString()
        });
        data.totalQuizzesTaken += 1;
        data.totalCorrectAnswers += score;
        this.save(data);
        return data;
    },

    exportData() {
        return JSON.stringify(this.load(), null, 2);
    },

    importData(json) {
        try {
            const data = JSON.parse(json);
            this.save({ ...this.getDefaultData(), ...data });
            return true;
        } catch (e) {
            return false;
        }
    },

    resetAll() {
        this.save(this.getDefaultData());
    }
};
