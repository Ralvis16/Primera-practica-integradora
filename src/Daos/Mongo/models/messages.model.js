const mongoose = require('mongoose');
const { Schema } = mongoose;
const messagesCollection = 'messages';

const messageSchema = new Schema({
    user: { type: String, max:100, required: true },
    message: { type: String, max: 100, required: true },
});

const messageModel = mongoose.model(messagesCollection, messageSchema);

module.exports = { messageModel };