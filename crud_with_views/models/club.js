const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    player: {
        ref: 'player',
        type: Array
        // type: mongoose.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('club', clubSchema);
