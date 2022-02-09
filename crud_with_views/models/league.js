const mongoose = require('mongoose');

const leagueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contry: {
        type: String,
        required: true,
    },
    found_date: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('league', leagueSchema);
