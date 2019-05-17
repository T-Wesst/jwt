const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  chatrooms: [{ type: Schema.ObjectId, ref: 'Chatroom' }],
  messages: [{ type: Schema.ObjectId, ref: 'Message' }],
  profileImage: String
});

module.exports = model('User', UserSchema);
