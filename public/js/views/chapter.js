// ==========================================
// CHAPTER DETAIL VIEW
// ==========================================

function renderChapter(chapterNum) {
    const ch = CHAPTERS.find(c => c.id === chapterNum);
    if (!ch) { window.location.hash = '#journey'; return; }

    const chShlokas = SHLOKAS[chapterNum] || [];
    const data = Storage.load();
    const completedCount = Storage.getCompletedCountForChapter(chapterNum);
    const pct = chShlokas.length > 0 ? Math.round((completedCount / chShlokas.length) * 100) : 0;

    let shlokaListHTML = '';
    for (const s of chShlokas) {
        const done = data.completedShlokas.includes(s.id);
        const isNext = !done && !shlokaListHTML.includes('current');
        const cls = done ? 'completed' : (isNext ? 'current' : '');
        const status = done ? '✅' : (isNext ? '→' : '○');

        shlokaListHTML += `
        <div class="shloka-list-item ${cls}" onclick="window.location.hash='#shloka/${s.chapter}/${s.verse}'">
            <div class="shloka-list-number">${s.verse}</div>
            <div class="shloka-list-info">
                <div class="shloka-list-preview">${s.sanskrit.split('\n').pop()}</div>
                <div class="shloka-list-takeaway">💡 ${s.takeaway}</div>
            </div>
            <div class="shloka-list-status">${status}</div>
        </div>`;
    }

    // Quiz button
    let quizBtn = '';
    if (completedCount >= 2) {
        quizBtn = `<button class="btn btn-outline btn-block mt-lg" onclick="window.location.hash='#quiz/${chapterNum}'">
            🎮 Take Chapter Quiz
        </button>`;
    }

    document.getElementById('main-content').innerHTML = `
    <div class="chapter-detail">
        <div class="chapter-detail-header">
            <div class="chapter-detail-number">Chapter ${ch.id}</div>
            <h2 class="chapter-detail-title">${ch.icon} ${ch.englishName}</h2>
            <div class="chapter-detail-theme">${ch.name} · ${ch.theme}</div>
            <p class="chapter-detail-desc">${ch.description}</p>
            <div class="chapter-detail-progress">
                <div class="chapter-detail-progress-bar">
                    <div class="chapter-detail-progress-fill" style="width:${pct}%"></div>
                </div>
                <div class="chapter-detail-progress-text">${completedCount}/${chShlokas.length}</div>
            </div>
        </div>

        ${pct === 100 ? `
        <div class="card card-glow text-center" style="padding:var(--space-xl)">
            <div style="font-size:48px;margin-bottom:var(--space-sm)">🏆</div>
            <h3 style="font-family:var(--font-display);color:var(--saffron-light)">Chapter Complete!</h3>
            <p class="text-muted mt-sm">Life Power Unlocked: <strong class="text-emerald">${ch.lifePowerUnlocked}</strong></p>
        </div>` : ''}

        <div class="section-header">
            <h3 class="section-title">Shlokas</h3>
            <span class="tag tag-saffron">${completedCount}/${chShlokas.length} learned</span>
        </div>

        <div class="shloka-list">
            ${shlokaListHTML}
        </div>

        ${quizBtn}
    </div>`;
}
