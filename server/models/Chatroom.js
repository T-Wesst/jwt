const { Schema, model } = require('mongoose');

const ChatroomSchema = new Schema({
  name: String,
  users: [{ type: Schema.ObjectId, ref: 'User' }],
  messages: [{ type: Schema.ObjectId, ref: 'Message' }]
});

module.exports = model('Chatroom', ChatroomSchema);
