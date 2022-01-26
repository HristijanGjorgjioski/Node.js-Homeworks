const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: { type: String },
    year: { type: Number },
    color: { type: String }
})

module.exports = mongoose.model('Car', carSchema);
