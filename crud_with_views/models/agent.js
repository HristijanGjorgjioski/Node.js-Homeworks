const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contry: {
        type: String,
        required: true,
    },
    players: {
        ref: 'player',
        type: Array,
    }
}, { timestamps: true });

module.exports = mongoose.model('agent', agentSchema);
