// ==========================================
// SHLOKA LEARNING VIEW
// ==========================================

function renderShloka(chapter, verse) {
    const shloka = getShloka(chapter, verse);
    if (!shloka) { window.location.hash = '#journey'; return; }

    const ch = CHAPTERS.find(c => c.id === chapter);
    const data = Storage.load();
    const isCompleted = data.completedShlokas.includes(shloka.id);

    const prev = getPrevShloka(chapter, verse);
    const next = getNextShloka(chapter, verse);

    // Word meanings
    let wordHTML = '';
    if (shloka.wordMeanings && shloka.wordMeanings.length > 0) {
        wordHTML = `<div class="word-meanings">
            ${shloka.wordMeanings.map(w => `
                <div class="word-meaning-item">
                    <span class="word">${w.word}</span>
                    <span class="meaning">— ${w.meaning}</span>
                </div>`).join('')}
        </div>`;
    }

    // Category tag
    const catColors = { anxiety: 'sky', discipline: 'saffron', leadership: 'purple', detachment: 'emerald', career: 'lotus' };
    const catTag = shloka.category ? `<span class="tag tag-${catColors[shloka.category] || 'saffron'}">${shloka.category}</span>` : '';

    document.getElementById('main-content').innerHTML = `
    <div class="shloka-view">
        <div class="shloka-header">
            <div class="shloka-ref">Shloka ${shloka.id} ${catTag}</div>
            <div class="shloka-chapter-name">${ch ? ch.icon + ' ' + ch.englishName : ''}</div>
        </div>

        <!-- Sanskrit -->
        <div class="shloka-sanskrit-card">
            <div class="shloka-sanskrit-text">${shloka.sanskrit.replace(/\n/g, '<br>')}</div>
            <div class="shloka-transliteration">${shloka.transliteration.replace(/\n/g, '<br>')}</div>
        </div>

        <!-- Word Meanings -->
        ${wordHTML ? `
        <div class="shloka-section">
            <div class="shloka-section-title"><span class="icon">📝</span> Word Meanings</div>
            ${wordHTML}
        </div>` : ''}

        <!-- Translation -->
        <div class="shloka-section">
            <div class="shloka-section-title"><span class="icon">📖</span> Translation</div>
            <p>${shloka.translation}</p>
        </div>

        <!-- Story Context -->
        <div class="shloka-section">
            <div class="shloka-section-title"><span class="icon">⚔️</span> Story Context</div>
            <p>${shloka.storyContext}</p>
        </div>

        <!-- Modern Interpretation -->
        <div class="shloka-section">
            <div class="shloka-section-title"><span class="icon">🌍</span> Modern-Life Interpretation</div>
            <p>${shloka.modernInterpretation}</p>
        </div>

        <!-- Key Takeaway -->
        <div class="shloka-section shloka-takeaway-card">
            <div class="shloka-section-title"><span class="icon">💡</span> Key Takeaway</div>
            <div class="shloka-takeaway-text">"${shloka.takeaway}"</div>
        </div>

        <!-- Memory Aid -->
        <div class="shloka-section shloka-memory-card">
            <div class="shloka-section-title"><span class="icon">🧠</span> Memory Aid</div>
            <p>${shloka.memoryAid}</p>
        </div>

        <!-- Real-Life Application -->
        <div class="shloka-section shloka-application-card">
            <div class="shloka-section-title"><span class="icon">🎯</span> Apply in Your Life</div>
            <p>${shloka.realLifeApplication}</p>
        </div>

        <!-- Mark as Learned -->
        <button class="btn ${isCompleted ? 'btn-secondary shloka-mark-btn completed' : 'btn-primary shloka-mark-btn'}" 
                id="mark-learned-btn"
                onclick="${isCompleted ? '' : `markShlokaLearned('${shloka.id}')`}">
            ${isCompleted ? '✅ Already Learned' : '🎓 Mark as Learned (+10 XP)'}
        </button>

        <!-- Navigation -->
        <div class="shloka-nav">
            ${prev ? `<button class="btn btn-secondary" onclick="window.location.hash='#shloka/${prev.chapter}/${prev.verse}'">← Previous</button>` : '<div></div>'}
            <button class="btn btn-secondary" onclick="window.location.hash='#chapter/${chapter}'">📜 Chapter</button>
            ${next ? `<button class="btn btn-secondary" onclick="window.location.hash='#shloka/${next.chapter}/${next.verse}'">Next →</button>` : '<div></div>'}
        </div>
    </div>`;
}

function markShlokaLearned(shlokaId) {
    if (Storage.isShlokaCompleted(shlokaId)) return;

    Storage.markShlokaCompleted(shlokaId);
    Storage.updateStreak();
    Gamification.awardShlokaXP();

    // Update button
    const btn = document.getElementById('mark-learned-btn');
    if (btn) {
        btn.className = 'btn btn-secondary shloka-mark-btn completed';
        btn.textContent = '✅ Learned!';
        btn.onclick = null;
    }

    // Update nav XP
    updateNavStats();

    // Check chapter completion
    const [ch] = shlokaId.split('.').map(Number);
    const chShlokas = SHLOKAS[ch];
    if (chShlokas) {
        const data = Storage.load();
        const allDone = chShlokas.every(s => data.completedShlokas.includes(s.id));
        if (allDone) {
            Gamification.awardChapterBonus(ch);
        }
    }

    // Sync to server
    syncProgressToServer();
}
