const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    displayName: {
        type: String,
        default: 'Seeker'
    },
    progress: {
        completedShlokas: { type: [String], default: [] },
        xp: { type: Number, default: 0 },
        streak: { type: Number, default: 0 },
        bestStreak: { type: Number, default: 0 },
        lastActiveDate: { type: String, default: null },
        achievements: { type: [String], default: [] },
        quizScores: { type: Array, default: [] },
        dailyShlokaDate: { type: String, default: null },
        dailyShlokaId: { type: String, default: null },
        pace: { type: String, default: 'balanced' },
        totalQuizzesTaken: { type: Number, default: 0 },
        totalCorrectAnswers: { type: Number, default: 0 },
        chaptersCompleted: { type: [Number], default: [] }
    }
}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
