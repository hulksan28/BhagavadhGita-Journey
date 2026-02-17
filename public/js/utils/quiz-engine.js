// ==========================================
// QUIZ ENGINE — Question Generation & Scoring
// ==========================================

const QuizEngine = {
    QUESTION_TYPES: ['meaning_match', 'scenario', 'takeaway_fill'],

    generateQuiz(chapterNum, count = 5) {
        let pool = [];
        const data = Storage.load();

        if (chapterNum === 'daily') {
            // Daily quiz uses all completed shlokas
            pool = getAllShlokas().filter(s => data.completedShlokas.includes(s.id));
        } else {
            pool = (SHLOKAS[chapterNum] || []).filter(s => data.completedShlokas.includes(s.id));
        }

        if (pool.length < 2) return null; // Need at least 2 shlokas for quiz

        const questions = [];
        const shuffled = this.shuffle([...pool]);
        const selected = shuffled.slice(0, Math.min(count, shuffled.length));

        for (const shloka of selected) {
            const type = this.QUESTION_TYPES[Math.floor(Math.random() * this.QUESTION_TYPES.length)];
            const q = this.createQuestion(shloka, pool, type);
            if (q) questions.push(q);
        }

        return questions.length > 0 ? questions : null;
    },

    createQuestion(shloka, pool, type) {
        const others = pool.filter(s => s.id !== shloka.id);
        if (others.length < 2) return this.createMeaningMatch(shloka, pool);

        switch (type) {
            case 'meaning_match': return this.createMeaningMatch(shloka, pool);
            case 'scenario': return this.createScenario(shloka, pool);
            case 'takeaway_fill': return this.createTakeawayFill(shloka, pool);
            default: return this.createMeaningMatch(shloka, pool);
        }
    },

    createMeaningMatch(shloka, pool) {
        const others = this.shuffle(pool.filter(s => s.id !== shloka.id)).slice(0, 3);
        const options = this.shuffle([
            { text: shloka.translation, correct: true },
            ...others.map(s => ({ text: s.translation, correct: false }))
        ]);

        return {
            type: 'meaning_match',
            typeName: 'Meaning Match',
            typeIcon: '📖',
            question: 'What is the meaning of this shloka?',
            sanskrit: shloka.sanskrit,
            shlokaRef: shloka.id,
            options,
            explanation: `This is from ${shloka.id}: "${shloka.takeaway}"`,
            shloka
        };
    },

    createScenario(shloka, pool) {
        const others = this.shuffle(pool.filter(s => s.id !== shloka.id)).slice(0, 3);
        const options = this.shuffle([
            { text: shloka.takeaway, correct: true },
            ...others.map(s => ({ text: s.takeaway, correct: false }))
        ]);

        return {
            type: 'scenario',
            typeName: 'Life Application',
            typeIcon: '🎯',
            question: `Which teaching applies to this situation?\n\n"${shloka.realLifeApplication}"`,
            shlokaRef: shloka.id,
            options,
            explanation: `The answer comes from ${shloka.id}: "${shloka.modernInterpretation}"`,
            shloka
        };
    },

    createTakeawayFill(shloka, pool) {
        const others = this.shuffle(pool.filter(s => s.id !== shloka.id)).slice(0, 3);
        const options = this.shuffle([
            { text: shloka.takeaway, correct: true },
            ...others.map(s => ({ text: s.takeaway, correct: false }))
        ]);

        return {
            type: 'takeaway_fill',
            typeName: 'Key Takeaway',
            typeIcon: '💡',
            question: `What is the key takeaway from shloka ${shloka.id}?`,
            sanskrit: shloka.sanskrit.split('\n')[0],
            shlokaRef: shloka.id,
            options,
            explanation: `${shloka.id} teaches us: "${shloka.modernInterpretation}"`,
            shloka
        };
    },

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};
