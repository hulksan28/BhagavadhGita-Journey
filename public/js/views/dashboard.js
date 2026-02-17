// ==========================================
// DASHBOARD VIEW
// ==========================================

function renderDashboard() {
    const data = Storage.load();
    Storage.updateStreak();
    const dailyShloka = Storage.getDailyShloka();
    const rank = Gamification.getRank(data.xp);
    const totalCompleted = data.completedShlokas.length;
    const totalAvailable = getAvailableShlokaCount();
    const progressPct = totalAvailable > 0 ? Math.round((totalCompleted / totalAvailable) * 100) : 0;

    const greeting = getGreeting();

    let dailyCard = '';
    if (dailyShloka) {
        dailyCard = `
        <div class="card daily-shloka-card" onclick="window.location.hash='#shloka/${dailyShloka.chapter}/${dailyShloka.verse}'">
            <div class="daily-badge"><div class="daily-badge-dot"></div> Shloka of the Day</div>
            <div class="daily-sanskrit">${dailyShloka.sanskrit.split('\n').slice(-2).join('\n')}</div>
            <p class="daily-translation">"${dailyShloka.translation}"</p>
            <div class="daily-takeaway">
                <span class="daily-takeaway-icon">💡</span>
                <span class="daily-takeaway-text">${dailyShloka.takeaway}</span>
            </div>
            <button class="btn btn-primary btn-block">
                Read Full Shloka →
            </button>
        </div>`;
    }

    // Find continue shloka
    let continueBtn = '';
    const allShlokas = getAllShlokas();
    const nextUncompleted = allShlokas.find(s => !data.completedShlokas.includes(s.id));
    if (nextUncompleted) {
        continueBtn = `
        <button class="btn btn-outline btn-block btn-lg" onclick="window.location.hash='#shloka/${nextUncompleted.chapter}/${nextUncompleted.verse}'">
            ⚔️ Continue Learning — Shloka ${nextUncompleted.id}
        </button>`;
    }

    document.getElementById('main-content').innerHTML = `
    <div class="dashboard">
        <!-- Hero -->
        <div class="hero-card">
            <p class="hero-greeting">${greeting}</p>
            <h2 class="hero-title">${rank.icon} ${rank.title}</h2>
            <div class="hero-stats">
                <div class="hero-stat">
                    <div class="hero-stat-value">${totalCompleted}</div>
                    <div class="hero-stat-label">Shlokas Learned</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-value">${data.chaptersCompleted.length}</div>
                    <div class="hero-stat-label">Chapters Done</div>
                </div>
                <div class="hero-stat">
                    <div class="hero-stat-value">${progressPct}%</div>
                    <div class="hero-stat-label">Progress</div>
                </div>
            </div>
            ${continueBtn}
        </div>

        <!-- Streak -->
        <div class="card streak-card">
            <div class="streak-fire">${data.streak > 0 ? '🔥' : '❄️'}</div>
            <div class="streak-info">
                <div class="streak-count">${data.streak} Day Streak</div>
                <div class="streak-text">${data.streak > 0 ? 'Keep the fire alive!' : 'Start learning today!'}</div>
                <div class="streak-best">Best: ${data.bestStreak} days</div>
            </div>
        </div>

        <!-- Daily Shloka -->
        ${dailyCard}

        <!-- Stats -->
        <div class="section-header">
            <h3 class="section-title">Your Journey</h3>
            <a href="#journey" class="section-link">See Map →</a>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">⚡</div>
                <div class="stat-value text-saffron">${data.xp}</div>
                <div class="stat-label">Total XP</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">🎯</div>
                <div class="stat-value text-emerald">${data.totalQuizzesTaken}</div>
                <div class="stat-label">Quizzes Taken</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📖</div>
                <div class="stat-value text-purple">${totalCompleted}</div>
                <div class="stat-label">Verses Learned</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-value">${data.achievements.length}</div>
                <div class="stat-label">Achievements</div>
            </div>
        </div>
    </div>`;
}

function getGreeting() {
    const h = new Date().getHours();
    if (h < 5) return '🌙 Late night wisdom seeker';
    if (h < 12) return '🌅 Good morning, seeker';
    if (h < 17) return '☀️ Good afternoon, learner';
    if (h < 21) return '🌆 Good evening, warrior';
    return '🌙 Night-time wisdom awaits';
}
