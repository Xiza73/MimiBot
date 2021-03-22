const { Schema, Mongoose } = require('mongoose');
const Schema = Schema();

const Poem = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('poems', Poem)