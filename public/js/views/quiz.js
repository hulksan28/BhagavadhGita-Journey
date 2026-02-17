// ==========================================
// QUIZ VIEW
// ==========================================

let currentQuiz = null;
let currentQuestionIdx = 0;
let quizScore = 0;
let quizAnswered = false;

function renderQuiz(chapterParam) {
    const questions = QuizEngine.generateQuiz(chapterParam);

    if (!questions || questions.length === 0) {
        document.getElementById('main-content').innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📝</div>
            <h3 class="empty-state-title">Not Enough Shlokas Yet</h3>
            <p class="empty-state-desc">Complete at least 2 shlokas to unlock quizzes. Keep learning!</p>
            <button class="btn btn-primary" onclick="window.location.hash='#journey'">Continue Learning</button>
        </div>`;
        return;
    }

    currentQuiz = questions;
    currentQuestionIdx = 0;
    quizScore = 0;
    quizAnswered = false;

    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (currentQuestionIdx >= currentQuiz.length) {
        renderQuizResults();
        return;
    }

    const q = currentQuiz[currentQuestionIdx];
    quizAnswered = false;
    const letters = ['A', 'B', 'C', 'D'];

    // Progress dots
    const dots = currentQuiz.map((_, i) => {
        let cls = 'quiz-progress-dot';
        if (i < currentQuestionIdx) cls += ' completed';
        if (i === currentQuestionIdx) cls += ' current';
        return `<div class="${cls}"></div>`;
    }).join('');

    const tagColor = q.type === 'meaning_match' ? 'tag-purple' : (q.type === 'scenario' ? 'tag-emerald' : 'tag-saffron');

    document.getElementById('main-content').innerHTML = `
    <div class="quiz-view">
        <div class="quiz-header">
            <span class="quiz-type-badge ${tagColor}">${q.typeIcon} ${q.typeName}</span>
            <div class="quiz-progress">${dots}</div>
        </div>

        <div class="quiz-question-card">
            <div class="quiz-question-number">Question ${currentQuestionIdx + 1} of ${currentQuiz.length}</div>
            <div class="quiz-question-text">${q.question.replace(/\n/g, '<br>')}</div>
            ${q.sanskrit ? `<div class="quiz-question-sanskrit">${q.sanskrit.split('\n').slice(-2).join('<br>')}</div>` : ''}

            <div class="quiz-options" id="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option" data-idx="${i}" onclick="selectQuizAnswer(${i})">
                        <span class="quiz-option-letter">${letters[i]}</span>
                        <span>${opt.text}</span>
                    </button>`).join('')}
            </div>

            <div id="quiz-explanation" class="hidden"></div>
            <div id="quiz-next-btn" class="hidden mt-lg">
                <button class="btn btn-primary btn-block" onclick="nextQuizQuestion()">
                    ${currentQuestionIdx < currentQuiz.length - 1 ? 'Next Question →' : 'See Results'}
                </button>
            </div>
        </div>
    </div>`;
}

function selectQuizAnswer(idx) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = currentQuiz[currentQuestionIdx];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = q.options[idx].correct;

    if (isCorrect) quizScore++;

    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (q.options[i].correct) opt.classList.add('correct');
        if (i === idx && !isCorrect) opt.classList.add('wrong');
    });

    // Show explanation
    const expEl = document.getElementById('quiz-explanation');
    expEl.innerHTML = `${isCorrect ? '✅ Correct!' : '❌ Not quite.'} ${q.explanation}`;
    expEl.classList.remove('hidden');

    document.getElementById('quiz-next-btn').classList.remove('hidden');
}

function nextQuizQuestion() {
    currentQuestionIdx++;
    renderQuizQuestion();
}

function renderQuizResults() {
    const total = currentQuiz.length;
    const pct = Math.round((quizScore / total) * 100);
    const xpEarned = Gamification.awardQuizXP(quizScore);

    // Determine chapter for storage
    const chapterParam = currentQuiz[0]?.shloka?.chapter || 'daily';
    Storage.addQuizScore(chapterParam, quizScore, total);

    let icon = '🎉';
    let message = 'Excellent! You truly understand these teachings!';
    if (pct < 50) { icon = '📚'; message = 'Keep studying! Review the shlokas and try again.'; }
    else if (pct < 80) { icon = '👍'; message = 'Good effort! A little more practice will make it perfect.'; }

    updateNavStats();

    // Sync to server
    syncProgressToServer();

    document.getElementById('main-content').innerHTML = `
    <div class="quiz-view">
        <div class="quiz-question-card">
            <div class="quiz-results">
                <div class="quiz-results-icon">${icon}</div>
                <h2 class="quiz-results-title">Quiz Complete!</h2>
                <div class="quiz-results-score">${quizScore}/${total}</div>
                <p class="quiz-results-message">${message}</p>
                <div class="quiz-results-xp">⚡ +${xpEarned} XP earned</div>
                <div class="flex flex-col gap-sm w-full">
                    <button class="btn btn-primary btn-block" onclick="window.location.hash='#journey'">Continue Journey</button>
                    <button class="btn btn-secondary btn-block" onclick="window.location.hash='#dashboard'">Back to Dashboard</button>
                </div>
            </div>
        </div>
    </div>`;
}
