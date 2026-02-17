// ==========================================
// JOURNEY MAP VIEW — 18 Chapters as Worlds
// ==========================================

function renderJourneyMap() {
    const data = Storage.load();
    const totalCompleted = data.completedShlokas.length;
    const totalAvailable = getAvailableShlokaCount();
    const overallPct = totalAvailable > 0 ? Math.round((totalCompleted / totalAvailable) * 100) : 0;

    let chaptersHTML = '';
    for (const ch of CHAPTERS) {
        const completedInCh = Storage.getCompletedCountForChapter(ch.id);
        const hasData = SHLOKAS[ch.id] && SHLOKAS[ch.id].length > 0;
        const shlokaCount = hasData ? SHLOKAS[ch.id].length : ch.totalShlokas;
        const pct = shlokaCount > 0 ? Math.round((completedInCh / shlokaCount) * 100) : 0;

        // Unlock logic: ch1 always unlocked, others need prev chapter started
        const prevCompleted = ch.id === 1 || Storage.getCompletedCountForChapter(ch.id - 1) > 0;
        const isCompleted = completedInCh >= shlokaCount && hasData;
        const isActive = prevCompleted && hasData && !isCompleted;
        const isLocked = !prevCompleted || !hasData;

        let stateClass = isCompleted ? 'completed' : (isActive ? 'active' : 'locked');
        let statusIcon = isCompleted ? '✅' : (isActive ? '→' : '🔒');

        chaptersHTML += `
        <div class="chapter-card ${stateClass}" onclick="${isLocked ? '' : `window.location.hash='#chapter/${ch.id}'`}">
            <div class="chapter-number">${ch.id}</div>
            <div class="chapter-info">
                <div class="chapter-name">${ch.icon} ${ch.englishName}</div>
                <div class="chapter-theme">${ch.name} · ${hasData ? SHLOKAS[ch.id].length : ch.totalShlokas} verses</div>
                <div class="chapter-progress">
                    <div class="chapter-progress-fill" style="width:${pct}%"></div>
                </div>
            </div>
            <div class="chapter-status-icon">${statusIcon}</div>
        </div>`;
    }

    document.getElementById('main-content').innerHTML = `
    <div class="journey-map">
        <div class="journey-header">
            <h2 class="journey-title">🗺️ The Journey</h2>
            <p class="journey-subtitle">18 Chapters · 700 Shlokas · One Transformation</p>
            <div class="journey-progress-bar">
                <div class="journey-progress-fill" style="width:${overallPct}%"></div>
            </div>
            <p class="text-muted mt-sm">${totalCompleted} of ${totalAvailable} shlokas completed (${overallPct}%)</p>
        </div>
        ${chaptersHTML}
    </div>`;
}
