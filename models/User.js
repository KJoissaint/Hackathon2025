const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    faceEncoding: {
        type: [Number], // tableau de nombres (embedding vector)
        default: [],
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);
