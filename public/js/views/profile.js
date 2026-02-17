// ==========================================
// PROFILE VIEW
// ==========================================

function renderProfile() {
    const data = Storage.load();
    const rank = Gamification.getRank(data.xp);
    const nextRank = Gamification.getNextRank(data.xp);
    const rankPct = Gamification.getRankProgress(data.xp);
    const totalCompleted = data.completedShlokas.length;

    // Achievements
    let achHTML = '';
    for (const ach of Gamification.ACHIEVEMENTS) {
        const unlocked = data.achievements.includes(ach.id);
        achHTML += `
        <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon-large">${ach.icon}</div>
            <div class="achievement-title">${ach.title}</div>
        </div>`;
    }

    // Days since start
    const daysActive = data.startDate ? Math.max(1, Math.ceil((Date.now() - new Date(data.startDate).getTime()) / 86400000)) : 1;

    document.getElementById('main-content').innerHTML = `
    <div class="profile-view">
        <div class="profile-header">
            <div class="profile-avatar">${rank.icon}</div>
            <div class="profile-rank">${rank.title}</div>
            <div class="profile-rank-title">⚡ ${data.xp} XP</div>
            ${nextRank ? `
            <div class="rank-progress-section">
                <div class="rank-progress-bar">
                    <div class="rank-progress-fill" style="width:${rankPct}%"></div>
                </div>
                <div class="rank-progress-labels">
                    <span>${rank.icon} ${rank.title}</span>
                    <span>${nextRank.icon} ${nextRank.title} (${nextRank.minXP} XP)</span>
                </div>
            </div>` : `<p class="text-muted mt-sm">Maximum rank achieved! 🏆</p>`}
        </div>

        <!-- Stats -->
        <div class="section-header"><h3 class="section-title">Statistics</h3></div>
        <div class="profile-stats-grid">
            <div class="profile-stat">
                <div class="profile-stat-value">${totalCompleted}</div>
                <div class="profile-stat-label">Shlokas</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${data.streak}</div>
                <div class="profile-stat-label">Streak</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${data.bestStreak}</div>
                <div class="profile-stat-label">Best Streak</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${data.totalQuizzesTaken}</div>
                <div class="profile-stat-label">Quizzes</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${data.chaptersCompleted.length}</div>
                <div class="profile-stat-label">Chapters</div>
            </div>
            <div class="profile-stat">
                <div class="profile-stat-value">${daysActive}</div>
                <div class="profile-stat-label">Days Active</div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="section-header">
            <h3 class="section-title">Achievements</h3>
            <span class="tag tag-saffron">${data.achievements.length}/${Gamification.ACHIEVEMENTS.length}</span>
        </div>
        <div class="achievements-grid">${achHTML}</div>

        <!-- Pace Setting -->
        <div class="section-header"><h3 class="section-title">Learning Pace</h3></div>
        <div class="pace-selector">
            <div class="pace-option ${data.pace === 'relaxed' ? 'active' : ''}" onclick="setPace('relaxed')">
                <div class="pace-option-title">🐢 Relaxed</div>
                <div class="pace-option-desc">1/day · ~2 years</div>
            </div>
            <div class="pace-option ${data.pace === 'balanced' ? 'active' : ''}" onclick="setPace('balanced')">
                <div class="pace-option-title">⚖️ Balanced</div>
                <div class="pace-option-desc">3/day · ~8 months</div>
            </div>
            <div class="pace-option ${data.pace === 'intensive' ? 'active' : ''}" onclick="setPace('intensive')">
                <div class="pace-option-title">🔥 Intensive</div>
                <div class="pace-option-desc">5/day · ~5 months</div>
            </div>
        </div>

        <!-- Actions -->
        <div class="section-header mt-lg"><h3 class="section-title">Settings</h3></div>
        <div class="settings-section">
            <button class="btn btn-secondary btn-block" onclick="exportProgress()">📤 Export Progress</button>
            <button class="btn btn-secondary btn-block" onclick="document.getElementById('import-file').click()">📥 Import Progress</button>
            <input type="file" id="import-file" accept=".json" style="display:none" onchange="importProgress(event)">
            <button class="btn btn-secondary btn-block text-rose" onclick="resetProgress()">🗑️ Reset All Progress</button>
        </div>
    </div>`;
}

function setPace(pace) {
    Storage.update({ pace });
    renderProfile();
}

function exportProgress() {
    const json = Storage.exportData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gita-journey-progress.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        if (Storage.importData(e.target.result)) {
            alert('Progress imported successfully!');
            renderProfile();
            updateNavStats();
        } else {
            alert('Invalid file format.');
        }
    };
    reader.readAsText(file);
}

function resetProgress() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
        if (confirm('Really? All XP, streaks, and achievements will be lost.')) {
            Storage.resetAll();
            renderProfile();
            updateNavStats();
        }
    }
}
