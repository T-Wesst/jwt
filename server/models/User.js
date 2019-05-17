const { Schema, model } = require('mongoose');
const { checkPassword, hashPassword } = require('../utilities/passwordService');

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  chatrooms: [{ type: Schema.ObjectId, ref: 'Chatroom' }],
  messages: [{ type: Schema.ObjectId, ref: 'Message' }],
  friends: [{ type: Schema.ObjectId, ref: this }],
  profileImage: String
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    let hashed = await hashPassword(this.password);
    this.password = hashed;
    next();
  } catch (err) {
    if (err) throw err;
  }
});

module.exports = model('User', UserSchema);
