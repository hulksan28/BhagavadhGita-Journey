// ==========================================
// LEADERBOARD VIEW
// ==========================================

async function renderLeaderboard() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
    <div class="dashboard" style="padding-bottom:40px">
        <div class="section-header" style="margin-bottom:var(--space-sm)">
            <h3 class="section-title">🏆 Leaderboard</h3>
        </div>
        <p class="text-muted" style="text-align:center;margin-bottom:var(--space-lg)">See how fellow seekers progress on their journey</p>
        <div id="leaderboard-content" style="text-align:center">
            <div class="loading-dots">Loading rankings...</div>
        </div>
    </div>`;

    try {
        const res = await fetch('/api/leaderboard');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();

        if (!data.length) {
            document.getElementById('leaderboard-content').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🧘</div>
                <h3 class="empty-state-title">No seekers yet</h3>
                <p class="empty-state-desc">Be the first to start learning!</p>
            </div>`;
            return;
        }

        // Current user's name
        const currentUser = getAuthUser();
        const currentName = currentUser ? currentUser.displayName : '';

        // Rank tiers for icon/color
        const getRankInfo = (xp) => {
            if (xp >= 5000) return { icon: '👑', title: 'Master', cls: 'rank-master' };
            if (xp >= 3000) return { icon: '🌟', title: 'Enlightened', cls: 'rank-enlightened' };
            if (xp >= 2000) return { icon: '📜', title: 'Sage', cls: 'rank-sage' };
            if (xp >= 1200) return { icon: '🎓', title: 'Scholar', cls: 'rank-scholar' };
            if (xp >= 600) return { icon: '⚔️', title: 'Warrior', cls: 'rank-warrior' };
            if (xp >= 250) return { icon: '🧘', title: 'Practitioner', cls: 'rank-practitioner' };
            if (xp >= 50) return { icon: '📖', title: 'Student', cls: 'rank-student' };
            return { icon: '🔍', title: 'Seeker', cls: 'rank-seeker' };
        };

        // Top 3 podium
        let podiumHTML = '';
        if (data.length >= 1) {
            const podiumOrder = [];
            if (data[1]) podiumOrder.push({ ...data[1], podiumClass: 'silver' });
            podiumOrder.push({ ...data[0], podiumClass: 'gold' });
            if (data[2]) podiumOrder.push({ ...data[2], podiumClass: 'bronze' });

            podiumHTML = `<div class="podium">
                ${podiumOrder.map(u => {
                const ri = getRankInfo(u.xp);
                const isMe = u.displayName === currentName;
                return `
                    <div class="podium-item ${u.podiumClass} ${isMe ? 'is-me' : ''}">
                        <div class="podium-rank-num">#${u.rank}</div>
                        <div class="podium-avatar">${ri.icon}</div>
                        <div class="podium-name">${u.displayName}${isMe ? ' (You)' : ''}</div>
                        <div class="podium-xp">⚡ ${u.xp} XP</div>
                        <div class="podium-stats">
                            <span>🔥 ${u.streak}</span>
                            <span>📖 ${u.shlokasLearned}</span>
                        </div>
                    </div>`;
            }).join('')}
            </div>`;
        }

        // Remaining rows
        const remaining = data.slice(3);
        let rowsHTML = '';
        for (const u of remaining) {
            const ri = getRankInfo(u.xp);
            const isMe = u.displayName === currentName;
            rowsHTML += `
            <div class="lb-row ${isMe ? 'is-me' : ''}">
                <div class="lb-rank">${u.rank}</div>
                <div class="lb-avatar-sm">${ri.icon}</div>
                <div class="lb-info">
                    <div class="lb-name">${u.displayName}${isMe ? ' <span class="lb-you">(You)</span>' : ''}</div>
                    <div class="lb-rank-title">${ri.title}</div>
                </div>
                <div class="lb-stats-col">
                    <div class="lb-xp">⚡ ${u.xp}</div>
                    <div class="lb-meta">🔥 ${u.streak} · 📖 ${u.shlokasLearned} · 📜 ${u.chaptersCompleted} ch</div>
                </div>
            </div>`;
        }

        document.getElementById('leaderboard-content').innerHTML = `
            ${podiumHTML}
            ${rowsHTML ? `<div class="lb-list">${rowsHTML}</div>` : ''}
        `;
    } catch (err) {
        document.getElementById('leaderboard-content').innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">⚠️</div>
            <h3 class="empty-state-title">Couldn't load leaderboard</h3>
            <p class="empty-state-desc">Check your connection and try again.</p>
            <button class="btn btn-primary" onclick="renderLeaderboard()">Retry</button>
        </div>`;
    }
}
