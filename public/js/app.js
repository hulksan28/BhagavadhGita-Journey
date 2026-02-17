// ==========================================
// APP — Router, State, Initialization
// ==========================================

window.app = {
    currentView: null,

    init() {
        // Handle routing
        window.addEventListener('hashchange', () => this.route());

        // Hide loading screen
        setTimeout(() => {
            const ls = document.getElementById('loading-screen');
            if (ls) {
                ls.classList.add('fade-out');
                setTimeout(() => ls.remove(), 600);
            }

            // Check auth status
            if (isLoggedIn()) {
                this.onAuthSuccess();
            } else {
                this.showAuth();
            }
        }, 1600);
    },

    showAuth() {
        // Hide nav elements
        document.getElementById('top-nav').classList.add('hidden');
        document.getElementById('bottom-nav').classList.add('hidden');
        document.getElementById('main-content').style.padding = '20px';
        document.getElementById('main-content').style.paddingTop = '20px';
        window.location.hash = '#auth';
        renderAuth();
    },

    onAuthSuccess() {
        // Show nav elements
        document.getElementById('top-nav').classList.remove('hidden');
        document.getElementById('bottom-nav').classList.remove('hidden');
        document.getElementById('nav-logout').classList.remove('hidden');
        document.getElementById('main-content').style.padding = '';
        document.getElementById('main-content').style.paddingTop = '';

        // Update nav stats
        updateNavStats();

        // Route to dashboard
        if (!window.location.hash || window.location.hash === '#auth') {
            window.location.hash = '#dashboard';
        } else {
            this.route();
        }
    },

    route() {
        const hash = window.location.hash.slice(1) || 'dashboard';
        const [view, ...params] = hash.split('/');

        // Auth guard
        if (view !== 'auth' && !isLoggedIn()) {
            this.showAuth();
            return;
        }

        // If logged in and on auth, redirect
        if (view === 'auth' && isLoggedIn()) {
            window.location.hash = '#dashboard';
            return;
        }

        if (view === 'auth') {
            renderAuth();
            return;
        }

        // Update nav
        this.updateNav(view, params);

        // Scroll to top
        window.scrollTo(0, 0);

        // Animate content
        const main = document.getElementById('main-content');
        main.style.animation = 'none';
        main.offsetHeight;
        main.style.animation = 'fadeIn 0.3s ease';

        switch (view) {
            case 'dashboard':
                this.currentView = 'dashboard';
                renderDashboard();
                break;
            case 'journey':
                this.currentView = 'journey';
                renderJourneyMap();
                break;
            case 'chapter':
                this.currentView = 'chapter';
                renderChapter(parseInt(params[0]));
                break;
            case 'shloka':
                this.currentView = 'shloka';
                renderShloka(parseInt(params[0]), parseInt(params[1]));
                break;
            case 'quiz':
                this.currentView = 'quiz';
                const quizParam = params[0] === 'daily' ? 'daily' : parseInt(params[0]);
                renderQuiz(quizParam);
                break;
            case 'profile':
                this.currentView = 'profile';
                renderProfile();
                break;
            case 'leaderboard':
                this.currentView = 'leaderboard';
                renderLeaderboard();
                break;
            default:
                window.location.hash = '#dashboard';
        }
    },

    updateNav(view, params) {
        // Update bottom nav active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            const itemView = item.dataset.view;
            if (itemView === view || (view === 'chapter' && itemView === 'journey') || (view === 'shloka' && itemView === 'journey')) {
                item.classList.add('active');
            }
        });

        // Update top nav
        const backBtn = document.getElementById('nav-back');
        const title = document.getElementById('nav-title');

        if (view === 'dashboard' || view === 'journey' || view === 'profile' || view === 'leaderboard') {
            backBtn.classList.add('hidden');
            title.textContent = view === 'dashboard' ? 'Gita Journey' :
                view === 'journey' ? 'Journey Map' :
                    view === 'leaderboard' ? 'Leaderboard' : 'Profile';
        } else if (view === 'chapter') {
            backBtn.classList.remove('hidden');
            const ch = CHAPTERS.find(c => c.id === parseInt(params[0]));
            title.textContent = ch ? `Ch. ${ch.id}` : 'Chapter';
        } else if (view === 'shloka') {
            backBtn.classList.remove('hidden');
            title.textContent = `Shloka ${params[0]}.${params[1]}`;
        } else if (view === 'quiz') {
            backBtn.classList.remove('hidden');
            title.textContent = 'Quiz Challenge';
        } else {
            backBtn.classList.add('hidden');
            title.textContent = 'Gita Journey';
        }
    },

    closeLevelUpModal() {
        document.getElementById('level-up-modal').classList.add('hidden');
    }
};

function updateNavStats() {
    const data = Storage.load();
    document.getElementById('nav-xp-value').textContent = data.xp;
    document.getElementById('nav-streak-value').textContent = data.streak;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.app.init();
});
