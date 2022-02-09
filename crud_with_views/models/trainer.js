const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contry: {
        type: String,
        required: true,
    },
    club: {
        ref: 'club',
        type: mongoose.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('trainer', trainerSchema);
