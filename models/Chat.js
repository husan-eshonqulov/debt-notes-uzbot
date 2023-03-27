const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  memberId: {
    type: [Number],
    default: [],
  },
});

module.exports = mongoose.model('Chat', ChatSchema);
