const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String}
});

module.exports = Type = mongoose.model('type', typeSchema)
