const [Schema, model] = require('mongoose');

const MessageSchema = new Schema({
  content: String,
  userId: { type: Schema.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

module.exports = model('Message', MessageSchema);
