// ==========================================
// AUTH VIEW — Login & Signup
// ==========================================

function renderAuth() {
    document.getElementById('main-content').innerHTML = `
    <div class="dashboard" style="padding-top:40px">
        <!-- Welcome Header -->
        <div class="hero-card" style="padding:var(--space-2xl)">
            <div class="om-symbol" style="font-size:56px;animation:om-pulse 2s ease-in-out infinite;text-shadow:0 0 40px rgba(245,158,11,0.4);font-family:var(--font-sanskrit)">ॐ</div>
            <h2 class="hero-title" style="margin-top:var(--space-md)">Gita Journey</h2>
            <p class="text-muted" style="margin-top:var(--space-xs)">Begin your journey to wisdom</p>
        </div>

        <!-- Auth Tabs -->
        <div class="card" style="padding:0;overflow:hidden">
            <div class="auth-tabs">
                <button class="auth-tab active" id="login-tab" onclick="switchAuthTab('login')">Login</button>
                <button class="auth-tab" id="signup-tab" onclick="switchAuthTab('signup')">Sign Up</button>
            </div>

            <!-- Login Form -->
            <div id="login-form" class="auth-form">
                <div class="auth-field">
                    <label>Email</label>
                    <input type="email" id="login-email" placeholder="your@email.com" autocomplete="email">
                </div>
                <div class="auth-field">
                    <label>Password</label>
                    <input type="password" id="login-password" placeholder="Enter password" autocomplete="current-password">
                </div>
                <div id="login-error" class="auth-error hidden"></div>
                <button class="btn btn-primary btn-block btn-lg" id="login-btn" onclick="handleLogin()">
                    🔓 Login
                </button>
            </div>

            <!-- Signup Form -->
            <div id="signup-form" class="auth-form hidden">
                <div class="auth-field">
                    <label>Display Name</label>
                    <input type="text" id="signup-name" placeholder="Your name" autocomplete="name">
                </div>
                <div class="auth-field">
                    <label>Email</label>
                    <input type="email" id="signup-email" placeholder="your@email.com" autocomplete="email">
                </div>
                <div class="auth-field">
                    <label>Password</label>
                    <input type="password" id="signup-password" placeholder="Min 6 characters" autocomplete="new-password">
                </div>
                <div id="signup-error" class="auth-error hidden"></div>
                <button class="btn btn-primary btn-block btn-lg" id="signup-btn" onclick="handleSignup()">
                    🚀 Start Journey
                </button>
            </div>
        </div>
    </div>`;

    // Enter key support
    setTimeout(() => {
        document.getElementById('login-password')?.addEventListener('keydown', e => {
            if (e.key === 'Enter') handleLogin();
        });
        document.getElementById('signup-password')?.addEventListener('keydown', e => {
            if (e.key === 'Enter') handleSignup();
        });
    }, 100);
}

function switchAuthTab(tab) {
    document.getElementById('login-tab').classList.toggle('active', tab === 'login');
    document.getElementById('signup-tab').classList.toggle('active', tab === 'signup');
    document.getElementById('login-form').classList.toggle('hidden', tab !== 'login');
    document.getElementById('signup-form').classList.toggle('hidden', tab !== 'signup');
    // Clear errors
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('signup-error').classList.add('hidden');
}

async function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    if (!email || !password) {
        errorEl.textContent = 'Please fill in all fields';
        errorEl.classList.remove('hidden');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Logging in...';

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Login failed');
        }

        // Save token and user info
        localStorage.setItem('gita_token', data.token);
        localStorage.setItem('gita_user', JSON.stringify(data.user));

        // Load progress from server
        await syncProgressFromServer();

        // Enter app
        window.app.onAuthSuccess();
    } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.textContent = '🔓 Login';
    }
}

async function handleSignup() {
    const displayName = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const errorEl = document.getElementById('signup-error');
    const btn = document.getElementById('signup-btn');

    if (!email || !password) {
        errorEl.textContent = 'Email and password are required';
        errorEl.classList.remove('hidden');
        return;
    }

    if (password.length < 6) {
        errorEl.textContent = 'Password must be at least 6 characters';
        errorEl.classList.remove('hidden');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account...';

    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, displayName: displayName || 'Seeker' })
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Signup failed');
        }

        // Save token and user info
        localStorage.setItem('gita_token', data.token);
        localStorage.setItem('gita_user', JSON.stringify(data.user));

        // Initialize fresh progress
        Storage.resetAll();

        // Enter app
        window.app.onAuthSuccess();
    } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.textContent = '🚀 Start Journey';
    }
}

function getAuthToken() {
    return localStorage.getItem('gita_token');
}

function getAuthUser() {
    try {
        return JSON.parse(localStorage.getItem('gita_user'));
    } catch { return null; }
}

function isLoggedIn() {
    return !!getAuthToken();
}

function logout() {
    localStorage.removeItem('gita_token');
    localStorage.removeItem('gita_user');
    window.location.hash = '#auth';
    window.location.reload();
}

async function syncProgressFromServer() {
    const token = getAuthToken();
    if (!token) return;
    try {
        const res = await fetch('/api/progress', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        if (res.ok) {
            const serverProgress = await res.json();
            // Merge server progress into local storage
            const local = Storage.load();
            const merged = { ...local, ...serverProgress };
            // Keep the higher values for cumulative fields
            merged.xp = Math.max(local.xp || 0, serverProgress.xp || 0);
            merged.bestStreak = Math.max(local.bestStreak || 0, serverProgress.bestStreak || 0);
            merged.totalQuizzesTaken = Math.max(local.totalQuizzesTaken || 0, serverProgress.totalQuizzesTaken || 0);
            merged.totalCorrectAnswers = Math.max(local.totalCorrectAnswers || 0, serverProgress.totalCorrectAnswers || 0);
            // Merge arrays (union)
            merged.completedShlokas = [...new Set([...(local.completedShlokas || []), ...(serverProgress.completedShlokas || [])])];
            merged.achievements = [...new Set([...(local.achievements || []), ...(serverProgress.achievements || [])])];
            merged.chaptersCompleted = [...new Set([...(local.chaptersCompleted || []), ...(serverProgress.chaptersCompleted || [])])];
            Storage.save(merged);
        }
    } catch (err) {
        console.log('Could not sync from server, using local data');
    }
}

async function syncProgressToServer() {
    const token = getAuthToken();
    if (!token) return;
    try {
        const data = Storage.load();
        await fetch('/api/progress', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        });
    } catch (err) {
        console.log('Could not sync to server');
    }
}
